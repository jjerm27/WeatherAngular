app.factory('forecast',['$http',function($http){
  return $http.get('http://api.openweathermap.org/data/2.5/forecast?q=Zhytomyr,ua&appid=0ebd7255f74cd02589c877cd7204988b')
  .success(function(data){
    return data;
  })
  .error(function(err){
    return err;
  });
}]);
