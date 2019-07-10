import faker from 'faker'

import CollectionModel from '~~stacks/api/models/collection'
import UserModel from '~~stacks/api/models/user'


export default async () => {
    let fakes = 3000

    let user = await UserModel.findOne({})


    for(let i = 0; i < fakes; i++){
        let data = {
            title: [
                {
                    locale: 'en',
                    content: 'EN ' + faker.lorem.words(3)
                },
                {
                    locale: 'de',
                    content: 'DE ' + faker.lorem.words(3)
                },
                {
                    locale: 'fr',
                    content: 'FR ' + faker.lorem.words(3)
                }
            ],
            content: [
                {
                    locale: 'en',
                    content: 'EN ' + faker.lorem.paragraphs(2)
                },
                {
                    locale: 'de',
                    content: 'DE ' + faker.lorem.paragraphs(2)
                },
                {
                    locale: 'fr',
                    content: 'FR ' + faker.lorem.paragraphs(2)
                }
            ],
            createdBy: user._id
        }

        let collection = await new CollectionModel(data).save()

    }

    console.log(`${ fakes } collections created`)
}
