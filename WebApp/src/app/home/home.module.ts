require("../core/core.module");

import { HomeContainerComponent } from "./home-container.component";

var app = (<any>angular.module("app.home", [
    "app.core"    
]));

app.component(HomeContainerComponent);


