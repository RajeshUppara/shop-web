import { Component, OnInit, Input, SimpleChange, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-domain-list',
  templateUrl: './domain-list.component.html',
  styleUrls: ['./domain-list.component.scss']
})
export class DomainListComponent implements OnInit {

  @Input()
  inputData: any[] = [];

  txnList: any[] = [];

  @Output()
  outputEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }


  ngOnInit() {
  }

  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    if (changes.hasOwnProperty('inputData')) {
        this.txnList = this.inputData;
    }
  }

  edit(item: any){
    console.log(item);
    this.outputEmitter.next(item);
  }

}
