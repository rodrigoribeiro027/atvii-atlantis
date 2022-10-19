import Menu from "../interfaces/menu";

export default class MenuPrincipal implements Menu {
    mostrar(): void {
        console.log(`******************************************`)
        console.log(`| Por favor, selecione uma opção...`)
        console.log(`----------------------`)
        console.log(`| Opções para Cliente:`)
        console.log(`----------------------`)
        console.log(`| 1 - Cadastrar cliente`)
        console.log(`| 2 - Editar cliente`)
        console.log(`| 3 - Listar cliente(s)`)
        console.log(`| 4 - Listar cliente Especifico`)
        console.log(`| 5 - Listar dependentes`)
        console.log(`| 6 - Excluir cliente`)
        // console.log(`******************************************`)
        // console.log(`| Opções para Dependente:`)
        // console.log(`------------------------------------------`)
        // console.log(`| 7  - Cadastrar Dependente`)
        // console.log(`| 8  - Editar Dependente`)
        // console.log(`| 9  - Listar Dependente(s)`)
        // console.log(`| 10 - Listar Dependente Especifico`)
        // console.log(`| 11 - Listar dependente`)
        // console.log(`| 12 - Excluir Dependente`)
        // console.log(`******************************************`)
        console.log(`| 0 - Sair`)
        console.log(`------------------------------------------`)
    }
}