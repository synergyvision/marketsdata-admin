import { AfterContentInit, Component, ViewChild, ViewEncapsulation, PLATFORM_ID, Inject } from '@angular/core';
import { MessagesMenuService, NotificationsMenuService, SideMenuService } from './core';
import { isPlatformBrowser } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './styles/app.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterContentInit {
  @ViewChild('drawerContainer') drawerContainer;
  @ViewChild('sideMenu') sideMenu;
  @ViewChild('sideNotifications') sideNotifications;
  items: Observable<any[]>;
  notifications = [];
  messages = [];
  open_menu = false;

  constructor(
    db: AngularFirestore,
    private sideMenuService: SideMenuService,
    private notificationsMenuService: NotificationsMenuService,
    private messagesMenuService: MessagesMenuService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    notificationsMenuService.getNotifications().then((notifications: any) => {
      this.notifications = notifications;
    });
    messagesMenuService.getMessages().then((messages: any) => {
      this.messages = messages;
    });

    this.items = db.collection('items').valueChanges();
  }

  ngAfterContentInit(): void {
    this.sideMenuService.sidenav = this.sideMenu;
    this.sideMenuService.drawerContainer = this.drawerContainer;
    this.notificationsMenuService.sidenav = this.sideNotifications;
    if (isPlatformBrowser(this.platformId)) {
      this.open_menu = true;
    }
  }
}
