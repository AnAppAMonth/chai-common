
/* global describe, it */
/* jshint -W030 */
var chai = require('chai'),
    expect = chai.expect,
    common = require('../');

chai.use(common);

describe('Assertion `containAtIndex`', function() {
    it('should work for strings', function() {
        expect('oh my god').to.containAtIndex('oh', 0);
        expect('oh my god').to.containAtIndex('my', 3);
        expect('oh my god').to.containAtIndex('od', 7);

        expect('oh my god').to.not.containAtIndex('wtf', 5);
        expect('oh my god').to.not.containAtIndex('my', 4);

        expect(function() {
            expect('oh my god').to.containAtIndex('wtf', 2);
        }).to.throw(/expected .+ to contain .+ but it doesn't/);
        expect(function() {
            expect('oh my god').to.containAtIndex('my', 2);
        }).to.throw(/expected .+ to contain .+ at index .+, but got .+/);
        expect(function() {
            expect('oh my god').to.not.containAtIndex('go', 6);
        }).to.throw(/expected .+ to not contain .+ at index .+, but it does/);
    });
    it('should work for arrays', function() {
        expect([1, 2, 3]).to.containAtIndex(1, 0);
        expect([1, 2, 3]).to.containAtIndex(2, 1);
        expect([1, 2, 3]).to.containAtIndex(3, 2);

        expect([1, 2, 3]).to.not.containAtIndex(5, 0);
        expect([1, 2, 3]).to.not.containAtIndex(3, 1);

        expect(function() {
            expect([1, 2, 3]).to.containAtIndex(4, 2);
        }).to.throw(/expected .+ to contain .+ but it doesn't/);
        expect(function() {
            expect([1, 2, 3]).to.containAtIndex(2, 2);
        }).to.throw(/expected .+ to contain .+ at index .+, but got .+/);
        expect(function() {
            expect([1, 2, 3]).to.not.containAtIndex(3, 2);
        }).to.throw(/expected .+ to not contain .+ at index .+, but it does/);
    });
    it('should support negative indices', function() {
        expect([1, 2, 3]).to.containAtIndex(1, -3);
        expect([1, 2, 3]).to.containAtIndex(2, -2);
        expect([1, 2, 3]).to.containAtIndex(3, -1);
        expect([1, 2, 3]).to.not.containAtIndex(3, -2);

        expect('oh my god').to.containAtIndex('oh', -9);
        expect('oh my god').to.containAtIndex('my', -6);
        expect('oh my god').to.containAtIndex('od', -2);
        expect('oh my god').to.not.containAtIndex('my', -5);
    });
    it('should not work for ordinary objects', function() {
        expect(function() {
            expect({}).to.containAtIndex(undefined, 0);
        }).to.throw(/expected .+ to have a property .+indexOf.+/);
        expect(function() {
            expect(100).to.containAtIndex(undefined, 0);
        }).to.throw(/expected .+ to have a property .+indexOf.+/);
        expect(function() {
            expect({indexOf: 1}).to.containAtIndex(undefined, 0);
        }).to.throw(/expected .+ to be a function/);
    });
});

describe('Assertion `startWith`', function() {
    it('should work for strings', function() {
        expect('abcd').to.startWith('ab');
        expect('abcd').to.not.startWith('bc');

        expect(function() {
            expect('abcd').to.startWith('ef');
        }).to.throw(/expected .+ to contain .+ but it doesn't/);
        expect(function() {
            expect('abcd').to.startWith('bc');
        }).to.throw(/expected .+ to contain .+ at index .+, but got .+/);
        expect(function() {
            expect('abcd').to.not.startWith('ab');
        }).to.throw(/expected .+ to not contain .+ at index .+, but it does/);
    });
    it('should work for arrays', function() {
        expect(['ab', 'bc', 'cd']).to.startWith('ab');
        expect(['ab', 'bc', 'cd']).to.not.startWith('bc');

        expect(function() {
            expect(['ab', 'bc', 'cd']).to.startWith('ef');
        }).to.throw(/expected .+ to contain .+ but it doesn't/);
        expect(function() {
            expect(['ab', 'bc', 'cd']).to.startWith('bc');
        }).to.throw(/expected .+ to contain .+ at index .+, but got .+/);
        expect(function() {
            expect(['ab', 'bc', 'cd']).to.not.startWith('ab');
        }).to.throw(/expected .+ to not contain .+ at index .+, but it does/);
    });
});

describe('Assertion `endWith`', function() {
    it('should work for strings', function() {
        expect('abcd').to.endWith('cd');
        expect('abcd').to.not.endWith('bc');

        expect(function() {
            expect('abcd').to.endWith('ef');
        }).to.throw(/expected .+ to contain .+ but it doesn't/);
        expect(function() {
            expect('abcd').to.endWith('bc');
        }).to.throw(/expected .+ to contain .+ at index .+, but got .+/);
        expect(function() {
            expect('abcd').to.not.endWith('cd');
        }).to.throw(/expected .+ to not contain .+ at index .+, but it does/);
    });
    it('should work for arrays', function() {
        expect(['ab', 'bc', 'cd']).to.endWith('cd');
        expect(['ab', 'bc', 'cd']).to.not.endWith('bc');

        expect(function() {
            expect(['ab', 'bc', 'cd']).to.endWith('ef');
        }).to.throw(/expected .+ to contain .+ but it doesn't/);
        expect(function() {
            expect(['ab', 'bc', 'cd']).to.endWith('bc');
        }).to.throw(/expected .+ to contain .+ at index .+, but got .+/);
        expect(function() {
            expect(['ab', 'bc', 'cd']).to.not.endWith('cd');
        }).to.throw(/expected .+ to not contain .+ at index .+, but it does/);
    });
    it('should work for array of integers', function() {
        expect([1, 2, 3]).to.endWith(3);
        expect([1, 2, 3]).to.not.endWith(2);

        expect(function() {
            expect([1, 2, 3]).to.endWith(4);
        }).to.throw(/expected .+ to contain .+ but it doesn't/);
        expect(function() {
            expect([1, 2, 3]).to.endWith(2);
        }).to.throw(/expected .+ to contain .+ at index .+, but got .+/);
        expect(function() {
            expect([1, 2, 3]).to.not.endWith(3);
        }).to.throw(/expected .+ to not contain .+ at index .+, but it does/);
    });
});
