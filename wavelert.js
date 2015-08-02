import {css,html}  from './wavelert/static';

window.wavelert = function(params) {
	return (new Wavelert(params)).place();
}
 
var Wavelert = function(params) {
	
	var _onSuccess = function(){};
	var _onFail = function(){};
	
	var windowGetter = new Promise(function(resolve, reject){
						
		if(jQuery.find('style.wavelert-styles').length < 1) {
			jQuery('body').append(`<style type="text/css" class="wavelert-styles">${css}</style>`);
		}
		
		var $window = jQuery(html);
		
		if(!params) {
			params = {};
		}
		if(!params.text) {
			params.text = 'The window at '+window.location.href+' says nothing';
		}
		if(!params.icon) {
			params.icon = 'alert';
		}
		
		$window.find('.wavelert-dialog-message').text(params.text);
		if(params.dark) {
			$window.addClass('wavelert-wrapper--dark');
		}
		if(params.icon) {
			$window.find('.wavelert-dialog-message').prepend(`<span class="wavelert-js-close wavelert-u-glyph wavelert-u-glyph--${params.icon}"></span>`)
		}
						
		$window.on('click','.wavelert-js-close',function(ev){
			ev.preventDefault();
			ev.stopPropagation();
			$window.remove();
			_onFail();
		})
		$window.on('click','.wavelert-js-cool',function(ev){
			ev.preventDefault();
			ev.stopPropagation();
			$window.remove();
			_onSuccess();
		})
		
		resolve($window);
		
	});
	
	/*
		false promise bc I really don't want to find out how ES6 to ES4 promises work right now
	*/	
	var self = this;
	
	self.success = function(callback){
		_onSuccess = callback;
		return self;
	}
	self.fail = function(callback){
		_onFail = callback;
		return self;
	}
	self.place =  function(){
		windowGetter.then(function($window){
			jQuery('body').append($window);		
		})
		return self;
	};
	return this;
		
}