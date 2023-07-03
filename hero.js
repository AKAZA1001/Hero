class Hero {
  constructor(name, power, weapon, height, weight) {
    this.name = name;
    this._power = 0;
    this.weapon = weapon;
    this.height = height;
    this.weight = weight;
  }

  attack() {
    if (this._power < 10) {
      console.log("I need sleep");
    } else {
      console.log(
        `I am attacking with power ${this._power} and ${this.weapon}`
      );
      this._power -= 10;
    }
  }

  sleep() {
    console.log("I am sleeping and gaining power");
    this._power += 10;
  }

  changeWeapon(newWeapon) {
    console.log(`Changing weapon from ${this.weapon} to ${newWeapon}`);
    this.weapon = newWeapon;
  }

  get power() {
    return this._power;
  }

  set power(value) {
    this._power = value;
  }
}

const hero = new Hero("Pacman", 0, "Fists", "6'2\"", "220 lbs");

console.log(hero.name);
console.log(hero.power);

hero.attack();
console.log(hero.power);

hero.sleep();
console.log(hero.power);
hero.changeWeapon("Sword");
console.log(hero.weapon);
