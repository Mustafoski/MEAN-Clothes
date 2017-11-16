var app = angular.module("myApp",["ngRoute"]).config(config);


function config($routeProvider){
    
    
    $routeProvider.when("/", {                
        templateUrl: "home/homePage.html",
        controller: HomeController,
        controllerAs: 'vm'
    });

 $routeProvider.when("/dresses", {                
        templateUrl: "dresses/dressesPage.html",
        controller: DressesController,
        controllerAs: 'vm'
    });

  $routeProvider.when("/about", {                
        templateUrl: "about/aboutPage.html",
        controller: AboutController,
        controllerAs: 'vm'
    });


    $routeProvider.otherwise({                
        templateUrl: "home/homePage.html"            
    });
    
    
}