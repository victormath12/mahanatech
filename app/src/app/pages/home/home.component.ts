import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Message, MailjetObject } from './../../shared/models/mailjet.types';
import { Visitante } from '../../shared/models/visitante.types';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private dbVisitantes: AngularFirestoreCollection<any>;
  private formData: Visitante;

  private MailjetBody: MailjetObject;
  private Messages: Message;
  private resultMail: any;

  constructor(private db: AngularFirestore, private http: HttpClient) {
    this.dbVisitantes = db.collection<any>('visitantes');
  }

  ngOnInit() {
    this.MailjetBody = new MailjetObject();
    this.Messages = new Message();
    this.Messages.From = { Email: 'lucasftecinfo@gmail.com', Name: 'Igreja Mahanaim' };
    this.Messages.TemplateID = 351469;
    this.Messages.TemplateLanguage = true;
    this.Messages.Subject = 'Igreja Mahanaim | Bem Vindos';
  }

  onSubmit(form: NgForm) {
    this.formData = form.value;
    console.log(this.formData);
    this.dbVisitantes.add(this.formData);
    this.sendMail();
  }

  sendMail() {

    const firstName = this.formData.email.split(' ')[0];
    this.Messages.To = [ { Email: this.formData.email, Name: this.formData.nome } ];
    this.Messages.Variables = {firstname: firstName};

    this.MailjetBody.Messages = [];
    this.MailjetBody.Messages.push(this.Messages);

    const headers = new HttpHeaders();
    headers.append('Authorization', 'Basic ZDZkNmJmMDkzMTk2ZTIwZDdjOWYxZDllOTMwMmFkNDI6ZDk5Zjc5N2U3MGJiNmQ3NWE5ZGZkYTkzMzk1NzVmMjk=');
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    this.http.post('https://api.mailjet.com/v3.1/send', this.MailjetBody, {headers: headers})
             .subscribe(
                data => {
                  this.resultMail = JSON.stringify(data);
                  console.log(this.resultMail);
                },
                error => alert(error),
                () => console.log('acesso a webapi post ok...')
             );
  }

}
