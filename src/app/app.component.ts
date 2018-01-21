import { Component } from '@angular/core';
import {query} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public url = 'http://suggestqueries.google.com/complete/search';
  public params = {
    hl: 'en',
    ds: 'yt',
    xhr: 't',
    client: 'youtube',
    q: query,
  };
  public search = '';

  handleResultSelected (result) {
    this.search = result;
  }
}
