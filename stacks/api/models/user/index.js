import mongoose from 'mongoose'
import mongooseDelete from 'mongoose-delete'
import mongooseAutopopulate from 'mongoose-autopopulate'

const DataSchema = new mongoose.Schema({
    active: {
        type: Boolean,
        default: true
    },

    personal: {
        firstname: {
            type: String,
            default: ''
        },
        lastname: {
            type: String,
            default: ''
        },
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    }
}, {
    collection: 'users',
    timestamps: true
})

DataSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: true })
DataSchema.plugin(mongooseAutopopulate)

const DataModel = mongoose.model('user', DataSchema)

export default DataModel
