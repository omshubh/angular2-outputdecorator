System.register(["angular2/platform/browser", "./vote_taker.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, vote_taker_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (vote_taker_component_1_1) {
                vote_taker_component_1 = vote_taker_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(vote_taker_component_1.VoteTakerComponent);
        }
    }
});
//# sourceMappingURL=environment_main.js.map