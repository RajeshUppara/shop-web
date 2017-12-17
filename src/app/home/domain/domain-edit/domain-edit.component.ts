import { Component, OnInit, Input, SimpleChange, EventEmitter,Output } from '@angular/core';
import { Domain } from '../../../apex/entities/domain';
import { DomainForm} from './domain.form'
@Component({
  selector: 'app-domain-edit',
  templateUrl: './domain-edit.component.html',
  styleUrls: ['./domain-edit.component.scss']
})
export class DomainEditComponent implements OnInit {

  @Input()
  inputData: any = {};

  @Output()
  outputEmitter: EventEmitter<any> = new EventEmitter();

  domain: Domain = new Domain();

  myForm: any = DomainForm.init();
  constructor() { 
    DomainForm.edit(this.myForm);
  }

  ngOnInit() {
  }

  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    if (changes.hasOwnProperty('inputData')) {
        if(this.inputData){
          this.domain = this.inputData;
        }
        
    }
  }

  save() {
    console.log(this.domain);
    this.outputEmitter.next(this.domain);
  }
}
