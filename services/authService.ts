
import { UserProfile, UserTier } from '../types';
import { auth as firebaseAuth, db } from './firebaseConfig';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateEmail,
  GoogleAuthProvider,
  signInWithPopup,
  User
} from "firebase/auth";
import { ref, set, get, update } from "firebase/database";

const CURRENT_USER_KEY = 'latitude_current_user';

const mapFirebaseUserToProfile = (user: User, isAdmin: boolean = false): UserProfile => ({
  id: user.uid,
  name: user.displayName || user.email?.split('@')[0] || 'Explorer',
  handle: `@${user.uid.substring(0, 6).toLowerCase()}`,
  email: user.email || '',
  bio: 'Latitude Citizen.',
  avatarUrl: user.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.uid}`,
  bannerUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000',
  tier: UserTier.FAN_CLUB,
  isAdmin: isAdmin || user.email === 'cloudshipent@protonmail.com', // Auto-admin for the specific email
  socials: {}
});

export const authService = {
  login: async (email: string, pass: string): Promise<UserProfile> => {
    // Super Admin Bypass
    if (email === 'admin' && pass === '3000') {
      const admin: UserProfile = {
        id: 'super_admin',
        name: 'Latitude Administration',
        handle: '@admin',
        email: 'cloudshipent@protonmail.com',
        bio: 'Root access to the Latitude ecosystem.',
        avatarUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=admin',
        bannerUrl: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000',
        tier: UserTier.LABEL_EXEC,
        isAdmin: true,
        socials: { twitter: '@latitude_admin' }
      };
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(admin));
      return admin;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, pass);
      const user = userCredential.user;
      
      const userRef = ref(db, 'users/' + user.uid);
      const snapshot = await get(userRef);
      let profile: UserProfile;

      if (snapshot.exists()) {
        profile = snapshot.val() as UserProfile;
      } else {
        profile = mapFirebaseUserToProfile(user);
        await set(userRef, profile);
      }

      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(profile));
      return profile;
    } catch (error: any) {
      throw new Error(error.message || 'Access denied.');
    }
  },

  loginWithGoogle: async (): Promise<UserProfile> => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(firebaseAuth, provider);
      const user = result.user;

      const userRef = ref(db, 'users/' + user.uid);
      const snapshot = await get(userRef);
      let profile: UserProfile;

      if (snapshot.exists()) {
        profile = snapshot.val() as UserProfile;
      } else {
        profile = mapFirebaseUserToProfile(user);
        await set(userRef, profile);
      }

      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(profile));
      return profile;
    } catch (error: any) {
      throw new Error(error.message || 'Google authentication failed.');
    }
  },

  register: async (data: any): Promise<UserProfile> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(firebaseAuth, data.email, data.password);
      const user = userCredential.user;
      
      const newUser = mapFirebaseUserToProfile(user);
      newUser.name = data.name || newUser.name;
      if (data.handle) newUser.handle = data.handle.startsWith('@') ? data.handle : `@${data.handle}`;

      await set(ref(db, 'users/' + user.uid), newUser);

      await sendEmailVerification(user);

      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
      return newUser;
    } catch (error: any) {
      throw new Error(error.message || 'Registration failed.');
    }
  },

  sendResetEmail: async (email: string) => {
    await sendPasswordResetEmail(firebaseAuth, email);
  },

  changeEmail: async (newEmail: string) => {
    const user = firebaseAuth.currentUser;
    if (user) {
      await updateEmail(user, newEmail);
      
      await update(ref(db, 'users/' + user.uid), { email: newEmail });

      const current = authService.getCurrentUser();
      if (current) {
        current.email = newEmail;
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(current));
      }
    }
  },

  updateProfile: async (updates: Partial<UserProfile>) => {
    const user = firebaseAuth.currentUser;
    if (user) {
      await update(ref(db, 'users/' + user.uid), updates);
      
      const current = authService.getCurrentUser();
      if (current) {
        const updated = { ...current, ...updates };
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(updated));
      }
    }
  },

  logout: async () => {
    await signOut(firebaseAuth);
    localStorage.removeItem(CURRENT_USER_KEY);
  },

  getCurrentUser: (): UserProfile | null => {
    const data = localStorage.getItem(CURRENT_USER_KEY);
    return data ? JSON.parse(data) : null;
  },

  subscribeToAuth: (callback: (user: UserProfile | null) => void) => {
    return onAuthStateChanged(firebaseAuth, async (user) => {
      if (!user) {
        const currentData = localStorage.getItem(CURRENT_USER_KEY);
        if (currentData) {
          const current = JSON.parse(currentData);
          if (current.id !== 'super_admin') {
            localStorage.removeItem(CURRENT_USER_KEY);
            callback(null);
          } else {
            callback(current);
          }
        } else {
          callback(null);
        }
      } else {
        const userRef = ref(db, 'users/' + user.uid);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          const profile = snapshot.val() as UserProfile;
          localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(profile));
          callback(profile);
        } else {
          const profile = mapFirebaseUserToProfile(user);
          callback(profile);
        }
      }
    });
  }
};
