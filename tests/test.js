const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../backend/server');
const expect = chai.expect;
const URL = require('../backend/models/URL');

chai.use(chaiHttp);

describe('URL Shortener API', () => {
  // Teste para verificar se os documentos são salvos e lidos corretamente no banco de dados
  describe('Banco de Dados', () => {
    it('Deve salvar e ler um documento no banco de dados', (done) => {
      // Cria um novo documento URL
      const newURL = new URL({
        originalURL: 'https://www.example.com',
        shortURL: 'abc123',
      });

      // Salva o novo documento no banco de dados
      newURL
        .save()
        .then(() => {
          // Lê o documento recém-salvo do banco de dados
          return URL.findOne({ shortURL: 'abc123' });
        })
        .then((result) => {
          expect(result).to.exist;
          expect(result.originalURL).to.equal('https://www.example.com');
          done();
        })
        .catch((error) => {
          done(error);
        });
    });
  });

  // Adicione mais testes para outras funcionalidades do banco de dados aqui

  // Testes para outras rotas...

  // Testes para outras funcionalidades...

});

