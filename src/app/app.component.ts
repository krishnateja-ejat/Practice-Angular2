import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



   public arr:Array<any> =[];
  add_values()
  {
    let first_name=(<HTMLInputElement>document.getElementById('fname')).value;
    let last_name=(<HTMLInputElement>document.getElementById("lname")).value;
    let street=(<HTMLInputElement>document.getElementById("street")).value;
    let city=(<HTMLInputElement>document.getElementById("city")).value;
    let stat=(<HTMLInputElement>document.getElementById("stat")).value;
   let address=
      {
        first_name:first_name,
        last_name:last_name,
        stree:street,
        cit:city,
        sta:stat
      };
   this.arr.push(address);
  console.log(this.arr)
  }


 }





