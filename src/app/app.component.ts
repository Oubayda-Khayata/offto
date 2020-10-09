import { Component } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Offto';

  constructor(
    public ngxLoadingBar: LoadingBarService,
    public mediaObserver: MediaObserver) {}
}
