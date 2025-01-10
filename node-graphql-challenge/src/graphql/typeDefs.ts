import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Event {
    id: ID!
    name: String!
    type: String!
  }

  type EventsResult {
    total: Int!
    page: Int!
    pageSize: Int!
    events: [Event!]!
  }

  type Query {
    events(page: Int!, pageSize: Int!, type: String): EventsResult!
    event(id: Int): Event!
  }

  type Mutation {
    addEvent(name: String!, type: String!): Event
    updateEvent(id: ID! name: String, type: String): Event
    deleteEvent(id: ID!): Event
  }
`;
