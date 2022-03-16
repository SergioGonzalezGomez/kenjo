import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AlbumListComponent } from './album-list/album-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NewAlbumDialog } from 'src/app/new-album-dialog/new-album.dialog';
import { UpdateAlbumDialogComponent } from './update-album-dialog/update-album-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    NewAlbumDialog,
    UpdateAlbumDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    
    RouterModule.forRoot([{
      path: '', component: AlbumListComponent
    }
  ]),
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
