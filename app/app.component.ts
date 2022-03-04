import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

   width : any=0;
  

  constructor(){
    this.runProgressBar();
  }

  runProgressBar(){
    Observable.timer(1,1000)
    .takeWhile(()=>
       this.isWidthWithinLimit()
       )
    .subscribe(()=>{
      this.width=this.width+1;
      console.log(this.width);
    })
    
  }

  isWidthWithinLimit(){
    if(this.width===100){
      return false;
    }else{
      return true;
    }
  }
}
