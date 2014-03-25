'use strict'

angular.module('app', [
  'ngCookies'
  'ngResource'
  'ngRoute'
  'app.controllers'
  'app.directives'
  'app.filters'
  'app.services'
  'app.templates'
  'mm.foundation'
])

.config([
  '$routeProvider'
  '$locationProvider'
  ($routeProvider, $locationProvider, config) ->

    $routeProvider

      .when('/', {templateUrl: '/partials/main.html'})

    $locationProvider.html5Mode(false)
])
