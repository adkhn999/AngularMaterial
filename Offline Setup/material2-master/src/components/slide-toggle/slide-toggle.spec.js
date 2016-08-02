System.register(['@angular/core/testing', '@angular/compiler/testing', '@angular/platform-browser', '@angular/core', './slide-toggle', '@angular/common'], function(exports_1, context_1) {
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
    var testing_1, testing_2, platform_browser_1, core_1, slide_toggle_1, common_1;
    var SlideToggleTestApp;
    function main() {
        testing_1.describe('MdSlideToggle', function () {
            var builder;
            testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
                builder = tcb;
            }));
            testing_1.describe('basic behavior', function () {
                var fixture;
                var testComponent;
                var slideToggle;
                var slideToggleElement;
                var slideToggleControl;
                var labelElement;
                var inputElement;
                testing_1.beforeEach(testing_1.async(function () {
                    builder.createAsync(SlideToggleTestApp).then(function (f) {
                        fixture = f;
                        fixture.detectChanges();
                        var slideToggleDebug = fixture.debugElement.query(platform_browser_1.By.css('md-slide-toggle'));
                        testComponent = fixture.debugElement.componentInstance;
                        slideToggle = slideToggleDebug.componentInstance;
                        slideToggleElement = slideToggleDebug.nativeElement;
                        slideToggleControl = slideToggleDebug.injector.get(common_1.NgControl);
                        inputElement = fixture.debugElement.query(platform_browser_1.By.css('input')).nativeElement;
                        labelElement = fixture.debugElement.query(platform_browser_1.By.css('label')).nativeElement;
                    });
                }));
                testing_1.it('should update the model correctly', function () {
                    testing_1.expect(slideToggleElement.classList).not.toContain('md-checked');
                    testComponent.slideModel = true;
                    fixture.detectChanges();
                    testing_1.expect(slideToggleElement.classList).toContain('md-checked');
                });
                testing_1.it('should apply class based on color attribute', function () {
                    testComponent.slideColor = 'primary';
                    fixture.detectChanges();
                    testing_1.expect(slideToggleElement.classList).toContain('md-primary');
                    testComponent.slideColor = 'accent';
                    fixture.detectChanges();
                    testing_1.expect(slideToggleElement.classList).toContain('md-accent');
                });
                testing_1.it('should correctly update the disabled property', function () {
                    testing_1.expect(inputElement.disabled).toBeFalsy();
                    testComponent.isDisabled = true;
                    fixture.detectChanges();
                    testing_1.expect(inputElement.disabled).toBeTruthy();
                });
                testing_1.it('should correctly update the checked property', function () {
                    testing_1.expect(slideToggle.checked).toBeFalsy();
                    testComponent.slideChecked = true;
                    fixture.detectChanges();
                    testing_1.expect(inputElement.checked).toBeTruthy();
                });
                testing_1.it('should set the toggle to checked on click', function () {
                    testing_1.expect(slideToggle.checked).toBe(false);
                    testing_1.expect(slideToggleElement.classList).not.toContain('md-checked');
                    labelElement.click();
                    fixture.detectChanges();
                    testing_1.expect(slideToggleElement.classList).toContain('md-checked');
                    testing_1.expect(slideToggle.checked).toBe(true);
                });
                testing_1.it('should add a suffix to the inputs id', function () {
                    testComponent.slideId = 'myId';
                    fixture.detectChanges();
                    testing_1.expect(inputElement.id).toBe('myId-input');
                    testComponent.slideId = 'nextId';
                    fixture.detectChanges();
                    testing_1.expect(inputElement.id).toBe('nextId-input');
                    testComponent.slideId = null;
                    fixture.detectChanges();
                    // Once the id input is falsy, we use a default prefix with a incrementing unique number.
                    testing_1.expect(inputElement.id).toMatch(/md-slide-toggle-[0-9]+-input/g);
                });
                testing_1.it('should forward the specified name to the input', function () {
                    testComponent.slideName = 'myName';
                    fixture.detectChanges();
                    testing_1.expect(inputElement.name).toBe('myName');
                    testComponent.slideName = 'nextName';
                    fixture.detectChanges();
                    testing_1.expect(inputElement.name).toBe('nextName');
                    testComponent.slideName = null;
                    fixture.detectChanges();
                    testing_1.expect(inputElement.name).toBe('');
                });
                testing_1.it('should forward the aria-label attribute to the input', function () {
                    testComponent.slideLabel = 'ariaLabel';
                    fixture.detectChanges();
                    testing_1.expect(inputElement.getAttribute('aria-label')).toBe('ariaLabel');
                    testComponent.slideLabel = null;
                    fixture.detectChanges();
                    testing_1.expect(inputElement.hasAttribute('aria-label')).toBeFalsy();
                });
                testing_1.it('should forward the aria-labelledby attribute to the input', function () {
                    testComponent.slideLabelledBy = 'ariaLabelledBy';
                    fixture.detectChanges();
                    testing_1.expect(inputElement.getAttribute('aria-labelledby')).toBe('ariaLabelledBy');
                    testComponent.slideLabelledBy = null;
                    fixture.detectChanges();
                    testing_1.expect(inputElement.hasAttribute('aria-labelledby')).toBeFalsy();
                });
                testing_1.it('should be initially set to ng-pristine', function () {
                    testing_1.expect(slideToggleElement.classList).toContain('ng-pristine');
                    testing_1.expect(slideToggleElement.classList).not.toContain('ng-dirty');
                });
                testing_1.it('should emit the new values', function () {
                    testing_1.expect(testComponent.changeCount).toBe(0);
                    labelElement.click();
                    fixture.detectChanges();
                    testing_1.expect(testComponent.changeCount).toBe(1);
                });
                testing_1.it('should support subscription on the change observable', function () {
                    slideToggle.change.subscribe(function (value) {
                        testing_1.expect(value).toBe(true);
                    });
                    slideToggle.toggle();
                    fixture.detectChanges();
                });
                testing_1.it('should have the correct ngControl state initially and after interaction', function () {
                    // The control should start off valid, pristine, and untouched.
                    testing_1.expect(slideToggleControl.valid).toBe(true);
                    testing_1.expect(slideToggleControl.pristine).toBe(true);
                    testing_1.expect(slideToggleControl.touched).toBe(false);
                    // After changing the value programmatically, the control should
                    // become dirty (not pristine), but remain untouched.
                    slideToggle.checked = true;
                    fixture.detectChanges();
                    testing_1.expect(slideToggleControl.valid).toBe(true);
                    testing_1.expect(slideToggleControl.pristine).toBe(false);
                    testing_1.expect(slideToggleControl.touched).toBe(false);
                    // After a user interaction occurs (such as a click), the control should remain dirty and
                    // now also be touched.
                    labelElement.click();
                    fixture.detectChanges();
                    testing_1.expect(slideToggleControl.valid).toBe(true);
                    testing_1.expect(slideToggleControl.pristine).toBe(false);
                    testing_1.expect(slideToggleControl.touched).toBe(true);
                });
                testing_1.it('should not set the ngControl to touched when changing the state programmatically', function () {
                    // The control should start off with being untouched.
                    testing_1.expect(slideToggleControl.touched).toBe(false);
                    testComponent.slideChecked = true;
                    fixture.detectChanges();
                    testing_1.expect(slideToggleControl.touched).toBe(false);
                    testing_1.expect(slideToggleElement.classList).toContain('md-checked');
                    // After a user interaction occurs (such as a click), the control should remain dirty and
                    // now also be touched.
                    inputElement.click();
                    fixture.detectChanges();
                    testing_1.expect(slideToggleControl.touched).toBe(true);
                    testing_1.expect(slideToggleElement.classList).not.toContain('md-checked');
                });
                testing_1.it('should not set the ngControl to touched when changing the model', function () {
                    // The control should start off with being untouched.
                    testing_1.expect(slideToggleControl.touched).toBe(false);
                    testComponent.slideModel = true;
                    fixture.detectChanges();
                    testing_1.expect(slideToggleControl.touched).toBe(false);
                    testing_1.expect(slideToggle.checked).toBe(true);
                    testing_1.expect(slideToggleElement.classList).toContain('md-checked');
                });
            });
        });
    }
    exports_1("main", main);
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (slide_toggle_1_1) {
                slide_toggle_1 = slide_toggle_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            SlideToggleTestApp = (function () {
                function SlideToggleTestApp() {
                    this.isDisabled = false;
                    this.slideModel = false;
                    this.slideChecked = false;
                    this.changeCount = 0;
                }
                SlideToggleTestApp = __decorate([
                    core_1.Component({
                        selector: 'slide-toggle-test-app',
                        template: "\n    <md-slide-toggle [(ngModel)]=\"slideModel\" [disabled]=\"isDisabled\" [color]=\"slideColor\" \n                     [id]=\"slideId\" [checked]=\"slideChecked\" [name]=\"slideName\" \n                     [aria-label]=\"slideLabel\" [ariaLabel]=\"slideLabel\" \n                     [ariaLabelledby]=\"slideLabelledBy\" (change)=\"changeCount = changeCount + 1\">\n      <span>Test Slide Toggle</span>\n    </md-slide-toggle>\n  ",
                        directives: [slide_toggle_1.MdSlideToggle]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SlideToggleTestApp);
                return SlideToggleTestApp;
            }());
        }
    }
});
//# sourceMappingURL=slide-toggle.spec.js.map