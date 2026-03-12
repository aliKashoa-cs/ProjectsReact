
```mermaid
sequenceDiagram
    participant browser
    participant server

    Note over browser: User writes a note in the box and clicks Save

    browser->>server: POST [https://studies.cs.helsinki.fi/exampleapp/new_note](https://studies.cs.helsinki.fi/exampleapp/new_note)
    activate server
    Note left of server: Server stores the new note in its memory
    server-->>browser: HTTP 302 Redirect (Go back to /notes)
    deactivate server

    Note over browser: Browser follows the redirect and refreshes the page

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/notes](https://studies.cs.helsinki.fi/exampleapp/notes)
    activate server
    server-->>browser: The HTML structure of the page
    deactivate server

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/main.css](https://studies.cs.helsinki.fi/exampleapp/main.css)
    activate server
    server-->>browser: The CSS styling file
    deactivate server

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/main.js](https://studies.cs.helsinki.fi/exampleapp/main.js)
    activate server
    server-->>browser: The JavaScript application file
    deactivate server

    Note over browser: The browser runs the JS code which triggers a data request

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/data.json](https://studies.cs.helsinki.fi/exampleapp/data.json)
    activate server
    server-->>browser: The list of all notes (including the new one)
    deactivate server

    Note over browser: The browser processes the data and shows the notes on screen