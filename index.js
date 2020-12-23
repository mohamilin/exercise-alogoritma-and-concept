/** 
 * Nomor 1
 * Membuat fungsi penjumlahan */
function penjumlahan(a, b) {
    return a + b;
}

console.log(penjumlahan(2, 3));

/** 
 * Nomor 2
 * Menginisialkan tahun ke dalam abad 
 * abad ke - 1 = 1 - 100 tahun
 * abad ke -2 = 101 - 200 tahun 
 * ... dst
 * konsep : gunakan while 
    while (condition) {
        // code block to be executed
    }
 */ 

function century(year){
    let yearCount = 0;
    while(year > 0){
        year = year - 100;
        yearCount = yearCount + 1;
    }
    return yearCount;
}

console.log(century(1990))
console.log(century(55))

/** 
 * Nomor 3
 * Membuat bilangan kelipatan 2 dengan while 
 * Terdapat perbedaan nilai yang keluar ketika console nya di taruh 
 * sebelum dan sesudah "number = number + 2"
 */
let number = 0;
while (number <= 20){
    console.log(`number before is ${number}`)
    number = number + 2;
    console.log(`number after is ${number}`)
}

/** 
 * Nomor 4
 * Palindrome
 * Jika dibaca dari kanan sama dengan dibaca dari kiri
 * contoh : kasur rusak (kanan) = kasur rusak (kiri) maka hasilnya true
 */

 function palindrome(text){
    let newText = text.split('').reverse().join('')
    if(newText === text) {
        return true;
    }
    return false;
 }

 console.log(palindrome('kasur rusak'));    //true
 console.log(palindrome('makan nasi'));     //false
/** 
 * Nomor 5
 * Mengalikan element yang berdekatan dan mengambil yang menghasilkan nilai terbesar
 *  
 */
function adjacentElementsProduct(inputArray) {
    let arr = [];
    inputArray.reduce((initial, next) => {
        const product = initial * next;
        arr.push(product);
        return next;
    })
    
    return Math.max(...arr)
  }

  console.log(adjacentElementsProduct([ 1, 100, 3, 4, 5, 6, 7]))    //output : 300
  console.log(adjacentElementsProduct([ 1, 2, 3, 4, 5, 6, 7]))    //output : 42
  
/**  */
/**  */
/**  */
/**  */
/**  */
/**  */
/**  */
/**  */
/**  */
/**  */
/**  */
/**  */
/**  */
/**  */
/**  */
/**  */
/**  */
/**  */

