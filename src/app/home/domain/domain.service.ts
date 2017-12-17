import { Injectable } from '@angular/core';
import { Props } from '../../apex/common/props';
import { AppService } from '../../shared/service/app.service';
import { HttpClient } from '@angular/common/http';
import { Domain } from '../../apex/entities/domain';

@Injectable()
export class DomainService {

  private dataList: Domain[] = [];
  constructor(private http: HttpClient, private appService: AppService) { }

  getDomainList(){
    // this.appService.showLoader(true);
    // this.url = this.host+"/branch/";
    // return this.http.post(this.url, {data: data});
    this.dataList = [
      {
        id: 1,
        name: 'Domain1',
        desc: 'abcd1'
      },
      {
        id: 2,
        name: 'Doamin2',
        desc: 'abcd1'
      },
    ];
    return this.dataList;
  }

  addDomain(item: any) {
    this.dataList.push(item); 
  }
}
