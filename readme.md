# mesion-stack-multi-graphql

- **M**ongoose
- **E**xpress
- **S**ocket**IO**
- **N**uxt


## Installation

- Create a .env file from the .env.example 
- Start ``` yarn ``` to install all dependencies


## Start stack

For example, if you want to start the api stack in development mode, you can run it with ``` yarn dev api ```


## Initial seeds

To create an admin user, you can type ``` yarn db:seed user ```

This will create a user with the mail address **admin@local.host** and the password: **admin**


To create 3000 fake collections you can start ``` yarn db:seed collections ```


## Start the GraphQL playground

After you started the api stack, you can browse to: [http://localhost:3333](http://localhost:3333)


When it's loaded alrighty, you should get some results after you run a query like this: 

```
query {
    Collections(
        locale: ["de"]
        limit: 50
        skip: 0
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
```
