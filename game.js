let userThimg = prompt("Hello! Let's go to play! rock - 1; paper - 2; scissors - 3. Choose the number");

while (userThimg == "" || userThimg == null || ( userThimg > 3 ) || (userThimg < 1)) {
    userThimg = prompt("Hello! Let's go to play! rock - 1; paper - 2; scissors - 3. Choose the number");
}

let min = 1;

let max = 3;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
        }

let machineThing = getRandomIntInclusive(min, max);

if ( userThimg == 1 ) {
    switch(machineThing) {
        case 1:
        alert ("it's draw!");
        break;

        case 2:
            alert("You lose!");
            break;

        case 3:
            alert("You win");
            break;
            }
    }

else if ( userThimg == 2 ) {
    switch( machineThing ) {
        case 2:
        alert ("it's draw!");
        break;

        case 1:
            alert("You win!");
            break;

        case 3:
            alert("You lose");
            break;
    }
}

else if ( userThimg == 3 ) {
    switch( machineThing ) {
        case 3:
        alert ("it's draw!");
        break;

        case 2:
            alert("You win!");
            break;

        case 1:
            alert("You lose");
            break;
    }
}