const RecordStore = require('../RecordStore');
const Record = require('../Record');
const assert = require('assert');

describe('Record Store', function() {

  let recordStore;

  beforeEach(function() {
    recordStore = new RecordStore('Round Records', 'Glasgow', 1000);
  });

  it('should have a name', function() {
    assert.strictEqual(recordStore.name, 'Round Records');
  });

  it('should have a city', function() {
    assert.strictEqual(recordStore.city, 'Glasgow');
  });

  it('should have an inventory, starts empty', function() {
    assert.deepStrictEqual(recordStore.inventory, []);
  });

  it('should have a balance', function() {
    assert.strictEqual(recordStore.balance, 1000);
  });

  it('should be able to add Records to inventory', function() {
    const record = new Record('test', 'test', 'test', 10);
    recordStore.add(record);
    assert.deepStrictEqual(recordStore.inventory, [record])
  });

  it('should print all details of a record as a string', function() {
    const record = new Record('Courtney Barnett', 'Tell Me How You Really Feel', 'Alternative', 15.99);
    assert.strictEqual(recordStore.displayDetails(record), 'Artist: Courtney Barnett, Title: Tell Me How You Really Feel, Genre: Alternative, Price: 15.99');
  });

  it('should print details of all inventory', function() {
    const record = new Record('Courtney Barnett', 'Tell Me How You Really Feel', 'Alternative', 15.99);
    const record2 = new Record('test', 'test', 'test', 10);
    recordStore.add(record);
    recordStore.add(record2);
    assert.strictEqual(recordStore.displayAll().length, 2);
  });

  it('should be able to sell a record', function() {
    const record = new Record('Courtney Barnett', 'Tell Me How You Really Feel', 'Alternative', 15.99);
    recordStore.add(record);
    recordStore.sell(record);
    assert.strictEqual(recordStore.balance, 1015.99);
    assert.deepStrictEqual(recordStore.inventory, []);
  });

  it('should be able to display financial situation', function() {
    const record = new Record('Courtney Barnett', 'Tell Me How You Really Feel', 'Alternative', 15.99);
    recordStore.add(record);
    assert.strictEqual(recordStore.finances(), 'Balance: 1000, Stock Value: 15.99');
  });
});
