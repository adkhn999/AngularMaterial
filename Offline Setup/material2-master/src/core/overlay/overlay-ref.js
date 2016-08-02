System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var OverlayRef;
    return {
        setters:[],
        execute: function() {
            /**
             * Reference to an overlay that has been created with the Overlay service.
             * Used to manipulate or dispose of said overlay.
             */
            OverlayRef = (function () {
                function OverlayRef(_portalHost, _pane, _state) {
                    this._portalHost = _portalHost;
                    this._pane = _pane;
                    this._state = _state;
                }
                OverlayRef.prototype.attach = function (portal) {
                    var _this = this;
                    return this._portalHost.attach(portal).then(function () {
                        _this._updatePosition();
                    });
                };
                OverlayRef.prototype.detach = function () {
                    return this._portalHost.detach();
                };
                OverlayRef.prototype.dispose = function () {
                    this._portalHost.dispose();
                };
                OverlayRef.prototype.hasAttached = function () {
                    return this._portalHost.hasAttached();
                };
                /** Updates the position of the overlay based on the position strategy. */
                OverlayRef.prototype._updatePosition = function () {
                    if (this._state.positionStrategy) {
                        this._state.positionStrategy.apply(this._pane);
                    }
                };
                return OverlayRef;
            }());
            exports_1("OverlayRef", OverlayRef);
        }
    }
});
//# sourceMappingURL=overlay-ref.js.map