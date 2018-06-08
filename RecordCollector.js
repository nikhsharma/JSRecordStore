const RecordCollector = function (cash) {
  this.collection = [];
  this.cash = cash;
}

RecordCollector.prototype.buy = function(record) {
  if (record.price <= this.cash) {
    this.cash -= record.price;
    this.collection.push(record);
  }
}

RecordCollector.prototype.sell = function(record) {
    this.collection.splice(this.collection.indexOf(record), 1);
    this.cash += record.price;
}

RecordCollector.prototype.totalValue = function() {
  return this.collection.reduce(function(acc, record) {
    return acc + record.price;
  }, 0);
}

module.exports = RecordCollector;
