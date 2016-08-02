System.register(['@angular/core', '@angular2-material/button/button', '@angular2-material/progress-bar/progress-bar'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, button_1, progress_bar_1;
    var ProgressBarDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (progress_bar_1_1) {
                progress_bar_1 = progress_bar_1_1;
            }],
        execute: function() {
            // TODO(josephperrott): Add an automatically filling example progress bar.
            ProgressBarDemo = (function () {
                function ProgressBarDemo() {
                    this.determinateProgressValue = 30;
                    this.bufferProgressValue = 30;
                    this.bufferBufferValue = 40;
                }
                ProgressBarDemo.prototype.stepDeterminateProgressVal = function (val) {
                    this.determinateProgressValue += val;
                };
                ProgressBarDemo.prototype.stepBufferProgressVal = function (val) {
                    this.bufferProgressValue += val;
                };
                ProgressBarDemo.prototype.stepBufferBufferVal = function (val) {
                    this.bufferBufferValue += val;
                };
                ProgressBarDemo = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'progress-bar-demo',
                        templateUrl: 'progress-bar-demo.html',
                        styleUrls: ['progress-bar-demo.css'],
                        directives: [progress_bar_1.MdProgressBar, button_1.MdButton]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProgressBarDemo);
                return ProgressBarDemo;
            }());
            exports_1("ProgressBarDemo", ProgressBarDemo);
        }
    }
});
//# sourceMappingURL=progress-bar-demo.js.map