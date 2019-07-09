import faker from 'faker'

import CollectionModel from '~~stacks/api/models/collection'


export default async () => {
    let fakes = 8000

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
            ]
        }

        let collection = await new CollectionModel(data).save()
        console.log('collection created:', collection)
    }

    // for (let i = 0; i < users.length; i++) {
    //     let userData = users[i]
    //     userData.password = await HashPassword(userData.password)
    //     let user = await new UserModel(userData).save()
    //     console.log('new user created: ', user)
    // }
}