module.exports = class Garaza {
  constructor (ime, velicina, lokacija, automatic) {
    this.ime = ime 
    this.velicina = velicina;
    this.lokacija = lokacija;
    this.automatic = automatic;
    this.predmetiUGarazi = [];
  }
}