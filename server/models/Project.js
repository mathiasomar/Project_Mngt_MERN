const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed']
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'clients'
    }
})

const Project = mongoose.model('projects', ProjectSchema)
module.exports = Project