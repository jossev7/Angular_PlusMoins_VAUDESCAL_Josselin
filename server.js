var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.static(__dirname));

app.listen(3000, function () {
  console.log('Server démarré. Il faut ouvrir http://localhost:3000 dans le navigateur.');
});
