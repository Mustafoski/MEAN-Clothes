angular.module('myApp').factory('dressesFactory',dressesFactory);

function dressesFactory($http){
    return{
        dressesList : dressesList
    };
    
    function dressesList(){
        return $http.get('/api/dresses').then(complete).catch(failed);
    }
    
    function complete(response){
        return response;
    }
    
    function failed(error){
        console.log(error.statusText);
    }
    
    
}