const mongoose = require('mongoose');
const mongoURI='mongodb+srv://ogo:x8zbOYQ0kNwJd3Xe@cluster0.vcwlcow.mongodb.net/ogo?retryWrites=true&w=majority'
const mongoDB  =async() =>{
  await  mongoose.connect(mongoURI, (err, result) => {
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
