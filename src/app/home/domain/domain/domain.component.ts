import { Component, OnInit } from '@angular/core';
import { DomainService } from '../domain.service';
import { Domain } from '../../../apex/entities/domain';
@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss']
})
export class DomainComponent implements OnInit {

  dataList: any[] = [];
  item: Domain = new Domain();
  constructor(private domainService: DomainService) { }

  ngOnInit() {
    this.getDataList();
  }

  getDataList() {
    this.dataList = this.domainService.getDomainList();
  }

  add(item: any) {
    console.log(item);
    if (item) {
      this.item = item;
    } else {
      this.item = new Domain();
    }

  }

  submit($event: any) {
    console.log($event);
    if (!$event.id) {
      this.item = $event;
      this.item.id = Math.random();
      this.domainService.addDomain(this.item);
    }
  }

}
