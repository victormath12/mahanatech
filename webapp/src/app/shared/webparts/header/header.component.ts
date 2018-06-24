import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, Subject } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  menuClicked = new EventEmitter;

  usuarioLogado: Object;

  private providerAuth: firebase.auth.GoogleAuthProvider;

  constructor(private fbAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.providerAuth = new firebase.auth.GoogleAuthProvider();
  }

  login() {

    this.fbAuth.auth.signInWithPopup(this.providerAuth).then((result) => {
    console.log('Firebase User: ', result.user);
      this.usuarioLogado = {
        nome: result.user.displayName,
        email: result.user.email,
        telefone: result.user.phoneNumber,
        avatar: result.user.photoURL,
      };
      console.log(this.usuarioLogado);
    }).catch((error) => {
      console.log('Erro ao Autenticar: ', error);
    });
  }

  singup() {
    this.router.navigate(['/login']);
  }

  clickMenuButton() {
    this.menuClicked.emit(true);
  }

}
