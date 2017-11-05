/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar app = angular.module(\"phoneBookApp\", []);\n\napp.controller(\"contactController\", ['$scope', function ($scope) {\n    $scope.contactList = [{ showDetails: true, avatar: \"http://images5.fanpop.com/image/photos/25900000/Monica-Geller-monica-geller-25963717-1035-1280.jpg\", name: \"Monica\", surname: \"Geller\", number: 666777888 }, { showDetails: true, avatar: \"http://media4.s-nbcnews.com/j/msnbc/Components/Photos/040505/040505_schwimmer_vmed_2p.grid-4x2.jpg\", name: \"Ross\", surname: \"Geller\", number: 123456789 }, { showDetails: true, avatar: \"https://upload.wikimedia.org/wikipedia/en/6/6c/Matthew_Perry_as_Chandler_Bing.jpg\", name: \"Chandler\", surname: \"Bing\", number: 156784515 }, { showDetails: true, avatar: \"http://www.davespechtmotor.com/Friends/Pictures/Joey%20after.jpg\", name: \"Joey\", surname: \"Tribbiani\", number: 852741963 }, { showDetails: true, avatar: \"https://vignette.wikia.nocookie.net/loveinterest/images/9/93/Rachel_Green.png/revision/latest?cb=20160419025450\", name: \"Rachel\", surname: \"Green\", number: 123789456 }, { showDetails: true, avatar: \"https://lgbtfansdeservebetter.com/static/uploads/2016/09/Phoebe-Buffay-Lisa-Kudrow.png\", name: \"Phoebe\", surname: \"Buffay\", number: 357167349 }];\n    $scope.toggleContact = function (index) {\n        $scope.currentIndex = index;\n        console.log($scope.currentIndex);\n        $scope.contactList[$scope.currentIndex].showDetails = !$scope.contactList[$scope.currentIndex].showDetails;\n        // for (let i=0; i<$scope.contactList.length; i++) {\n        //   console.log($scope.contactList[i].showDetails);\n        // }\n        //angular.extend($scope.contactList[$index].showDetails, true);\n    };\n}]);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzdhYzkiXSwibmFtZXMiOlsiYXBwIiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJjb250YWN0TGlzdCIsInNob3dEZXRhaWxzIiwiYXZhdGFyIiwibmFtZSIsInN1cm5hbWUiLCJudW1iZXIiLCJ0b2dnbGVDb250YWN0IiwiaW5kZXgiLCJjdXJyZW50SW5kZXgiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLE1BQU1DLFFBQVFDLE1BQVIsQ0FBZSxjQUFmLEVBQStCLEVBQS9CLENBQVo7O0FBRUFGLElBQUlHLFVBQUosQ0FBZSxtQkFBZixFQUFvQyxDQUFDLFFBQUQsRUFBVyxVQUFTQyxNQUFULEVBQWlCO0FBQzVEQSxXQUFPQyxXQUFQLEdBQXFCLENBQ25CLEVBQUNDLGFBQWEsSUFBZCxFQUFvQkMsUUFBUSxvR0FBNUIsRUFBa0lDLE1BQU0sUUFBeEksRUFBa0pDLFNBQVMsUUFBM0osRUFBcUtDLFFBQVEsU0FBN0ssRUFEbUIsRUFFbkIsRUFBQ0osYUFBYSxJQUFkLEVBQW9CQyxRQUFRLG9HQUE1QixFQUFrSUMsTUFBTSxNQUF4SSxFQUFnSkMsU0FBUyxRQUF6SixFQUFtS0MsUUFBUSxTQUEzSyxFQUZtQixFQUduQixFQUFDSixhQUFhLElBQWQsRUFBb0JDLFFBQVEsbUZBQTVCLEVBQWlIQyxNQUFNLFVBQXZILEVBQW1JQyxTQUFTLE1BQTVJLEVBQW9KQyxRQUFRLFNBQTVKLEVBSG1CLEVBSW5CLEVBQUNKLGFBQWEsSUFBZCxFQUFvQkMsUUFBUSxrRUFBNUIsRUFBZ0dDLE1BQU0sTUFBdEcsRUFBOEdDLFNBQVMsV0FBdkgsRUFBb0lDLFFBQVEsU0FBNUksRUFKbUIsRUFLbkIsRUFBQ0osYUFBYSxJQUFkLEVBQW9CQyxRQUFRLGlIQUE1QixFQUErSUMsTUFBTSxRQUFySixFQUErSkMsU0FBUyxPQUF4SyxFQUFpTEMsUUFBUSxTQUF6TCxFQUxtQixFQU1uQixFQUFDSixhQUFhLElBQWQsRUFBb0JDLFFBQVEsd0ZBQTVCLEVBQXNIQyxNQUFNLFFBQTVILEVBQXNJQyxTQUFTLFFBQS9JLEVBQXlKQyxRQUFRLFNBQWpLLEVBTm1CLENBQXJCO0FBUUFOLFdBQU9PLGFBQVAsR0FBdUIsVUFBU0MsS0FBVCxFQUFlO0FBQ2xDUixlQUFPUyxZQUFQLEdBQXNCRCxLQUF0QjtBQUNBRSxnQkFBUUMsR0FBUixDQUFZWCxPQUFPUyxZQUFuQjtBQUNDVCxlQUFPQyxXQUFQLENBQW1CRCxPQUFPUyxZQUExQixFQUF3Q1AsV0FBeEMsR0FBc0QsQ0FBQ0YsT0FBT0MsV0FBUCxDQUFtQkQsT0FBT1MsWUFBMUIsRUFBd0NQLFdBQS9GO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDSCxLQVJEO0FBVUgsQ0FuQm1DLENBQXBDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcHAgPSBhbmd1bGFyLm1vZHVsZShcInBob25lQm9va0FwcFwiLCBbXSk7XHJcblxyXG5hcHAuY29udHJvbGxlcihcImNvbnRhY3RDb250cm9sbGVyXCIsIFsnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XHJcbiAgICAkc2NvcGUuY29udGFjdExpc3QgPSBbXHJcbiAgICAgIHtzaG93RGV0YWlsczogdHJ1ZSwgYXZhdGFyOiBcImh0dHA6Ly9pbWFnZXM1LmZhbnBvcC5jb20vaW1hZ2UvcGhvdG9zLzI1OTAwMDAwL01vbmljYS1HZWxsZXItbW9uaWNhLWdlbGxlci0yNTk2MzcxNy0xMDM1LTEyODAuanBnXCIsIG5hbWU6IFwiTW9uaWNhXCIsIHN1cm5hbWU6IFwiR2VsbGVyXCIsIG51bWJlcjogNjY2Nzc3ODg4fSxcclxuICAgICAge3Nob3dEZXRhaWxzOiB0cnVlLCBhdmF0YXI6IFwiaHR0cDovL21lZGlhNC5zLW5iY25ld3MuY29tL2ovbXNuYmMvQ29tcG9uZW50cy9QaG90b3MvMDQwNTA1LzA0MDUwNV9zY2h3aW1tZXJfdm1lZF8ycC5ncmlkLTR4Mi5qcGdcIiwgbmFtZTogXCJSb3NzXCIsIHN1cm5hbWU6IFwiR2VsbGVyXCIsIG51bWJlcjogMTIzNDU2Nzg5fSxcclxuICAgICAge3Nob3dEZXRhaWxzOiB0cnVlLCBhdmF0YXI6IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vNi82Yy9NYXR0aGV3X1BlcnJ5X2FzX0NoYW5kbGVyX0JpbmcuanBnXCIsIG5hbWU6IFwiQ2hhbmRsZXJcIiwgc3VybmFtZTogXCJCaW5nXCIsIG51bWJlcjogMTU2Nzg0NTE1fSxcclxuICAgICAge3Nob3dEZXRhaWxzOiB0cnVlLCBhdmF0YXI6IFwiaHR0cDovL3d3dy5kYXZlc3BlY2h0bW90b3IuY29tL0ZyaWVuZHMvUGljdHVyZXMvSm9leSUyMGFmdGVyLmpwZ1wiLCBuYW1lOiBcIkpvZXlcIiwgc3VybmFtZTogXCJUcmliYmlhbmlcIiwgbnVtYmVyOiA4NTI3NDE5NjN9LFxyXG4gICAgICB7c2hvd0RldGFpbHM6IHRydWUsIGF2YXRhcjogXCJodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9sb3ZlaW50ZXJlc3QvaW1hZ2VzLzkvOTMvUmFjaGVsX0dyZWVuLnBuZy9yZXZpc2lvbi9sYXRlc3Q/Y2I9MjAxNjA0MTkwMjU0NTBcIiwgbmFtZTogXCJSYWNoZWxcIiwgc3VybmFtZTogXCJHcmVlblwiLCBudW1iZXI6IDEyMzc4OTQ1Nn0sXHJcbiAgICAgIHtzaG93RGV0YWlsczogdHJ1ZSwgYXZhdGFyOiBcImh0dHBzOi8vbGdidGZhbnNkZXNlcnZlYmV0dGVyLmNvbS9zdGF0aWMvdXBsb2Fkcy8yMDE2LzA5L1Bob2ViZS1CdWZmYXktTGlzYS1LdWRyb3cucG5nXCIsIG5hbWU6IFwiUGhvZWJlXCIsIHN1cm5hbWU6IFwiQnVmZmF5XCIsIG51bWJlcjogMzU3MTY3MzQ5fSxcclxuICAgIF07XHJcbiAgICAkc2NvcGUudG9nZ2xlQ29udGFjdCA9IGZ1bmN0aW9uKGluZGV4KXtcclxuICAgICAgICAkc2NvcGUuY3VycmVudEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLmN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgICRzY29wZS5jb250YWN0TGlzdFskc2NvcGUuY3VycmVudEluZGV4XS5zaG93RGV0YWlscyA9ICEkc2NvcGUuY29udGFjdExpc3RbJHNjb3BlLmN1cnJlbnRJbmRleF0uc2hvd0RldGFpbHM7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaT0wOyBpPCRzY29wZS5jb250YWN0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJHNjb3BlLmNvbnRhY3RMaXN0W2ldLnNob3dEZXRhaWxzKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy9hbmd1bGFyLmV4dGVuZCgkc2NvcGUuY29udGFjdExpc3RbJGluZGV4XS5zaG93RGV0YWlscywgdHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxufV0pXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);