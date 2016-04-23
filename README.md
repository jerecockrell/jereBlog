# Node Blog


------------------------------

------------------------------


Full stack Node/React app. 


## Server Notes
## API endpoints for 'POST' resource


| Method        | URL           | RESPONSE          |
| ------------- |:-------------:| -----:            |
| 'GET'         | /api/posts    | JSON: all posts   |
| 'POST'        | /api/posts    | JSON: create post |
| 'GET'         | /api/posts/:id| JSON: single post |
| 'PUT'					| /api/posts/:id| JSON: edit post		|
| 'DELETE'			| /api/posts/:id| JSON: edit post		|


## Sample 'POST' resource: 
```
{
	"title": "Learn to blog!",
	"content": "Lorem ipsum blablabla",
	"img": "www.url/image/com",
	"comments": ["1234563", 1234343, 2313112, 3224445]
}
```



## API endpoints for 'COMMENT' resource
## Relationship: 'POST' had many comments, 'COMMENT' belongs to one 'POST'

| Method        | URL                 | RESPONSE          |
| ------------- |:-------------:      | -----:            |
| 'POST'        | /api/posts/:post_id | JSON: create post |
| 'DELETE'			| /api/posts/:id      | JSON: edit post		|



## Client Notes
## Page Layout - Flow Diagram

A. Home page
* Skills
* Portfolio
B. Blog Page
* View all blogs
* View one blog
C. Contact page
* Email, phone, mailing

