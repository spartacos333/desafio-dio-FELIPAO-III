// Simulating a round of attack for a team in an RPG game
// I received feedback from ChatGPT to define the class in a separate object to improve code organization and readability.

// Defining the hero classes
let classes = {
    mageClass: "Magic",
    warriorClass: "Sword",
    tankClass: "Taunt"
};

// Defining the hero data as arrays
let heroes = [
    {
        name: "Spartacos333",
        age: 60,
        class: classes.mageClass,
        localizacao: "Back-line"
    },
    {
        name: "OverL1ght",
        age: 20,
        class: classes.warriorClass,
        localizacao: "Front-line"
    },
    {
        name: "BrTT",
        age: 30,
        class: classes.tankClass,
        localizacao: "Front-line"
    }
];

// Performing the attack and displaying information for each hero
for (let hero of heroes) {
    console.log(`The ${hero.name} attacked using ${hero.class} class!`);
    console.log(`${hero.name} is in the ${hero.localizacao}.`);
}
// Eu criei um array de objetos para que o loop for pudesse ser executado de forma ordenada.
// Embora o código cumpra meus objetivos (ser funcional e produzir a saída desejada), vou tentar aprimorar a organização e o aspecto visual da saída.