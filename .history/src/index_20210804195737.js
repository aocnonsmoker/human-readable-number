module.exports = function toReadable (number) {
    const num = number.toString().split('')
    const numPack = {
        'zero': '0',
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9',
        'ten': '10',
        'elevem': '11',
        'twelve': '12',
        'thirteen': '13',
        'fourteen': '14',
        'fifteen': '15',
        'sixteen': '16',
        'seventeen': '17',
        'eighteen': '18',
        'nineteen': '19',
        'twenty': '2x',
        'thirty': '3x',
        'forty': '4x',
        'fifty': '5x',
        'sixty': '6x',
        'seventy': '7x',
        'eighty': '8x',
        'ninety': '9x',
        'hundred': 'xxx',
    };
    const result = '';
    for (let i = 0; i < num.length; i++) {
        if (num.length < 2) {
            result += Object.keys(numPack).find(key => numPack[key] === num[i]);
            return result
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
