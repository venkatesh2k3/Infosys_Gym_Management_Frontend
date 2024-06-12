import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private _resValue: any;

  setResValue(res: any): void {
    this._resValue = res;
  }

  getResValue(): any {
    return this._resValue;
  }
  logout(): void {
    this._resValue = null;
    // Clear other data or tokens here if necessary
  }

  constructor(public http:HttpClient) {  }
  public PostData(a:any)
  {
    return this.http.post('http://192.168.0.108:8181/gym-reg',a);
  }
  public GetData(a:any)
  {
    return this.http.post('http://192.168.0.108:8181/login',a);
  }

  public AdminLogin(a:any)
  {
    return this.http.post('http://192.168.0.108:8181/admin/login',a);
  }
  public GetSlot()
  {
    return this.http.get('http://192.168.0.108:8181/api/slots');
  }
  public postSlot(a:any)
  {
    return this.http.post('http://192.168.0.108:8181/api/slots',a);
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
  public deleteSlot(a:any)
  {
    return this.http.delete<any[]>(`http://localhost:8181/api/slots/${a}`);
  }
  public CancelBooking(a:any)
  {
    return this.http.delete<any[]>(`http://localhost:8181/api/bookings/${a}`);
  }

}

 