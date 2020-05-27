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
  url = "http://13.233.25.149:8096/";
  surl = "http://15.206.75.28:8096/swagger/codegen";

  constructor(private httpClient: HttpClient) { }

  sendJenkinsData(data: string): Observable<any> {
    return this.httpClient.post<string>(this.url + 'JenkinsItemController/iteminfo', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  sendSwagUrlData(data): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('url', data);
    return this.httpClient.post<any>(this.surl , formData, {
      headers: new HttpHeaders({
      }), responseType: 'text' as 'json'
    });
  }


  sendSwagFileData(fileToUpload: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    console.log(formData.get('file'));

    return this.httpClient.post<any>(this.surl , formData, {
      headers: new HttpHeaders({
      }), responseType: 'text' as 'json'
    });
  }

  sendDevliteData(data: string): Observable<any> {
    return this.httpClient.post<string>(this.url + 'devlite/deploy', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
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
