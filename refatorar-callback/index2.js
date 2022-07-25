function mensagemgabriel() {
    const testepromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("bebam agua");
            resolve();        
        }, 0);        
    });
    return testepromise;    
}

function mensagemrafael() {
    console.log("hidratado, bora para cima");
}

mensagemgabriel().then(mensagemrafael);
//mensagemrafael();