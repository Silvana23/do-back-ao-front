import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entidade/usuario.entities';
import { ListaUsuarioService } from './lista-usuario.service';


@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.scss']
})
export class ListaUsuarioComponent implements OnInit {

  constructor(private listaUsuarioService: ListaUsuarioService) { }

  listaUsuario:Usuario[]= [];

  ngOnInit(): void {
    this.carregarLista();
  }
  carregarLista(): void {
    this.listaUsuarioService.listarUsuarios().subscribe(resp=>{
      this.listaUsuario = resp;
     });
  }
  excluir(usuario: Usuario): void{
    this.listaUsuarioService.excluirUsuarios(usuario).subscribe(resp=>{
      this.carregarLista();
    });
  }

}
