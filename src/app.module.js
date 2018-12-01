
import angular from 'angular'
import route from 'angular-route'

import { constants } from './app.constants'

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
            .otherwise({ redirectTo: '/' })

            $locationProvider.html5Mode(true)
        }
    ]
)

app.constant('CONSTANTS', constants)

export default app