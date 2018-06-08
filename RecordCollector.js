const RecordCollector = function (cash) {
  this.collection = [];
  this.cash = cash;
}

RecordCollector.prototype.buy = function(record) {
    this.cash -= record.price;
    this.collection.push(record);
}

module.exports = RecordCollector;
