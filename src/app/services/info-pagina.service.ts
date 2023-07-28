import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from 'src/app/interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {};
  cargada = false;

  equipo: any [] = [];

  constructor(private http: HttpClient) {

    //console.log('Servicio de Info-Página');

    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo() {

    //Leer archivos JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: infoPagina) => {

        this.cargada = true;
        this.info = resp;
        console.log(resp);

      });
  }

  private cargarEquipo (){

    this.http.get('https://angular-html-21002-default-rtdb.firebaseio.com/Equipo.json')
    
    .subscribe((resp : any)=> { //no agregar los corchetes porque no hace valido que es un arreglo, lo toma como algo redundante

      this.equipo = resp ;
      //console.log(resp);

    });



  }

}
