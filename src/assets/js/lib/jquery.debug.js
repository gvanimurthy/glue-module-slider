
(function( $ ) {// start closure
	'use strict';


	/**
	 * Dump debug messages to console if available, otherwise to status bar.
	 */
	$.debug = function() {
		var console = window.console;

		if ( typeof console !== 'undefined' && typeof console.log === 'function' ) {
			console.log.apply( console, Array.prototype.slice.call( arguments ));
		// remove comments on else condition if testing IE6 issues in dev environment (do not use for production)
		// } else {
			// TODO join arguments to get string
			//window.status = message;
		}
	};


}( jQuery ));
