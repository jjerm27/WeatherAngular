app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) { 
  forecast.success(function(data){
    $scope.forecast = data; 
    $scope.foreFive();  
  });
  
  $scope.getImg = function(icon)
  {
  	 return "img/" + icon + ".png";
  }

  $scope.city = "Житомир";
  $scope.list = [];
  
  $scope.getDesc = function(data)
  {
  		if(data == "01d")
  			return "Ясно";
  		else
  			if(data == "02n")
  				return "Переменная облачность";
  			else
  			if(data == "04d")
  				return "Облачно";
  };

  $scope.oneDayShow = true;

  $scope.fiveDayShow = true;

  $scope.tooggleHideOne = function(data)
  {    
    if($scope.fiveDayShow==false)
      {
        $scope.oneDayShow = true;

        $scope.fiveDayShow = true;
      }
      else
        $scope.oneDayShow = !data;   
  };

  $scope.tooggleHideFive = function(data)
  {    
      if($scope.oneDayShow == false)
      {
        $scope.oneDayShow = true;

        $scope.fiveDayShow = true;
      }
      else
        $scope.fiveDayShow = !data;   
      
  };

  $scope.foreFive = function()
  {
    for(var i=0;i<$scope.forecast.cnt;i++)
    {
        $scope.list.push($scope.forecast.list[i]);
        i+=6;
    }
  }



  
}]);

