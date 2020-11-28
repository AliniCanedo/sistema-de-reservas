var express = require('express');
var router = express.Router();
var db = require("../db");

/* GET home page. */
router.get('/:pagina?', global.authenticationMiddleware(), function(req, res, next) {
  const pagina = parseInt(req.params.pagina || "1");
  db.countAll((err, qtd) => {
    if(err) return console.log(err);
    const qtdPaginas = Math.ceil(qtd / db.TAMANHO_PAGINA);

    db.findAllUsers(pagina, (err, docs) => {
      if(err) return console.log(err);
      console.log(docs)
      res.render('index', { title: req.user.username, docs, qtd, qtdPaginas, pagina, profile: req.user.profile });
    })
  })
});

router.get('/delete/:id', function(req, res) {
  var id = req.params.id;
  global.db.deleteOne(id, (e, result) => {
        if(e) { return console.log(e); }
        res.redirect('/');
      });
});

module.exports = router;
