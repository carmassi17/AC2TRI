const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://UserAdmin:enzocarmassi1212@fiaptecnico.gh4fi.mongodb.net/crud')
}

module.exports = conexao
