function mensagemgabriel(callback) {
    setTimeout(() => {
        console.log("bebam agua");
        callback();
    }, 0);
}

function mensagemrafael() {
    console.log("hidratado, bora para cima");
}

mensagemgabriel(mensagemrafael);
//mensagemrafael();