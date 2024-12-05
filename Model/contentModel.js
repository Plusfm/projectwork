const mongoose =require("mongoose")


const ContentSchema = new mongoose.Schema({
    title: {type:String, required:true},
    category: {type:String, enum:["Football", "Basket","American Football"],required:true},
    image: {type:String, required:true},
    description: {type:String, required:true},
    createdAt:{type:Date, default: Date.now()},
})

module.exports = mongoose.model('Content',ContentSchema)