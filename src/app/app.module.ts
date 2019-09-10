import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { BlockOneComponent } from './blocks/block-one/block-one.component';
import { BlockTwoComponent } from './blocks/block-two/block-two.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { SalesTabsComponent } from './common/sales-tabs/sales-tabs.component';
import { ThousandPipe } from './pipes/thousand.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MomentPipe } from './pipes/moment.pipe';


const appRoutes: Routes = [
  { path: '',  redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    BlockOneComponent,
    BlockTwoComponent,
    PageNotFoundComponent,
    SalesTabsComponent,
    ThousandPipe,
    MomentPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
