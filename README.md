<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dcusumpw

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the cumulative sum of double-precision floating-point strided array elements using pairwise summation.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-dcusumpw
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var dcusumpw = require( '@stdlib/blas-ext-base-dcusumpw' );
```

#### dcusumpw( N, sum, x, strideX, y, strideY )

Computes the cumulative sum of double-precision floating-point strided array elements using pairwise summation.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
var y = new Float64Array( x.length );

dcusumpw( x.length, 0.0, x, 1, y, 1 );
// y => <Float64Array>[ 1.0, -1.0, 1.0 ]

x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
y = new Float64Array( x.length );

dcusumpw( x.length, 10.0, x, 1, y, 1 );
// y => <Float64Array>[ 11.0, 9.0, 11.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **sum**: initial sum.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length for `x`.
-   **y**: output [`Float64Array`][@stdlib/array/float64].
-   **strideY**: stride length for `y`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to compute the cumulative sum of every other element:

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );
var y = new Float64Array( x.length );

var v = dcusumpw( 4, 0.0, x, 2, y, 1 );
// y => <Float64Array>[ 1.0, 3.0, 1.0, 5.0, 0.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );

// Initial arrays...
var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var y0 = new Float64Array( x0.length );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

dcusumpw( 4, 0.0, x1, -2, y1, 1 );
// y0 => <Float64Array>[ 0.0, 0.0, 0.0, 4.0, 6.0, 4.0, 5.0, 0.0 ]
```

#### dcusumpw.ndarray( N, sum, x, strideX, offsetX, y, strideY, offsetY )

Computes the cumulative sum of double-precision floating-point strided array elements using pairwise summation and alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
var y = new Float64Array( x.length );

dcusumpw.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
// y => <Float64Array>[ 1.0, -1.0, 1.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to calculate the cumulative sum of every other value in the strided input array starting from the second value and to store in the last `N` elements of the strided output array starting from the last element:

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var y = new Float64Array( x.length );

dcusumpw.ndarray( 4, 0.0, x, 2, 1, y, -1, y.length-1 );
// y => <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 5.0, 1.0, -1.0, 1.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `y` unchanged.
-   In general, pairwise summation is more numerically stable than ordinary recursive summation (i.e., "simple" summation), with slightly worse performance. While not the most numerically stable summation technique (e.g., compensated summation techniques such as the Kahan–Babuška-Neumaier algorithm are generally more numerically stable), pairwise summation strikes a reasonable balance between numerical stability and performance. If either numerical stability or performance is more desirable for your use case, consider alternative summation techniques.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var Float64Array = require( '@stdlib/array-float64' );
var dcusumpw = require( '@stdlib/blas-ext-base-dcusumpw' );

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'float64'
});
var y = new Float64Array( x.length );

console.log( x );
console.log( y );

dcusumpw( x.length, 0.0, x, 1, y, -1 );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/dcusumpw.h"
```

#### stdlib_strided_dcusumpw( N, sum, \*X, strideX, \*Y, strideY )

Computes the cumulative sum of double-precision floating-point strided array elements using pairwise summation.

```c
const double x[] = { 1.0, 2.0, 3.0, 4.0 };
double y[] = { 0.0, 0.0, 0.0, 0.0 };

stdlib_strided_dcusumpw( 4, 0.0, x, 1, y, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **sum**: `[in] double` initial sum.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **Y**: `[out] double*` output array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.

```c
void stdlib_strided_dcusumpw( const CBLAS_INT N, const double sum, const double *X, const CBLAS_INT strideX, double *Y, const CBLAS_INT strideY );
```

<!-- lint disable maximum-heading-length -->

#### stdlib_strided_dcusumpw_ndarray( N, sum, \*X, strideX, offsetX, \*Y, strideY, offsetY )

<!-- lint enable maximum-heading-length -->

Computes the cumulative sum of double-precision floating-point strided array elements using pairwise summation and alternative indexing semantics.

```c
const double x[] = { 1.0, 2.0, 3.0, 4.0 }
double y[] = { 0.0, 0.0, 0.0, 0.0 }

stdlib_strided_dcusumpw_ndarray( 4, 0.0, x, 1, 0, y, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **sum**: `[in] double` initial sum.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Y**: `[out] double*` output array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.
-   **offsetY**: `[in] CBLAS_INT` starting index for `Y`.

```c
void stdlib_strided_dcusumpw_ndarray( const CBLAS_INT N, const double sum, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/dcusumpw.h"
#include <stdio.h>

int main( void ) {
    // Create strided arrays:
    const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };
    double y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

    // Specify the number of elements:
    const int N = 4;

    // Specify stride lengths:
    const int strideX = 2;
    const int strideY = -2;

    // Compute the cumulative sum:
    stdlib_strided_dcusumpw( N, 0.0, x, strideX, y, strideY );

    // Print the result:
    for ( int i = 0; i < 8; i++ ) {
        printf( "y[ %d ] = %lf\n", i, y[ i ] );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="references">

## References

-   Higham, Nicholas J. 1993. "The Accuracy of Floating Point Summation." _SIAM Journal on Scientific Computing_ 14 (4): 783–99. doi:[10.1137/0914050][@higham:1993a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas-ext/base/dcusum`][@stdlib/blas/ext/base/dcusum]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of double-precision floating-point strided array elements.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/gcusumpw`][@stdlib/blas/ext/base/gcusumpw]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of strided array elements using pairwise summation.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/scusumpw`][@stdlib/blas/ext/base/scusumpw]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of single-precision floating-point strided array elements using pairwise summation.</span>

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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-dcusumpw.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-dcusumpw

[test-image]: https://github.com/stdlib-js/blas-ext-base-dcusumpw/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-dcusumpw/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-dcusumpw/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-dcusumpw?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-dcusumpw.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-dcusumpw/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-dcusumpw/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-dcusumpw/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-dcusumpw/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-dcusumpw/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-dcusumpw/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-dcusumpw/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-dcusumpw/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-dcusumpw/main/LICENSE

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@higham:1993a]: https://doi.org/10.1137/0914050

<!-- <related-links> -->

[@stdlib/blas/ext/base/dcusum]: https://github.com/stdlib-js/blas-ext-base-dcusum

[@stdlib/blas/ext/base/gcusumpw]: https://github.com/stdlib-js/blas-ext-base-gcusumpw

[@stdlib/blas/ext/base/scusumpw]: https://github.com/stdlib-js/blas-ext-base-scusumpw

<!-- </related-links> -->

</section>

<!-- /.links -->
