import { NbButtonModule, NbLayoutModule, NbThemeModule } from "@nebular/theme";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BoardComponent } from "./board/board.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SquareComponent } from "./square/square.component";

@NgModule({
  declarations: [AppComponent, SquareComponent, BoardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: "cosmic" }),
    NbLayoutModule,
    NbButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
