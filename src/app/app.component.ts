import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './Services/auth.service';
import { LoginComponent } from './Pages/login/login.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularDocs';
  isLoggedIn=false;
  constructor(private authService: AuthService) {
    this.authService.isLoggedIn.subscribe((status) => {
      this.isLoggedIn = status
    })
   }

  
}
