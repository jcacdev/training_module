import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnDestroy {
    panelOpenState = true;
    navbarText = "Placeholder Text";
    mobileQuery: MediaQueryList;
    fillerNav = [
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
    ];

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);

        iconRegistry.addSvgIcon(
            'menu',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/menu.svg'));
    }

    private _mobileQueryListener: () => void;

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
