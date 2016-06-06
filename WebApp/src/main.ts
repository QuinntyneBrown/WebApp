/// <reference path="../node_modules/rx/ts/rx.all.d.ts" />

import { createStore } from "./app/core";

require("./app/core/core.module");
require("./app/router-outlet/router-outlet.module");
require("./app/home/home.module");

var app: any = angular.module("app", [
    "app.core",
    "app.routerOutlet",
    "app.home"
]);

createStore(app, {});

app.config(["$routeProvider", ($routeProvider: angular.route.IRouteProvider) => {
    $routeProvider
        .when("/", { template: "<home-container></home-container>" });
}]);


