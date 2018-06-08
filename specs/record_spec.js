const Record = require('../Record');
const assert = require('assert');

describe('Record', function() {

  let record;

  beforeEach(function() {
    record = new Record();
  });

  xit('should have an artist', function() {
    assert.strictEqual(record.artist, 'Courtney Barnett');
  });

  xit('should a have a title', function() {
    assert.strictEqual(record.title, 'Tell Me How You Really Feel');
  });

  xit('should have a genre', function() {
    assert.strictEqual(record.genre, 'alternative');
  });

  xit('should have a price', function() {
    assert.strictEqual(record.price, 15.99);
  })

});
