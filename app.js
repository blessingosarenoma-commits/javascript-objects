console.log("car!");

const car = {
  model: "Jeep",
  carcolour: "white",
  getmodel: function () {
    return this.model;
  },
};

const model = car.getmodel();
console.log(model);
