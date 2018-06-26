import { Injectable } from '@angular/core';
//firebase 
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'; //Angularfirebase: conexion a firebase; AngularFirelist: poder listar 

import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  booklist: AngularFireList<any>;
  selectedBook: Book = new Book();

  constructor(private firebase: AngularFireDatabase) { }

  getBooks(){
    return this.booklist = this.firebase.list('books');
  }

  insertBook(book: Book){
    this.booklist.push({
      name: book.name,
      author: book.author,
      gender: book.gender,
      language: book.language,
      country: book.country,
      pub_date: book.pub_date,
      pages: book.pages,
      reserved_books: book.reserved_books,
      total_books: book.total_books
    });
  }

  updateBook(book: Book){
    this.booklist.update(book.$key, {
      name: book.name,
      author: book.author,
      gender: book.gender,
      language: book.language,
      country: book.country,
      pub_date: book.pub_date,
      pages: book.pages,
      reserved_books: book.reserved_books,
      total_books: book.total_books
    });
  }

  deleteBook($key: string){
    this.booklist.remove($key);
  }
}
