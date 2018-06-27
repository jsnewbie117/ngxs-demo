import { MatExportsModule } from './mat-exports.module';

describe( 'MatExportsModule', () => {
  let matExportsModule : MatExportsModule;

  beforeEach( () => {
    matExportsModule = new MatExportsModule();
  } );

  it( 'should create an instance', () => {
    expect( matExportsModule ).toBeTruthy();
  } );
} );
