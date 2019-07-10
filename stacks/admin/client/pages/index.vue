<template>
    <div class="app">
        limit: <input type="number" v-model.number="limit" /><br>
        skip: <input type="number" v-model.number="skip" /><br>
        <div
            v-for="collection in Collections"
            :key="collection._id"
        >
            <h1 v-html="collection.title.find(title => title.locale == 'de').content"></h1>
            <div>{{ collection.createdAt }} - {{ collection.createdBy.personal.firstname }} {{ collection.createdBy.personal.lastname }}</div>
            <p v-html="collection.content.find(content => content.locale == 'de').content"></p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    async fetch({ app, store }){
        await store.dispatch('collections/getCollections', {
            limit: 50,
            skip: 0
        })
    },

    asyncData(){
        return {
            limit: 50,
            skip: 0,
        }
    },

    watch: {
        skip(value){
            this.FetchCollections()
        },

        limit(value){
            this.FetchCollections()
        }
    },

    computed: {
        ...mapGetters({
            Collections: 'collections/Collections'
        })
    },

    methods: {
        async FetchCollections(){
            await this.$store.dispatch('collections/getCollections', {
                limit: this.limit ? this.limit : 0,
                skip: this.skip ? this.skip : 0
            })
        }
    }
}
</script>
