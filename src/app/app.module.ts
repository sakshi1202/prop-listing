import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { from } from 'rxjs';
import { AngularFireModule } from '@angular/fire';
import { FirebaseService } from './services/firebase.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const environment = {
  apiKey: 'AIzaSyC-fVzSwbbbTPNRAwgHICRnbeyvzGNwxn8',
  authDomain: 'proplisting-c947c.firebaseapp.com',
  databaseURL: 'https://proplisting-c947c.firebaseio.com',
  projectId: 'proplisting-c947c',
  storageBucket: 'proplisting-c947c.appspot.com',
  messagingSenderId: '289373876559',
  appId: '1:289373876559:web:5e13613c65eb94172d553a',
  measurementId: 'G-LTG7LJYM5P',
};
const appRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'add-listings', component: AddListingComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    AngularFireModule.initializeApp(environment),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
