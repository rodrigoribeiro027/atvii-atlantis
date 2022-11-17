import Processo from "../abstracoes/processo";
import MenuTipoEditar from "../menus/menuTipoEditar";
import Cliente from "../modelos/cliente";
import CadastroDependente from "./Dependente/cadastroDependente";
import EditarClienteTitular from "./editarClienteTitular";

export default class TipoEdicao extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoEditar()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new EditarClienteTitular() //Edicao Cliente
                this.processo.processar()
                break
            case 2:
                this.processo = new CadastroDependente() //Edicao Dependente
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}