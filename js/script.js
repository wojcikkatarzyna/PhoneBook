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
eval("\n\nvar app = angular.module(\"phoneBookApp\", []);\n\napp.controller(\"contactController\", function ($scope) {\n  $scope.contactList = [{ avatar: \"http://images5.fanpop.com/image/photos/25900000/Monica-Geller-monica-geller-25963717-1035-1280.jpg\", name: \"Monica\", surname: \"Geller\", number: 666777888 }, { avatar: \"http://media4.s-nbcnews.com/j/msnbc/Components/Photos/040505/040505_schwimmer_vmed_2p.grid-4x2.jpg\", name: \"Ross\", surname: \"Geller\", number: 123456789 }, { avatar: \"https://upload.wikimedia.org/wikipedia/en/6/6c/Matthew_Perry_as_Chandler_Bing.jpg\", name: \"Chandler\", surname: \"Bing\", number: 156784515 }, { avatar: \"http://www.davespechtmotor.com/Friends/Pictures/Joey%20after.jpg\", name: \"Joey\", surname: \"Tribbiani\", number: 852741963 }, { avatar: \"https://vignette.wikia.nocookie.net/loveinterest/images/9/93/Rachel_Green.png/revision/latest?cb=20160419025450\", name: \"Rachel\", surname: \"Green\", number: 123789456 }, { avatar: \"https://lgbtfansdeservebetter.com/static/uploads/2016/09/Phoebe-Buffay-Lisa-Kudrow.png\", name: \"Phoebe\", surname: \"Buffay\", number: 357167349 }];\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzdhYzkiXSwibmFtZXMiOlsiYXBwIiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJjb250YWN0TGlzdCIsImF2YXRhciIsIm5hbWUiLCJzdXJuYW1lIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLE1BQU1DLFFBQVFDLE1BQVIsQ0FBZSxjQUFmLEVBQStCLEVBQS9CLENBQVo7O0FBRUFGLElBQUlHLFVBQUosQ0FBZSxtQkFBZixFQUFvQyxVQUFTQyxNQUFULEVBQWlCO0FBQ2pEQSxTQUFPQyxXQUFQLEdBQXFCLENBQ25CLEVBQUNDLFFBQVEsb0dBQVQsRUFBK0dDLE1BQU0sUUFBckgsRUFBK0hDLFNBQVMsUUFBeEksRUFBa0pDLFFBQVEsU0FBMUosRUFEbUIsRUFFbkIsRUFBQ0gsUUFBUSxvR0FBVCxFQUErR0MsTUFBTSxNQUFySCxFQUE2SEMsU0FBUyxRQUF0SSxFQUFnSkMsUUFBUSxTQUF4SixFQUZtQixFQUduQixFQUFDSCxRQUFRLG1GQUFULEVBQThGQyxNQUFNLFVBQXBHLEVBQWdIQyxTQUFTLE1BQXpILEVBQWlJQyxRQUFRLFNBQXpJLEVBSG1CLEVBSW5CLEVBQUNILFFBQVEsa0VBQVQsRUFBNkVDLE1BQU0sTUFBbkYsRUFBMkZDLFNBQVMsV0FBcEcsRUFBaUhDLFFBQVEsU0FBekgsRUFKbUIsRUFLbkIsRUFBQ0gsUUFBUSxpSEFBVCxFQUE0SEMsTUFBTSxRQUFsSSxFQUE0SUMsU0FBUyxPQUFySixFQUE4SkMsUUFBUSxTQUF0SyxFQUxtQixFQU1uQixFQUFDSCxRQUFRLHdGQUFULEVBQW1HQyxNQUFNLFFBQXpHLEVBQW1IQyxTQUFTLFFBQTVILEVBQXNJQyxRQUFRLFNBQTlJLEVBTm1CLENBQXJCO0FBUUgsQ0FURCIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBwID0gYW5ndWxhci5tb2R1bGUoXCJwaG9uZUJvb2tBcHBcIiwgW10pO1xyXG5cclxuYXBwLmNvbnRyb2xsZXIoXCJjb250YWN0Q29udHJvbGxlclwiLCBmdW5jdGlvbigkc2NvcGUpIHtcclxuICAgICRzY29wZS5jb250YWN0TGlzdCA9IFtcclxuICAgICAge2F2YXRhcjogXCJodHRwOi8vaW1hZ2VzNS5mYW5wb3AuY29tL2ltYWdlL3Bob3Rvcy8yNTkwMDAwMC9Nb25pY2EtR2VsbGVyLW1vbmljYS1nZWxsZXItMjU5NjM3MTctMTAzNS0xMjgwLmpwZ1wiLCBuYW1lOiBcIk1vbmljYVwiLCBzdXJuYW1lOiBcIkdlbGxlclwiLCBudW1iZXI6IDY2Njc3Nzg4OH0sXHJcbiAgICAgIHthdmF0YXI6IFwiaHR0cDovL21lZGlhNC5zLW5iY25ld3MuY29tL2ovbXNuYmMvQ29tcG9uZW50cy9QaG90b3MvMDQwNTA1LzA0MDUwNV9zY2h3aW1tZXJfdm1lZF8ycC5ncmlkLTR4Mi5qcGdcIiwgbmFtZTogXCJSb3NzXCIsIHN1cm5hbWU6IFwiR2VsbGVyXCIsIG51bWJlcjogMTIzNDU2Nzg5fSxcclxuICAgICAge2F2YXRhcjogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi82LzZjL01hdHRoZXdfUGVycnlfYXNfQ2hhbmRsZXJfQmluZy5qcGdcIiwgbmFtZTogXCJDaGFuZGxlclwiLCBzdXJuYW1lOiBcIkJpbmdcIiwgbnVtYmVyOiAxNTY3ODQ1MTV9LFxyXG4gICAgICB7YXZhdGFyOiBcImh0dHA6Ly93d3cuZGF2ZXNwZWNodG1vdG9yLmNvbS9GcmllbmRzL1BpY3R1cmVzL0pvZXklMjBhZnRlci5qcGdcIiwgbmFtZTogXCJKb2V5XCIsIHN1cm5hbWU6IFwiVHJpYmJpYW5pXCIsIG51bWJlcjogODUyNzQxOTYzfSxcclxuICAgICAge2F2YXRhcjogXCJodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9sb3ZlaW50ZXJlc3QvaW1hZ2VzLzkvOTMvUmFjaGVsX0dyZWVuLnBuZy9yZXZpc2lvbi9sYXRlc3Q/Y2I9MjAxNjA0MTkwMjU0NTBcIiwgbmFtZTogXCJSYWNoZWxcIiwgc3VybmFtZTogXCJHcmVlblwiLCBudW1iZXI6IDEyMzc4OTQ1Nn0sXHJcbiAgICAgIHthdmF0YXI6IFwiaHR0cHM6Ly9sZ2J0ZmFuc2Rlc2VydmViZXR0ZXIuY29tL3N0YXRpYy91cGxvYWRzLzIwMTYvMDkvUGhvZWJlLUJ1ZmZheS1MaXNhLUt1ZHJvdy5wbmdcIiwgbmFtZTogXCJQaG9lYmVcIiwgc3VybmFtZTogXCJCdWZmYXlcIiwgbnVtYmVyOiAzNTcxNjczNDl9LFxyXG4gICAgXVxyXG59KVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);