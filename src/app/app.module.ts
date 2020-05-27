import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {NgBusyModule} from 'ng-busy';
import { DevliteComponent } from './devlite/devlite.component';
import { AdtComponent } from './adt/adt.component';
import { TestComponent } from './test/test.component';

const appRoutes: Routes = [
  { path: 'test', component: TestComponent},
  { path: '', component: AppComponent},
  { path: 'devlite', component: DevliteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DevliteComponent,
    AdtComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
    })
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
