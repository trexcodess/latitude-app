
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
  ADMIN = 'ADMIN',
  USER_MANAGEMENT = 'USER_MANAGEMENT'
}

export enum UserTier {
  LISTENER = 'LISTENER',
  FAN_CLUB = 'FAN_CLUB',
  LABEL_EXEC = 'LABEL_EXEC',
  DJ_PRO = 'DJ_PRO'
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

export interface BattleCompetitor {
  id: string;
  name: string;
  avatar: string;
  votes: number;
  currentLyrics?: string;
}

export type BattlePhase = 'IDLE' | 'ROUND_1' | 'ROUND_2' | 'VOTING' | 'RESULT';

export interface BattleSession {
  id: string;
  competitors: [BattleCompetitor, BattleCompetitor];
  djName: string;
  activeDjId?: string;
  isLive: boolean;
  startTime: number;
  status: 'live' | 'upcoming' | 'ended';
  phase: BattlePhase;
  timer: number;
  bpm: number;
  prizePool: number;
  disputeStatus?: 'clear' | 'flagged' | 'auditing';
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

export interface GatedContent {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  type: 'download' | 'video' | 'audio';
  requiredNftId: string;
}
