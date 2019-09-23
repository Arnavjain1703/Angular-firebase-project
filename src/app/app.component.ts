import { Component,OnInit } from '@angular/core';
 import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(){
  firebase.initializeApp(
    {
      apiKey: "AIzaSyBw21ltQdROuSENeaN1JL1ZT4Qva-U72Ng",
      authDomain: "angular-project-2c6cf.firebaseapp.com",
      databaseURL: "https://angular-project-2c6cf.firebaseio.com",
      projectId: "angular-project-2c6cf",
      storageBucket: "angular-project-2c6cf.appspot.com",
      messagingSenderId: "824212814630",
      appId: "1:824212814630:web:82e6c8fde633619dc11fe7"
    }
  );
  }
  title = 'my-app';
}
