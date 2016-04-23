# Node Blog


------------------------------

------------------------------


Full stack Node/React app. 

## API endpoints for 'POST' resource


| Method        | URL           | RESPONSE          |
| ------------- |:-------------:| -----:            |
| 'GET'         | /api/posts    | JSON: all posts   |
| 'POST'        | /api/posts    | JSON: create post |
| 'GET'         | /api/posts/:id| JSON: single post |
| 'PUT'					| /api/posts/:id| JSON: edit post		|
| 'DELETE'			| /api/posts/:id| JSON: edit post		|


## API endpoints for 'COMMENT' resource
## Relationship: POST had many comments, COMMENT belongs to one POST

| Method        | URL                 | RESPONSE          |
| ------------- |:-------------:      | -----:            |
| 'POST'        | /api/posts/:post_id | JSON: create post |
| 'DELETE'			| /api/posts/:id      | JSON: edit post		|

