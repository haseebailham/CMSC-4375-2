import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class Service {
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

  deleteUser(data) {
    return this.database
      .collection('users')
      .doc(data.payload.doc.id)
      .delete();
  }

  getUsers() {
    return this.database.collection('users').snapshotChanges();
  }

  getLocationByName(locName) {
    return this.database.collection('location', ref => ref.where('nameToSearch', '>=', locName)
      .where('nameToSearch', '<=', locName + '\uf8ff'))
      .snapshotChanges();
  }

  getLocations() {
    return this.database.collection('location').snapshotChanges();
  }

  // searchUsers(searchValue){
  //   return this.database.collection('users',ref => ref.where('nameToSearch', '>=', searchValue)
  //     .where('nameToSearch', '<=', searchValue + '\uf8ff'))
  //     .snapshotChanges()
  // }

  // searchUsersByAge(value){
  //   return this.db.collection('users',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  // }

  getImageLink(locationID) {
    return this.database.collection('images').doc(locationID).snapshotChanges();
  }

  createUser(value) {
    return this.database.collection('users').add({
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email
    });
  }

  createComments(commentValue) {
    return this.database.collection('comments').add({
      firstName: commentValue.firstName,
      lastName: commentValue.lastName,
      comments: commentValue.comments
    });
  }

  getAllComments() {
    return this.database.collection('comments').snapshotChanges();
  }
}
