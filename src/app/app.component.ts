import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clicksArray = [];
  i=1;
  toggleButton = true;



onButtonPush(){
  this.clicksArray.push(this.i++);
  this.toggleButton = !this.toggleButton;

}
numberOfClicks(){
  return this.i-1;
}

}
