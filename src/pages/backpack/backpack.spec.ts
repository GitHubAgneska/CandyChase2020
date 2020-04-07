import { async, ComponentFixture, TestBed, inject } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BackpackServiceProvider } from '../../providers/backpack-service/backpack-service';
import { CandyDetailsPage } from '../candy-details/candy-details';
import { Candy } from '../../models/candy.model';
import { KeyvaluePipe } from '../../pipes/keyvalue/keyvalue';
import { ShortenStringPipe } from '../../pipes/shorten-string/shorten-string';
import { BackpackPage } from './backpack';

let candyItem: Candy;
let id: number;
let collectedCandy:Candy[];
let totalCandy: number;
let levelName: string;
let currentLevel: {};
let geo:any[];

describe('BackpackPage', () => {
    let component: BackpackPage;
    let fixture: ComponentFixture<BackpackPage>;
    let testBedService: BackpackServiceProvider;
    let componentService: BackpackServiceProvider;
    let element: HTMLElement;
    let debug: DebugElement;


    beforeEach(async() => {
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [BackpackPage],
            providers: [ BackpackServiceProvider ]
        }).compileComponents().then(()=> {
            // create component and test fixture
                fixture = TestBed.createComponent(BackpackPage);
                // get test component from the fixture
                component = fixture.componentInstance;
                // fixture.detectChanges();
                testBedService = TestBed.get(BackpackServiceProvider);
                componentService = fixture.debugElement.injector.get(BackpackServiceProvider);
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
        inject([BackpackServiceProvider], (injectService: BackpackServiceProvider) => {
            expect(injectService).toBe(testBedService);})
    );

    describe("ngOnInit function", () => {
        it("should call the 'setBackpack function at page init", () => {
            fixture.detectChanges();
            spyOn(component, 'ngOnInit');
            element = fixture.debugElement.query(By.css('button')).nativeElement;
            // element.click();
            expect(component.ngOnInit).toHaveBeenCalledTimes(1);
        });
    });

    describe("ionViewDidEnter function", () => {
        it("should subscribe to behavior subject 'current backpackcount' of backpack service", () => {
            fixture.detectChanges();
            spyOn(component, 'ionViewDidEnter');
            element = fixture.debugElement.query(By.css('button')).nativeElement;
            expect(component.ionViewDidEnter).toHaveBeenCalledTimes(1);
        });
        it("should retrieve a number of candy, or 0", () => {
            expect(totalCandy).toBeDefined();
        });
    });

    describe("setBackpack function", () => {
        it("should subscribe to behavior subject 'current backpack' of backpack service", () => {
            fixture.detectChanges();
            spyOn(component, 'setBackpack');
            element = fixture.debugElement.query(By.css('button')).nativeElement;
            expect(component.setBackpack).toHaveBeenCalledTimes(1);
        });
        it("should retrieve an array of candy, or empty array", () => {
            expect(collectedCandy).toBeDefined();
        });
    });
    describe("seeCandyInfos function", () => {
        it("should retrieve candy id as nav param", () => {
            expect(id).toBeDefined();
        });
        it("should navigate to candy's details page", () => {
            fixture.detectChanges();
            spyOn(component, 'seeCandyInfos');
            element = fixture.debugElement.query(By.css('button')).nativeElement;
            expect(component.seeCandyInfos).toHaveBeenCalledTimes(1);
            
        });
    });
});