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
            length: 6,
            title: 'Automotive Range'
        }
    },
    {
        path: 'scb/dual-purpose',
        component: MainviewComponent,
        data: {
            path: 'scb/dual-purpose',
            length: 4,
            title: 'Dual Purpose Range'
        }
    },
    {
        path: 'scb/golf-cart',
        component: MainviewComponent,
        data: {
            path: 'scb/golf-cart',
            length: 4,
            title: 'Golf Cart Range'
        }
    },
    {
        path: 'scb/lawncare',
        component: MainviewComponent,
        data: {
            path: 'scb/lawncare',
            length: 4,
            title: 'Lawncare Range' 
        }
    },
    {
        path: 'scb/marine',
        component: MainviewComponent,
        data: {
            path: 'scb/marine',
            length: 4,
            title: 'Marine Range'
        }
    },
    {
        path: 'scb/start-stop',
        component: MainviewComponent,
        data: {
            path: 'scb/start-stop',
            length: 4,
            title: 'Start-Stop Range'
        }
    },
    {
        path: 'scb/truck',
        component: MainviewComponent,
        data: {
            path: 'scb/truck',
            length: 6,
            title: 'Truck Range'
        }
    },
    {
        path: 'scb/gladiator',
        component: MainviewComponent,
        data: {
            path: 'scb/gladiator',
            length: 4,
            title: 'Gladiator Range'
        }
    },
    {
        path: 'scb/amp-tech-flooded-deep-cycle',
        component: MainviewComponent,
        data: {
            path: 'scb/amp-tech-flooded-deep-cycle',
            length: 4,
            title: 'AMP-Tech Flooded Deep Cycle Range'
        }
    },

    {
        path: 'exide/evolution-start-stop',
        component: MainviewComponent,
        data: {
            path: 'exide/evolution-start-stop',
            length: 4,
            title: 'Evolution Start-Stop Range'
        }
    },
    {
        path: 'exide/heavy-commercial',
        component: MainviewComponent,
        data: {
            path: 'exide/heavy-commercial',
            length: 4,
            title: 'Heavy Commercial Range'
        }
    },
    {
        path: 'exide/industrial-cycling',
        component: MainviewComponent,
        data: {
            path: 'exide/industrial-cycling',
            length: 4,
            title: 'Industrial Cycling Range'
        }
    },
    {
        path: 'exide/marine-stowaway',
        component: MainviewComponent,
        data: {
            path: 'exide/marine-stowaway',
            length: 4,
            title: 'Marine Stowaway Range'
        }
    },
    {
        path: 'exide/passenger',
        component: MainviewComponent,
        data: {
            path: 'exide/passenger',
            length: 4,
            title: 'Passenger'
        }
    },
    {
        path: 'exide/powerider',
        component: MainviewComponent,
        data: {
            path: 'exide/powerider',
            length: 4,
            title: 'Powerider'
        }
    },
    {
        path: 'exide/suv-4wd-light',
        component: MainviewComponent,
        data: {
            path: 'exide/suv-4wd-light',
            length: 4,
            title: 'SUV 4WD Light Range'
        }
    },

    {
        path: 'alco/automotive',
        component: MainviewComponent,
        data: {
            path: 'alco/automotive',
            length: 4,
            title: 'Automotive Range'
        }
    },
    {
        path: 'alco/automotive-alco3000',
        component: MainviewComponent,
        data: {
            path: 'alco/automotive-alco3000',
            length: 2,
            title: 'Automotive Alco 3000 Range'
        }
    },
    {
        path: 'alco/dual-purpose',
        component: MainviewComponent,
        data: {
            path: 'alco/dual-purpose',
            length: 4,
            title: 'Dual Purpose Range'
        }
    },
    {
        path: 'alco/lawn-mower',
        component: MainviewComponent,
        data: {
            path: 'alco/lawn-mower',
            length: 4,
            title: 'Lawn Mower Range'
        }
    },
    {
        path: 'alco/marine',
        component: MainviewComponent,
        data: {
            path: 'alco/marine',
            length: 4,
            title: 'Marine Range'
        }
    },
    {
        path: 'alco/start-stop',
        component: MainviewComponent,
        data: {
            path: 'alco/start-stop',
            length: 4,
            title: 'Start-Stop Range'
        }
    },
    {
        path: 'alco/truck',
        component: MainviewComponent,
        data: {
            path: 'alco/truck',
            length: 4,
            title: 'Truck Range'
        }
    },

    // videos scb
    {
        path: 'videos/scb/m1',
        component: MainVideoComponent,
        data: {
            path: 'videos/scb',
            filename: 'Supercharge+M1+R5+fix+2+iPad.mp4',
            title: 'SCB Module 1'
        }
    },
    {
        path: 'videos/scb/m2',
        component: MainVideoComponent,
        data: {
            path: 'videos/scb',
            filename: 'Supercharge+M2+-+iPad+VERSION.mp4',
            title: 'SCB Module 2'
        }
    },
    {
        path: 'videos/scb/m3',
        component: MainVideoComponent,
        data: {
            path: 'videos/scb',
            filename: 'Supercharge+M3+-+iPad+VERSION.mp4',
            title: 'SCB Module 3'
        }
    },
    {
        path: 'videos/scb/m4',
        component: MainVideoComponent,
        data: {
            path: 'videos/scb',
            filename: 'Supercharge+M4+-+iPad+VERSION.mp4',
            title: 'SCB Module 4'
        }
    },
    {
        path: 'videos/scb/m5',
        component: MainVideoComponent,
        data: {
            path: 'videos/scb',
            filename: 'Supercharge+M5+-+iPad+VERSION.mp4',
            title: 'SCB Module 5'
        }
    },
    {
        path: 'videos/scb/m6',
        component: MainVideoComponent,
        data: {
            path: 'videos/scb',
            filename: 'Supercharge+M6+R5+fix+iPad.mp4',
            title: 'SCB Module 6'
        }
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
