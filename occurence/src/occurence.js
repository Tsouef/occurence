class Occurence {
    constructor(text) {
        this.occurenceText(text);
    }

    occurenceText(text) {
        let textArr = text.toLowerCase().split(' ');
        let counts = {};

        for (let i = 0; i < textArr.length; i++) {
            let word = textArr[i];

            if (word.length > 2) {
                counts[word] = counts[word] >= 1 ? counts[word] + 1 : 1;
            }
        }
        console.log(counts);
        return counts;
    }
}


export default Occurence;

