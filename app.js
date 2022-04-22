let misolMiq

while (isNaN(misolMiq) || misolMiq == "") {
    misolMiq = +prompt("Neshta misol ishlamoqchisz:")
    
    if (misolMiq == false) {
        break
    }
}

let randomNum = function () {
    return Math.floor(Math.random() * 99) + 1    
}

let a, b, c, userAns

for (let i = 1; i <= misolMiq; i++) {
    a = randomNum()
    b = randomNum()

    if (a < b) {
        c = a + b
        userAns = +prompt(`Misolni yeching: ${a} + ${b} = `)   
    } else if (a > b) {
        c = a - b
        userAns = +prompt(`Misolni yeching: ${a} - ${b} = `)
    } else if (a % 2 == 0) {
        c = a / b
        userAns = +prompt(`Misolni yeching: ${a} : ${b} = `)
    } else if (b % 2 == 0) {
        c = a * b
        userAns = +prompt(`Misolni yeching: ${a} x ${b} = `)
    }

    if (userAns === c) {
        alert(`To'ri toptiz: ${userAns}`)
    } else {
        alert(`Noto'g'ri Toptiz, Jovobi ${c} edi`);
    }
}