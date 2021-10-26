# Overview
HubSpot Assessment in Angular 8, HTML, SCSS. 
Component-based architecture is used in this project, as this using approach has advantages such as - reusability, readability maintainability.

# Directory Strucrure
![image](https://user-images.githubusercontent.com/82678139/138923824-4cfdc8b8-b392-447c-97dc-11d2fc82ab92.png)

Folder structure consist of two main modules - App and Shahisred Module.
App module consists of Services, Component and Pipe, whereas Shared Module consist of a resusable component names as multi-select-dropdown.



## Submission Notes
* All the given exercises with bonus are completed in this project.
* Angular verison 8 is used with HTML5 and SCSS. 
* Website is responsive and code is reusable, cleand and DRY.
* As no third party libraries were used, I developed a reusable multi select dropdown component which can be used in any component.

## Exercise - 1
Given DOM structure has been slightly modified, as I created a seperate component for Exercise 1. HTML5 with SCSS is used for this task. CSS variables file has been created, which contains all the variables required in the project. Variables such as background color, border color are maintained in this file.

## Exercise - 2
* Exercise 2 component is created.
* API is created in main service which is integrated in Exercise 2 component.
* API is created using this given endpoint https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise/main/src/js/data/data.json.
* All the given requirements from displaying data to filter is done. For two dropdowns of Genre and Years, I created a resuable component, whereas for fuzzy search is used for searching the items.
* Used modern ES6 functions.
* Code is clean, reusable and optimized.
* Design is responsive to some endpoint.
* For neater code, prettier code formatter is used as it helps reader to understand the gross structure of the code in a glance.

## Given more time, what would you have done differently?
As in given time, I was able to complete all the requirements, but though if given more time I could have made design more responsive and focus more on the UI.
Also, I could have added 'NO DATA TO DISPLAY' block below the filter block if data is not rendered or may be if correct filers are not selected.

## How did you deviate from the directions, if at all, and why?
* Multi select dropdown - As HTML tags of select and option are not enough for multi select dropdown with checkboxes. So, that's why I created a seperate component which can be used as a HTML tag and work in a similar way. Creating reusable component was challenging as two different data was been loaded on a component synchronously. So, used observable from rxJS to send current data.
* Multiple filters - It took lot of time as different filters were applied on one data. To solve this issue I have created a single function named applyFilter() which filters the data and returns. Previously instead of this function many IF-ELSE conditions were added, but I was not satified as code was not optimized. To overcome this issue, I used filters which replaced many IF-ELSE conditons of about 50 lines to 6 lines.

## Is there anything else you'd like to let us know?
