import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  private value: any;

  constructor(public database: AngularFirestore) {
  }


  getUser(userId) {
    return this.database.collection('users').doc(userId).snapshotChanges();
  }

  // updateUser(userId){
  //   value.nameToSearch = this.value.name.toLowerCase();
  //   return this.database.collection('users').doc(userId).set(value);
  // }

  deleteUser(userId) {
    return this.database.collection('users').doc(userId).delete();
  }

  getUsers() {
    return this.database.collection('users').snapshotChanges();
  }

  // searchUsers(searchValue){
  //   return this.database.collection('users',ref => ref.where('nameToSearch', '>=', searchValue)
  //     .where('nameToSearch', '<=', searchValue + '\uf8ff'))
  //     .snapshotChanges()
  // }

  // searchUsersByAge(value){
  //   return this.db.collection('users',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  // }


  createUser(value) {
    return this.database.collection('users').add({
      name: value.name,
      surname: value.surname,
      age: parseInt(value.age),
    });
  }

}
