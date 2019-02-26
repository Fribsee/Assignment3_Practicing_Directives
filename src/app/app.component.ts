import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clicksArray = [];
  i=1;



onButtonPush(){
  this.clicksArray.push(this.i++);
console.log(this.clicksArray);

}
numberOfClicks(){
  return this.i-1;
}

}
