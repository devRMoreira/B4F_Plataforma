function diaDoAno(data) {

    const ano = data.getFullYear();

    const dataInicioAno = new Date(ano, 0, 1);

    const diferencaEmMilisegundos = data - dataInicioAno;

    const diasDoAno = Math.floor(diferencaEmMilisegundos / (1000 * 60 * 60 * 24));

    return diasDoAno + 1;
}