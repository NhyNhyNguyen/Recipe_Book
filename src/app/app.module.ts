import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HeaderComponent } from "./header/header.component";
import { AlertComponent } from "./shared/alert/alert.component";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core.module";
import { LoggingService } from "./logging.service";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent],
  // providers:[LoggingService],
  entryComponents: [AlertComponent]
})
export class AppModule {}