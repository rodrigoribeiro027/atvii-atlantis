import Processo from "../abstracoes/processo";
import MenuTipoBuscaCliente from "../menus/menuTipoBuscaCliente";
import ListarDependenteEspecifico from "./Dependente/listaDependenteEspecifico";
import ListarTitularEspecifico from "./ListaClienteTitular";

export default class TiposBusca extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoBuscaCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new ListarTitularEspecifico()
                this.processo.processar()
                break
            case 2:
                this.processo = new ListarDependenteEspecifico()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}