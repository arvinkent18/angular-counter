import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './counter/buttons/buttons.component';
import { CounterComponent } from './counter/counter.component';
import { CustomComponent } from './counter/custom/custom.component';
import { OutputComponent } from './counter/output/output.component';
import { counterReducer } from './counter/store/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    OutputComponent,
    ButtonsComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      counter: counterReducer,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
