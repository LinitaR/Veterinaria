const mongoose = require("mongoose");
const connectionString = "mongodb+srv://lina:0000@cluster0.u3l6i.mongodb.net/Veterinaria?retryWrites=true&w=majority"

const connectMongo = async () =>{
    try{
        await mongoose.connect(connectionString).then(()=>{
            console.log("Conectado!");
        })
    }catch(err){
        console.log("Error! "+err);
    }
}

module.exports = {
    connectMongo
}