class Food {
  constructor(name) {
    this.name = name;
    this.brands = [];
  }
  addBramd(brand) {
    this.brands.push(brand);
  }
  print() {
    console.log(`${this.name} 을/를 파는 음식점들`);
    console.log(this.brands.join(", "));
  }
}

const pizza = new Food("피자");
pizza.addBramd("피자헛");
pizza.addBramd("도미노 피자");
pizza.addBramd("굽네 피자");
pizza.addBramd("허리 피자");

const chicken = new Food("치킨");
chicken.addBramd("BBQ");
chicken.addBramd("올리브영");
chicken.addBramd("굽네치킨");
chicken.addBramd("해태 용가리 치킨");

pizza.print();
chicken.print();
