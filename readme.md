angular-actor
=============

Wrapper around actorjs to use in combination with AngularJs. Angular Actor contains a provider which can be used to inject the actors into services and controllers.

How to use
----------
First you have to register the module into your application

```
var app = angular.module("app", ["ngActor"])
```

The $actor can be inject into the services and controllers.

```
app.controller("mainController", function($actor){
    $actor.actorOf("mainActor", function(){
        receive: function(msg){
            // Do something with msg
        }
    })
})
```

To create the actor hierarchy based on the nested scopes you can pass the scope.
```
app.controller("mainController", function($scope, $actor){
    $actor.actorOf("mainActor", function(){
        receive: function(msg){
            // Do something with msg
        }
    }, $scope)
})
```