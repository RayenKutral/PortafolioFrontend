import { Injectable } from '@angular/core';
import { Estudios } from '../model/estudios';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SEstudiosService {
  expURL = 'https://backendmfv.onrender.com/estudios/'


  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Estudios[]>{    
    return this.httpClient.get<Estudios[]>(this.expURL+ 'lista')
  }

  public detail(id : number): Observable<Estudios>{
    return this.httpClient.get<Estudios>(this.expURL+ `detail/${id}`)
  }
  public save(estudios: Estudios): Observable<any>{
    return this.httpClient.post<any>(this.expURL+'create', estudios); 
  }

  public update(id: number, estudios: Estudios): Observable<any>{
    return this.httpClient.put<any>(this.expURL+`update/${id}`, estudios);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL+`delete/${id}`);
  }
}

