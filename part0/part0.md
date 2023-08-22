Exampleapp Sequence Diagram

```mermaid
SequenceDiagram
    participant browser
    participant server

    browser->> server: POST http://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->> browser: Redirect
    deactivate server
```
