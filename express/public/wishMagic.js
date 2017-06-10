var scotchTodo = angular.module('scotchTodo', []);
function mainController($scope, $http) {
    $scope.formData = {};
	
	    // when landing on the page, get all wishes and show them
    $http.get('/api/wishes')
        .success(function(data) {
            $scope.data = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
		
	$scope.getInfo = function(id){
		// when landing on the page, get single wish and show
		$http.get('/api/wish?id=' + id)
			.success(function(data) {
				$scope.data = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

// Add new wish
    $scope.createWish = function() {
        $http.post('/api/wish/new', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };