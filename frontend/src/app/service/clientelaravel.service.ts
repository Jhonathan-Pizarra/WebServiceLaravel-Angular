import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fabricante } from './Fabricante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientelaravelService {

  URL = "http://localhost:8000/api/";

  constructor(private httpc: HttpClient) {
  }

  getFabricantes(): Observable<Fabricante> {

    return this.httpc.get<Fabricante>(this.URL+'fabricante'); 
  }

  addFabricante(nombreF:string, telefonoF:string)
  {
    let objetoFabricante = {nombre: nombreF,telefono:telefonoF}
     return this.httpc.post(this.URL+'fabricante',objetoFabricante);

  }

}
