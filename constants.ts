
import { WeddingInfo } from './types';

export const WEDDING_DATA: WeddingInfo = {
  coupleNames: "Arina & Valeriya",
  date: "September 5th, 2026",
  time: "6:00 PM",
  location: "PeaksView Chalets",
  address: "Kovačka Dolina bb, 84220, Montenegro",
  receptionLocation: "PeaksView Chalets",
  receptionAddress: "Kovačka Dolina bb, 84220, Montenegro",
  dressCode: "Black Tie",
  registryLink: "https://example.com/registry",
  rsvpDeadline: "May 5th, 2026",
  schedule: [
    { time: "6:00 PM", event: "The Ceremony"},
    { time: "7:00 PM", event: "Cocktails", description: "Drinks and appetizers in the courtyard." },
    { time: "7:30 PM", event: "Dinner & Dancing", description: "Homecooked Balkan food surrounded by mountains." },
    { time: "11:00 PM", event: "Gulyanka", description: "DJ" }
  ]
};
