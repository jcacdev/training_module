import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { Hero } from '../../data';
import { List } from '../../list';
import { HeroService } from '../../data.services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
    heroes: Hero[];
    panelOpenState = true;
    navbarText = "";
    mobileQuery: MediaQueryList;
    /*fillerNav = [
        {
            "label": "Group 1",
            "contents": [
                { "label": "Item 1-1" },
                { "label": "Item 1-2" }
            ]
        },
        {
            "label": "Group 2",
            "contents": [
                { "label": "Item 2-1" },
                { "label": "Item 2-2" },
                { "label": "Item 2-3" }
            ]
        },
        {
            "label": "Group 3",
            "contents": [
                { "label": "Item 3-1" },
                { "label": "Item 3-2" }
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

        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);

        iconRegistry.addSvgIcon(
            'menu',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/menu.svg'));
    }

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
