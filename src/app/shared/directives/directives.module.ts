import { NgModule } from "@angular/core";
import { GridDirective } from "./grid.directive";
import { ScrollDirective } from "./scroll.directive";

@NgModule({
    declarations: [
        GridDirective,
        ScrollDirective,
    ],
    exports: [
        GridDirective,
        ScrollDirective,
    ]
})
export class DirectivesModule {}
