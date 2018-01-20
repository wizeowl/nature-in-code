var p = .5;
var N = 1000;
var generations = 1200;

function next_generation() {
    var draws = 2 * N;
    var a1 = 0;
    var a2 = 0;
    for (var i = 0; i < draws; i++) {
        if (Math.random() <= p) a1++;
        else a2++;
    }
    p = a1 / draws;
}

for (var i = 0; i < generations; i++) {
    next_generation();
    console.log("generation", i + 1, p);
}
