<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Arcsine Random Numbers

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Arcsine][arcsine] distributed pseudorandom numbers.



<section class="usage">

## Usage

To use in Observable,

```javascript
arcsine = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var arcsine = require( 'path/to/vendor/umd/random-base-arcsine/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.arcsine;
})();
</script>
```

#### arcsine( a, b )

Returns a pseudorandom number drawn from an [arcsine][arcsine] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var r = arcsine( 2.0, 5.0 );
// returns <number>
```

If either `a` or `b` is `NaN` or `a >= b`, the function returns `NaN`.

```javascript
var r = arcsine( 2.0, 1.0 );
// returns NaN

r = arcsine( NaN, 1.0 );
// returns NaN

r = arcsine( 1.0, NaN );
// returns NaN
```

#### arcsine.factory( \[a, b, ]\[options] )

Returns a pseudorandom number generator (PRNG) for generating pseudorandom numbers drawn from an [arcsine][arcsine] distribution.

```javascript
var rand = arcsine.factory();

var r = rand( 0.0, 1.0 );
// returns <number>
```

If provided `a` and `b`, the returned generator returns random variates from the specified distribution.

```javascript
// Draw from arcsine( -2.0, 2.0 ) distribution:
var rand = arcsine.factory( -2.0, 2.0 );

var r = rand();
// returns <number>

r = rand();
// returns <number>
```

If not provided `a` and `b`, the returned generator requires that both parameters be provided at each invocation.

```javascript
var rand = arcsine.factory();

var r = rand( 0.0, 1.0 );
// returns <number>

r = rand( -2.0, 2.0 );
// returns <number>
```

The function accepts the following `options`:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the returned pseudorandom number generator, one must seed the provided `prng` (assuming the provided `prng` is seedable).
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned generator has exclusive control over its internal state. Default: `true`.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
var minstd = require( '@stdlib/random-base-minstd' );

var rand = arcsine.factory({
    'prng': minstd.normalized
});

var r = rand( 2.0, 4.0 );
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = arcsine.factory({
    'seed': 12345
});

var r1 = rand1( 2.0, 4.0 );
// returns <number>

var rand2 = arcsine.factory( 2.0, 4.0, {
    'seed': 12345
});

var r2 = rand2();
// returns <number>

var bool = ( r1 === r2 );
// returns true
```

To return a generator having a specific initial state, set the generator `state` option.

```javascript
var rand;
var bool;
var r;
var i;

// Generate pseudorandom numbers, thus progressing the generator state:
for ( i = 0; i < 1000; i++ ) {
    r = arcsine( 2.0, 4.0 );
}

// Create a new PRNG initialized to the current state of `arcsine`:
rand = arcsine.factory({
    'state': arcsine.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand( 2.0, 4.0 ) === arcsine( 2.0, 4.0 ) );
// returns true
```

#### arcsine.NAME

The generator name.

```javascript
var str = arcsine.NAME;
// returns 'arcsine'
```

#### arcsine.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = arcsine.PRNG;
// returns <Function>
```

#### arcsine.seed

The value used to seed `arcsine()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = arcsine( 0.0, 10.0 );
}

// Generate the same pseudorandom values...
rand = arcsine.factory( 0.0, 10.0, {
    'seed': arcsine.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = arcsine.factory({
    'prng': Math.random
});

var seed = rand.seed;
// returns null
```

#### arcsine.seedLength

Length of generator seed.

```javascript
var len = arcsine.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = arcsine.factory({
    'prng': Math.random
});

var len = rand.seedLength;
// returns null
```

#### arcsine.state

Writable property for getting and setting the generator state.

```javascript
var r = arcsine( 2.0, 4.0 );
// returns <number>

r = arcsine( 2.0, 4.0 );
// returns <number>

// ...

// Get a copy of the current state:
var state = arcsine.state;
// returns <Uint32Array>

r = arcsine( 2.0, 4.0 );
// returns <number>

r = arcsine( 2.0, 4.0 );
// returns <number>

// Reset the state:
arcsine.state = state;

// Replay the last two pseudorandom numbers:
r = arcsine( 2.0, 4.0 );
// returns <number>

r = arcsine( 2.0, 4.0 );
// returns <number>

// ...
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = arcsine.factory({
    'prng': Math.random
});

var state = rand.state;
// returns null
```

#### arcsine.stateLength

Length of generator state.

```javascript
var len = arcsine.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = arcsine.factory({
    'prng': Math.random
});

var len = rand.stateLength;
// returns null
```

#### arcsine.byteLength

Size (in bytes) of generator state.

```javascript
var sz = arcsine.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = arcsine.factory({
    'prng': Math.random
});

var sz = rand.byteLength;
// returns null
```

#### arcsine.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = arcsine.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

If provided a PRNG for uniformly distributed numbers, this method returns `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = arcsine.factory({
    'prng': Math.random
});

var o = rand.toJSON();
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If PRNG state is "shared" (meaning a state array was provided during PRNG creation and **not** copied) and one sets the generator state to a state array having a different length, the PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( arcsine( 0.0, 1.0 ) );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = arcsine.factory( 2.0, 5.0, {
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = arcsine.factory( 0.0, 1.0, {
    'seed': arcsine.seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random/base/beta`][@stdlib/random/base/beta]</span><span class="delimiter">: </span><span class="description">beta distributed pseudorandom numbers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-base-arcsine.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-base-arcsine

[test-image]: https://github.com/stdlib-js/random-base-arcsine/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random-base-arcsine/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-base-arcsine/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-base-arcsine?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-base-arcsine.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-base-arcsine/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-base-arcsine/tree/deno
[umd-url]: https://github.com/stdlib-js/random-base-arcsine/tree/umd
[esm-url]: https://github.com/stdlib-js/random-base-arcsine/tree/esm
[branches-url]: https://github.com/stdlib-js/random-base-arcsine/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-base-arcsine/main/LICENSE

[arcsine]: https://en.wikipedia.org/wiki/Arcsine_distribution

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32/tree/umd

<!-- <related-links> -->

[@stdlib/random/base/beta]: https://github.com/stdlib-js/random-base-beta/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
