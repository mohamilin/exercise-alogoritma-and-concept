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
 */
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
/**  */

