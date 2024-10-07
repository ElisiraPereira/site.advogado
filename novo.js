document.getElementById('pesquisa').addEventListener('input', function() {
    const termo = this.value.toLowerCase();
    const servicos = document.querySelectorAll('.servico');

    servicos.forEach(function(servico) {
        const titulo = servico.querySelector('h2').textContent.toLowerCase();
        const descricao = servico.querySelector('p').textContent.toLowerCase();
        
        // Se o termo for encontrado no título ou na descrição, remove a classe "hide"
        if (titulo.includes(termo) || descricao.includes(termo)) {
            servico.classList.remove('hide');
        } else {
            servico.classList.add('hide');
        }
    });
});

// Exibe ou esconde a seta com base na rolagem da página
window.onscroll = function() {
    const voltarTopo = document.getElementById('voltarTopo');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        voltarTopo.classList.add('show');
    } else {
        voltarTopo.classList.remove('show');
    }
};

// Função para rolar até o topo ao clicar na seta
document.getElementById('voltarTopo').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
