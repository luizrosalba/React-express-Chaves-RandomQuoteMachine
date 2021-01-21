const express = require('express');

const app = express();
const port = process.env.PORT || 5000;


const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static('public'));


// app.get('*', (req, res) => {
//   res.send('404! This is an invalid URL.');
// });


app.get('/frases', function(req, res) {
  let data = {
    frases: 
    [
        "Foi sem querer, querendo",
        "Ninguém tem paciência comigo",
        "Isso, isso, isso",
        "Tá bom, mas não se irrite",
        "Aí pego e zas, depois zas!",
        "Pipipipipipi",
        "Ai que burro, dá zero pra ele",
        "Já chegou o disco voador",
        "A vingança nunca é plena, mata a alma e envenena",
        "Teria sido melhor ir ver o filme do Pelé",
        "Prefiro morrer do que perder a vida",
        "É tudo culpa do professor linguiça!",
        "Volta o cão arrependido, com suas orelhas tão fartas, com seu osso ruído e com o rabo entre as patas",
        "A que parece de limão, é de groselha e tem gosto de tamarindo. A que parece de groselha, é de tamarindo com sabor de limão. E a que parece de tamarindo, é de limão com sabor de groselha",
        "Boa noite meus amigos. Boa noite vizinhança. Prometemos despedirmos sem dizer adeus jamais",
        "Seu Madruga, o senhor não vai morrer. Vão matar o senhor!"
    ],
    autor: 
    [   
      "Roberto Gómez Bolaños",
      "Roberto Gómez Bolaños"
    ]
  }
  res.status(200).send(data);
});

app.use((req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
});


app.listen(port, () => console.log(`Listening on port ${port}`));


