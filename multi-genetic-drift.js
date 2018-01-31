var N = 20;
var generations = 200;

function geneticDrift() {
    var p = .5;
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

    for (var i = 0; i < generations; i++) {
        next_generation();
    }

    return data;
}

document.addEventListener('DOMContentLoaded', function () {
    var data = [];
    for (var i = 0; i < 4; i++) {
        data.push(geneticDrift());
    }

    draw_line_chart(data, "Generation", "p", ["Population size", N, "Generations:", generations]);
}, false);