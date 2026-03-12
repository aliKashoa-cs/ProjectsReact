# My Solution for Exercise 0.6: Creating a New Note in the SPA

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note over browser: User writes a note and clicks the "Save" button
    
    Note over browser: JavaScript adds the note to the list and rerenders the page locally

    browser->>server: POST [https://studies.cs.helsinki.fi/exampleapp/new_note_spa](https://studies.cs.helsinki.fi/exampleapp/new_note_spa)
    activate server
    server-->>browser: HTTP 201 Created
    deactivate server

    Note over browser: The UI is already updated, so no page reload is needed