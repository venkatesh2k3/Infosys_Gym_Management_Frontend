import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(public http:HttpClient) {  }
  public PostData(a:any)
  {
    return this.http.post('http://192.168.0.108:8181/gym-reg',a);
  }
  public GetData(a:any)
  {
    return this.http.post('http://192.168.0.108:8181/login',a);
  }
  public GetSlot()
  {
    return this.http.get('http://192.168.0.108:8181/api/slots');
  }
  public postSlot()
  {
    return this.http.get('http://192.168.0.108:8181/api/slots');
  }
  public GetBookings()
  {
    return this.http.get<any[]>('http://192.168.0.108:8181/api/bookings');
  }
  public postBookings(a:any)
  {
    return this.http.post<any[]>('http://localhost:8181/api/bookings',a);
  }
  public getReg()
  {
    return this.http.get<any[]>('http://localhost:8181/gym-list');
  }
}

 