import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./home-container.component.html"),
    styles: [require("./home-container.component.css")],
    selector: "home-container",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContainerComponent {
    constructor() { }
}
