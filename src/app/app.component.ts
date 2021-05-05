import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  secondes: number;

  constructor() {
  }

  ngOnInit(): void {
    // Création de notre Observable
    const counter = interval(1000);

    // Souscription à notre Observable
    counter.subscribe(
      // Se déclenche à chaque émission de l'observable
      (value) => {
        this.secondes = value;
      },
      // Gestion des erreurs éventuelles
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      // Déclenchement si l'observable s'achève
      () => {
        console.log('Observable complete!');
      }
    );
  }


}
