import bodyParser from 'body-parser'
import { Router } from 'express'
import { ApolloServer } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import { merge } from 'lodash'

import UserModel from '~~stacks/api/models/user'
import { typeDefs as UserTypeDefs, resolvers as UserResolvers } from '~~stacks/api/models/user/graph.js'

import CollectionModel from '~~stacks/api/models/collection'
import { typeDefs as CollectionTypeDefs, resolvers as CollectionResolvers } from '~~stacks/api/models/collection/graph.js'

const router = new Router()
router.use(bodyParser())

// GraphQL needs minimum a field in the type.... so we define a field called _empty, which is never used
const Query = `
    type Query {
        _empty: String
    }
`

const resolvers = {}

const graphSchema = makeExecutableSchema({
    typeDefs: [
        Query,
        CollectionTypeDefs,
        UserTypeDefs,
    ],
    resolvers: merge(
        resolvers,
        UserResolvers,
        CollectionResolvers
    )
})

const graphQLServer = new ApolloServer({
    schema: graphSchema,
    context: {
        CollectionModel,
        UserModel
    }
})
graphQLServer.applyMiddleware({ app: router, path: '/' })

export default router
