import { mockEvents } from '../data/mockEvents';

let events = [...mockEvents];

export const resolvers = {
  Query: {
    events: (_: unknown, args: { page: number; pageSize: number; type: String; }) => events,
  },
};
