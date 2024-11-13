import { Component } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Evidencia de stack MEAN';
  usuarios : any[]=[];
  
  constructor (private usuarioService: UsuarioService){}
  ngOnInit(): void{
    this.cargarUsuarios();
  }
  cargarUsuarios():void{
    this.usuarioService.getUsuarios().subscribe(data=>{
      this.usuarios = data;
    })
  }
}
