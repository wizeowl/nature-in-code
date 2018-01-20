var repeats = 100000000;
var sum = 0;
var average = 0;

console.time();
for (var i = 0; i < repeats; i++) {
    sum += Math.random();
}

average = sum / repeats;
console.log(average);
console.timeEnd();
