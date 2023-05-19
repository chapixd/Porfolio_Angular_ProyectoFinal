import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from '../model/educacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
URL= "https://portfolio-backend-ies9.onrender.com/educacion/"
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.URL + 'lista');
  }

  public detail(id:number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.URL + `detail/${id}`);
  }

  public save(edu:Educacion): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', edu);
  }

  public update(id: number, edu:Educacion): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`,edu);
  }

  public delate(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
