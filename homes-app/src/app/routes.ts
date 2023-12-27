import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

const routeConfig: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Home Page",
  },
  {
    path: "details/:id",
    //this path navigates to the details component
    //the :id is a parameter that is passed to the details component
    //the id is used to get the details of the selected item
    //the id comes from the home component where the user selects an item from the list of items displayed on the home page component template file in the form of a link to the details component
    component: DetailsComponent,
    title: "Details Page",
  },
];

export default routeConfig;
