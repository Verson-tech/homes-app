`ng generate component Home --standalone --inline-template`

`ng generate component HousingLocation --standalone --inline-template`

  | File tree                      |           Description                                     |
  |--------------------------------|-----------------------------------------------------------|
  | src/app/app.component.ts       | This is the `root` component of this app and the first to <br>
                                  be loaded. This file is the app component that is used in    <br>                                                            the index.html file. <br>                                     
  | src/app/home/home.component.ts | This file is the home component that will be used in the <br>
  |                                | app.component.ts file the home component is the `main` <br>
  |                                | component of the app and is the parent component of the <br>
  |                                | housing-location component. <br>
  | src/app/housing-location       | Is used in the home.component.ts and is is the child <br>
  | /housing-location.component.ts | component of the home component.    <br>                             
 |-----------|------------------------------|

