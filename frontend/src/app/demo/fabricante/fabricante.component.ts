import { Component, OnInit } from '@angular/core';
import { ClientelaravelService } from 'src/app/service/clientelaravel.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-fabricante',
  templateUrl: './fabricante.component.html',
  styleUrls: ['./fabricante.component.css']
})
export class FabricanteComponent implements OnInit {

  title='Fabricantes';
  fabricantes: any;
  myFormFabricante: FormGroup;
  constructor(public servc: ClientelaravelService) { }

  ngOnInit(): void {
    this.obtenerFabricantes();

    this.myFormFabricante = new FormGroup({
      nombreF: new FormControl(''),
      telefonoF: new FormControl(''),
    });
  }

  obtenerFabricantes(){
    this.servc.getFabricantes().subscribe(r=>{
      console.table(r);
      return this.fabricantes=r
    })
  }

  ingresarFabricante(){
    let nombre = this.myFormFabricante.value.nombreF;
    let telefono = this.myFormFabricante.value.telefonoF;

    this.servc.addFabricante(nombre,telefono)

    .subscribe(r =>{
      this.obtenerFabricantes()
      this.myFormFabricante = new FormGroup({
        nombreF: new FormControl(''),
        telefonoF: new FormControl(''),
      });
    })
}
}
