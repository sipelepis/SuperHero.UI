import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditHeroComponent } from './components/edit-hero/edit-hero.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditHeroComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule 
  ],
  exports: [
    EditHeroComponent
  ]
})
export class SharedModule { 

}
