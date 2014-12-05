var assert = require('assert');

describe('test', function() {
    it('should pass', function() { });

    it('should fail', function() {
        assert(false, 'test failure message');
    });

    it('should fail again', function() {
        assert(false, 'another test failure');
    });
});
