import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css']
})
export class ChildFormComponent implements OnInit {
  // @Input() control: FormControl = new FormControl();
  @Input() public formdata: FormGroup | any;

  ngOnInit() { 
    console.log('control', this.formdata);
    
 }
}
