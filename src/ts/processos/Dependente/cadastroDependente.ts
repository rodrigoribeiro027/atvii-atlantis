import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import CadastrarDocumentosCliente from "../cadastrarDocumentosCliente";
import CadastroEnderecoTitular from "../cadastroEnderecoTitular";
import Impressor from "../../interfaces/impressor";
import ImpressoraCliente from "../../impressores/impressorCliente";
import Endereco from "../../modelos/endereco";

export default class CadastroDependente extends Processo {
    private clientes:Cliente[] = []
    private impressor!:Impressor
    private ClienteTitular !:Cliente
    
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {

        this.clientes.forEach(cliente => {
            this.impressor = new ImpressoraCliente(cliente)
            console.log(this.impressor.imprimir())
        })
        let Titular = this.entrada.receberTexto('Qual o nome do seu Titular?')
        console.log('Iniciando o cadastro de um novo cliente...')
        let nome = this.entrada.receberTexto('Qual o nome do novo cliente?')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
        let dependente = new Cliente(nome, nomeSocial, dataNascimento)
        
        this.clientes.forEach(cliente =>{
            if(Titular === cliente.Nome){
                this.ClienteTitular = cliente
            }
        })
        console.log(this.ClienteTitular.Endereco)
        dependente.Endereco = this.ClienteTitular.Endereco.clonar() as Endereco
        console.log(dependente.Endereco)
        dependente.ClienteTitular = this.ClienteTitular

        this.processo = new CadastrarDocumentosCliente(dependente)
        this.processo.processar()

        
        let armazem = Armazem.InstanciaUnica
        armazem.Clientes.push(dependente)

        console.log('Finalizando o cadastro do cliente...')
    }
}