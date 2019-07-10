import { gql } from 'apollo-boost'

export const state = () => {
    return {
        collections: []
    }
}

export const getters = {
    Collections(state){
        return state.collections
    }
}

export const mutations = {
    setCollections(state, collections){
        state.collections = collections
    }
}

export const actions = {
    async getCollections({ commit }, { limit = 10, skip = 0}){
        let apolloClient = this.app.apolloProvider.defaultClient

        let collections = []

        try {
            let { data } = await apolloClient.query({
                query: gql`
                    query Collections(
                        $locale: [String]
                        $limit: Int
                        $skip: Int
                    ){
                        Collections(
                            locale: $locale
                            limit: $limit
                            skip: $skip
                        ){
                            title {
                                locale
                                content
                            }
                            content {
                                locale
                                content
                            }
                            createdBy {
                                personal {
                                    firstname
                                    lastname
                                }
                            }
                            createdAt
                        }
                    }
                `,
                variables: {
                    locale: ['de'],
                    limit: limit,
                    skip: skip
                }
            })
            collections = data.Collections
        }catch(err){
            console.log(err)
        }



        commit('setCollections', collections)

    }
}
