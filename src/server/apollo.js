const { ApolloServer } = require('apollo-server-express')
const jwt = require('jsonwebtoken')

const typeDefs = require('../graphql/typedefs')
const resolvers = require('../graphql/resolvers')
const schemaDirectives = require('../graphql/directives')

function context({ req }) {
  const { authorization } = req.headers
  const payload = jwt.decode(authorization)
  return { ...payload, authorization }
}

module.exports = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  schemaDirectives
})
