brand='cheese';
var car = {
  brand: "Nissan",
  method: console.log(this.brand),
  getBrand: function () {
    console.log(this.brand);
  }
};