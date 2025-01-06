export interface Event {
  id: number;
  name: string;
  type: string;
}

export const mockEvents: Event[] = [
  { id: 1, name: "Tech Conference 2024", type: "Exhibition" },
  { id: 2, name: "Event B", type: "Workshop" },
  { id: 3, name: "Event C", type: "Conference" },
  { id: 4, name: "Startup Meetup", type: "Corporate" },
  { id: 5, name: "AI Summit", type: "Exhibition" },
  { id: 6, name: "Event F", type: "Conference" },
];
