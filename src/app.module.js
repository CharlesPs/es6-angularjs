
import angular from 'angular'
import route from 'angular-route'

const app = angular.module('ngApp', [route])

app.config(
    [
        '$routeProvider', '$locationProvider',
        ($routeProvider, $locationProvider) => {

            $routeProvider
            .when('/',{
                templateUrl: 'tpl/home.html',
                controller: 'c_home'
            })
            .when('/about',{
                templateUrl: 'tpl/about.html',
                controller: 'c_about'
            })

            $locationProvider.html5Mode(true)
        }
    ]
)

export default app