import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_LABEL_GLOBAL_OPTIONS, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatSlideToggleModule } from '@angular/material';
import { MatSliderModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule, MatFormFieldModule } from '@angular/material';
// import { CustomErrorStateMatcherDirective } from './error-state-matcher';
// import { MatListOptionFixDirective } from './mat-list-option-fix';
// import { NgrxMatSelectViewAdapter } from './mat-select-view-adapter';


@NgModule({
    imports: [
        MatInputModule,
        MatCheckboxModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatSortModule, MatFormFieldModule
      ],
      declarations: [
        //NgrxMatSelectViewAdapter,
        //CustomErrorStateMatcherDirective,
        //MatListOptionFixDirective,
      ],
      exports: [
        MatInputModule,
        MatCheckboxModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatSortModule, MatFormFieldModule
        // NgrxMatSelectViewAdapter,
        // CustomErrorStateMatcherDirective,
        // MatListOptionFixDirective,
      ],
      providers: [
        { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } },
      ],
})
export class MaterialModule { }
