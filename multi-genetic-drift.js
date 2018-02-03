function GeneticDrift(inN, inGgenerations, inP) {
    // the population size, it's capitlized in order to correspond to the notation in formulas
    N = inN || 20;
    // the number of generations over which to simulate genetic drift
    generations = inGgenerations || 200;
    // the ratio of allele A1 (assuming there are only two alleles)
    p = inP || .5;

    simulations = [];

    populationSizes = [];

    simulate = (reps) => {
        for (let i = 0; i < reps; i++) {
            this.simulations.push(this.drift(this.N, this.generations, this.p));
        }

        return this.simulations;
    }

    drift = function (N, generations, p) {
        let data = [p];
        let nextP = p;
        let nextN = N;

        for (let i = 0; i < generations; i++) {
            [nextP, nextN] = this.nextGeneration(nextP, nextN);
            data.push(nextP);
            this.populationSizes.push(nextN);
        }

        return data;
    }

    nextGeneration = (p, N)=> {
        let draws = 2 * N;
        let a1 = 0;
        let a2 = 0;

        // calculate next generation's ratio
        for (let i = 0; i < draws; i++) {
            if (Math.random() <= p) a1++;
            else a2++;
        }

        // return the next ratio
        return [a1 / draws, N];
    }

    clear = () => {
        this.simulations = [];
    }

    // there must be protection against division by zero but i'm feeling sloppy
    effectivePopulationSize = () => {
        return Math.round(this.populationSizes.length / this.populationSizes.reduce((accumulator, current) => accumulator + 1 / current, 0));
    }

    return this;
}

document.addEventListener('DOMContentLoaded', function () {
    let geneticDrift = GeneticDrift();

    draw_line_chart(geneticDrift.simulate(5), "Generation", "p", [
        "Eff. Population size", geneticDrift.effectivePopulationSize(),
        "Generations:", geneticDrift.generations
    ]);

}, false);