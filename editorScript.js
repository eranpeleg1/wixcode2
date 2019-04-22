'use strict';

function getAppManifest() {
    return {};
}

const CONTROLLER_COMP_DEF = {
    type: 'Component',
    skin: 'platform.components.skins.controllerSkin',
    layout: {
        width: 40,
        height: 40,
        x: 20,
        y: 15,
        scale: 1,
        rotationInDegrees: 0,
        fixedPosition: false
    },
    componentType: 'platform.components.AppController',
    data: {
        type: 'AppController',
        applicationId: '19ea498b-7a4a-46c1-b913-56c5581c7930',
        name: 'mockController',
        controllerType: 'mockController'
    },
    metaData: {
        isPreset: false,
        schemaVersion: '1.0',
        isHidden: false
    },
    style: {
        type: 'TopLevelStyle',
        metaData: {
            isPreset: false,
            schemaVersion: '1.0',
            isHidden: false
        },
        style: {
            groups: {},
            properties: {
                'alpha-bg': '1',
                'alpha -bgh': '1',
                'alpha - brd': '1',
                'alpha - brdh': '1',
                'alpha - txt': '1',
                'alpha - txth': '1',
                bg: '#3D9BE9',
                bgh: '#2B689C',
                'boxShadowToggleOn -shd': 'false',
                brd: '#2B689C',
                brdh: '#3D9BE9',
                brw: '0px',
                fnt: 'normal normal normal 14px/1.4em raleway',
                rd: '20px',
                shd: '0 1px 4px rgba(0, 0, 0, 0.6);',
                txt: '#FFFFFF',
                txth: '#FFFFFF'
            },
            propertiesSource: {
                bg: 'value',
                bgh: 'value',
                brd: 'value',
                brdh: 'value',
                brw: 'value',
                fnt: 'value',
                rd: 'value',
                shd: 'value',
                txt: 'value',
                txth: 'value'
            }
        },
        componentClassName: 'platform.components.AppController',
        skin: 'platform.components.skins.controllerSkin'
    }
}

const ButtonDef =  {
    componentType : 'wysiwyg.viewer.components.SiteButton',
    layout: {
        x: 100,
        'y': 100,
        'width': 200,
        'height': 100
    },
    style: 'b1',
    data: {
        'type': 'LinkableButton',
        'label': 'Button',
        'link': null
    },

}


async function addButton(editorSDK, appToken, controllerRef, pageRef, role) {
    const compRef = await editorSDK.components.add(appToken, {componentDefinition: ButtonDef, pageRef: pageRef})
    editorSDK.controllers.connect(appToken, {
        connectToRef: compRef,
        controllerRef: controllerRef,
        role: role,
        connectionConfig: {},
        isPrimary: true
    })
}

async function createController(editorSDK, appToken, pageRef) {
    return await editorSDK.components.add(appToken, {pageRef, componentDefinition: CONTROLLER_COMP_DEF})
}

async function install(editorSDK, appDefinitionId){
    const pageRef = await editorSDK.pages.getCurrent()
    const controllerRef = await createController(editorSDK, appDefinitionId, pageRef)
    await addButton(editorSDK, appDefinitionId,controllerRef, pageRef, 'button1')
}

async function editorReady(editorSDK, appDefinitionId, options) {
    console.log('EDITOR READDYYY')
    if(options.firstInstall){
        console.log('first install')
        install(editorSDK, appDefinitionId);
    }
}

function onEvent(event) {
    switch (event.eventType) {
        default:
            break;
    }
}


module.exports = {
    onEvent: onEvent,
    editorReady: editorReady,
    getAppManifest: getAppManifest
};
