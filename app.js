angular.module('flapperNews', ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $stateProvider // Sets up a home state
      .state('home', {
        url: "/home",
        templateUrl: "/home.html",
        controller: 'MainCtrl'
      })
      .state('posts', {
        url: '/posts/{id}', // Single bracket means the id is a param
        templateUrl: '/posts.html',
        controller: 'PostsCtrl'
      });
      $urlRouterProvider.otherwise('home'); // Routes all bad paths to home
  }
])
.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}])
.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts){
    $scope.test = "Hello, world!";
    $scope.posts = posts.posts;
    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') {return;}
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0,
        comments: [
          {author: 'Cat', body: 'Purrrrific!', upvotes: 0},
          {author: 'Kitten', body: 'Meowzors!', upvotes: 0}
        ]
      });
      $scope.title = '';
      $scope.link = '';
    };
    $scope.incrementUpvotes = function(post){
      post.upvotes += 1;
    }
  }
])
.controller('PostsCtrl', [
  '$scope',
  '$scopeParams',
  'posts',
  function($scope, $scopeParams, posts){
    $scope.post = posts.posts[$stateParams.id];
  }
]);
