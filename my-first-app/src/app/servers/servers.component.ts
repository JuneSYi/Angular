import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName ='Testserver';
  userName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onCreateUser(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  checkUserName() {
    if (this.userName === '') {
      return true;
    } else {
      return false;
    }
  }

  onResetUserName() {
    this.userName = '';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
