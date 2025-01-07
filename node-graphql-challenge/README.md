# GraphQL Challenge - Node (TypeScript)

The live coding can be done with screen sharing.

## Setup Instructions

### Prerequisites
- Node.js (v16 or later)
- npm (v8 or later)

### Installation Steps
1. Clone this repository or download the files.
2. Install dependencies:
   ```bash
   npm install

## Notes and Assumptions

- The `events` data source is in memory (e.g., an array of objects in .ts file).
- Focus on meeting functional requirements first.
- Add error handling and validation if time permits.
- Feel free to ask clarifying questions during the interview.

The project is already working, using the provided mock data, with the following query and results:
```graphql
query {
  events {
   id
   name
   type
  }
}
```
Example response with all events:
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

# Challenge

1. Start the project, execute the query and double-check the results.
You can use the browser or a client like Postman or Insomnia.

2. Refactor the GraphQL schema, so the query `events` must have the following required and optional arguments:

- page: Int (required)
- pageSize: Int (required)
- type: String (optional)

3. Update the return type to contain:

- total: Int
- page: Int
- pageSize: Int
- events: A list of event objects (id, name, type).

4. Update the resolver for the `events` query to:

- Filters events by type if provided.
- Implements pagination using page and pageSize.

Final query example:

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

5. Discuss or implement error handling and arguments validations for the events query.
6. Write a query event to fetch a specific event by its id.
7. Write (or discuss) mutations about adding, editing and deleting events.
8. Discuss about possible new entities to be joined with events; e.g. users that can be event attendees or organizers.