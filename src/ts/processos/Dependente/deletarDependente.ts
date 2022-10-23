import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import Impressor from "../../interfaces/impressor";
import ImpressoraCliente from "../../impressores/impressorCliente";

export default class DeletarDependente extends Processo {
    private clientes:Cliente[] = []
    private impressor!:Impressor
    
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {

        this.clientes.forEach(cliente => {
            this.impressor = new ImpressoraCliente(cliente)
            console.log(this.impressor.imprimir())
        })
        let Dependente = this.entrada.receberTexto('Qual o nome do Dependente?')
        
        let Indice = this.clientes.findIndex(i => i.Nome === Dependente)
        this.clientes.splice(Indice,1)
        console.log(' \nO cliente Foi Deleta Com Sucesso...')
    }
}