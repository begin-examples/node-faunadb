let arc = require('@architect/functions')

let faunadb = require('faunadb'),
q = faunadb.query

// Instantiates faunadb
let client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
})

exports.handler = async function post (req) {
  let todo = arc.http.helpers.bodyParser(req) // Base64 decodes + parses body
  todo.created = todo.created || Date.now()
  todo.completed = !!todo.completed
  
  // Posts todo to faunadb
  await console.log(client)
  
  return {
    statusCode: 302,
    headers: {
      'location': '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}


