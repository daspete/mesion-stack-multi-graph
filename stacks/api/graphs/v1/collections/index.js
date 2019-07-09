// import { composeWithMongoose } from 'graphql-compose-mongoose'
// import { schemaComposer } from 'graphql-compose'
import {  gql  } from 'apollo-server-express'

// import CollectionModel from '~~stacks/api/models/collection'




const typeDefs = gql`
    type LocaleContent {
        locale: String,
        content: String
    }

    type Collection {
        title: [LocaleContent]
        content: [LocaleContent]
    }

    type Query {
        Collections: [Collection]
    }

    
`

const resolvers = {
    Query: {
        async Collections(_, args, { CollectionModel }){
            let collections = await CollectionModel.find({})

            return collections
        }
    },
}
export default { typeDefs, resolvers }


// const CollectionTypeComposer = composeWithMongoose(CollectionModel, {})

// // CollectionTypeComposer.setResolver('pagination', CollectionTypeComposer.getResolver('pagination').wrapResolve(next => async rp => {
// //     let docs = await next(rp)
// //     let locales = rp.args.filter ? rp.args.filter.locales : false

// //     if(locales){
// //         for(let i = 0; i < docs.items.length; i++){
// //             let doc = docs.items[i].toJSON()

// //             if(doc.title){
// //                 doc.title = doc.title.filter((title) => {
// //                     return locales.find((_locale) => { return title.locale == _locale }) != undefined
// //                 })
// //             }
            
// //             if(doc.content){
// //                 doc.content = doc.content.filter((content) => {
// //                     return locales.find((_locale) => { return content.locale == _locale }) != undefined
// //                 })
// //             }

// //             docs.items[i] = doc
// //         }
// //     }

// //     return docs
// //   }).addFilterArg({
// //     name: 'locales',
// //     type: '[String]'
// // }))

// schemaComposer.Query.addFields({
//     collections: CollectionTypeComposer.getResolver('pagination')
// })

// export default schemaComposer.buildSchema()