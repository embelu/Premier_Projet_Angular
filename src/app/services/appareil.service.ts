import { AppareilModel } from './../models/appareil.model';
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable()
export class AppareilService {

  appareilsSubject = new Subject<AppareilModel[]>();

  private appareils: AppareilModel[] = [];

  constructor(private httpClient: HttpClient) {
    this.getAllAppareil();
  }

  /*private appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    }];*/

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    console.log('Dans switchOnAll');
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
    console.log('Dans switchoffAll');
    this.emitAppareilSubject();
  }

  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
    this.emitAppareilSubject();
  }

  switchOffOne(i: number) {
    this.appareils[i].status = 'éteint';
    this.emitAppareilSubject();
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

  addAppareil(name: string, status: string) {
    //const appareilObject = {
    //  id: 0,
    //  name: '',
    //  status: ''
    //};
    //appareilObject.name = name;
    //appareilObject.status = status;
    //appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    //this.appareils.push(appareilObject);

    const appareilModel: AppareilModel = {
      id: this.appareils[(this.appareils.length - 1)].id + 1,
      name: name,
      status: status
    }

    this.postAppareil(appareilModel);
    this.appareils.push(appareilModel)


    this.emitAppareilSubject();
  }

  getAllAppareil() {
    this.httpClient
      .get<AppareilModel[]>('https://localhost:44318/api/Appareil')
      .subscribe(
        (response) => {
          console.log(response);
          this.appareils = response;
          this.emitAppareilSubject();
          console.log("toto");
          console.log(this.appareils);
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  postAppareil(AppareilModel: AppareilModel) {
    this.httpClient
      .post<AppareilModel[]>('https://localhost:44318/api/Appareil', AppareilModel)
      .subscribe(
        (response) => {
          console.log('Appareil insert ok');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
