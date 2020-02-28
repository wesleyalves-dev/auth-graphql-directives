const { gql } = require('apollo-server-express')

module.exports = gql`
  directive @auth on FIELD_DEFINITION
  directive @role(type: Role) on FIELD_DEFINITION

  enum Role {
    USER
    ADMIN
  }

  type Message {
    message: String
  }

  type Query {
    getPublicMessage: Message # do not need authorization
    getPrivateMessage: Message @auth # only needs the authorization token
    getLimitedMessage: Message @auth @role(type: ADMIN) # need the token and the ADMIN role to access
  }
`
