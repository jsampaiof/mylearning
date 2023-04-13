import { financiamento } from "./financiamento.js";
import { parcelas } from "./parcelas.js";

export class financiamentocarencia extends financiamento{
    #carencia;
    #taxajuros;
    #parcelas = [];
    constructor(valor, entrada, taxajuros, prazo, carencia){
        super(valor, entrada, taxajuros, prazo);
        this.#taxajuros = taxajuros;
        this.#parcelas = super.getParcelas();
        this.#carencia = carencia;
    }

    calcParcelasMensais(){
        let saldo = this.#parcelas[0].getSaldo();
        for(let i=0; i < this.#carencia; i++){
            const numero = this.#parcelas.length;
            saldo += financiamento.calcJuros(saldo, this.#taxajuros);
            this.#parcelas.push( new parcelas(numero, 0, 0, 0, saldo));
        }
        super.calcParcelasMensais();
    }
}