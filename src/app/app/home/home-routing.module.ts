import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'employee',
        children:
        [
          {
            path: '',
            loadChildren: './employee/employee.module#EmployeePageModule'
          }
        ]
      },
      {
        path: 'details',
        children:
        [
          {
            path: '',
            loadChildren: './details/details.module#DetailsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/tabs/employee',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/tabs/employee',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
