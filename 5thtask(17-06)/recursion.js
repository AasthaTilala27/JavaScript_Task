let n = 10;

function armstrongSeries(limit, num = 0, count = 0) {

    if (count === limit)
        return;

    let digits = String(num).length;

    let sum = String(num)
        .split("")
        .reduce((acc, digit) => acc + Math.pow(Number(digit), digits), 0);

    if (sum === num) {
        console.log(num);
        count++;
    }

    armstrongSeries(limit, num + 1, count);
}
armstrongSeries(n);