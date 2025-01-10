import { mockEvents } from '../data/mockEvents';

let events = [...mockEvents];

export const resolvers = {
  Query: {
    events: (_: unknown, args: { page: number; pageSize: number; type: String; }) => {
      if (args.page < 0) {
        throw new Error("Invalid page");
      }
      if (args.pageSize < 1) {
        throw new Error("Invalid page size");
      }

      let filteredEvents = events;
      if (args.type) {
        filteredEvents = filteredEvents.filter(event => event.type === args.type);
      }

      const start = args.page * args.pageSize;
      const end = start + args.pageSize;
      const paginatedEvents = filteredEvents.slice(start, end);

      return {
        total: filteredEvents.length,
        page: args.page,
        pageSize: args.pageSize,
        events: paginatedEvents,
      };
    },
    event: (_: unknown, args: { id: number; }) => {
      const event = events.find(event => event.id == args.id);
      if (!event) {
        throw new Error(`Event with id ${args.id} not found`);
      }
      return event;
    },
  },
  Mutation: {
    addEvent: (_: unknown, args: { name: string; type: string }) => {
      const newEvent = {
        id: events.length + 1,
        name: args.name,
        type: args.type,
      };
      events.push(newEvent);
      return newEvent;
    },
    updateEvent: (_: unknown, args: { id: number, name: string; type: string }) => {
      const updatedEvent = events.find(event => event.id == args.id);
      if (!updatedEvent) {
        throw new Error (`Event with id ${args.id} not found`);
      }
      if (args.name) {
        updatedEvent.name = args.name;
      }
      if (args.type) {
        updatedEvent.type = args.type;
      }
      const index = events.findIndex(event => event.id == args.id);
      events[index] = updatedEvent;
      return updatedEvent;
    },
    deleteEvent: (_: unknown, args: { id: number }) => {
      const deletedEvent = events.find(event => event.id == args.id);
      if (!deletedEvent) {
        throw new Error (`Event with id ${args.id} not found`);
      }
      const index = events.findIndex(event => event.id == args.id);
      events.splice(index,1);
      return deletedEvent;
    },
  },
};
