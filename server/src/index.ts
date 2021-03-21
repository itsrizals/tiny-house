import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from './graphql'

const app = express()
const port = 9000

const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app, path: '/___graphql' })

app.listen(port)

console.log(`[app]: http://localhost:${port}`)
