import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './data';
import { List } from './list';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataListService implements InMemoryDbService {
    createDb() {
        const list = [
            {
                "id": 1,
                "label": "Group 1",
                "contents": [
                    { "id": 4, "label": "Item 1-1" },
                    { "id": 5, "label": "Item 1-2" }
                ]
            },
            {
                "id": 2,
                "label": "Group 2",
                "contents": [
                    { "id": 6, "label": "Item 2-1" },
                    { "id": 7, "label": "Item 2-2" },
                    { "id": 8, "label": "Item 2-3" }
                ]
            },
            {
                "id": 3,
                "label": "Group 3",
                "contents": [
                    { "id": 9, "label": "Item 3-1" },
                    { "id": 10, "label": "Item 3-2" }
                ]
            }
        ];
        return { list };
    }

    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    genId(list: List[]): number {
        return list.length > 0 ? Math.max(...list.map(list => list.id)) + 1 : 11;
    }
}