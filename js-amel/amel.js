// Mendeklarasikan Variabel
let animal;
console.log(animal);

// Tipe Data JavaScript
let namaSaya = "Tipe String";
let umurSaya = 16;

// Operator Aritmatika
const pangkat = modulus ** 3;

// Assignment Operator
let umur = 10;
umur += 5;
console.log(umur);

// String Operator
let kalimat = "hello";
kalimat += " world";
console.log(kalimat);

// Mendeklarasikan Fungsi
function namaSaya() {
                return "vici";
}

// Parameter dan Argument
function luasPersegi(s) {
                return s * s;
                }
              
                let sisi = 8;
                let hasilLuas = luasPersegi(sisi);
                console.log(hasilLuas); 

// Mendeklarasikan Objek
let saya = new Object();

saya.nama = 'amel',
saya.umur = 16

console.log(saya);

// Menambah Properti Baru pada Objek
let manusia = {
                kepala: true,
                badan: true,
                tangan: true
                };
              
manusia['ekor'] = false;

// Menghapus Properti Objek
let tubuh = {
                bugar: true,
                sehat: true,
                roda: 2
                };
                delete tubuh.roda;

// Object Method
let kucing = {
                lucu: true,
                kaki: 4,
                suara: function() {
                return 'Meong';
                }
                };
                console.log(kucing.suara());

// Mendeklarasikan Array
let hewan = ['Kucing', 'Anjing', 'Alpaca', 'Singa', 'Beruang'];
console.log(hewan);

// Mengubah Data/Element pada Array
let warna = ['hitam', 'merah', 'ungu', 'kuning'];
warna[3] = 'biru'

// Method Object Math
let bilangan = 0;

let pow = Math.pow(bilangan, 2,3);
let sqrt = Math.sqrt(16);
let max = Math.max(5, 0, 3, 7);

// Menggunakan if, else if, dan else
function ganjilGenap(platNomor) {
                if (platNomor % 2 === 0) {
                   return "Genap";
                } else {
                    return "Ganjil";
                }
            }

// For Loop
let angka = [1, 46, 75, 12, 89, 54, 101];
let genap = [];

for (let i = 0; i < angka.length; i++) {
    if (angka[i] % 2 === 0) {
        genap.push(angka[i]);
    }
}

// For/Of Loop
let angka = [1, 46, 75, 12, 89, 54, 101];
let ganjil = [];

for (const num of angka) {
    if (num % 2 !== 0) {
        ganjil.push(num);
        console.log(ganjil)
    }
}

// While Loop
let angka = [];
let i = 5;
while (i >=0){
    angka.push(i);
    i--;
}

// Do While Loop
let angka = [];
let i = 5;

do {
  angka.push(i);
  i++;
} while (i <= 10);

console.log(angka); 
console.log(i);

while (false) {
  angka.push(i);
  i++;
}

// Default Parameter
function warnaKesukaan(warna = "putih") {
                return "Warna kesukaan saya adalah " + warna;
              }

// Rest Parameter dan Spread Operator
let namaBuah1 = ['apel', 'mangga'];
let namaBuah2 = ['sirsak', 'semangka'];
const semuaNamaBuah = [...namaBuah1, ...namaBuah2];
console.log(semuaNamaBuah);
