function verificarDiaDaSemana() {
    const data = new Date();

    const diaDaSemana = { weekday: 'long' };
    return data.toLocaleDateString('pt-BR', diaDaSemana);
  }
  
  const dia = verificarDiaDaSemana();

  console.log(dia);
  