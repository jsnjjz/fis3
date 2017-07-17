define('modules/js/main', function(require, exports, module) {

  //index
  'use strict';
  
  var index = {
  	init: function init(num) {
  		require(['modules/js/jquery'], function ($) {
  			$(document).ready(function () {
  				var aLi = document.getElementsByTagName('li');
  				for (var i = 0; i < aLi.length; i++) {
  					aLi[i].index = i;
  					aLi[i].onclick = function () {
  						alert(this.index);
  					};
  				}
  			});
  		});
  	}
  };
  //about
  var about = {
  	init: function init(num) {
  		require(['modules/js/jquery'], function ($) {
  			$(document).ready(function () {
  				console.log(num);
  			});
  		});
  	}
  };
  
  exports.index = index;
  exports.about = about;

});
