const assert = require('assert');
const { add } = require('./math');

try {
  assert.strictEqual(add(2, 3), 5, 'Math works!');
  console.log('Unit test passed!');
} catch (error) {
  console.error('Unit test failed!');
  process.exit(1);
}
