import {windowTemplate,css}  from '../static/static';

jQuery(function(){
	if(jQuery.find('style.wavelert-styles').length < 1) {
		jQuery('body').append(`<style type="text/css" class="wavelert-styles">${css}</style>`);
	}
});

export class WaveWindow {
		
	/*
		false promise bc I really don't want to find out how ES6 to ES4 promises work right now
	*/	
	
	success(callback){
		this._onSuccess = callback;
		return this;
	}
	fail(callback){
		this._onFail = callback;
		return this;
	}
	place(){
		jQuery('body').append(this.$window);		
		return this;
	};
	
	parseParams(params){
		return params;
	}

	constructor(params)	{
		
		var self = this;
		
		this._onSuccess = function(){};
		this._onFail = function(){};
		self.$window = jQuery(windowTemplate);
		
		if(typeof params === 'string') {
			params = {
				'text': params
			};
		}
		if(!params) {
			params = {};
		}
		if(!params.text) {
			params.text = 'The window at '+window.location.href+' says nothing';
		}
		params = this.parseParams(params);
		
		self.$window.find('.wavelert-dialog-buttons').append(params.buttons);	
		self.$window.find('.wavelert-dialog-message').text(params.text);
		if(params.dark) {
			self.$window.addClass('wavelert-wrapper--dark');
		}
		if(params.icon) {
			self.$window.find('.wavelert-dialog-message').prepend(`<span class="wavelert-js-close wavelert-u-glyph wavelert-u-glyph--${params.icon}"></span>`)
		}
		if(params.title) {
			self.$window.find('.wavelert-title').prepend(params.title)
		}
		if(params.theme) {
			self.$window = self.$window.wrap(`<div class="wavelert-u-theme wavelert-u-theme--${params.theme}"></div>`).parent();
		}
						
		self.$window.on('click','.wavelert-js-close',function(ev){
			ev.preventDefault();
			ev.stopPropagation();
			self.$window.remove();
			if($(ev.currentTarget).hasClass('wavelert-js-close--cool')) {
				self._onSuccess();
			}
			else {
				self._onFail();	
			}
		})

	}		
}