module.exports = class Garaza {
  constructor (ime, velicina, lokacija, automatic) {
    this.ime = ime 
    this.velicina = velicina;
    this.lokacija = lokacija;
    this.automatic = automatic;
    this.predmetiUGarazi = [];
  }

  ispisPredmeta () {
    let naziviIVrijednosti = [];
    for (let i = 0; i < this.predmetiUGarazi.length; i++) {
      naziviIVrijednosti.push(` ${this.predmetiUGarazi[i].naziv} sa vrijednosti ${this.predmetiUGarazi[i].vrijednost}`)
    }
    return naziviIVrijednosti;
}
}