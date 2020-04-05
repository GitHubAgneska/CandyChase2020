var _this = this;
import * as tslib_1 from "tslib";
import { TestBed, inject } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { GeolocServiceProvider } from '../../providers/geoloc-service/geoloc.service';
import { AgeSelectPage } from '../../pages/age-select/age-select';
var ageRange = 0;
describe('AgeSelectPage', function () {
    var component;
    var fixture;
    var testBedService;
    var componentService;
    var element;
    var debug;
    beforeEach(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            // refine the test module by declaring the test component
            TestBed.configureTestingModule({
                declarations: [AgeSelectPage],
                providers: [GeolocServiceProvider]
            }).compileComponents().then(function () {
                // create component and test fixture
                fixture = TestBed.createComponent(AgeSelectPage);
                // get test component from the fixture
                component = fixture.componentInstance;
                // fixture.detectChanges();
                testBedService = TestBed.get(GeolocServiceProvider);
                componentService = fixture.debugElement.injector.get(GeolocServiceProvider);
                element = debug.nativeElement;
            });
            return [2 /*return*/];
        });
    }); });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('Service injected via inject(...) and TestBed.get(...) should be the same instance'), (inject([GeolocServiceProvider], function (injectService) {
        expect(injectService).toBe(testBedService);
    }));
    describe("setAge function", function () {
        it("should retrieve ageRange from user choice", function () {
            expect(ageRange).toBeDefined();
        });
        it("should retrieve a number being 1, 2, or 3", function () {
            expect(ageRange).toEqual(1 | 2 | 3);
        });
        it("should call the setCurrentAgeRange method of geolocService with the supplied ageRange number", function () {
            fixture.detectChanges();
            spyOn(component, 'setAge');
            element = fixture.debugElement.query(By.css('button')).nativeElement;
            element.click();
            expect(component.setAge).toHaveBeenCalledTimes(1);
        });
        // should the ageSelectionPage do that or delegate it to service ?
        it("calls the navCtrl to display the mapPage with specs given by ageRange", function () { });
    });
});
//# sourceMappingURL=age-select.spec.js.map