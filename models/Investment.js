const { required } = require("joi")
const mongoose =require("mongoose")
const investmentSchema = new mongoose.Schema(
    {
        investor :{
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : [true ,"L'investisseur est obligatoire"],
        },
        project :{
            type : mongoose.Schema.type.ObjectId,
            ref :"project",
            required:[true , "Le projet est obligatoire"],
        },
        amount :{
            type :Number,
            required :[true , "le montant est onligatoire"],
            min : [1 ,"Le montant doit être supérieur à 0"]
        },
        percentage :{
            type : Number,
            required :true,
            min : 0,
        },
    },
    {timestamps :true}  
)
investmentSchema.index({ investor: 1 });
investmentSchema.index({ project: 1 });
investmentSchema.index({ investor: 1, project: 1 });