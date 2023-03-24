class BangunDatar {
    constructor (name) {
        this.name = name;
    }
  
    intoduction(){
        console.log('*** Bangun Datar :', this.name, '***')
    }
    luas(){}
    keliling(){}
  }
  
  
  const SegiTiga = Base => class extends Base{
   
  } 
  
  class segiTiga extends SegiTiga(BangunDatar){
    constructor(name, alas, tinggi, sisi1, sisi2, sisi3){
        super(name);
        this.alas = alas;
        this.tinggi = tinggi;
        this.sisi1 = sisi1;
        this.sisi2 = sisi2;
        this.sisi3 = sisi3;
    }
  
    intoduction(){
        super.intoduction(); 
    }
  
    luas() {
        let Segitiga = this.alas * this.tinggi / 2;
        console.log(`Alas : ${this.alas}\nTinggi : ${this.tinggi}\nLuas = ${Segitiga}`
        );
    }
  
    keliling() {
        let Segitiga = this.sisi1 + this.sisi2 + this.sisi3;
        console.log(`Sisi1 : ${this.sisi1}\nSisi2 : ${this.sisi2}\nSisi3 : ${this.sisi3}\nKeliling = ${Segitiga}`
        );
    }
  }
  
  
  let luassegiTiga = new segiTiga('SegiTiga', 12, 13);
  console.log(" ");
  luassegiTiga.intoduction();
  luassegiTiga.luas();
  console.log(" ");
  let kelilingsegiTiga = new segiTiga('SegiTiga', 0, 0, 5, 12, 13);
  kelilingsegiTiga.keliling();

  class SegitigaSamaSisi extends SegiTiga(BangunDatar) {
    constructor(name, sisi) {
        super(name);
        this.sisi = sisi;
    }

    intoduction() {
        super.intoduction();
    }

    luas() {
        let tinggi = Math.sqrt(((this.sisi) ** 2) - ((1 / 2 * this.sisi) ** 2));
        let Segitigasamasisi = 1 / 2 * this.sisi * tinggi;
        console.log(
            `Alas : ${this.sisi}\nTinggi : ${tinggi}\nLuas = ${Segitigasamasisi}`
        );
    }

    keliling() {
        let Segitigasamasisi = 3 * this.sisi;
        console.log(
            `Sisi : ${this.sisi}\nKeliling = ${Segitigasamasisi}`
        );
    }
}

    let luasSegitigaSamaSisi = new SegitigaSamaSisi('Segitiga Sama Sisi', 10);
    console.log(" ");
    luasSegitigaSamaSisi.intoduction();
    luasSegitigaSamaSisi.luas();
    console.log(" ");
    let kelilingSegitigaSamaSisi = new SegitigaSamaSisi('Segitiga Sama Sisi', 10);
    kelilingSegitigaSamaSisi.keliling();


class SegitigaSamaKaki extends SegiTiga(BangunDatar) {
    constructor(name, alas, tinggi) {
        super(name);
        this.alas = alas;
        this.tinggi = tinggi;
    }

    intoduction() {
        super.intoduction();
    }

    luas() {
        let Segitigasamakaki = 1 / 2 * this.alas * this.tinggi;
        console.log(
            `Alas : ${this.alas}\nTinggi : ${this.tinggi}\nLuas = ${Segitigasamakaki}`
        );
    }

    keliling() {
        let sisimiring = Math.sqrt(((this.alas) ** 2) + ((this.tinggi) ** 2));
        let Segitigasamakaki = this.alas + this.tinggi + sisimiring;
        console.log(
            `Alas : ${this.alas}\nTinggi : ${this.tinggi}\nSisi Miring : ${sisimiring}\nKeliling = ${Segitigasamakaki}`
        );
    }
}

let luasSegitigaSamaKaki = new SegitigaSamaKaki('Segitiga Sama Kaki', 2, 3);
console.log(" ");
luasSegitigaSamaKaki.intoduction();
luasSegitigaSamaKaki.luas();
console.log(" ");
let kelilingSegitigaSamaKaki = new SegitigaSamaKaki('Segitiga Sama Kaki', 2, 3);
kelilingSegitigaSamaKaki.keliling();
  
  
  const SegiEmpat = Base => class extends Base{
  
  }
  
  class Persegi extends SegiEmpat(BangunDatar){
    constructor(name,sisi){
        super(name);
        this.sisi = sisi;
    }
  
    intoduction(){
        super.intoduction(); 
    }
  
    luas() {
        let Segiempat = this.sisi * this.sisi;
        console.log(
            `Sisi : ${this.sisi}\nLuas = ${Segiempat}`
        );
    }
  
    keliling() {
        let Segiempat = 4 * this.sisi;
        console.log(
            `Sisi : ${this.sisi}\nKeliling = ${Segiempat}`
        );
    }
  }
  
  let luasPersegi = new Persegi('Persegi', 8);
  console.log(" ");
  luasPersegi.intoduction();
  luasPersegi.luas();
  console.log(" ");
  let kelilingPersegi = new Persegi('Persegi',15);
  kelilingPersegi.keliling();
  
  class PersegiPanjang extends SegiEmpat(BangunDatar){
    constructor(name,panjang, lebar){
        super(name);
        this.panjang = panjang;
        this.lebar = lebar;
    }
  
    intoduction(){
        super.intoduction(); 
    }
  
    luas() {
        let Segiempat = this.panjang * this.lebar;
        console.log(`Panjang : ${this.panjang}\nLebar : ${this.lebar}\nLuas = ${Segiempat}`
        );
    }
  
    keliling() {
        let Segiempat = 2 * this.panjang + 2 * this.lebar;
        console.log(`Panjang : ${this.panjang}\nLebar : ${this.lebar}\nKeliling = ${Segiempat}`
        );
    }
  }
  
  
  let luaspersegiPanjang = new PersegiPanjang('Persegi Panjang', 10,5);
  console.log(" ");
  luaspersegiPanjang.intoduction();
  luaspersegiPanjang.luas();
  console.log(" ");
  let kelilingpersegiPanjang = new PersegiPanjang('Persegi Panjang',10,5);
  kelilingpersegiPanjang.keliling();
  
  
  class Lingkaran extends BangunDatar{
    constructor(name, phi, radius){
        super(name);
        this.phi = phi;
        this.radius = radius;
    }
  
    intoduction(){
        super.intoduction(); 
    }
  
    luas() {
        let Lingkaran = 2 * this.phi * this.radius**2;
        console.log(
            `phi : ${this.phi}\nRadius : ${this.radius}\nLuas = ${Lingkaran}`
        );
    }
  
    keliling() {
        let Lingkaran = 2 * this.phi * this.radius;
        console.log(
            `phi : ${this.phi}\nRadius : ${this.radius}\nKeliling = ${Lingkaran}`
        );
    }
  }
  
  let luasLingkaran = new Lingkaran('Lingkaran',3.14, 7);
  console.log(" ");
  luasLingkaran.intoduction();
  luasLingkaran.luas();
  console.log(" ");
  let kelilingLingkaran = new Lingkaran('Lingkaran',3.14, 7);
  kelilingLingkaran.keliling();
  