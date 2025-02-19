import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Inicio!'
    },
    {
        path: 'contact',
        title: 'contact',
        loadComponent: () => import('./pages/contact/contact.component')
    },
    {
        path: 'recipe',
        title: 'recipe',
        loadComponent: () => import('./pages/recipe/recipe.component')
        //component: RecipeComponent 
    },
    {
        path: 'event',
        title: 'event',
        loadComponent: () => import('./pages/events/events.component')
        //component: RecipeComponent 
    },
    {
        path: 'feedbacks',
        title: 'feedbacks',
        loadComponent: () => import('./pages/feedbacks/feedbacks.component')
        //component: RecipeComponent 
    }
];
