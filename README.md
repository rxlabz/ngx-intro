# Introduction à Angular2

## Modern JS

### ES5 => ES2015/ ES2016/ ES2017 / ...

- classes

```javascript
class User{
    
    get mail(){
        return this._mail;
    }
    
    set mail( value ){
        return this._mail;
    }

    constructor(firstName, lastName, mail){
        this.firstName = firstName; 
        this.lastName = lastName; 
        this._mail = mail; 
    }
}
```
cf. [:memo: les classes](http://putaindecode.io/fr/articles/js/es2015/classes/)

- string interpolation

```javascript
let prenom = "Jack";
let salutation = `Salut ${prenom}!`; 
```
cf. [string templates](http://putaindecode.io/fr/articles/js/es2015/template-strings/)

+ [var, let et const](http://putaindecode.io/fr/articles/js/es2015/const-let-var/)
+ [les fonctions fléchées](http://putaindecode.io/fr/articles/js/es2015/arrow-functions/)
+ [paramètres rest et opérateur spread](http://putaindecode.io/fr/articles/js/es2015/rest-spread/) 
+ [nouvelles méthodes d'array](http://putaindecode.io/fr/articles/js/es2015/array-methods-addition/)
+ [objet literals](http://putaindecode.io/fr/articles/js/es2015/object-literals/)
- modules
- ...

### Lectures

- [Putain de code](http://putaindecode.io/) » articles :fr: sur es6
- [ES6 Essentials :us:](http://www.2ality.com/2015/08/getting-started-es6.html)

### Outils

- node / npm : Node Package Manager 
=> [intro](http://maxlab.fr/javascript/comprendre-et-maitriser-npm-introduction/)

```bash
npm init # ajouter -y pour skip le paramètrage

npm install --save underscore # ou npm i -S underscore
npm install --save-dev babel-cli babel-preset-es2015 # ou npm i -D babel-cli
echo '{ "presets": ["es2015"] }' > .babelrc
```
 
- [babelJS](https://babeljs.io)
  - [babel CLI](https://babeljs.io/docs/usage/cli/)

```bash
babel script.es --out-file script.js --watch # ou babel script.es -o script.js -w
```
  
  - [plugins](https://babeljs.io/docs/plugins/) : ES2015/2016/2017/React...

- [Webpack : module bundler](https://webpack.js.org/)

```js

module.exports = {
  entry: './src/user.js',
  output: {
    filename: 'bundle.js'
  }
};
```

=> [Exemple](https://github.com/rxlabz/ngx-intro/tree/master/es6-wbpk)


## [Typescript](https://www.typescriptlang.org)

- typage, classes, interfaces, ...

- [Playground](http://www.typescriptlang.org/play/index.html)

- [Basic types](http://www.typescriptlang.org/docs/handbook/basic-types.html)
- [var declarations](http://www.typescriptlang.org/docs/handbook/variable-declarations.html)
- [Interfaces](http://www.typescriptlang.org/docs/handbook/interfaces.html)
- [Classes](http://www.typescriptlang.org/docs/handbook/classes.html)
- [Fonctions](http://www.typescriptlang.org/docs/handbook/functions.html)

=> :tv: [ Typescript 2016 : what's new](https://www.youtube.com/watch?v=6wEVu_mkJjM)

## Installation

```bash
npm install -g typescript
```

### Usage

Dans le dossier du projet :

```bash
# génération du fichier tsconfig.json
tsc --init

# compilation
tsc fichier.ts

# compilation avec watcher 
tsc -w fichier.ts
```

### [Typings](https://github.com/typings/typings) : typescript definition manager

```bash

npm -y init

# npm i -S ...
npm i -D @types/es6-promise
# npm i -D ...

tsc --init

typings search --name libname
typings install dt~libname --global --save

```

## Angular(2+)

### Principes

- arbre de composants

![component_tree](https://simplyon2.github.io/support/img/ng_component_tree.jpg)

Chaque composant est une classe TS, marquée de l'annotation @Component().

Chaque composant est constitué :
- de la classe,
- d'un template html intégré dans le fichier TS ou dans un fichier HTML distinct
- et éventuellement d'une ou des feuilles de styles.

L'annotation @Component permet de configurer ces aspects :

- selector : nom du tag personnalisé
- template ou templaterl pour définir le contenu visuel du composant
- style ou styleUrls

Par exemple : 

![component_tree2](https://simplyon2.github.io/support/img/component_tree_demo.jpg)

### Tooling
 
- [configuration manuelle]() : tsc, typings, systemJS... [exemple](https://plnkr.co/edit/xAmFhH2fiuqj5OFCaQmw?p=preview)

- ou **[angular-cli](http://cli.angular.io)**

```bash
ng new ng-demo
```

### Structure d'un projet

- src/
  - app : composants, classes et services de l'application
  - environments : variable d'environnements pour configuration de la compilation
  - index.html, main.ts, tsconfig.json...
- les configs : / package.json, angular-cli.json, [karma.conf.js](http://karma-runner.github.io/1.0/index.html),
[tslint.json](https://palantir.github.io/tslint/), [protractor.conf.js](https://github.com/angular/protractor)


### App.module

```typescript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  providers:    [ AppModel ]
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

### Définition d'un composant

#### app.component

```typescript
@Component({
  selector:    'topbar',
  templateUrl: 'topbar.component.html',
  directives : [ AutreComposantNecessaire ],
  providers:  [ LoginService ]
})
export class HeroListComponent implements OnInit {
/* . . . */
}
```

```typescript
@Component({
  selector:    'topbar',
  template: `<header>
  <h1>Une app</h1>
  <span> Bienvenue {{user}}</span>
</header>`,
  providers:  [ LoginService ]
})
export class HeroListComponent implements OnInit {
    
    currentUser:User;
}
```

### [Expressions de templates](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#template-expressions)

- **innerText**

```
<h1>{{title}}</h1>
```

- **attribut** 

```
<img [attr.src]="user.avatar"
```

  - styles `[style.color]="#f00"`
  - classes `[class.selected]="isSelected"`
- **directives** `*ngIf`, `*ngFor`

### [Communication entre composants]()

- parent / enfant
  - `@Input()`

- enfant / parent
  - `@Output`
  - intro aux [observables]()
  
=> [Exemple](https://github.com/rxlabz/ng2_compocom)
  
- composants sans liaison directe
  - services

#### Annexes

- [Learn RX](http://github.com/jhusain/learnrxjava/) 
- [Rx](http://reactivex.io/intro.html)
- [RxJs](https://github.com/ReactiveX/rxjs)

### Injection de dépendances

Le principe / design pattern d'injection de dépendances invite à déléguer la création des dépendances d'une classe.

Si la classe A doit utiliser la classe B ce n'est pas à elle de l'instancier, elle doit lui être fourni.

La DI permet entre autre de simplifier la rédaction de test unitaires, en simplifiant notamment l'utilisation de mocks.
 
Angular offre plusieurs options pour injecter 

### Forms

- [template based](https://angular.io/docs/ts/latest/guide/forms.html)
- [reactive forms](https://toddmotto.com/angular-2-forms-reactive)
- [dynamic forms](https://angular.io/docs/ts/latest/cookbook/dynamic-form.html)
- [Form validation](https://angular.io/docs/ts/latest/cookbook/form-validation.html)

### Communication client-server

- [Http et observables]()

### Router

- routes simples
- routes enfants
- routes auxiliaires

### [Material design](http://material.angular.io)

### Animation

### Mobile

- PWA : progressive web app
- Ionic 2
- Nativescript

### Avancé

- SSR : Server Side rendering
