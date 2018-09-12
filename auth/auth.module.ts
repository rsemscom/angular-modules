import { NgModule } from '@angular/core';
import {SignupModalComponent} from './signup/signup-modal/signup-modal.component';
import {SignupFormComponent} from './signup/signup-form/signup-form.component';
import {CardFinishedComponent} from './signup/card-finished/card-finished.component';
import {CardBudgetComponent} from './signup/card-budget/card-budget.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LandingComponent} from './signup/landing/landing.component';
import {MatButtonToggleModule, MatDialogModule, MatInputModule, MatSelectModule} from '@angular/material';
import {CardPositionSelectComponent} from './signup/card-position-select/card-position-select.component';
import {CardExpertisesSelectComponent} from './signup/card-expertises-select/card-expertises-select.component';
import {CardTechnologiesSelectComponent} from './signup/card-technologies-select/card-technologies-select.component';
import {CardInputComponent} from './signup/card-input/card-input.component';
import {FormInputComponent} from './signup/form-input/form-input.component';
import {CardTechnologiesSelectFilterPipePipe} from './signup/card-technologies-select/card-technologies-select-filter-pipe.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserInfoFormComponent} from './signup/user-info-form/user-info-form.component';
import {CardLayoutComponent} from './signup/card-layout/card-layout.component';
import {CardPositionTitleComponent} from './signup/card-position-title/card-position-title.component';
import {CardPasswordComponent} from './signup/card-password/card-password.component';
import {BrowserModule} from '@angular/platform-browser';
import {CardNavigationComponent} from './signup/card-navigation/card-navigation.component';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
    declarations: [
        LandingComponent,
        SignupFormComponent,
        SignupModalComponent,
        UserInfoFormComponent,
        FormInputComponent,
        CardPositionTitleComponent,
        CardNavigationComponent,
        CardPositionSelectComponent,
        CardExpertisesSelectComponent,
        CardTechnologiesSelectComponent,
        CardBudgetComponent,
        CardPasswordComponent,
        CardFinishedComponent,
        CardLayoutComponent,
        CardInputComponent,
        CardTechnologiesSelectFilterPipePipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AuthRoutingModule,
        MatDialogModule,
        MatSelectModule,
        MatInputModule,
        MatButtonToggleModule
    ],
    entryComponents: [
        SignupModalComponent
    ]
})
export class AuthModule { }
