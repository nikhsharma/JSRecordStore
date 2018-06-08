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

RecordStore.prototype.sell = function(record) {
  this.inventory.splice(this.inventory.indexOf(record), 1);
  this.balance += record.price;
}

RecordStore.prototype.finances = function() {
  const stockValue = this.inventory.reduce(function(acc, record) {
     return acc + record.price;
   }, 0);
  return 'Balance: ' + this.balance + ', Stock Value: ' + stockValue;
}

RecordStore.prototype.showByGenre = function(genre) {
  return this.inventory.filter(record => record.genre === genre);
}

module.exports = RecordStore;
