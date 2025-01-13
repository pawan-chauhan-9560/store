import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MaterialModule } from "../../material.module";


@Component({
  selector: "app-header",
  standalone: true, // Mark the component as standalone
  imports: [
    CommonModule,MaterialModule
  ],
  templateUrl: `./header.component.html`,
})
export class HeaderComponent {}
