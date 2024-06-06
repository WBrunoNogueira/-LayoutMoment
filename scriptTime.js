
    function exibirHoraAtual() {
        var agora = new Date();
        var hora = agora.getHours();
        var minutos = agora.getMinutes();


        hora = hora < 10 ? "0" + hora : hora;
        minutos = minutos < 10 ? "0" + minutos : minutos;
    

        var horaAtual = hora + ":" + minutos;
        document.querySelector(".horaAtual").innerHTML = horaAtual;
    }

    // Atualizar a hora a cada segundo
    setInterval(exibirHoraAtual, 1000);
