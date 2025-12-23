
import { db } from './firebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import { NFTItem } from '../types';

export const assetService = {
  /**
   * Mints a new asset and saves it to Firestore.
   * If the asset type is 'music', it is saved to the user's 'audio' subcollection.
   */
  mintAsset: async (userId: string, assetData: Omit<NFTItem, 'id'>): Promise<NFTItem> => {
    try {
      // Determine the collection path based on the requirement
      // If it's music (a song), save to users/{userId}/audio
      const collectionPath = assetData.type === 'music' 
        ? `users/${userId}/audio` 
        : `assets`; // Fallback for other types
      
      const colRef = collection(db, collectionPath);
      
      const payload = {
        ...assetData,
        creatorId: userId,
        ownerId: userId,
        createdAt: Date.now(), // Store as number for easy sorting/mapping
      };

      const docRef = await addDoc(colRef, payload);
      
      return {
        ...payload,
        id: docRef.id
      } as NFTItem;
    } catch (error: any) {
      console.error("Asset Minting Error:", error);
      throw new Error(error.message || "Failed to deploy asset to the network.");
    }
  }
};
