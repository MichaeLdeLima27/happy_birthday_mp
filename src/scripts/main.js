document.addEventListener('DOMContentLoaded', function() {
    console.log("Página carregada, iniciando AOS...");
    AOS.init({
        duration: 3000, // Tempo da animação
        once: true, // Executar apenas uma vez
    });

    setTimeout(() => {
        console.log("Forçando AOS.refresh()");
        AOS.refresh();
    }, 3000);
});

const dataDoEvento = new Date("Aug 26, 2025 16:15");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

        const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
        const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
        const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
        const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

        document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

        if(distanciaAteOEvento < 0){
            clearInterval(contaAsHoras);
            document.getElementById('contador').innerHTML = "O evento já começou!";
        }
}, 1000);


document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.button--primary');

    if (button) {
        button.addEventListener('click', function() {
            button.classList.toggle('clicked');
        });
    }
});
