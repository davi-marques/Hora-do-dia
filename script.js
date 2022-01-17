function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagen')
    var data = new Date()
    var hora = data.getHours()
    // estou trabalhando nisso //
    var min = data.getMinutes()
    var seg = data.getSeconds()
    /////////////////////////////
    var rep = true
    
    msg.innerHTML = `Agora são ${hora} horas.`
    // msg.innerHTML = `Agora são ${hora}:${min}:${seg} .`

    if (hora >= 5 && hora < 12) {
        // BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}