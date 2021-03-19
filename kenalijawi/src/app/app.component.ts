import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    public router:Router,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  toggleTheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark');

    }else{
      document.body.setAttribute('color-theme','light');
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.router.navigateByUrl('splash');
    });
  }
}
