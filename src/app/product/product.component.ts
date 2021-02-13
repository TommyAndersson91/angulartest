import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  templateUrl: './product.component.html' 
}) 
export class ProductComponent implements OnInit { 

  unSaved: boolean = true;        
    constructor() { }

    ngOnInit() {

    }

    canDeactivate(): Observable<boolean> | boolean {


        if (this.unSaved) {

          const result = window.confirm('There are unsaved changes! Are you sure?');

           return of(result);
        }
        return true;
    }   
} 