import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(public http:HttpClient) {  }
  public PostData(a:any)
  {
    return this.http.post('http://192.168.0.107:8181/gym-reg',a);
  }
  public GetData(a:any)
  {
    return this.http.post('http://192.168.0.107:8181/login',a);
  }
}
