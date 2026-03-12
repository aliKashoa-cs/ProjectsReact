# My Solution for Exercise 0.5: Loading the Single Page App (SPA)

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note over browser: User opens the Single Page App URL in their browser

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/spa](https://studies.cs.helsinki.fi/exampleapp/spa)
    activate server
    server-->>browser: The HTML structure of the page
    deactivate server

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/main.css](https://studies.cs.helsinki.fi/exampleapp/main.css)
    activate server
    server-->>browser: The shared CSS styling file
    deactivate server

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/spa.js](https://studies.cs.helsinki.fi/exampleapp/spa.js)
    activate server
    server-->>browser: The specific JavaScript application for the SPA
    deactivate server

    Note over browser: The browser runs the JS code, which immediately requests the notes list

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/data.json](https://studies.cs.helsinki.fi/exampleapp/data.json)
    activate server
    server-->>browser: The current array of notes (JSON)
    deactivate server

    Note over browser: The browser processes the data and uses JavaScript to render the notes on the screen