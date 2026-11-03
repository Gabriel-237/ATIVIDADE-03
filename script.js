// Questão 01 — Sistema de Login Académico[cite: 1]
document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página[cite: 1]
    const user = document.getElementById('login-usuario').value.trim();
    const pass = document.getElementById('login-senha').value.trim();
    const msg = document.getElementById('msg-login');

    if (user === '' || pass === '') {
        msg.innerText = 'Por favor, preencha todos os campos!';
        msg.style.color = 'red';
    } else {
        msg.innerText = 'Login efetuado com sucesso!';
        msg.style.color = 'green';
    }
});

// Questão 02 — Controle de Temperatura de Servidor[cite: 1]
document.getElementById('temp-input').addEventListener('input', function() {
    const temp = parseFloat(this.value);
    const sec = document.getElementById('sec-temperatura');
    
    if (isNaN(temp)) {
        sec.style.backgroundColor = '';
    } else if (temp < 40) {
        sec.style.backgroundColor = '#a8e6cf'; // verde[cite: 1]
    } else if (temp <= 70) {
        sec.style.backgroundColor = '#ffd3b6'; // amarelo[cite: 1]
    } else {
        sec.style.backgroundColor = '#ff8b94'; // vermelho[cite: 1]
    }
});

// Questão 03 — Sistema de Comentários de Rede Social[cite: 1]
document.getElementById('comentario').addEventListener('input', function() {
    const max = 200;
    const restantes = max - this.value.length;
    document.getElementById('contador-chars').innerText = restantes;
});

// Questão 04 — Loja Virtual de Eletrónicos[cite: 1]
document.getElementById('qtd-produto').addEventListener('input', function() {
    const precoUnitario = 250;
    const qtd = parseInt(this.value) || 0;
    const total = (precoUnitario * qtd).toFixed(2);
    document.getElementById('total-compra').innerText = total;
});

// Questão 05 — Sistema de Cadastro de Usuários (Força da Senha)[cite: 1]
document.getElementById('pass-forca').addEventListener('keyup', function() {
    const len = this.value.length;
    const msg = document.getElementById('msg-forca');

    if (len === 0) {
        msg.innerText = '-';
        msg.style.color = '';
    } else if (len < 6) {
        msg.innerText = 'Fraca'; // Menos de 6[cite: 1]
        msg.style.color = 'red';
    } else if (len <= 8) {
        msg.innerText = 'Média'; // Entre 6 e 8[cite: 1]
        msg.style.color = 'orange';
    } else {
        msg.innerText = 'Forte'; // Acima de 8[cite: 1]
        msg.style.color = 'green';
    }
});

// Questão 06 — Controle de Luminosidade Inteligente[cite: 1]
document.getElementById('slider-luz').addEventListener('input', function() {
    const opacidade = this.value / 100;
    document.getElementById('lampada').style.backgroundColor = `rgba(255, 235, 59, ${opacidade})`;
});

// Questão 07 — Sistema de Pesquisa de Filmes[cite: 1]
document.getElementById('busca-filme').addEventListener('input', function() {
    const termo = this.value.toLowerCase();
    const filmes = document.querySelectorAll('#lista-filmes li');

    filmes.forEach(filme => {
        const texto = filme.innerText.toLowerCase();
        filme.style.display = texto.includes(termo) ? '' : 'none';
    });
});

// Questão 08 — Sistema Bancário[cite: 1]
document.getElementById('btn-transferir').addEventListener('click', function() {
    let saldo = 500;
    const valor = parseFloat(document.getElementById('valor-transf').value);
    const msg = document.getElementById('msg-banco');

    if (isNaN(valor) || valor <= 0) {
        msg.innerText = 'Insira um valor válido!';
        msg.style.color = 'red';
    } else if (valor > saldo) {
        msg.innerText = 'Saldo insuficiente!';
        msg.style.color = 'red';
    } else {
        const confirmacao = confirm(`Confirma a transferência de ${valor.toFixed(2)} €?`);
        if (confirmacao) {
            saldo -= valor;
            msg.innerText = 'Transferência realizada com sucesso!';
            msg.style.color = 'green';
        }
    }
});

// Questão 09 — Sistema de Tema Escuro[cite: 1]
document.getElementById('btn-tema').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        this.innerText = 'Ativar Modo Claro';
    } else {
        this.innerText = 'Ativar Modo Escuro';
    }
});

// Questão 10 — Controle de Estoque[cite: 1]
document.getElementById('input-estoque').addEventListener('input', function() {
    const qtd = parseInt(this.value);
    const alerta = document.getElementById('alerta-estoque');

    if (!isNaN(qtd) && qtd < 10) {
        alerta.innerText = 'Atenção: Estoque abaixo de 10 unidades!'; // Alerta < 10[cite: 1]
    } else {
        alerta.innerText = '';
    }
});

// Questão 11 — Plataforma de Cursos Online (Com vídeo do YouTube)[cite: 1]
document.getElementById('thumb-aula').addEventListener('click', function() {
    const areaVideo = document.getElementById('area-video');
    const videoId = '2KOeuUxGeNU'; // ID do vídeo: TUDO DE LINGUAGENS PARA O ENEM 2026!!!
    
    // Oculta a miniatura e insere o player do YouTube dinamicamente
    this.style.display = 'none';
    areaVideo.innerHTML = `
        <div class="container-iframe">
            <iframe 
                src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
                title="TUDO DE LINGUAGENS PARA O ENEM 2026!!!" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
    `;
});

// Questão 12 — Sistema de Avaliação[cite: 1]
const estrelas = document.querySelectorAll('.estrela');
estrelas.forEach(estrela => {
    estrela.addEventListener('click', function() {
        const nota = this.getAttribute('data-nota');
        document.getElementById('msg-avaliacao').innerText = `Avaliou com ${nota} estrela(s)!`;

        estrelas.forEach(e => {
            if (parseInt(e.getAttribute('data-nota')) <= parseInt(nota)) {
                e.classList.add('ativa');
            } else {
                e.classList.remove('ativa');
            }
        });
    });
});

// Questão 13 — Calculadora de IMC[cite: 1]
function calcularIMC() {
    const peso = parseFloat(document.getElementById('imc-peso').value);
    const altura = parseFloat(document.getElementById('imc-altura').value);
    const res = document.getElementById('res-imc');

    if (peso > 0 && altura > 0) {
        const imc = (peso / (altura * altura)).toFixed(2);
        res.innerText = imc;
    } else {
        res.innerText = '-';
    }
}
document.getElementById('imc-peso').addEventListener('input', calcularIMC);
document.getElementById('imc-altura').addEventListener('input', calcularIMC);

// Questão 14 — Sistema de Upload de Arquivos[cite: 1]
document.getElementById('input-file').addEventListener('change', function() {
    const nome = this.files[0] ? this.files[0].name : 'Nenhum';
    document.getElementById('nome-ficheiro').innerText = nome;
});

// Questão 15 — Sistema de Votação[cite: 1]
let votos = { A: 0, B: 0 };
document.querySelectorAll('.btn-votar').forEach(btn => {
    btn.addEventListener('click', function() {
        const candidato = this.getAttribute('data-candidato');
        votos[candidato]++;
        document.getElementById(`votos-${candidato.toLowerCase()}`).innerText = votos[candidato];
    });
});

// Questão 16 — Sistema de Notificações[cite: 1]
const icone = document.getElementById('icone-msg');
const caixa = document.getElementById('caixa-notif');

icone.addEventListener('mouseenter', function() {
    caixa.classList.remove('escondido');
});
icone.addEventListener('mouseleave', function() {
    caixa.classList.add('escondido');
});

// Questão 17 — Simulador de Semáforo Inteligente[cite: 1]
let intervaloSemaforo = null;
document.getElementById('btn-semaforo').addEventListener('click', function() {
    if (intervaloSemaforo) clearInterval(intervaloSemaforo);

    const luzes = {
        vermelha: document.getElementById('luz-vermelha'),
        amarela: document.getElementById('luz-amarela'),
        verde: document.getElementById('luz-verde')
    };

    let estado = 0; // 0: Verde, 1: Amarelo, 2: Vermelho

    function mudarLuz() {
        Object.values(luzes).forEach(l => l.classList.remove('ativo'));
        
        if (estado === 0) {
            luzes.verde.classList.add('ativo');
            estado = 1;
        } else if (estado === 1) {
            luzes.amarela.classList.add('ativo');
            estado = 2;
        } else {
            luzes.vermelha.classList.add('ativo');
            estado = 0;
        }
    }

    mudarLuz();
    intervaloSemaforo = setInterval(mudarLuz, 2000); // Altera de 2 em 2 segundos
});

// Questão 18 — Sistema de Agenda[cite: 1]
document.querySelectorAll('.horario').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.horario').forEach(h => h.classList.remove('selecionado'));
        this.classList.add('selecionado');
        document.getElementById('msg-agenda').innerText = `Horário selecionado: ${this.innerText}`;
    });
});

// Questão 19 — Sistema de Conversão Monetária[cite: 1]
document.getElementById('val-reais').addEventListener('input', function() {
    const valorReais = parseFloat(this.value);
    const taxaDolar = 5.00; // Taxa de conversão estática para o exemplo
    const res = document.getElementById('res-dolar');

    if (!isNaN(valorReais) && valorReais >= 0) {
        res.innerText = (valorReais / taxaDolar).toFixed(2);
    } else {
        res.innerText = '0.00';
    }
});

// Questão 20 — Painel de Controle de Música[cite: 1]
const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
const statusPlayer = document.getElementById('status-player');

document.getElementById('btn-play').addEventListener('click', function() {
    audio.play();
    statusPlayer.innerText = 'A reproduzir...';
});

document.getElementById('btn-pause').addEventListener('click', function() {
    audio.pause();
    statusPlayer.innerText = 'Pausado';
});

document.getElementById('bar-volume').addEventListener('input', function() {
    audio.volume = this.value;
});