import { EditProductComponent } from './edit-product/edit-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LandingComponent } from './landing/landing.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', component: LandingComponent, pathMatch: 'full' },
    { path: 'products', component: ProductListComponent },
    { path: 'products/new', component: CreateProductComponent },
    { path: 'products/edit/:id', component: EditProductComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);
