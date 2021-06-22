const lgpds = require("../data/lgpd");
const saveData = require("../utils/saveData");

module.exports = {
    async index(req, res, next){
      let id = req.params.id


      res.render('lgpd', {lgpds, id});
    },
    
  async edit(req, res, next){
    let id = req.params.id;

    // obter a receita para altera-la
    let lgpd = lgpds.find(lgpd => lgpd.id == id);

    res.render('edit-lgpd', {lgpd});

  },

  save(req, res, next){
    /* criando um id sequencial, obtendo a
    quantidade de elementos no array recipes e somando + 1 */
    let id = lgpds.length + 1;

    /* montando objeto para seguir padrao dentro do arquivo data/recipe.js */
    let lgpd = { id, ...req.body };
    
    /* adcionando objeto criado dentro do array recipes */
    lgpds.push(lgpd);

    // executando funcao que salva alteracoes dos registros no arquivo recipe.js
    saveData(lgpds, 'lgpd.js');
 

  },
  async update(req, res, next){
    let id = req.params.id;
    let { Politica, Data, responsavel, caminho, status, obs } = req.body;

    // obter a receita para altera-la
    let lgpd = lgpds.find(lgpd => lgpd.id == id);

    // Alterar as propriedades do objeto que desejamos fazer update
    lgpd.Politica = Politica;
    lgpd.DataAt = Data;
    lgpd.Responsável = responsavel;
    lgpd.Caminho = caminho;
    lgpd.Status = status;
    lgpd.Obs = obs;
    
    // executando funcao que salva alteracoes dos registros no arquivo recipe.js
    saveData(lgpds, 'lgpd.js');

    res.render('edit-lgpd', { lgpd, updated: true });
  }

}