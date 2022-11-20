
const julia = { name: 'Julia', age: 35 }
const gabriel = { name: 'Gabriel', age: 30 }
const leticia = { name: 'Leticia', age: 12 }

const people = [julia, gabriel, leticia]

const calculatRaceNumber = (person) => {
    let raceNumber = Math.floor(Math.random() * 1000);
    const early = true;
    let runnerAge = person.age;

    if (runnerAge > 18 && early) {
        raceNumber += 1000;
    }

    if (runnerAge > 18 && early) {
        console.log(`Your number is ${raceNumber} and you will run at 9h30`);
    } else if (runnerAge > 18 && !early) {
        console.log(`Your number is ${raceNumber} and you will run at 11h00 am`);
    } else if (runnerAge < 18) {
        console.log(`Your number is ${raceNumber} and you will run at 12h30 pm`);
    } else {
        console.log("please approach the registration desk");
    }
}

for (let i = 0; i < people.length; i++) {
    const person = people[i];
    calculatRaceNumber(person);
}
