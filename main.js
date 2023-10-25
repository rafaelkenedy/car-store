const enviarEmail = require('./envia-email');

const clientes = [
    { nome: 'João Silva', email: 'joao.silva@carstore.com', aceitaMarketing: true },
    { nome: 'Maria Oliveira', email: 'maria.oliveira@carstore.com', aceitaMarketing: false },
    { nome: 'Carlos Souza', email: 'carlos.souza@carstore.com', aceitaMarketing: true },
    { nome: 'Ana Costa', email: 'ana.costa@carstore.com', aceitaMarketing: true },
    { nome: 'Felipe Martins', email: 'felipe.martins@carstore.com', aceitaMarketing: false },
    { nome: 'Roberta Lima', email: 'roberta.lima@carstore.com', aceitaMarketing: true },
    { nome: 'Márcio Rocha', email: 'marcio.rocha@carstore.com', aceitaMarketing: true },
    { nome: 'Tatiane Pereira', email: 'tatiane.pereira@carstore.com', aceitaMarketing: false },
    { nome: 'Gustavo Henrique', email: 'gustavo.henrique@carstore.com', aceitaMarketing: true },
    { nome: 'Fernanda Souza', email: 'fernanda.souza@carstore.com', aceitaMarketing: true }
];

function verificarDiaDaSemana() {
    //const hoje = new Date();
    //return hoje.getDay();
    return 1;
}

function montarCorpoEmail() {
    const corpo = `
        Olá!

        Confira os novos veículos em nosso catálogo e os mais vendidos do último mês.
        Oferecemos condições especiais para aquisição.

        Visite uma de nossas lojas!

        CarStore - Aqui você encontra o seu carro novo
    `;
    
    console.log('Corpo do E-mail:', corpo);
    return corpo;
}

function enviarEmails() {
    const diaAtual = verificarDiaDaSemana();

    if (diaAtual !== 1) {
        console.log('Hoje não é segunda-feira, os e-mails não serão enviados.');
        return;
    }

    const corpoEmail = montarCorpoEmail();
    const assuntoEmail = "Novidades e Ofertas Exclusivas da CarStore!";

    for (const cliente of clientes) {
        if (!cliente.aceitaMarketing) {
            console.log(`Cliente ${cliente.email} optou por não receber comunicações de marketing.`);
            continue; 
        }

        const resultado = enviarEmail(cliente.email, assuntoEmail, corpoEmail);

        if (resultado.status === "Error") {
            console.error(`Erro ao enviar e-mail para ${cliente.email}: ${resultado.message}`);
        } else {
            console.log(`E-mail enviado com sucesso para ${cliente.email}`);
        }
    }
}

enviarEmails();