import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'modalReutilizavel';

  mostrar: boolean = false
  segundoModal: boolean = false
  
  teste(){
    this.mostrar = !this.mostrar
  }

  abrirSegundoModal(){
    this.segundoModal = !this.segundoModal
  }

  tags: string[] = [];
  selectedTag: string
  linkImage: string;
  statusCode: string;

  constructor(
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.appService.getTags()
    .subscribe(tags => {
      console.log(tags);
      this.tags = tags;
    });
  }

  consultar() {
    console.log(this.selectedTag);
    this.linkImage = 'https://http.cat/' + Number(this.statusCode);
  }

}
