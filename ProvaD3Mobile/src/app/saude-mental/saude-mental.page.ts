import { Component, OnInit } from '@angular/core';
import { Pessoa } from "../Pessoa";
import { ToastController } from "@ionic/angular";
import { PessoaService } from "../pessoa.service";

@Component({
    selector: 'app-saude-mental',
    templateUrl: './saude-mental.page.html',
    styleUrls: ['./saude-mental.page.scss'],
})
export class SaudeMentalPage implements OnInit {

    pessoa: Pessoa;
    id: string;
    saudeMental: string;

    constructor(
        private toast: ToastController,
        private pessoaService: PessoaService
    ) { }

    ngOnInit() { }

    async save() {
        await this.pessoaService.insertPessoa(this.pessoa);


        const t = await this.toast.create({
            message: "Pessoa salva com sucesso!",
            duration: 1000,
            position: "bottom",
        });
    }
}