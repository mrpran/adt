import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { HttpClientModule, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/of';
import { NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url = "http://15.206.82.201:8096/";

  constructor(private httpClient: HttpClient) { }

  sendDevliteData(data: string): Observable<any> {

    return this.httpClient.post<string>(this.url + 'devlite/deploy', data, {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain;charset=utf-8',
        'Accept': 'text/plain'
      }), responseType: 'text' as 'json'
    });
  }

  save(data: string): Observable<any> {

    return this.httpClient.post<string>(this.url + 'TriggerCodgenController/codegeninfo', data, {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain;charset=utf-8',
        'Accept': 'text/plain'
      }), responseType: 'text' as 'json'
    });
  }

  status(data: string): Observable<any> {
    return this.httpClient.post<string>(this.url + 'FetchProgressStatusController/statusinfo?type=auto&deployStatus=NO', data, {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain;charset=utf-8',
        'Accept': 'text/plain'
      }), responseType: 'text' as 'json'
    });
  }

  downloadzip(data: string,appName:string) {
    let new_url=this.url + 'DownloadContoller/downloadinfo?appName=' + appName + '&packageName=com.wipro';
    return this.httpClient.post<string>(new_url, data, {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain;charset=utf-8'
      }), responseType: 'ArrayBuffer' as 'json'
    });

  }

  gitPush(data: string): Observable<any> {
    return this.httpClient.post<string>(this.url + 'GitPushController/gitinfo', data, {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain;charset=utf-8',
        'Accept': 'text/plain'
      }), responseType: 'text' as 'json'
    });
  }
  

  


}
