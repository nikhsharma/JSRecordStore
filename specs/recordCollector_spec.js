const RecordCollector = require('../RecordCollector');
const Record = require('../Record');
const assert = require('assert');

describe('Record Collector', function() {

  let recordCollector;

  beforeEach(function() {
    recordCollector = new RecordCollector(100);
  });

  it('should have a collection, starts empty', function() {
    assert.deepStrictEqual(recordCollector.collection, []);
  });

  it('should have cash', function() {
    assert.strictEqual(recordCollector.cash, 100);
  });

  it('should be able to buy a record', function() {
    const record = new Record('Atoms For Peace', 'Amok', 'Electronic', 13.99);
    recordCollector.buy(record);
    assert.deepStrictEqual(recordCollector.collection, [record]);
  });

  it('should be able to sell a record', function() {
    const record = new Record('Atoms For Peace', 'Amok', 'Electronic', 13.99);
    recordCollector.buy(record);
    recordCollector.sell(record);
    assert.deepStrictEqual(recordCollector.collection, []);
  });

  it('shouldn\'t be able to buy a record if they can\'t afford it', function() {
    const record = new Record('Atoms For Peace', 'Amok', 'Electronic', 13.99);
    recordCollector.cash = 10;
    recordCollector.buy(record);
    assert.strictEqual(recordCollector.cash, 10);
    assert.deepStrictEqual(recordCollector.collection, []);
  });

  it('should be able to view total value of their collection', function() {
    const record = new Record('Atoms For Peace', 'Amok', 'Electronic', 13.99);
    recordCollector.buy(record);
    assert.strictEqual(recordCollector.totalValue(), 13.99);
  });

  it('should be able to view total value of a given genre', function() {
    const record = new Record('Courtney Barnett', 'Tell Me How You Really Feel', 'Alternative', 15.99);
    const record2 = new Record('Atoms For Peace', 'Amok', 'Electronic', 13.99);
    recordCollector.buy(record);
    recordCollector.buy(record2);
    assert.strictEqual(recordCollector.totalValueByGenre('Alternative'), 15.99);
  });

  it('should be able to view their most valuable record', function() {
    const record = new Record('Courtney Barnett', 'Tell Me How You Really Feel', 'Alternative', 15.99);
    const record2 = new Record('Atoms For Peace', 'Amok', 'Electronic', 13.99);
    recordCollector.buy(record);
    recordCollector.buy(record2);
    assert.strictEqual(recordCollector.mostValuable(), record);
  });

  it('should be able to sort collection by value', function() {
    const record = new Record('Courtney Barnett', 'Tell Me How You Really Feel', 'Alternative', 15.99);
    const record2 = new Record('Atoms For Peace', 'Amok', 'Electronic', 13.99);
    const record3 = new Record('Bully', 'Losing', 'Rock', 10.99);
    recordCollector.buy(record);
    recordCollector.buy(record2);
    recordCollector.buy(record3);
    assert.deepStrictEqual(recordCollector.sortByValue(), [record, record2, record3]);
  });

  it('should be able to compare the value of their collection agains another collector', function() {
    const recordCollector2 = new RecordCollector(100);
    const record = new Record('Courtney Barnett', 'Tell Me How You Really Feel', 'Alternative', 15.99);
    const record2 = new Record('Atoms For Peace', 'Amok', 'Electronic', 13.99);
    const record3 = new Record('Bully', 'Losing', 'Rock', 10.99);
    recordCollector.buy(record);
    recordCollector.buy(record2);
    recordCollector2.buy(record3);
    assert.strictEqual(recordCollector.compare(recordCollector2), 'Your value: £29.98, theirs: £10.99')
  });
});
