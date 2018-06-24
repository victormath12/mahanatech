import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/** Material Design */
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';

/** Services */
import { ValidationService } from './services/validation.service';

/** Webparts */
import { HeaderComponent } from './webparts/header/header.component';
import { FooterComponent } from './webparts/footer/footer.component';
import { MenuComponent } from './webparts/menu/menu.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [
    ValidationService
  ]
})
export class SharedModule { }
