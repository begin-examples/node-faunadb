 @app
 faunadb-crud-app

 @http
/todos
  method post
  src /todos/create
/todos
  method get
  src /todos/read
/todos/delete
  method post
  src /todos/delete
/todos/:id
  method post
  src /todos/update

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
