let classes = {
    mageClass: "Magic",
    warriorClass: "Sword",
    tankClass: "Taunt"
};

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

for (let hero of heroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`Class: ${hero.class}`);
    console.log(`Attack: The ${hero.name} attacked using ${hero.class} class!`);
    console.log(`Location: ${hero.localizacao}`);
    console.log("------------------------------");
}
