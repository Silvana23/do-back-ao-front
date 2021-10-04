import { Injectable } from "@angular/core";
import{HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../entidade/usuario.entities";

@Injectable({
  providedIn: 'root'
})
export class ListaUsuarioService{
  constructor(private htpp: HttpClient){ }

  listarUsuarios():Observable<Usuario[]>{
    return this.htpp.get<Usuario[]>(
   `http://localhost:8080/usuario`
  );

}
 excluirUsuarios(usuario:Usuario):Observable<any>{
   const body = JSON.stringify(usuario);
   return this.htpp.request( "DELET" , 'http://localhost:8080/usuario', {
     headers: new HttpHeaders( {
  'Content-Type': 'application/json'
     }),
     body: body
   } )

 }
}
