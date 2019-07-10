import 'dotenv/config'

export default {
    graphurl: process.env.STACK_ADMIN_GRAPH_URL || 'http://localhost:3333',
}
