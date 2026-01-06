
import { auth, db } from '../firebase';
import { User, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, signInAnonymously } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { UserProfile, UserTier } from '../types';

const MOCK_USERS: { [key: string]: UserProfile } = {
  'fan@latitude.com': {
    id: 'fan-user-123',
    name: 'Alex Fan',
    handle: 'alexfan',
    bio: 'Just a dedicated fan of great music.',
    avatarUrl: 'https://picsum.photos/seed/alexfan/200',
    bannerUrl: 'https://picsum.photos/seed/alexfan-banner/1500/500',
    tier: UserTier.FAN_CLUB,
    walletAddress: 'FjT8...hNpc',
    socials: { twitter: '@alexfanmusic', instagram: 'alexfanmusic' }
  },
  'exec@latitude.com': {
    id: 'exec-user-456',
    name: 'Samantha Exec',
    handle: 'sam_exec',
    bio: 'Executive at a leading music label.',
    avatarUrl: 'https://picsum.photos/seed/samexec/200',
    bannerUrl: 'https://picsum.photos/seed/samexec-banner/1500/500',
    tier: UserTier.LABEL_EXEC,
    walletAddress: '9uFe...pQxR',
    socials: { twitter: '@sam_exec', instagram: 'samantha_exec' },
    isAdmin: true
  }
};

class AuthService {
  private currentUser: UserProfile | null = null;
  private googleProvider = new GoogleAuthProvider();

  constructor() {
    const storedUser = localStorage.getItem('latitude_user');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
    
    onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        this.fetchUserProfile(user.uid).then(profile => {
          this.currentUser = profile;
          this.broadcastAuthChange(profile);
        });
      } else {
        this.currentUser = null;
        this.broadcastAuthChange(null);
      }
    });
  }

  private validatePassword(password: string): boolean {
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})$/;
    return regex.test(password);
  }

  async login(email: string, password: string): Promise<UserProfile> {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userProfile = await this.fetchUserProfile(user.uid);
      if (!userProfile) {
        const mockUser = MOCK_USERS[email];
        if (mockUser) {
          await this.createUserProfile(user.uid, mockUser);
          this.currentUser = mockUser;
          localStorage.setItem('latitude_user', JSON.stringify(mockUser));
          return mockUser;
        }
        throw new Error('User profile not found.');
      }
      this.currentUser = userProfile;
      localStorage.setItem('latitude_user', JSON.stringify(userProfile));
      return userProfile;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }

  async signup(email: string, password: string, name: string): Promise<UserProfile> {
     if (!this.validatePassword(password)) {
      throw new Error(
        'Password must be at least 8 characters long, contain an uppercase letter, a number, and a special character.'
      );
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const newUserProfile: UserProfile = {
        id: user.uid,
        name,
        handle: email.split('@')[0],
        email,
        bio: 'New Latitude user',
        avatarUrl: `https://picsum.photos/seed/${user.uid}/200`,
        bannerUrl: `https://picsum.photos/seed/${user.uid}-banner/1500/500`,
        tier: UserTier.LISTENER,
        socials: {},
      };
      await this.createUserProfile(user.uid, newUserProfile);
      this.currentUser = newUserProfile;
      localStorage.setItem('latitude_user', JSON.stringify(newUserProfile));
      return newUserProfile;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  }
  
  async signInWithGoogle(): Promise<UserProfile> {
    try {
      const result = await signInWithPopup(auth, this.googleProvider);
      const user = result.user;

      let userProfile = await this.fetchUserProfile(user.uid);

      if (!userProfile) {
        const newUserProfile: UserProfile = {
          id: user.uid,
          name: user.displayName || 'Google User',
          handle: user.email?.split('@')[0] || user.uid,
          email: user.email || undefined,
          bio: 'Joined via Google',
          avatarUrl: user.photoURL || `https://picsum.photos/seed/${user.uid}/200`,
          bannerUrl: `https://picsum.photos/seed/${user.uid}-banner/1500/500`,
          tier: UserTier.LISTENER,
          socials: {},
        };
        await this.createUserProfile(user.uid, newUserProfile);
        userProfile = newUserProfile;
      }

      this.currentUser = userProfile;
      localStorage.setItem('latitude_user', JSON.stringify(userProfile));
      return userProfile;
    } catch (error) {
      console.error("Google sign-in error:", error);
      throw error;
    }
  }
  
  async signInAsGuest(): Promise<UserProfile> {
    try {
      const userCredential = await signInAnonymously(auth);
      const user = userCredential.user;

      let userProfile = await this.fetchUserProfile(user.uid);

      if (!userProfile) {
        const guestProfile: UserProfile = {
          id: user.uid,
          name: 'Guest User',
          handle: `guest_${user.uid.substring(0, 5)}`,
          bio: 'Exploring Latitude as a guest.',
          avatarUrl: `https://picsum.photos/seed/guest/200`,
          bannerUrl: `https://picsum.photos/seed/guest-banner/1500/500`,
          tier: UserTier.LISTENER,
          socials: {},
        };
        await this.createUserProfile(user.uid, guestProfile);
        userProfile = guestProfile;
      }

      this.currentUser = userProfile;
      localStorage.setItem('latitude_user', JSON.stringify(userProfile));
      return userProfile;
    } catch (error) {
      console.error("Guest sign-in error:", error);
      throw error;
    }
  }

  async logout(): Promise<void> {
    await signOut(auth);
    this.currentUser = null;
    localStorage.removeItem('latitude_user');
  }

  getCurrentUser(): UserProfile | null {
    return this.currentUser;
  }

  async fetchUserProfile(uid: string): Promise<UserProfile | null> {
    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data() as UserProfile;
      }
      return null;
    } catch (error) {
      console.error("Error fetching user profile:", error);
      return null;
    }
  }

  async createUserProfile(uid: string, data: Omit<UserProfile, 'id'>): Promise<void> {
    try {
      const userRef = doc(db, "users", uid);
      await setDoc(userRef, { ...data, id: uid });
    } catch (error) {
      console.error("Error creating user profile:", error);
    }
  }

  async updateProfile(data: Partial<UserProfile>): Promise<void> {
    if (this.currentUser) {
      try {
        const userRef = doc(db, "users", this.currentUser.id);
        await setDoc(userRef, data, { merge: true });
        this.currentUser = { ...this.currentUser, ...data };
        localStorage.setItem('latitude_user', JSON.stringify(this.currentUser));
        this.broadcastAuthChange(this.currentUser);
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    }
  }
  
  private subscribers: ((user: UserProfile | null) => void)[] = [];

  subscribeToAuth(callback: (user: UserProfile | null) => void): () => void {
    this.subscribers.push(callback);
    callback(this.currentUser);
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== callback);
    };
  }

  private broadcastAuthChange(user: UserProfile | null) {
    this.subscribers.forEach(sub => sub(user));
  }
}

export const authService = new AuthService();
