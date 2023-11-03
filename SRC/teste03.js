// Simulating a round of attack for a team in an RPG game
// I received feedback from ChatGPT to define the class in a separate object to improve code organization and readability.

// Defining the hero classes
let classes = {
    mageClass: "Magic",
    warriorClass: "Sword",
    tankClass: "Taunt"
};

// Defining the hero data as an array of objects
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
    console.log(`Hero: ${hero.name}`);
    console.log(`Class: ${hero.class}`);
    console.log(`Attack: The ${hero.name} attacked using ${hero.class} class!`);
    console.log(`Location: ${hero.localizacao}`);
    console.log("------------------------------");
}
// Funcionou, vou deixar apenas o código na versão final.