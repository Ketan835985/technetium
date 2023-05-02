const mongoose = require('mongoose')


/* A newPublisher document looks like this.
{
        _id: ObjectId("61951bfa4d9fe0d34da86344"),
name: “Penguin”,
headQuarter: “New Delhi”,
}
*/

const publishSchema = new mongoose.Schema({
    name: { type: String, required: true },
    headQuarter: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('KeTanPublisher', publishSchema)