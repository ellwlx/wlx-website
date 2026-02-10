import { Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    { path: '', component: HomeComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'portfolio', component: PortfolioComponent}
];
