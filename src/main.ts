import { bootstrapApplication } from '@angular/platform-browser';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    MessageService,
    importProvidersFrom(ToastModule)
  ],
})
  .catch((err) => console.error(err));
