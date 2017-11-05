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
eval("\n\nvar app = angular.module(\"phoneBookApp\", []);\n\napp.controller(\"contactController\", ['$scope', function ($scope) {\n    $scope.contactList = [{ editable: true, showDetails: true, avatar: \"http://images5.fanpop.com/image/photos/25900000/Monica-Geller-monica-geller-25963717-1035-1280.jpg\", name: \"Monica\", surname: \"Geller\", number: 666777888 }, { editable: false, showDetails: true, avatar: \"http://media4.s-nbcnews.com/j/msnbc/Components/Photos/040505/040505_schwimmer_vmed_2p.grid-4x2.jpg\", name: \"Ross\", surname: \"Geller\", number: 123456789 }, { editable: false, showDetails: true, avatar: \"https://upload.wikimedia.org/wikipedia/en/6/6c/Matthew_Perry_as_Chandler_Bing.jpg\", name: \"Chandler\", surname: \"Bing\", number: 156784515 }, { editable: false, showDetails: true, avatar: \"http://www.davespechtmotor.com/Friends/Pictures/Joey%20after.jpg\", name: \"Joey\", surname: \"Tribbiani\", number: 852741963 }, { editable: false, showDetails: true, avatar: \"https://vignette.wikia.nocookie.net/loveinterest/images/9/93/Rachel_Green.png/revision/latest?cb=20160419025450\", name: \"Rachel\", surname: \"Green\", number: 123789456 }, { editable: false, showDetails: true, avatar: \"https://lgbtfansdeservebetter.com/static/uploads/2016/09/Phoebe-Buffay-Lisa-Kudrow.png\", name: \"Phoebe\", surname: \"Buffay\", number: 357167349 }];\n    $scope.toggleContact = function (index) {\n        $scope.currentIndex = index;\n        console.log($scope.currentIndex);\n        $scope.contactList[$scope.currentIndex].showDetails = !$scope.contactList[$scope.currentIndex].showDetails;\n    };\n    $scope.deleteContact = function (index) {\n        $scope.contactList.splice(index, 1);\n    };\n\n    $scope.editContact = function (index) {\n        console.log($scope.contactList[index].editable);\n        $scope.contactList[index].editable = true;\n        console.log($scope.contactList[index].editable);\n    };\n}]);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzdhYzkiXSwibmFtZXMiOlsiYXBwIiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJjb250YWN0TGlzdCIsImVkaXRhYmxlIiwic2hvd0RldGFpbHMiLCJhdmF0YXIiLCJuYW1lIiwic3VybmFtZSIsIm51bWJlciIsInRvZ2dsZUNvbnRhY3QiLCJpbmRleCIsImN1cnJlbnRJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJkZWxldGVDb250YWN0Iiwic3BsaWNlIiwiZWRpdENvbnRhY3QiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsTUFBTUMsUUFBUUMsTUFBUixDQUFlLGNBQWYsRUFBK0IsRUFBL0IsQ0FBWjs7QUFFQUYsSUFBSUcsVUFBSixDQUFlLG1CQUFmLEVBQW9DLENBQUMsUUFBRCxFQUFXLFVBQVNDLE1BQVQsRUFBaUI7QUFDNURBLFdBQU9DLFdBQVAsR0FBcUIsQ0FDbkIsRUFBQ0MsVUFBVSxJQUFYLEVBQWlCQyxhQUFhLElBQTlCLEVBQW9DQyxRQUFRLG9HQUE1QyxFQUFrSkMsTUFBTSxRQUF4SixFQUFrS0MsU0FBUyxRQUEzSyxFQUFxTEMsUUFBUSxTQUE3TCxFQURtQixFQUVuQixFQUFDTCxVQUFVLEtBQVgsRUFBaUJDLGFBQWEsSUFBOUIsRUFBb0NDLFFBQVEsb0dBQTVDLEVBQWtKQyxNQUFNLE1BQXhKLEVBQWdLQyxTQUFTLFFBQXpLLEVBQW1MQyxRQUFRLFNBQTNMLEVBRm1CLEVBR25CLEVBQUNMLFVBQVUsS0FBWCxFQUFpQkMsYUFBYSxJQUE5QixFQUFvQ0MsUUFBUSxtRkFBNUMsRUFBaUlDLE1BQU0sVUFBdkksRUFBbUpDLFNBQVMsTUFBNUosRUFBb0tDLFFBQVEsU0FBNUssRUFIbUIsRUFJbkIsRUFBQ0wsVUFBVSxLQUFYLEVBQWlCQyxhQUFhLElBQTlCLEVBQW9DQyxRQUFRLGtFQUE1QyxFQUFnSEMsTUFBTSxNQUF0SCxFQUE4SEMsU0FBUyxXQUF2SSxFQUFvSkMsUUFBUSxTQUE1SixFQUptQixFQUtuQixFQUFDTCxVQUFVLEtBQVgsRUFBaUJDLGFBQWEsSUFBOUIsRUFBb0NDLFFBQVEsaUhBQTVDLEVBQStKQyxNQUFNLFFBQXJLLEVBQStLQyxTQUFTLE9BQXhMLEVBQWlNQyxRQUFRLFNBQXpNLEVBTG1CLEVBTW5CLEVBQUNMLFVBQVUsS0FBWCxFQUFpQkMsYUFBYSxJQUE5QixFQUFvQ0MsUUFBUSx3RkFBNUMsRUFBc0lDLE1BQU0sUUFBNUksRUFBc0pDLFNBQVMsUUFBL0osRUFBeUtDLFFBQVEsU0FBakwsRUFObUIsQ0FBckI7QUFRQVAsV0FBT1EsYUFBUCxHQUF1QixVQUFTQyxLQUFULEVBQWU7QUFDbENULGVBQU9VLFlBQVAsR0FBc0JELEtBQXRCO0FBQ0FFLGdCQUFRQyxHQUFSLENBQVlaLE9BQU9VLFlBQW5CO0FBQ0NWLGVBQU9DLFdBQVAsQ0FBbUJELE9BQU9VLFlBQTFCLEVBQXdDUCxXQUF4QyxHQUFzRCxDQUFDSCxPQUFPQyxXQUFQLENBQW1CRCxPQUFPVSxZQUExQixFQUF3Q1AsV0FBL0Y7QUFDSixLQUpEO0FBS0FILFdBQU9hLGFBQVAsR0FBdUIsVUFBU0osS0FBVCxFQUFnQjtBQUNuQ1QsZUFBT0MsV0FBUCxDQUFtQmEsTUFBbkIsQ0FBMEJMLEtBQTFCLEVBQWdDLENBQWhDO0FBQ0gsS0FGRDs7QUFJQVQsV0FBT2UsV0FBUCxHQUFxQixVQUFTTixLQUFULEVBQWdCO0FBQ25DRSxnQkFBUUMsR0FBUixDQUFZWixPQUFPQyxXQUFQLENBQW1CUSxLQUFuQixFQUEwQlAsUUFBdEM7QUFDRUYsZUFBT0MsV0FBUCxDQUFtQlEsS0FBbkIsRUFBMEJQLFFBQTFCLEdBQXFDLElBQXJDO0FBQ0FTLGdCQUFRQyxHQUFSLENBQVlaLE9BQU9DLFdBQVAsQ0FBbUJRLEtBQW5CLEVBQTBCUCxRQUF0QztBQUNILEtBSkQ7QUFNSCxDQXhCbUMsQ0FBcEMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwcCA9IGFuZ3VsYXIubW9kdWxlKFwicGhvbmVCb29rQXBwXCIsIFtdKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKFwiY29udGFjdENvbnRyb2xsZXJcIiwgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcclxuICAgICRzY29wZS5jb250YWN0TGlzdCA9IFtcclxuICAgICAge2VkaXRhYmxlOiB0cnVlLCBzaG93RGV0YWlsczogdHJ1ZSwgYXZhdGFyOiBcImh0dHA6Ly9pbWFnZXM1LmZhbnBvcC5jb20vaW1hZ2UvcGhvdG9zLzI1OTAwMDAwL01vbmljYS1HZWxsZXItbW9uaWNhLWdlbGxlci0yNTk2MzcxNy0xMDM1LTEyODAuanBnXCIsIG5hbWU6IFwiTW9uaWNhXCIsIHN1cm5hbWU6IFwiR2VsbGVyXCIsIG51bWJlcjogNjY2Nzc3ODg4fSxcclxuICAgICAge2VkaXRhYmxlOiBmYWxzZSxzaG93RGV0YWlsczogdHJ1ZSwgYXZhdGFyOiBcImh0dHA6Ly9tZWRpYTQucy1uYmNuZXdzLmNvbS9qL21zbmJjL0NvbXBvbmVudHMvUGhvdG9zLzA0MDUwNS8wNDA1MDVfc2Nod2ltbWVyX3ZtZWRfMnAuZ3JpZC00eDIuanBnXCIsIG5hbWU6IFwiUm9zc1wiLCBzdXJuYW1lOiBcIkdlbGxlclwiLCBudW1iZXI6IDEyMzQ1Njc4OX0sXHJcbiAgICAgIHtlZGl0YWJsZTogZmFsc2Usc2hvd0RldGFpbHM6IHRydWUsIGF2YXRhcjogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi82LzZjL01hdHRoZXdfUGVycnlfYXNfQ2hhbmRsZXJfQmluZy5qcGdcIiwgbmFtZTogXCJDaGFuZGxlclwiLCBzdXJuYW1lOiBcIkJpbmdcIiwgbnVtYmVyOiAxNTY3ODQ1MTV9LFxyXG4gICAgICB7ZWRpdGFibGU6IGZhbHNlLHNob3dEZXRhaWxzOiB0cnVlLCBhdmF0YXI6IFwiaHR0cDovL3d3dy5kYXZlc3BlY2h0bW90b3IuY29tL0ZyaWVuZHMvUGljdHVyZXMvSm9leSUyMGFmdGVyLmpwZ1wiLCBuYW1lOiBcIkpvZXlcIiwgc3VybmFtZTogXCJUcmliYmlhbmlcIiwgbnVtYmVyOiA4NTI3NDE5NjN9LFxyXG4gICAgICB7ZWRpdGFibGU6IGZhbHNlLHNob3dEZXRhaWxzOiB0cnVlLCBhdmF0YXI6IFwiaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvbG92ZWludGVyZXN0L2ltYWdlcy85LzkzL1JhY2hlbF9HcmVlbi5wbmcvcmV2aXNpb24vbGF0ZXN0P2NiPTIwMTYwNDE5MDI1NDUwXCIsIG5hbWU6IFwiUmFjaGVsXCIsIHN1cm5hbWU6IFwiR3JlZW5cIiwgbnVtYmVyOiAxMjM3ODk0NTZ9LFxyXG4gICAgICB7ZWRpdGFibGU6IGZhbHNlLHNob3dEZXRhaWxzOiB0cnVlLCBhdmF0YXI6IFwiaHR0cHM6Ly9sZ2J0ZmFuc2Rlc2VydmViZXR0ZXIuY29tL3N0YXRpYy91cGxvYWRzLzIwMTYvMDkvUGhvZWJlLUJ1ZmZheS1MaXNhLUt1ZHJvdy5wbmdcIiwgbmFtZTogXCJQaG9lYmVcIiwgc3VybmFtZTogXCJCdWZmYXlcIiwgbnVtYmVyOiAzNTcxNjczNDl9LFxyXG4gICAgXTtcclxuICAgICRzY29wZS50b2dnbGVDb250YWN0ID0gZnVuY3Rpb24oaW5kZXgpe1xyXG4gICAgICAgICRzY29wZS5jdXJyZW50SW5kZXggPSBpbmRleDtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuY3VycmVudEluZGV4KTtcclxuICAgICAgICAgJHNjb3BlLmNvbnRhY3RMaXN0WyRzY29wZS5jdXJyZW50SW5kZXhdLnNob3dEZXRhaWxzID0gISRzY29wZS5jb250YWN0TGlzdFskc2NvcGUuY3VycmVudEluZGV4XS5zaG93RGV0YWlscztcclxuICAgIH07XHJcbiAgICAkc2NvcGUuZGVsZXRlQ29udGFjdCA9IGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgJHNjb3BlLmNvbnRhY3RMaXN0LnNwbGljZShpbmRleCwxKTtcclxuICAgIH1cclxuXHJcbiAgICAkc2NvcGUuZWRpdENvbnRhY3QgPSBmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICBjb25zb2xlLmxvZygkc2NvcGUuY29udGFjdExpc3RbaW5kZXhdLmVkaXRhYmxlKTtcclxuICAgICAgICAkc2NvcGUuY29udGFjdExpc3RbaW5kZXhdLmVkaXRhYmxlID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuY29udGFjdExpc3RbaW5kZXhdLmVkaXRhYmxlKTtcclxuICAgIH1cclxuXHJcbn1dKVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);