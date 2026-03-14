let n = 5;

for (let i = 0; i < n; i++) {

    let row = "";

   
    for (let j = 0; j < i; j++) {
        row += " ";
    }

 
    row += "1 ";


    for (let j = n - 1 - i; j > 1; j--) {
        row += j + " ";
    }

   
    for (let j = 2; j <= n - 1 - i; j++) {
        row += j + " ";
    }


    if (n - i > 1) {
        row += "1";
    }

    console.log(row);
}
