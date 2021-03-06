System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    /**
     * Applies a CSS transform to an element, including browser-prefixed properties.
     * @param element
     * @param transformValue
     */
    function applyCssTransform(element, transformValue) {
        // It's important to trim the result, because the browser will ignore the set operation
        // if the string contains only whitespace.
        var value = transformValue.trim();
        element.style.transform = value;
        element.style.webkitTransform = value;
    }
    exports_1("applyCssTransform", applyCssTransform);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=apply-transform.js.map