const RecordCollector = function (cash) {
  this.collection = [];
  this.cash = cash;
}

RecordCollector.prototype.buy = function(record) {
    this.cash -= record.price;
    this.collection.push(record);
}

RecordCollector.prototype.sell = function(record) {
    this.collection.splice(this.collection.indexOf(record), 1);
    this.cash += record.price;
}

module.exports = RecordCollector;
