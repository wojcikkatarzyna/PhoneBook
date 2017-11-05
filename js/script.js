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
eval("\n\nvar app = angular.module(\"phoneBookApp\", []);\n\napp.controller(\"contactController\", ['$scope', function ($scope) {\n    $scope.contactList = [{ showDetails: true, avatar: \"http://images5.fanpop.com/image/photos/25900000/Monica-Geller-monica-geller-25963717-1035-1280.jpg\", name: \"Monica\", surname: \"Geller\", number: 666777888 }, { showDetails: true, avatar: \"http://media4.s-nbcnews.com/j/msnbc/Components/Photos/040505/040505_schwimmer_vmed_2p.grid-4x2.jpg\", name: \"Ross\", surname: \"Geller\", number: 123456789 }, { showDetails: true, avatar: \"https://upload.wikimedia.org/wikipedia/en/6/6c/Matthew_Perry_as_Chandler_Bing.jpg\", name: \"Chandler\", surname: \"Bing\", number: 156784515 }, { showDetails: true, avatar: \"http://www.davespechtmotor.com/Friends/Pictures/Joey%20after.jpg\", name: \"Joey\", surname: \"Tribbiani\", number: 852741963 }, { showDetails: true, avatar: \"https://vignette.wikia.nocookie.net/loveinterest/images/9/93/Rachel_Green.png/revision/latest?cb=20160419025450\", name: \"Rachel\", surname: \"Green\", number: 123789456 }, { showDetails: true, avatar: \"https://lgbtfansdeservebetter.com/static/uploads/2016/09/Phoebe-Buffay-Lisa-Kudrow.png\", name: \"Phoebe\", surname: \"Buffay\", number: 357167349 }];\n    $scope.toggleContact = function (index) {\n        $scope.currentIndex = index;\n        console.log($scope.currentIndex);\n        $scope.contactList[$scope.currentIndex].showDetails = !$scope.contactList[$scope.currentIndex].showDetails;\n        // for (let i=0; i<$scope.contactList.length; i++) {\n        //   console.log($scope.contactList[i].showDetails);\n        // }\n        //angular.extend($scope.contactList[$index].showDetails, true);\n    };\n    $scope.deleteContact = function (index) {\n        $scope.contactList.splice(index, 1);\n    };\n}]);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzdhYzkiXSwibmFtZXMiOlsiYXBwIiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJjb250YWN0TGlzdCIsInNob3dEZXRhaWxzIiwiYXZhdGFyIiwibmFtZSIsInN1cm5hbWUiLCJudW1iZXIiLCJ0b2dnbGVDb250YWN0IiwiaW5kZXgiLCJjdXJyZW50SW5kZXgiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlQ29udGFjdCIsInNwbGljZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxNQUFNQyxRQUFRQyxNQUFSLENBQWUsY0FBZixFQUErQixFQUEvQixDQUFaOztBQUVBRixJQUFJRyxVQUFKLENBQWUsbUJBQWYsRUFBb0MsQ0FBQyxRQUFELEVBQVcsVUFBU0MsTUFBVCxFQUFpQjtBQUM1REEsV0FBT0MsV0FBUCxHQUFxQixDQUNuQixFQUFDQyxhQUFhLElBQWQsRUFBb0JDLFFBQVEsb0dBQTVCLEVBQWtJQyxNQUFNLFFBQXhJLEVBQWtKQyxTQUFTLFFBQTNKLEVBQXFLQyxRQUFRLFNBQTdLLEVBRG1CLEVBRW5CLEVBQUNKLGFBQWEsSUFBZCxFQUFvQkMsUUFBUSxvR0FBNUIsRUFBa0lDLE1BQU0sTUFBeEksRUFBZ0pDLFNBQVMsUUFBekosRUFBbUtDLFFBQVEsU0FBM0ssRUFGbUIsRUFHbkIsRUFBQ0osYUFBYSxJQUFkLEVBQW9CQyxRQUFRLG1GQUE1QixFQUFpSEMsTUFBTSxVQUF2SCxFQUFtSUMsU0FBUyxNQUE1SSxFQUFvSkMsUUFBUSxTQUE1SixFQUhtQixFQUluQixFQUFDSixhQUFhLElBQWQsRUFBb0JDLFFBQVEsa0VBQTVCLEVBQWdHQyxNQUFNLE1BQXRHLEVBQThHQyxTQUFTLFdBQXZILEVBQW9JQyxRQUFRLFNBQTVJLEVBSm1CLEVBS25CLEVBQUNKLGFBQWEsSUFBZCxFQUFvQkMsUUFBUSxpSEFBNUIsRUFBK0lDLE1BQU0sUUFBckosRUFBK0pDLFNBQVMsT0FBeEssRUFBaUxDLFFBQVEsU0FBekwsRUFMbUIsRUFNbkIsRUFBQ0osYUFBYSxJQUFkLEVBQW9CQyxRQUFRLHdGQUE1QixFQUFzSEMsTUFBTSxRQUE1SCxFQUFzSUMsU0FBUyxRQUEvSSxFQUF5SkMsUUFBUSxTQUFqSyxFQU5tQixDQUFyQjtBQVFBTixXQUFPTyxhQUFQLEdBQXVCLFVBQVNDLEtBQVQsRUFBZTtBQUNsQ1IsZUFBT1MsWUFBUCxHQUFzQkQsS0FBdEI7QUFDQUUsZ0JBQVFDLEdBQVIsQ0FBWVgsT0FBT1MsWUFBbkI7QUFDQ1QsZUFBT0MsV0FBUCxDQUFtQkQsT0FBT1MsWUFBMUIsRUFBd0NQLFdBQXhDLEdBQXNELENBQUNGLE9BQU9DLFdBQVAsQ0FBbUJELE9BQU9TLFlBQTFCLEVBQXdDUCxXQUEvRjtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsS0FSRDtBQVNBRixXQUFPWSxhQUFQLEdBQXVCLFVBQVNKLEtBQVQsRUFBZ0I7QUFDbkNSLGVBQU9DLFdBQVAsQ0FBbUJZLE1BQW5CLENBQTBCTCxLQUExQixFQUFnQyxDQUFoQztBQUNILEtBRkQ7QUFHSCxDQXJCbUMsQ0FBcEMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwcCA9IGFuZ3VsYXIubW9kdWxlKFwicGhvbmVCb29rQXBwXCIsIFtdKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKFwiY29udGFjdENvbnRyb2xsZXJcIiwgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcclxuICAgICRzY29wZS5jb250YWN0TGlzdCA9IFtcclxuICAgICAge3Nob3dEZXRhaWxzOiB0cnVlLCBhdmF0YXI6IFwiaHR0cDovL2ltYWdlczUuZmFucG9wLmNvbS9pbWFnZS9waG90b3MvMjU5MDAwMDAvTW9uaWNhLUdlbGxlci1tb25pY2EtZ2VsbGVyLTI1OTYzNzE3LTEwMzUtMTI4MC5qcGdcIiwgbmFtZTogXCJNb25pY2FcIiwgc3VybmFtZTogXCJHZWxsZXJcIiwgbnVtYmVyOiA2NjY3Nzc4ODh9LFxyXG4gICAgICB7c2hvd0RldGFpbHM6IHRydWUsIGF2YXRhcjogXCJodHRwOi8vbWVkaWE0LnMtbmJjbmV3cy5jb20vai9tc25iYy9Db21wb25lbnRzL1Bob3Rvcy8wNDA1MDUvMDQwNTA1X3NjaHdpbW1lcl92bWVkXzJwLmdyaWQtNHgyLmpwZ1wiLCBuYW1lOiBcIlJvc3NcIiwgc3VybmFtZTogXCJHZWxsZXJcIiwgbnVtYmVyOiAxMjM0NTY3ODl9LFxyXG4gICAgICB7c2hvd0RldGFpbHM6IHRydWUsIGF2YXRhcjogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi82LzZjL01hdHRoZXdfUGVycnlfYXNfQ2hhbmRsZXJfQmluZy5qcGdcIiwgbmFtZTogXCJDaGFuZGxlclwiLCBzdXJuYW1lOiBcIkJpbmdcIiwgbnVtYmVyOiAxNTY3ODQ1MTV9LFxyXG4gICAgICB7c2hvd0RldGFpbHM6IHRydWUsIGF2YXRhcjogXCJodHRwOi8vd3d3LmRhdmVzcGVjaHRtb3Rvci5jb20vRnJpZW5kcy9QaWN0dXJlcy9Kb2V5JTIwYWZ0ZXIuanBnXCIsIG5hbWU6IFwiSm9leVwiLCBzdXJuYW1lOiBcIlRyaWJiaWFuaVwiLCBudW1iZXI6IDg1Mjc0MTk2M30sXHJcbiAgICAgIHtzaG93RGV0YWlsczogdHJ1ZSwgYXZhdGFyOiBcImh0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2xvdmVpbnRlcmVzdC9pbWFnZXMvOS85My9SYWNoZWxfR3JlZW4ucG5nL3JldmlzaW9uL2xhdGVzdD9jYj0yMDE2MDQxOTAyNTQ1MFwiLCBuYW1lOiBcIlJhY2hlbFwiLCBzdXJuYW1lOiBcIkdyZWVuXCIsIG51bWJlcjogMTIzNzg5NDU2fSxcclxuICAgICAge3Nob3dEZXRhaWxzOiB0cnVlLCBhdmF0YXI6IFwiaHR0cHM6Ly9sZ2J0ZmFuc2Rlc2VydmViZXR0ZXIuY29tL3N0YXRpYy91cGxvYWRzLzIwMTYvMDkvUGhvZWJlLUJ1ZmZheS1MaXNhLUt1ZHJvdy5wbmdcIiwgbmFtZTogXCJQaG9lYmVcIiwgc3VybmFtZTogXCJCdWZmYXlcIiwgbnVtYmVyOiAzNTcxNjczNDl9LFxyXG4gICAgXTtcclxuICAgICRzY29wZS50b2dnbGVDb250YWN0ID0gZnVuY3Rpb24oaW5kZXgpe1xyXG4gICAgICAgICRzY29wZS5jdXJyZW50SW5kZXggPSBpbmRleDtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuY3VycmVudEluZGV4KTtcclxuICAgICAgICAgJHNjb3BlLmNvbnRhY3RMaXN0WyRzY29wZS5jdXJyZW50SW5kZXhdLnNob3dEZXRhaWxzID0gISRzY29wZS5jb250YWN0TGlzdFskc2NvcGUuY3VycmVudEluZGV4XS5zaG93RGV0YWlscztcclxuICAgICAgICAvLyBmb3IgKGxldCBpPTA7IGk8JHNjb3BlLmNvbnRhY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygkc2NvcGUuY29udGFjdExpc3RbaV0uc2hvd0RldGFpbHMpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvL2FuZ3VsYXIuZXh0ZW5kKCRzY29wZS5jb250YWN0TGlzdFskaW5kZXhdLnNob3dEZXRhaWxzLCB0cnVlKTtcclxuICAgIH07XHJcbiAgICAkc2NvcGUuZGVsZXRlQ29udGFjdCA9IGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgJHNjb3BlLmNvbnRhY3RMaXN0LnNwbGljZShpbmRleCwxKTtcclxuICAgIH1cclxufV0pXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);