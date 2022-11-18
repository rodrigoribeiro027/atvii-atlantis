import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import MenuTipoEditar from "../menus/menuTipoEditar";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";


export default class EditarClienteTitular extends Processo {
    private cliente!:Cliente
    constructor(){
        super()
        this.menu = new MenuTipoEditar()
        this.execucao = true
    }

    processar(): void {
        console.log('Iniciando o cadastro de um novo cliente')
        
        let novoNome = this.entrada.receberTexto('Digite o novo nome:')
        this.cliente.setNome = novoNome || this.cliente.Nome

        let novoNomeSocial = this.entrada.receberTexto('Digite o novo nome social:')
        this.cliente.setNomeSocial = novoNomeSocial || this.cliente.NomeSocial

        let novaDataNascimento = this.entrada.receberData('Digite a nova data de nascimento:')
        this.cliente.setDataNascimento = novaDataNascimento || this.cliente.DataNascimento
        
        console.log('Finalizando o cadastro do cliente...')
    }
}