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

        return counts;
    }


}

const text = "Lorem lorem lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum dolor eget tellus auctor, volutpat fermentum odio iaculis. Mauris libero ipsum, finibus mollis iaculis nec, imperdiet ut tellus. Vestibulum consequat augue id urna dictum, at malesuada risus ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus mollis lacus erat, hendrerit feugiat sem euismod sed. Mauris dapibus commodo dapibus. Donec finibus in nunc ac imperdiet."

let occurence = new Occurence(text);

