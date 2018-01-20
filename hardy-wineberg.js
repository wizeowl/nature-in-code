var a1a1 = .15;
var a2a2 = .35;
var a1a2 = 1 - (a1a1 + a2a2);

var p = a1a1 + (a1a2 / 2);
var q = 1 - p;

function create_next_generation() {
    a1a1 = p * p;
    a2a2 = q * q;
    a1a2 = 2 * p * q;
}

function rnd(number, decimals) {
    var shifter = Math.pow(10, decimals || 2);
    return Math.round(number * shifter) / shifter;
}

console.log("generation 0:", rnd(a1a1), rnd(a1a2), rnd(a2a2));

for (var i = 1; i < 10; i++) {
    create_next_generation();
    console.log("generation " + i + ":", rnd(a1a1), rnd(a1a2), rnd(a2a2));
}
