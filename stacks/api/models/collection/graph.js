export const typeDefs = `
scalar Date

extend type Query {
    Collections(
        locale: [String]
    ): [Collection]
}

type LocaleContent {
    locale: String
    content: String
}

type Collection {
    title: [LocaleContent]
    content: [LocaleContent]
    createdAt: Date
    createdBy: User
}
`

export const resolvers = {
    Query: {
        async Collections(root, { locale = false }, { CollectionModel }){
            let collections = await CollectionModel.find({}).populate('createdBy')

            collections.map((collection) => {
                collection.title = collection.title.filter((title) => {
                    return locale.find((_locale) => { return _locale == title.locale }) != undefined
                })

                collection.content = collection.content.filter((content) => {
                    return locale.find((_locale) => { return _locale == content.locale }) != undefined
                })

                return collection
            })

            return collections
        }
    }
}
