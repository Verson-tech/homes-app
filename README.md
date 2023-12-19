`ng generate component Home --standalone --inline-template`

`ng generate component HousingLocation --standalone --inline-template`

  | File tree                      |           Description                                     |
  |--------------------------------|-----------------------------------------------------------|
  | src/app/app.component.ts       | This is the `root` component of this app and the first to 
  |                                | be loaded. This file is the app component that is used in    |                                | the index.html file.                                      
  | src/app/home/home.component.ts | This file is the home component that will be used in the 
                                   | app.component.ts file the home component is the `main` 
                                   | component of the app and is the parent component of the 
                                   | housing-location component. |
  | src/app/housing-location/housing-location.component.ts | Is used in the home.component.ts 
                                   |and is is the child component of the home component. |

