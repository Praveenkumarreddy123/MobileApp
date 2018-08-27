import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, enableProdMode } from '@angular/core';
import { AppComponent } from './app.component';
import { DataserviceService } from './services/dataservice.service';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { CONST_ROUTING } from './route/route.module';
import { DateformetPipe } from './pipes/dateformet.pipe';
import { FocusDirective } from './directives/focus.directive';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
/**
 * Angular Guard
 */
import { AlwaysAuthGuard } from './guard/always-auth-guard';
import { Global } from './classes/global';
/**
 * Enviromental setUp
 */
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DateformetPipe,
    FocusDirective,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    CONST_ROUTING
  ],
  providers: [DataserviceService, AlwaysAuthGuard, Global],
  bootstrap: [AppComponent]
})
export class AppModule { }
