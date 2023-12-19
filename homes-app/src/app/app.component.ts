import { Component } from "@angular/core";
import { HomeComponent } from "./home/home.component";
//      THis file is the app component that will be used in the index.html file
//      The app component is the parent component of the home component
//      The app component is the child component of the index.html file
//      The app component is the main component of the app
// the root component is the app component
@Component({
  standalone: true,
  selector: "app-root",
  template: `
    <main>
      <header class="brand-name">
        <img
          class="brand-logo"
          src="/assets/logo.svg"
          alt="logo"
          aria-hidden="true"
        />
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ["./app.component.css"],
  imports: [HomeComponent],
})
export class AppComponent {
  title = "homes";
}
