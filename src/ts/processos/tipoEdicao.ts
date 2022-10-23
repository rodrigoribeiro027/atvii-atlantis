import Processo from "../abstracoes/processo";
import MenuTipoCadastroCliente from "../menus/menuTipoCadastroCliente";
import CadastroClienteTitular from "./cadastroClienteTitular";
import CadastroDependente from "./Dependente/cadastroDependente";

export default class TipoEdicao extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoCadastroCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new CadastroClienteTitular() //Edicao Cliente
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