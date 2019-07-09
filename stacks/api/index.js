import http from 'http'

import auth from '~~core/services/auth'
import express from '~~core/services/express'
import mongoose from '~~core/services/mongoose'
import socketio from '~~core/services/socketio'

import mongooseConfig from '~~shared/config/mongoose'
import corsConfig from '~~shared/config/cors'
import authConfig from '~~shared/config/auth'
import expressConfig from './config/express'

import sockets from './sockets'
import routes from './routes'
import graphs from './graphs'
import UserModel from './models/user'


mongoose(mongooseConfig)
auth(UserModel, authConfig)


const app = express({
    express: expressConfig,
    cors: corsConfig
})

app.use(routes)
app.use(graphs)

const server = http.createServer(app)
const io = socketio({
    server,
    sockets
})

server.listen(expressConfig.port, expressConfig.ip, () => {
    console.log(`API stack is listening on ${ expressConfig.ip }:${ expressConfig.port }`)
})