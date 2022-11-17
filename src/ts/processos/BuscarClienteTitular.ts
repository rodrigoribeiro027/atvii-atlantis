import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import ListagemTitulares from "./listagemTitulares";


export default class BuscaDeTitular extends Processo{
    private titular!:Cliente
    private clientes!: Cliente[]
    constructor(){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): Cliente {

    this.processo= new ListagemTitulares()
    this.processo.processar()
    let numeroDocumentado = this.entrada.receberTexto('digite o numero do Documento do Titular:') 
    
    this.clientes.forEach((cliente:Cliente)=>{
        cliente.Documentos.forEach((documento:Documento)=>{
            if(documento.Numero === numeroDocumentado){
                this.titular = cliente
            }
        })
    })
    return this.titular
    }
}