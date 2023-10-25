// importando a função enviarEmail
const enviarEmail = require('./envia-email.js');

// lista de emails dos clientes
let listaEmails = [
  { email: 'joao@xyz.com', recebeMarketing: true },
  { email: 'maria@abc.com', recebeMarketing: false },
  { email: 'pedro@randommail.com', recebeMarketing: true },
  { email: 'ana@newmail.com', recebeMarketing: false },
  { email: 'carlos@yourmail.com', recebeMarketing: true },
  { email: 'isabel@samplemail.com', recebeMarketing: true },
  { email: 'jose@testmail.com', recebeMarketing: false },
  { email: 'clara@tempmail.com', recebeMarketing: true },
  { email: 'paulo@fakeemail.com', recebeMarketing: false },
  { email: 'laura@custommail.com', recebeMarketing: true },
  { email: 'tiago@examplemail.com', recebeMarketing: false },
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
  { email: 'tania@samplemail.com', recebeMarketing:false }
];  



// função para verificar o dia da semana
function verificaDiaDaSemana() {
  let dataAtual = new Date();
  let diaDaSemana = dataAtual.getDay();
  
// retorna verdadeiro se for segunda-feira
  return diaDaSemana === 3;
}

// função para montar o corpo do e-mail
function montaCorpoEmail() {
  return `
    Olá,

    Temos novos veículos em nossa loja! 
    Venha nos visitar e conferir nossos modelos mais vendidos.

    Atenciosamente,
    Equipe CarStore
  `;
}

// função para enviar o e-mail
function enviaEmailParaCliente(cliente) {
  if (cliente.recebeMarketing) {
    let resposta = enviarEmail(cliente.email, 'Novidades da CarStore', montaCorpoEmail());
    
    if (resposta.status === 'Sucess') {
      console.log(`E-mail enviado com sucesso para ${cliente.email}`);
    } else {
      console.log(`Houve um erro ao enviar o e-mail para ${cliente.email}: ${resposta.message}`);
    }
  }
}

// verifica se é segunda-feira antes de enviar os e-mails
if (verificaDiaDaSemana()) {
  listaEmails.forEach(enviaEmailParaCliente);
}