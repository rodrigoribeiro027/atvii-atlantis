import Processo from "../abstracoes/processo";
import MenuTipoCadastroCliente from "../menus/menuTipoCadastroCliente";
import MenuTipoDeletar from "../menus/menuTipoDeletar";
import CadastroClienteTitular from "./cadastroClienteTitular";
import deletarTitular from "./deletarTitular";
import CadastroDependente from "./Dependente/cadastroDependente";
import DeletarDependente from "./Dependente/deletarDependente";

export default class TiposDeletar extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoDeletar()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new deletarTitular() //Deletar Cliente
                this.processo.processar()
                break
            case 2:
                this.processo = new DeletarDependente()//Deletar Dependente
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}