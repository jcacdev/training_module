import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainviewComponent } from './modules/mainview/mainview.component';
import { MainVideoComponent } from './modules/mainvideo/mainvideo.component';


const routes: Routes = [
    /*{
        path: '',
        component: MainviewComponent,
    },*/
    {
        path: '',
        redirectTo: 'scb/automotive',
        pathMatch: 'full'
    },
    {
        path: 'scb/automotive',
        component: MainviewComponent,
        data: {
            path: 'scb/automotive',
            length: 6
        }
    },
    {
        path: 'scb/dual-purpose',
        component: MainviewComponent,
        data: {
            path: 'scb/dual-purpose',
            length: 4
        }
    },
    {
        path: 'scb/golf-cart',
        component: MainviewComponent,
        data: {
            path: 'scb/golf-cart',
            length: 4
        }
    },
    {
        path: 'scb/lawncare',
        component: MainviewComponent,
        data: {
            path: 'scb/lawncare',
            length: 4
        }
    },
    {
        path: 'scb/marine',
        component: MainviewComponent,
        data: {
            path: 'scb/marine',
            length: 4
        }
    },
    {
        path: 'scb/start-stop',
        component: MainviewComponent,
        data: {
            path: 'scb/start-stop',
            length: 4
        }
    },
    {
        path: 'scb/truck',
        component: MainviewComponent,
        data: {
            path: 'scb/truck',
            length: 6
        }
    },
    {
        path: 'scb/gladiator',
        component: MainviewComponent,
        data: {
            path: 'scb/gladiator',
            length: 4
        }
    },
    {
        path: 'scb/amp-tech-flooded-deep-cycle',
        component: MainviewComponent,
        data: {
            path: 'scb/amp-tech-flooded-deep-cycle',
            length: 4
        }
    },

    {
        path: 'exide/evolution-start-stop',
        component: MainviewComponent,
        data: {
            path: 'exide/evolution-start-stop',
            length: 4
        }
    },
    {
        path: 'exide/heavy-commercial',
        component: MainviewComponent,
        data: {
            path: 'exide/heavy-commercial',
            length: 4
        }
    },
    {
        path: 'exide/industrial-cycling',
        component: MainviewComponent,
        data: {
            path: 'exide/industrial-cycling',
            length: 4
        }
    },
    {
        path: 'exide/marine-stowaway',
        component: MainviewComponent,
        data: {
            path: 'exide/marine-stowaway',
            length: 4
        }
    },
    {
        path: 'exide/passenger',
        component: MainviewComponent,
        data: {
            path: 'exide/passenger',
            length: 4
        }
    },
    {
        path: 'exide/powerider',
        component: MainviewComponent,
        data: {
            path: 'exide/powerider',
            length: 4
        }
    },
    {
        path: 'exide/suv-4wd-light',
        component: MainviewComponent,
        data: {
            path: 'exide/suv-4wd-light',
            length: 4
        }
    },

    {
        path: 'alco/automotive',
        component: MainviewComponent,
        data: {
            path: 'alco/automotive',
            length: 4
        }
    },
    {
        path: 'alco/automotive-alco3000',
        component: MainviewComponent,
        data: {
            path: 'alco/automotive-alco3000',
            length: 2
        }
    },
    {
        path: 'alco/dual-purpose',
        component: MainviewComponent,
        data: {
            path: 'alco/dual-purpose',
            length: 4
        }
    },
    {
        path: 'alco/lawn-mower',
        component: MainviewComponent,
        data: {
            path: 'alco/lawn-mower',
            length: 4
        }
    },
    {
        path: 'alco/marine',
        component: MainviewComponent,
        data: {
            path: 'alco/marine',
            length: 4
        }
    },
    {
        path: 'alco/start-stop',
        component: MainviewComponent,
        data: {
            path: 'alco/start-stop',
            length: 4
        }
    },
    {
        path: 'alco/truck',
        component: MainviewComponent,
        data: {
            path: 'alco/truck',
            length: 4
        }
    },
    {
        path: 'video',
        component: MainVideoComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
