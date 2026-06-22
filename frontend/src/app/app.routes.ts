import { Routes } from '@angular/router';
import { Home } from './routes/home/home';
import { Mapjams } from './routes/mapjams/mapjams';
import { Info } from './routes/info/info';
import { Admin } from './routes/admin/admin';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'MapJams', component: Mapjams },
  { path: 'Info', component: Info },
  { path: 'Admin', component: Admin },
];
