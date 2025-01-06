import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Event {
    id: ID!
    name: String!
    type: String!
  }

  type Query {
    events(page: Int, pageSize: Int, type: String): [Event!]!
  }

`;
