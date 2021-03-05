exports.min = function min(array = []) {
    if (array.length == 0) return 0;
    return Math.min.apply(null, array);
};

exports.max = function max(array = []) {
    if (array.length == 0) return 0;
    return Math.max.apply(null, array);
};

exports.avg = function avg(array = []) {
    if (array.length == 0) return 0;
    let s = 0;
    let k = 0;
    for (const num of array) {
        if (typeof num == "number") {
            k++;
            s += num;
        }
    }
    if (arguments.length === 0) return 0;
    return s / k;
};
