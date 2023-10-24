1-What is NPM?
Ans - people take it for Node package manager , but it's not that.It has no full form, it manages packages behind the scene 
------------------------------------

2-what is 'parcel/WebPack'?
ans- parcel and webpack are popular bundlers.webpack offers high level of configurations and we can make bundling process acc to ourself.is used in complexer projects whereas parcel we donot have to worry about configuring everything 
------------------------------

3-what is 'parcel-cache'?
ans- it is a temporary folder created by parcel and it stores a cache and helps in faster reloading of the page and make better experience
--------------------------------

4-what is npx?
ans- npx means executing a package , npm is used to install the package/ dependency. (npm i == npm install)
---------------------

5-what is difference between 'dependencies'and 'devDependencies?
ans - we have many things project is depended on that are called dependicies, there are 2 types of dependencies , devDependicies and Dependencies , DevDependencies are required depend. in Development phase and dependecnies are required to have it in Production phase etc
-------------------------------

6-what is Tree Shaking?
ans- Tree shaking algorithm. removes unused code , say there are many functions but only 2,4 functions are being used so the tree shaking algo will use only those functions
---------------------------

7-Hot module Replacement?
ans- updating the files / modules in the browser in realtime automatically without refreshing the whole page.If there is a small change only that change will be made app's state can be retained.
----------------------------------

8-5 superpowers of Parcel and describe any 3
ans- -dev build
-Local Server
-HMR = hot module replacement
-file watching algorithm.(written in c++)= enabling the parcel to keep track of anhy change in the files 
-gives faster builds by using s=and saving caching things up
--------------------------------------

9- what is .gitignore?
ans-This file is used to prevent the files (which are written in file )while pushing it to the repository .
-------------------------------------------

10-difference in'package.json'& 'package-lock.json'
ans-package.json is kind of configuration of npm and is used to keep track of the version of the package installed in the system . if we use carat(^) in version of package then in case of any minor upgrade it will be update to the minor version for example .*(version :'2.3.4 -> 2.3.5'  etc), it keeps aproxx kind of the version of dependencies
package-lock.json - is used to keep the track the exact version which is being installed in the system. it keeps the record of exact version of that package/dependencies
--
there is "integrity" which is a sha 256 hash which is used to verify that the whatever version or anything (in dependency) is in local machine it will also be on the production code , ensuring there is not any error while running code in production .
--transitive dependencies = one dependecy may have one or maybe more than one dependencies for working , that is what we call transitive dependencies, say parcel here  is dpendency of our project but parcel has also diffrent dependencies.parcel needs babel so npm will also install babel library.
-----------------------------------------------

11-why not to modify'package-lock.json'
ans-it is used to lock the version of the dependency in dependency tree and enables us to try newer versions and if anything goes wrong then we can change / revert back to older version by looking at the lock file
----------------------------------------------------

12-what is 'dist' folder
ans-this is a temp follder like 'parcel-cache'. it is the file which actually do all the things like tree shaking minification caching optimisation bundling etc. it contains all the files bundleld by PARCELs. it conatains production-ready files.
----------------------------------------------------

13-what is 'browserlist'? abt. vite, webpack, parcel
ans- browserlist is configured in package.json file and we can specify the browser supported in the package.json and it ensures that that product will definatly run on the mentioned browsers.
---------------------------------------------------

14-^.caret and Tilda
ans- carat upgrades the package to newer version, if it was tailda then it would install the major version and carat is better since it upgrades to the minor version and major version updagrade may cause alot of problems 
----------------------------------------------------

15-Script types in html
ans-


============================
/// if i have my package.json files we can have node modules and we know what version is installed and node_modules can be recreated.

================================

#parcel 
what does it do/offer
-dev build
-Local Server
-HMR = hot module replacement
-file watching algorithm.(written in c++)= enabling the parcel to keep track of anhy change in the files 
-gives faster builds by using s=and saving caching things up
-Image optimization.
-mini-fication of file at production , by bundling the files and optimising files 
-compressing 
-code splitting
-diffrential bundling - support of older browser.
-consisting hashing
-diagnostics - better error suggestions
-hosting in HTTPS
-diffrent prod and dev builds
===============================
entry point in package.json should be removed to avoid conflicts in between parcel and package.json file 