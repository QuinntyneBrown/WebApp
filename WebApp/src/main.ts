/// <reference path="../node_modules/rx/ts/rx.all.d.ts" />

require("./app/core/core.module");
require("./app/router-outlet/router-outlet.module");

require("./app/home/home.module");

var app: any = angular.module("app", [
    "app.core",
    "app.routerOutlet",
    "app.home"
]);

app.config(["initialStateProvider", "localStorageManagerProvider", (initialStateProvider, localStorageManagerProvider) => {
    var localStorageInitialState = localStorageManagerProvider.get({ name: "initialState" });
    if (!localStorageInitialState)
        localStorageManagerProvider.put({
            name: "initialState", value: {
            }
        });

    initialStateProvider.configure(localStorageManagerProvider.get({ name: "initialState" }));
}]);

app.config(["$routeProvider", ($routeProvider: angular.route.IRouteProvider) => {
    $routeProvider
        .when("/", { template: "<home-container></home-container>" });
}]);


