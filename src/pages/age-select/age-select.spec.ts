import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed, inject } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeolocServiceProvider } from '../../providers/geoloc-service/geoloc.service';
import { MapPage } from '../map/map';

import { AgeSelectPage } from '../../pages/age-select/age-select';

let ageRange = 0;

describe('AgeSelectPage', () => {
    let component: AgeSelectPage;
    let fixture: ComponentFixture<AgeSelectPage>;
    let testBedService: GeolocServiceProvider;
    let componentService: GeolocServiceProvider;
    let element: HTMLElement;
    let debug: DebugElement;

    beforeEach(async() => {
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [AgeSelectPage],
            providers: [ GeolocServiceProvider ]
        }).compileComponents().then(()=> {
            // create component and test fixture
                fixture = TestBed.createComponent(AgeSelectPage);
                // get test component from the fixture
                component = fixture.componentInstance;
                // fixture.detectChanges();
                testBedService = TestBed.get(GeolocServiceProvider);
                componentService = fixture.debugElement.injector.get(GeolocServiceProvider);
                element = debug.nativeElement;
        });
    })
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('Service injected via inject(...) and TestBed.get(...) should be the same instance'), ( 
        inject([GeolocServiceProvider], (injectService: GeolocServiceProvider) => {
            expect(injectService).toBe(testBedService);})
    );


describe("setAge function", () => {
    it("should retrieve ageRange from user choice", () => {
        expect(ageRange).toBeDefined();
    });
    it("should retrieve a number being 1, 2, or 3", () => {
        expect(ageRange).toEqual(1 | 2 | 3);
    });
    it("should call the setCurrentAgeRange method of geolocService with the supplied ageRange number", () => {
        fixture.detectChanges();
        spyOn(component, 'setAge');
        element = fixture.debugElement.query(By.css('button')).nativeElement;
        element.click();
        expect(component.setAge).toHaveBeenCalledTimes(1);
    });
    // should the ageSelectionPage do that or delegate it to service ?
    it("calls the navCtrl to display the mapPage with specs given by ageRange", () => { });
    });
});
