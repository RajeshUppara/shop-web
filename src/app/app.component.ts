import { Component, ViewChild, OnInit, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ApexService } from './shared/service/apex.service';
import { MatIconRegistry } from '@angular/material';
import { Util } from './shared/utils/util';
import { AppService } from './shared/service/app.service';
import { Storage } from './shared/utils/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  showLoader: boolean = false;
  private _userSubscription: any;
  private _loaderSubscription: any;
  @ViewChild('sidenav') sidenav: MatSidenav;
  menuLetter: string = 'A';
  navMode = 'side';
  showMenu = true;
  sessionUser: any;
  username : String;
  constructor(private apexService: ApexService,  private _iconRegistry: MatIconRegistry, private appService:AppService) {
      this.loadIcons();
   }

  ngOnInit() {
    this._loaderSubscription = this.apexService.loaderEvent.subscribe(data => {
      if (data != this.showLoader) {
        this.showLoader = data;
      }
    });
    this._userSubscription = this.apexService.sessionUserEvent.subscribe(data => {
      console.log(data);
      this.sessionUser = Storage.getSessionUser();
      if(this.sessionUser){
        this.menuLetter = this.sessionUser.name.charAt(0);
      }
      
    });
    if (window.innerWidth < 768) {
      this.navMode = 'over';
    }
     this.apexService.sessionUserEmit(Storage.getSessionUser());
  }  
  loadIcons(){
        this._iconRegistry.addSvgIconSetInNamespace('core',
          this.apexService.bypassURL('/assets/icons/app-icons.svg'));
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
        if (event.target.innerWidth < 768) {
            this.navMode = 'over';
            this.sidenav.close();
        }
        if (event.target.innerWidth > 768) {
           this.navMode = 'side';
           this.sidenav.open();
        }
  }
  logout(){
    Storage.clearSession();
    sessionStorage.clear();

  }
  myProfile() {
    this.appService.navigate('profile/myprofile', []);
  }
}
