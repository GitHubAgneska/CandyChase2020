

### CANDY CHASE 2020
* * * * *

> Hybrid mobile app developed with Ionic3

> Using OPEN FOOD FACTS API ( open database licence )

> & vectors from Vecteezy.com 

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



### Current issues / Improvements to come -- 'TO DO'  - 07/02/2020
----------------------------------------------------------------

#### Logic/data

##### must have

- 'candyService' => REMAP data results to leverage performances
- Implement map by age 
- Improve 'level' page with collection of cards
- + Feature : save addresses
- + Feature : implement challenges ( 'trick or treat') & bonuses - every x points


- Configure FireBase authentication + light backend => save user & user data 

##### nice to have

- candy data results =>  'productName' should not contain 'bonbons' or 'brand' (filter data passed to template)
- Modify points amount depending on candy type
- + Feature : Add sorting to Candy List
- Make app PWA so no need for connection


#### Layout

- Improve general responsive
- Implement custom icons in tabs 
- Add content to 'about', 'rules', 'legal' pages
- Refactor scss to mutualize elements properties


