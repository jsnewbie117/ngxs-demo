import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const modules = [
  CommonModule
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
