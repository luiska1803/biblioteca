import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importar el modulo toastr para que funcione en la aplicación
import { ToastrModule } from 'ngx-toastr';
//import para que funcione ngModel
import { FormsModule } from '@angular/forms';
//importar animaciones de angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
//components
import { BooksComponent } from './components/books/books.component';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { BookComponent } from './components/books/book/book.component';
//services
import { BookService } from './services/book.service;
import { HomePageComponent } from './components/home-page/home-page.component;
import { LoginPageComponent } from './components/login-page/login-page.component;
import { RegisterPageComponent } from './components/register-page/register-page.component;
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component''''';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookListComponent,
    BookComponen,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NotFoundPageComponentt
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
