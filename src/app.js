const app = angular.module("phoneBookApp", []);

app.controller("contactController", ['$scope', function($scope) {
    $scope.contactList = [
      {editable: true, showDetails: true, avatar: "http://images5.fanpop.com/image/photos/25900000/Monica-Geller-monica-geller-25963717-1035-1280.jpg", name: "Monica", surname: "Geller", number: 666777888},
      {editable: false,showDetails: true, avatar: "http://media4.s-nbcnews.com/j/msnbc/Components/Photos/040505/040505_schwimmer_vmed_2p.grid-4x2.jpg", name: "Ross", surname: "Geller", number: 123456789},
      {editable: false,showDetails: true, avatar: "https://upload.wikimedia.org/wikipedia/en/6/6c/Matthew_Perry_as_Chandler_Bing.jpg", name: "Chandler", surname: "Bing", number: 156784515},
      {editable: false,showDetails: true, avatar: "http://www.davespechtmotor.com/Friends/Pictures/Joey%20after.jpg", name: "Joey", surname: "Tribbiani", number: 852741963},
      {editable: false,showDetails: true, avatar: "https://vignette.wikia.nocookie.net/loveinterest/images/9/93/Rachel_Green.png/revision/latest?cb=20160419025450", name: "Rachel", surname: "Green", number: 123789456},
      {editable: false,showDetails: true, avatar: "https://lgbtfansdeservebetter.com/static/uploads/2016/09/Phoebe-Buffay-Lisa-Kudrow.png", name: "Phoebe", surname: "Buffay", number: 357167349},
    ];
    $scope.toggleContact = function(index){
        $scope.currentIndex = index;
        console.log($scope.currentIndex);
         $scope.contactList[$scope.currentIndex].showDetails = !$scope.contactList[$scope.currentIndex].showDetails;
    };
    $scope.deleteContact = function(index) {
        $scope.contactList.splice(index,1);
    }

    $scope.editContact = function(index) {
      console.log($scope.contactList[index].editable);
        $scope.contactList[index].editable = true;
        console.log($scope.contactList[index].editable);
    }

}])
