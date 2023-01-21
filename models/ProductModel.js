const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter name of product"],
        trim:true,
        maxlength:[15,"Product Name not exceed than 15 characters"]
    },
    description:{
        type:String,
        required:[true,"Please enter description of product"],
        maxlength:[4000,"Description is cannot exceed than 4000 characters"]
    },
    price:{
        type:Number,
        required:[true,"Please add price for your product"],
        maxlength:[8,"price can not exceed than 8 characters"],
    },
    discountPrice:{
        type:String,
        maxlength:[4,"Discount price can not exceed than 4 characters"],
    },
    color:{
        type:String,
    },
    ratings:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true,
            },
            url:{
                type:String,
                required:true,
            },
        }
    ],
    category:{
        type:String,
        require:[true,"Please add a catagory of your product"],
    },
    Stock:{
        type:Number,
        require:[true,"Please add a some stock for your product"],
        maxlength:[3,"Stock Name not exceed than 3 characters"]
    },numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            user: {
                type:mongoose.Schema.ObjectId,
                ref:"User",
                required:true,
            },
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
            },
            time:{
               type:Date,
                default:Date.now()
            },
        },
    ],
    user:{
        type: mongoose.Schema.ObjectId,
        ref:"User",
       // required:true,
    },
    createAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model("Product",productSchema)