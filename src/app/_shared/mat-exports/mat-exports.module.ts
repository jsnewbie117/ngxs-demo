import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

const modules = [
  MatTooltipModule,
  MatListModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule
];

@NgModule( {
  imports : modules,
  exports : modules,
  declarations : []
} )
export class MatExportsModule {
}
