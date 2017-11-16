angular.module("myApp").controller("DressesController",DressesController);




function DressesController(dressesFactory){
    var vm = this;
    
dressesFactory.dressesList().then(function(response){
    console.log(response);
    vm.dresses = response.data;
    
});
    
}