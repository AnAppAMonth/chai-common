Chai Common
===========

Commonly used Chai.js custom assertions.


Install
=======

    npm install chai-common


Usage
=====

This module exports a function that, when called, adds the included assertions to
the prototype of *Chai*'s assertion objects.

```js
var expect = require('chai').expect;
require('chai-common')();

// Use the assertions
expect([1, 2, 3]).to.startWith(1);
```

Included Assertions
===================

This package contains the following assertions.

1.  `containAtIndex(target, idx)`

    Supports strings, arrays, and other objects supporting the `indexOf()` method.

    If the subject supports the `length` property, this assertion also supports negative
    indices, where -1 means the last element, -2 means the one before the last, etc.

2.  `startWith(target)`

    Supports strings, arrays, and other objects supporting the `indexOf()` method.

    This is an alias of `containAtIndex(target, 0)`.

3.  `endWith(target)`

    Supports strings, arrays, and other objects supporting both the `indexOf()` method
    and the `length` property.

    For strings, this is an alias of `containAtIndex(target, -target.length)`; otherwise,
    this is an alias of `containAtIndex(target, -1)`.

License
=======

MIT License
