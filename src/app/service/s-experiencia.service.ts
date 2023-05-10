import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  URL = "http://localhost:8080/experiencia/"

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.URL + 'lista');
  }

  public detail(id:number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.URL + `detail/${id}`);
  }

  public save(exp:Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', exp);
  }

  public update(id: number, exp:Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`,exp);
  }

  public delate(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}
