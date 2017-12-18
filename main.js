(function () {
    "use strict";

    function getDuplicatedNumbers(...functionArguments) {
        let counter = {};

        for (let argument of functionArguments) {
            if (!isNaN(argument)) {
                if (counter.hasOwnProperty(argument)) {
                    counter[argument] = counter[argument] + 1;
                } else {
                    counter[argument] = 1;
                }
            }
        }
        for (let argumentValue in counter) {
            if (counter[argumentValue] > 1) {
                console.log(argumentValue + " - " + counter[argumentValue]);
            }
        }
    }
    getDuplicatedNumbers(1, 34, "13adaf", "13adaf", 5, 34, 1, 1, 34, "13adaf", "AA1100",  "AA1100",  "1100",  "1100", 5, 34, 1);

}());