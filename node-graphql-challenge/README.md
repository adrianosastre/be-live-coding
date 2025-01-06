# GraphQL Challenge - Node (TypeScript)

## Setup Instructions

### Prerequisites
- Node.js (v16 or later)
- npm (v8 or later)

### Installation Steps
1. Clone this repository or download the files.
2. Install dependencies:
   ```bash
   npm install

The live coding can be done with screen sharing.

## Notes and Assumptions

- The `events` data source is in memory (e.g., an array of objects in .ts file).
- Focus on meeting functional requirements first.
- Add error handling and validation if time permits.
- Feel free to ask clarifying questions during the interview.
- The project is already working with the following query and results:
```graphql
query {
  events {
   id
   name
   type
  }
}
```
Example Response with all events:
```json
{
  "data": {
    "events": [
      { "id": 1, "name": "Event A", "type": "Conference" },
      { "id": 3, "name": "Event C", "type": "Conference" },
      ...
   ]
  }
}
```

# Node / GraphQL challenge

Refactor the GraphQL schema with:

1. The query `events` has the following required and optional arguments:
- page: Int (required)
- pageSize: Int (required)
- type: String (optional)

2. Update the return type containing:
- total: Int
- page: Int
- pageSize: Int
- events: A list of event objects (id, name, type).

3. Update the resolver for the `events` query to:

- Uses the provided mock data in .ts file.
- Filters events by type if provided.
- Implements pagination using page and pageSize.

Example Query:

```graphql
query {
  events(page: 0, pageSize: 2, type: "Conference") {
    total
    page
    pageSize
    events {
      id
      name
      type
    }
  }
}
```

Example Response:

```json
{
  "data": {
    "events": {
      "total": 6,
      "page": 0,
      "pageSize": 2,
      "events": [
        { "id": 1, "name": "Event A", "type": "Conference" },
        { "id": 3, "name": "Event C", "type": "Conference" }
      ]
    }
  }
}
```

Bonus sections:

4. Discuss or implement error handling and arguments validations for the events query.
5. Write a query event to fetch a specific event by its id.
6. Write (or discuss) mutations about adding, editing and deleting events.
7. Discuss about possible new entities to be joined with events; e.g. users that can be event attendees or organizers.