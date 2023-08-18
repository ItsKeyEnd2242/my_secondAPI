// importar o pacote do express
const express = require ('express')


// instancia o express na variavel app
const app = express();

// define a porta do servidor numa variavel
const PORT = 8081;

// testa a api com  função listen
app.listen(PORT, () => console.log(`Running at the port ${PORT}`))