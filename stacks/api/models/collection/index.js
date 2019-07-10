import mongoose from 'mongoose'
import mongooseDelete from 'mongoose-delete'
import mongooseAutopopulate from 'mongoose-autopopulate'



const LocaleDataSchema = new mongoose.Schema({
    locale: {
        type: String,
        default: 'en'
    },
    content: {
        type: String,
        default: ''
    }
})

const DataSchema = new mongoose.Schema({
    title: {
        type: [LocaleDataSchema],
        default: []
    },
    content: {
        type: [LocaleDataSchema],
        default: []
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        default: null
    }
}, {
    collection: 'collections',
    timestamps: true
})

DataSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: true })
DataSchema.plugin(mongooseAutopopulate)

const DataModel = mongoose.model('collection', DataSchema)

export const schema = DataSchema
export default DataModel
