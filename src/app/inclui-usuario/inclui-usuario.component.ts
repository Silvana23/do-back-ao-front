import { Component, OnInit } from '@angular/core';
import { incluiUsuarioService } from './inclui-usuario.service';

@Component({
  selector: 'app-incluir',
  templateUrl: './inclui-usuario.component.html',
  styleUrls: ['./inclui-usuario.component.scss']
})
export class IncluirComponent implements OnInit {

  constructor(private incluiUsuarioService: incluiUsuarioService) { }

  nomeUsuario= "";
  cpfUsuario= "";
  rgUsuario= "";

  ngOnInit(): void {
  }

  salvar(): void {
    this.incluiUsuarioService.incluirUsuarios(this.nomeUsuario , this.cpfUsuario, this.rgUsuario).subscribe(resp=>{
      alert("Usuario Salvo!!!")
    });
  }
}
