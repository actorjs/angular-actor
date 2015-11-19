angular.module("ngActor", [])

    .provider('$actor', function () {

        var actorSystem = new actorjs.ActorSystem("TestSystem");

        this.$get = function ($rootScope) {

            return {

                actorOf: function (name, cls, scope) {

                    if (!scope)
                        scope = $rootScope;

                    if (!scope.actor)
                        scope.actor = new actorjs.ActorSystem("TestSystem");

                    var actorRef = scope.actor;

                    actorRef = actorRef.actorOf(cls, name);

                    scope.actor = actorRef.context;

                    return actorRef
                },

                typeMessage: actorjs.ActorMessages.TypeMessage,

                typeMatcher: actorjs.ActorMatchers.TypeMatcher

            };
        }


    });