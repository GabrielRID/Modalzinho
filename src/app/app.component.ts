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
  terceiroModal: boolean = false
  
  teste(){
    this.mostrar = !this.mostrar
  }

  abrirSegundoModal(){
    this.segundoModal = !this.segundoModal
  }

  abrirTerceiroModal(){
    this.terceiroModal = !this.terceiroModal
  }

  tags: string[] = [];
  GOT: object[] = []
  selectedTag: string
  linkImage: string;
  imageGOT: string;
  statusCode: string;


  constructor(
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.appService.getTags()
    .subscribe(tags => {
      this.tags = tags;
    });

    this.appService.getGOT()
    .subscribe(GOTS => {
      this.GOT = GOTS
    })
  }

  consultar() {
    this.linkImage = 'https://http.cat/' + Number(this.statusCode);
  }

  consultarGOT(){
    let item : any;
    for (item of this.GOT) {
      if (item.id === this.statusCode) {
        this.imageGOT = item.imageUrl
      }
    }
  }
}
