const calculateCURP = require("./app.js");

const persons = [
    {
        name: "JUAN ESTEBAN",
        fstLastName: "BALTIERREZ",
        scnLastName: "TOBON",
        sex: "H",
        year: "2000",
        month: "08",
        day: "28",
        state: "TS",
        curp: "BATJ000828HTSLBN",
    },
    {
        name: "RICARDO",
        fstLastName: "ALAMAN",
        scnLastName: "PEREZ",
        sex: "H",
        year: "1963",
        month: "03",
        day: "21",
        state: "DF",
        curp: "AAPR630321HDFLRC",
    },
];
console.table(persons[0]);
test(`CURP Test: Expected ${persons[0].curp}`, () => expect(calculateCURP(persons[0])).toBe(persons[0].curp));

console.table(persons[1]);
test(`CURP Test: Expected ${persons[1].curp}`, () => expect(calculateCURP(persons[1])).toBe(persons[1].curp));