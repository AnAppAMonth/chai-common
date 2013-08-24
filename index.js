
var adhoc = require('chai-adhoc'),
    format = adhoc.format;

module.exports = function() {
    adhoc.addAssertion('containAtIndex', function(ctx, target, idx) {
        // Support negative indices if `ctx.obj` has the `length` property.
        if (idx < 0 && typeof ctx.obj.length === 'number') {
            idx += ctx.obj.length;
        }

        ctx.expect(ctx.obj).to.have.property('indexOf').that.is.a('function');
        var result = ctx.obj.indexOf(target);
        if (ctx.flag('negate')) {
            ctx.assert(
                result === idx,     // remember the assertion is negated
                '',
                format('expected #{this} to not contain #{1} at index #{2}, but it does', target, idx)
            );
        } else {
            ctx.assert(
                result >= 0,
                format("expected #{this} to contain #{1} but it doesn't", target),
                ''
            );
            ctx.assert(
                result === idx,
                format('expected #{this} to contain #{1} at index #{2}, but got #{3}', target, idx, result),
                ''
            );
        }
    });

    // An alias of `containAtIndex(target, 0)`
    adhoc.addAssertion('startWith', function(ctx, target) {
        ctx.expect(ctx.obj).flags().to.containAtIndex(target, 0);
    });

    // For strings, an alias of `containAtIndex(target, -target.length)`
    // Otherwise, an alias of `containAtIndex(target, -1)`
    adhoc.addAssertion('endWith', function(ctx, target) {
        ctx.expect(ctx.obj).to.have.property('length').that.is.a('number');

        if (typeof ctx.obj === 'string' || ctx.obj instanceof String) {
            ctx.expect(target).to.have.property('length').that.is.a('number');
            ctx.expect(ctx.obj).flags().to.containAtIndex(target, -target.length);
        } else {
            ctx.expect(ctx.obj).flags().to.containAtIndex(target, -1);
        }
    });

    return true;
};
