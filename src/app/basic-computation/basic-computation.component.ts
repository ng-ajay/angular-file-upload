import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-computation',
  templateUrl: './basic-computation.component.html',
  styleUrls: ['./basic-computation.component.css']
})
export class BasicComputationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  add(a,b){
    return a + b;
  }
  subtract(a,b){
    return a-b;
  }
  multiply(a,b){
    return a*b;
  }
  divide(a,b){
    return a/b;
  }

}
