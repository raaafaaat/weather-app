import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {  }
  getWeather(location:any){
    return this.http.get(
        'http://api.weatherstack.com/current?access_key=e2b7477a7384a3940f3aaea825b1e314&query=' + location
    );
  }
}
