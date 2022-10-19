import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPricipal"
import TipoCadastroCliente from "./tipoCadastroCliente"
import TipoListagemClientes from "./tipoListagemClientes"

export default class Principal extends Processo {
    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente()
                this.processo.processar()
                break
            case 2:
                // Editar cliente
                break
            case 3:
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break
            case 4:
                //Listar cliente Especifico
                break
            case 5:
                // Listar dependentes
                break
            case 6:
                // Excluir cliente
                break
            //--------------------------- Dependente ----------------------------
            case 7:
                //Cadastro Dependente
                break
            case 8:
                // Editar Dependente
                break
            case 9:
                
                break
            case 10:
                //Listar Dependente Especifico
                break
            case 11:
                // Listar dependentes
                break
            case 12:
                // Excluir Dependente
                break
            
            case 0:
                this.execucao = false
                console.log('Até logo!')
                console.clear()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}