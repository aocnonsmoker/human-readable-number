module.exports = function toReadable (number) {
    const num = number.toString().split('')
    const numPack = {
        '0': 'zero',
        '1': 'one'
    }
    console.log('djfhgdklfjghdlkfjg', Object.keys(numPack).find(key => object[key] == number.toString()))
    const result = [];
    const one = 'one';
    const two = 'two';
    const three = 'three';
    const four = 'four';
    const five = 'five';
    const six = 'six';
    const seven = 'seven';
    const eight = 'eight';
    const nine = 'nine';
    const ten = 'ten';
    const eleven = 'eleven';
    const twelve = 'twelve'
    const x2 = 'twenty';
    const x3 = 'thirty';
    const x4 = 'forty';
    const x5 = 'fifty';
    const x6 = 'sixty';
    const x7 = 'seventy';
    const x8 = 'eighty';
    const x9 = 'ninety';
    const xxx = 'hundred';
    for (let i = 0; i < num.length; i++) {
        if (num.length < 2) {
            return getString(num[i])
        }
        if (num.length < 3) {
            const first = getString(num[0]);
            const second = getString(num[1]);

        }
        if (num.length < 4) {
            const first = getString(num[0]);
            const second = getString(num[1]);
            const third = getString(num[2]);       
        }
    }
    function getString(number) {
        if (number == 0) {
            return 'zero'
        }
        if (number == 1) {
            return 'one'
        }
        if (number == 2) {
            return 'two'
        }
        if (number == 3) {
            return 'three'
        }
        if (number == 4) {
            return 'four'
        }
        if (number == 5) {
            return 'five'
        }
        if (number == 6) {
            return 'six'
        }
        if (number == 7) {
            return 'seven'
        }
        if (number == 8) {
            return 'eight'
        }
        if (number == 9) {
            return 'nine'
        }
    }
}
