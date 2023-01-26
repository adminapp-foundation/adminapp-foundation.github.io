import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HomeComponent } from './home';
import { NotFoundComponent } from './not-found';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatIconModule,

    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
