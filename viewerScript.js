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
