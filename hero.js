class Hero {
  constructor(name, power, weapon, height, weight) {
    this.name = name;
    this._power = 0;
    this.weapon = weapon;
    this.height = height;
    this.weight = weight;
    this._level = 1;
  }

  attack() {
    if (this._power < 10) {
      console.log("I need sleep");
    } else {
      console.log(
        `I am attacking with power ${this._power} and ${this.weapon}`
      );
      this._power -= 10;
      this._level++;
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

  get level() {
    return this._level;
  }
}

const hero = new Hero("Pacman", 0, "Fists", "6'2\"", "220 lbs");

console.log(hero.name);
console.log(hero.power);
console.log(hero.level);

hero.attack();
console.log(hero.power);
console.log(hero.level);

hero.sleep();
console.log(hero.power);
console.log(hero.level);

hero.attack();
console.log(hero.power);
console.log(hero.level);

hero.changeWeapon("Sword");
console.log(hero.weapon);
