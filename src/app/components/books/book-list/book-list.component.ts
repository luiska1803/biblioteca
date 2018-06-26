import { Component, OnInit } from '@angular/core';


//conectandonos con el servicio
import { BookService } from '../../../services/book.service';
//clase del "book"
import { Book} from '../../../models/book';
//importar servicio de toastr
import {ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList: Book[];

  constructor( 
    private bookService: BookService, 
    private toastr : ToastrService
  ) { }

  //Agregar la lista de libros, convertilo en JSON y almacenar la Key en una variable x
  ngOnInit() {
    this.bookService.getBooks()
      .snapshotChanges()
      .subscribe(item =>{
        this.bookList=[];
        item.forEach(element=>{
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.bookList.push(x as Book);
        });
      });
  }

  onEdit(book : Book){
    this.bookService.selectedBook = Object.assign({},book);
  }

  onDelete($key: string){
    if (confirm('¿Está seguro de querer eliminar?')){
      this.bookService.deleteBook($key);
      this.toastr.success('Successfull Operation', 'Book Deleted');
    }
  }


}
