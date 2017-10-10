var app = angular.module("Roba3yat",[]);

app.controller('Controller', ['$scope', '$http', function($scope,$http) {
    var size = 143;
    var poems = [];
    $scope.idx = 0;
    $scope.poem;
    $scope.search = "";

    $http.get('poems.json').success(function(data) {
        poems = data;
        $scope.idx = Math.floor(Math.random() * (size+1));        
        $scope.poem = data[$scope.idx].split('\n');
    });

    $scope.change = function(){
        $scope.idx = Math.floor(Math.random() * (size+1));
        $scope.poem = poems[$scope.idx].split('\n');
    }

    $scope.find = function(){
        if($scope.search.trim() == "") 
            $scope.poem = poems[$scope.idx].split('\n');
        else{
            for(var i = 0; i<poems.length; i++){
                var words = poems[i].split(' ');
                for(var j = 0; j<words.length; j++){
                    if(words[j] == $scope.search){
                        $scope.poem = poems[i].split('\n');
                        $scope.idx = i;
                        return;
                    }
                }
            }
        }
    }

}]);
    
