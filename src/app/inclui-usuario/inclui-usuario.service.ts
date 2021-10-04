import { Injectable } from "@angular/core";
import{HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../entidade/usuario.entities";

@Injectable({
  providedIn: 'root'
})
export class incluiUsuarioService{
  constructor(private htpp: HttpClient){ }

  incluirUsuarios(nomeUsuario: string, cpfUsuario:string, rgUsuario:string):Observable<any>{
    const body = JSON.stringify({
      nomeUsuario: nomeUsuario, cpfUsuario: cpfUsuario
     });

    return this.htpp.request('POST' , 'http://localhost:8080/usuario',
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: body
    } )

  }
 }
