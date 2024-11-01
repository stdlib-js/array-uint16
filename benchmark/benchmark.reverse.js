/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var isUint16Array = require( '@stdlib/assert-is-uint16array' );
var pkg = require( './../package.json' ).name;
var Uint16Array = require( './../lib' );


// MAIN //

bench( pkg+':reverse', function benchmark( b ) {
	var out;
	var arr;
	var i;

	arr = new Uint16Array( 2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] = i;
		out = arr.reverse();
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isUint16Array( out ) ) {
		b.fail( 'should return a Uint16Array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
