export default (doc) => {
    doc._id = doc._id.toString()
    return doc
}