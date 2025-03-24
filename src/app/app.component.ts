import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  logoPath = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbqt1bChQ8i-BfxpDMol6aBwJkkJtdR4Vv1A&s';  

  // Method to open BridgeLabz site in a new tab
  openBridgeLabzSite() {
    window.open('https://www.bridgelabz.com/', '_blank');
  }
}
