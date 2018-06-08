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

RecordCollector.prototype.totalValueByGenre = function(genre) {
  const filtered = this.collection.filter(record => record.genre === genre);

  return filtered.reduce(function(acc, record) {
    return acc + record.price;
  }, 0)
}

RecordCollector.prototype.mostValuable = function() {
  return this.sortByValue()[0];
}

RecordCollector.prototype.sortByValue = function() {
  return this.collection.sort((a,b) => b.price - a.price);
}

RecordCollector.prototype.compare = function(collector) {
  return 'Your value: £' + this.totalValue() + ', theirs: £' + collector.totalValue();
}

module.exports = RecordCollector;
