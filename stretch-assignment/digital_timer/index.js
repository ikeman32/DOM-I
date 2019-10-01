// function timer() {
//     let msT = document.getElementById('msTens');
//     let msH = document.getElementById('msHundreds');
//     let secOne = document.getElementById('secondOnes');
//     let secTen = document.getElementById('secondTens');


// }

let start = new Date();

let msT = document.getElementById('msTens');
let msH = document.getElementById('msHundreds');
let secOne = document.getElementById('secondOnes');
let secTen = document.getElementById('secondTens');

let tenths = 0;
let hundreds = 0;
let ones = 0;
let ten = 0;

let timer = setInterval(() => {
    let elapsed = new Date() - start;
    //msT.innerText = elapsed

    tenths += (elapsed / 100).toFixed(0);
    msT.innerText = tenths;
    msH.innerText = hundreds;
    secOne.innerText = ones;
    secTen.innerText = ten;
    console.log('hundreds', hundreds);
    console.log('tenths', tenths);
    console.log('ones', ones);

    if (tenths > 9) {
        tenths = 0;
        hundreds += 1;

    }
    if (hundreds > 9) {
        tenths = 0;
        hundreds = 0;
        ones += 1;

    }
    if (ones > 9) {
        tenths = 0;
        hundreds = 0;
        ones = 0;
        ten = 1;

    }

    // if (hundreds >= 9) {
    //     hundreds = 0;
    //     ones += 1;
    // } else {
    //     secOne.innerText = ones;
    //     secTen.innerText = ten;
    // }
    //alert(elapsed % 10);
}, 100);