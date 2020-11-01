var num = prompt("Welke tafel wilt u berekenen");
var num1 = parseInt(num);

function table(num1) {
    if (num1 <= 10) {
        var num2 = 1;
        for (x = 1; x <= num; x++) {
            for (var y = 1; y <= 10; y++) {
                var ans = num2 * y;
                document.write(num2 + " x " + y + " = " + ans + "<br>");
            }
            num2++
            document.write("<br>");
        }
    } else if (num1 > 10) {
        alert("Je moet een getal tussen de 0 en 10 invoeren");
        location.reload()
    } else {
        alert("Je moet een getal invoeren");
        location.reload()
    }
}

table(num1)