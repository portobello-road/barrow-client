'use strict'

angular.module('app.controllers', [])

.controller('AppCtrl', [
  '$scope'
  '$location'
  '$resource'
  '$rootScope'

  ($scope, $location, $resource, $rootScope) ->

    $scope.$location = $location
    $scope.$watch('$location.path()', (path) ->
      $scope.activeNavId = path || '/'
    )

    $scope.getClass = (id) ->
      if $scope.activeNavId.substring(0, id.length) == id
        return 'active'
      else
        return ''
])
