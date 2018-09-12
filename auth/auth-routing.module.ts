import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {LandingComponent} from './signup/landing/landing.component';
import {CardPositionTitleComponent} from './signup/card-position-title/card-position-title.component';
import {CardPositionSelectComponent} from './signup/card-position-select/card-position-select.component';
import {CardExpertisesSelectComponent} from './signup/card-expertises-select/card-expertises-select.component';
import {CardTechnologiesSelectComponent} from './signup/card-technologies-select/card-technologies-select.component';
import {CardBudgetComponent} from './signup/card-budget/card-budget.component';
import {CardPasswordComponent} from './signup/card-password/card-password.component';
import {CardFinishedComponent} from './signup/card-finished/card-finished.component';

const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'position-description', component: CardPositionTitleComponent },
    { path: 'position-choose', component: CardPositionSelectComponent },
    { path: 'position-expertises', component: CardExpertisesSelectComponent },
    { path: 'position-technologies', component: CardTechnologiesSelectComponent },
    { path: 'position-budget', component: CardBudgetComponent },
    { path: 'position-password', component: CardPasswordComponent },
    { path: 'position-end', component: CardFinishedComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
