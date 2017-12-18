import { Component, OnInit } from '@angular/core';
import { DomainService } from '../domain.service';

@Component({
  selector: 'app-domain-home',
  templateUrl: './domain-home.component.html',
  styleUrls: ['./domain-home.component.scss']
})
export class DomainHomeComponent implements OnInit {
  dataList: any[] = [];

  constructor(private domainService: DomainService) { }

  ngOnInit() {
    this.getDataList();
  }

  getDataList() {
    this.dataList = this.domainService.getDomainList();
  }
}
