const RecordStore = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = balance;
}

RecordStore.prototype.add = function(record) {
    this.inventory.push(record);
}

module.exports = RecordStore;
