

### CANDY CHASE 2020
* * * * *

Hybrid mobile app developed with Ionic 3 / Angular / Firebase

Using OPEN FOOD FACTS API ( open database licence )

Vectors from Vecteezy.com 

![alt text](./src/assets/imgs/candyChase_screen_welcome.jpg)


#### Prérequis
* [NodeJS](https://nodejs.org/)
* [Ionic 3](ionicframework.com/)

#### Installation

```bash
git clone  https://github.com/GitHubAgneska/CandyChase2020.git
cd candyChase2020
npm i
```

#### Launch

`ionic s`



### Current issues / Improvements to come  - 'TO DO'  - 07/02/2020
----------------------------------------------------------------

#### Logic/data

##### must have
 
- Map : new bug feb 2020 after system updates : geoloc not accurate anymore under chrome / accureate but marker does not show under firefox 

- Map by age range implem => pass distance from 'age select' component to 'map'    component that calls 'load map' method ( distance passed is currently static )

- 'candyService' => REMAP data results to leverage performances ?
    on fetching candy list / => implem of a Sharereplay operator that inits as app opens
    or implement 'skeleton screen'

- add function remove candy from backpack

- Routing / tabs 

---

- Improve 'level' page with collection of cards

- + Feature : save addresses

- + Feature : implement challenges ( 'trick or treat') & bonuses - every x points

- Modify points amount depending on candy type, so 
    total points ≠ total candy

- Implement FireBase  (authentication + light backend => save user & user data )


##### nice to have

- candy data results =>  'productName' should not contain 'bonbons' or 'brand' (filter data passed to template)

- + Feature : Add sorting to Candy List
- Make app PWA so no need for connection


#### Layout

- Improve general responsive (IphoneX issues currently)
- Implement custom icons in tabs 
- Add content to 'about', 'rules', 'legal' pages
- Refactor scss to mutualize elements properties & 
    implement sass system

---
##### current project/ system/ environment infos

``` ionic info````
``` npm outdated ```
``` npm list -g ```
``` npm list ```
``` npm list -g --depth 0 ```

---
---


---
##### npm issues 

- npm ERR! Cannot read property 'match' of undefined 

- gyp ERR! configure error 
    gyp ERR! stack Error: `gyp` failed with exit code: 1
    gyp ERR! stack     at ChildProcess.onCpExit (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:345:16)
    gyp ERR! stack     at ChildProcess.emit (events.js:189:13)
    gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:248:12)
    gyp ERR! System Darwin 18.2.0
    gyp ERR! command "/usr/local/bin/node" "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
    gyp ERR! cwd /Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/node_modules/watchpack/node_modules/fsevents
    gyp ERR! node -v v10.15.1
    gyp ERR! node-gyp -v v3.8.0
    gyp ERR! not ok 


=> 

> fsevents@1.2.11 install /Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/node_modules/fsevents
> node-gyp rebuild

---

+ typescript@2.4.2
updated 1 package in 5.585s

```
rm -rf node_modules
rm package-lock.json
npm cache clear --force

---
npm i
--
npm i --package-lock-only


```
### SYSTEM UPDATES 19032020 ( following npm issues that prevent the project to launch )
--------------------------

- macOS Catalina

- update NodeJS => nodeJs 12 downloaded + installed manually  + update latest npm

[ NVM - SOLUTION NOT USED : ]   

            "Node Version Manager, or nvm, is far and away the best method to updating Node"
            https://medium.com/stackfame/how-to-update-node-js-to-latest-version-linux-ubuntu-osx-windows-others-105749e90040
            https://github.com/nvm-sh/nvm/blob/master/README.md

            1. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash


                => You currently have modules installed globally with `npm`. These will no
                => longer be linked to the active version of Node when you install a new node
                => with `nvm`; and they may (depending on how you construct your `$PATH`)
                => override the binaries of modules installed with `nvm`:

                /usr/local/lib
                ├── @angular/cli@8.0.6
                ├── @compodoc/compodoc@1.1.9
                ├── @vue/cli@3.2.1
                ├── angular-cli-ghpages@0.5.3
                ├── browserify@16.2.3
                ├── cordova@8.1.2
                ├── firebase-tools@7.12.1
                ├── generator-code@1.1.38
                ├── install@0.12.2
                ├── ionic@5.4.6
                ├── javascripting@2.6.1
                ├── json-server@0.14.2
                ├── protractor@5.4.1
                ├── remove-node-modules@1.7.4
                ├── ts-node@7.0.1
                ├── tslint@5.18.0
                ├── typescript@2.9.2
                ├── v3@0.0.0
                ├── vue@2.5.21
                ├── wcs-checkpoints-quiz@1.0.3
                ├── webpack@4.27.1
                └── yo@2.0.5
                => If you wish to uninstall them at a later point (or re-install them under your
                => `nvm` Nodes), you can remove them from the system Node as follows:

                    $ nvm use system
                    $ npm uninstall -g a_module


- xcode-select --install (was partly missing => required for brew )

- brew upgrade (homebrew) 
- brew doctor  / brew cleanup (removes old versions of software installed - run automatically on brew upgrade )


        [ ......................................................................................
            ZSH CLI COMMANDS - (default shell in catalina)
            - `zsh >  history 0` 
            - make default shell : 
            `chsh -s $(which zsh)`  --> change to bash : `chsh -s $(which bash)`

            - zsh configs: `open .zshrc`
        ...................................................................................... ]


simlink brew dependencies 
‘Error: Could not symlink include/node/common.gypi’ :

        `sudo chown -R $(whoami) /usr/local/*`
        +
        `rm '/usr/local/include/node/config.gypi'`
        +
        `brew link --overwrite node`

........... 

- geoloc err
 https://forum.ionicframework.com/t/geolocation-getcurrentposition-issue/154747

 ..............

 =============== updated package.json 20032020 =============
                    {
                    "name": "candychase",
                    "version": "0.0.1",
                    "author": "Ionic Framework",
                    "homepage": "http://ionicframework.com/",
                    "private": true,
                    "scripts": {
                        "start": "ionic-app-scripts serve",
                        "clean": "ionic-app-scripts clean",
                        "build": "ionic-app-scripts build",
                        "lint": "ionic-app-scripts lint"
                    },
                    "dependencies": {
                        "@agm/core": "^1.1.0",
                        "@angular/animations": "^5.2.11",
                        "@angular/common": "^5.2.11",
                        "@angular/compiler": "5.2.11",
                        "@angular/compiler-cli": "^9.0.7",
                        "@angular/core": "5.2.11",
                        "@angular/forms": "5.2.11",
                        "@angular/http": "^5.0.0",
                        "@angular/platform-browser": "5.2.11",
                        "@angular/platform-browser-dynamic": "5.2.11",
                        "@ionic-native/core": "4.20.0",
                        "@ionic-native/diagnostic": "^5.22.0",
                        "@ionic-native/geolocation": "^4.20.0",
                        "@ionic-native/splash-screen": "4.20.0",
                        "@ionic-native/status-bar": "4.20.0",
                        "@ionic/storage": "2.2.0",
                        "android-versions": "^1.5.0",
                        "cordova-android": "^8.1.0",
                        "cordova-plugin-device": "^2.0.3",
                        "cordova-plugin-geolocation": "^4.0.2",
                        "cordova-plugin-ionic-webview": "^4.1.3",
                        "cordova-plugin-splashscreen": "^5.0.3",
                        "cordova-plugin-whitelist": "^1.3.4",
                        "cordova.plugins.diagnostic": "^5.0.1",
                        "ionic-angular": "3.9.9",
                        "ionic-plugin-keyboard": "^2.2.1",
                        "ionicons": "3.0.0",
                        "leaflet": "^1.6.0",
                        "node-sass": "^4.13.1",
                        "rxjs": "5.5.11",
                        "sw-toolbox": "3.6.0",
                        "ws": "^7.2.3",
                        "zone.js": "0.8.29"
                    },
                    "devDependencies": {
                        "@ionic/app-scripts": "3.2.4",
                        "typescript": "2.6.2",
                        "webpack-cli": "^3.3.11"
                    },
                    "description": "An Ionic project",
                    "cordova": {
                        "plugins": {
                        "ionic-plugin-keyboard": {},
                        "cordova-plugin-whitelist": {},
                        "cordova-plugin-device": {},
                        "cordova-plugin-splashscreen": {},
                        "cordova-plugin-ionic-webview": {},
                        "cordova-plugin-geolocation": {
                            "GEOLOCATION_USAGE_DESCRIPTION": "To locate you"
                        },
                        "cordova.plugins.diagnostic": {}
                        },
                        "platforms": [
                        "android",
                        "desktop",
                        "ios",
                        "iphone",
                        "mobile"
                        ]
                    }
                    }
===============================================

runtime err can't resolve all parameters for service => check service params if used or not
( upgrade to "@angular/compiler-cli": "^9.0.7" : more picky apparently)
ex: 

   `constructor(private httpService: Http, private candyService: CandyService) { }`


........... 

24032020
Most of the app is working, but 

geoloc correct under firefox but marker not showing, 
incorrect under chrome, but marker showing 

........... 

+ game feature

npm install phaser@3.22.0

...........


UNIT TESTING 

npm i jest
npm i @types/jest 
npm i ts-jest

-- adding a 'tsconfig.spec.json'
-- adding a 'jest.config.js' but removed atm (errors)

    ``` module.exports = {
        preset: 'jest-preset-angular',
        roots: ['src'],
        transform: {
            '^.+\\.(ts|js|html)$': 'ts-jest',
        },
        setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
        moduleNameMapper: {
            '@app/(.*)': '<rootDir>/src/app/$1',
            '@assets/(.*)': '<rootDir>/src/assets/$1',
            '@core/(.*)': '<rootDir>/src/app/core/$1',
            '@env': '<rootDir>/src/environments/environment',
            '@src/(.*)': '<rootDir>/src/src/$1',
            '@state/(.*)': '<rootDir>/src/app/state/$1'
        },
        transformIgnorePatterns: [
            '/node_modules/(?!@ionic|ngx-socket-io/).+\\.js$'
        ]
        };
    ```

=> tests start running but stop : error 'Test suite failed to run' : 'SyntaxError Unexpected token, expected ";" ' on variable declarations 'let component: AgeSelectPage'

==> could not find out so switching to jasmine/karma + babel / webpack

====
npm install karma --save-dev
npm install karma-jasmine jasmine-core karma-chrome-launcher karma-firefox-launcher --save-dev

launch : npx karma start karma.conf.js --log-level debug --single-run

=> launch — --single-run => closes chrome & firefox otherwise, 
Continuous Integration mode. If true , Karma will start and capture all configured browsers,
run tests and then exit with an exit code of 0 or 1 depending on whether all tests passed or any tests failed.

'WARN [middleware:karma]:Invalid file type (ts), defaulting to js.'

...........

+ npm i @types/jasminewd2
npm i @types/node --save-dev

npm i @types/node --save-dev
npm i karma-jasmine-html-reporter --save-dev

Under the hood Karma uses ts-node to transpile TypeScript to JavaScript :
npm i ts-node --save-dev


npm i karma-coverage-istanbul-reporter --save-dev


---
generate an initial configuration file  => karma init
npx jasmine init


official jasmine config doc : https://jasmine.github.io/setup/nodejs.html
+
ionic example with testing 
https://github.com/ionic-team/ionic-unit-testing-example => npm = loads of errors..

---
