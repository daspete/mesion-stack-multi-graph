export const typeDefs = `
extend type Query {
    Users: [User]
}

type PersonalContent {
    firstname: String
    lastname: String
}

type User {
    active: Boolean,
    personal: PersonalContent
    email: String
    password: String
    createdAt: Date
}
`

export const resolvers = {
    Query: {
        async Users(root, args, { UserModel }){
            return await UserModel.find({})
        }
    }
}
