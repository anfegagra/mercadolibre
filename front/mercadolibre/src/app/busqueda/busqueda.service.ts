import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  constructor(private http: HttpClient) { }

  getBuscar(item:string) {
    return this.http.get<any>("http://localhost:3001/buscar?item=" + item);
  }
}
