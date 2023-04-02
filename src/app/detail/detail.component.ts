import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: 'detail.component.html',
    styleUrls: ['detail.component.scss'],
})
export class DetailComponent {
    public readonly pokemon = this.route.snapshot.data['pokemon'];

    constructor(
        private route: ActivatedRoute,
    ) {
        console.log(this.pokemon)
    }
}
