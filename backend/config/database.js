const mongoose = require('mongoose')
// conexão sem  usuário e senha
module.exports = mongoose.connect('mongodb://localhost/db_finance')
// conexão com usuário e senha
//module.exports = mongoose.connect('mongodb://usuario:senha@localhost:port/db_finance')