// Simulando uma rodada de ataque de uma equipe em um jogo de RPG
//Recebi um feedback do ChatGPT para definir a classe em um objeto separado, a fim de melhorar a organização e a legibilidade do código.

// Defining the hero classes
let classes = {
    mageClass: "Magic",
    warriorClass: "Sword",
    tankClass: "Taunt"
};

// Defining the hero
let hero = {
    name: ["Spartacos333 " ,"OverL1ght " ,"BrTT" ],
    age: [60 ,20 ,30],
    class: [classes.mageClass ,classes.warriorClass , classes.tankClass],
    localizacao: ["Back-line ", "Front-line ", "Front-line"]
};

// Performing the attack and displaying information
console.log(`The ${hero.name} attacked using ${hero.class} class!`);
console.log(`${hero.name} is in the ${hero.localizacao}.`);
// Não obtive o resultado esperado, embora o código esteja funcional. 
// Vou revisá-lo para encontrar uma maneira de separar as saídas das informações nos objetos e evitar que sejam exibidas simultaneamente.
