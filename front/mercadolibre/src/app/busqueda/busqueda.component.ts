import { Component, OnInit } from '@angular/core';
import { BusquedaService } from './busqueda.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  nombreItem: string;
  resultadoBusqueda = [];

  constructor(private busquedaService: BusquedaService) { }

  ngOnInit() {
  }

  buscar() {
    this.busquedaService.getBuscar(this.nombreItem).subscribe(res =>{
      console.log(res);
      this.resultadoBusqueda = res;
    })
    
  }

}
