const {
  SchemaDirectiveVisitor,
  ForbiddenError
} = require('apollo-server-express')
const { defaultFieldResolver } = require('graphql')
const jwt = require('jsonwebtoken')

function verifyToken(token) {
  try {
    jwt.verify(token, 'shhh')
    return true
  } catch (e) {
    return false
  }
}

function testRole(userRole, requiredRole) {
  return userRole === requiredRole
}

class Auth extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field
    field.resolve = async function(...args) {
      const { authorization } = args[2]

      if (verifyToken(authorization)) {
        return resolve.apply(this, args)
      }

      throw new ForbiddenError('Unauthorized')
    }
  }
}

class Role extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field
    const { type: typeRole } = this.args
    field.resolve = async function(...args) {
      const { role: roleUser } = args[2]

      if (testRole(roleUser, typeRole)) {
        return resolve.apply(this, args)
      }

      throw new ForbiddenError('Unauthorized')
    }
  }
}

module.exports = {
  auth: Auth,
  role: Role
}
