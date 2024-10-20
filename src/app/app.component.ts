import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BookJournal_UI';

  private apiUrl = '/server'; // Note: The base URL should match the path you defined in proxy.conf.json

  constructor(private http: HttpClient) { }

  response = "";

  getTestData() {
    return this.http.get(`${this.apiUrl}/test`, { responseType: 'text' }); // This request will be proxied
  }

  ngOnInit() {
    this.getTestData().subscribe((res) => {
      this.response = res;
    },
    (error) => {
      console.error('Error', error);
    })
  }
}
