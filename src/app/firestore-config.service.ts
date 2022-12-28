import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirestoreConfigService extends AngularFirestore{

  // constructor() { }


  
}

export function AngularFirestoreProject1(platformId: Object, zone: NgZone) {
  return new AngularFirestore(environment.firebaseConfig, 'firebaseProject1', false, null, platformId, zone, null);
}

export function AngularFirestoreProject2(platformId: Object, zone: NgZone) {
  return new AngularFirestore(environment.firebaseConfig2, 'firebaseProject2', false, null, platformId, zone, null);
}
