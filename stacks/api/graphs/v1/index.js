import bodyParser from 'body-parser'
import { Router } from 'express'
import { ApolloServer } from 'apollo-server-express'

import CollectionGraph from './collections'
import CollectionModel from '~~stacks/api/models/collection'

const router = new Router()
router.use(bodyParser())

const graphQLServer = new ApolloServer({
    typeDefs: CollectionGraph.typeDefs,
    resolvers: CollectionGraph.resolvers,
    context: {
        CollectionModel
    }
})
graphQLServer.applyMiddleware({ app: router, path: '/' })

export default router