let mongoose=require('mongoose');

//create a model class
let contactsSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number
},
{
    collection:"first"

}
);

module.exports=mongoose.model('demo',contactSchema);