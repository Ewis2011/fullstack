# Exercise 0.4 – New Note Diagram

This diagram describes the situation where the user creates a new note on the page https://studies.cs.helsinki.fi/exampleapp/notes.

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Write note and click Save
    Browser->>Server: POST /new_note

    Note right of Server: Server saves the note

    Server-->>Browser: HTTP 302 Redirect (/notes)

    Browser->>Server: GET /notes
    Server-->>Browser: HTML document

    Browser->>Server: GET main.css
    Server-->>Browser: CSS file

    Browser->>Server: GET main.js
    Server-->>Browser: JavaScript file

    Browser->>Server: GET data.json
    Server-->>Browser: JSON containing notes

    Browser->>Browser: Render updated notes list
```