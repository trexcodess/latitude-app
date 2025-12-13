
export enum ViewState {
  HOME = 'HOME',
  MARKETPLACE = 'MARKETPLACE',
  CREATE = 'CREATE',
  SOCIAL = 'SOCIAL',
  PROFILE = 'PROFILE',
  AUTH = 'AUTH',
  PRICING = 'PRICING',
  HELP = 'HELP',
  CREATORS = 'CREATORS',
  BACKSTAGE = 'BACKSTAGE',
  ADMIN = 'ADMIN'
}

export enum UserTier {
  LISTENER = 'LISTENER', // Free
  FAN_CLUB = 'FAN_CLUB', // Paid $9.99
  LABEL_EXEC = 'LABEL_EXEC' // Premium
}

export interface CollaboratorSplit {
  address: string;
  role: string;
  percentage: number;
}

export interface NFTItem {
  id: string;
  title: string;
  artist: string;
  price: number;
  type: 'music' | 'video' | 'art';
  imageUrl: string;
  mediaUrl?: string; 
  description: string;
  creatorId?: string;
  ownerId?: string;
  createdAt?: number;
  splits?: CollaboratorSplit[];
  isBackstageUnlocked?: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  handle: string;
  email?: string;
  bio: string;
  avatarUrl: string;
  bannerUrl: string;
  tier: UserTier;
  walletAddress?: string;
  socials: {
    twitter?: string;
    instagram?: string;
    soundcloud?: string;
  };
  isAdmin?: boolean;
}

export interface ChatMessage {
  id: string;
  user: string;
  text: string;
  timestamp: number;
  isSystem?: boolean;
}

export enum Web3Status {
  DISCONNECTED = 'DISCONNECTED',
  CONNECTING = 'CONNECTING',
  CONNECTED = 'CONNECTED'
}

/**
 * GatedContent represents resources that are unlocked only by holding specific NFTs.
 */
export interface GatedContent {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  type: 'download' | 'video' | 'audio';
  requiredNftId: string;
}
