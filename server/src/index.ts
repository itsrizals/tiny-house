// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv-extended').load()

import express, { Application } from 'express'
import { ApolloServer } from 'apollo-server-express'
import { connectDB } from './db'
import { typeDefs, resolvers } from './graphql'

const mount = async (app: Application) => {
  const db = await connectDB()
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db }),
  })
  server.applyMiddleware({ app, path: '/___graphql' })

  app.listen(process.env.PORT)
  console.log(`[app]: http://localhost:${process.env.PORT}`)
}

mount(express())
