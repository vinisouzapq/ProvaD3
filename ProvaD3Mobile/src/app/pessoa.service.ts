import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

    constructor(private st: Storage) { }
    
    async insertPessoa(pessoa: Pessoa){
        let pessoas: Pessoa[] = await this.st.get("pessoas") || [];
        pessoa.id = pessoas.length + 1;
        return this.st.set("pessoas", [...pessoas, pessoa]);
    } 

    async byId(id) {
        let pessoas: Pessoa[] = await this.st.get("pessoas") || [];
        return pessoas.find((pessoa) => pessoa.id == id);
    }
    async bySaudeMental(saudeMental) {
        let pessoas: Pessoa[] = await this.st.get("pessoas") || [];
        return pessoas.filter((pessoa) => pessoa.saudeMental);
    }
}
