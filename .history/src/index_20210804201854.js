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
        'eleven': '11',
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
    let result = '';
    if (num.length < 2) {
        result += Object.keys(numPack).find(key => numPack[key] === num[0]);
        return result;
    }
    if (num.length < 3) {
        if (parseInt(num[0]) === 1) {
            result += Object.keys(numPack).find(key => numPack[key] === num[0] + num[1]);
            return result;
        }
        result += Object.keys(numPack).find(key => numPack[key] === num[0] + 'x');
        if (parseInt(num[1]) !== 0) {
            result += ' ' + Object.keys(numPack).find(key => numPack[key] === num[1]);
        }
        return result;
    }
    if (num.length < 4) {
        result += Object.keys(numPack).find(key => numPack[key] === num[0]);
        result += ' ' + Object.keys(numPack).find(key => numPack[key] === 'xxx');
        if (num[1] + num[2] === '00') {
            return result;
        }
        if (parseInt(num[1]) === 0) {
            result += ' ' +Object.keys(numPack).find(key => numPack[key] === num[2]);
            return result
        }
        if (parseInt(num[1]) === 1) {
            result += ' ' +Object.keys(numPack).find(key => numPack[key] === num[1] + num[2]);
            return result;
        }
        result += ' ' + Object.keys(numPack).find(key => numPack[key] === num[1] + 'x');
        if (parseInt(num[2]) !== 0) {
            result += ' ' + Object.keys(numPack).find(key => numPack[key] === num[2]);
        }
        return result;
        
    }
}
