const enviarEmail = require('./envia-email.js')
let listaEmails = [
  { email: 'joao@xyz.com', recebeMarketing: true },
  { email: 'sara@randommail.com', recebeMarketing: true },
  { email: 'luiz@yourmail.com', recebeMarketing: true },
  { email: 'elena@samplemail.com', recebeMarketing: false },
  { email: 'vitor@testmail.com', recebeMarketing: true },
  { email: 'alice@tempmail.com', recebeMarketing: false },
  { email: 'antonio@fakeemail.com', recebeMarketing: true },
  { email: 'gabriela@custommail.com', recebeMarketing: false },
  { email: 'bruno@examplemail.com', recebeMarketing: true },
  { email: 'raquel@randommail.com', recebeMarketing: true },
  { email: 'eduardo@yourmail.com', recebeMarketing: false },
  { email: 'mariana@samplemail.com', recebeMarketing: true },
  { email: 'gustavo@testmail.com', recebeMarketing: false },
  { email: 'luana@tempmail.com', recebeMarketing: true },
  { email: 'ricardo@fakeemail.com', recebeMarketing: false },
  { email: 'isadora@custommail.com', recebeMarketing: true },
  { email: 'fernando@examplemail.com', recebeMarketing: true },
  { email: 'carolina@randommail.com', recebeMarketing: false },
  { email: 'henrique@yourmail.com', recebeMarketing: true },
  { email: 'tania@samplemail.com', recebeMarketing: false },
];

function verificaDiaDaSemana() {
  let data = new Date();
  let diaDaSemana = 1 //data.getDay(); 
  return diaDaSemana === 1 ? true : false;
}

// Função para montar o corpo do e-mail
function montaCorpoEmail() {
  return `
    Olá,

    Temos novos veículos disponíveis e ótimas condições de aquisição esperando por você na CarStore! Venha nos visitar.

    Atenciosamente,
    Equipe CarStore
  `;
}

function enviaEmails() {
  if (verificaDiaDaSemana()) {
    for (let cliente of listaEmails) {
      if (cliente.recebeMarketing) {
        let resultado = enviarEmail(cliente.email, 'Novidades da CarStore', montaCorpoEmail());
        if (resultado.status === 'Sucess') {
          console.log(`E-mail enviado com sucesso para ${cliente.email}`);
        } else {
          console.log(`Houve um erro ao enviar o e-mail para ${cliente.email}: ${resultado.message}`);
        }
      }
    }
  }
}

enviaEmails();