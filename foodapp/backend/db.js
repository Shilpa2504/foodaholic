const mongoose = require('mongoose')
const dotenv=require("dotenv").config()
const mongoDB  =async() =>{
    mongoose.set('strictQuery',false);
  await  mongoose.connect(process.env.MONGODB_URL, (err, result) => {
        if (err)
            console.log("error ,......", err);
        else {
            console.log("connected");
            const fetched=  mongoose.connection.db.collection("food");
            fetched.find({}).toArray(async function(err,data){
                foodCategory=  await mongoose.connection.db.collection("foodcategory");
                foodCategory.find({}).toArray(async function(err,catData){
                    if(err) console.log(err);
                     else {
                         global.food_items=data;
                        global.foodCategory=catData;
                        }
                })
            // if(err) console.log(err);
            // else {
            //     global.food_items=data;
               
                
            // } 
            })
        }
    });
}
module.exports=mongoDB;
