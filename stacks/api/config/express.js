import 'dotenv/config'

export default {
    ip: process.env.STACK_API_HOST || '127.0.0.1',
    port: process.env.STACK_API_PORT || '3000',
    logFormat: process.env.STACK_API_LOG_FORMAT || '[:date] :remote-addr :status :method :url ":referrer" ":user-agent"',
    apiPrefix: process.env.STACK_API_PREFIX || '/api/v1/'
}
