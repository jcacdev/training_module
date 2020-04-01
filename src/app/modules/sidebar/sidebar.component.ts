import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

import { Hero } from '../../data';
import { List } from '../../list';
import { HeroService } from '../../data.services';


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
                    { "id": 111, "name": "Automotive Range", "route": "."},
                    { "id": 112, "name": "Dual Purpose Range", "route": "." },
                    { "id": 113, "name": "Golf Cart Range", "route": "." },
                    { "id": 114, "name": "Lawncare Range", "route": "." },
                    { "id": 115, "name": "Marine Range", "route": "." },
                    { "id": 116, "name": "Start-Stop Range", "route": "." },
                    { "id": 117, "name": "Truck Range", "route": "." },
                    { "id": 118, "name": "Gladiator Range", "route": "." }
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
            { "id": 6, "name": "Item 2-1" },
            { "id": 7, "name": "Item 2-2" },
            { "id": 8, "name": "Item 2-3" }
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
