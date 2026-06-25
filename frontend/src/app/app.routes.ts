import { Routes } from '@angular/router';
import { Home } from './routes/home/home';
import { Mapjams } from './routes/mapjams/mapjams';
import { Info } from './routes/info/info';
import { Admin } from './routes/admin/admin';
import { Login } from './routes/login/login';
import { CreateMapjams } from './routes/create-mapjams/create-mapjams';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'mapjams', component: Mapjams },
  { path: 'mapjams/create', component: CreateMapjams },
  { path: 'info', component: Info },
  { path: 'admin', component: Admin },
  { path: 'login', component: Login },
];
