import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 
    
  }

  getData(category: string) : Observable<any> {
    return this.http.get(`${environment.apiUrl}` + category)
  }

  getCharacterById(id: string): Observable<any> {
    const url = `${environment.apiUrl}/id/${id}.json`
    return this.http.get<any>(url)
  }

}
