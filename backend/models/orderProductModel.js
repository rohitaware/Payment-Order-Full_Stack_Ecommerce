const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    productDetails : {
       type : Array,
       dafault : []
    },
    email : {
        type : String,
        default : ''
    },
    userId : {
        type : String,
        default : ''
    },
    paymentdetails : {
        paymentId : {
            type : String,
            default : ''
        },
        payment_method_types : [],
        payment_status : {
            type : String,
            default : ''
        }
    },
    shipping_options : [],
    totalAmount : {
        type : Number,
        default : 0
    }
},{
    timestamps : true
})

const orderModel = mongoose.model('order',orderSchema)


module.exports = orderModel