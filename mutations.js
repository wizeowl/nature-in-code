let numberOfSequences = 100;
let sequenceLength = 20;
let originalSequence = [];
let sequences = [];

function generateFirstGeneration() {
    generateFirstSequence();
    for (let i = 0; i < numberOfSequences; i++) {
        sequences.push(originalSequence.slice());
    }
}

function generateFirstSequence() {
    for (let i = 0; i < sequenceLength; i++) {
        originalSequence.push(randomBase());
    }
}

function randomBase() {
    switch (Math.floor(Math.random() * 4)) {
        case 0:
            return 'A';
        case 1:
            return 'T';
        case 2:
            return 'C';
        case 3:
        default:
            return 'G';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    generateFirstGeneration();
});