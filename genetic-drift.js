;var p = .5;
var N = 1000;
var generations = 1200;
var data = [];

function next_generation() {
    var draws = 2 * N;
    var a1 = 0;
    var a2 = 0;
    for (var i = 0; i < draws; i++) {
        if (Math.random() <= p) a1++;
        else a2++;
    }
    p = a1 / draws;
    data.push(p);
}

document.addEventListener('DOMContentLoaded', function () {
    for (var i = 0; i < generations; i++) {
        next_generation();
    }

    draw_line_chart(data, "Generation", "p", ["Population size", N, "Generations:", generations]);
}, false);