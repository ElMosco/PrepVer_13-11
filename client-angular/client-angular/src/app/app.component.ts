import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  results: string[];
  products : string[];
  constructor(private http: HttpClient) {}

    ngOnInit(): void {
      // Make the HTTP request:
      this.http.get('https://3000-b3f1abb7-43d8-4381-9cb3-235e5523852f.ws-eu01.gitpod.io/api').subscribe(data => {
        // Read the result field from the JSON response.
        this.results = data['results'];
      });

      this.http.get('https://3000-b3f1abb7-43d8-4381-9cb3-235e5523852f.ws-eu01.gitpod.io/api/products').subscribe(data => {
        // Read the result field from the JSON response.
        this.products = data['products'];
      });
    }

}
