import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressoraCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemDependentes extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        console.log('Iniciando a listagem dos Depentendes dos titulares...')
        this.clientes.forEach(cliente => {
            if (this.titular(cliente)) {
                this.impressor = new ImpressoraCliente(cliente)
                console.log(this.impressor.imprimir())
            }
        })
    }
    private titular(cliente: Cliente): boolean {
        let verificacao = false
        if (cliente.Titular != null) {
            verificacao = true
        }
        return verificacao
    }
}