const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const productSchema = new Schema({

    title:{
        type:String,
        required:true,
        maxlength: 20,
        minlength:2
    },
    price: {
        type: Number,
        required: true,

    },
    imageUrl:{
        type:String,

    },
    category:{
        type:String
    },
    
    description: {
        type :String,
        //required:true,
        minlength:3,
        maxlength:50
    },
    sales : {
        type:Number
    },

    author: {
        type: ObjectId,
        ref: "User"
    }

});

module.exports = new Model('Product', productSchema);