import { ColorDirective } from "./color.directive";
import { GridDirective } from "./grid.directive";
import { NgModule } from "@angular/core";
import { ScrollDirective } from "./scroll.directive";

@NgModule({
    declarations: [
        ColorDirective,
        GridDirective,
        ScrollDirective,
    ],
    exports: [
        ColorDirective,
        GridDirective,
        ScrollDirective,
    ]
})
export class DirectivesModule {}
