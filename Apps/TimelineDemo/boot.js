/*global require*/
require({
    baseUrl : '../..',
    packages : [{
        name : 'dojo',
        location : 'ThirdParty/dojo-release-1.8.3-src/dojo'
    }, {
        name : 'dijit',
        location : 'ThirdParty/dojo-release-1.8.3-src/dijit'
    }, {
        name : 'Core',
        location : 'Source/Core'
    }, {
        name : 'Widgets',
        location : 'Source/Widgets'
    }, {
        name : 'ThirdParty',
        location : 'Source/ThirdParty'
    }, {
        name : 'TimelineDemo',
        location : 'Apps/TimelineDemo'
    }]
}, [
    'dojo/parser',
    'dojo/dom-class',
    'dojo/_base/window',
    'dojo/date/stamp',
    'dijit/form/Button',
    'dijit/Calendar',
    'dijit/form/TimeTextBox',
    'dijit/form/ComboButton',
    'dijit/Menu',
    'dijit/MenuItem',
    'TimelineDemo/TimelineDemo',
    'dojo/domReady!'
], function(
    parser,
    domClass,
    win) {
    "use strict";

    parser.parse();
    domClass.remove(win.body(), 'loading');
});