function DealController ($scope) {

  $scope.Door = function() {
    this.path = "img/";
    this.ext = ".png";
  }
  
  

  $scope.door1 = new $scope.Door();
  $scope.door1.ind = 1;
  $scope.door2 = new $scope.Door();
  $scope.door2.ind = 2;
  $scope.door3 = new $scope.Door();
  $scope.door3.ind = 3;

  $scope.doors = [];
  $scope.doors.push($scope.door1);
  $scope.doors.push($scope.door2);
  $scope.doors.push($scope.door3);

  $scope.hovered;

  $scope.init = function() {

  }

  $scope.hov = function(item) {
    $scope.hovered = item;
  }

  $scope.clickHandler = function(item){
    item.clicked = true;
    // $scope.doors[item.ind -1].clicked = true;
    console.log(item.ind)
  }
}