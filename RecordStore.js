const RecordStore = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = balance;
}

RecordStore.prototype.add = function(record) {
    this.inventory.push(record);
}

RecordStore.prototype.displayDetails = function(record) {
  return 'Artist: ' + record.artist + ', Title: ' + record.title + ', Genre: ' + record.genre + ', Price: ' + record.price;
}

RecordStore.prototype.displayAll = function() {
  let res = [];
  this.inventory.forEach(function(record) {
    res.push(this.displayDetails(record));
  }.bind(this));
  return res;
}

module.exports = RecordStore;
