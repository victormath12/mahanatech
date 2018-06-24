import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Message, MailjetObject } from './../../shared/models/mailjet.types';
import { Visitante } from '../../shared/models/visitante.types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private dbVisitantes: AngularFirestoreCollection<any>;
  private formData: Visitante;
  private salvedIntoDb = false;
  public message: string;

  constructor(public snackBar: MatSnackBar, private db: AngularFirestore, private http: HttpClient) {
    this.dbVisitantes = db.collection<any>('visitantes');
  }

  ngOnInit() { }

  onSubmit(form: NgForm) {

    this.formData = form.value;
    console.log(this.formData);

    this.addToDatabase();

    if(this.salvedIntoDb){
      this.sendAPIMail();
      this.resetState(form);
    }
  }

  addToDatabase(){
    this.dbVisitantes.add(this.formData);
    this.salvedIntoDb = true;
  }

  sendAPIMail() {

    console.log("Sending to mailjet");

    let url = `https://us-central1-mahanatech-app.cloudfunctions.net/app/visitantes/mail`
    let headers = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

    let visitante: Visitante = new Visitante();
    visitante.nome = this.formData.nome;
    visitante.email = this.formData.email;
    visitante.firstname = this.formData.nome;

    console.log(visitante);

    this.http.post(url, visitante, { headers }).toPromise()
        .then( res => {
           console.log(res)
        }).catch(err => {
            console.log(err)
        });

    this.message = "Enviado com Sucesso";
    this.showMessage();
  }

  resetState(form){
    this.message = '';
    form.reset();
    form.resetForm();
    this.formData = new Visitante();
    this.salvedIntoDb = false;
  }

  showMessage() {
    this.snackBar.open(this.message, 'Fechar', {
      duration: 2000,
    });
  }

}
