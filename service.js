var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => res.send('Funcionou'))

app.listen(app.get('port'), function() {
    console.log('Aplicação está rodando na porta', app.get('port'));
  });