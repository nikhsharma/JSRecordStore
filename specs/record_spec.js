const Record = require('../Record');
const assert = require('assert');

describe('Record', function() {

  let record;

  beforeEach(function() {
    record = new Record('Courtney Barnett', 'Tell Me How You Really Feel', 'alternative', 15.99);
  });

  it('should have an artist', function() {
    assert.strictEqual(record.artist, 'Courtney Barnett');
  });

  it('should a have a title', function() {
    assert.strictEqual(record.title, 'Tell Me How You Really Feel');
  });

  it('should have a genre', function() {
    assert.strictEqual(record.genre, 'alternative');
  });

  it('should have a price', function() {
    assert.strictEqual(record.price, 15.99);
  })

});
