import { Routes } from '@angular/router';
import { HeaderComponent } from './_components/header/header.component';

export const routes: Routes = [
    {
        path: '',
        component: HeaderComponent,
        title: 'Inicio!'
    }
];
