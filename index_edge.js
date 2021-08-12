/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'a',
                type: 'image',
                rect: ['1px', '584px','117px','78px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a.jpg",'0px','0px']
            },
            {
                id: 'lo',
                type: 'image',
                rect: ['2px', '3px','118px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lo.jpg",'0px','0px'],
                transform: [[],[],[],['0.95','0.95']]
            },
            {
                id: 'n',
                type: 'image',
                rect: ['1px', '87px','118px','70px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"n.jpg",'0px','0px'],
                transform: [[],[],[],['0.95','0.95']]
            },
            {
                id: 'ci',
                type: 'image',
                rect: ['0px', '216px','120px','120px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ci.png",'0px','0px'],
                transform: [[],['90']]
            },
            {
                id: 'gr',
                type: 'image',
                rect: ['-19px', '344px','118px','42px','auto', 'auto'],
                clip: ['rect(0px 118px 42px 29.90804672241211px)'],
                fill: ["rgba(0,0,0,0)",im+"gr.jpg",'0px','0px'],
                transform: [[],[],[],['1.25778','1.25778']]
            },
            {
                id: 't',
                type: 'image',
                rect: ['-76px', '466px','272px','48px','auto', 'auto'],
                clip: ['rect(0px 272px 48px 56px)'],
                fill: ["rgba(0,0,0,0)",im+"t.jpg",'0px','0px'],
                transform: [[],['-90']]
            },
            {
                id: 'li',
                type: 'image',
                rect: ['1px', '144px','120px','287px','auto', 'auto'],
                clip: ['rect(20px 120px 47.66650390625px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"li.jpg",'0px','20px'],
                transform: [[],[],[],['0.85','0.85']]
            },
            {
                id: 'a1',
                type: 'image',
                rect: ['-117px', '222px','336px','123px','auto', 'auto'],
                clip: ['rect(2px 251.44102478027344px 123px 103.08131408691406px)'],
                fill: ["rgba(0,0,0,0)",im+"a1.png",'0px','0px'],
                transform: [[],[],[],['0.99339','0.99339']]
            },
            {
                id: 'a3',
                type: 'image',
                rect: ['9px', '237px','336px','86px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a3.png",'0px','0px']
            },
            {
                id: 'a4',
                type: 'image',
                rect: ['-221px', '202px','336px','128px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a4.png",'0px','0px']
            },
            {
                id: 'a2',
                type: 'image',
                rect: ['-214px', '217px','336px','143px','auto', 'auto'],
                clip: ['rect(0px 336px 143px 204px)'],
                fill: ["rgba(0,0,0,0)",im+"a2.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_a2}": [
                ["style", "top", '218px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-214px'],
                ["style", "height", '143px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,336,143,204], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '336px']
            ],
            "${_li}": [
                ["style", "top", '144px'],
                ["transform", "scaleY", '0.85'],
                ["style", "left", '1px'],
                ["transform", "scaleX", '0.85'],
                ["style", "opacity", '0'],
                ["style", "background-position", [0,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "clip", [20,120,47.66650390625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_a}": [
                ["style", "top", '584px'],
                ["style", "height", '78px'],
                ["style", "opacity", '0'],
                ["style", "left", '1px'],
                ["style", "width", '117px']
            ],
            "${_lo}": [
                ["style", "top", '10px'],
                ["transform", "scaleY", '0.95'],
                ["style", "height", '75px'],
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["style", "left", '2px'],
                ["style", "width", '118px']
            ],
            "${_a1}": [
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '-117px'],
                ["style", "width", '336px'],
                ["style", "top", '222px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '123px'],
                ["style", "clip", [2,251.44102478027344,123,103.08131408691406], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_t}": [
                ["transform", "rotateZ", '-90deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '-76px'],
                ["style", "width", '272px'],
                ["style", "top", '466px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '48px'],
                ["style", "clip", [0,272,48,56], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_gr}": [
                ["style", "top", '347px'],
                ["style", "height", '42px'],
                ["transform", "scaleY", '1.25778'],
                ["style", "left", '-18px'],
                ["transform", "scaleX", '1.25778'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,118,42,29.90804672241211], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '118px']
            ],
            "${_n}": [
                ["style", "top", '98px'],
                ["transform", "scaleY", '0.95'],
                ["style", "height", '70px'],
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["style", "left", '2px'],
                ["style", "width", '118px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '670px'],
                ["style", "width", '120px']
            ],
            "${_a4}": [
                ["style", "-webkit-transform-origin", [86.01,48.44], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [86.01,48.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [86.01,48.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [86.01,48.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [86.01,48.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-221px'],
                ["style", "width", '336px'],
                ["style", "top", '202px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '128px'],
                ["style", "clip", [0,336,128,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_ci}": [
                ["style", "top", '216px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_a3}": [
                ["style", "-webkit-transform-origin", [15.77,51.94], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [15.77,51.94],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [15.77,51.94],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [15.77,51.94],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [15.77,51.94],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '9px'],
                ["style", "width", '336px'],
                ["style", "top", '237px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '86px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 21000,
            autoPlay: true,
            timeline: [
                { id: "eid68", tween: [ "transform", "${_a3}", "scaleX", '1', { fromValue: '0'}], position: 13333, duration: 280, easing: "easeInOutCubic" },
                { id: "eid86", tween: [ "style", "${_a2}", "opacity", '1', { fromValue: '0'}], position: 16479, duration: 104, easing: "easeInOutCubic" },
                { id: "eid91", tween: [ "style", "${_a2}", "opacity", '0', { fromValue: '1'}], position: 17583, duration: 115, easing: "easeInOutCubic" },
                { id: "eid92", tween: [ "style", "${_a2}", "opacity", '1', { fromValue: '0'}], position: 18036, duration: 115, easing: "easeInOutCubic" },
                { id: "eid94", tween: [ "style", "${_a2}", "opacity", '0', { fromValue: '1'}], position: 19333, duration: 115, easing: "easeInOutCubic" },
                { id: "eid95", tween: [ "style", "${_a2}", "opacity", '1', { fromValue: '0'}], position: 19786, duration: 115, easing: "easeInOutCubic" },
                { id: "eid36", tween: [ "style", "${_a1}", "background-position", [110,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 3083, duration: 115, easing: "easeInOutCubic" },
                { id: "eid38", tween: [ "style", "${_a1}", "background-position", [130,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [110,0]}], position: 3198, duration: 635, easing: "easeInOutCubic" },
                { id: "eid39", tween: [ "style", "${_a1}", "background-position", [-127.5,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [130,0]}], position: 5333, duration: 568, easing: "easeInOutCubic" },
                { id: "eid113", tween: [ "style", "${_lo}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 444, easing: "easeInOutCubic" },
                { id: "eid37", tween: [ "style", "${_a1}", "clip", [2,216.44102478027344,123,103.08131408691406], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2,251.44102478027344,123,103.08131408691406]}], position: 3083, duration: 534, easing: "easeInOutCubic" },
                { id: "eid40", tween: [ "style", "${_a1}", "clip", [2,216.44102478027344,123,123.08131408691406], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2,216.44102478027344,123,103.08131408691406]}], position: 5333, duration: 568, easing: "easeInOutCubic" },
                { id: "eid119", tween: [ "style", "${_n}", "opacity", '1', { fromValue: '0'}], position: 444, duration: 444, easing: "easeInOutCubic" },
                { id: "eid71", tween: [ "style", "${_a3}", "opacity", '1', { fromValue: '0'}], position: 13500, duration: 115, easing: "easeInOutCubic" },
                { id: "eid75", tween: [ "style", "${_a3}", "opacity", '0', { fromValue: '1'}], position: 14833, duration: 115, easing: "easeInOutCubic" },
                { id: "eid76", tween: [ "style", "${_a3}", "opacity", '1', { fromValue: '0'}], position: 15286, duration: 115, easing: "easeInOutCubic" },
                { id: "eid84", tween: [ "style", "${_a3}", "opacity", '0', { fromValue: '1'}], position: 16229, duration: 104, easing: "easeInOutCubic" },
                { id: "eid143", tween: [ "style", "${_lo}", "top", '10px', { fromValue: '10px'}], position: 10224, duration: 0 },
                { id: "eid111", tween: [ "style", "${_gr}", "opacity", '1', { fromValue: '0'}], position: 10833, duration: 800, easing: "easeInOutCubic" },
                { id: "eid146", tween: [ "style", "${_gr}", "opacity", '0', { fromValue: '1'}], position: 20500, duration: 444, easing: "easeInOutCubic" },
                { id: "eid141", tween: [ "style", "${_gr}", "top", '607px', { fromValue: '347px'}], position: 10500, duration: 0 },
                { id: "eid48", tween: [ "style", "${_a4}", "background-position", [107.55533854166,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 8833, duration: 500, easing: "easeInOutCubic" },
                { id: "eid59", tween: [ "style", "${_a4}", "background-position", [231.55497233072,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [107.55533854166,0]}], position: 10833, duration: 568, easing: "easeInOutCubic" },
                { id: "eid74", tween: [ "style", "${_a3}", "background-position", [-124,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 13186, duration: 427, easing: "easeInOutCubic" },
                { id: "eid77", tween: [ "style", "${_a3}", "background-position", [-249.33349609375,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-124,0]}], position: 14833, duration: 568, easing: "easeInOutCubic" },
                { id: "eid125", tween: [ "style", "${_li}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667, easing: "easeInOutCubic" },
                { id: "eid127", tween: [ "style", "${_li}", "background-position", [0,-16.470588235294], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,20]}], position: 3198, duration: 419, easing: "easeInOutCubic" },
                { id: "eid129", tween: [ "style", "${_li}", "background-position", [0,-47.058823294118], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-16.470588]}], position: 5333, duration: 496, easing: "easeInOutCubic" },
                { id: "eid130", tween: [ "style", "${_li}", "background-position", [0,-79.999999470588], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-47.058823]}], position: 6991, duration: 259, easing: "easeInOutCubic" },
                { id: "eid131", tween: [ "style", "${_li}", "background-position", [0,-109.41176370588], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-79.999999]}], position: 9102, duration: 231, easing: "easeInOutCubic" },
                { id: "eid132", tween: [ "style", "${_li}", "background-position", [0,-145.88235223529], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-109.411764]}], position: 11000, duration: 250, easing: "easeInOutCubic" },
                { id: "eid133", tween: [ "style", "${_li}", "background-position", [0,-178.82352847059], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-145.882352]}], position: 13333, duration: 250, easing: "easeInOutCubic" },
                { id: "eid134", tween: [ "style", "${_li}", "background-position", [0,-211.76470447059], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-178.823528]}], position: 16479, duration: 305, easing: "easeInOutCubic" },
                { id: "eid135", tween: [ "style", "${_li}", "background-position", [0,-237.64705694118], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-211.764704]}], position: 17698, duration: 338, easing: "easeInOutCubic" },
                { id: "eid61", tween: [ "style", "${_a4}", "opacity", '1', { fromValue: '0'}], position: 7424, duration: 115, easing: "easeInOutCubic" },
                { id: "eid55", tween: [ "style", "${_a4}", "opacity", '0', { fromValue: '1'}], position: 8833, duration: 115, easing: "easeInOutCubic" },
                { id: "eid56", tween: [ "style", "${_a4}", "opacity", '1', { fromValue: '0'}], position: 9218, duration: 115, easing: "easeInOutCubic" },
                { id: "eid57", tween: [ "style", "${_a4}", "opacity", '0', { fromValue: '1'}], position: 10833, duration: 115, easing: "easeInOutCubic" },
                { id: "eid58", tween: [ "style", "${_a4}", "opacity", '1', { fromValue: '0'}], position: 11286, duration: 115, easing: "easeInOutCubic" },
                { id: "eid62", tween: [ "style", "${_a4}", "opacity", '0', { fromValue: '1'}], position: 12833, duration: 115, easing: "easeInOutCubic" },
                { id: "eid3", tween: [ "transform", "${_a1}", "scaleY", '0.8', { fromValue: '0'}], position: 1333, duration: 250, easing: "easeInOutCubic" },
                { id: "eid81", tween: [ "transform", "${_a1}", "scaleY", '0.9', { fromValue: '0.8'}], position: 3428, duration: 189, easing: "easeInOutCubic" },
                { id: "eid109", tween: [ "style", "${_ci}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 444, easing: "easeInOutCubic" },
                { id: "eid17", tween: [ "style", "${_a1}", "opacity", '0', { fromValue: '1'}], position: 3083, duration: 115, easing: "easeInOutCubic" },
                { id: "eid19", tween: [ "style", "${_a1}", "opacity", '1', { fromValue: '0'}], position: 3617, duration: 115, easing: "easeInOutCubic" },
                { id: "eid21", tween: [ "style", "${_a1}", "opacity", '0', { fromValue: '1'}], position: 5333, duration: 115, easing: "easeInOutCubic" },
                { id: "eid24", tween: [ "style", "${_a1}", "opacity", '1', { fromValue: '0'}], position: 5833, duration: 115, easing: "easeInOutCubic" },
                { id: "eid41", tween: [ "style", "${_a1}", "opacity", '0', { fromValue: '1'}], position: 6991, duration: 115, easing: "easeInOutCubic" },
                { id: "eid93", tween: [ "style", "${_a2}", "background-position", [125.33349609375,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 17583, duration: 568, easing: "easeInOutCubic" },
                { id: "eid96", tween: [ "style", "${_a2}", "background-position", [252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [125.33349609375,0]}], position: 19333, duration: 568, easing: "easeInOutCubic" },
                { id: "eid32", tween: [ "transform", "${_ci}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 6991, duration: 339, easing: "easeInOutCubic" },
                { id: "eid82", tween: [ "transform", "${_ci}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 13083, duration: 250, easing: "easeInOutCubic" },
                { id: "eid85", tween: [ "transform", "${_ci}", "rotateZ", '-180deg', { fromValue: '-90deg'}], position: 16333, duration: 146, easing: "easeInOutCubic" },
                { id: "eid4", tween: [ "transform", "${_a1}", "scaleX", '0.8', { fromValue: '0'}], position: 1333, duration: 250, easing: "easeInOutCubic" },
                { id: "eid80", tween: [ "transform", "${_a1}", "scaleX", '0.9', { fromValue: '0.8'}], position: 3428, duration: 189, easing: "easeInOutCubic" },
                { id: "eid47", tween: [ "style", "${_a4}", "clip", [0,336,128,233.3333282470703], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,336,128,0]}], position: 7330, duration: 157, easing: "easeInOutCubic" },
                { id: "eid49", tween: [ "style", "${_a4}", "clip", [0,362.6666564941406,128,202.66709899902344], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,336,128,233.3333282470703]}], position: 8833, duration: 500, easing: "easeInOutCubic" },
                { id: "eid45", tween: [ "transform", "${_a4}", "scaleX", '0.8', { fromValue: '0'}], position: 7372, duration: 115, easing: "easeInOutCubic" },
                { id: "eid142", tween: [ "style", "${_a2}", "top", '218px', { fromValue: '218px'}], position: 21000, duration: 0 },
                { id: "eid115", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 444, duration: 889, easing: "easeInOutCubic" },
                { id: "eid155", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 6900, duration: 214, easing: "easeInOutCubic" },
                { id: "eid157", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 7114, duration: 373, easing: "easeInOutCubic" },
                { id: "eid158", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 12833, duration: 214, easing: "easeInOutCubic" },
                { id: "eid159", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 13047, duration: 373, easing: "easeInOutCubic" },
                { id: "eid160", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 16784, duration: 214, easing: "easeInOutCubic" },
                { id: "eid161", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 16998, duration: 373, easing: "easeInOutCubic" },
                { id: "eid69", tween: [ "transform", "${_a3}", "scaleY", '1', { fromValue: '0'}], position: 13333, duration: 280, easing: "easeInOutCubic" },
                { id: "eid46", tween: [ "transform", "${_a4}", "scaleY", '0.8', { fromValue: '0'}], position: 7372, duration: 115, easing: "easeInOutCubic" },
                { id: "eid117", tween: [ "style", "${_a}", "opacity", '1', { fromValue: '0'}], position: 444, duration: 800, easing: "easeInOutCubic" },
                { id: "eid148", tween: [ "style", "${_a}", "opacity", '0', { fromValue: '1'}], position: 10833, duration: 444, easing: "easeInOutCubic" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-171898");
