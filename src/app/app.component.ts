import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Subscription } from "rxjs";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  secondes: number;
  counterSubscription: Subscription;

  constructor() {
  }


  ngOnInit(): void {
    // Création de notre Observable
    const counter = interval(1000);

    // Souscription à notre Observable
    this.counterSubscription = counter.subscribe(
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

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }


}
