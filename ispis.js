module.exports = class Ispis{
  constructor(store) {
    this._store = store;
  }

  get store(){
    return this._store
  }

  ispisivanje() {
    this.store.garaze.forEach(garaza => {
      console.log(`${garaza.ime}. garaža se nalazi na lokaciji "${garaza.lokacija}" njezina veličina
       je "${garaza.velicina}" i ${garaza.automatic} posjeduje automatska vrata. Garaža sadrži
        ${JSON.stringify(garaza.predmetiUGarazi)} predmete`)
    })
  }
}