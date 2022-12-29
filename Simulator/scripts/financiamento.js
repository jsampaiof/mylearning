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
}