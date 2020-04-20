import { async, ComponentFixture, TestBed, inject } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { of } from 'rxjs/observable/of';
import { DebugElement } from "@angular/core";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CandyAPIService } from '../../providers/candy-api-service/candy-api.service';
import { BackpackServiceProvider } from '../../providers/backpack-service/backpack-service'
import { CandyI, CandyChecklistI } from '../../models/candy.interface';
import { Candy, CandyChecklist } from '../../models/candy.model';
import { ToastController } from 'ionic-angular';
import { CandyListPage } from './candyList';

let candyList: CandyI[];
let candyItem: Candy;
let candyChecklist: CandyChecklist;
let itemsInBackpack: Candy[];
let totalCandy: number;


describe('ListPage', () => {
    let component: CandyListPage;
    let fixture: ComponentFixture<CandyListPage>;
    let testBedService: CandyAPIService;
    let componentService: CandyAPIService;
    let element: HTMLElement;
    let debug: DebugElement;

    beforeEach(async () => {
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [CandyListPage],
            providers: [CandyAPIService]
        }).compileComponents().then(() => {
            // create component and test fixture
            fixture = TestBed.createComponent(CandyListPage);
            // get test component from the fixture
            component = fixture.componentInstance;
            // fixture.detectChanges();
            testBedService = TestBed.get(CandyAPIService);
            componentService = fixture.debugElement.injector.get(CandyAPIService);
            element = debug.nativeElement;
        });
    })
    afterEach(() => {
        fixture.destroy();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('Service injected via inject(...) and TestBed.get(...) should be the same instance'), (
        inject([CandyAPIService], (injectService: CandyAPIService) => {
            expect(injectService).toBe(testBedService);
        })
    );

    it("#getAllCandyFromApi should call candyService and return list of candy", async(() => {
        const response: Candy[] = [];
/*      spyOn(CandyAPIService, 'getAllCandyFromApi').and.returnValue(of(response))
        component.getAllCandyFromApi();
        fixture.detectChanges();
        expect(component.candyList).toEqual(response);
        done(); */
    }));



;})