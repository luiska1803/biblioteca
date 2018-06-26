import { Component, OnInit } from '@angular/core';

// servicio para el typescript de "selectedbook"
import { BookService } from '../../../services/book.service';
// Importar el NgForm
import { NgForm } from '@angular/forms';
// class "book"
import { Book } from '../../../models/book';
//importar servicio de toastr
import {ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private toastr : ToastrService
  ) { }

  ngOnInit() {
    this.bookService.getBooks();
    this.resetForm();
  }

  onSubmit(bookForm: NgForm){
    if(bookForm.value.$key == null)
      this.bookService.insertBook(bookForm.value),
      this.toastr.success('Successful Operation', 'Libro agregado a la base de datos')
    else
      this.bookService.updateBook(bookForm.value),
      this.toastr.success('Successful Operation', 'Libro Modificado correctamente');
    
    this.resetForm(bookForm);
    
  }


  resetForm(bookForm?: NgForm){
    if (bookForm != null)
      bookForm.reset();
      this.bookService.selectedBook = new Book();
  }

}
