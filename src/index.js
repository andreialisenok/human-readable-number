module.exports = function toReadable(number) {
    const tenths = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const hundredths = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number < 20) {
        return tenths[number];
    }
    const n = number % 10;
    if (number < 100) {
        return (
            hundredths[Math.floor(number / 10) - 2] +
            (n ? " " + tenths[n] : "")
        );
    }

    return (
        tenths[Math.floor(number / 100)] +
        " hundred" +
        (number % 100 == 0 ? "" : " " + toReadable(number % 100))
    );
};
