/**
 * REFERENCES
 *
 * https://www.apollographql.com/docs/apollo-server/schema/directives/
 * https://www.apollographql.com/docs/apollo-server/schema/creating-directives/
 * https://dev.to/tushark1/-------using-graphql-schema-directives-for-role-based-authorization---------3jgo
 * https://blog.grandstack.io/authorization-in-graphql-using-custom-schema-directives-eafa6f5b4658
 *
 */

const app = require('./server')

const port = process.env.PORT || 5000

app.listen(port, () => console.log('Online:', port))
