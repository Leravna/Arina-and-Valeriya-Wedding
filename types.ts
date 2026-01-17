
export interface WeddingInfo {
  coupleNames: string;
  date: string;
  time: string;
  location: string;
  address: string;
  receptionLocation: string;
  receptionAddress: string;
  dressCode: string;
  registryLink: string;
  rsvpDeadline: string;
  story: string;
  schedule: Array<{
    time: string;
    event: string;
    description: string;
  }>;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
