//store će sadržavati sve objekte garaža u jednoj listi
//user navede broj garaža i onda ja popunim tu listu sa objektima garaža i svakoj dam ime po broju

module.exports = class Store {
  constructor() {
    this._brojGaraza = 0;
    this._garaze = [];
    this._brojPredmeta = 0;
    this._predmeti = [];
  }
  get brojGaraza() {
    return this._brojGaraza
  }
  set brojGaraza(userInputBroj) {
    this._brojGaraza = userInputBroj;
  }
  get garaze() {
    return this._garaze;
  }
  // set garaze(newGaraza) {
  //   this._garaze = newGaraza
  // }
  get brojPredmeta() {
    return this._brojPredmeta
  }
  set brojPredmeta(newNum) {
    this._brojPredmeta = newNum
  }
  get predmeti () {
    return this._predmeti
  }
}