function simulate() {
    var coins = 10;
    var heads = 0;
    var tails = 0;

    for (var i = 0; i < coins; i++) {
        if (Math.random() <= .5) heads++;
        else tails++;
    }

    //console.log(heads, "heads", tails, "tails");
    return [heads, tails];
}

function countHeadsOccurences(occurences) {
    var repeats = 1024;
    var count = 0;
    for (var i = 0; i < repeats; i++) {
        var result = simulate();
        if (result[0] == occurences) count++;
    }
    var percentage = Math.round(count / repeats * 100);
    console.log(`${occurences} heads occured ${percentage}% of the repeats (${count} times of ${repeats})`);
}


console.time();
countHeadsOccurences(2);
console.timeEnd();



