import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatExportsModule } from './mat-exports/mat-exports.module';

const modules = [
  CommonModule,
  FormsModule,
  MatExportsModule
];

@NgModule( {
  imports : [
    ...modules
  ],
  exports : [
    ...modules
  ],
  declarations : []
} )
export class SharedModule {
}
