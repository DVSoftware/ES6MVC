import $ from 'jquery';

var oldCleanData = jQuery.cleanData;

$.cleanData = function( elems ) {
	for ( var i = 0, elem;
	(elem = elems[i]) !== undefined; i++ ) {
		$(elem).triggerHandler("destroyed");
	}
	oldCleanData(elems);
};
