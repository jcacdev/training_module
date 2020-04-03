import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

import { Hero } from '../../models/data';
import { List } from '../../models/list';
import { HeroService } from '../../services/data/data.services';


interface FoodNode {
    id: number,
    name: string;
    children?: FoodNode[];
    route?: string;
}

const TREE_DATA: FoodNode[] = [
    {
        "id": 1,
        "name": "SCB",
        "children": [
            {
                "id": 11, "name": "Brochures", "children": [
                    { "id": 111, "name": "Automotive Range", "route": "/scb/automotive" },
                    { "id": 112, "name": "Dual Purpose Range", "route": "/scb/dual-purpose" },
                    { "id": 113, "name": "Golf Cart Range", "route": "/scb/golf-cart" },
                    { "id": 114, "name": "Lawncare Range", "route": "/scb/lawncare" },
                    { "id": 115, "name": "Marine Range", "route": "/scb/marine" },
                    { "id": 116, "name": "Start-Stop Range", "route": "/scb/start-stop" },
                    { "id": 117, "name": "Truck Range", "route": "/scb/truck" },
                    { "id": 118, "name": "Gladiator Range", "route": "/scb/gladiator" },
                    { "id": 119, "name": "AMP-Tech Flooded Deep Cycle Range", "route": "/scb/amp-tech-flooded-deep-cycle" }
                ]
            },
            {
                "id": 12, "name": "Videos", "children": [
                    { "id": 121, "name": "Supercharge M1 R5", "route": "/video" },
                    { "id": 122, "name": "Supercharge M2", "route": "/video" }
                ]
            }
        ]
    },
    {
        "id": 2,
        "name": "Exide",
        "children": [
            {
                "id": 21, "name": "Brochures", "children": [
                    { "id": 211, "name": "Evolution Start-Stop Range", "route": "/exide/evolution-start-stop"},
                    { "id": 212, "name": "Heavy Commercial Range", "route": "/exide/heavy-commercial" },
                    { "id": 213, "name": "Industrial Cycling Range", "route": "/exide/industrial-cycling" },
                    { "id": 214, "name": "Marine Stowaway Range", "route": "/exide/marine-stowaway" },
                    { "id": 215, "name": "Passenger Range", "route": "/exide/passenger" },
                    { "id": 216, "name": "Powerider Range", "route": "/exide/powerider" },
                    { "id": 217, "name": "SUV 4WD Light Range", "route": "/exide/suv-4wd-light" },
                    // { "id": 218, "name": "Gladiator Range", "route": "/scb/gladiator" }
                ]
            }/*,
            {
                "id": 22, "name": "Videos", "children": [
                    { "id": 221, "name": "Supercharge M1 R5", "route": "/video" },
                    { "id": 222, "name": "Supercharge M2", "route": "/video" }
                ]
            }*/
        ]
    },
    {
        "id": 3,
        "name": "Alco",
        "children": [
            {
                "id": 31, "name": "Brochures", "children": [
                    { "id": 311, "name": "Automotive Range", "route": "/alco/automotive"},
                    { "id": 312, "name": "Automotive Alco3000 Range", "route": "/alco/automotive-alco3000" },
                    { "id": 313, "name": "Dual Purpose Range", "route": "/alco/dual-purpose" },
                    { "id": 314, "name": "Lawn Mower Range", "route": "/alco/lawn-mower" },
                    { "id": 315, "name": "Marine Range", "route": "/alco/marine" },
                    { "id": 316, "name": "Start-Stop Range", "route": "/alco/start-stop" },
                    { "id": 317, "name": "Truck Range", "route": "/alco/truck" },
                    // { "id": 218, "name": "Gladiator Range", "route": "/scb/gladiator" }
                ]
            }/*,
            {
                "id": 22, "name": "Videos", "children": [
                    { "id": 221, "name": "Supercharge M1 R5", "route": "/video" },
                    { "id": 222, "name": "Supercharge M2", "route": "/video" }
                ]
            }*/
        ]
    }
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit, OnDestroy {

    treeControl = new NestedTreeControl<FoodNode>(node => node.children);
    dataSource = new MatTreeNestedDataSource<FoodNode>();

    heroes: Hero[];
    panelOpenState = true;
    navbarText = "";
    mobileQuery: MediaQueryList;
    /*fillerNav = [
        {
            "name": "Group 1",
            "contents": [
                { "name": "Item 1-1" },
                { "name": "Item 1-2" }
            ]
        },
        {
            "name": "Group 2",
            "contents": [
                { "name": "Item 2-1" },
                { "name": "Item 2-2" },
                { "name": "Item 2-3" }
            ]
        },
        {
            "name": "Group 3",
            "contents": [
                { "name": "Item 3-1" },
                { "name": "Item 3-2" }
            ]
        }
    ];*/



    fillerNav: List[];

    constructor(
        private heroService: HeroService,
        changeDetectorRef: ChangeDetectorRef, 
        media: MediaMatcher, 
        iconRegistry: MatIconRegistry, 
        sanitizer: DomSanitizer) {

        this.dataSource.data = TREE_DATA;

        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);

        iconRegistry.addSvgIcon(
            'menu',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/menu.svg'));
    }

    hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
    private _mobileQueryListener: () => void;

    ngOnInit() {
        // this.getHeroes();
        this.getList();
    }

    getList(): void {
        console.log('test');
        this.heroService.getList()
            .subscribe(list => this.fillerNav = list);
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
