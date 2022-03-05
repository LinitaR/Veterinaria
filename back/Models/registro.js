const {Schema, model} = require ("mongoose");

const registroSchema = new Schema({
    date:{
        type: String
    },
    name:{
        type: String
    },
    id:{
        type: String
    },
    status:{
        type: String
    },
    description:{
        type: String
    }
});

module.exports = model("Registro",registroSchema,"registros")