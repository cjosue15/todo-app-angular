import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.routes';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

// Pages
import { HomeComponent } from './pages/home/home.component';

// Components
import { ComponentsModule } from './components/components.module';

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [BrowserModule, AppRoutingModule, ComponentsModule, AngularFireModule.initializeApp(environment.firebase)],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
