

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

- Map by age range implem => pass distance from 'age select' component to 'map'    component that calls 'load map' method ( distance passed is currently static )

- 'candyService' => REMAP data results to leverage performances 
    on fetching candy list / => implem of a Sharereplay operator that inits as app opens

- Change type of data fetched in 'candy details' or displaying ( nutriscore data )

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


