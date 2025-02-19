import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Inicio!'
    },
    {
      path: 'about-us',
      title: 'about-us',
      loadComponent: () => import('./pages/about-us/about-us.component')
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
        path: 'events',
        title: 'events',
        loadComponent: () => import('./pages/events/events.component')
        //component: RecipeComponent
    },
    {
        path: 'feedbacks',
        title: 'feedbacks',
        loadComponent: () => import('./pages/feedbacks/feedbacks.component')
        //component: RecipeComponent
    },
    {
      path: 'custumer-support',
      title: 'custumer-support',
      loadComponent: () => import('./pages/customer-support/customer-support.component')
      //component: RecipeComponent
    },
    {
      path: 'payment-methods',
      title: 'payment-methods',
      loadComponent: () => import('./pages/payment-methods/payment-methods.component')
      //component: RecipeComponent
    },
    {
      path: 'location',
      title: 'location',
      loadComponent: () => import('./pages/location/location.component')
      //component: RecipeComponent
    }
];
