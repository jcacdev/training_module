import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainviewComponent } from './modules/mainview/mainview.component';
import { MainVideoComponent } from './modules/mainvideo/mainvideo.component';


const routes: Routes = [
    {
        path: '',
        component: MainviewComponent,
    },
    {
        path: 'video',
        component: MainVideoComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
