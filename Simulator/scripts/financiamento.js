import { parcelas } from "./parcelas.js";

class financiamento{
    #taxajuros;
    #prazo;
    #parcelas = [];
    constructor(valor, entrada, taxajuros, prazo){
        this.#taxajuros = taxajuros;
        this.#prazo = prazo;
        this.#parcelas.push(new parcelas(0, 0, 0, 0, valor - entrada));
    }

    static calcJuros(valor, taxajuros){
        return valor*(taxajuros/100);
    }
    
    calcParcelasMensais(){
        let saldo = this.#parcelas[this.#parcelas.length-1].getsaldo();
        let prazo = this.#prazo - (this.#parcelas.length-1);
        let amortização = saldo/prazo;
        for (let i = 0; i < prazo; i++) {
            const numero = this.#parcelas.length;
            const juros = financiamento.calcJuros(saldo, this.#taxajuros);
            const valor = juros + amortização;
            saldo -= amortização;
            if(saldo < 0){saldo = 0;}
            this.#parcelas.push(new parcelas(numero, valor, juros, amortização, saldo));            
        }
    }

    ExibirParcelas(){
        const parcelas = this.#parcelas.slice(1);
        for (const parcela of parcelas) {
            const linha = corpoTabela.insertRow(-1);
            for (const dado of parcela.getDadosFormatados()) {
                const celula = linha.insertCell(-1);
                celula.textContent = dado;
            }
        }
    }
}