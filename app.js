class Wasp {
    constructor(hp, type, damage) {
        this.hp = hp;
        this.type = type;
        this.damage = damage;
    }

    losePoints() {
        this.hp -= this.damage;
    }

}
class Queen extends Wasp {
    constructor() {
        super(80, "queen", 16);
    }
}
class Worker extends Wasp {
    constructor() {
        super(68, "worker", 10);
    }
}
class Drone extends Wasp {
    constructor() {
        super(60, "drone", 12);
    }
}

let wasps = [];

const queen = new Queen();
wasps.push(queen);

for (i = 0; i < 5; i++) {
    const worker = new Worker()
    wasps.push(worker);

}
// console.log(wasps);

for (i = 0; i < 8; i++) {
    const drone = new Drone();
    wasps.push(drone);
}

const makeDivs = () => {
    document.querySelector('.container').innerHTML = "";
    for (i = 0; i < wasps.length; i++) {
        const createDiv = document.createElement('div');
        createDiv.innerHTML =
            `<p>${wasps[i].type}</p>
             <p>${wasps[i].hp}</p>`;

        document.querySelector('.container').append(createDiv);
    }
}

document.querySelector('.btn').addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * wasps.length);
    wasps[randomNumber].losePoints();
    if (wasps[randomNumber].hp <= 0) {
        if (wasps[randomNumber].type === "queen") {
            wasps = [];
        }
        wasps.splice(randomNumber, 1);
    }
    
    makeDivs();
    console.log(randomNumber);
})




