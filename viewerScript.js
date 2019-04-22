/* eslint-env es6 */
'use strict';
function initAppForPage() {
    return Promise.resolve();
}

function createControllers(controllerConfigs) {
    return controllerConfigs.map(function(config){
        return {
            pageReady: function ($w, wixScoped) {
                console.log('wixscopedAPI', wixScoped)
                wixScoped.events.setStaticEventHandlers({'button1_click':() => {
	//Add your code for this event here:
	$w('#button1').label = 'static click' 
}},'c1dmp')
            }
        };
    });
}


module.exports = {
    initAppForPage: initAppForPage,
    createControllers: createControllers,
    export: {
    }
};
