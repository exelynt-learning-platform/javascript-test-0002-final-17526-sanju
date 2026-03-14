const ROWS = 5;

// function to calculate nCr
function nCr(n, r) {
    let res = 1;

    for (let i = 0; i < r; i++) {
        res = res * (n - i) / (i + 1);
    }

    return Math.round(res);
}

// print rows
for (let i = ROWS - 1; i >= 0; i--) {

    let line = "";

    // spaces
    for (let s = 0; s < ROWS - i - 1; s++) {
        line += " ";
    }

    // Pascal triangle values
    for (let j = 0; j <= i; j++) {
        line += nCr(i, j) + " ";
    }

    console.log(line.trim());
}
