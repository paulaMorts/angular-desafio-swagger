import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Contato } from './contato.interface';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  public API_URL: string = 'http://localhost:8003';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) {}

  public obterContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(`${this.API_URL}/contatos/getLista`);
  }

  public obterUmContato(id: number): Observable<Contato> {
    return this.http.get<Contato>(`${this.API_URL}/contatos/` + id);
  }

  public salvarContato(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(`${this.API_URL}/contatos/postSalvar`, contato);
  }

  public atualizarContato(
    contato: Contato,
    novosDados: Contato
  ): Observable<Contato> {
    return this.http.put<Contato>(
      `${this.API_URL}/contatos/` + contato.id,
      novosDados,
      this.httpOptions
    );
  }

  public removerContato(contato): Observable<Contato> {
    return this.http.delete<Contato>(`${this.API_URL}/contatos/` + contato);
  }

  public obterSexo() {
    return this.http.get(`${this.API_URL}/genero/getListaGenero`);
  }
}
