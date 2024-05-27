import { Component } from '@angular/core';
import { AppAuthService } from '../../service/app.auth.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    private authService: AppAuthService,
    public oauthService: OAuthService
  ) {}

  login() {
    console.log('login');

    this.authService.login();
  }
}
