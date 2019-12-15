import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private dataSource = new BehaviorSubject('default data');
  currentData = this.dataSource.asObservable();

  constructor(
    @Inject('serviceBaseApiUri') private serviceBaseApiUri: string,
    private http: HttpClient
  ) { }

  getTestData() {
    this.http.get(this.serviceBaseApiUri + 'Test/GetTestData')
      .subscribe((res: string) => {
        this.changeData(res);
      }, (err) => {
        alert("Data Error!");
      });
  }

  changeData(message: string) {
    this.dataSource.next(message)
  }
}