(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _magicVirtualElement = require('magic-virtual-element');

var _magicVirtualElement2 = _interopRequireDefault(_magicVirtualElement);

var _deku = require('deku');

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var opts = {
	columnWidth: '.Packery-size',
	itemSelector: '.Packery-item',
	percentPosition: true,
	stamp: '.Packery-stamp'
}; /** @jsx dom */

var app = (0, _deku.tree)((0, _magicVirtualElement2.default)(
	_2.default,
	{ 'class': 'Packery', options: opts },
	(0, _magicVirtualElement2.default)(
		'div',
		{ 'class': 'Packery-stamp Packery-stamp--1' },
		(0, _magicVirtualElement2.default)('img', { src: 'http://placehold.it/350x300' })
	),
	(0, _magicVirtualElement2.default)(
		'div',
		{ 'class': 'Packery-stamp Packery-stamp--2' },
		(0, _magicVirtualElement2.default)('img', { src: 'http://placehold.it/700x150' })
	),
	(0, _magicVirtualElement2.default)('div', { 'class': 'Packery-size' }),
	(0, _magicVirtualElement2.default)(
		'div',
		{ 'class': 'Packery-item' },
		(0, _magicVirtualElement2.default)('img', { src: 'http://placehold.it/350x150' })
	),
	(0, _magicVirtualElement2.default)(
		'div',
		{ 'class': 'Packery-item' },
		(0, _magicVirtualElement2.default)('img', { src: 'http://placehold.it/350x150' })
	),
	(0, _magicVirtualElement2.default)(
		'div',
		{ 'class': 'Packery-item' },
		(0, _magicVirtualElement2.default)('img', { src: 'http://placehold.it/350x150' })
	),
	(0, _magicVirtualElement2.default)(
		'div',
		{ 'class': 'Packery-item' },
		(0, _magicVirtualElement2.default)('img', { src: 'http://placehold.it/350x150' })
	)
));

(0, _deku.render)(app, document.body);

},{"../":2,"deku":13,"magic-virtual-element":43}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _magicVirtualElement = require('magic-virtual-element');

var _magicVirtualElement2 = _interopRequireDefault(_magicVirtualElement);

var _imagesloaded = require('imagesloaded');

var _imagesloaded2 = _interopRequireDefault(_imagesloaded);

var _objectOmit = require('object-omit');

var _objectOmit2 = _interopRequireDefault(_objectOmit);

var _packery = require('packery');

var _packery2 = _interopRequireDefault(_packery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx dom */

var propTypes = {
	children: {
		type: 'array'
	},
	component: {
		type: 'string'
	},
	options: {
		type: 'object'
	}
};

var defaultProps = {
	component: 'div'
};

function afterRender(_ref, el) {
	var props = _ref.props;
	var options = props.options;

	(0, _imagesloaded2.default)(el, function () {
		var packery = new _packery2.default(el, options);
		packery.layout();
	});
}

function render(_ref2) {
	var props = _ref2.props;
	var children = props.children;
	var component = props.component;

	return (0, _magicVirtualElement2.default)(component, (0, _objectOmit2.default)(props, Object.keys(propTypes)), children);
}

exports.default = { afterRender: afterRender, defaultProps: defaultProps, propTypes: propTypes, render: render };

},{"imagesloaded":39,"magic-virtual-element":43,"object-omit":45,"packery":52}],3:[function(require,module,exports){
'use strict'

/**
 * Expose `arrayFlatten`.
 */
module.exports = arrayFlatten

/**
 * Recursive flatten function with depth.
 *
 * @param  {Array}  array
 * @param  {Array}  result
 * @param  {Number} depth
 * @return {Array}
 */
function flattenWithDepth (array, result, depth) {
  for (var i = 0; i < array.length; i++) {
    var value = array[i]

    if (depth > 0 && Array.isArray(value)) {
      flattenWithDepth(value, result, depth - 1)
    } else {
      result.push(value)
    }
  }

  return result
}

/**
 * Recursive flatten function. Omitting depth is slightly faster.
 *
 * @param  {Array} array
 * @param  {Array} result
 * @return {Array}
 */
function flattenForever (array, result) {
  for (var i = 0; i < array.length; i++) {
    var value = array[i]

    if (Array.isArray(value)) {
      flattenForever(value, result)
    } else {
      result.push(value)
    }
  }

  return result
}

/**
 * Flatten an array, with the ability to define a depth.
 *
 * @param  {Array}  array
 * @param  {Number} depth
 * @return {Array}
 */
function arrayFlatten (array, depth) {
  if (depth == null) {
    return flattenForever(array, [])
  }

  return flattenWithDepth(array, [], depth)
}

},{}],4:[function(require,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)
	var PLUS_URL_SAFE = '-'.charCodeAt(0)
	var SLASH_URL_SAFE = '_'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS ||
		    code === PLUS_URL_SAFE)
			return 62 // '+'
		if (code === SLASH ||
		    code === SLASH_URL_SAFE)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],5:[function(require,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var rootParent = {}

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
 *     on objects.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

function typedArraySupport () {
  function Bar () {}
  try {
    var arr = new Uint8Array(1)
    arr.foo = function () { return 42 }
    arr.constructor = Bar
    return arr.foo() === 42 && // typed array instances can be augmented
        arr.constructor === Bar && // constructor can be set
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (arg) {
  if (!(this instanceof Buffer)) {
    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
    if (arguments.length > 1) return new Buffer(arg, arguments[1])
    return new Buffer(arg)
  }

  this.length = 0
  this.parent = undefined

  // Common case.
  if (typeof arg === 'number') {
    return fromNumber(this, arg)
  }

  // Slightly less common case.
  if (typeof arg === 'string') {
    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
  }

  // Unusual.
  return fromObject(this, arg)
}

function fromNumber (that, length) {
  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < length; i++) {
      that[i] = 0
    }
  }
  return that
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

  // Assumption: byteLength() return value is always < kMaxLength.
  var length = byteLength(string, encoding) | 0
  that = allocate(that, length)

  that.write(string, encoding)
  return that
}

function fromObject (that, object) {
  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

  if (isArray(object)) return fromArray(that, object)

  if (object == null) {
    throw new TypeError('must start with number, buffer, array or string')
  }

  if (typeof ArrayBuffer !== 'undefined') {
    if (object.buffer instanceof ArrayBuffer) {
      return fromTypedArray(that, object)
    }
    if (object instanceof ArrayBuffer) {
      return fromArrayBuffer(that, object)
    }
  }

  if (object.length) return fromArrayLike(that, object)

  return fromJsonObject(that, object)
}

function fromBuffer (that, buffer) {
  var length = checked(buffer.length) | 0
  that = allocate(that, length)
  buffer.copy(that, 0, 0, length)
  return that
}

function fromArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Duplicate of fromArray() to keep fromArray() monomorphic.
function fromTypedArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  // Truncating the elements is probably not what people expect from typed
  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
  // of the old Buffer constructor.
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array) {
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    array.byteLength
    that = Buffer._augment(new Uint8Array(array))
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromTypedArray(that, new Uint8Array(array))
  }
  return that
}

function fromArrayLike (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
// Returns a zero-length buffer for inputs that don't conform to the spec.
function fromJsonObject (that, object) {
  var array
  var length = 0

  if (object.type === 'Buffer' && isArray(object.data)) {
    array = object.data
    length = checked(array.length) | 0
  }
  that = allocate(that, length)

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
}

function allocate (that, length) {
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = Buffer._augment(new Uint8Array(length))
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that.length = length
    that._isBuffer = true
  }

  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
  if (fromPool) that.parent = rootParent

  return that
}

function checked (length) {
  // Note: cannot use `length < kMaxLength` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (subject, encoding) {
  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

  var buf = new Buffer(subject, encoding)
  delete buf.parent
  return buf
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  var i = 0
  var len = Math.min(x, y)
  while (i < len) {
    if (a[i] !== b[i]) break

    ++i
  }

  if (i !== len) {
    x = a[i]
    y = b[i]
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

  if (list.length === 0) {
    return new Buffer(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; i++) {
      length += list[i].length
    }
  }

  var buf = new Buffer(length)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

function byteLength (string, encoding) {
  if (typeof string !== 'string') string = '' + string

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'binary':
      // Deprecated
      case 'raw':
      case 'raws':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

// pre-set for values that may exist in the future
Buffer.prototype.length = undefined
Buffer.prototype.parent = undefined

function slowToString (encoding, start, end) {
  var loweredCase = false

  start = start | 0
  end = end === undefined || end === Infinity ? this.length : end | 0

  if (!encoding) encoding = 'utf8'
  if (start < 0) start = 0
  if (end > this.length) end = this.length
  if (end <= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return 0
  return Buffer.compare(this, b)
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
  byteOffset >>= 0

  if (this.length === 0) return -1
  if (byteOffset >= this.length) return -1

  // Negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

  if (typeof val === 'string') {
    if (val.length === 0) return -1 // special case: looking for empty string always fails
    return String.prototype.indexOf.call(this, val, byteOffset)
  }
  if (Buffer.isBuffer(val)) {
    return arrayIndexOf(this, val, byteOffset)
  }
  if (typeof val === 'number') {
    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
    }
    return arrayIndexOf(this, [ val ], byteOffset)
  }

  function arrayIndexOf (arr, val, byteOffset) {
    var foundIndex = -1
    for (var i = 0; byteOffset + i < arr.length; i++) {
      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
      } else {
        foundIndex = -1
      }
    }
    return -1
  }

  throw new TypeError('val must be string, number or Buffer')
}

// `get` is deprecated
Buffer.prototype.get = function get (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` is deprecated
Buffer.prototype.set = function set (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) throw new Error('Invalid hex string')
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    var swap = encoding
    encoding = offset
    offset = length | 0
    length = swap
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'binary':
        return binaryWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function binarySlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
  }

  if (newBuf.length) newBuf.parent = this.parent || this

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
  if (offset < 0) throw new RangeError('index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; i--) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; i++) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    target._set(this.subarray(start, start + len), targetStart)
  }

  return len
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function fill (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end < start) throw new RangeError('end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i]
      }
      return buf.buffer
    }
  } else {
    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function _augment (arr) {
  arr.constructor = Buffer
  arr._isBuffer = true

  // save reference to original Uint8Array set method before overwriting
  arr._set = arr.set

  // deprecated
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.equals = BP.equals
  arr.compare = BP.compare
  arr.indexOf = BP.indexOf
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUIntLE = BP.readUIntLE
  arr.readUIntBE = BP.readUIntBE
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readIntLE = BP.readIntLE
  arr.readIntBE = BP.readIntBE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUIntLE = BP.writeUIntLE
  arr.writeUIntBE = BP.writeUIntBE
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeIntLE = BP.writeIntLE
  arr.writeIntBE = BP.writeIntBE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; i++) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"base64-js":4,"ieee754":38,"isarray":6}],6:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],7:[function(require,module,exports){
/*!
  Copyright (c) 2015 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes += ' ' + arg;
			} else if (Array.isArray(arg)) {
				classes += ' ' + classNames.apply(null, arg);
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes += ' ' + key;
					}
				}
			}
		}

		return classes.substr(1);
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],8:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],9:[function(require,module,exports){
/**
 * Expose `requestAnimationFrame()`.
 */

exports = module.exports = window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || fallback;

/**
 * Fallback implementation.
 */

var prev = new Date().getTime();
function fallback(fn) {
  var curr = new Date().getTime();
  var ms = Math.max(0, 16 - (curr - prev));
  var req = setTimeout(fn, ms);
  prev = curr;
  return req;
}

/**
 * Cancel.
 */

var cancel = window.cancelAnimationFrame
  || window.webkitCancelAnimationFrame
  || window.mozCancelAnimationFrame
  || window.clearTimeout;

exports.cancel = function(id){
  cancel.call(window, id);
};

},{}],10:[function(require,module,exports){
/**
 * toString ref.
 */

var toString = Object.prototype.toString;

/**
 * Return the type of `val`.
 *
 * @param {Mixed} val
 * @return {String}
 * @api public
 */

module.exports = function(val){
  switch (toString.call(val)) {
    case '[object Date]': return 'date';
    case '[object RegExp]': return 'regexp';
    case '[object Arguments]': return 'arguments';
    case '[object Array]': return 'array';
    case '[object Error]': return 'error';
  }

  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (val !== val) return 'nan';
  if (val && val.nodeType === 1) return 'element';

  val = val.valueOf
    ? val.valueOf()
    : Object.prototype.valueOf.apply(val)

  return typeof val;
};

},{}],11:[function(require,module,exports){
/**
 * Module dependencies.
 */

var Emitter = require('component-emitter')

/**
 * Expose `scene`.
 */

module.exports = Application

/**
 * Create a new `Application`.
 *
 * @param {Object} element Optional initial element
 */

function Application (element) {
  if (!(this instanceof Application)) return new Application(element)
  this.options = {}
  this.sources = {}
  this.element = element
}

/**
 * Mixin `Emitter`.
 */

Emitter(Application.prototype)

/**
 * Add a plugin
 *
 * @param {Function} plugin
 */

Application.prototype.use = function (plugin) {
  plugin(this)
  return this
}

/**
 * Set an option
 *
 * @param {String} name
 */

Application.prototype.option = function (name, val) {
  this.options[name] = val
  return this
}

/**
 * Set value used somewhere in the IO network.
 */

Application.prototype.set = function (name, data) {
  this.sources[name] = data
  this.emit('source', name, data)
  return this
}

/**
 * Mount a virtual element.
 *
 * @param {VirtualElement} element
 */

Application.prototype.mount = function (element) {
  this.element = element
  this.emit('mount', element)
  return this
}

/**
 * Remove the world. Unmount everything.
 */

Application.prototype.unmount = function () {
  if (!this.element) return
  this.element = null
  this.emit('unmount')
  return this
}

},{"component-emitter":8}],12:[function(require,module,exports){
/**
 * All of the events can bind to
 */

module.exports = {
  onAbort: 'abort',
  onBlur: 'blur',
  onCanPlay: 'canplay',
  onCanPlayThrough: 'canplaythrough',
  onChange: 'change',
  onClick: 'click',
  onContextMenu: 'contextmenu',
  onCopy: 'copy',
  onCut: 'cut',
  onDoubleClick: 'dblclick',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDragEnter: 'dragenter',
  onDragExit: 'dragexit',
  onDragLeave: 'dragleave',
  onDragOver: 'dragover',
  onDragStart: 'dragstart',
  onDrop: 'drop',
  onDurationChange: 'durationchange',
  onEmptied: 'emptied',
  onEncrypted: 'encrypted',
  onEnded: 'ended',
  onError: 'error',
  onFocus: 'focus',
  onInput: 'input',
  onInvalid: 'invalid',
  onKeyDown: 'keydown',
  onKeyPress: 'keypress',
  onKeyUp: 'keyup',
  onLoad: 'load',
  onLoadedData: 'loadeddata',
  onLoadedMetadata: 'loadedmetadata',
  onLoadStart: 'loadstart',
  onPause: 'pause',
  onPlay: 'play',
  onPlaying: 'playing',
  onProgress: 'progress',
  onMouseDown: 'mousedown',
  onMouseEnter: 'mouseenter',
  onMouseLeave: 'mouseleave',
  onMouseMove: 'mousemove',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onPaste: 'paste',
  onRateChange: 'ratechange',
  onReset: 'reset',
  onScroll: 'scroll',
  onSeeked: 'seeked',
  onSeeking: 'seeking',
  onSubmit: 'submit',
  onStalled: 'stalled',
  onSuspend: 'suspend',
  onTimeUpdate: 'timeupdate',
  onTouchCancel: 'touchcancel',
  onTouchEnd: 'touchend',
  onTouchMove: 'touchmove',
  onTouchStart: 'touchstart',
  onVolumeChange: 'volumechange',
  onWaiting: 'waiting',
  onWheel: 'wheel'
}

},{}],13:[function(require,module,exports){
/**
 * Create the application.
 */

exports.tree =
exports.scene =
exports.deku = require('./application')

/**
 * Render scenes to the DOM.
 */

if (typeof document !== 'undefined') {
  exports.render = require('./render')
}

/**
 * Render scenes to a string
 */

exports.renderString = require('./stringify')

},{"./application":11,"./render":15,"./stringify":16}],14:[function(require,module,exports){
var type = require('component-type')

/**
 * Returns the type of a virtual node
 *
 * @param  {Object} node
 * @return {String}
 */

module.exports = function nodeType (node) {
  var v = type(node)
  if (v === 'null' || node === false) return 'empty'
  if (v !== 'object') return 'text'
  if (type(node.type) === 'string') return 'element'
  return 'component'
}

},{"component-type":18}],15:[function(require,module,exports){
/**
 * Dependencies.
 */

var raf = require('component-raf')
var isDom = require('is-dom')
var uid = require('get-uid')
var keypath = require('object-path')
var events = require('./events')
var svg = require('./svg')
var defaults = require('object-defaults')
var forEach = require('fast.js/forEach')
var assign = require('fast.js/object/assign')
var reduce = require('fast.js/reduce')
var nodeType = require('./node-type')

/**
 * Expose `dom`.
 */

module.exports = render

/**
 * Render an app to the DOM
 *
 * @param {Application} app
 * @param {HTMLElement} container
 * @param {Object} opts
 *
 * @return {Object}
 */

function render (app, container, opts) {
  var frameId
  var isRendering
  var rootId = 'root'
  var currentElement
  var currentNativeElement
  var connections = {}
  var components = {}
  var entities = {}
  var handlers = {}
  var mountQueue = []
  var children = {}
  children[rootId] = {}

  if (!isDom(container)) {
    throw new Error('Container element must be a DOM element')
  }

  /**
   * Rendering options. Batching is only ever really disabled
   * when running tests, and pooling can be disabled if the user
   * is doing something stupid with the DOM in their components.
   */

  var options = defaults(assign({}, app.options || {}, opts || {}), {
    batching: true
  })

  /**
   * Listen to DOM events
   */
  var rootElement = getRootElement(container)
  addNativeEventListeners()

  /**
   * Watch for changes to the app so that we can update
   * the DOM as needed.
   */

  app.on('unmount', onunmount)
  app.on('mount', onmount)
  app.on('source', onupdate)

  /**
   * If the app has already mounted an element, we can just
   * render that straight away.
   */

  if (app.element) render()

  /**
   * Teardown the DOM rendering so that it stops
   * rendering and everything can be garbage collected.
   */

  function teardown () {
    removeNativeEventListeners()
    removeNativeElement()
    app.off('unmount', onunmount)
    app.off('mount', onmount)
    app.off('source', onupdate)
  }

  /**
   * Swap the current rendered node with a new one that is rendered
   * from the new virtual element mounted on the app.
   *
   * @param {VirtualElement} element
   */

  function onmount () {
    invalidate()
  }

  /**
   * If the app unmounts an element, we should clear out the current
   * rendered element. This will remove all the entities.
   */

  function onunmount () {
    removeNativeElement()
    currentElement = null
  }

  /**
   * Update all components that are bound to the source
   *
   * @param {String} name
   * @param {*} data
   */

  function onupdate (name, data) {
    if (!connections[name]) return
    connections[name].forEach(function (update) {
      update(data)
    })
  }

  /**
   * Render and mount a component to the native dom.
   *
   * @param {Entity} entity
   * @return {HTMLElement}
   */

  function mountEntity (entity) {
    register(entity)
    setSources(entity)
    children[entity.id] = {}
    entities[entity.id] = entity

    // commit initial state and props.
    commit(entity)

    // callback before mounting.
    trigger('beforeMount', entity, [entity.context])
    trigger('beforeRender', entity, [entity.context])

    // render virtual element.
    var virtualElement = renderEntity(entity)
    // create native element.
    var nativeElement = toNative(entity.id, '0', virtualElement)

    entity.virtualElement = virtualElement
    entity.nativeElement = nativeElement

    // Fire afterRender and afterMount hooks at the end
    // of the render cycle
    mountQueue.push(entity.id)

    return nativeElement
  }

  /**
   * Remove a component from the native dom.
   *
   * @param {Entity} entity
   */

  function unmountEntity (entityId) {
    var entity = entities[entityId]
    if (!entity) return
    trigger('beforeUnmount', entity, [entity.context, entity.nativeElement])
    unmountChildren(entityId)
    removeAllEvents(entityId)
    var componentEntities = components[entityId].entities
    delete componentEntities[entityId]
    delete components[entityId]
    delete entities[entityId]
    delete children[entityId]
  }

  /**
   * Render the entity and make sure it returns a node
   *
   * @param {Entity} entity
   *
   * @return {VirtualTree}
   */

  function renderEntity (entity) {
    var component = entity.component
    var fn = typeof component === 'function' ? component : component.render
    if (!fn) throw new Error('Component needs a render function')
    var result = fn(entity.context, setState(entity))
    if (!result) throw new Error('Render function must return an element.')
    return result
  }

  /**
   * Whenever setState or setProps is called, we mark the entity
   * as dirty in the renderer. This lets us optimize the re-rendering
   * and skip components that definitely haven't changed.
   *
   * @param {Entity} entity
   *
   * @return {Function} A curried function for updating the state of an entity
   */

  function setState (entity) {
    return function (nextState) {
      updateEntityState(entity, nextState)
    }
  }

  /**
   * Tell the app it's dirty and needs to re-render. If batching is disabled
   * we can just trigger a render immediately, otherwise we'll wait until
   * the next available frame.
   */

  function invalidate () {
    if (!options.batching) {
      if (!isRendering) render()
    } else {
      if (!frameId) frameId = raf(render)
    }
  }

  /**
   * Update the DOM. If the update fails we stop the loop
   * so we don't get errors on every frame.
   *
   * @api public
   */

  function render () {
    // If this is called synchronously we need to
    // cancel any pending future updates
    clearFrame()

    // If the rendering from the previous frame is still going,
    // we'll just wait until the next frame. Ideally renders should
    // not take over 16ms to stay within a single frame, but this should
    // catch it if it does.
    if (isRendering) {
      frameId = raf(render)
      return
    } else {
      isRendering = true
    }

    // 1. If there isn't a native element rendered for the current mounted element
    // then we need to create it from scratch.
    // 2. If a new element has been mounted, we should diff them.
    // 3. We should update check all child components for changes.
    if (!currentNativeElement) {
      currentElement = app.element
      currentNativeElement = toNative(rootId, '0', currentElement)
      if (container.children.length > 0) {
        console.info('deku: The container element is not empty. These elements will be removed. Read more: http://cl.ly/b0Sr')
      }
      if (container === document.body) {
        console.warn('deku: Using document.body is allowed but it can cause some issues. Read more: http://cl.ly/b0SC')
      }
      removeAllChildren(container)
      container.appendChild(currentNativeElement)
    } else if (currentElement !== app.element) {
      currentNativeElement = patch(rootId, currentElement, app.element, currentNativeElement)
      currentElement = app.element
      updateChildren(rootId)
    } else {
      updateChildren(rootId)
    }

    // Call mount events on all new entities
    flushMountQueue()

    // Allow rendering again.
    isRendering = false
  }

  /**
   * Call hooks for all new entities that have been created in
   * the last render from the bottom up.
   */

  function flushMountQueue () {
    while (mountQueue.length > 0) {
      var entityId = mountQueue.shift()
      var entity = entities[entityId]
      trigger('afterRender', entity, [entity.context, entity.nativeElement])
      trigger('afterMount', entity, [entity.context, entity.nativeElement, setState(entity)])
    }
  }

  /**
   * Clear the current scheduled frame
   */

  function clearFrame () {
    if (!frameId) return
    raf.cancel(frameId)
    frameId = 0
  }

  /**
   * Update a component.
   *
   * The entity is just the data object for a component instance.
   *
   * @param {String} id Component instance id.
   */

  function updateEntity (entityId) {
    var entity = entities[entityId]
    setSources(entity)

    if (!shouldUpdate(entity)) {
      commit(entity)
      return updateChildren(entityId)
    }

    var currentTree = entity.virtualElement
    var nextProps = entity.pendingProps
    var nextState = entity.pendingState
    var previousState = entity.context.state
    var previousProps = entity.context.props

    // hook before rendering. could modify state just before the render occurs.
    trigger('beforeUpdate', entity, [entity.context, nextProps, nextState])
    trigger('beforeRender', entity, [entity.context])

    // commit state and props.
    commit(entity)

    // re-render.
    var nextTree = renderEntity(entity)

    // if the tree is the same we can just skip this component
    // but we should still check the children to see if they're dirty.
    // This allows us to memoize the render function of components.
    if (nextTree === currentTree) return updateChildren(entityId)

    // apply new virtual tree to native dom.
    entity.nativeElement = patch(entityId, currentTree, nextTree, entity.nativeElement)
    entity.virtualElement = nextTree
    updateChildren(entityId)

    // trigger render hook
    trigger('afterRender', entity, [entity.context, entity.nativeElement])

    // trigger afterUpdate after all children have updated.
    trigger('afterUpdate', entity, [entity.context, previousProps, previousState, setState(entity)])
  }

  /**
   * Update all the children of an entity.
   *
   * @param {String} id Component instance id.
   */

  function updateChildren (entityId) {
    forEach(children[entityId], function (childId) {
      updateEntity(childId)
    })
  }

  /**
   * Remove all of the child entities of an entity
   *
   * @param {Entity} entity
   */

  function unmountChildren (entityId) {
    forEach(children[entityId], function (childId) {
      unmountEntity(childId)
    })
  }

  /**
   * Remove the root element. If this is called synchronously we need to
   * cancel any pending future updates.
   */

  function removeNativeElement () {
    clearFrame()
    removeElement(rootId, '0', currentNativeElement)
    currentNativeElement = null
  }

  /**
   * Create a native element from a virtual element.
   *
   * @param {String} entityId
   * @param {String} path
   * @param {Object} vnode
   *
   * @return {HTMLDocumentFragment}
   */

  function toNative (entityId, path, vnode) {
    switch (nodeType(vnode)) {
      case 'text': return toNativeText(vnode)
      case 'empty': return toNativeEmptyElement(entityId, path)
      case 'element': return toNativeElement(entityId, path, vnode)
      case 'component': return toNativeComponent(entityId, path, vnode)
    }
  }

  /**
   * Create a native text element from a virtual element.
   *
   * @param {Object} vnode
   */

  function toNativeText (text) {
    return document.createTextNode(text)
  }

  /**
   * Create a native element from a virtual element.
   */

  function toNativeElement (entityId, path, vnode) {
    var el
    var attributes = vnode.attributes
    var tagName = vnode.type
    var childNodes = vnode.children

    // create element either from pool or fresh.
    if (svg.isElement(tagName)) {
      el = document.createElementNS(svg.namespace, tagName)
    } else {
      el = document.createElement(tagName)
    }

    // set attributes.
    forEach(attributes, function (value, name) {
      setAttribute(entityId, path, el, name, value)
    })

    // add children.
    forEach(childNodes, function (child, i) {
      var childEl = toNative(entityId, path + '.' + i, child)
      if (!childEl.parentNode) el.appendChild(childEl)
    })

    // store keys on the native element for fast event handling.
    el.__entity__ = entityId
    el.__path__ = path

    return el
  }

  /**
   * Create a native element from a virtual element.
   */

  function toNativeEmptyElement (entityId, path) {
    var el = document.createElement('noscript')
    el.__entity__ = entityId
    el.__path__ = path
    return el
  }

  /**
   * Create a native element from a component.
   */

  function toNativeComponent (entityId, path, vnode) {
    var child = new Entity(vnode.type, assign({ children: vnode.children }, vnode.attributes), entityId)
    children[entityId][path] = child.id
    return mountEntity(child)
  }

  /**
   * Patch an element with the diff from two trees.
   */

  function patch (entityId, prev, next, el) {
    return diffNode('0', entityId, prev, next, el)
  }

  /**
   * Create a diff between two trees of nodes.
   */

  function diffNode (path, entityId, prev, next, el) {
    var leftType = nodeType(prev)
    var rightType = nodeType(next)

    // Type changed. This could be from element->text, text->ComponentA,
    // ComponentA->ComponentB etc. But NOT div->span. These are the same type
    // (ElementNode) but different tag name.
    if (leftType !== rightType) return replaceElement(entityId, path, el, next)

    switch (rightType) {
      case 'text': return diffText(prev, next, el)
      case 'empty': return el
      case 'element': return diffElement(path, entityId, prev, next, el)
      case 'component': return diffComponent(path, entityId, prev, next, el)
    }
  }

  /**
   * Diff two text nodes and update the element.
   */

  function diffText (previous, current, el) {
    if (current !== previous) el.data = current
    return el
  }

  /**
   * Diff the children of an ElementNode.
   */

  function diffChildren (path, entityId, prev, next, el) {
    var positions = []
    var hasKeys = false
    var childNodes = Array.prototype.slice.apply(el.childNodes)
    var leftKeys = reduce(prev.children, keyMapReducer, {})
    var rightKeys = reduce(next.children, keyMapReducer, {})
    var currentChildren = assign({}, children[entityId])

    function keyMapReducer (acc, child, i) {
      if (child && child.attributes && child.attributes.key != null) {
        acc[child.attributes.key] = {
          element: child,
          index: i
        }
        hasKeys = true
      }
      return acc
    }

    // Diff all of the nodes that have keys. This lets us re-used elements
    // instead of overriding them and lets us move them around.
    if (hasKeys) {
      // Removals
      forEach(leftKeys, function (leftNode, key) {
        if (rightKeys[key] == null) {
          var leftPath = path + '.' + leftNode.index
          removeElement(
            entityId,
            leftPath,
            childNodes[leftNode.index]
          )
        }
      })

      // Update nodes
      forEach(rightKeys, function (rightNode, key) {
        var leftNode = leftKeys[key]

        // We only want updates for now
        if (leftNode == null) return

        var leftPath = path + '.' + leftNode.index

        // Updated
        positions[rightNode.index] = diffNode(
          leftPath,
          entityId,
          leftNode.element,
          rightNode.element,
          childNodes[leftNode.index]
        )
      })

      // Update the positions of all child components and event handlers
      forEach(rightKeys, function (rightNode, key) {
        var leftNode = leftKeys[key]

        // We just want elements that have moved around
        if (leftNode == null || leftNode.index === rightNode.index) return

        var rightPath = path + '.' + rightNode.index
        var leftPath = path + '.' + leftNode.index

        // Update all the child component path positions to match
        // the latest positions if they've changed. This is a bit hacky.
        forEach(currentChildren, function (childId, childPath) {
          if (leftPath === childPath) {
            delete children[entityId][childPath]
            children[entityId][rightPath] = childId
          }
        })
      })

      // Now add all of the new nodes last in case their path
      // would have conflicted with one of the previous paths.
      forEach(rightKeys, function (rightNode, key) {
        var rightPath = path + '.' + rightNode.index
        if (leftKeys[key] == null) {
          positions[rightNode.index] = toNative(
            entityId,
            rightPath,
            rightNode.element
          )
        }
      })
    } else {
      var maxLength = Math.max(prev.children.length, next.children.length)
      // Now diff all of the nodes that don't have keys
      for (var i = 0; i < maxLength; i++) {
        var leftNode = prev.children[i]
        var rightNode = next.children[i]

        // Removals
        if (rightNode === undefined) {
          removeElement(
            entityId,
            path + '.' + i,
            childNodes[i]
          )
          continue
        }

        // New Node
        if (leftNode === undefined) {
          positions[i] = toNative(
            entityId,
            path + '.' + i,
            rightNode
          )
          continue
        }

        // Updated
        positions[i] = diffNode(
          path + '.' + i,
          entityId,
          leftNode,
          rightNode,
          childNodes[i]
        )
      }
    }

    // Reposition all the elements
    forEach(positions, function (childEl, newPosition) {
      var target = el.childNodes[newPosition]
      if (childEl && childEl !== target) {
        if (target) {
          el.insertBefore(childEl, target)
        } else {
          el.appendChild(childEl)
        }
      }
    })
  }

  /**
   * Diff the attributes and add/remove them.
   */

  function diffAttributes (prev, next, el, entityId, path) {
    var nextAttrs = next.attributes
    var prevAttrs = prev.attributes

    // add new attrs
    forEach(nextAttrs, function (value, name) {
      if (events[name] || !(name in prevAttrs) || prevAttrs[name] !== value) {
        setAttribute(entityId, path, el, name, value)
      }
    })

    // remove old attrs
    forEach(prevAttrs, function (value, name) {
      if (!(name in nextAttrs)) {
        removeAttribute(entityId, path, el, name)
      }
    })
  }

  /**
   * Update a component with the props from the next node. If
   * the component type has changed, we'll just remove the old one
   * and replace it with the new component.
   */

  function diffComponent (path, entityId, prev, next, el) {
    if (next.type !== prev.type) {
      return replaceElement(entityId, path, el, next)
    } else {
      var targetId = children[entityId][path]

      // This is a hack for now
      if (targetId) {
        updateEntityProps(targetId, assign({ children: next.children }, next.attributes))
      }

      return el
    }
  }

  /**
   * Diff two element nodes.
   */

  function diffElement (path, entityId, prev, next, el) {
    if (next.type !== prev.type) return replaceElement(entityId, path, el, next)
    diffAttributes(prev, next, el, entityId, path)
    diffChildren(path, entityId, prev, next, el)
    return el
  }

  /**
   * Removes an element from the DOM and unmounts and components
   * that are within that branch
   *
   * side effects:
   *   - removes element from the DOM
   *   - removes internal references
   *
   * @param {String} entityId
   * @param {String} path
   * @param {HTMLElement} el
   */

  function removeElement (entityId, path, el) {
    var childrenByPath = children[entityId]
    var childId = childrenByPath[path]
    var entityHandlers = handlers[entityId] || {}
    var removals = []

    // If the path points to a component we should use that
    // components element instead, because it might have moved it.
    if (childId) {
      var child = entities[childId]
      el = child.nativeElement
      unmountEntity(childId)
      removals.push(path)
    } else {
      // Just remove the text node
      if (!isElement(el)) return el && el.parentNode.removeChild(el)
      // Then we need to find any components within this
      // branch and unmount them.
      forEach(childrenByPath, function (childId, childPath) {
        if (childPath === path || isWithinPath(path, childPath)) {
          unmountEntity(childId)
          removals.push(childPath)
        }
      })

      // Remove all events at this path or below it
      forEach(entityHandlers, function (fn, handlerPath) {
        if (handlerPath === path || isWithinPath(path, handlerPath)) {
          removeEvent(entityId, handlerPath)
        }
      })
    }

    // Remove the paths from the object without touching the
    // old object. This keeps the object using fast properties.
    forEach(removals, function (path) {
      delete children[entityId][path]
    })

    // Remove it from the DOM
    el.parentNode.removeChild(el)
  }

  /**
   * Replace an element in the DOM. Removing all components
   * within that element and re-rendering the new virtual node.
   *
   * @param {Entity} entity
   * @param {String} path
   * @param {HTMLElement} el
   * @param {Object} vnode
   *
   * @return {void}
   */

  function replaceElement (entityId, path, el, vnode) {
    var parent = el.parentNode
    var index = Array.prototype.indexOf.call(parent.childNodes, el)

    // remove the previous element and all nested components. This
    // needs to happen before we create the new element so we don't
    // get clashes on the component paths.
    removeElement(entityId, path, el)

    // then add the new element in there
    var newEl = toNative(entityId, path, vnode)
    var target = parent.childNodes[index]

    if (target) {
      parent.insertBefore(newEl, target)
    } else {
      parent.appendChild(newEl)
    }

    // walk up the tree and update all `entity.nativeElement` references.
    if (entityId !== 'root' && path === '0') {
      updateNativeElement(entityId, newEl)
    }

    return newEl
  }

  /**
   * Update all entities in a branch that have the same nativeElement. This
   * happens when a component has another component as it's root node.
   *
   * @param {String} entityId
   * @param {HTMLElement} newEl
   *
   * @return {void}
   */

  function updateNativeElement (entityId, newEl) {
    var target = entities[entityId]
    if (target.ownerId === 'root') return
    if (children[target.ownerId]['0'] === entityId) {
      entities[target.ownerId].nativeElement = newEl
      updateNativeElement(target.ownerId, newEl)
    }
  }

  /**
   * Set the attribute of an element, performing additional transformations
   * dependning on the attribute name
   *
   * @param {HTMLElement} el
   * @param {String} name
   * @param {String} value
   */

  function setAttribute (entityId, path, el, name, value) {
    if (!value && typeof value !== 'number') {
      removeAttribute(entityId, path, el, name)
      return
    }
    if (events[name]) {
      addEvent(entityId, path, events[name], value)
      return
    }
    switch (name) {
      case 'checked':
      case 'disabled':
      case 'selected':
        el[name] = true
        break
      case 'innerHTML':
        el.innerHTML = value
        break
      case 'value':
        setElementValue(el, value)
        break
      case svg.isAttribute(name):
        el.setAttributeNS(svg.namespace, name, value)
        break
      default:
        el.setAttribute(name, value)
        break
    }
  }

  /**
   * Remove an attribute, performing additional transformations
   * dependning on the attribute name
   *
   * @param {HTMLElement} el
   * @param {String} name
   */

  function removeAttribute (entityId, path, el, name) {
    if (events[name]) {
      removeEvent(entityId, path, events[name])
      return
    }
    switch (name) {
      case 'checked':
      case 'disabled':
      case 'selected':
        el[name] = false
        break
      case 'innerHTML':
        el.innerHTML = ''
        /* falls through */
      case 'value':
        setElementValue(el, null)
        break
      default:
        el.removeAttribute(name)
        break
    }
  }

  /**
   * Checks to see if one tree path is within
   * another tree path. Example:
   *
   * 0.1 vs 0.1.1 = true
   * 0.2 vs 0.3.5 = false
   *
   * @param {String} target
   * @param {String} path
   *
   * @return {Boolean}
   */

  function isWithinPath (target, path) {
    return path.indexOf(target + '.') === 0
  }

  /**
   * Is the DOM node an element node
   *
   * @param {HTMLElement} el
   *
   * @return {Boolean}
   */

  function isElement (el) {
    return !!(el && el.tagName)
  }

  /**
   * Remove all the child nodes from an element
   *
   * @param {HTMLElement} el
   */

  function removeAllChildren (el) {
    while (el.firstChild) el.removeChild(el.firstChild)
  }

  /**
   * Trigger a hook on a component.
   *
   * @param {String} name Name of hook.
   * @param {Entity} entity The component instance.
   * @param {Array} args To pass along to hook.
   */

  function trigger (name, entity, args) {
    if (typeof entity.component[name] !== 'function') return
    return entity.component[name].apply(null, args)
  }

  /**
   * Update an entity to match the latest rendered vode. We always
   * replace the props on the component when composing them. This
   * will trigger a re-render on all children below this point.
   *
   * @param {Entity} entity
   * @param {String} path
   * @param {Object} vnode
   *
   * @return {void}
   */

  function updateEntityProps (entityId, nextProps) {
    var entity = entities[entityId]
    entity.pendingProps = defaults({}, nextProps, entity.component.defaultProps || {})
    entity.dirty = true
    invalidate()
  }

  /**
   * Update component instance state.
   */

  function updateEntityState (entity, nextState) {
    entity.pendingState = assign(entity.pendingState, nextState)
    entity.dirty = true
    invalidate()
  }

  /**
   * Commit props and state changes to an entity.
   */

  function commit (entity) {
    entity.context = {
      state: entity.pendingState,
      props: entity.pendingProps,
      id: entity.id
    }
    entity.pendingState = assign({}, entity.context.state)
    entity.pendingProps = assign({}, entity.context.props)
    entity.dirty = false
    if (typeof entity.component.validate === 'function') {
      entity.component.validate(entity.context)
    }
  }

  /**
   * Try to avoid creating new virtual dom if possible.
   *
   * Later we may expose this so you can override, but not there yet.
   */

  function shouldUpdate (entity) {
    if (!entity.dirty) return false
    if (!entity.component.shouldUpdate) return true
    var nextProps = entity.pendingProps
    var nextState = entity.pendingState
    var bool = entity.component.shouldUpdate(entity.context, nextProps, nextState)
    return bool
  }

  /**
   * Register an entity.
   *
   * This is mostly to pre-preprocess component properties and values chains.
   *
   * The end result is for every component that gets mounted,
   * you create a set of IO nodes in the network from the `value` definitions.
   *
   * @param {Component} component
   */

  function register (entity) {
    registerEntity(entity)
    var component = entity.component
    if (component.registered) return

    // initialize sources once for a component type.
    registerSources(entity)
    component.registered = true
  }

  /**
   * Add entity to data-structures related to components/entities.
   *
   * @param {Entity} entity
   */

  function registerEntity (entity) {
    var component = entity.component
    // all entities for this component type.
    var entities = component.entities = component.entities || {}
    // add entity to component list
    entities[entity.id] = entity
    // map to component so you can remove later.
    components[entity.id] = component
  }

  /**
   * Initialize sources for a component by type.
   *
   * @param {Entity} entity
   */

  function registerSources (entity) {
    var component = components[entity.id]
    // get 'class-level' sources.
    // if we've already hooked it up, then we're good.
    var sources = component.sources
    if (sources) return
    var entities = component.entities

    // hook up sources.
    var map = component.sourceToPropertyName = {}
    component.sources = sources = []
    var propTypes = component.propTypes
    for (var name in propTypes) {
      var data = propTypes[name]
      if (!data) continue
      if (!data.source) continue
      sources.push(data.source)
      map[data.source] = name
    }

    // send value updates to all component instances.
    sources.forEach(function (source) {
      connections[source] = connections[source] || []
      connections[source].push(update)

      function update (data) {
        var prop = map[source]
        for (var entityId in entities) {
          var entity = entities[entityId]
          var changes = {}
          changes[prop] = data
          updateEntityProps(entityId, assign(entity.pendingProps, changes))
        }
      }
    })
  }

  /**
   * Set the initial source value on the entity
   *
   * @param {Entity} entity
   */

  function setSources (entity) {
    var component = entity.component
    var map = component.sourceToPropertyName
    var sources = component.sources
    sources.forEach(function (source) {
      var name = map[source]
      if (entity.pendingProps[name] != null) return
      entity.pendingProps[name] = app.sources[source] // get latest value plugged into global store
    })
  }

  /**
   * Add all of the DOM event listeners
   */

  function addNativeEventListeners () {
    forEach(events, function (eventType) {
      rootElement.addEventListener(eventType, handleEvent, true)
    })
  }

  /**
   * Add all of the DOM event listeners
   */

  function removeNativeEventListeners () {
    forEach(events, function (eventType) {
      rootElement.removeEventListener(eventType, handleEvent, true)
    })
  }

  /**
   * Handle an event that has occured within the container
   *
   * @param {Event} event
   */

  function handleEvent (event) {
    var target = event.target
    var eventType = event.type

    // Walk up the DOM tree and see if there is a handler
    // for this event type higher up.
    while (target) {
      var fn = keypath.get(handlers, [target.__entity__, target.__path__, eventType])
      if (fn) {
        event.delegateTarget = target
        if (fn(event) === false) break
      }
      target = target.parentNode
    }
  }

  /**
   * Bind events for an element, and all it's rendered child elements.
   *
   * @param {String} path
   * @param {String} event
   * @param {Function} fn
   */

  function addEvent (entityId, path, eventType, fn) {
    keypath.set(handlers, [entityId, path, eventType], function (e) {
      var entity = entities[entityId]
      if (entity) {
        return fn(e, entity.context, setState(entity))
      } else {
        return fn(e)
      }
    })
  }

  /**
   * Unbind events for a entityId
   *
   * @param {String} entityId
   */

  function removeEvent (entityId, path, eventType) {
    var args = [entityId]
    if (path) args.push(path)
    if (eventType) args.push(eventType)
    keypath.del(handlers, args)
  }

  /**
   * Unbind all events from an entity
   *
   * @param {Entity} entity
   */

  function removeAllEvents (entityId) {
    keypath.del(handlers, [entityId])
  }

  /**
   * Used for debugging to inspect the current state without
   * us needing to explicitly manage storing/updating references.
   *
   * @return {Object}
   */

  function inspect () {
    return {
      entities: entities,
      handlers: handlers,
      connections: connections,
      currentElement: currentElement,
      options: options,
      app: app,
      container: container,
      children: children
    }
  }

  /**
   * Return an object that lets us completely remove the automatic
   * DOM rendering and export debugging tools.
   */

  return {
    remove: teardown,
    inspect: inspect
  }
}

/**
 * A rendered component instance.
 *
 * This manages the lifecycle, props and state of the component.
 * It's basically just a data object for more straightfoward lookup.
 *
 * @param {Component} component
 * @param {Object} props
 */

function Entity (component, props, ownerId) {
  this.id = uid()
  this.ownerId = ownerId
  this.component = component
  this.propTypes = component.propTypes || {}
  this.context = {}
  this.context.id = this.id
  this.context.props = defaults(props || {}, component.defaultProps || {})
  this.context.state = this.component.initialState ? this.component.initialState(this.context.props) : {}
  this.pendingProps = assign({}, this.context.props)
  this.pendingState = assign({}, this.context.state)
  this.dirty = false
  this.virtualElement = null
  this.nativeElement = null
  this.displayName = component.name || 'Component'
}

/**
 * Retrieve the nearest 'body' ancestor of the given element or else the root
 * element of the document in which stands the given element.
 *
 * This is necessary if you want to attach the events handler to the correct
 * element and be able to dispatch events in document fragments such as
 * Shadow DOM.
 *
 * @param  {HTMLElement} el The element on which we will render an app.
 * @return {HTMLElement}    The root element on which we will attach the events
 *                          handler.
 */

function getRootElement (el) {
  while (el.parentElement) {
    if (el.tagName === 'BODY' || !el.parentElement) {
      return el
    }
    el = el.parentElement
  }
  return el
}

/**
 * Set the value property of an element and keep the text selection
 * for input fields.
 *
 * @param {HTMLElement} el
 * @param {String} value
 */

function setElementValue (el, value) {
  if (el === document.activeElement && canSelectText(el)) {
    var start = el.selectionStart
    var end = el.selectionEnd
    el.value = value
    el.setSelectionRange(start, end)
  } else {
    el.value = value
  }
}

/**
 * For some reason only certain types of inputs can set the selection range.
 *
 * @param {HTMLElement} el
 *
 * @return {Boolean}
 */

function canSelectText (el) {
  return el.tagName === 'INPUT' && ['text', 'search', 'password', 'tel', 'url'].indexOf(el.type) > -1
}

},{"./events":12,"./node-type":14,"./svg":17,"component-raf":9,"fast.js/forEach":26,"fast.js/object/assign":29,"fast.js/reduce":32,"get-uid":37,"is-dom":40,"object-defaults":44,"object-path":47}],16:[function(require,module,exports){
var defaults = require('object-defaults')
var nodeType = require('./node-type')
var type = require('component-type')

/**
 * Expose `stringify`.
 */

module.exports = function (app) {
  if (!app.element) {
    throw new Error('No element mounted')
  }

  /**
   * Render to string.
   *
   * @param {Component} component
   * @param {Object} [props]
   * @return {String}
   */

  function stringify (component, optProps, children) {
    var propTypes = component.propTypes || {}
    var props = defaults(optProps || {}, component.defaultProps || {})
    var state = component.initialState ? component.initialState(props) : {}
    props.children = children

    for (var name in propTypes) {
      var options = propTypes[name]
      if (options.source) {
        props[name] = app.sources[options.source]
      }
    }

    if (component.beforeMount) component.beforeMount({ props: props, state: state })
    if (component.beforeRender) component.beforeRender({ props: props, state: state })
    var node = component.render({ props: props, state: state })
    return stringifyNode(node, '0')
  }

  /**
   * Render a node to a string
   *
   * @param {Node} node
   * @param {Tree} tree
   *
   * @return {String}
   */

  function stringifyNode (node, path) {
    switch (nodeType(node)) {
      case 'empty': return '<noscript />'
      case 'text': return node
      case 'element':
        var children = node.children
        var attributes = node.attributes
        var tagName = node.type
        var innerHTML = attributes.innerHTML
        var str = '<' + tagName + attrs(attributes) + '>'

        if (innerHTML) {
          str += innerHTML
        } else {
          for (var i = 0, n = children.length; i < n; i++) {
            str += stringifyNode(children[i], path + '.' + i)
          }
        }

        str += '</' + tagName + '>'
        return str
      case 'component': return stringify(node.type, node.attributes, node.children)
    }

    throw new Error('Invalid type')
  }

  return stringifyNode(app.element, '0')
}

/**
 * HTML attributes to string.
 *
 * @param {Object} attributes
 * @return {String}
 * @api private
 */

function attrs (attributes) {
  var str = ''
  for (var key in attributes) {
    var value = attributes[key]
    if (key === 'innerHTML') continue
    if (isValidAttributeValue(value)) str += attr(key, attributes[key])
  }
  return str
}

/**
 * HTML attribute to string.
 *
 * @param {String} key
 * @param {String} val
 * @return {String}
 * @api private
 */

function attr (key, val) {
  return ' ' + key + '="' + val + '"'
}

/**
 * Is a value able to be set a an attribute value?
 *
 * @param {Any} value
 *
 * @return {Boolean}
 */

function isValidAttributeValue (value) {
  var valueType = type(value)
  switch (valueType) {
    case 'string':
    case 'number':
      return true

    case 'boolean':
      return value

    default:
      return false
  }
}

},{"./node-type":14,"component-type":18,"object-defaults":44}],17:[function(require,module,exports){
module.exports = {
  isElement: require('is-svg-element').isElement,
  isAttribute: require('is-svg-attribute'),
  namespace: 'http://www.w3.org/2000/svg'
}

},{"is-svg-attribute":41,"is-svg-element":42}],18:[function(require,module,exports){
(function (Buffer){
/**
 * toString ref.
 */

var toString = Object.prototype.toString;

/**
 * Return the type of `val`.
 *
 * @param {Mixed} val
 * @return {String}
 * @api public
 */

module.exports = function(val){
  switch (toString.call(val)) {
    case '[object Date]': return 'date';
    case '[object RegExp]': return 'regexp';
    case '[object Arguments]': return 'arguments';
    case '[object Array]': return 'array';
    case '[object Error]': return 'error';
  }

  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (val !== val) return 'nan';
  if (val && val.nodeType === 1) return 'element';

  if (typeof Buffer != 'undefined' && Buffer.isBuffer(val)) return 'buffer';

  val = val.valueOf
    ? val.valueOf()
    : Object.prototype.valueOf.apply(val)

  return typeof val;
};

}).call(this,require("buffer").Buffer)

},{"buffer":5}],19:[function(require,module,exports){
/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = classie;
} else {
  // browser global
  window.classie = classie;
}

})( window );

},{}],20:[function(require,module,exports){
/*!
 * getStyleProperty v1.0.4
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false, exports: false, module: false */

( function( window ) {

'use strict';

var prefixes = 'Webkit Moz ms Ms O'.split(' ');
var docElemStyle = document.documentElement.style;

function getStyleProperty( propName ) {
  if ( !propName ) {
    return;
  }

  // test standard property first
  if ( typeof docElemStyle[ propName ] === 'string' ) {
    return propName;
  }

  // capitalize
  propName = propName.charAt(0).toUpperCase() + propName.slice(1);

  // test vendor specific properties
  var prefixed;
  for ( var i=0, len = prefixes.length; i < len; i++ ) {
    prefixed = prefixes[i] + propName;
    if ( typeof docElemStyle[ prefixed ] === 'string' ) {
      return prefixed;
    }
  }
}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( function() {
    return getStyleProperty;
  });
} else if ( typeof exports === 'object' ) {
  // CommonJS for Component
  module.exports = getStyleProperty;
} else {
  // browser global
  window.getStyleProperty = getStyleProperty;
}

})( window );

},{}],21:[function(require,module,exports){
/**
 * matchesSelector v1.0.3
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */

( function( ElemProto ) {

  'use strict';

  var matchesMethod = ( function() {
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0, len = prefixes.length; i < len; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  // ----- match ----- //

  function match( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  }

  // ----- appendToFragment ----- //

  function checkParent( elem ) {
    // not needed if already has parent
    if ( elem.parentNode ) {
      return;
    }
    var fragment = document.createDocumentFragment();
    fragment.appendChild( elem );
  }

  // ----- query ----- //

  // fall back to using QSA
  // thx @jonathantneal https://gist.github.com/3062955
  function query( elem, selector ) {
    // append to fragment if no parent
    checkParent( elem );

    // match elem with all selected elems of parent
    var elems = elem.parentNode.querySelectorAll( selector );
    for ( var i=0, len = elems.length; i < len; i++ ) {
      // return true if match
      if ( elems[i] === elem ) {
        return true;
      }
    }
    // otherwise return false
    return false;
  }

  // ----- matchChild ----- //

  function matchChild( elem, selector ) {
    checkParent( elem );
    return match( elem, selector );
  }

  // ----- matchesSelector ----- //

  var matchesSelector;

  if ( matchesMethod ) {
    // IE9 supports matchesSelector, but doesn't work on orphaned elems
    // check for that
    var div = document.createElement('div');
    var supportsOrphans = match( div, 'div' );
    matchesSelector = supportsOrphans ? match : matchChild;
  } else {
    matchesSelector = query;
  }

  // transport
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( function() {
      return matchesSelector;
    });
  } else if ( typeof exports === 'object' ) {
    module.exports = matchesSelector;
  }
  else {
    // browser global
    window.matchesSelector = matchesSelector;
  }

})( Element.prototype );

},{}],22:[function(require,module,exports){
/*!
 * docReady v1.0.3
 * Cross browser DOMContentLoaded event emitter
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true*/
/*global define: false, require: false, module: false */

( function( window ) {

'use strict';

var document = window.document;
// collection of functions to be triggered on ready
var queue = [];

function docReady( fn ) {
  // throw out non-functions
  if ( typeof fn !== 'function' ) {
    return;
  }

  if ( docReady.isReady ) {
    // ready now, hit it
    fn();
  } else {
    // queue function when ready
    queue.push( fn );
  }
}

docReady.isReady = false;

// triggered on various doc ready events
function init( event ) {
  // bail if IE8 document is not ready just yet
  var isIE8NotReady = event.type === 'readystatechange' && document.readyState !== 'complete';
  if ( docReady.isReady || isIE8NotReady ) {
    return;
  }
  docReady.isReady = true;

  // process queue
  for ( var i=0, len = queue.length; i < len; i++ ) {
    var fn = queue[i];
    fn();
  }
}

function defineDocReady( eventie ) {
  eventie.bind( document, 'DOMContentLoaded', init );
  eventie.bind( document, 'readystatechange', init );
  eventie.bind( window, 'load', init );

  return docReady;
}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  // if RequireJS, then doc is already ready
  docReady.isReady = typeof requirejs === 'function';
  define( [ 'eventie/eventie' ], defineDocReady );
} else if ( typeof exports === 'object' ) {
  module.exports = defineDocReady( require('eventie') );
} else {
  // browser global
  window.docReady = defineDocReady( window.eventie );
}

})( window );

},{"eventie":23}],23:[function(require,module,exports){
/*!
 * eventie v1.0.6
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true */
/*global define: false, module: false */

( function( window ) {

'use strict';

var docElem = document.documentElement;

var bind = function() {};

function getIEEvent( obj ) {
  var event = window.event;
  // add event.target
  event.target = event.target || event.srcElement || obj;
  return event;
}

if ( docElem.addEventListener ) {
  bind = function( obj, type, fn ) {
    obj.addEventListener( type, fn, false );
  };
} else if ( docElem.attachEvent ) {
  bind = function( obj, type, fn ) {
    obj[ type + fn ] = fn.handleEvent ?
      function() {
        var event = getIEEvent( obj );
        fn.handleEvent.call( fn, event );
      } :
      function() {
        var event = getIEEvent( obj );
        fn.call( obj, event );
      };
    obj.attachEvent( "on" + type, obj[ type + fn ] );
  };
}

var unbind = function() {};

if ( docElem.removeEventListener ) {
  unbind = function( obj, type, fn ) {
    obj.removeEventListener( type, fn, false );
  };
} else if ( docElem.detachEvent ) {
  unbind = function( obj, type, fn ) {
    obj.detachEvent( "on" + type, obj[ type + fn ] );
    try {
      delete obj[ type + fn ];
    } catch ( err ) {
      // can't delete window object properties
      obj[ type + fn ] = undefined;
    }
  };
}

var eventie = {
  bind: bind,
  unbind: unbind
};

// ----- module definition ----- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( eventie );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = eventie;
} else {
  // browser global
  window.eventie = eventie;
}

})( window );

},{}],24:[function(require,module,exports){
'use strict';

var bindInternal3 = require('../function/bindInternal3');

/**
 * # For Each
 *
 * A fast `.forEach()` implementation.
 *
 * @param  {Array}    subject     The array (or array-like) to iterate over.
 * @param  {Function} fn          The visitor function.
 * @param  {Object}   thisContext The context for the visitor.
 */
module.exports = function fastForEach (subject, fn, thisContext) {
  var length = subject.length,
      iterator = thisContext !== undefined ? bindInternal3(fn, thisContext) : fn,
      i;
  for (i = 0; i < length; i++) {
    iterator(subject[i], i, subject);
  }
};

},{"../function/bindInternal3":27}],25:[function(require,module,exports){
'use strict';

var bindInternal4 = require('../function/bindInternal4');

/**
 * # Reduce
 *
 * A fast `.reduce()` implementation.
 *
 * @param  {Array}    subject      The array (or array-like) to reduce.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */
module.exports = function fastReduce (subject, fn, initialValue, thisContext) {
  var length = subject.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i, result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[0];
  }
  else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    result = iterator(result, subject[i], i, subject);
  }

  return result;
};

},{"../function/bindInternal4":28}],26:[function(require,module,exports){
'use strict';

var forEachArray = require('./array/forEach'),
    forEachObject = require('./object/forEach');

/**
 * # ForEach
 *
 * A fast `.forEach()` implementation.
 *
 * @param  {Array|Object} subject     The array or object to iterate over.
 * @param  {Function}     fn          The visitor function.
 * @param  {Object}       thisContext The context for the visitor.
 */
module.exports = function fastForEach (subject, fn, thisContext) {
  if (subject instanceof Array) {
    return forEachArray(subject, fn, thisContext);
  }
  else {
    return forEachObject(subject, fn, thisContext);
  }
};
},{"./array/forEach":24,"./object/forEach":30}],27:[function(require,module,exports){
'use strict';

/**
 * Internal helper to bind a function known to have 3 arguments
 * to a given context.
 */
module.exports = function bindInternal3 (func, thisContext) {
  return function (a, b, c) {
    return func.call(thisContext, a, b, c);
  };
};

},{}],28:[function(require,module,exports){
'use strict';

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */
module.exports = function bindInternal4 (func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

},{}],29:[function(require,module,exports){
'use strict';

/**
 * Analogue of Object.assign().
 * Copies properties from one or more source objects to
 * a target object. Existing keys on the target object will be overwritten.
 *
 * > Note: This differs from spec in some important ways:
 * > 1. Will throw if passed non-objects, including `undefined` or `null` values.
 * > 2. Does not support the curious Exception handling behavior, exceptions are thrown immediately.
 * > For more details, see:
 * > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 *
 *
 *
 * @param  {Object} target      The target object to copy properties to.
 * @param  {Object} source, ... The source(s) to copy properties from.
 * @return {Object}             The updated target object.
 */
module.exports = function fastAssign (target) {
  var totalArgs = arguments.length,
      source, i, totalKeys, keys, key, j;

  for (i = 1; i < totalArgs; i++) {
    source = arguments[i];
    keys = Object.keys(source);
    totalKeys = keys.length;
    for (j = 0; j < totalKeys; j++) {
      key = keys[j];
      target[key] = source[key];
    }
  }
  return target;
};

},{}],30:[function(require,module,exports){
'use strict';

var bindInternal3 = require('../function/bindInternal3');

/**
 * # For Each
 *
 * A fast object `.forEach()` implementation.
 *
 * @param  {Object}   subject     The object to iterate over.
 * @param  {Function} fn          The visitor function.
 * @param  {Object}   thisContext The context for the visitor.
 */
module.exports = function fastForEachObject (subject, fn, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal3(fn, thisContext) : fn,
      key, i;
  for (i = 0; i < length; i++) {
    key = keys[i];
    iterator(subject[key], key, subject);
  }
};

},{"../function/bindInternal3":27}],31:[function(require,module,exports){
'use strict';

var bindInternal4 = require('../function/bindInternal4');

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */
module.exports = function fastReduceObject (subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i, key, result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  }
  else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

},{"../function/bindInternal4":28}],32:[function(require,module,exports){
'use strict';

var reduceArray = require('./array/reduce'),
    reduceObject = require('./object/reduce');

/**
 * # Reduce
 *
 * A fast `.reduce()` implementation.
 *
 * @param  {Array|Object} subject      The array or object to reduce over.
 * @param  {Function}     fn           The reducer function.
 * @param  {mixed}        initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}       thisContext  The context for the reducer.
 * @return {Array|Object}              The array or object containing the results.
 */
module.exports = function fastReduce (subject, fn, initialValue, thisContext) {
  if (subject instanceof Array) {
    return reduceArray(subject, fn, initialValue, thisContext);
  }
  else {
    return reduceObject(subject, fn, initialValue, thisContext);
  }
};
},{"./array/reduce":25,"./object/reduce":31}],33:[function(require,module,exports){
/**
 * Fizzy UI utils v1.0.1
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  /*global define: false, module: false, require: false */
  'use strict';
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'doc-ready/doc-ready',
      'matches-selector/matches-selector'
    ], function( docReady, matchesSelector ) {
      return factory( window, docReady, matchesSelector );
    });
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('doc-ready'),
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.docReady,
      window.matchesSelector
    );
  }

}( window, function factory( window, docReady, matchesSelector ) {

'use strict';

var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- isArray ----- //
  
var objToString = Object.prototype.toString;
utils.isArray = function( obj ) {
  return objToString.call( obj ) == '[object Array]';
};

// ----- makeArray ----- //

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  var ary = [];
  if ( utils.isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( obj && typeof obj.length == 'number' ) {
    // convert nodeList to array
    for ( var i=0, len = obj.length; i < len; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
};

// ----- indexOf ----- //

// index of helper cause IE8
utils.indexOf = Array.prototype.indexOf ? function( ary, obj ) {
    return ary.indexOf( obj );
  } : function( ary, obj ) {
    for ( var i=0, len = ary.length; i < len; i++ ) {
      if ( ary[i] === obj ) {
        return i;
      }
    }
    return -1;
  };

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = utils.indexOf( ary, obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- isElement ----- //

// http://stackoverflow.com/a/384380/182183
utils.isElement = ( typeof HTMLElement == 'function' || typeof HTMLElement == 'object' ) ?
  function isElementDOM2( obj ) {
    return obj instanceof HTMLElement;
  } :
  function isElementQuirky( obj ) {
    return obj && typeof obj == 'object' &&
      obj.nodeType == 1 && typeof obj.nodeName == 'string';
  };

// ----- setText ----- //

utils.setText = ( function() {
  var setTextProperty;
  function setText( elem, text ) {
    // only check setTextProperty once
    setTextProperty = setTextProperty || ( document.documentElement.textContent !== undefined ? 'textContent' : 'innerText' );
    elem[ setTextProperty ] = text;
  }
  return setText;
})();

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    // check that elem is an actual element
    if ( !utils.isElement( elem ) ) {
      continue;
    }
    // filter & find items if we have a selector
    if ( selector ) {
      // filter siblings
      if ( matchesSelector( elem, selector ) ) {
        ffElems.push( elem );
      }
      // find children
      var childElems = elem.querySelectorAll( selector );
      // concat childElems to filterFound array
      for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
        ffElems.push( childElems[j] );
      }
    } else {
      ffElems.push( elem );
    }
  }

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    if ( timeout ) {
      clearTimeout( timeout );
    }
    var args = arguments;

    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold || 100 );
  };
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-option attribute
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var elems = document.querySelectorAll( '.js-' + dashedNamespace );
    var dataAttr = 'data-' + dashedNamespace + '-options';

    for ( var i=0, len = elems.length; i < len; i++ ) {
      var elem = elems[i];
      var attr = elem.getAttribute( dataAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' +
            elem.nodeName.toLowerCase() + ( elem.id ? '#' + elem.id : '' ) + ': ' +
            error );
        }
        continue;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('layoutname')
      var jQuery = window.jQuery;
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    }
  });
};

// -----  ----- //

return utils;

}));

},{"desandro-matches-selector":21,"doc-ready":22}],34:[function(require,module,exports){
/*!
 * for-in <https://github.com/jonschlinkert/for-in>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function forIn(o, fn, thisArg) {
  for (var key in o) {
    if (fn.call(thisArg, o[key], key, o) === false) {
      break;
    }
  }
};
},{}],35:[function(require,module,exports){
/*!
 * for-own <https://github.com/jonschlinkert/for-own>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var forIn = require('for-in');
var hasOwn = Object.prototype.hasOwnProperty;

module.exports = function forOwn(o, fn, thisArg) {
  forIn(o, function (val, key) {
    if (hasOwn.call(o, key)) {
      return fn.call(thisArg, o[key], key, o);
    }
  });
};

},{"for-in":34}],36:[function(require,module,exports){
/*!
 * getSize v1.2.2
 * measure size of elements
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, exports: false, require: false, module: false, console: false */

( function( window, undefined ) {

'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') === -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console === 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0, len = measurements.length; i < len; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}



function defineGetSize( getStyleProperty ) {

// -------------------------- setup -------------------------- //

var isSetup = false;

var getStyle, boxSizingProp, isBoxSizeOuter;

/**
 * setup vars and functions
 * do it on initial getSize(), rather than on script load
 * For Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  var getComputedStyle = window.getComputedStyle;
  getStyle = ( function() {
    var getStyleFn = getComputedStyle ?
      function( elem ) {
        return getComputedStyle( elem, null );
      } :
      function( elem ) {
        return elem.currentStyle;
      };

      return function getStyle( elem ) {
        var style = getStyleFn( elem );
        if ( !style ) {
          logError( 'Style returned ' + style +
            '. Are you running this code in a hidden iframe on Firefox? ' +
            'See http://bit.ly/getsizebug1' );
        }
        return style;
      };
  })();

  // -------------------------- box sizing -------------------------- //

  boxSizingProp = getStyleProperty('boxSizing');

  /**
   * WebKit measures the outer-width on style.width on border-box elems
   * IE & Firefox measures the inner-width
   */
  if ( boxSizingProp ) {
    var div = document.createElement('div');
    div.style.width = '200px';
    div.style.padding = '1px 2px 3px 4px';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '1px 2px 3px 4px';
    div.style[ boxSizingProp ] = 'border-box';

    var body = document.body || document.documentElement;
    body.appendChild( div );
    var style = getStyle( div );

    isBoxSizeOuter = getStyleSize( style.width ) === 200;
    body.removeChild( div );
  }

}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem === 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem !== 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display === 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = !!( boxSizingProp &&
    style[ boxSizingProp ] && style[ boxSizingProp ] === 'border-box' );

  // get all measurements
  for ( var i=0, len = measurements.length; i < len; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    value = mungeNonPixel( elem, value );
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

// IE8 returns percent values, not pixels
// taken from jQuery's curCSS
function mungeNonPixel( elem, value ) {
  // IE8 and has percent value
  if ( window.getComputedStyle || value.indexOf('%') === -1 ) {
    return value;
  }
  var style = elem.style;
  // Remember the original values
  var left = style.left;
  var rs = elem.runtimeStyle;
  var rsLeft = rs && rs.left;

  // Put in the new values to get a computed value out
  if ( rsLeft ) {
    rs.left = elem.currentStyle.left;
  }
  style.left = value;
  value = style.pixelLeft;

  // Revert the changed values
  style.left = left;
  if ( rsLeft ) {
    rs.left = rsLeft;
  }

  return value;
}

return getSize;

}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD for RequireJS
  define( [ 'get-style-property/get-style-property' ], defineGetSize );
} else if ( typeof exports === 'object' ) {
  // CommonJS for Component
  module.exports = defineGetSize( require('desandro-get-style-property') );
} else {
  // browser global
  window.getSize = defineGetSize( window.getStyleProperty );
}

})( window );

},{"desandro-get-style-property":20}],37:[function(require,module,exports){
/** generate unique id for selector */
var counter = Date.now() % 1e9;

module.exports = function getUid(){
	return (Math.random() * 1e9 >>> 0) + (counter++);
};
},{}],38:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],39:[function(require,module,exports){
/*!
 * imagesLoaded v3.2.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'eventEmitter/EventEmitter',
      'eventie/eventie'
    ], function( EventEmitter, eventie ) {
      return factory( window, EventEmitter, eventie );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('wolfy87-eventemitter'),
      require('eventie')
    );
  } else {
    // browser global
    window.imagesLoaded = factory(
      window,
      window.EventEmitter,
      window.eventie
    );
  }

})( window,

// --------------------------  factory -------------------------- //

function factory( window, EventEmitter, eventie ) {

'use strict';

var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var objToString = Object.prototype.toString;
function isArray( obj ) {
  return objToString.call( obj ) == '[object Array]';
}

// turn element or nodeList into an array
function makeArray( obj ) {
  var ary = [];
  if ( isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( typeof obj.length == 'number' ) {
    // convert nodeList to array
    for ( var i=0; i < obj.length; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
}

  // -------------------------- imagesLoaded -------------------------- //

  /**
   * @param {Array, Element, NodeList, String} elem
   * @param {Object or Function} options - if function, use as callback
   * @param {Function} onAlways - callback function
   */
  function ImagesLoaded( elem, options, onAlways ) {
    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
    if ( !( this instanceof ImagesLoaded ) ) {
      return new ImagesLoaded( elem, options, onAlways );
    }
    // use elem as selector string
    if ( typeof elem == 'string' ) {
      elem = document.querySelectorAll( elem );
    }

    this.elements = makeArray( elem );
    this.options = extend( {}, this.options );

    if ( typeof options == 'function' ) {
      onAlways = options;
    } else {
      extend( this.options, options );
    }

    if ( onAlways ) {
      this.on( 'always', onAlways );
    }

    this.getImages();

    if ( $ ) {
      // add jQuery Deferred object
      this.jqDeferred = new $.Deferred();
    }

    // HACK check async to allow time to bind listeners
    var _this = this;
    setTimeout( function() {
      _this.check();
    });
  }

  ImagesLoaded.prototype = new EventEmitter();

  ImagesLoaded.prototype.options = {};

  ImagesLoaded.prototype.getImages = function() {
    this.images = [];

    // filter & find items if we have an item selector
    for ( var i=0; i < this.elements.length; i++ ) {
      var elem = this.elements[i];
      this.addElementImages( elem );
    }
  };

  /**
   * @param {Node} element
   */
  ImagesLoaded.prototype.addElementImages = function( elem ) {
    // filter siblings
    if ( elem.nodeName == 'IMG' ) {
      this.addImage( elem );
    }
    // get background image on element
    if ( this.options.background === true ) {
      this.addElementBackgroundImages( elem );
    }

    // find children
    // no non-element nodes, #143
    var nodeType = elem.nodeType;
    if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
      return;
    }
    var childImgs = elem.querySelectorAll('img');
    // concat childElems to filterFound array
    for ( var i=0; i < childImgs.length; i++ ) {
      var img = childImgs[i];
      this.addImage( img );
    }

    // get child background images
    if ( typeof this.options.background == 'string' ) {
      var children = elem.querySelectorAll( this.options.background );
      for ( i=0; i < children.length; i++ ) {
        var child = children[i];
        this.addElementBackgroundImages( child );
      }
    }
  };

  var elementNodeTypes = {
    1: true,
    9: true,
    11: true
  };

  ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
    var style = getStyle( elem );
    // get url inside url("...")
    var reURL = /url\(['"]*([^'"\)]+)['"]*\)/gi;
    var matches = reURL.exec( style.backgroundImage );
    while ( matches !== null ) {
      var url = matches && matches[1];
      if ( url ) {
        this.addBackground( url, elem );
      }
      matches = reURL.exec( style.backgroundImage );
    }
  };

  // IE8
  var getStyle = window.getComputedStyle || function( elem ) {
    return elem.currentStyle;
  };

  /**
   * @param {Image} img
   */
  ImagesLoaded.prototype.addImage = function( img ) {
    var loadingImage = new LoadingImage( img );
    this.images.push( loadingImage );
  };

  ImagesLoaded.prototype.addBackground = function( url, elem ) {
    var background = new Background( url, elem );
    this.images.push( background );
  };

  ImagesLoaded.prototype.check = function() {
    var _this = this;
    this.progressedCount = 0;
    this.hasAnyBroken = false;
    // complete if no images
    if ( !this.images.length ) {
      this.complete();
      return;
    }

    function onProgress( image, elem, message ) {
      // HACK - Chrome triggers event before object properties have changed. #83
      setTimeout( function() {
        _this.progress( image, elem, message );
      });
    }

    for ( var i=0; i < this.images.length; i++ ) {
      var loadingImage = this.images[i];
      loadingImage.once( 'progress', onProgress );
      loadingImage.check();
    }
  };

  ImagesLoaded.prototype.progress = function( image, elem, message ) {
    this.progressedCount++;
    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
    // progress event
    this.emit( 'progress', this, image, elem );
    if ( this.jqDeferred && this.jqDeferred.notify ) {
      this.jqDeferred.notify( this, image );
    }
    // check if completed
    if ( this.progressedCount == this.images.length ) {
      this.complete();
    }

    if ( this.options.debug && console ) {
      console.log( 'progress: ' + message, image, elem );
    }
  };

  ImagesLoaded.prototype.complete = function() {
    var eventName = this.hasAnyBroken ? 'fail' : 'done';
    this.isComplete = true;
    this.emit( eventName, this );
    this.emit( 'always', this );
    if ( this.jqDeferred ) {
      var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
      this.jqDeferred[ jqMethod ]( this );
    }
  };

  // --------------------------  -------------------------- //

  function LoadingImage( img ) {
    this.img = img;
  }

  LoadingImage.prototype = new EventEmitter();

  LoadingImage.prototype.check = function() {
    // If complete is true and browser supports natural sizes,
    // try to check for image status manually.
    var isComplete = this.getIsImageComplete();
    if ( isComplete ) {
      // report based on naturalWidth
      this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
      return;
    }

    // If none of the checks above matched, simulate loading on detached element.
    this.proxyImage = new Image();
    eventie.bind( this.proxyImage, 'load', this );
    eventie.bind( this.proxyImage, 'error', this );
    // bind to image as well for Firefox. #191
    eventie.bind( this.img, 'load', this );
    eventie.bind( this.img, 'error', this );
    this.proxyImage.src = this.img.src;
  };

  LoadingImage.prototype.getIsImageComplete = function() {
    return this.img.complete && this.img.naturalWidth !== undefined;
  };

  LoadingImage.prototype.confirm = function( isLoaded, message ) {
    this.isLoaded = isLoaded;
    this.emit( 'progress', this, this.img, message );
  };

  // ----- events ----- //

  // trigger specified handler for event type
  LoadingImage.prototype.handleEvent = function( event ) {
    var method = 'on' + event.type;
    if ( this[ method ] ) {
      this[ method ]( event );
    }
  };

  LoadingImage.prototype.onload = function() {
    this.confirm( true, 'onload' );
    this.unbindEvents();
  };

  LoadingImage.prototype.onerror = function() {
    this.confirm( false, 'onerror' );
    this.unbindEvents();
  };

  LoadingImage.prototype.unbindEvents = function() {
    eventie.unbind( this.proxyImage, 'load', this );
    eventie.unbind( this.proxyImage, 'error', this );
    eventie.unbind( this.img, 'load', this );
    eventie.unbind( this.img, 'error', this );
  };

  // -------------------------- Background -------------------------- //

  function Background( url, element ) {
    this.url = url;
    this.element = element;
    this.img = new Image();
  }

  // inherit LoadingImage prototype
  Background.prototype = new LoadingImage();

  Background.prototype.check = function() {
    eventie.bind( this.img, 'load', this );
    eventie.bind( this.img, 'error', this );
    this.img.src = this.url;
    // check if image is already complete
    var isComplete = this.getIsImageComplete();
    if ( isComplete ) {
      this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
      this.unbindEvents();
    }
  };

  Background.prototype.unbindEvents = function() {
    eventie.unbind( this.img, 'load', this );
    eventie.unbind( this.img, 'error', this );
  };

  Background.prototype.confirm = function( isLoaded, message ) {
    this.isLoaded = isLoaded;
    this.emit( 'progress', this, this.element, message );
  };

  // -------------------------- jQuery -------------------------- //

  ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
    jQuery = jQuery || window.jQuery;
    if ( !jQuery ) {
      return;
    }
    // set local variable
    $ = jQuery;
    // $().imagesLoaded()
    $.fn.imagesLoaded = function( options, callback ) {
      var instance = new ImagesLoaded( this, options, callback );
      return instance.jqDeferred.promise( $(this) );
    };
  };
  // try making plugin
  ImagesLoaded.makeJQueryPlugin();

  // --------------------------  -------------------------- //

  return ImagesLoaded;

});

},{"eventie":23,"wolfy87-eventemitter":75}],40:[function(require,module,exports){
/*global window*/

/**
 * Check if object is dom node.
 *
 * @param {Object} val
 * @return {Boolean}
 * @api public
 */

module.exports = function isNode(val){
  if (!val || typeof val !== 'object') return false;
  if (window && 'object' == typeof window.Node) return val instanceof window.Node;
  return 'number' == typeof val.nodeType && 'string' == typeof val.nodeName;
}

},{}],41:[function(require,module,exports){
/**
 * Supported SVG attributes
 */

exports.attributes = {
  'cx': true,
  'cy': true,
  'd': true,
  'dx': true,
  'dy': true,
  'fill': true,
  'fillOpacity': true,
  'fontFamily': true,
  'fontSize': true,
  'fx': true,
  'fy': true,
  'gradientTransform': true,
  'gradientUnits': true,
  'markerEnd': true,
  'markerMid': true,
  'markerStart': true,
  'offset': true,
  'opacity': true,
  'patternContentUnits': true,
  'patternUnits': true,
  'points': true,
  'preserveAspectRatio': true,
  'r': true,
  'rx': true,
  'ry': true,
  'spreadMethod': true,
  'stopColor': true,
  'stopOpacity': true,
  'stroke': true,
  'strokeDasharray': true,
  'strokeLinecap': true,
  'strokeOpacity': true,
  'strokeWidth': true,
  'textAnchor': true,
  'transform': true,
  'version': true,
  'viewBox': true,
  'x1': true,
  'x2': true,
  'x': true,
  'y1': true,
  'y2': true,
  'y': true
}

/**
 * Are element's attributes SVG?
 *
 * @param {String} attr
 */

module.exports = function (attr) {
  return attr in exports.attributes
}

},{}],42:[function(require,module,exports){
/**
 * Supported SVG elements
 *
 * @type {Array}
 */

exports.elements = {
  'animate': true,
  'circle': true,
  'defs': true,
  'ellipse': true,
  'g': true,
  'line': true,
  'linearGradient': true,
  'mask': true,
  'path': true,
  'pattern': true,
  'polygon': true,
  'polyline': true,
  'radialGradient': true,
  'rect': true,
  'stop': true,
  'svg': true,
  'text': true,
  'tspan': true
}

/**
 * Is element's namespace SVG?
 *
 * @param {String} name
 */

exports.isElement = function (name) {
  return name in exports.elements
}

},{}],43:[function(require,module,exports){
var toStyle = require('to-style').string
var classnames = require('classnames')
var element = require('virtual-element')
var type = require('component-type')
var slice = require('sliced')

module.exports = function (t, attributes, children) {

  // Account for JSX putting the children as multiple arguments.
  // This is essentially just the ES6 rest param
  if (arguments.length > 2 && Array.isArray(arguments[2]) === false) {
    children = slice(arguments, 2)
  }

  var node = element(t, attributes, children)

  if (type(node.attributes.class) === 'array') {
    node.attributes.class = classnames.apply(null, node.attributes.class)
  }

  if (type(node.attributes.class) === 'object') {
    node.attributes.class = classnames(node.attributes.class)
  }

  if (type(node.attributes.style) === 'object') {
    node.attributes.style = toStyle(node.attributes.style)
  }

  return node
}

},{"classnames":7,"component-type":10,"sliced":54,"to-style":55,"virtual-element":72}],44:[function(require,module,exports){
'use strict'

module.exports = function(target) {
  target = target || {}

  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i]
    if (!source) continue

    Object.getOwnPropertyNames(source).forEach(function(key) {
      if (undefined === target[key])
        target[key] = source[key]
    })
  }

  return target
}

},{}],45:[function(require,module,exports){
/*!
 * object.omit <https://github.com/jonschlinkert/object.omit>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert.
 * Licensed under the MIT License
 */

'use strict';

var isObject = require('isobject');
var forOwn = require('for-own');

module.exports = function omit(obj, props) {
  if (obj == null || !isObject(obj)) {
    return {};
  }

  if (props == null) {
    return obj;
  }

  if (typeof props === 'string') {
    props = [].slice.call(arguments, 1);
  }

  var o = {};

  if (!Object.keys(obj).length) {
    return o;
  }

  forOwn(obj, function (value, key) {
    if (props.indexOf(key) === -1) {
      o[key] = value;
    }
  });
  return o;
};
},{"for-own":35,"isobject":46}],46:[function(require,module,exports){
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

/**
 * is the value an object, and not an array?
 *
 * @param  {*} `value`
 * @return {Boolean}
 */

module.exports = function isObject(o) {
  return o != null && typeof o === 'object'
    && !Array.isArray(o);
};
},{}],47:[function(require,module,exports){
(function (root, factory){
  'use strict';

  /*istanbul ignore next:cant test*/
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else {
    // Browser globals
    root.objectPath = factory();
  }
})(this, function(){
  'use strict';

  var
    toStr = Object.prototype.toString,
    _hasOwnProperty = Object.prototype.hasOwnProperty;

  function isEmpty(value){
    if (!value) {
      return true;
    }
    if (isArray(value) && value.length === 0) {
        return true;
    } else if (!isString(value)) {
        for (var i in value) {
            if (_hasOwnProperty.call(value, i)) {
                return false;
            }
        }
        return true;
    }
    return false;
  }

  function toString(type){
    return toStr.call(type);
  }

  function isNumber(value){
    return typeof value === 'number' || toString(value) === "[object Number]";
  }

  function isString(obj){
    return typeof obj === 'string' || toString(obj) === "[object String]";
  }

  function isObject(obj){
    return typeof obj === 'object' && toString(obj) === "[object Object]";
  }

  function isArray(obj){
    return typeof obj === 'object' && typeof obj.length === 'number' && toString(obj) === '[object Array]';
  }

  function isBoolean(obj){
    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
  }

  function getKey(key){
    var intKey = parseInt(key);
    if (intKey.toString() === key) {
      return intKey;
    }
    return key;
  }

  function set(obj, path, value, doNotReplace){
    if (isNumber(path)) {
      path = [path];
    }
    if (isEmpty(path)) {
      return obj;
    }
    if (isString(path)) {
      return set(obj, path.split('.').map(getKey), value, doNotReplace);
    }
    var currentPath = path[0];

    if (path.length === 1) {
      var oldVal = obj[currentPath];
      if (oldVal === void 0 || !doNotReplace) {
        obj[currentPath] = value;
      }
      return oldVal;
    }

    if (obj[currentPath] === void 0) {
      //check if we assume an array
      if(isNumber(path[1])) {
        obj[currentPath] = [];
      } else {
        obj[currentPath] = {};
      }
    }

    return set(obj[currentPath], path.slice(1), value, doNotReplace);
  }

  function del(obj, path) {
    if (isNumber(path)) {
      path = [path];
    }

    if (isEmpty(obj)) {
      return void 0;
    }

    if (isEmpty(path)) {
      return obj;
    }
    if(isString(path)) {
      return del(obj, path.split('.'));
    }

    var currentPath = getKey(path[0]);
    var oldVal = obj[currentPath];

    if(path.length === 1) {
      if (oldVal !== void 0) {
        if (isArray(obj)) {
          obj.splice(currentPath, 1);
        } else {
          delete obj[currentPath];
        }
      }
    } else {
      if (obj[currentPath] !== void 0) {
        return del(obj[currentPath], path.slice(1));
      }
    }

    return obj;
  }

  var objectPath = function(obj) {
    return Object.keys(objectPath).reduce(function(proxy, prop) {
      if (typeof objectPath[prop] === 'function') {
        proxy[prop] = objectPath[prop].bind(objectPath, obj);
      }

      return proxy;
    }, {});
  };

  objectPath.has = function (obj, path) {
    if (isEmpty(obj)) {
      return false;
    }

    if (isNumber(path)) {
      path = [path];
    } else if (isString(path)) {
      path = path.split('.');
    }

    if (isEmpty(path) || path.length === 0) {
      return false;
    }

    for (var i = 0; i < path.length; i++) {
      var j = path[i];
      if ((isObject(obj) || isArray(obj)) && _hasOwnProperty.call(obj, j)) {
        obj = obj[j];
      } else {
        return false;
      }
    }

    return true;
  };

  objectPath.ensureExists = function (obj, path, value){
    return set(obj, path, value, true);
  };

  objectPath.set = function (obj, path, value, doNotReplace){
    return set(obj, path, value, doNotReplace);
  };

  objectPath.insert = function (obj, path, value, at){
    var arr = objectPath.get(obj, path);
    at = ~~at;
    if (!isArray(arr)) {
      arr = [];
      objectPath.set(obj, path, arr);
    }
    arr.splice(at, 0, value);
  };

  objectPath.empty = function(obj, path) {
    if (isEmpty(path)) {
      return obj;
    }
    if (isEmpty(obj)) {
      return void 0;
    }

    var value, i;
    if (!(value = objectPath.get(obj, path))) {
      return obj;
    }

    if (isString(value)) {
      return objectPath.set(obj, path, '');
    } else if (isBoolean(value)) {
      return objectPath.set(obj, path, false);
    } else if (isNumber(value)) {
      return objectPath.set(obj, path, 0);
    } else if (isArray(value)) {
      value.length = 0;
    } else if (isObject(value)) {
      for (i in value) {
        if (_hasOwnProperty.call(value, i)) {
          delete value[i];
        }
      }
    } else {
      return objectPath.set(obj, path, null);
    }
  };

  objectPath.push = function (obj, path /*, values */){
    var arr = objectPath.get(obj, path);
    if (!isArray(arr)) {
      arr = [];
      objectPath.set(obj, path, arr);
    }

    arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
  };

  objectPath.coalesce = function (obj, paths, defaultValue) {
    var value;

    for (var i = 0, len = paths.length; i < len; i++) {
      if ((value = objectPath.get(obj, paths[i])) !== void 0) {
        return value;
      }
    }

    return defaultValue;
  };

  objectPath.get = function (obj, path, defaultValue){
    if (isNumber(path)) {
      path = [path];
    }
    if (isEmpty(path)) {
      return obj;
    }
    if (isEmpty(obj)) {
      return defaultValue;
    }
    if (isString(path)) {
      return objectPath.get(obj, path.split('.'), defaultValue);
    }

    var currentPath = getKey(path[0]);

    if (path.length === 1) {
      if (obj[currentPath] === void 0) {
        return defaultValue;
      }
      return obj[currentPath];
    }

    return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
  };

  objectPath.del = function(obj, path) {
    return del(obj, path);
  };

  return objectPath;
});

},{}],48:[function(require,module,exports){
/**
 * Outlayer Item
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( [
        'eventEmitter/EventEmitter',
        'get-size/get-size',
        'get-style-property/get-style-property',
        'fizzy-ui-utils/utils'
      ],
      function( EventEmitter, getSize, getStyleProperty, utils ) {
        return factory( window, EventEmitter, getSize, getStyleProperty, utils );
      }
    );
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory(
      window,
      require('wolfy87-eventemitter'),
      require('get-size'),
      require('desandro-get-style-property'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Outlayer = {};
    window.Outlayer.Item = factory(
      window,
      window.EventEmitter,
      window.getSize,
      window.getStyleProperty,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, EventEmitter, getSize, getStyleProperty, utils ) {
'use strict';

// ----- helpers ----- //

var getComputedStyle = window.getComputedStyle;
var getStyle = getComputedStyle ?
  function( elem ) {
    return getComputedStyle( elem, null );
  } :
  function( elem ) {
    return elem.currentStyle;
  };


function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //

var transitionProperty = getStyleProperty('transition');
var transformProperty = getStyleProperty('transform');
var supportsCSS3 = transitionProperty && transformProperty;
var is3d = !!getStyleProperty('perspective');

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'otransitionend',
  transition: 'transitionend'
}[ transitionProperty ];

// properties that could have vendor prefix
var prefixableProperties = [
  'transform',
  'transition',
  'transitionDuration',
  'transitionProperty'
];

// cache all vendor properties
var vendorProperties = ( function() {
  var cache = {};
  for ( var i=0, len = prefixableProperties.length; i < len; i++ ) {
    var prop = prefixableProperties[i];
    var supportedProp = getStyleProperty( prop );
    if ( supportedProp && supportedProp !== prop ) {
      cache[ prop ] = supportedProp;
    }
  }
  return cache;
})();

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EventEmitter
utils.extend( Item.prototype, EventEmitter.prototype );

Item.prototype._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
Item.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

Item.prototype.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
Item.prototype.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
Item.prototype.getPosition = function() {
  var style = getStyle( this.element );
  var layoutOptions = this.layout.options;
  var isOriginLeft = layoutOptions.isOriginLeft;
  var isOriginTop = layoutOptions.isOriginTop;
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  // convert percent to pixels
  var layoutSize = this.layout.size;
  var x = xValue.indexOf('%') != -1 ?
    ( parseFloat( xValue ) / 100 ) * layoutSize.width : parseInt( xValue, 10 );
  var y = yValue.indexOf('%') != -1 ?
    ( parseFloat( yValue ) / 100 ) * layoutSize.height : parseInt( yValue, 10 );

  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
Item.prototype.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var layoutOptions = this.layout.options;
  var style = {};

  // x
  var xPadding = layoutOptions.isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = layoutOptions.isOriginLeft ? 'left' : 'right';
  var xResetProperty = layoutOptions.isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = layoutOptions.isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = layoutOptions.isOriginTop ? 'top' : 'bottom';
  var yResetProperty = layoutOptions.isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

Item.prototype.getXValue = function( x ) {
  var layoutOptions = this.layout.options;
  return layoutOptions.percentPosition && !layoutOptions.isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

Item.prototype.getYValue = function( y ) {
  var layoutOptions = this.layout.options;
  return layoutOptions.percentPosition && layoutOptions.isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};


Item.prototype._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var compareX = parseInt( x, 10 );
  var compareY = parseInt( y, 10 );
  var didNotMove = compareX === this.position.x && compareY === this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

Item.prototype.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var layoutOptions = this.layout.options;
  x = layoutOptions.isOriginLeft ? x : -x;
  y = layoutOptions.isOriginTop ? y : -y;

  if ( is3d ) {
    return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
  }

  return 'translate(' + x + 'px, ' + y + 'px)';
};

// non transition + transform support
Item.prototype.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

// use transition and transforms if supported
Item.prototype.moveTo = supportsCSS3 ?
  Item.prototype._transitionTo : Item.prototype.goTo;

Item.prototype.setPosition = function( x, y ) {
  this.position.x = parseInt( x, 10 );
  this.position.y = parseInt( y, 10 );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
Item.prototype._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
Item.prototype._transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' +
  toDashedAll( vendorProperties.transform || 'transform' );

Item.prototype.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: this.layout.options.transitionDuration
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

Item.prototype.transition = Item.prototype[ transitionProperty ? '_transition' : '_nonTransition' ];

// ----- events ----- //

Item.prototype.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

Item.prototype.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform',
  '-moz-transform': 'transform',
  '-o-transform': 'transform'
};

Item.prototype.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

Item.prototype.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
Item.prototype._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: ''
};

Item.prototype.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- show/hide/remove ----- //

// remove element from DOM
Item.prototype.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

Item.prototype.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  var _this = this;
  this.once( 'transitionEnd', function() {
    _this.removeElem();
  });
  this.hide();
};

Item.prototype.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

Item.prototype.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
Item.prototype.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

Item.prototype.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

Item.prototype.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

Item.prototype.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));

},{"desandro-get-style-property":20,"fizzy-ui-utils":33,"get-size":36,"wolfy87-eventemitter":75}],49:[function(require,module,exports){
/*!
 * Outlayer v1.4.2
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
        'eventie/eventie',
        'eventEmitter/EventEmitter',
        'get-size/get-size',
        'fizzy-ui-utils/utils',
        './item'
      ],
      function( eventie, EventEmitter, getSize, utils, Item ) {
        return factory( window, eventie, EventEmitter, getSize, utils, Item);
      }
    );
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('eventie'),
      require('wolfy87-eventemitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./item')
    );
  } else {
    // browser global
    window.Outlayer = factory(
      window,
      window.eventie,
      window.EventEmitter,
      window.getSize,
      window.fizzyUIUtils,
      window.Outlayer.Item
    );
  }

}( window, function factory( window, eventie, EventEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  if ( this.options.isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  isInitLayout: true,
  isOriginLeft: true,
  isOriginTop: true,
  isResizeBound: true,
  isResizingContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

// inherit EventEmitter
utils.extend( Outlayer.prototype, EventEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
Outlayer.prototype.option = function( opts ) {
  utils.extend( this.options, opts );
};

Outlayer.prototype._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  if ( this.options.isResizeBound ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
Outlayer.prototype.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
Outlayer.prototype._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0, len = itemElems.length; i < len; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
Outlayer.prototype._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
Outlayer.prototype.getItemElements = function() {
  var elems = [];
  for ( var i=0, len = this.items.length; i < len; i++ ) {
    elems.push( this.items[i].element );
  }
  return elems;
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
Outlayer.prototype.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var isInstant = this.options.isLayoutInstant !== undefined ?
    this.options.isLayoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
Outlayer.prototype._init = Outlayer.prototype.layout;

/**
 * logic before any new layout
 */
Outlayer.prototype._resetLayout = function() {
  this.getSize();
};


Outlayer.prototype.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
Outlayer.prototype._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option === 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( utils.isElement( option ) ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
Outlayer.prototype.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
Outlayer.prototype._getItemsForLayout = function( items ) {
  var layoutItems = [];
  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    if ( !item.isIgnored ) {
      layoutItems.push( item );
    }
  }
  return layoutItems;
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
Outlayer.prototype._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
Outlayer.prototype._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
Outlayer.prototype._processLayoutQueue = function( queue ) {
  for ( var i=0, len = queue.length; i < len; i++ ) {
    var obj = queue[i];
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant );
  }
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
Outlayer.prototype._positionItem = function( item, x, y, isInstant ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
Outlayer.prototype._postLayout = function() {
  this.resizeContainer();
};

Outlayer.prototype.resizeContainer = function() {
  if ( !this.options.isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
Outlayer.prototype._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
Outlayer.prototype._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
Outlayer.prototype._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount === count ) {
      onComplete();
    }
  }

  // bind callback
  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    item.once( eventName, tick );
  }
};

/**
 * emits events via eventEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
Outlayer.prototype.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
Outlayer.prototype.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
Outlayer.prototype.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
Outlayer.prototype.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    this.ignore( elem );
  }
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
Outlayer.prototype.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }

};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
Outlayer.prototype._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems === 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

Outlayer.prototype._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  for ( var i=0, len = this.stamps.length; i < len; i++ ) {
    var stamp = this.stamps[i];
    this._manageStamp( stamp );
  }
};

// update boundingLeft / Top
Outlayer.prototype._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
Outlayer.prototype._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
Outlayer.prototype._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
Outlayer.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

/**
 * Bind layout to window resizing
 */
Outlayer.prototype.bindResize = function() {
  // bind just one listener
  if ( this.isResizeBound ) {
    return;
  }
  eventie.bind( window, 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
Outlayer.prototype.unbindResize = function() {
  if ( this.isResizeBound ) {
    eventie.unbind( window, 'resize', this );
  }
  this.isResizeBound = false;
};

// original debounce by John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/

// this fires every resize
Outlayer.prototype.onresize = function() {
  if ( this.resizeTimeout ) {
    clearTimeout( this.resizeTimeout );
  }

  var _this = this;
  function delayed() {
    _this.resize();
    delete _this.resizeTimeout;
  }

  this.resizeTimeout = setTimeout( delayed, 100 );
};

// debounced, layout on resize
Outlayer.prototype.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
Outlayer.prototype.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
Outlayer.prototype.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
Outlayer.prototype.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
Outlayer.prototype.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
Outlayer.prototype.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );

  var len = items && items.length;
  for ( var i=0; len && i < len; i++ ) {
    var item = items[i];
    item.reveal();
  }
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
Outlayer.prototype.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );

  var len = items && items.length;
  for ( var i=0; len && i < len; i++ ) {
    var item = items[i];
    item.hide();
  }
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
Outlayer.prototype.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
Outlayer.prototype.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
Outlayer.prototype.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0, len = this.items.length; i < len; i++ ) {
    var item = this.items[i];
    if ( item.element === elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
Outlayer.prototype.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
Outlayer.prototype.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  for ( var i=0, len = removeItems.length; i < len; i++ ) {
    var item = removeItems[i];
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }
};

// ----- destroy ----- //

// remove and disable Outlayer instance
Outlayer.prototype.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  for ( var i=0, len = this.items.length; i < len; i++ ) {
    var item = this.items[i];
    item.destroy();
  }

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  function Layout() {
    Outlayer.apply( this, arguments );
  }
  // inherit Outlayer prototype, use Object.create if there
  if ( Object.create ) {
    Layout.prototype = Object.create( Outlayer.prototype );
  } else {
    utils.extend( Layout.prototype, Outlayer.prototype );
  }
  // set contructor, used for namespace and Item
  Layout.prototype.constructor = Layout;

  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  // apply new options
  utils.extend( Layout.defaults, options );
  // keep prototype.settings for backwards compatibility (Packery v1.2.0)
  Layout.prototype.settings = {};

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = function LayoutItem() {
    Item.apply( this, arguments );
  };

  Layout.Item.prototype = new Item();

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));


},{"./item":48,"eventie":23,"fizzy-ui-utils":33,"get-size":36,"wolfy87-eventemitter":75}],50:[function(require,module,exports){
/**
 * Packery Item Element
**/

( function( window, factory ) {
  'use strict';
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
        'get-style-property/get-style-property',
        'outlayer/outlayer',
        './rect'
      ],
      factory );
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      require('desandro-get-style-property'),
      require('outlayer'),
      require('./rect')
    );
  } else {
    // browser global
    window.Packery.Item = factory(
      window.getStyleProperty,
      window.Outlayer,
      window.Packery.Rect
    );
  }

}( window, function factory( getStyleProperty, Outlayer, Rect ) {
'use strict';

// -------------------------- Item -------------------------- //

var transformProperty = getStyleProperty('transform');

// sub-class Item
var Item = function PackeryItem() {
  Outlayer.Item.apply( this, arguments );
};

Item.prototype = new Outlayer.Item();

var protoCreate = Item.prototype._create;
Item.prototype._create = function() {
  // call default _create logic
  protoCreate.call( this );
  this.rect = new Rect();
  // rect used for placing, in drag or Packery.fit()
  this.placeRect = new Rect();
};

// -------------------------- drag -------------------------- //

Item.prototype.dragStart = function() {
  this.getPosition();
  this.removeTransitionStyles();
  // remove transform property from transition
  if ( this.isTransitioning && transformProperty ) {
    this.element.style[ transformProperty ] = 'none';
  }
  this.getSize();
  // create place rect, used for position when dragged then dropped
  // or when positioning
  this.isPlacing = true;
  this.needsPositioning = false;
  this.positionPlaceRect( this.position.x, this.position.y );
  this.isTransitioning = false;
  this.didDrag = false;
};

/**
 * handle item when it is dragged
 * @param {Number} x - horizontal position of dragged item
 * @param {Number} y - vertical position of dragged item
 */
Item.prototype.dragMove = function( x, y ) {
  this.didDrag = true;
  var packerySize = this.layout.size;
  x -= packerySize.paddingLeft;
  y -= packerySize.paddingTop;
  this.positionPlaceRect( x, y );
};

Item.prototype.dragStop = function() {
  this.getPosition();
  var isDiffX = this.position.x != this.placeRect.x;
  var isDiffY = this.position.y != this.placeRect.y;
  // set post-drag positioning flag
  this.needsPositioning = isDiffX || isDiffY;
  // reset flag
  this.didDrag = false;
};

// -------------------------- placing -------------------------- //

/**
 * position a rect that will occupy space in the packer
 * @param {Number} x
 * @param {Number} y
 * @param {Boolean} isMaxYContained
 */
Item.prototype.positionPlaceRect = function( x, y, isMaxYOpen ) {
  this.placeRect.x = this.getPlaceRectCoord( x, true );
  this.placeRect.y = this.getPlaceRectCoord( y, false, isMaxYOpen );
};

/**
 * get x/y coordinate for place rect
 * @param {Number} coord - x or y
 * @param {Boolean} isX
 * @param {Boolean} isMaxOpen - does not limit value to outer bound
 * @returns {Number} coord - processed x or y
 */
Item.prototype.getPlaceRectCoord = function( coord, isX, isMaxOpen ) {
  var measure = isX ? 'Width' : 'Height';
  var size = this.size[ 'outer' + measure ];
  var segment = this.layout[ isX ? 'columnWidth' : 'rowHeight' ];
  var parentSize = this.layout.size[ 'inner' + measure ];

  // additional parentSize calculations for Y
  if ( !isX ) {
    parentSize = Math.max( parentSize, this.layout.maxY );
    // prevent gutter from bumping up height when non-vertical grid
    if ( !this.layout.rowHeight ) {
      parentSize -= this.layout.gutter;
    }
  }

  var max;

  if ( segment ) {
    segment += this.layout.gutter;
    // allow for last column to reach the edge
    parentSize += isX ? this.layout.gutter : 0;
    // snap to closest segment
    coord = Math.round( coord / segment );
    // contain to outer bound
    // contain non-growing bound, allow growing bound to grow
    var mathMethod;
    if ( this.layout.options.isHorizontal ) {
      mathMethod = !isX ? 'floor' : 'ceil';
    } else {
      mathMethod = isX ? 'floor' : 'ceil';
    }
    var maxSegments = Math[ mathMethod ]( parentSize / segment );
    maxSegments -= Math.ceil( size / segment );
    max = maxSegments;
  } else {
    max = parentSize - size;
  }

  coord = isMaxOpen ? coord : Math.min( coord, max );
  coord *= segment || 1;

  return Math.max( 0, coord );
};

Item.prototype.copyPlaceRectPosition = function() {
  this.rect.x = this.placeRect.x;
  this.rect.y = this.placeRect.y;
};

// -----  ----- //

// remove element from DOM
Item.prototype.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // add space back to packer
  this.layout.packer.addSpace( this.rect );
  this.emitEvent( 'remove', [ this ] );
};

// -----  ----- //

return Item;

}));

},{"./rect":53,"desandro-get-style-property":20,"outlayer":49}],51:[function(require,module,exports){
/**
 * Packer
 * bin-packing algorithm
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [ './rect' ], factory );
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      require('./rect')
    );
  } else {
    // browser global
    var Packery = window.Packery = window.Packery || {};
    Packery.Packer = factory( Packery.Rect );
  }

}( window, function factory( Rect ) {
'use strict';

// -------------------------- Packer -------------------------- //

/**
 * @param {Number} width
 * @param {Number} height
 * @param {String} sortDirection
 *   topLeft for vertical, leftTop for horizontal
 */
function Packer( width, height, sortDirection ) {
  this.width = width || 0;
  this.height = height || 0;
  this.sortDirection = sortDirection || 'downwardLeftToRight';

  this.reset();
}

Packer.prototype.reset = function() {
  this.spaces = [];
  this.newSpaces = [];

  var initialSpace = new Rect({
    x: 0,
    y: 0,
    width: this.width,
    height: this.height
  });

  this.spaces.push( initialSpace );
  // set sorter
  this.sorter = sorters[ this.sortDirection ] || sorters.downwardLeftToRight;
};

// change x and y of rect to fit with in Packer's available spaces
Packer.prototype.pack = function( rect ) {
  for ( var i=0, len = this.spaces.length; i < len; i++ ) {
    var space = this.spaces[i];
    if ( space.canFit( rect ) ) {
      this.placeInSpace( rect, space );
      break;
    }
  }
};

Packer.prototype.placeInSpace = function( rect, space ) {
  // place rect in space
  rect.x = space.x;
  rect.y = space.y;

  this.placed( rect );
};

// update spaces with placed rect
Packer.prototype.placed = function( rect ) {
  // update spaces
  var revisedSpaces = [];
  for ( var i=0, len = this.spaces.length; i < len; i++ ) {
    var space = this.spaces[i];
    var newSpaces = space.getMaximalFreeRects( rect );
    // add either the original space or the new spaces to the revised spaces
    if ( newSpaces ) {
      revisedSpaces.push.apply( revisedSpaces, newSpaces );
    } else {
      revisedSpaces.push( space );
    }
  }

  this.spaces = revisedSpaces;

  this.mergeSortSpaces();
};

Packer.prototype.mergeSortSpaces = function() {
  // remove redundant spaces
  Packer.mergeRects( this.spaces );
  this.spaces.sort( this.sorter );
};

// add a space back
Packer.prototype.addSpace = function( rect ) {
  this.spaces.push( rect );
  this.mergeSortSpaces();
};

// -------------------------- utility functions -------------------------- //

/**
 * Remove redundant rectangle from array of rectangles
 * @param {Array} rects: an array of Rects
 * @returns {Array} rects: an array of Rects
**/
Packer.mergeRects = function( rects ) {
  for ( var i=0, len = rects.length; i < len; i++ ) {
    var rect = rects[i];
    // skip over this rect if it was already removed
    if ( !rect ) {
      continue;
    }
    // clone rects we're testing, remove this rect
    var compareRects = rects.slice(0);
    // do not compare with self
    compareRects.splice( i, 1 );
    // compare this rect with others
    var removedCount = 0;
    for ( var j=0, jLen = compareRects.length; j < jLen; j++ ) {
      var compareRect = compareRects[j];
      // if this rect contains another,
      // remove that rect from test collection
      var indexAdjust = i > j ? 0 : 1;
      if ( rect.contains( compareRect ) ) {
        // console.log( 'current test rects:' + testRects.length, testRects );
        // console.log( i, j, indexAdjust, rect, compareRect );
        rects.splice( j + indexAdjust - removedCount, 1 );
        removedCount++;
      }
    }
  }

  return rects;
};


// -------------------------- sorters -------------------------- //

// functions for sorting rects in order
var sorters = {
  // top down, then left to right
  downwardLeftToRight: function( a, b ) {
    return a.y - b.y || a.x - b.x;
  },
  // left to right, then top down
  rightwardTopToBottom: function( a, b ) {
    return a.x - b.x || a.y - b.y;
  }
};


// --------------------------  -------------------------- //

return Packer;

}));
},{"./rect":53}],52:[function(require,module,exports){
/*!
 * Packery v1.4.3
 * bin-packing layout library
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * http://packery.metafizzy.co
 * Copyright 2015 Metafizzy
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
        'classie/classie',
        'get-size/get-size',
        'outlayer/outlayer',
        './rect',
        './packer',
        './item'
      ],
      factory );
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      require('desandro-classie'),
      require('get-size'),
      require('outlayer'),
      require('./rect'),
      require('./packer'),
      require('./item')
    );
  } else {
    // browser global
    window.Packery = factory(
      window.classie,
      window.getSize,
      window.Outlayer,
      window.Packery.Rect,
      window.Packery.Packer,
      window.Packery.Item
    );
  }

}( window, function factory( classie, getSize, Outlayer, Rect, Packer, Item ) {
'use strict';

// ----- Rect ----- //

// allow for pixel rounding errors IE8-IE11 & Firefox; #227
Rect.prototype.canFit = function( rect ) {
  return this.width >= rect.width - 1 && this.height >= rect.height - 1;
};

// -------------------------- Packery -------------------------- //

// create an Outlayer layout class
var Packery = Outlayer.create('packery');
Packery.Item = Item;

Packery.prototype._create = function() {
  // call super
  Outlayer.prototype._create.call( this );

  // initial properties
  this.packer = new Packer();

  // Left over from v1.0
  this.stamp( this.options.stamped );

  // create drag handlers
  var _this = this;
  this.handleDraggabilly = {
    dragStart: function() {
      _this.itemDragStart( this.element );
    },
    dragMove: function() {
      _this.itemDragMove( this.element, this.position.x, this.position.y );
    },
    dragEnd: function() {
      _this.itemDragEnd( this.element );
    }
  };

  this.handleUIDraggable = {
    start: function handleUIDraggableStart( event, ui ) {
      // HTML5 may trigger dragstart, dismiss HTML5 dragging
      if ( !ui ) {
        return;
      }
      _this.itemDragStart( event.currentTarget );
    },
    drag: function handleUIDraggableDrag( event, ui ) {
      if ( !ui ) {
        return;
      }
      _this.itemDragMove( event.currentTarget, ui.position.left, ui.position.top );
    },
    stop: function handleUIDraggableStop( event, ui ) {
      if ( !ui ) {
        return;
      }
      _this.itemDragEnd( event.currentTarget );
    }
  };

};


// ----- init & layout ----- //

/**
 * logic before any new layout
 */
Packery.prototype._resetLayout = function() {
  this.getSize();

  this._getMeasurements();

  // reset packer
  var packer = this.packer;
  // packer settings, if horizontal or vertical
  if ( this.options.isHorizontal ) {
    packer.width = Number.POSITIVE_INFINITY;
    packer.height = this.size.innerHeight + this.gutter;
    packer.sortDirection = 'rightwardTopToBottom';
  } else {
    packer.width = this.size.innerWidth + this.gutter;
    packer.height = Number.POSITIVE_INFINITY;
    packer.sortDirection = 'downwardLeftToRight';
  }

  packer.reset();

  // layout
  this.maxY = 0;
  this.maxX = 0;
};

/**
 * update columnWidth, rowHeight, & gutter
 * @private
 */
Packery.prototype._getMeasurements = function() {
  this._getMeasurement( 'columnWidth', 'width' );
  this._getMeasurement( 'rowHeight', 'height' );
  this._getMeasurement( 'gutter', 'width' );
};

Packery.prototype._getItemLayoutPosition = function( item ) {
  this._packItem( item );
  return item.rect;
};


/**
 * layout item in packer
 * @param {Packery.Item} item
 */
Packery.prototype._packItem = function( item ) {
  this._setRectSize( item.element, item.rect );
  // pack the rect in the packer
  this.packer.pack( item.rect );
  this._setMaxXY( item.rect );
};

/**
 * set max X and Y value, for size of container
 * @param {Packery.Rect} rect
 * @private
 */
Packery.prototype._setMaxXY = function( rect ) {
  this.maxX = Math.max( rect.x + rect.width, this.maxX );
  this.maxY = Math.max( rect.y + rect.height, this.maxY );
};

/**
 * set the width and height of a rect, applying columnWidth and rowHeight
 * @param {Element} elem
 * @param {Packery.Rect} rect
 */
Packery.prototype._setRectSize = function( elem, rect ) {
  var size = getSize( elem );
  var w = size.outerWidth;
  var h = size.outerHeight;
  // size for columnWidth and rowHeight, if available
  // only check if size is non-zero, #177
  if ( w || h ) {
    w = this._applyGridGutter( w, this.columnWidth );
    h = this._applyGridGutter( h, this.rowHeight );
  }
  // rect must fit in packer
  rect.width = Math.min( w, this.packer.width );
  rect.height = Math.min( h, this.packer.height );
};

/**
 * fits item to columnWidth/rowHeight and adds gutter
 * @param {Number} measurement - item width or height
 * @param {Number} gridSize - columnWidth or rowHeight
 * @returns measurement
 */
Packery.prototype._applyGridGutter = function( measurement, gridSize ) {
  // just add gutter if no gridSize
  if ( !gridSize ) {
    return measurement + this.gutter;
  }
  gridSize += this.gutter;
  // fit item to columnWidth/rowHeight
  var remainder = measurement % gridSize;
  var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
  measurement = Math[ mathMethod ]( measurement / gridSize ) * gridSize;
  return measurement;
};

Packery.prototype._getContainerSize = function() {
  if ( this.options.isHorizontal ) {
    return {
      width: this.maxX - this.gutter
    };
  } else {
    return {
      height: this.maxY - this.gutter
    };
  }
};


// -------------------------- stamp -------------------------- //

/**
 * makes space for element
 * @param {Element} elem
 */
Packery.prototype._manageStamp = function( elem ) {

  var item = this.getItem( elem );
  var rect;
  if ( item && item.isPlacing ) {
    rect = item.placeRect;
  } else {
    var offset = this._getElementOffset( elem );
    rect = new Rect({
      x: this.options.isOriginLeft ? offset.left : offset.right,
      y: this.options.isOriginTop ? offset.top : offset.bottom
    });
  }

  this._setRectSize( elem, rect );
  // save its space in the packer
  this.packer.placed( rect );
  this._setMaxXY( rect );
};

// -------------------------- methods -------------------------- //

function verticalSorter( a, b ) {
  return a.position.y - b.position.y || a.position.x - b.position.x;
}

function horizontalSorter( a, b ) {
  return a.position.x - b.position.x || a.position.y - b.position.y;
}

Packery.prototype.sortItemsByPosition = function() {
  var sorter = this.options.isHorizontal ? horizontalSorter : verticalSorter;
  this.items.sort( sorter );
};

/**
 * Fit item element in its current position
 * Packery will position elements around it
 * useful for expanding elements
 *
 * @param {Element} elem
 * @param {Number} x - horizontal destination position, optional
 * @param {Number} y - vertical destination position, optional
 */
Packery.prototype.fit = function( elem, x, y ) {
  var item = this.getItem( elem );
  if ( !item ) {
    return;
  }

  // prepare internal properties
  this._getMeasurements();

  // stamp item to get it out of layout
  this.stamp( item.element );
  // required for positionPlaceRect
  item.getSize();
  // set placing flag
  item.isPlacing = true;
  // fall back to current position for fitting
  x = x === undefined ? item.rect.x: x;
  y = y === undefined ? item.rect.y: y;

  // position it best at its destination
  item.positionPlaceRect( x, y, true );

  this._bindFitEvents( item );
  item.moveTo( item.placeRect.x, item.placeRect.y );
  // layout everything else
  this.layout();

  // return back to regularly scheduled programming
  this.unstamp( item.element );
  this.sortItemsByPosition();
  // un set placing flag, back to normal
  item.isPlacing = false;
  // copy place rect position
  item.copyPlaceRectPosition();
};

/**
 * emit event when item is fit and other items are laid out
 * @param {Packery.Item} item
 * @private
 */
Packery.prototype._bindFitEvents = function( item ) {
  var _this = this;
  var ticks = 0;
  function tick() {
    ticks++;
    if ( ticks != 2 ) {
      return;
    }
    _this.dispatchEvent( 'fitComplete', null, [ item ] );
  }
  // when item is laid out
  item.on( 'layout', function() {
    tick();
    return true;
  });
  // when all items are laid out
  this.on( 'layoutComplete', function() {
    tick();
    return true;
  });
};

// -------------------------- resize -------------------------- //

// debounced, layout on resize
Packery.prototype.resize = function() {
  // don't trigger if size did not change
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  var innerSize = this.options.isHorizontal ? 'innerHeight' : 'innerWidth';
  if ( hasSizes && size[ innerSize ] == this.size[ innerSize ] ) {
    return;
  }

  this.layout();
};

// -------------------------- drag -------------------------- //

/**
 * handle an item drag start event
 * @param {Element} elem
 */
Packery.prototype.itemDragStart = function( elem ) {
  this.stamp( elem );
  var item = this.getItem( elem );
  if ( item ) {
    item.dragStart();
  }
};

/**
 * handle an item drag move event
 * @param {Element} elem
 * @param {Number} x - horizontal change in position
 * @param {Number} y - vertical change in position
 */
Packery.prototype.itemDragMove = function( elem, x, y ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.dragMove( x, y );
  }

  // debounce
  var _this = this;
  // debounce triggering layout
  function delayed() {
    _this.layout();
    delete _this.dragTimeout;
  }

  this.clearDragTimeout();

  this.dragTimeout = setTimeout( delayed, 40 );
};

Packery.prototype.clearDragTimeout = function() {
  if ( this.dragTimeout ) {
    clearTimeout( this.dragTimeout );
  }
};

/**
 * handle an item drag end event
 * @param {Element} elem
 */
Packery.prototype.itemDragEnd = function( elem ) {
  var item = this.getItem( elem );
  var itemDidDrag;
  if ( item ) {
    itemDidDrag = item.didDrag;
    item.dragStop();
  }
  // if elem didn't move, or if it doesn't need positioning
  // unignore and unstamp and call it a day
  if ( !item || ( !itemDidDrag && !item.needsPositioning ) ) {
    this.unstamp( elem );
    return;
  }
  // procced with dragged item

  classie.add( item.element, 'is-positioning-post-drag' );

  // save this var, as it could get reset in dragStart
  var onLayoutComplete = this._getDragEndLayoutComplete( elem, item );

  if ( item.needsPositioning ) {
    item.on( 'layout', onLayoutComplete );
    item.moveTo( item.placeRect.x, item.placeRect.y );
  } else if ( item ) {
    // item didn't need placement
    item.copyPlaceRectPosition();
  }

  this.clearDragTimeout();
  this.on( 'layoutComplete', onLayoutComplete );
  this.layout();

};

/**
 * get drag end callback
 * @param {Element} elem
 * @param {Packery.Item} item
 * @returns {Function} onLayoutComplete
 */
Packery.prototype._getDragEndLayoutComplete = function( elem, item ) {
  var itemNeedsPositioning = item && item.needsPositioning;
  var completeCount = 0;
  var asyncCount = itemNeedsPositioning ? 2 : 1;
  var _this = this;

  return function onLayoutComplete() {
    completeCount++;
    // don't proceed if not complete
    if ( completeCount != asyncCount ) {
      return true;
    }
    // reset item
    if ( item ) {
      classie.remove( item.element, 'is-positioning-post-drag' );
      item.isPlacing = false;
      item.copyPlaceRectPosition();
    }

    _this.unstamp( elem );
    // only sort when item moved
    _this.sortItemsByPosition();

    // emit item drag event now that everything is done
    if ( itemNeedsPositioning ) {
      _this.dispatchEvent( 'dragItemPositioned', null, [ item ] );
    }
    // listen once
    return true;
  };
};

/**
 * binds Draggabilly events
 * @param {Draggabilly} draggie
 */
Packery.prototype.bindDraggabillyEvents = function( draggie ) {
  draggie.on( 'dragStart', this.handleDraggabilly.dragStart );
  draggie.on( 'dragMove', this.handleDraggabilly.dragMove );
  draggie.on( 'dragEnd', this.handleDraggabilly.dragEnd );
};

/**
 * binds jQuery UI Draggable events
 * @param {jQuery} $elems
 */
Packery.prototype.bindUIDraggableEvents = function( $elems ) {
  $elems
    .on( 'dragstart', this.handleUIDraggable.start )
    .on( 'drag', this.handleUIDraggable.drag )
    .on( 'dragstop', this.handleUIDraggable.stop );
};

Packery.Rect = Rect;
Packery.Packer = Packer;

return Packery;

}));

},{"./item":50,"./packer":51,"./rect":53,"desandro-classie":19,"get-size":36,"outlayer":49}],53:[function(require,module,exports){
/**
 * Rect
 * low-level utility class for basic geometry
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( factory );
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.Packery = window.Packery || {};
    window.Packery.Rect = factory();
  }

}( window, function factory() {
'use strict';

// -------------------------- Packery -------------------------- //

// global namespace
var Packery = window.Packery = function() {};

// -------------------------- Rect -------------------------- //

function Rect( props ) {
  // extend properties from defaults
  for ( var prop in Rect.defaults ) {
    this[ prop ] = Rect.defaults[ prop ];
  }

  for ( prop in props ) {
    this[ prop ] = props[ prop ];
  }

}

// make available
Packery.Rect = Rect;

Rect.defaults = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
};

/**
 * Determines whether or not this rectangle wholly encloses another rectangle or point.
 * @param {Rect} rect
 * @returns {Boolean}
**/
Rect.prototype.contains = function( rect ) {
  // points don't have width or height
  var otherWidth = rect.width || 0;
  var otherHeight = rect.height || 0;
  return this.x <= rect.x &&
    this.y <= rect.y &&
    this.x + this.width >= rect.x + otherWidth &&
    this.y + this.height >= rect.y + otherHeight;
};

/**
 * Determines whether or not the rectangle intersects with another.
 * @param {Rect} rect
 * @returns {Boolean}
**/
Rect.prototype.overlaps = function( rect ) {
  var thisRight = this.x + this.width;
  var thisBottom = this.y + this.height;
  var rectRight = rect.x + rect.width;
  var rectBottom = rect.y + rect.height;

  // http://stackoverflow.com/a/306332
  return this.x < rectRight &&
    thisRight > rect.x &&
    this.y < rectBottom &&
    thisBottom > rect.y;
};

/**
 * @param {Rect} rect - the overlapping rect
 * @returns {Array} freeRects - rects representing the area around the rect
**/
Rect.prototype.getMaximalFreeRects = function( rect ) {

  // if no intersection, return false
  if ( !this.overlaps( rect ) ) {
    return false;
  }

  var freeRects = [];
  var freeRect;

  var thisRight = this.x + this.width;
  var thisBottom = this.y + this.height;
  var rectRight = rect.x + rect.width;
  var rectBottom = rect.y + rect.height;

  // top
  if ( this.y < rect.y ) {
    freeRect = new Rect({
      x: this.x,
      y: this.y,
      width: this.width,
      height: rect.y - this.y
    });
    freeRects.push( freeRect );
  }

  // right
  if ( thisRight > rectRight ) {
    freeRect = new Rect({
      x: rectRight,
      y: this.y,
      width: thisRight - rectRight,
      height: this.height
    });
    freeRects.push( freeRect );
  }

  // bottom
  if ( thisBottom > rectBottom ) {
    freeRect = new Rect({
      x: this.x,
      y: rectBottom,
      width: this.width,
      height: thisBottom - rectBottom
    });
    freeRects.push( freeRect );
  }

  // left
  if ( this.x < rect.x ) {
    freeRect = new Rect({
      x: this.x,
      y: this.y,
      width: rect.x - this.x,
      height: this.height
    });
    freeRects.push( freeRect );
  }

  return freeRects;
};

Rect.prototype.canFit = function( rect ) {
  return this.width >= rect.width && this.height >= rect.height;
};

return Rect;

}));

},{}],54:[function(require,module,exports){

/**
 * An Array.prototype.slice.call(arguments) alternative
 *
 * @param {Object} args something with a length
 * @param {Number} slice
 * @param {Number} sliceEnd
 * @api public
 */

module.exports = function (args, slice, sliceEnd) {
  var ret = [];
  var len = args.length;

  if (0 === len) return ret;

  var start = slice < 0
    ? Math.max(0, slice + len)
    : slice || 0;

  if (sliceEnd !== undefined) {
    len = sliceEnd < 0
      ? sliceEnd + len
      : sliceEnd
  }

  while (len-- > start) {
    ret[len - start] = args[len];
  }

  return ret;
}


},{}],55:[function(require,module,exports){
'use strict'

module.exports = {
   prefixProperties: require('./src/prefixProperties') ,
   cssUnitless: require('./src/cssUnitless') ,
   object: require('./src/toStyleObject'),
   string: require('./src/toStyleString')
}
},{"./src/cssUnitless":57,"./src/prefixProperties":62,"./src/toStyleObject":70,"./src/toStyleString":71}],56:[function(require,module,exports){
module.exports = require('./prefixer')()
},{"./prefixer":63}],57:[function(require,module,exports){
'use exports'

//make sure properties are in hyphenated form

module.exports = {
    'animation'    : 1,
    'column-count' : 1,
    'columns'      : 1,
    'font-weight'  : 1,
    'opacity'      : 1,
    'order  '      : 1,
    'z-index'      : 1,
    'zoom'         : 1,
    'flex'         : 1,
    'box-flex'     : 1,
    'transform'    : 1,
    'perspective'  : 1,
    'box-pack'     : 1,
    'box-align'    : 1,
    'colspan'      : 1,
    'rowspan'      : 1
}
},{}],58:[function(require,module,exports){
'use strict'

var objectHasOwn = Object.prototype.hasOwnProperty

module.exports = function(object, propertyName){
    return objectHasOwn.call(object, propertyName)
}
},{}],59:[function(require,module,exports){
'use strict'

var objectToString = Object.prototype.toString

module.exports = function(v) {
    return objectToString.apply(v) === '[object Function]'
}

},{}],60:[function(require,module,exports){
'use strict'

var objectToString = Object.prototype.toString

module.exports = function(v){
    return !!v && objectToString.call(v) === '[object Object]'
}


},{}],61:[function(require,module,exports){
'use strict';

var toUpperFirst = require('./stringUtils/toUpperFirst')

var re         = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/

var docStyle   = typeof document == 'undefined'?
                    {}:
                    document.documentElement.style

var prefixInfo = (function(){

    var prefix = (function(){

            for (var prop in docStyle) {
                if( re.test(prop) ) {
                    // test is faster than match, so it's better to perform
                    // that on the lot and match only when necessary
                    return  prop.match(re)[0]
                }
            }

            // Nothing found so far? Webkit does not enumerate over the CSS properties of the style object.
            // However (prop in style) returns the correct value, so we'll have to test for
            // the precence of a specific property
            if ('WebkitOpacity' in docStyle){
                return 'Webkit'
            }

            if ('KhtmlOpacity' in docStyle) {
                return 'Khtml'
            }

            return ''
        })(),

    lower = prefix.toLowerCase()

    return {
        style       : prefix,
        css       : '-' + lower + '-',
        dom       : ({
            Webkit: 'WebKit',
            ms    : 'MS',
            o     : 'WebKit'
        })[prefix] || toUpperFirst(prefix)
    }

})()

module.exports = prefixInfo
},{"./stringUtils/toUpperFirst":69}],62:[function(require,module,exports){
module.exports = {
    'border-radius'              : 1,
    'border-top-left-radius'     : 1,
    'border-top-right-radius'    : 1,
    'border-bottom-left-radius'  : 1,
    'border-bottom-right-radius' : 1,
    'box-shadow'                 : 1,
    'order'                      : 1,
    'flex'                       : function(name, prefix){
        return [prefix + 'box-flex']
    },
    'box-flex'                   : 1,
    'box-align'                  : 1,
    'animation'                  : 1,
    'animation-duration'         : 1,
    'animation-name'             : 1,
    'transition'                 : 1,
    'transition-duration'        : 1,
    'transform'                  : 1,
    'transform-style'            : 1,
    'transform-origin'           : 1,
    'backface-visibility'        : 1,
    'perspective'                : 1,
    'box-pack'                   : 1
}
},{}],63:[function(require,module,exports){
'use strict'

var camelize     = require('./stringUtils/camelize')
var hyphenate    = require('./stringUtils/hyphenate')
var toLowerFirst = require('./stringUtils/toLowerFirst')
var toUpperFirst = require('./stringUtils/toUpperFirst')

var prefixInfo = require('./prefixInfo')
var prefixProperties = require('./prefixProperties')

var docStyle = typeof document == 'undefined'?
                {}:
                document.documentElement.style

module.exports = function(asStylePrefix){

    return function(name, config){
        config = config || {}

        var styleName = toLowerFirst(camelize(name)),
            cssName   = hyphenate(name),

            theName   = asStylePrefix?
                            styleName:
                            cssName,

            thePrefix = prefixInfo.style?
                            asStylePrefix?
                                prefixInfo.style:
                                prefixInfo.css
                            :
                            ''

        if ( styleName in docStyle ) {
            return config.asString?
                              theName :
                            [ theName ]
        }

        //not a valid style name, so we'll return the value with a prefix

        var upperCased     = theName,
            prefixProperty = prefixProperties[cssName],
            result         = []

        if (asStylePrefix){
            upperCased = toUpperFirst(theName)
        }

        if (typeof prefixProperty == 'function'){
            var prefixedCss = prefixProperty(theName, thePrefix) || []
            if (prefixedCss && !Array.isArray(prefixedCss)){
                prefixedCss = [prefixedCss]
            }

            if (prefixedCss.length){
                prefixedCss = prefixedCss.map(function(property){
                    return asStylePrefix?
                                toLowerFirst(camelize(property)):
                                hyphenate(property)

                })
            }

            result = result.concat(prefixedCss)
        }

        if (thePrefix){
            result.push(thePrefix + upperCased)
        }

        result.push(theName)

        if (config.asString || result.length == 1){
            return result[0]
        }

        return result
    }
}
},{"./prefixInfo":61,"./prefixProperties":62,"./stringUtils/camelize":64,"./stringUtils/hyphenate":66,"./stringUtils/toLowerFirst":68,"./stringUtils/toUpperFirst":69}],64:[function(require,module,exports){
'use strict'

var toCamelFn = function(str, letter){
       return letter ? letter.toUpperCase(): ''
   }

var hyphenRe = require('./hyphenRe')

module.exports = function(str){
   return str?
          str.replace(hyphenRe, toCamelFn):
          ''
}
},{"./hyphenRe":65}],65:[function(require,module,exports){
module.exports = /[-\s]+(.)?/g
},{}],66:[function(require,module,exports){
'use strict'

var separate = require('./separate')

module.exports = function(name){
   return separate(name).toLowerCase()
}
},{"./separate":67}],67:[function(require,module,exports){
'use strict'

var doubleColonRe      = /::/g
var upperToLowerRe     = /([A-Z]+)([A-Z][a-z])/g
var lowerToUpperRe     = /([a-z\d])([A-Z])/g
var underscoreToDashRe = /_/g

module.exports = function(name, separator){

   return name?
           name.replace(doubleColonRe, '/')
                .replace(upperToLowerRe, '$1_$2')
                .replace(lowerToUpperRe, '$1_$2')
                .replace(underscoreToDashRe, separator || '-')
            :
            ''
}
},{}],68:[function(require,module,exports){
'use strict'

module.exports = function(value){
    return value.length?
                value.charAt(0).toLowerCase() + value.substring(1):
                value
}
},{}],69:[function(require,module,exports){
'use strict'

module.exports = function(value){
    return value.length?
                value.charAt(0).toUpperCase() + value.substring(1):
                value
}
},{}],70:[function(require,module,exports){
'use strict'

var prefixInfo  = require('./prefixInfo')
var cssPrefixFn = require('./cssPrefix')

var HYPHENATE   = require('./stringUtils/hyphenate')
var CAMELIZE   = require('./stringUtils/camelize')
var HAS_OWN     = require('./hasOwn')
var IS_OBJECT   = require('./isObject')
var IS_FUNCTION = require('./isFunction')

var applyPrefix = function(target, property, value, normalizeFn){
    cssPrefixFn(property).forEach(function(p){
        target[normalizeFn? normalizeFn(p): p] = value
    })
}

var toObject = function(str){
    str = (str || '').split(';')

    var result = {}

    str.forEach(function(item){
        var split = item.split(':')

        if (split.length == 2){
            result[split[0].trim()] = split[1].trim()
        }
    })

    return result
}

var CONFIG = {
    cssUnitless: require('./cssUnitless')
}

/**
 * @ignore
 * @method toStyleObject
 *
 * @param  {Object} styles The object to convert to a style object.
 * @param  {Object} [config]
 * @param  {Boolean} [config.addUnits=true] True if you want to add units when numerical values are encountered.
 * @param  {Object}  config.cssUnitless An object whose keys represent css numerical property names that will not be appended with units.
 * @param  {Object}  config.prefixProperties An object whose keys represent css property names that should be prefixed
 * @param  {String}  config.cssUnit='px' The css unit to append to numerical values. Defaults to 'px'
 * @param  {String}  config.normalizeName A function that normalizes a name to a valid css property name
 * @param  {String}  config.scope
 *
 * @return {Object} The object, normalized with css style names
 */
var TO_STYLE_OBJECT = function(styles, config, prepend, result){

    if (typeof styles == 'string'){
        styles = toObject(styles)
    }

    config = config || CONFIG

    config.cssUnitless = config.cssUnitless || CONFIG.cssUnitless

    result = result || {}

    var scope    = config.scope || {},

        //configs
        addUnits = config.addUnits != null?
                            config.addUnits:
                            scope && scope.addUnits != null?
                                scope.addUnits:
                                true,

        cssUnitless      = (config.cssUnitless != null?
                                config.cssUnitless:
                                scope?
                                    scope.cssUnitless:
                                    null) || {},
        cssUnit          = (config.cssUnit || scope? scope.cssUnit: null) || 'px',
        prefixProperties = (config.prefixProperties || (scope? scope.prefixProperties: null)) || {},

        camelize    = config.camelize,
        normalizeFn = camelize? CAMELIZE: HYPHENATE

    // Object.keys(cssUnitless).forEach(function(key){
    //     cssUnitless[normalizeFn(key)] = 1
    // })

    var processed,
        styleName,

        propName,
        propValue,
        propCssUnit,
        propType,
        propIsNumber,

        fnPropValue,
        prefix

    for (propName in styles) if (HAS_OWN(styles, propName)) {

        propValue = styles[ propName ]

        //the hyphenated style name (css property name)
        styleName = HYPHENATE(prepend? prepend + propName: propName)

        processed = false
        prefix    = false

        if (IS_FUNCTION(propValue)) {

            //a function can either return a css value
            //or an object with { value, prefix, name }
            fnPropValue = propValue.call(scope || styles, propValue, propName, styleName, styles)

            if (IS_OBJECT(fnPropValue) && fnPropValue.value != null){

                propValue = fnPropValue.value
                prefix    = fnPropValue.prefix
                styleName = fnPropValue.name?
                                HYPHENATE(fnPropValue.name):
                                styleName

            } else {
                propValue = fnPropValue
            }
        }

        propType     = typeof propValue
        propIsNumber = propType == 'number' || (propType == 'string' && propValue != '' && propValue * 1 == propValue)

        if (propValue == null || styleName == null || styleName === ''){
            continue
        }

        if (propIsNumber || propType == 'string'){
           processed = true
        }

        if (!processed && propValue.value != null && propValue.prefix){
           processed = true
           prefix    = propValue.prefix
           propValue = propValue.value
        }

        // hyphenStyleName = camelize? HYPHENATE(styleName): styleName

        if (processed){

            prefix = prefix || !!prefixProperties[styleName]

            if (propIsNumber){
                propValue = addUnits && !(styleName in cssUnitless) ?
                                propValue + cssUnit:
                                propValue + ''//change it to a string, so that jquery does not append px or other units
            }

            //special border treatment
            if (
                    (
                     styleName == 'border' ||
                    (!styleName.indexOf('border')
                        &&
                        !~styleName.indexOf('radius')
                        &&
                        !~styleName.indexOf('width'))
                    ) &&
                    propIsNumber
                ){

                styleName = styleName + '-width'
            }

            //special border radius treatment
            if (!styleName.indexOf('border-radius-')){
                styleName.replace(/border(-radius)(-(.*))/, function(str, radius, theRest){
                    var positions = {
                        '-top'    : ['-top-left',      '-top-right' ],
                        '-left'   : ['-top-left',    '-bottom-left' ],
                        '-right'  : ['-top-right',   '-bottom-right'],
                        '-bottom' : ['-bottom-left', '-bottom-right']
                    }

                    if (theRest in positions){
                        styleName = []

                        positions[theRest].forEach(function(pos){
                            styleName.push('border' + pos + radius)
                        })
                    } else {
                        styleName = 'border'+ theRest + radius
                    }

                })

                if (Array.isArray(styleName)){
                    styleName.forEach(function(styleName){
                        if (prefix){
                            applyPrefix(result, styleName, propValue, normalizeFn)
                        } else {
                            result[normalizeFn(styleName)] = propValue
                        }
                    })

                    continue
                }
            }

            if (prefix){
                applyPrefix(result, styleName, propValue, normalizeFn)
            } else {
                result[normalizeFn(styleName)] = propValue
            }

        } else {
            //the propValue must be an object, so go down the hierarchy
            TO_STYLE_OBJECT(propValue, config, styleName + '-', result)
        }
    }

    return result
}

module.exports = TO_STYLE_OBJECT
},{"./cssPrefix":56,"./cssUnitless":57,"./hasOwn":58,"./isFunction":59,"./isObject":60,"./prefixInfo":61,"./stringUtils/camelize":64,"./stringUtils/hyphenate":66}],71:[function(require,module,exports){
'use strict'

var toStyleObject = require('./toStyleObject')
var hasOwn        = require('./hasOwn')

/**
 * @ignore
 * @method toStyleString
 *
 * @param  {Object} styles The object to convert to a style string.
 * @param  {Object} config
 * @param  {Boolean} config.addUnits=true True if you want to add units when numerical values are encountered. Defaults to true
 * @param  {Object}  config.cssUnitless An object whose keys represent css numerical property names that will not be appended with units.
 * @param  {Object}  config.prefixProperties An object whose keys represent css property names that should be prefixed
 * @param  {String}  config.cssUnit='px' The css unit to append to numerical values. Defaults to 'px'
 * @param  {String}  config.scope
 *
 * @return {Object} The object, normalized with css style names
 */
module.exports = function(styles, config){
    styles = toStyleObject(styles, config)

    var result = []
    var prop

    for(prop in styles) if (hasOwn(styles, prop)){
        result.push(prop + ': ' + styles[prop])
    }

    return result.join('; ')
}
},{"./hasOwn":58,"./toStyleObject":70}],72:[function(require,module,exports){
/**
 * Module dependencies.
 */

var slice = require('sliced')
var flatten = require('array-flatten')

/**
 * This function lets us create virtual nodes using a simple
 * syntax. It is compatible with JSX transforms so you can use
 * JSX to write nodes that will compile to this function.
 *
 * let node = element('div', { id: 'foo' }, [
 *   element('a', { href: 'http://google.com' }, 'Google')
 * ])
 *
 * You can leave out the attributes or the children if either
 * of them aren't needed and it will figure out what you're
 * trying to do.
 */

module.exports = element

/**
 * Create virtual trees of components.
 *
 * This creates the nicer API for the user.
 * It translates that friendly API into an actual tree of nodes.
 *
 * @param {*} type
 * @param {Object} attributes
 * @param {Array} children
 * @return {Object}
 * @api public
 */

function element (type, attributes, children) {
  // Default to div with no args
  if (!type) {
    throw new TypeError('element() needs a type.')
  }

  // Skipped adding attributes and we're passing
  // in children instead.
  if (arguments.length === 2 && (typeof attributes === 'string' || Array.isArray(attributes))) {
    children = [ attributes ]
    attributes = {}
  }

  // Account for JSX putting the children as multiple arguments.
  // This is essentially just the ES6 rest param
  if (arguments.length > 2) {
    children = slice(arguments, 2)
  }

  children = children || []
  attributes = attributes || {}

  // Flatten nested child arrays. This is how JSX compiles some nodes.
  children = flatten(children, 2)

  // Filter out any `undefined` elements
  children = children.filter(function (i) { return typeof i !== 'undefined' })

  // if you pass in a function, it's a `Component` constructor.
  // otherwise it's an element.
  return {
    type: type,
    children: children,
    attributes: attributes
  }
}

},{"array-flatten":3,"sliced":73}],73:[function(require,module,exports){
module.exports = exports = require('./lib/sliced');

},{"./lib/sliced":74}],74:[function(require,module,exports){
arguments[4][54][0].apply(exports,arguments)
},{"dup":54}],75:[function(require,module,exports){
/*!
 * EventEmitter v4.2.11 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - http://oli.me.uk/
 * @preserve
 */

;(function () {
    'use strict';

    /**
     * Class for managing events.
     * Can be extended to provide event functionality in other classes.
     *
     * @class EventEmitter Manages event registering and emitting.
     */
    function EventEmitter() {}

    // Shortcuts to improve speed and size
    var proto = EventEmitter.prototype;
    var exports = this;
    var originalGlobalValue = exports.EventEmitter;

    /**
     * Finds the index of the listener for the event in its storage array.
     *
     * @param {Function[]} listeners Array of listeners to search through.
     * @param {Function} listener Method to look for.
     * @return {Number} Index of the specified listener, -1 if not found
     * @api private
     */
    function indexOfListener(listeners, listener) {
        var i = listeners.length;
        while (i--) {
            if (listeners[i].listener === listener) {
                return i;
            }
        }

        return -1;
    }

    /**
     * Alias a method while keeping the context correct, to allow for overwriting of target method.
     *
     * @param {String} name The name of the target method.
     * @return {Function} The aliased method
     * @api private
     */
    function alias(name) {
        return function aliasClosure() {
            return this[name].apply(this, arguments);
        };
    }

    /**
     * Returns the listener array for the specified event.
     * Will initialise the event object and listener arrays if required.
     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
     * Each property in the object response is an array of listener functions.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Function[]|Object} All listener functions for the event.
     */
    proto.getListeners = function getListeners(evt) {
        var events = this._getEvents();
        var response;
        var key;

        // Return a concatenated array of all matching events if
        // the selector is a regular expression.
        if (evt instanceof RegExp) {
            response = {};
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    response[key] = events[key];
                }
            }
        }
        else {
            response = events[evt] || (events[evt] = []);
        }

        return response;
    };

    /**
     * Takes a list of listener objects and flattens it into a list of listener functions.
     *
     * @param {Object[]} listeners Raw listener objects.
     * @return {Function[]} Just the listener functions.
     */
    proto.flattenListeners = function flattenListeners(listeners) {
        var flatListeners = [];
        var i;

        for (i = 0; i < listeners.length; i += 1) {
            flatListeners.push(listeners[i].listener);
        }

        return flatListeners;
    };

    /**
     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Object} All listener functions for an event in an object.
     */
    proto.getListenersAsObject = function getListenersAsObject(evt) {
        var listeners = this.getListeners(evt);
        var response;

        if (listeners instanceof Array) {
            response = {};
            response[evt] = listeners;
        }

        return response || listeners;
    };

    /**
     * Adds a listener function to the specified event.
     * The listener will not be added if it is a duplicate.
     * If the listener returns true then it will be removed after it is called.
     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListener = function addListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var listenerIsWrapped = typeof listener === 'object';
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
                listeners[key].push(listenerIsWrapped ? listener : {
                    listener: listener,
                    once: false
                });
            }
        }

        return this;
    };

    /**
     * Alias of addListener
     */
    proto.on = alias('addListener');

    /**
     * Semi-alias of addListener. It will add a listener that will be
     * automatically removed after its first execution.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addOnceListener = function addOnceListener(evt, listener) {
        return this.addListener(evt, {
            listener: listener,
            once: true
        });
    };

    /**
     * Alias of addOnceListener.
     */
    proto.once = alias('addOnceListener');

    /**
     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
     * You need to tell it what event names should be matched by a regex.
     *
     * @param {String} evt Name of the event to create.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvent = function defineEvent(evt) {
        this.getListeners(evt);
        return this;
    };

    /**
     * Uses defineEvent to define multiple events.
     *
     * @param {String[]} evts An array of event names to define.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvents = function defineEvents(evts) {
        for (var i = 0; i < evts.length; i += 1) {
            this.defineEvent(evts[i]);
        }
        return this;
    };

    /**
     * Removes a listener function from the specified event.
     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to remove the listener from.
     * @param {Function} listener Method to remove from the event.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListener = function removeListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var index;
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                index = indexOfListener(listeners[key], listener);

                if (index !== -1) {
                    listeners[key].splice(index, 1);
                }
            }
        }

        return this;
    };

    /**
     * Alias of removeListener
     */
    proto.off = alias('removeListener');

    /**
     * Adds listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
     * You can also pass it a regular expression to add the array of listeners to all events that match it.
     * Yeah, this function does quite a bit. That's probably a bad thing.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListeners = function addListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(false, evt, listeners);
    };

    /**
     * Removes listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be removed.
     * You can also pass it a regular expression to remove the listeners from all events that match it.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListeners = function removeListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(true, evt, listeners);
    };

    /**
     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
     * The first argument will determine if the listeners are removed (true) or added (false).
     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be added/removed.
     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
     *
     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
        var i;
        var value;
        var single = remove ? this.removeListener : this.addListener;
        var multiple = remove ? this.removeListeners : this.addListeners;

        // If evt is an object then pass each of its properties to this method
        if (typeof evt === 'object' && !(evt instanceof RegExp)) {
            for (i in evt) {
                if (evt.hasOwnProperty(i) && (value = evt[i])) {
                    // Pass the single listener straight through to the singular method
                    if (typeof value === 'function') {
                        single.call(this, i, value);
                    }
                    else {
                        // Otherwise pass back to the multiple function
                        multiple.call(this, i, value);
                    }
                }
            }
        }
        else {
            // So evt must be a string
            // And listeners must be an array of listeners
            // Loop over it and pass each one to the multiple method
            i = listeners.length;
            while (i--) {
                single.call(this, evt, listeners[i]);
            }
        }

        return this;
    };

    /**
     * Removes all listeners from a specified event.
     * If you do not specify an event then all listeners will be removed.
     * That means every event will be emptied.
     * You can also pass a regex to remove all events that match it.
     *
     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeEvent = function removeEvent(evt) {
        var type = typeof evt;
        var events = this._getEvents();
        var key;

        // Remove different things depending on the state of evt
        if (type === 'string') {
            // Remove all listeners for the specified event
            delete events[evt];
        }
        else if (evt instanceof RegExp) {
            // Remove all events matching the regex.
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    delete events[key];
                }
            }
        }
        else {
            // Remove all listeners in all events
            delete this._events;
        }

        return this;
    };

    /**
     * Alias of removeEvent.
     *
     * Added to mirror the node API.
     */
    proto.removeAllListeners = alias('removeEvent');

    /**
     * Emits an event of your choice.
     * When emitted, every listener attached to that event will be executed.
     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
     * So they will not arrive within the array on the other side, they will be separate.
     * You can also pass a regular expression to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {Array} [args] Optional array of arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emitEvent = function emitEvent(evt, args) {
        var listenersMap = this.getListenersAsObject(evt);
        var listeners;
        var listener;
        var i;
        var key;
        var response;

        for (key in listenersMap) {
            if (listenersMap.hasOwnProperty(key)) {
                listeners = listenersMap[key].slice(0);
                i = listeners.length;

                while (i--) {
                    // If the listener returns true then it shall be removed from the event
                    // The function is executed either with a basic call or an apply if there is an args array
                    listener = listeners[i];

                    if (listener.once === true) {
                        this.removeListener(evt, listener.listener);
                    }

                    response = listener.listener.apply(this, args || []);

                    if (response === this._getOnceReturnValue()) {
                        this.removeListener(evt, listener.listener);
                    }
                }
            }
        }

        return this;
    };

    /**
     * Alias of emitEvent
     */
    proto.trigger = alias('emitEvent');

    /**
     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {...*} Optional additional arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emit = function emit(evt) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(evt, args);
    };

    /**
     * Sets the current value to check against when executing listeners. If a
     * listeners return value matches the one set here then it will be removed
     * after execution. This value defaults to true.
     *
     * @param {*} value The new value to check for when executing listeners.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.setOnceReturnValue = function setOnceReturnValue(value) {
        this._onceReturnValue = value;
        return this;
    };

    /**
     * Fetches the current value to check against when executing listeners. If
     * the listeners return value matches this one then it should be removed
     * automatically. It will return true by default.
     *
     * @return {*|Boolean} The current value to check for or the default, true.
     * @api private
     */
    proto._getOnceReturnValue = function _getOnceReturnValue() {
        if (this.hasOwnProperty('_onceReturnValue')) {
            return this._onceReturnValue;
        }
        else {
            return true;
        }
    };

    /**
     * Fetches the events object and creates one if required.
     *
     * @return {Object} The events storage object.
     * @api private
     */
    proto._getEvents = function _getEvents() {
        return this._events || (this._events = {});
    };

    /**
     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
     *
     * @return {Function} Non conflicting EventEmitter class.
     */
    EventEmitter.noConflict = function noConflict() {
        exports.EventEmitter = originalGlobalValue;
        return EventEmitter;
    };

    // Expose the class either via AMD, CommonJS or the global object
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return EventEmitter;
        });
    }
    else if (typeof module === 'object' && module.exports){
        module.exports = EventEmitter;
    }
    else {
        exports.EventEmitter = EventEmitter;
    }
}.call(this));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL2luZGV4LmpzIiwiaW5kZXguanMiLCJub2RlX21vZHVsZXMvYXJyYXktZmxhdHRlbi9hcnJheS1mbGF0dGVuLmpzIiwibm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9saWIvYjY0LmpzIiwibm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb21wb25lbnQtcmFmL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvbXBvbmVudC10eXBlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Rla3UvbGliL2FwcGxpY2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2Rla3UvbGliL2V2ZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9kZWt1L2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9kZWt1L2xpYi9ub2RlLXR5cGUuanMiLCJub2RlX21vZHVsZXMvZGVrdS9saWIvcmVuZGVyLmpzIiwibm9kZV9tb2R1bGVzL2Rla3UvbGliL3N0cmluZ2lmeS5qcyIsIm5vZGVfbW9kdWxlcy9kZWt1L2xpYi9zdmcuanMiLCJub2RlX21vZHVsZXMvZGVrdS9ub2RlX21vZHVsZXMvY29tcG9uZW50LXR5cGUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZGVzYW5kcm8tY2xhc3NpZS9jbGFzc2llLmpzIiwibm9kZV9tb2R1bGVzL2Rlc2FuZHJvLWdldC1zdHlsZS1wcm9wZXJ0eS9nZXQtc3R5bGUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3Rvci9tYXRjaGVzLXNlbGVjdG9yLmpzIiwibm9kZV9tb2R1bGVzL2RvYy1yZWFkeS9kb2MtcmVhZHkuanMiLCJub2RlX21vZHVsZXMvZXZlbnRpZS9ldmVudGllLmpzIiwibm9kZV9tb2R1bGVzL2Zhc3QuanMvYXJyYXkvZm9yRWFjaC5qcyIsIm5vZGVfbW9kdWxlcy9mYXN0LmpzL2FycmF5L3JlZHVjZS5qcyIsIm5vZGVfbW9kdWxlcy9mYXN0LmpzL2ZvckVhY2guanMiLCJub2RlX21vZHVsZXMvZmFzdC5qcy9mdW5jdGlvbi9iaW5kSW50ZXJuYWwzLmpzIiwibm9kZV9tb2R1bGVzL2Zhc3QuanMvZnVuY3Rpb24vYmluZEludGVybmFsNC5qcyIsIm5vZGVfbW9kdWxlcy9mYXN0LmpzL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvZmFzdC5qcy9vYmplY3QvZm9yRWFjaC5qcyIsIm5vZGVfbW9kdWxlcy9mYXN0LmpzL29iamVjdC9yZWR1Y2UuanMiLCJub2RlX21vZHVsZXMvZmFzdC5qcy9yZWR1Y2UuanMiLCJub2RlX21vZHVsZXMvZml6enktdWktdXRpbHMvdXRpbHMuanMiLCJub2RlX21vZHVsZXMvZm9yLWluL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Zvci1vd24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2V0LXNpemUvZ2V0LXNpemUuanMiLCJub2RlX21vZHVsZXMvZ2V0LXVpZC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2ltYWdlc2xvYWRlZC9pbWFnZXNsb2FkZWQuanMiLCJub2RlX21vZHVsZXMvaXMtZG9tL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2lzLXN2Zy1hdHRyaWJ1dGUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvaXMtc3ZnLWVsZW1lbnQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbWFnaWMtdmlydHVhbC1lbGVtZW50L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL29iamVjdC1kZWZhdWx0cy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9vYmplY3Qtb21pdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9vYmplY3Qtb21pdC9ub2RlX21vZHVsZXMvaXNvYmplY3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvb2JqZWN0LXBhdGgvaW5kZXguanMiLCJub2RlX21vZHVsZXMvb3V0bGF5ZXIvaXRlbS5qcyIsIm5vZGVfbW9kdWxlcy9vdXRsYXllci9vdXRsYXllci5qcyIsIm5vZGVfbW9kdWxlcy9wYWNrZXJ5L2pzL2l0ZW0uanMiLCJub2RlX21vZHVsZXMvcGFja2VyeS9qcy9wYWNrZXIuanMiLCJub2RlX21vZHVsZXMvcGFja2VyeS9qcy9wYWNrZXJ5LmpzIiwibm9kZV9tb2R1bGVzL3BhY2tlcnkvanMvcmVjdC5qcyIsIm5vZGVfbW9kdWxlcy9zbGljZWQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdG8tc3R5bGUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdG8tc3R5bGUvc3JjL2Nzc1ByZWZpeC5qcyIsIm5vZGVfbW9kdWxlcy90by1zdHlsZS9zcmMvY3NzVW5pdGxlc3MuanMiLCJub2RlX21vZHVsZXMvdG8tc3R5bGUvc3JjL2hhc093bi5qcyIsIm5vZGVfbW9kdWxlcy90by1zdHlsZS9zcmMvaXNGdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy90by1zdHlsZS9zcmMvaXNPYmplY3QuanMiLCJub2RlX21vZHVsZXMvdG8tc3R5bGUvc3JjL3ByZWZpeEluZm8uanMiLCJub2RlX21vZHVsZXMvdG8tc3R5bGUvc3JjL3ByZWZpeFByb3BlcnRpZXMuanMiLCJub2RlX21vZHVsZXMvdG8tc3R5bGUvc3JjL3ByZWZpeGVyLmpzIiwibm9kZV9tb2R1bGVzL3RvLXN0eWxlL3NyYy9zdHJpbmdVdGlscy9jYW1lbGl6ZS5qcyIsIm5vZGVfbW9kdWxlcy90by1zdHlsZS9zcmMvc3RyaW5nVXRpbHMvaHlwaGVuUmUuanMiLCJub2RlX21vZHVsZXMvdG8tc3R5bGUvc3JjL3N0cmluZ1V0aWxzL2h5cGhlbmF0ZS5qcyIsIm5vZGVfbW9kdWxlcy90by1zdHlsZS9zcmMvc3RyaW5nVXRpbHMvc2VwYXJhdGUuanMiLCJub2RlX21vZHVsZXMvdG8tc3R5bGUvc3JjL3N0cmluZ1V0aWxzL3RvTG93ZXJGaXJzdC5qcyIsIm5vZGVfbW9kdWxlcy90by1zdHlsZS9zcmMvc3RyaW5nVXRpbHMvdG9VcHBlckZpcnN0LmpzIiwibm9kZV9tb2R1bGVzL3RvLXN0eWxlL3NyYy90b1N0eWxlT2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL3RvLXN0eWxlL3NyYy90b1N0eWxlU3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtZWxlbWVudC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy92aXJ0dWFsLWVsZW1lbnQvbm9kZV9tb2R1bGVzL3NsaWNlZC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy93b2xmeTg3LWV2ZW50ZW1pdHRlci9FdmVudEVtaXR0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0tBLElBQU0sSUFBSSxHQUFHO0FBQ1osWUFBVyxFQUFFLGVBQWU7QUFDNUIsYUFBWSxFQUFFLGVBQWU7QUFDN0IsZ0JBQWUsRUFBRSxJQUFJO0FBQ3JCLE1BQUssRUFBRSxnQkFBZ0I7Q0FDdkI7QUFBQztBQUVGLElBQU0sR0FBRyxHQUFHLFVBVkksSUFBSSxFQVduQjs7R0FBUyxTQUFNLFNBQVMsRUFBQyxPQUFPLEVBQUUsSUFBSSxBQUFDO0NBQ3RDOztJQUFLLFNBQU0sZ0NBQWdDO0VBQUMsNENBQUssR0FBRyxFQUFDLDZCQUE2QixHQUFFO0VBQU07Q0FDMUY7O0lBQUssU0FBTSxnQ0FBZ0M7RUFBQyw0Q0FBSyxHQUFHLEVBQUMsNkJBQTZCLEdBQUU7RUFBTTtDQUMxRiw0Q0FBSyxTQUFNLGNBQWMsR0FBRTtDQUMzQjs7SUFBSyxTQUFNLGNBQWM7RUFBQyw0Q0FBSyxHQUFHLEVBQUMsNkJBQTZCLEdBQUU7RUFBTTtDQUN4RTs7SUFBSyxTQUFNLGNBQWM7RUFBQyw0Q0FBSyxHQUFHLEVBQUMsNkJBQTZCLEdBQUU7RUFBTTtDQUN4RTs7SUFBSyxTQUFNLGNBQWM7RUFBQyw0Q0FBSyxHQUFHLEVBQUMsNkJBQTZCLEdBQUU7RUFBTTtDQUN4RTs7SUFBSyxTQUFNLGNBQWM7RUFBQyw0Q0FBSyxHQUFHLEVBQUMsNkJBQTZCLEdBQUU7RUFBTTtDQUMvRCxDQUNWLENBQUM7O0FBRUYsVUF0QlEsTUFBTSxFQXNCUCxHQUFHLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCM0IsSUFBTSxTQUFTLEdBQUc7QUFDakIsU0FBUSxFQUFFO0FBQ1QsTUFBSSxFQUFFLE9BQU87RUFDYjtBQUNELFVBQVMsRUFBRTtBQUNWLE1BQUksRUFBRSxRQUFRO0VBQ2Q7QUFDRCxRQUFPLEVBQUU7QUFDUixNQUFJLEVBQUUsUUFBUTtFQUNkO0NBQ0QsQ0FBQzs7QUFFRixJQUFNLFlBQVksR0FBRztBQUNwQixVQUFTLEVBQUUsS0FBSztDQUNoQixDQUFDOztBQUVGLFNBQVMsV0FBVyxPQUFVLEVBQUUsRUFBRTtLQUFaLEtBQUssUUFBTCxLQUFLO0tBQ25CLE9BQU8sR0FBSSxLQUFLLENBQWhCLE9BQU87O0FBRWQsNkJBQWEsRUFBRSxFQUFFLFlBQU07QUFDdEIsTUFBTSxPQUFPLEdBQUcsc0JBQVksRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pDLFNBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztFQUNqQixDQUFDLENBQUM7Q0FDSDs7QUFFRCxTQUFTLE1BQU0sUUFBVTtLQUFSLEtBQUssU0FBTCxLQUFLO0tBQ2QsUUFBUSxHQUFlLEtBQUssQ0FBNUIsUUFBUTtLQUFFLFNBQVMsR0FBSSxLQUFLLENBQWxCLFNBQVM7O0FBQzFCLFFBQU8sbUNBQUksU0FBUyxFQUFFLDBCQUFXLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7Q0FDM0U7O2tCQUVjLEVBQUMsV0FBVyxFQUFYLFdBQVcsRUFBRSxZQUFZLEVBQVosWUFBWSxFQUFFLFNBQVMsRUFBVCxTQUFTLEVBQUUsTUFBTSxFQUFOLE1BQU0sRUFBQzs7O0FDcEM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM1SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDeGdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeGtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOTVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RUE7QUFDQTs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKiBAanN4IGRvbSAqL1xuaW1wb3J0IGRvbSBmcm9tICdtYWdpYy12aXJ0dWFsLWVsZW1lbnQnO1xuaW1wb3J0IHtyZW5kZXIsIHRyZWV9IGZyb20gJ2Rla3UnO1xuaW1wb3J0IFBhY2tlcnkgZnJvbSAnLi4vJztcblxuY29uc3Qgb3B0cyA9IHtcblx0Y29sdW1uV2lkdGg6ICcuUGFja2VyeS1zaXplJyxcblx0aXRlbVNlbGVjdG9yOiAnLlBhY2tlcnktaXRlbScsXG5cdHBlcmNlbnRQb3NpdGlvbjogdHJ1ZSxcblx0c3RhbXA6ICcuUGFja2VyeS1zdGFtcCdcbn07XG5cbmNvbnN0IGFwcCA9IHRyZWUoXG5cdDxQYWNrZXJ5IGNsYXNzPSdQYWNrZXJ5JyBvcHRpb25zPXtvcHRzfT5cblx0XHQ8ZGl2IGNsYXNzPSdQYWNrZXJ5LXN0YW1wIFBhY2tlcnktc3RhbXAtLTEnPjxpbWcgc3JjPSdodHRwOi8vcGxhY2Vob2xkLml0LzM1MHgzMDAnLz48L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPSdQYWNrZXJ5LXN0YW1wIFBhY2tlcnktc3RhbXAtLTInPjxpbWcgc3JjPSdodHRwOi8vcGxhY2Vob2xkLml0LzcwMHgxNTAnLz48L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPSdQYWNrZXJ5LXNpemUnLz5cblx0XHQ8ZGl2IGNsYXNzPSdQYWNrZXJ5LWl0ZW0nPjxpbWcgc3JjPSdodHRwOi8vcGxhY2Vob2xkLml0LzM1MHgxNTAnLz48L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPSdQYWNrZXJ5LWl0ZW0nPjxpbWcgc3JjPSdodHRwOi8vcGxhY2Vob2xkLml0LzM1MHgxNTAnLz48L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPSdQYWNrZXJ5LWl0ZW0nPjxpbWcgc3JjPSdodHRwOi8vcGxhY2Vob2xkLml0LzM1MHgxNTAnLz48L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPSdQYWNrZXJ5LWl0ZW0nPjxpbWcgc3JjPSdodHRwOi8vcGxhY2Vob2xkLml0LzM1MHgxNTAnLz48L2Rpdj5cblx0PC9QYWNrZXJ5PlxuKTtcblxucmVuZGVyKGFwcCwgZG9jdW1lbnQuYm9keSk7XG4iLCIvKiogQGpzeCBkb20gKi9cbmltcG9ydCBkb20gZnJvbSAnbWFnaWMtdmlydHVhbC1lbGVtZW50JztcbmltcG9ydCBpbWFnZXNsb2FkZWQgZnJvbSAnaW1hZ2VzbG9hZGVkJztcbmltcG9ydCBvYmplY3RPbWl0IGZyb20gJ29iamVjdC1vbWl0JztcbmltcG9ydCBQYWNrZXJ5IGZyb20gJ3BhY2tlcnknO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG5cdGNoaWxkcmVuOiB7XG5cdFx0dHlwZTogJ2FycmF5J1xuXHR9LFxuXHRjb21wb25lbnQ6IHtcblx0XHR0eXBlOiAnc3RyaW5nJ1xuXHR9LFxuXHRvcHRpb25zOiB7XG5cdFx0dHlwZTogJ29iamVjdCdcblx0fVxufTtcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuXHRjb21wb25lbnQ6ICdkaXYnXG59O1xuXG5mdW5jdGlvbiBhZnRlclJlbmRlcih7cHJvcHN9LCBlbCkge1xuXHRjb25zdCB7b3B0aW9uc30gPSBwcm9wcztcblxuXHRpbWFnZXNsb2FkZWQoZWwsICgpID0+IHtcblx0XHRjb25zdCBwYWNrZXJ5ID0gbmV3IFBhY2tlcnkoZWwsIG9wdGlvbnMpO1xuXHRcdHBhY2tlcnkubGF5b3V0KCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXIoe3Byb3BzfSkge1xuXHRjb25zdCB7Y2hpbGRyZW4sIGNvbXBvbmVudH0gPSBwcm9wcztcblx0cmV0dXJuIGRvbShjb21wb25lbnQsIG9iamVjdE9taXQocHJvcHMsIE9iamVjdC5rZXlzKHByb3BUeXBlcykpLCBjaGlsZHJlbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHthZnRlclJlbmRlciwgZGVmYXVsdFByb3BzLCBwcm9wVHlwZXMsIHJlbmRlcn07XG4iLCIndXNlIHN0cmljdCdcblxuLyoqXG4gKiBFeHBvc2UgYGFycmF5RmxhdHRlbmAuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGbGF0dGVuXG5cbi8qKlxuICogUmVjdXJzaXZlIGZsYXR0ZW4gZnVuY3Rpb24gd2l0aCBkZXB0aC5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gIGFycmF5XG4gKiBAcGFyYW0gIHtBcnJheX0gIHJlc3VsdFxuICogQHBhcmFtICB7TnVtYmVyfSBkZXB0aFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGZsYXR0ZW5XaXRoRGVwdGggKGFycmF5LCByZXN1bHQsIGRlcHRoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpXVxuXG4gICAgaWYgKGRlcHRoID4gMCAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgZmxhdHRlbldpdGhEZXB0aCh2YWx1ZSwgcmVzdWx0LCBkZXB0aCAtIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBSZWN1cnNpdmUgZmxhdHRlbiBmdW5jdGlvbi4gT21pdHRpbmcgZGVwdGggaXMgc2xpZ2h0bHkgZmFzdGVyLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSBhcnJheVxuICogQHBhcmFtICB7QXJyYXl9IHJlc3VsdFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGZsYXR0ZW5Gb3JldmVyIChhcnJheSwgcmVzdWx0KSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpXVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBmbGF0dGVuRm9yZXZlcih2YWx1ZSwgcmVzdWx0KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogRmxhdHRlbiBhbiBhcnJheSwgd2l0aCB0aGUgYWJpbGl0eSB0byBkZWZpbmUgYSBkZXB0aC5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gIGFycmF5XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGRlcHRoXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gYXJyYXlGbGF0dGVuIChhcnJheSwgZGVwdGgpIHtcbiAgaWYgKGRlcHRoID09IG51bGwpIHtcbiAgICByZXR1cm4gZmxhdHRlbkZvcmV2ZXIoYXJyYXksIFtdKVxuICB9XG5cbiAgcmV0dXJuIGZsYXR0ZW5XaXRoRGVwdGgoYXJyYXksIFtdLCBkZXB0aClcbn1cbiIsInZhciBsb29rdXAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbjsoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG4gIHZhciBBcnIgPSAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKVxuICAgID8gVWludDhBcnJheVxuICAgIDogQXJyYXlcblxuXHR2YXIgUExVUyAgID0gJysnLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIICA9ICcvJy5jaGFyQ29kZUF0KDApXG5cdHZhciBOVU1CRVIgPSAnMCcuY2hhckNvZGVBdCgwKVxuXHR2YXIgTE9XRVIgID0gJ2EnLmNoYXJDb2RlQXQoMClcblx0dmFyIFVQUEVSICA9ICdBJy5jaGFyQ29kZUF0KDApXG5cdHZhciBQTFVTX1VSTF9TQUZFID0gJy0nLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIX1VSTF9TQUZFID0gJ18nLmNoYXJDb2RlQXQoMClcblxuXHRmdW5jdGlvbiBkZWNvZGUgKGVsdCkge1xuXHRcdHZhciBjb2RlID0gZWx0LmNoYXJDb2RlQXQoMClcblx0XHRpZiAoY29kZSA9PT0gUExVUyB8fFxuXHRcdCAgICBjb2RlID09PSBQTFVTX1VSTF9TQUZFKVxuXHRcdFx0cmV0dXJuIDYyIC8vICcrJ1xuXHRcdGlmIChjb2RlID09PSBTTEFTSCB8fFxuXHRcdCAgICBjb2RlID09PSBTTEFTSF9VUkxfU0FGRSlcblx0XHRcdHJldHVybiA2MyAvLyAnLydcblx0XHRpZiAoY29kZSA8IE5VTUJFUilcblx0XHRcdHJldHVybiAtMSAvL25vIG1hdGNoXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIgKyAxMClcblx0XHRcdHJldHVybiBjb2RlIC0gTlVNQkVSICsgMjYgKyAyNlxuXHRcdGlmIChjb2RlIDwgVVBQRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gVVBQRVJcblx0XHRpZiAoY29kZSA8IExPV0VSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIExPV0VSICsgMjZcblx0fVxuXG5cdGZ1bmN0aW9uIGI2NFRvQnl0ZUFycmF5IChiNjQpIHtcblx0XHR2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuXG5cdFx0aWYgKGI2NC5sZW5ndGggJSA0ID4gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0Jylcblx0XHR9XG5cblx0XHQvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuXHRcdC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcblx0XHQvLyByZXByZXNlbnQgb25lIGJ5dGVcblx0XHQvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcblx0XHQvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG5cdFx0dmFyIGxlbiA9IGI2NC5sZW5ndGhcblx0XHRwbGFjZUhvbGRlcnMgPSAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMikgPyAyIDogJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDEpID8gMSA6IDBcblxuXHRcdC8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuXHRcdGFyciA9IG5ldyBBcnIoYjY0Lmxlbmd0aCAqIDMgLyA0IC0gcGxhY2VIb2xkZXJzKVxuXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuXHRcdGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gYjY0Lmxlbmd0aCAtIDQgOiBiNjQubGVuZ3RoXG5cblx0XHR2YXIgTCA9IDBcblxuXHRcdGZ1bmN0aW9uIHB1c2ggKHYpIHtcblx0XHRcdGFycltMKytdID0gdlxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTgpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgMTIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPDwgNikgfCBkZWNvZGUoYjY0LmNoYXJBdChpICsgMykpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDAwMCkgPj4gMTYpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDApID4+IDgpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0aWYgKHBsYWNlSG9sZGVycyA9PT0gMikge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpID4+IDQpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTApIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgNCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA+PiAyKVxuXHRcdFx0cHVzaCgodG1wID4+IDgpICYgMHhGRilcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyXG5cdH1cblxuXHRmdW5jdGlvbiB1aW50OFRvQmFzZTY0ICh1aW50OCkge1xuXHRcdHZhciBpLFxuXHRcdFx0ZXh0cmFCeXRlcyA9IHVpbnQ4Lmxlbmd0aCAlIDMsIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG5cdFx0XHRvdXRwdXQgPSBcIlwiLFxuXHRcdFx0dGVtcCwgbGVuZ3RoXG5cblx0XHRmdW5jdGlvbiBlbmNvZGUgKG51bSkge1xuXHRcdFx0cmV0dXJuIGxvb2t1cC5jaGFyQXQobnVtKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKG51bSA+PiAxOCAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiAxMiAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiA2ICYgMHgzRikgKyBlbmNvZGUobnVtICYgMHgzRilcblx0XHR9XG5cblx0XHQvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG5cdFx0Zm9yIChpID0gMCwgbGVuZ3RoID0gdWludDgubGVuZ3RoIC0gZXh0cmFCeXRlczsgaSA8IGxlbmd0aDsgaSArPSAzKSB7XG5cdFx0XHR0ZW1wID0gKHVpbnQ4W2ldIDw8IDE2KSArICh1aW50OFtpICsgMV0gPDwgOCkgKyAodWludDhbaSArIDJdKVxuXHRcdFx0b3V0cHV0ICs9IHRyaXBsZXRUb0Jhc2U2NCh0ZW1wKVxuXHRcdH1cblxuXHRcdC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcblx0XHRzd2l0Y2ggKGV4dHJhQnl0ZXMpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGVtcCA9IHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAyKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9PSdcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGVtcCA9ICh1aW50OFt1aW50OC5sZW5ndGggLSAyXSA8PCA4KSArICh1aW50OFt1aW50OC5sZW5ndGggLSAxXSlcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDEwKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wID4+IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCAyKSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPSdcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0XG5cdH1cblxuXHRleHBvcnRzLnRvQnl0ZUFycmF5ID0gYjY0VG9CeXRlQXJyYXlcblx0ZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gdWludDhUb0Jhc2U2NFxufSh0eXBlb2YgZXhwb3J0cyA9PT0gJ3VuZGVmaW5lZCcgPyAodGhpcy5iYXNlNjRqcyA9IHt9KSA6IGV4cG9ydHMpKVxuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbnZhciByb290UGFyZW50ID0ge31cblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogRHVlIHRvIHZhcmlvdXMgYnJvd3NlciBidWdzLCBzb21ldGltZXMgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIHVzZWQgZXZlblxuICogd2hlbiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0eXBlZCBhcnJheXMuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAgIC0gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLFxuICogICAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAgLSBTYWZhcmkgNS03IGxhY2tzIHN1cHBvcnQgZm9yIGNoYW5naW5nIHRoZSBgT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3RvcmAgcHJvcGVydHlcbiAqICAgICBvbiBvYmplY3RzLlxuICpcbiAqICAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG5cbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5XG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCBiZWhhdmVzIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVCAhPT0gdW5kZWZpbmVkXG4gID8gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgOiB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlTdXBwb3J0ICgpIHtcbiAgZnVuY3Rpb24gQmFyICgpIHt9XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgYXJyLmZvbyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH1cbiAgICBhcnIuY29uc3RydWN0b3IgPSBCYXJcbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MiAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICBhcnIuY29uc3RydWN0b3IgPT09IEJhciAmJiAvLyBjb25zdHJ1Y3RvciBjYW4gYmUgc2V0XG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgJiYgLy8gY2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gICAgICAgIGFyci5zdWJhcnJheSgxLCAxKS5ieXRlTGVuZ3RoID09PSAwIC8vIGllMTAgaGFzIGJyb2tlbiBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBrTWF4TGVuZ3RoICgpIHtcbiAgcmV0dXJuIEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gICAgPyAweDdmZmZmZmZmXG4gICAgOiAweDNmZmZmZmZmXG59XG5cbi8qKlxuICogQ2xhc3M6IEJ1ZmZlclxuICogPT09PT09PT09PT09PVxuICpcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgYXJlIGF1Z21lbnRlZFxuICogd2l0aCBmdW5jdGlvbiBwcm9wZXJ0aWVzIGZvciBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgQVBJIGZ1bmN0aW9ucy4gV2UgdXNlXG4gKiBgVWludDhBcnJheWAgc28gdGhhdCBzcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdCByZXR1cm5zXG4gKiBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBCeSBhdWdtZW50aW5nIHRoZSBpbnN0YW5jZXMsIHdlIGNhbiBhdm9pZCBtb2RpZnlpbmcgdGhlIGBVaW50OEFycmF5YFxuICogcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBCdWZmZXIgKGFyZykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSkge1xuICAgIC8vIEF2b2lkIGdvaW5nIHRocm91Z2ggYW4gQXJndW1lbnRzQWRhcHRvclRyYW1wb2xpbmUgaW4gdGhlIGNvbW1vbiBjYXNlLlxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkgcmV0dXJuIG5ldyBCdWZmZXIoYXJnLCBhcmd1bWVudHNbMV0pXG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoYXJnKVxuICB9XG5cbiAgdGhpcy5sZW5ndGggPSAwXG4gIHRoaXMucGFyZW50ID0gdW5kZWZpbmVkXG5cbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmcm9tTnVtYmVyKHRoaXMsIGFyZylcbiAgfVxuXG4gIC8vIFNsaWdodGx5IGxlc3MgY29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHRoaXMsIGFyZywgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiAndXRmOCcpXG4gIH1cblxuICAvLyBVbnVzdWFsLlxuICByZXR1cm4gZnJvbU9iamVjdCh0aGlzLCBhcmcpXG59XG5cbmZ1bmN0aW9uIGZyb21OdW1iZXIgKHRoYXQsIGxlbmd0aCkge1xuICB0aGF0ID0gYWxsb2NhdGUodGhhdCwgbGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGxlbmd0aCkgfCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAodGhhdCwgc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgLy8gQXNzdW1wdGlvbjogYnl0ZUxlbmd0aCgpIHJldHVybiB2YWx1ZSBpcyBhbHdheXMgPCBrTWF4TGVuZ3RoLlxuICB2YXIgbGVuZ3RoID0gYnl0ZUxlbmd0aChzdHJpbmcsIGVuY29kaW5nKSB8IDBcbiAgdGhhdCA9IGFsbG9jYXRlKHRoYXQsIGxlbmd0aClcblxuICB0aGF0LndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iamVjdCkge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iamVjdCkpIHJldHVybiBmcm9tQnVmZmVyKHRoYXQsIG9iamVjdClcblxuICBpZiAoaXNBcnJheShvYmplY3QpKSByZXR1cm4gZnJvbUFycmF5KHRoYXQsIG9iamVjdClcblxuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtdXN0IHN0YXJ0IHdpdGggbnVtYmVyLCBidWZmZXIsIGFycmF5IG9yIHN0cmluZycpXG4gIH1cblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChvYmplY3QuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgIHJldHVybiBmcm9tVHlwZWRBcnJheSh0aGF0LCBvYmplY3QpXG4gICAgfVxuICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih0aGF0LCBvYmplY3QpXG4gICAgfVxuICB9XG5cbiAgaWYgKG9iamVjdC5sZW5ndGgpIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iamVjdClcblxuICByZXR1cm4gZnJvbUpzb25PYmplY3QodGhhdCwgb2JqZWN0KVxufVxuXG5mdW5jdGlvbiBmcm9tQnVmZmVyICh0aGF0LCBidWZmZXIpIHtcbiAgdmFyIGxlbmd0aCA9IGNoZWNrZWQoYnVmZmVyLmxlbmd0aCkgfCAwXG4gIHRoYXQgPSBhbGxvY2F0ZSh0aGF0LCBsZW5ndGgpXG4gIGJ1ZmZlci5jb3B5KHRoYXQsIDAsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5ICh0aGF0LCBhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gYWxsb2NhdGUodGhhdCwgbGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLy8gRHVwbGljYXRlIG9mIGZyb21BcnJheSgpIHRvIGtlZXAgZnJvbUFycmF5KCkgbW9ub21vcnBoaWMuXG5mdW5jdGlvbiBmcm9tVHlwZWRBcnJheSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgdGhhdCA9IGFsbG9jYXRlKHRoYXQsIGxlbmd0aClcbiAgLy8gVHJ1bmNhdGluZyB0aGUgZWxlbWVudHMgaXMgcHJvYmFibHkgbm90IHdoYXQgcGVvcGxlIGV4cGVjdCBmcm9tIHR5cGVkXG4gIC8vIGFycmF5cyB3aXRoIEJZVEVTX1BFUl9FTEVNRU5UID4gMSBidXQgaXQncyBjb21wYXRpYmxlIHdpdGggdGhlIGJlaGF2aW9yXG4gIC8vIG9mIHRoZSBvbGQgQnVmZmVyIGNvbnN0cnVjdG9yLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyICh0aGF0LCBhcnJheSkge1xuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICBhcnJheS5ieXRlTGVuZ3RoXG4gICAgdGhhdCA9IEJ1ZmZlci5fYXVnbWVudChuZXcgVWludDhBcnJheShhcnJheSkpXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tVHlwZWRBcnJheSh0aGF0LCBuZXcgVWludDhBcnJheShhcnJheSkpXG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgdGhhdCA9IGFsbG9jYXRlKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbi8vIERlc2VyaWFsaXplIHsgdHlwZTogJ0J1ZmZlcicsIGRhdGE6IFsxLDIsMywuLi5dIH0gaW50byBhIEJ1ZmZlciBvYmplY3QuXG4vLyBSZXR1cm5zIGEgemVyby1sZW5ndGggYnVmZmVyIGZvciBpbnB1dHMgdGhhdCBkb24ndCBjb25mb3JtIHRvIHRoZSBzcGVjLlxuZnVuY3Rpb24gZnJvbUpzb25PYmplY3QgKHRoYXQsIG9iamVjdCkge1xuICB2YXIgYXJyYXlcbiAgdmFyIGxlbmd0aCA9IDBcblxuICBpZiAob2JqZWN0LnR5cGUgPT09ICdCdWZmZXInICYmIGlzQXJyYXkob2JqZWN0LmRhdGEpKSB7XG4gICAgYXJyYXkgPSBvYmplY3QuZGF0YVxuICAgIGxlbmd0aCA9IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgfVxuICB0aGF0ID0gYWxsb2NhdGUodGhhdCwgbGVuZ3RoKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGF0W2ldID0gYXJyYXlbaV0gJiAyNTVcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxufVxuXG5mdW5jdGlvbiBhbGxvY2F0ZSAodGhhdCwgbGVuZ3RoKSB7XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBCdWZmZXIuX2F1Z21lbnQobmV3IFVpbnQ4QXJyYXkobGVuZ3RoKSlcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGhcbiAgICB0aGF0Ll9pc0J1ZmZlciA9IHRydWVcbiAgfVxuXG4gIHZhciBmcm9tUG9vbCA9IGxlbmd0aCAhPT0gMCAmJiBsZW5ndGggPD0gQnVmZmVyLnBvb2xTaXplID4+PiAxXG4gIGlmIChmcm9tUG9vbCkgdGhhdC5wYXJlbnQgPSByb290UGFyZW50XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IGtNYXhMZW5ndGhgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0ga01heExlbmd0aCgpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgoKS50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChzdWJqZWN0LCBlbmNvZGluZykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU2xvd0J1ZmZlcikpIHJldHVybiBuZXcgU2xvd0J1ZmZlcihzdWJqZWN0LCBlbmNvZGluZylcblxuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcihzdWJqZWN0LCBlbmNvZGluZylcbiAgZGVsZXRlIGJ1Zi5wYXJlbnRcbiAgcmV0dXJuIGJ1ZlxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlciAoYikge1xuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyBtdXN0IGJlIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGEgPT09IGIpIHJldHVybiAwXG5cbiAgdmFyIHggPSBhLmxlbmd0aFxuICB2YXIgeSA9IGIubGVuZ3RoXG5cbiAgdmFyIGkgPSAwXG4gIHZhciBsZW4gPSBNYXRoLm1pbih4LCB5KVxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSBicmVha1xuXG4gICAgKytpXG4gIH1cblxuICBpZiAoaSAhPT0gbGVuKSB7XG4gICAgeCA9IGFbaV1cbiAgICB5ID0gYltpXVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICdyYXcnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdsaXN0IGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycy4nKVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKDApXG4gIH1cblxuICB2YXIgaVxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWYgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICBpdGVtLmNvcHkoYnVmLCBwb3MpXG4gICAgcG9zICs9IGl0ZW0ubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykgc3RyaW5nID0gJycgKyBzdHJpbmdcblxuICB2YXIgbGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAobGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIC8vIERlcHJlY2F0ZWRcbiAgICAgIGNhc2UgJ3Jhdyc6XG4gICAgICBjYXNlICdyYXdzJzpcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbi8vIHByZS1zZXQgZm9yIHZhbHVlcyB0aGF0IG1heSBleGlzdCBpbiB0aGUgZnV0dXJlXG5CdWZmZXIucHJvdG90eXBlLmxlbmd0aCA9IHVuZGVmaW5lZFxuQnVmZmVyLnByb3RvdHlwZS5wYXJlbnQgPSB1bmRlZmluZWRcblxuZnVuY3Rpb24gc2xvd1RvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIHN0YXJ0ID0gc3RhcnQgfCAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA9PT0gSW5maW5pdHkgPyB0aGlzLmxlbmd0aCA6IGVuZCB8IDBcblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAoZW5kIDw9IHN0YXJ0KSByZXR1cm4gJydcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBiaW5hcnlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoIHwgMFxuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gJydcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1dGY4U2xpY2UodGhpcywgMCwgbGVuZ3RoKVxuICByZXR1cm4gc2xvd1RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIHRydWVcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICB2YXIgc3RyID0gJydcbiAgdmFyIG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkubWF0Y2goLy57Mn0vZykuam9pbignICcpXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KSBzdHIgKz0gJyAuLi4gJ1xuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIDBcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCkge1xuICBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmXG4gIGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwXG4gIGJ5dGVPZmZzZXQgPj49IDBcblxuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVybiAtMVxuICBpZiAoYnl0ZU9mZnNldCA+PSB0aGlzLmxlbmd0aCkgcmV0dXJuIC0xXG5cbiAgLy8gTmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBNYXRoLm1heCh0aGlzLmxlbmd0aCArIGJ5dGVPZmZzZXQsIDApXG5cbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDApIHJldHVybiAtMSAvLyBzcGVjaWFsIGNhc2U6IGxvb2tpbmcgZm9yIGVtcHR5IHN0cmluZyBhbHdheXMgZmFpbHNcbiAgICByZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5pbmRleE9mLmNhbGwodGhpcywgdmFsLCBieXRlT2Zmc2V0KVxuICB9XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIHJldHVybiBhcnJheUluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0KVxuICB9XG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHRoaXMsIHZhbCwgYnl0ZU9mZnNldClcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZih0aGlzLCBbIHZhbCBdLCBieXRlT2Zmc2V0KVxuICB9XG5cbiAgZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCkge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKHZhciBpID0gMDsgYnl0ZU9mZnNldCArIGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcnJbYnl0ZU9mZnNldCArIGldID09PSB2YWxbZm91bmRJbmRleCA9PT0gLTEgPyAwIDogaSAtIGZvdW5kSW5kZXhdKSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ID09PSAtMSkgZm91bmRJbmRleCA9IGlcbiAgICAgICAgaWYgKGkgLSBmb3VuZEluZGV4ICsgMSA9PT0gdmFsLmxlbmd0aCkgcmV0dXJuIGJ5dGVPZmZzZXQgKyBmb3VuZEluZGV4XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3VuZEluZGV4ID0gLTFcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWwgbXVzdCBiZSBzdHJpbmcsIG51bWJlciBvciBCdWZmZXInKVxufVxuXG4vLyBgZ2V0YCBpcyBkZXByZWNhdGVkXG5CdWZmZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCAob2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuZ2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy5yZWFkVUludDgob2Zmc2V0KVxufVxuXG4vLyBgc2V0YCBpcyBkZXByZWNhdGVkXG5CdWZmZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCAodiwgb2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuc2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy53cml0ZVVJbnQ4KHYsIG9mZnNldClcbn1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAoc3RyTGVuICUgMiAhPT0gMCkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihwYXJzZWQpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiaW5hcnlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCB8IDBcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4J1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICAvLyBsZWdhY3kgd3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpIC0gcmVtb3ZlIGluIHYwLjEzXG4gIH0gZWxzZSB7XG4gICAgdmFyIHN3YXAgPSBlbmNvZGluZ1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgb2Zmc2V0ID0gbGVuZ3RoIHwgMFxuICAgIGxlbmd0aCA9IHN3YXBcbiAgfVxuXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gYmluYXJ5V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgLy8gV2FybmluZzogbWF4TGVuZ3RoIG5vdCB0YWtlbiBpbnRvIGFjY291bnQgaW4gYmFzZTY0V3JpdGVcbiAgICAgICAgcmV0dXJuIGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1Y3MyV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuICB2YXIgcmVzID0gW11cblxuICB2YXIgaSA9IHN0YXJ0XG4gIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgdmFyIGZpcnN0Qnl0ZSA9IGJ1ZltpXVxuICAgIHZhciBjb2RlUG9pbnQgPSBudWxsXG4gICAgdmFyIGJ5dGVzUGVyU2VxdWVuY2UgPSAoZmlyc3RCeXRlID4gMHhFRikgPyA0XG4gICAgICA6IChmaXJzdEJ5dGUgPiAweERGKSA/IDNcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4QkYpID8gMlxuICAgICAgOiAxXG5cbiAgICBpZiAoaSArIGJ5dGVzUGVyU2VxdWVuY2UgPD0gZW5kKSB7XG4gICAgICB2YXIgc2Vjb25kQnl0ZSwgdGhpcmRCeXRlLCBmb3VydGhCeXRlLCB0ZW1wQ29kZVBvaW50XG5cbiAgICAgIHN3aXRjaCAoYnl0ZXNQZXJTZXF1ZW5jZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKGZpcnN0Qnl0ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IGZpcnN0Qnl0ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweDFGKSA8PCAweDYgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0YpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHhDIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAodGhpcmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3RkYgJiYgKHRlbXBDb2RlUG9pbnQgPCAweEQ4MDAgfHwgdGVtcENvZGVQb2ludCA+IDB4REZGRikpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgZm91cnRoQnl0ZSA9IGJ1ZltpICsgM11cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKGZvdXJ0aEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4MTIgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4QyB8ICh0aGlyZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAoZm91cnRoQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4RkZGRiAmJiB0ZW1wQ29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50ID09PSBudWxsKSB7XG4gICAgICAvLyB3ZSBkaWQgbm90IGdlbmVyYXRlIGEgdmFsaWQgY29kZVBvaW50IHNvIGluc2VydCBhXG4gICAgICAvLyByZXBsYWNlbWVudCBjaGFyIChVK0ZGRkQpIGFuZCBhZHZhbmNlIG9ubHkgMSBieXRlXG4gICAgICBjb2RlUG9pbnQgPSAweEZGRkRcbiAgICAgIGJ5dGVzUGVyU2VxdWVuY2UgPSAxXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPiAweEZGRkYpIHtcbiAgICAgIC8vIGVuY29kZSB0byB1dGYxNiAoc3Vycm9nYXRlIHBhaXIgZGFuY2UpXG4gICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgcmVzLnB1c2goY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKVxuICAgICAgY29kZVBvaW50ID0gMHhEQzAwIHwgY29kZVBvaW50ICYgMHgzRkZcbiAgICB9XG5cbiAgICByZXMucHVzaChjb2RlUG9pbnQpXG4gICAgaSArPSBieXRlc1BlclNlcXVlbmNlXG4gIH1cblxuICByZXR1cm4gZGVjb2RlQ29kZVBvaW50c0FycmF5KHJlcylcbn1cblxuLy8gQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjI3NDcyNzIvNjgwNzQyLCB0aGUgYnJvd3NlciB3aXRoXG4vLyB0aGUgbG93ZXN0IGxpbWl0IGlzIENocm9tZSwgd2l0aCAweDEwMDAwIGFyZ3MuXG4vLyBXZSBnbyAxIG1hZ25pdHVkZSBsZXNzLCBmb3Igc2FmZXR5XG52YXIgTUFYX0FSR1VNRU5UU19MRU5HVEggPSAweDEwMDBcblxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50c0FycmF5IChjb2RlUG9pbnRzKSB7XG4gIHZhciBsZW4gPSBjb2RlUG9pbnRzLmxlbmd0aFxuICBpZiAobGVuIDw9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlUG9pbnRzKSAvLyBhdm9pZCBleHRyYSBzbGljZSgpXG4gIH1cblxuICAvLyBEZWNvZGUgaW4gY2h1bmtzIHRvIGF2b2lkIFwiY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCIuXG4gIHZhciByZXMgPSAnJ1xuICB2YXIgaSA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShcbiAgICAgIFN0cmluZyxcbiAgICAgIGNvZGVQb2ludHMuc2xpY2UoaSwgaSArPSBNQVhfQVJHVU1FTlRTX0xFTkdUSClcbiAgICApXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSAmIDB4N0YpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBiaW5hcnlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSArIDFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW5cbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIHZhciBuZXdCdWZcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgbmV3QnVmID0gQnVmZmVyLl9hdWdtZW50KHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZCkpXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgaSsrKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH1cblxuICBpZiAobmV3QnVmLmxlbmd0aCkgbmV3QnVmLnBhcmVudCA9IHRoaXMucGFyZW50IHx8IHRoaXNcblxuICByZXR1cm4gbmV3QnVmXG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50TEUgPSBmdW5jdGlvbiByZWFkVUludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50QkUgPSBmdW5jdGlvbiByZWFkVUludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuICB9XG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXVxuICB2YXIgbXVsID0gMVxuICB3aGlsZSAoYnl0ZUxlbmd0aCA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gcmVhZFVJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiByZWFkVUludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDgpIHwgdGhpc1tvZmZzZXQgKyAxXVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiByZWFkVUludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRMRSA9IGZ1bmN0aW9uIHJlYWRJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRCRSA9IGZ1bmN0aW9uIHJlYWRJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aFxuICB2YXIgbXVsID0gMVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWldXG4gIHdoaWxlIChpID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0taV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gcmVhZEludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiByZWFkSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gcmVhZEludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gcmVhZEludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gcmVhZEZsb2F0TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gcmVhZEZsb2F0QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiByZWFkRG91YmxlTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2J1ZmZlciBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndmFsdWUgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignaW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCksIDApXG5cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCksIDApXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCA0KTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSAwXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSB2YWx1ZSA8IDAgPyAxIDogMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IHZhbHVlIDwgMCA/IDEgOiAwXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiB3cml0ZUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3ZhbHVlIGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignaW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0XG4gIH1cblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcbiAgdmFyIGlcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHN0YXJ0IDwgdGFyZ2V0U3RhcnQgJiYgdGFyZ2V0U3RhcnQgPCBlbmQpIHtcbiAgICAvLyBkZXNjZW5kaW5nIGNvcHkgZnJvbSBlbmRcbiAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBhc2NlbmRpbmcgY29weSBmcm9tIHN0YXJ0XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQuX3NldCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksIHRhcmdldFN0YXJ0KVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBmaWxsKHZhbHVlLCBzdGFydD0wLCBlbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbHVlLCBzdGFydCwgZW5kKSB7XG4gIGlmICghdmFsdWUpIHZhbHVlID0gMFxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQpIGVuZCA9IHRoaXMubGVuZ3RoXG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZW5kIDwgc3RhcnQnKVxuXG4gIC8vIEZpbGwgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3N0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2VuZCBvdXQgb2YgYm91bmRzJylcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIHRoaXNbaV0gPSB2YWx1ZVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSB1dGY4VG9CeXRlcyh2YWx1ZS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzW2ldID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYEFycmF5QnVmZmVyYCB3aXRoIHRoZSAqY29waWVkKiBtZW1vcnkgb2YgdGhlIGJ1ZmZlciBpbnN0YW5jZS5cbiAqIEFkZGVkIGluIE5vZGUgMC4xMi4gT25seSBhdmFpbGFibGUgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IEFycmF5QnVmZmVyLlxuICovXG5CdWZmZXIucHJvdG90eXBlLnRvQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiB0b0FycmF5QnVmZmVyICgpIHtcbiAgaWYgKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgICAgcmV0dXJuIChuZXcgQnVmZmVyKHRoaXMpKS5idWZmZXJcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGJ1ZiA9IG5ldyBVaW50OEFycmF5KHRoaXMubGVuZ3RoKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJ1Zi5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBidWZbaV0gPSB0aGlzW2ldXG4gICAgICB9XG4gICAgICByZXR1cm4gYnVmLmJ1ZmZlclxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCdWZmZXIudG9BcnJheUJ1ZmZlciBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcicpXG4gIH1cbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG52YXIgQlAgPSBCdWZmZXIucHJvdG90eXBlXG5cbi8qKlxuICogQXVnbWVudCBhIFVpbnQ4QXJyYXkgKmluc3RhbmNlKiAobm90IHRoZSBVaW50OEFycmF5IGNsYXNzISkgd2l0aCBCdWZmZXIgbWV0aG9kc1xuICovXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiBfYXVnbWVudCAoYXJyKSB7XG4gIGFyci5jb25zdHJ1Y3RvciA9IEJ1ZmZlclxuICBhcnIuX2lzQnVmZmVyID0gdHJ1ZVxuXG4gIC8vIHNhdmUgcmVmZXJlbmNlIHRvIG9yaWdpbmFsIFVpbnQ4QXJyYXkgc2V0IG1ldGhvZCBiZWZvcmUgb3ZlcndyaXRpbmdcbiAgYXJyLl9zZXQgPSBhcnIuc2V0XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBhcnIuZ2V0ID0gQlAuZ2V0XG4gIGFyci5zZXQgPSBCUC5zZXRcblxuICBhcnIud3JpdGUgPSBCUC53cml0ZVxuICBhcnIudG9TdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9Mb2NhbGVTdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9KU09OID0gQlAudG9KU09OXG4gIGFyci5lcXVhbHMgPSBCUC5lcXVhbHNcbiAgYXJyLmNvbXBhcmUgPSBCUC5jb21wYXJlXG4gIGFyci5pbmRleE9mID0gQlAuaW5kZXhPZlxuICBhcnIuY29weSA9IEJQLmNvcHlcbiAgYXJyLnNsaWNlID0gQlAuc2xpY2VcbiAgYXJyLnJlYWRVSW50TEUgPSBCUC5yZWFkVUludExFXG4gIGFyci5yZWFkVUludEJFID0gQlAucmVhZFVJbnRCRVxuICBhcnIucmVhZFVJbnQ4ID0gQlAucmVhZFVJbnQ4XG4gIGFyci5yZWFkVUludDE2TEUgPSBCUC5yZWFkVUludDE2TEVcbiAgYXJyLnJlYWRVSW50MTZCRSA9IEJQLnJlYWRVSW50MTZCRVxuICBhcnIucmVhZFVJbnQzMkxFID0gQlAucmVhZFVJbnQzMkxFXG4gIGFyci5yZWFkVUludDMyQkUgPSBCUC5yZWFkVUludDMyQkVcbiAgYXJyLnJlYWRJbnRMRSA9IEJQLnJlYWRJbnRMRVxuICBhcnIucmVhZEludEJFID0gQlAucmVhZEludEJFXG4gIGFyci5yZWFkSW50OCA9IEJQLnJlYWRJbnQ4XG4gIGFyci5yZWFkSW50MTZMRSA9IEJQLnJlYWRJbnQxNkxFXG4gIGFyci5yZWFkSW50MTZCRSA9IEJQLnJlYWRJbnQxNkJFXG4gIGFyci5yZWFkSW50MzJMRSA9IEJQLnJlYWRJbnQzMkxFXG4gIGFyci5yZWFkSW50MzJCRSA9IEJQLnJlYWRJbnQzMkJFXG4gIGFyci5yZWFkRmxvYXRMRSA9IEJQLnJlYWRGbG9hdExFXG4gIGFyci5yZWFkRmxvYXRCRSA9IEJQLnJlYWRGbG9hdEJFXG4gIGFyci5yZWFkRG91YmxlTEUgPSBCUC5yZWFkRG91YmxlTEVcbiAgYXJyLnJlYWREb3VibGVCRSA9IEJQLnJlYWREb3VibGVCRVxuICBhcnIud3JpdGVVSW50OCA9IEJQLndyaXRlVUludDhcbiAgYXJyLndyaXRlVUludExFID0gQlAud3JpdGVVSW50TEVcbiAgYXJyLndyaXRlVUludEJFID0gQlAud3JpdGVVSW50QkVcbiAgYXJyLndyaXRlVUludDE2TEUgPSBCUC53cml0ZVVJbnQxNkxFXG4gIGFyci53cml0ZVVJbnQxNkJFID0gQlAud3JpdGVVSW50MTZCRVxuICBhcnIud3JpdGVVSW50MzJMRSA9IEJQLndyaXRlVUludDMyTEVcbiAgYXJyLndyaXRlVUludDMyQkUgPSBCUC53cml0ZVVJbnQzMkJFXG4gIGFyci53cml0ZUludExFID0gQlAud3JpdGVJbnRMRVxuICBhcnIud3JpdGVJbnRCRSA9IEJQLndyaXRlSW50QkVcbiAgYXJyLndyaXRlSW50OCA9IEJQLndyaXRlSW50OFxuICBhcnIud3JpdGVJbnQxNkxFID0gQlAud3JpdGVJbnQxNkxFXG4gIGFyci53cml0ZUludDE2QkUgPSBCUC53cml0ZUludDE2QkVcbiAgYXJyLndyaXRlSW50MzJMRSA9IEJQLndyaXRlSW50MzJMRVxuICBhcnIud3JpdGVJbnQzMkJFID0gQlAud3JpdGVJbnQzMkJFXG4gIGFyci53cml0ZUZsb2F0TEUgPSBCUC53cml0ZUZsb2F0TEVcbiAgYXJyLndyaXRlRmxvYXRCRSA9IEJQLndyaXRlRmxvYXRCRVxuICBhcnIud3JpdGVEb3VibGVMRSA9IEJQLndyaXRlRG91YmxlTEVcbiAgYXJyLndyaXRlRG91YmxlQkUgPSBCUC53cml0ZURvdWJsZUJFXG4gIGFyci5maWxsID0gQlAuZmlsbFxuICBhcnIuaW5zcGVjdCA9IEJQLmluc3BlY3RcbiAgYXJyLnRvQXJyYXlCdWZmZXIgPSBCUC50b0FycmF5QnVmZmVyXG5cbiAgcmV0dXJuIGFyclxufVxuXG52YXIgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rXFwvMC05QS1aYS16LV9dL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyaW5ndHJpbShzdHIpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGNvbnZlcnRzIHN0cmluZ3Mgd2l0aCBsZW5ndGggPCAyIHRvICcnXG4gIGlmIChzdHIubGVuZ3RoIDwgMikgcmV0dXJuICcnXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eVxuICB2YXIgY29kZVBvaW50XG4gIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIHZhciBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICB2YXIgYnl0ZXMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuXG4gICAgLy8gaXMgc3Vycm9nYXRlIGNvbXBvbmVudFxuICAgIGlmIChjb2RlUG9pbnQgPiAweEQ3RkYgJiYgY29kZVBvaW50IDwgMHhFMDAwKSB7XG4gICAgICAvLyBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCFsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIC8vIG5vIGxlYWQgeWV0XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdW5wYWlyZWQgbGVhZFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZCBsZWFkXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyIGxlYWRzIGluIGEgcm93XG4gICAgICBpZiAoY29kZVBvaW50IDwgMHhEQzAwKSB7XG4gICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjb2RlUG9pbnQgPSAobGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCkgKyAweDEwMDAwXG4gICAgfSBlbHNlIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAvLyB2YWxpZCBibXAgY2hhciwgYnV0IGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICB9XG5cbiAgICBsZWFkU3Vycm9nYXRlID0gbnVsbFxuXG4gICAgLy8gZW5jb2RlIHV0ZjhcbiAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4ODAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgfCAweEMwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4MTIgfCAweEYwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuXG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoYmFzZTY0Y2xlYW4oc3RyKSlcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNSBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gJyc7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhcmc7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsga2V5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLnN1YnN0cigxKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCJcbi8qKlxuICogRXhwb3NlIGBFbWl0dGVyYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcbn07XG5cbi8qKlxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICAodGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW10pXG4gICAgLnB1c2goZm4pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICBmdW5jdGlvbiBvbigpIHtcbiAgICB0aGlzLm9mZihldmVudCwgb24pO1xuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBvbi5mbiA9IGZuO1xuICB0aGlzLm9uKGV2ZW50LCBvbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIC8vIGFsbFxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBzcGVjaWZpYyBldmVudFxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xuXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcbiAgdmFyIGNiO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xuXG4gIGlmIChjYWxsYmFja3MpIHtcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcbn07XG4iLCIvKipcbiAqIEV4cG9zZSBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKClgLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gIHx8IGZhbGxiYWNrO1xuXG4vKipcbiAqIEZhbGxiYWNrIGltcGxlbWVudGF0aW9uLlxuICovXG5cbnZhciBwcmV2ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5mdW5jdGlvbiBmYWxsYmFjayhmbikge1xuICB2YXIgY3VyciA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB2YXIgbXMgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyIC0gcHJldikpO1xuICB2YXIgcmVxID0gc2V0VGltZW91dChmbiwgbXMpO1xuICBwcmV2ID0gY3VycjtcbiAgcmV0dXJuIHJlcTtcbn1cblxuLyoqXG4gKiBDYW5jZWwuXG4gKi9cblxudmFyIGNhbmNlbCA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZVxuICB8fCB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lXG4gIHx8IHdpbmRvdy5jbGVhclRpbWVvdXQ7XG5cbmV4cG9ydHMuY2FuY2VsID0gZnVuY3Rpb24oaWQpe1xuICBjYW5jZWwuY2FsbCh3aW5kb3csIGlkKTtcbn07XG4iLCIvKipcbiAqIHRvU3RyaW5nIHJlZi5cbiAqL1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFJldHVybiB0aGUgdHlwZSBvZiBgdmFsYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwpe1xuICBzd2l0Y2ggKHRvU3RyaW5nLmNhbGwodmFsKSkge1xuICAgIGNhc2UgJ1tvYmplY3QgRGF0ZV0nOiByZXR1cm4gJ2RhdGUnO1xuICAgIGNhc2UgJ1tvYmplY3QgUmVnRXhwXSc6IHJldHVybiAncmVnZXhwJztcbiAgICBjYXNlICdbb2JqZWN0IEFyZ3VtZW50c10nOiByZXR1cm4gJ2FyZ3VtZW50cyc7XG4gICAgY2FzZSAnW29iamVjdCBBcnJheV0nOiByZXR1cm4gJ2FycmF5JztcbiAgICBjYXNlICdbb2JqZWN0IEVycm9yXSc6IHJldHVybiAnZXJyb3InO1xuICB9XG5cbiAgaWYgKHZhbCA9PT0gbnVsbCkgcmV0dXJuICdudWxsJztcbiAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIGlmICh2YWwgIT09IHZhbCkgcmV0dXJuICduYW4nO1xuICBpZiAodmFsICYmIHZhbC5ub2RlVHlwZSA9PT0gMSkgcmV0dXJuICdlbGVtZW50JztcblxuICB2YWwgPSB2YWwudmFsdWVPZlxuICAgID8gdmFsLnZhbHVlT2YoKVxuICAgIDogT2JqZWN0LnByb3RvdHlwZS52YWx1ZU9mLmFwcGx5KHZhbClcblxuICByZXR1cm4gdHlwZW9mIHZhbDtcbn07XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdjb21wb25lbnQtZW1pdHRlcicpXG5cbi8qKlxuICogRXhwb3NlIGBzY2VuZWAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBBcHBsaWNhdGlvblxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBgQXBwbGljYXRpb25gLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IE9wdGlvbmFsIGluaXRpYWwgZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIEFwcGxpY2F0aW9uIChlbGVtZW50KSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBBcHBsaWNhdGlvbikpIHJldHVybiBuZXcgQXBwbGljYXRpb24oZWxlbWVudClcbiAgdGhpcy5vcHRpb25zID0ge31cbiAgdGhpcy5zb3VyY2VzID0ge31cbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxufVxuXG4vKipcbiAqIE1peGluIGBFbWl0dGVyYC5cbiAqL1xuXG5FbWl0dGVyKEFwcGxpY2F0aW9uLnByb3RvdHlwZSlcblxuLyoqXG4gKiBBZGQgYSBwbHVnaW5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwbHVnaW5cbiAqL1xuXG5BcHBsaWNhdGlvbi5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gKHBsdWdpbikge1xuICBwbHVnaW4odGhpcylcbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBTZXQgYW4gb3B0aW9uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqL1xuXG5BcHBsaWNhdGlvbi5wcm90b3R5cGUub3B0aW9uID0gZnVuY3Rpb24gKG5hbWUsIHZhbCkge1xuICB0aGlzLm9wdGlvbnNbbmFtZV0gPSB2YWxcbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBTZXQgdmFsdWUgdXNlZCBzb21ld2hlcmUgaW4gdGhlIElPIG5ldHdvcmsuXG4gKi9cblxuQXBwbGljYXRpb24ucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChuYW1lLCBkYXRhKSB7XG4gIHRoaXMuc291cmNlc1tuYW1lXSA9IGRhdGFcbiAgdGhpcy5lbWl0KCdzb3VyY2UnLCBuYW1lLCBkYXRhKVxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIE1vdW50IGEgdmlydHVhbCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7VmlydHVhbEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5BcHBsaWNhdGlvbi5wcm90b3R5cGUubW91bnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gIHRoaXMuZW1pdCgnbW91bnQnLCBlbGVtZW50KVxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgd29ybGQuIFVubW91bnQgZXZlcnl0aGluZy5cbiAqL1xuXG5BcHBsaWNhdGlvbi5wcm90b3R5cGUudW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVyblxuICB0aGlzLmVsZW1lbnQgPSBudWxsXG4gIHRoaXMuZW1pdCgndW5tb3VudCcpXG4gIHJldHVybiB0aGlzXG59XG4iLCIvKipcbiAqIEFsbCBvZiB0aGUgZXZlbnRzIGNhbiBiaW5kIHRvXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG9uQWJvcnQ6ICdhYm9ydCcsXG4gIG9uQmx1cjogJ2JsdXInLFxuICBvbkNhblBsYXk6ICdjYW5wbGF5JyxcbiAgb25DYW5QbGF5VGhyb3VnaDogJ2NhbnBsYXl0aHJvdWdoJyxcbiAgb25DaGFuZ2U6ICdjaGFuZ2UnLFxuICBvbkNsaWNrOiAnY2xpY2snLFxuICBvbkNvbnRleHRNZW51OiAnY29udGV4dG1lbnUnLFxuICBvbkNvcHk6ICdjb3B5JyxcbiAgb25DdXQ6ICdjdXQnLFxuICBvbkRvdWJsZUNsaWNrOiAnZGJsY2xpY2snLFxuICBvbkRyYWc6ICdkcmFnJyxcbiAgb25EcmFnRW5kOiAnZHJhZ2VuZCcsXG4gIG9uRHJhZ0VudGVyOiAnZHJhZ2VudGVyJyxcbiAgb25EcmFnRXhpdDogJ2RyYWdleGl0JyxcbiAgb25EcmFnTGVhdmU6ICdkcmFnbGVhdmUnLFxuICBvbkRyYWdPdmVyOiAnZHJhZ292ZXInLFxuICBvbkRyYWdTdGFydDogJ2RyYWdzdGFydCcsXG4gIG9uRHJvcDogJ2Ryb3AnLFxuICBvbkR1cmF0aW9uQ2hhbmdlOiAnZHVyYXRpb25jaGFuZ2UnLFxuICBvbkVtcHRpZWQ6ICdlbXB0aWVkJyxcbiAgb25FbmNyeXB0ZWQ6ICdlbmNyeXB0ZWQnLFxuICBvbkVuZGVkOiAnZW5kZWQnLFxuICBvbkVycm9yOiAnZXJyb3InLFxuICBvbkZvY3VzOiAnZm9jdXMnLFxuICBvbklucHV0OiAnaW5wdXQnLFxuICBvbkludmFsaWQ6ICdpbnZhbGlkJyxcbiAgb25LZXlEb3duOiAna2V5ZG93bicsXG4gIG9uS2V5UHJlc3M6ICdrZXlwcmVzcycsXG4gIG9uS2V5VXA6ICdrZXl1cCcsXG4gIG9uTG9hZDogJ2xvYWQnLFxuICBvbkxvYWRlZERhdGE6ICdsb2FkZWRkYXRhJyxcbiAgb25Mb2FkZWRNZXRhZGF0YTogJ2xvYWRlZG1ldGFkYXRhJyxcbiAgb25Mb2FkU3RhcnQ6ICdsb2Fkc3RhcnQnLFxuICBvblBhdXNlOiAncGF1c2UnLFxuICBvblBsYXk6ICdwbGF5JyxcbiAgb25QbGF5aW5nOiAncGxheWluZycsXG4gIG9uUHJvZ3Jlc3M6ICdwcm9ncmVzcycsXG4gIG9uTW91c2VEb3duOiAnbW91c2Vkb3duJyxcbiAgb25Nb3VzZUVudGVyOiAnbW91c2VlbnRlcicsXG4gIG9uTW91c2VMZWF2ZTogJ21vdXNlbGVhdmUnLFxuICBvbk1vdXNlTW92ZTogJ21vdXNlbW92ZScsXG4gIG9uTW91c2VPdXQ6ICdtb3VzZW91dCcsXG4gIG9uTW91c2VPdmVyOiAnbW91c2VvdmVyJyxcbiAgb25Nb3VzZVVwOiAnbW91c2V1cCcsXG4gIG9uUGFzdGU6ICdwYXN0ZScsXG4gIG9uUmF0ZUNoYW5nZTogJ3JhdGVjaGFuZ2UnLFxuICBvblJlc2V0OiAncmVzZXQnLFxuICBvblNjcm9sbDogJ3Njcm9sbCcsXG4gIG9uU2Vla2VkOiAnc2Vla2VkJyxcbiAgb25TZWVraW5nOiAnc2Vla2luZycsXG4gIG9uU3VibWl0OiAnc3VibWl0JyxcbiAgb25TdGFsbGVkOiAnc3RhbGxlZCcsXG4gIG9uU3VzcGVuZDogJ3N1c3BlbmQnLFxuICBvblRpbWVVcGRhdGU6ICd0aW1ldXBkYXRlJyxcbiAgb25Ub3VjaENhbmNlbDogJ3RvdWNoY2FuY2VsJyxcbiAgb25Ub3VjaEVuZDogJ3RvdWNoZW5kJyxcbiAgb25Ub3VjaE1vdmU6ICd0b3VjaG1vdmUnLFxuICBvblRvdWNoU3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgb25Wb2x1bWVDaGFuZ2U6ICd2b2x1bWVjaGFuZ2UnLFxuICBvbldhaXRpbmc6ICd3YWl0aW5nJyxcbiAgb25XaGVlbDogJ3doZWVsJ1xufVxuIiwiLyoqXG4gKiBDcmVhdGUgdGhlIGFwcGxpY2F0aW9uLlxuICovXG5cbmV4cG9ydHMudHJlZSA9XG5leHBvcnRzLnNjZW5lID1cbmV4cG9ydHMuZGVrdSA9IHJlcXVpcmUoJy4vYXBwbGljYXRpb24nKVxuXG4vKipcbiAqIFJlbmRlciBzY2VuZXMgdG8gdGhlIERPTS5cbiAqL1xuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICBleHBvcnRzLnJlbmRlciA9IHJlcXVpcmUoJy4vcmVuZGVyJylcbn1cblxuLyoqXG4gKiBSZW5kZXIgc2NlbmVzIHRvIGEgc3RyaW5nXG4gKi9cblxuZXhwb3J0cy5yZW5kZXJTdHJpbmcgPSByZXF1aXJlKCcuL3N0cmluZ2lmeScpXG4iLCJ2YXIgdHlwZSA9IHJlcXVpcmUoJ2NvbXBvbmVudC10eXBlJylcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB0eXBlIG9mIGEgdmlydHVhbCBub2RlXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBub2RlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub2RlVHlwZSAobm9kZSkge1xuICB2YXIgdiA9IHR5cGUobm9kZSlcbiAgaWYgKHYgPT09ICdudWxsJyB8fCBub2RlID09PSBmYWxzZSkgcmV0dXJuICdlbXB0eSdcbiAgaWYgKHYgIT09ICdvYmplY3QnKSByZXR1cm4gJ3RleHQnXG4gIGlmICh0eXBlKG5vZGUudHlwZSkgPT09ICdzdHJpbmcnKSByZXR1cm4gJ2VsZW1lbnQnXG4gIHJldHVybiAnY29tcG9uZW50J1xufVxuIiwiLyoqXG4gKiBEZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHJhZiA9IHJlcXVpcmUoJ2NvbXBvbmVudC1yYWYnKVxudmFyIGlzRG9tID0gcmVxdWlyZSgnaXMtZG9tJylcbnZhciB1aWQgPSByZXF1aXJlKCdnZXQtdWlkJylcbnZhciBrZXlwYXRoID0gcmVxdWlyZSgnb2JqZWN0LXBhdGgnKVxudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4vZXZlbnRzJylcbnZhciBzdmcgPSByZXF1aXJlKCcuL3N2ZycpXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCdvYmplY3QtZGVmYXVsdHMnKVxudmFyIGZvckVhY2ggPSByZXF1aXJlKCdmYXN0LmpzL2ZvckVhY2gnKVxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ2Zhc3QuanMvb2JqZWN0L2Fzc2lnbicpXG52YXIgcmVkdWNlID0gcmVxdWlyZSgnZmFzdC5qcy9yZWR1Y2UnKVxudmFyIG5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKVxuXG4vKipcbiAqIEV4cG9zZSBgZG9tYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlbmRlclxuXG4vKipcbiAqIFJlbmRlciBhbiBhcHAgdG8gdGhlIERPTVxuICpcbiAqIEBwYXJhbSB7QXBwbGljYXRpb259IGFwcFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuXG5mdW5jdGlvbiByZW5kZXIgKGFwcCwgY29udGFpbmVyLCBvcHRzKSB7XG4gIHZhciBmcmFtZUlkXG4gIHZhciBpc1JlbmRlcmluZ1xuICB2YXIgcm9vdElkID0gJ3Jvb3QnXG4gIHZhciBjdXJyZW50RWxlbWVudFxuICB2YXIgY3VycmVudE5hdGl2ZUVsZW1lbnRcbiAgdmFyIGNvbm5lY3Rpb25zID0ge31cbiAgdmFyIGNvbXBvbmVudHMgPSB7fVxuICB2YXIgZW50aXRpZXMgPSB7fVxuICB2YXIgaGFuZGxlcnMgPSB7fVxuICB2YXIgbW91bnRRdWV1ZSA9IFtdXG4gIHZhciBjaGlsZHJlbiA9IHt9XG4gIGNoaWxkcmVuW3Jvb3RJZF0gPSB7fVxuXG4gIGlmICghaXNEb20oY29udGFpbmVyKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ29udGFpbmVyIGVsZW1lbnQgbXVzdCBiZSBhIERPTSBlbGVtZW50JylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJpbmcgb3B0aW9ucy4gQmF0Y2hpbmcgaXMgb25seSBldmVyIHJlYWxseSBkaXNhYmxlZFxuICAgKiB3aGVuIHJ1bm5pbmcgdGVzdHMsIGFuZCBwb29saW5nIGNhbiBiZSBkaXNhYmxlZCBpZiB0aGUgdXNlclxuICAgKiBpcyBkb2luZyBzb21ldGhpbmcgc3R1cGlkIHdpdGggdGhlIERPTSBpbiB0aGVpciBjb21wb25lbnRzLlxuICAgKi9cblxuICB2YXIgb3B0aW9ucyA9IGRlZmF1bHRzKGFzc2lnbih7fSwgYXBwLm9wdGlvbnMgfHwge30sIG9wdHMgfHwge30pLCB7XG4gICAgYmF0Y2hpbmc6IHRydWVcbiAgfSlcblxuICAvKipcbiAgICogTGlzdGVuIHRvIERPTSBldmVudHNcbiAgICovXG4gIHZhciByb290RWxlbWVudCA9IGdldFJvb3RFbGVtZW50KGNvbnRhaW5lcilcbiAgYWRkTmF0aXZlRXZlbnRMaXN0ZW5lcnMoKVxuXG4gIC8qKlxuICAgKiBXYXRjaCBmb3IgY2hhbmdlcyB0byB0aGUgYXBwIHNvIHRoYXQgd2UgY2FuIHVwZGF0ZVxuICAgKiB0aGUgRE9NIGFzIG5lZWRlZC5cbiAgICovXG5cbiAgYXBwLm9uKCd1bm1vdW50Jywgb251bm1vdW50KVxuICBhcHAub24oJ21vdW50Jywgb25tb3VudClcbiAgYXBwLm9uKCdzb3VyY2UnLCBvbnVwZGF0ZSlcblxuICAvKipcbiAgICogSWYgdGhlIGFwcCBoYXMgYWxyZWFkeSBtb3VudGVkIGFuIGVsZW1lbnQsIHdlIGNhbiBqdXN0XG4gICAqIHJlbmRlciB0aGF0IHN0cmFpZ2h0IGF3YXkuXG4gICAqL1xuXG4gIGlmIChhcHAuZWxlbWVudCkgcmVuZGVyKClcblxuICAvKipcbiAgICogVGVhcmRvd24gdGhlIERPTSByZW5kZXJpbmcgc28gdGhhdCBpdCBzdG9wc1xuICAgKiByZW5kZXJpbmcgYW5kIGV2ZXJ5dGhpbmcgY2FuIGJlIGdhcmJhZ2UgY29sbGVjdGVkLlxuICAgKi9cblxuICBmdW5jdGlvbiB0ZWFyZG93biAoKSB7XG4gICAgcmVtb3ZlTmF0aXZlRXZlbnRMaXN0ZW5lcnMoKVxuICAgIHJlbW92ZU5hdGl2ZUVsZW1lbnQoKVxuICAgIGFwcC5vZmYoJ3VubW91bnQnLCBvbnVubW91bnQpXG4gICAgYXBwLm9mZignbW91bnQnLCBvbm1vdW50KVxuICAgIGFwcC5vZmYoJ3NvdXJjZScsIG9udXBkYXRlKVxuICB9XG5cbiAgLyoqXG4gICAqIFN3YXAgdGhlIGN1cnJlbnQgcmVuZGVyZWQgbm9kZSB3aXRoIGEgbmV3IG9uZSB0aGF0IGlzIHJlbmRlcmVkXG4gICAqIGZyb20gdGhlIG5ldyB2aXJ0dWFsIGVsZW1lbnQgbW91bnRlZCBvbiB0aGUgYXBwLlxuICAgKlxuICAgKiBAcGFyYW0ge1ZpcnR1YWxFbGVtZW50fSBlbGVtZW50XG4gICAqL1xuXG4gIGZ1bmN0aW9uIG9ubW91bnQgKCkge1xuICAgIGludmFsaWRhdGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIElmIHRoZSBhcHAgdW5tb3VudHMgYW4gZWxlbWVudCwgd2Ugc2hvdWxkIGNsZWFyIG91dCB0aGUgY3VycmVudFxuICAgKiByZW5kZXJlZCBlbGVtZW50LiBUaGlzIHdpbGwgcmVtb3ZlIGFsbCB0aGUgZW50aXRpZXMuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIG9udW5tb3VudCAoKSB7XG4gICAgcmVtb3ZlTmF0aXZlRWxlbWVudCgpXG4gICAgY3VycmVudEVsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGFsbCBjb21wb25lbnRzIHRoYXQgYXJlIGJvdW5kIHRvIHRoZSBzb3VyY2VcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHsqfSBkYXRhXG4gICAqL1xuXG4gIGZ1bmN0aW9uIG9udXBkYXRlIChuYW1lLCBkYXRhKSB7XG4gICAgaWYgKCFjb25uZWN0aW9uc1tuYW1lXSkgcmV0dXJuXG4gICAgY29ubmVjdGlvbnNbbmFtZV0uZm9yRWFjaChmdW5jdGlvbiAodXBkYXRlKSB7XG4gICAgICB1cGRhdGUoZGF0YSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhbmQgbW91bnQgYSBjb21wb25lbnQgdG8gdGhlIG5hdGl2ZSBkb20uXG4gICAqXG4gICAqIEBwYXJhbSB7RW50aXR5fSBlbnRpdHlcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAqL1xuXG4gIGZ1bmN0aW9uIG1vdW50RW50aXR5IChlbnRpdHkpIHtcbiAgICByZWdpc3RlcihlbnRpdHkpXG4gICAgc2V0U291cmNlcyhlbnRpdHkpXG4gICAgY2hpbGRyZW5bZW50aXR5LmlkXSA9IHt9XG4gICAgZW50aXRpZXNbZW50aXR5LmlkXSA9IGVudGl0eVxuXG4gICAgLy8gY29tbWl0IGluaXRpYWwgc3RhdGUgYW5kIHByb3BzLlxuICAgIGNvbW1pdChlbnRpdHkpXG5cbiAgICAvLyBjYWxsYmFjayBiZWZvcmUgbW91bnRpbmcuXG4gICAgdHJpZ2dlcignYmVmb3JlTW91bnQnLCBlbnRpdHksIFtlbnRpdHkuY29udGV4dF0pXG4gICAgdHJpZ2dlcignYmVmb3JlUmVuZGVyJywgZW50aXR5LCBbZW50aXR5LmNvbnRleHRdKVxuXG4gICAgLy8gcmVuZGVyIHZpcnR1YWwgZWxlbWVudC5cbiAgICB2YXIgdmlydHVhbEVsZW1lbnQgPSByZW5kZXJFbnRpdHkoZW50aXR5KVxuICAgIC8vIGNyZWF0ZSBuYXRpdmUgZWxlbWVudC5cbiAgICB2YXIgbmF0aXZlRWxlbWVudCA9IHRvTmF0aXZlKGVudGl0eS5pZCwgJzAnLCB2aXJ0dWFsRWxlbWVudClcblxuICAgIGVudGl0eS52aXJ0dWFsRWxlbWVudCA9IHZpcnR1YWxFbGVtZW50XG4gICAgZW50aXR5Lm5hdGl2ZUVsZW1lbnQgPSBuYXRpdmVFbGVtZW50XG5cbiAgICAvLyBGaXJlIGFmdGVyUmVuZGVyIGFuZCBhZnRlck1vdW50IGhvb2tzIGF0IHRoZSBlbmRcbiAgICAvLyBvZiB0aGUgcmVuZGVyIGN5Y2xlXG4gICAgbW91bnRRdWV1ZS5wdXNoKGVudGl0eS5pZClcblxuICAgIHJldHVybiBuYXRpdmVFbGVtZW50XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEgY29tcG9uZW50IGZyb20gdGhlIG5hdGl2ZSBkb20uXG4gICAqXG4gICAqIEBwYXJhbSB7RW50aXR5fSBlbnRpdHlcbiAgICovXG5cbiAgZnVuY3Rpb24gdW5tb3VudEVudGl0eSAoZW50aXR5SWQpIHtcbiAgICB2YXIgZW50aXR5ID0gZW50aXRpZXNbZW50aXR5SWRdXG4gICAgaWYgKCFlbnRpdHkpIHJldHVyblxuICAgIHRyaWdnZXIoJ2JlZm9yZVVubW91bnQnLCBlbnRpdHksIFtlbnRpdHkuY29udGV4dCwgZW50aXR5Lm5hdGl2ZUVsZW1lbnRdKVxuICAgIHVubW91bnRDaGlsZHJlbihlbnRpdHlJZClcbiAgICByZW1vdmVBbGxFdmVudHMoZW50aXR5SWQpXG4gICAgdmFyIGNvbXBvbmVudEVudGl0aWVzID0gY29tcG9uZW50c1tlbnRpdHlJZF0uZW50aXRpZXNcbiAgICBkZWxldGUgY29tcG9uZW50RW50aXRpZXNbZW50aXR5SWRdXG4gICAgZGVsZXRlIGNvbXBvbmVudHNbZW50aXR5SWRdXG4gICAgZGVsZXRlIGVudGl0aWVzW2VudGl0eUlkXVxuICAgIGRlbGV0ZSBjaGlsZHJlbltlbnRpdHlJZF1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIGVudGl0eSBhbmQgbWFrZSBzdXJlIGl0IHJldHVybnMgYSBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7RW50aXR5fSBlbnRpdHlcbiAgICpcbiAgICogQHJldHVybiB7VmlydHVhbFRyZWV9XG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlbmRlckVudGl0eSAoZW50aXR5KSB7XG4gICAgdmFyIGNvbXBvbmVudCA9IGVudGl0eS5jb21wb25lbnRcbiAgICB2YXIgZm4gPSB0eXBlb2YgY29tcG9uZW50ID09PSAnZnVuY3Rpb24nID8gY29tcG9uZW50IDogY29tcG9uZW50LnJlbmRlclxuICAgIGlmICghZm4pIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IG5lZWRzIGEgcmVuZGVyIGZ1bmN0aW9uJylcbiAgICB2YXIgcmVzdWx0ID0gZm4oZW50aXR5LmNvbnRleHQsIHNldFN0YXRlKGVudGl0eSkpXG4gICAgaWYgKCFyZXN1bHQpIHRocm93IG5ldyBFcnJvcignUmVuZGVyIGZ1bmN0aW9uIG11c3QgcmV0dXJuIGFuIGVsZW1lbnQuJylcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvKipcbiAgICogV2hlbmV2ZXIgc2V0U3RhdGUgb3Igc2V0UHJvcHMgaXMgY2FsbGVkLCB3ZSBtYXJrIHRoZSBlbnRpdHlcbiAgICogYXMgZGlydHkgaW4gdGhlIHJlbmRlcmVyLiBUaGlzIGxldHMgdXMgb3B0aW1pemUgdGhlIHJlLXJlbmRlcmluZ1xuICAgKiBhbmQgc2tpcCBjb21wb25lbnRzIHRoYXQgZGVmaW5pdGVseSBoYXZlbid0IGNoYW5nZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7RW50aXR5fSBlbnRpdHlcbiAgICpcbiAgICogQHJldHVybiB7RnVuY3Rpb259IEEgY3VycmllZCBmdW5jdGlvbiBmb3IgdXBkYXRpbmcgdGhlIHN0YXRlIG9mIGFuIGVudGl0eVxuICAgKi9cblxuICBmdW5jdGlvbiBzZXRTdGF0ZSAoZW50aXR5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0U3RhdGUpIHtcbiAgICAgIHVwZGF0ZUVudGl0eVN0YXRlKGVudGl0eSwgbmV4dFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUZWxsIHRoZSBhcHAgaXQncyBkaXJ0eSBhbmQgbmVlZHMgdG8gcmUtcmVuZGVyLiBJZiBiYXRjaGluZyBpcyBkaXNhYmxlZFxuICAgKiB3ZSBjYW4ganVzdCB0cmlnZ2VyIGEgcmVuZGVyIGltbWVkaWF0ZWx5LCBvdGhlcndpc2Ugd2UnbGwgd2FpdCB1bnRpbFxuICAgKiB0aGUgbmV4dCBhdmFpbGFibGUgZnJhbWUuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGludmFsaWRhdGUgKCkge1xuICAgIGlmICghb3B0aW9ucy5iYXRjaGluZykge1xuICAgICAgaWYgKCFpc1JlbmRlcmluZykgcmVuZGVyKClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFmcmFtZUlkKSBmcmFtZUlkID0gcmFmKHJlbmRlcilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBET00uIElmIHRoZSB1cGRhdGUgZmFpbHMgd2Ugc3RvcCB0aGUgbG9vcFxuICAgKiBzbyB3ZSBkb24ndCBnZXQgZXJyb3JzIG9uIGV2ZXJ5IGZyYW1lLlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIC8vIElmIHRoaXMgaXMgY2FsbGVkIHN5bmNocm9ub3VzbHkgd2UgbmVlZCB0b1xuICAgIC8vIGNhbmNlbCBhbnkgcGVuZGluZyBmdXR1cmUgdXBkYXRlc1xuICAgIGNsZWFyRnJhbWUoKVxuXG4gICAgLy8gSWYgdGhlIHJlbmRlcmluZyBmcm9tIHRoZSBwcmV2aW91cyBmcmFtZSBpcyBzdGlsbCBnb2luZyxcbiAgICAvLyB3ZSdsbCBqdXN0IHdhaXQgdW50aWwgdGhlIG5leHQgZnJhbWUuIElkZWFsbHkgcmVuZGVycyBzaG91bGRcbiAgICAvLyBub3QgdGFrZSBvdmVyIDE2bXMgdG8gc3RheSB3aXRoaW4gYSBzaW5nbGUgZnJhbWUsIGJ1dCB0aGlzIHNob3VsZFxuICAgIC8vIGNhdGNoIGl0IGlmIGl0IGRvZXMuXG4gICAgaWYgKGlzUmVuZGVyaW5nKSB7XG4gICAgICBmcmFtZUlkID0gcmFmKHJlbmRlcilcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICBpc1JlbmRlcmluZyA9IHRydWVcbiAgICB9XG5cbiAgICAvLyAxLiBJZiB0aGVyZSBpc24ndCBhIG5hdGl2ZSBlbGVtZW50IHJlbmRlcmVkIGZvciB0aGUgY3VycmVudCBtb3VudGVkIGVsZW1lbnRcbiAgICAvLyB0aGVuIHdlIG5lZWQgdG8gY3JlYXRlIGl0IGZyb20gc2NyYXRjaC5cbiAgICAvLyAyLiBJZiBhIG5ldyBlbGVtZW50IGhhcyBiZWVuIG1vdW50ZWQsIHdlIHNob3VsZCBkaWZmIHRoZW0uXG4gICAgLy8gMy4gV2Ugc2hvdWxkIHVwZGF0ZSBjaGVjayBhbGwgY2hpbGQgY29tcG9uZW50cyBmb3IgY2hhbmdlcy5cbiAgICBpZiAoIWN1cnJlbnROYXRpdmVFbGVtZW50KSB7XG4gICAgICBjdXJyZW50RWxlbWVudCA9IGFwcC5lbGVtZW50XG4gICAgICBjdXJyZW50TmF0aXZlRWxlbWVudCA9IHRvTmF0aXZlKHJvb3RJZCwgJzAnLCBjdXJyZW50RWxlbWVudClcbiAgICAgIGlmIChjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zb2xlLmluZm8oJ2Rla3U6IFRoZSBjb250YWluZXIgZWxlbWVudCBpcyBub3QgZW1wdHkuIFRoZXNlIGVsZW1lbnRzIHdpbGwgYmUgcmVtb3ZlZC4gUmVhZCBtb3JlOiBodHRwOi8vY2wubHkvYjBTcicpXG4gICAgICB9XG4gICAgICBpZiAoY29udGFpbmVyID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIGNvbnNvbGUud2FybignZGVrdTogVXNpbmcgZG9jdW1lbnQuYm9keSBpcyBhbGxvd2VkIGJ1dCBpdCBjYW4gY2F1c2Ugc29tZSBpc3N1ZXMuIFJlYWQgbW9yZTogaHR0cDovL2NsLmx5L2IwU0MnKVxuICAgICAgfVxuICAgICAgcmVtb3ZlQWxsQ2hpbGRyZW4oY29udGFpbmVyKVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnROYXRpdmVFbGVtZW50KVxuICAgIH0gZWxzZSBpZiAoY3VycmVudEVsZW1lbnQgIT09IGFwcC5lbGVtZW50KSB7XG4gICAgICBjdXJyZW50TmF0aXZlRWxlbWVudCA9IHBhdGNoKHJvb3RJZCwgY3VycmVudEVsZW1lbnQsIGFwcC5lbGVtZW50LCBjdXJyZW50TmF0aXZlRWxlbWVudClcbiAgICAgIGN1cnJlbnRFbGVtZW50ID0gYXBwLmVsZW1lbnRcbiAgICAgIHVwZGF0ZUNoaWxkcmVuKHJvb3RJZClcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlQ2hpbGRyZW4ocm9vdElkKVxuICAgIH1cblxuICAgIC8vIENhbGwgbW91bnQgZXZlbnRzIG9uIGFsbCBuZXcgZW50aXRpZXNcbiAgICBmbHVzaE1vdW50UXVldWUoKVxuXG4gICAgLy8gQWxsb3cgcmVuZGVyaW5nIGFnYWluLlxuICAgIGlzUmVuZGVyaW5nID0gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIGhvb2tzIGZvciBhbGwgbmV3IGVudGl0aWVzIHRoYXQgaGF2ZSBiZWVuIGNyZWF0ZWQgaW5cbiAgICogdGhlIGxhc3QgcmVuZGVyIGZyb20gdGhlIGJvdHRvbSB1cC5cbiAgICovXG5cbiAgZnVuY3Rpb24gZmx1c2hNb3VudFF1ZXVlICgpIHtcbiAgICB3aGlsZSAobW91bnRRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgZW50aXR5SWQgPSBtb3VudFF1ZXVlLnNoaWZ0KClcbiAgICAgIHZhciBlbnRpdHkgPSBlbnRpdGllc1tlbnRpdHlJZF1cbiAgICAgIHRyaWdnZXIoJ2FmdGVyUmVuZGVyJywgZW50aXR5LCBbZW50aXR5LmNvbnRleHQsIGVudGl0eS5uYXRpdmVFbGVtZW50XSlcbiAgICAgIHRyaWdnZXIoJ2FmdGVyTW91bnQnLCBlbnRpdHksIFtlbnRpdHkuY29udGV4dCwgZW50aXR5Lm5hdGl2ZUVsZW1lbnQsIHNldFN0YXRlKGVudGl0eSldKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgY3VycmVudCBzY2hlZHVsZWQgZnJhbWVcbiAgICovXG5cbiAgZnVuY3Rpb24gY2xlYXJGcmFtZSAoKSB7XG4gICAgaWYgKCFmcmFtZUlkKSByZXR1cm5cbiAgICByYWYuY2FuY2VsKGZyYW1lSWQpXG4gICAgZnJhbWVJZCA9IDBcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYSBjb21wb25lbnQuXG4gICAqXG4gICAqIFRoZSBlbnRpdHkgaXMganVzdCB0aGUgZGF0YSBvYmplY3QgZm9yIGEgY29tcG9uZW50IGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgQ29tcG9uZW50IGluc3RhbmNlIGlkLlxuICAgKi9cblxuICBmdW5jdGlvbiB1cGRhdGVFbnRpdHkgKGVudGl0eUlkKSB7XG4gICAgdmFyIGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXVxuICAgIHNldFNvdXJjZXMoZW50aXR5KVxuXG4gICAgaWYgKCFzaG91bGRVcGRhdGUoZW50aXR5KSkge1xuICAgICAgY29tbWl0KGVudGl0eSlcbiAgICAgIHJldHVybiB1cGRhdGVDaGlsZHJlbihlbnRpdHlJZClcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudFRyZWUgPSBlbnRpdHkudmlydHVhbEVsZW1lbnRcbiAgICB2YXIgbmV4dFByb3BzID0gZW50aXR5LnBlbmRpbmdQcm9wc1xuICAgIHZhciBuZXh0U3RhdGUgPSBlbnRpdHkucGVuZGluZ1N0YXRlXG4gICAgdmFyIHByZXZpb3VzU3RhdGUgPSBlbnRpdHkuY29udGV4dC5zdGF0ZVxuICAgIHZhciBwcmV2aW91c1Byb3BzID0gZW50aXR5LmNvbnRleHQucHJvcHNcblxuICAgIC8vIGhvb2sgYmVmb3JlIHJlbmRlcmluZy4gY291bGQgbW9kaWZ5IHN0YXRlIGp1c3QgYmVmb3JlIHRoZSByZW5kZXIgb2NjdXJzLlxuICAgIHRyaWdnZXIoJ2JlZm9yZVVwZGF0ZScsIGVudGl0eSwgW2VudGl0eS5jb250ZXh0LCBuZXh0UHJvcHMsIG5leHRTdGF0ZV0pXG4gICAgdHJpZ2dlcignYmVmb3JlUmVuZGVyJywgZW50aXR5LCBbZW50aXR5LmNvbnRleHRdKVxuXG4gICAgLy8gY29tbWl0IHN0YXRlIGFuZCBwcm9wcy5cbiAgICBjb21taXQoZW50aXR5KVxuXG4gICAgLy8gcmUtcmVuZGVyLlxuICAgIHZhciBuZXh0VHJlZSA9IHJlbmRlckVudGl0eShlbnRpdHkpXG5cbiAgICAvLyBpZiB0aGUgdHJlZSBpcyB0aGUgc2FtZSB3ZSBjYW4ganVzdCBza2lwIHRoaXMgY29tcG9uZW50XG4gICAgLy8gYnV0IHdlIHNob3VsZCBzdGlsbCBjaGVjayB0aGUgY2hpbGRyZW4gdG8gc2VlIGlmIHRoZXkncmUgZGlydHkuXG4gICAgLy8gVGhpcyBhbGxvd3MgdXMgdG8gbWVtb2l6ZSB0aGUgcmVuZGVyIGZ1bmN0aW9uIG9mIGNvbXBvbmVudHMuXG4gICAgaWYgKG5leHRUcmVlID09PSBjdXJyZW50VHJlZSkgcmV0dXJuIHVwZGF0ZUNoaWxkcmVuKGVudGl0eUlkKVxuXG4gICAgLy8gYXBwbHkgbmV3IHZpcnR1YWwgdHJlZSB0byBuYXRpdmUgZG9tLlxuICAgIGVudGl0eS5uYXRpdmVFbGVtZW50ID0gcGF0Y2goZW50aXR5SWQsIGN1cnJlbnRUcmVlLCBuZXh0VHJlZSwgZW50aXR5Lm5hdGl2ZUVsZW1lbnQpXG4gICAgZW50aXR5LnZpcnR1YWxFbGVtZW50ID0gbmV4dFRyZWVcbiAgICB1cGRhdGVDaGlsZHJlbihlbnRpdHlJZClcblxuICAgIC8vIHRyaWdnZXIgcmVuZGVyIGhvb2tcbiAgICB0cmlnZ2VyKCdhZnRlclJlbmRlcicsIGVudGl0eSwgW2VudGl0eS5jb250ZXh0LCBlbnRpdHkubmF0aXZlRWxlbWVudF0pXG5cbiAgICAvLyB0cmlnZ2VyIGFmdGVyVXBkYXRlIGFmdGVyIGFsbCBjaGlsZHJlbiBoYXZlIHVwZGF0ZWQuXG4gICAgdHJpZ2dlcignYWZ0ZXJVcGRhdGUnLCBlbnRpdHksIFtlbnRpdHkuY29udGV4dCwgcHJldmlvdXNQcm9wcywgcHJldmlvdXNTdGF0ZSwgc2V0U3RhdGUoZW50aXR5KV0pXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGFsbCB0aGUgY2hpbGRyZW4gb2YgYW4gZW50aXR5LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgQ29tcG9uZW50IGluc3RhbmNlIGlkLlxuICAgKi9cblxuICBmdW5jdGlvbiB1cGRhdGVDaGlsZHJlbiAoZW50aXR5SWQpIHtcbiAgICBmb3JFYWNoKGNoaWxkcmVuW2VudGl0eUlkXSwgZnVuY3Rpb24gKGNoaWxkSWQpIHtcbiAgICAgIHVwZGF0ZUVudGl0eShjaGlsZElkKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBvZiB0aGUgY2hpbGQgZW50aXRpZXMgb2YgYW4gZW50aXR5XG4gICAqXG4gICAqIEBwYXJhbSB7RW50aXR5fSBlbnRpdHlcbiAgICovXG5cbiAgZnVuY3Rpb24gdW5tb3VudENoaWxkcmVuIChlbnRpdHlJZCkge1xuICAgIGZvckVhY2goY2hpbGRyZW5bZW50aXR5SWRdLCBmdW5jdGlvbiAoY2hpbGRJZCkge1xuICAgICAgdW5tb3VudEVudGl0eShjaGlsZElkKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSByb290IGVsZW1lbnQuIElmIHRoaXMgaXMgY2FsbGVkIHN5bmNocm9ub3VzbHkgd2UgbmVlZCB0b1xuICAgKiBjYW5jZWwgYW55IHBlbmRpbmcgZnV0dXJlIHVwZGF0ZXMuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlbW92ZU5hdGl2ZUVsZW1lbnQgKCkge1xuICAgIGNsZWFyRnJhbWUoKVxuICAgIHJlbW92ZUVsZW1lbnQocm9vdElkLCAnMCcsIGN1cnJlbnROYXRpdmVFbGVtZW50KVxuICAgIGN1cnJlbnROYXRpdmVFbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5hdGl2ZSBlbGVtZW50IGZyb20gYSB2aXJ0dWFsIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbnRpdHlJZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcbiAgICpcbiAgICogQHJldHVybiB7SFRNTERvY3VtZW50RnJhZ21lbnR9XG4gICAqL1xuXG4gIGZ1bmN0aW9uIHRvTmF0aXZlIChlbnRpdHlJZCwgcGF0aCwgdm5vZGUpIHtcbiAgICBzd2l0Y2ggKG5vZGVUeXBlKHZub2RlKSkge1xuICAgICAgY2FzZSAndGV4dCc6IHJldHVybiB0b05hdGl2ZVRleHQodm5vZGUpXG4gICAgICBjYXNlICdlbXB0eSc6IHJldHVybiB0b05hdGl2ZUVtcHR5RWxlbWVudChlbnRpdHlJZCwgcGF0aClcbiAgICAgIGNhc2UgJ2VsZW1lbnQnOiByZXR1cm4gdG9OYXRpdmVFbGVtZW50KGVudGl0eUlkLCBwYXRoLCB2bm9kZSlcbiAgICAgIGNhc2UgJ2NvbXBvbmVudCc6IHJldHVybiB0b05hdGl2ZUNvbXBvbmVudChlbnRpdHlJZCwgcGF0aCwgdm5vZGUpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5hdGl2ZSB0ZXh0IGVsZW1lbnQgZnJvbSBhIHZpcnR1YWwgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHZub2RlXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHRvTmF0aXZlVGV4dCAodGV4dCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5hdGl2ZSBlbGVtZW50IGZyb20gYSB2aXJ0dWFsIGVsZW1lbnQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHRvTmF0aXZlRWxlbWVudCAoZW50aXR5SWQsIHBhdGgsIHZub2RlKSB7XG4gICAgdmFyIGVsXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSB2bm9kZS5hdHRyaWJ1dGVzXG4gICAgdmFyIHRhZ05hbWUgPSB2bm9kZS50eXBlXG4gICAgdmFyIGNoaWxkTm9kZXMgPSB2bm9kZS5jaGlsZHJlblxuXG4gICAgLy8gY3JlYXRlIGVsZW1lbnQgZWl0aGVyIGZyb20gcG9vbCBvciBmcmVzaC5cbiAgICBpZiAoc3ZnLmlzRWxlbWVudCh0YWdOYW1lKSkge1xuICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnLm5hbWVzcGFjZSwgdGFnTmFtZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpXG4gICAgfVxuXG4gICAgLy8gc2V0IGF0dHJpYnV0ZXMuXG4gICAgZm9yRWFjaChhdHRyaWJ1dGVzLCBmdW5jdGlvbiAodmFsdWUsIG5hbWUpIHtcbiAgICAgIHNldEF0dHJpYnV0ZShlbnRpdHlJZCwgcGF0aCwgZWwsIG5hbWUsIHZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBhZGQgY2hpbGRyZW4uXG4gICAgZm9yRWFjaChjaGlsZE5vZGVzLCBmdW5jdGlvbiAoY2hpbGQsIGkpIHtcbiAgICAgIHZhciBjaGlsZEVsID0gdG9OYXRpdmUoZW50aXR5SWQsIHBhdGggKyAnLicgKyBpLCBjaGlsZClcbiAgICAgIGlmICghY2hpbGRFbC5wYXJlbnROb2RlKSBlbC5hcHBlbmRDaGlsZChjaGlsZEVsKVxuICAgIH0pXG5cbiAgICAvLyBzdG9yZSBrZXlzIG9uIHRoZSBuYXRpdmUgZWxlbWVudCBmb3IgZmFzdCBldmVudCBoYW5kbGluZy5cbiAgICBlbC5fX2VudGl0eV9fID0gZW50aXR5SWRcbiAgICBlbC5fX3BhdGhfXyA9IHBhdGhcblxuICAgIHJldHVybiBlbFxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5hdGl2ZSBlbGVtZW50IGZyb20gYSB2aXJ0dWFsIGVsZW1lbnQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHRvTmF0aXZlRW1wdHlFbGVtZW50IChlbnRpdHlJZCwgcGF0aCkge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25vc2NyaXB0JylcbiAgICBlbC5fX2VudGl0eV9fID0gZW50aXR5SWRcbiAgICBlbC5fX3BhdGhfXyA9IHBhdGhcbiAgICByZXR1cm4gZWxcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuYXRpdmUgZWxlbWVudCBmcm9tIGEgY29tcG9uZW50LlxuICAgKi9cblxuICBmdW5jdGlvbiB0b05hdGl2ZUNvbXBvbmVudCAoZW50aXR5SWQsIHBhdGgsIHZub2RlKSB7XG4gICAgdmFyIGNoaWxkID0gbmV3IEVudGl0eSh2bm9kZS50eXBlLCBhc3NpZ24oeyBjaGlsZHJlbjogdm5vZGUuY2hpbGRyZW4gfSwgdm5vZGUuYXR0cmlidXRlcyksIGVudGl0eUlkKVxuICAgIGNoaWxkcmVuW2VudGl0eUlkXVtwYXRoXSA9IGNoaWxkLmlkXG4gICAgcmV0dXJuIG1vdW50RW50aXR5KGNoaWxkKVxuICB9XG5cbiAgLyoqXG4gICAqIFBhdGNoIGFuIGVsZW1lbnQgd2l0aCB0aGUgZGlmZiBmcm9tIHR3byB0cmVlcy5cbiAgICovXG5cbiAgZnVuY3Rpb24gcGF0Y2ggKGVudGl0eUlkLCBwcmV2LCBuZXh0LCBlbCkge1xuICAgIHJldHVybiBkaWZmTm9kZSgnMCcsIGVudGl0eUlkLCBwcmV2LCBuZXh0LCBlbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBkaWZmIGJldHdlZW4gdHdvIHRyZWVzIG9mIG5vZGVzLlxuICAgKi9cblxuICBmdW5jdGlvbiBkaWZmTm9kZSAocGF0aCwgZW50aXR5SWQsIHByZXYsIG5leHQsIGVsKSB7XG4gICAgdmFyIGxlZnRUeXBlID0gbm9kZVR5cGUocHJldilcbiAgICB2YXIgcmlnaHRUeXBlID0gbm9kZVR5cGUobmV4dClcblxuICAgIC8vIFR5cGUgY2hhbmdlZC4gVGhpcyBjb3VsZCBiZSBmcm9tIGVsZW1lbnQtPnRleHQsIHRleHQtPkNvbXBvbmVudEEsXG4gICAgLy8gQ29tcG9uZW50QS0+Q29tcG9uZW50QiBldGMuIEJ1dCBOT1QgZGl2LT5zcGFuLiBUaGVzZSBhcmUgdGhlIHNhbWUgdHlwZVxuICAgIC8vIChFbGVtZW50Tm9kZSkgYnV0IGRpZmZlcmVudCB0YWcgbmFtZS5cbiAgICBpZiAobGVmdFR5cGUgIT09IHJpZ2h0VHlwZSkgcmV0dXJuIHJlcGxhY2VFbGVtZW50KGVudGl0eUlkLCBwYXRoLCBlbCwgbmV4dClcblxuICAgIHN3aXRjaCAocmlnaHRUeXBlKSB7XG4gICAgICBjYXNlICd0ZXh0JzogcmV0dXJuIGRpZmZUZXh0KHByZXYsIG5leHQsIGVsKVxuICAgICAgY2FzZSAnZW1wdHknOiByZXR1cm4gZWxcbiAgICAgIGNhc2UgJ2VsZW1lbnQnOiByZXR1cm4gZGlmZkVsZW1lbnQocGF0aCwgZW50aXR5SWQsIHByZXYsIG5leHQsIGVsKVxuICAgICAgY2FzZSAnY29tcG9uZW50JzogcmV0dXJuIGRpZmZDb21wb25lbnQocGF0aCwgZW50aXR5SWQsIHByZXYsIG5leHQsIGVsKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaWZmIHR3byB0ZXh0IG5vZGVzIGFuZCB1cGRhdGUgdGhlIGVsZW1lbnQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGRpZmZUZXh0IChwcmV2aW91cywgY3VycmVudCwgZWwpIHtcbiAgICBpZiAoY3VycmVudCAhPT0gcHJldmlvdXMpIGVsLmRhdGEgPSBjdXJyZW50XG4gICAgcmV0dXJuIGVsXG4gIH1cblxuICAvKipcbiAgICogRGlmZiB0aGUgY2hpbGRyZW4gb2YgYW4gRWxlbWVudE5vZGUuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGRpZmZDaGlsZHJlbiAocGF0aCwgZW50aXR5SWQsIHByZXYsIG5leHQsIGVsKSB7XG4gICAgdmFyIHBvc2l0aW9ucyA9IFtdXG4gICAgdmFyIGhhc0tleXMgPSBmYWxzZVxuICAgIHZhciBjaGlsZE5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGVsLmNoaWxkTm9kZXMpXG4gICAgdmFyIGxlZnRLZXlzID0gcmVkdWNlKHByZXYuY2hpbGRyZW4sIGtleU1hcFJlZHVjZXIsIHt9KVxuICAgIHZhciByaWdodEtleXMgPSByZWR1Y2UobmV4dC5jaGlsZHJlbiwga2V5TWFwUmVkdWNlciwge30pXG4gICAgdmFyIGN1cnJlbnRDaGlsZHJlbiA9IGFzc2lnbih7fSwgY2hpbGRyZW5bZW50aXR5SWRdKVxuXG4gICAgZnVuY3Rpb24ga2V5TWFwUmVkdWNlciAoYWNjLCBjaGlsZCwgaSkge1xuICAgICAgaWYgKGNoaWxkICYmIGNoaWxkLmF0dHJpYnV0ZXMgJiYgY2hpbGQuYXR0cmlidXRlcy5rZXkgIT0gbnVsbCkge1xuICAgICAgICBhY2NbY2hpbGQuYXR0cmlidXRlcy5rZXldID0ge1xuICAgICAgICAgIGVsZW1lbnQ6IGNoaWxkLFxuICAgICAgICAgIGluZGV4OiBpXG4gICAgICAgIH1cbiAgICAgICAgaGFzS2V5cyA9IHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2NcbiAgICB9XG5cbiAgICAvLyBEaWZmIGFsbCBvZiB0aGUgbm9kZXMgdGhhdCBoYXZlIGtleXMuIFRoaXMgbGV0cyB1cyByZS11c2VkIGVsZW1lbnRzXG4gICAgLy8gaW5zdGVhZCBvZiBvdmVycmlkaW5nIHRoZW0gYW5kIGxldHMgdXMgbW92ZSB0aGVtIGFyb3VuZC5cbiAgICBpZiAoaGFzS2V5cykge1xuICAgICAgLy8gUmVtb3ZhbHNcbiAgICAgIGZvckVhY2gobGVmdEtleXMsIGZ1bmN0aW9uIChsZWZ0Tm9kZSwga2V5KSB7XG4gICAgICAgIGlmIChyaWdodEtleXNba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgdmFyIGxlZnRQYXRoID0gcGF0aCArICcuJyArIGxlZnROb2RlLmluZGV4XG4gICAgICAgICAgcmVtb3ZlRWxlbWVudChcbiAgICAgICAgICAgIGVudGl0eUlkLFxuICAgICAgICAgICAgbGVmdFBhdGgsXG4gICAgICAgICAgICBjaGlsZE5vZGVzW2xlZnROb2RlLmluZGV4XVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8gVXBkYXRlIG5vZGVzXG4gICAgICBmb3JFYWNoKHJpZ2h0S2V5cywgZnVuY3Rpb24gKHJpZ2h0Tm9kZSwga2V5KSB7XG4gICAgICAgIHZhciBsZWZ0Tm9kZSA9IGxlZnRLZXlzW2tleV1cblxuICAgICAgICAvLyBXZSBvbmx5IHdhbnQgdXBkYXRlcyBmb3Igbm93XG4gICAgICAgIGlmIChsZWZ0Tm9kZSA9PSBudWxsKSByZXR1cm5cblxuICAgICAgICB2YXIgbGVmdFBhdGggPSBwYXRoICsgJy4nICsgbGVmdE5vZGUuaW5kZXhcblxuICAgICAgICAvLyBVcGRhdGVkXG4gICAgICAgIHBvc2l0aW9uc1tyaWdodE5vZGUuaW5kZXhdID0gZGlmZk5vZGUoXG4gICAgICAgICAgbGVmdFBhdGgsXG4gICAgICAgICAgZW50aXR5SWQsXG4gICAgICAgICAgbGVmdE5vZGUuZWxlbWVudCxcbiAgICAgICAgICByaWdodE5vZGUuZWxlbWVudCxcbiAgICAgICAgICBjaGlsZE5vZGVzW2xlZnROb2RlLmluZGV4XVxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgICAvLyBVcGRhdGUgdGhlIHBvc2l0aW9ucyBvZiBhbGwgY2hpbGQgY29tcG9uZW50cyBhbmQgZXZlbnQgaGFuZGxlcnNcbiAgICAgIGZvckVhY2gocmlnaHRLZXlzLCBmdW5jdGlvbiAocmlnaHROb2RlLCBrZXkpIHtcbiAgICAgICAgdmFyIGxlZnROb2RlID0gbGVmdEtleXNba2V5XVxuXG4gICAgICAgIC8vIFdlIGp1c3Qgd2FudCBlbGVtZW50cyB0aGF0IGhhdmUgbW92ZWQgYXJvdW5kXG4gICAgICAgIGlmIChsZWZ0Tm9kZSA9PSBudWxsIHx8IGxlZnROb2RlLmluZGV4ID09PSByaWdodE5vZGUuaW5kZXgpIHJldHVyblxuXG4gICAgICAgIHZhciByaWdodFBhdGggPSBwYXRoICsgJy4nICsgcmlnaHROb2RlLmluZGV4XG4gICAgICAgIHZhciBsZWZ0UGF0aCA9IHBhdGggKyAnLicgKyBsZWZ0Tm9kZS5pbmRleFxuXG4gICAgICAgIC8vIFVwZGF0ZSBhbGwgdGhlIGNoaWxkIGNvbXBvbmVudCBwYXRoIHBvc2l0aW9ucyB0byBtYXRjaFxuICAgICAgICAvLyB0aGUgbGF0ZXN0IHBvc2l0aW9ucyBpZiB0aGV5J3ZlIGNoYW5nZWQuIFRoaXMgaXMgYSBiaXQgaGFja3kuXG4gICAgICAgIGZvckVhY2goY3VycmVudENoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGRJZCwgY2hpbGRQYXRoKSB7XG4gICAgICAgICAgaWYgKGxlZnRQYXRoID09PSBjaGlsZFBhdGgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBjaGlsZHJlbltlbnRpdHlJZF1bY2hpbGRQYXRoXVxuICAgICAgICAgICAgY2hpbGRyZW5bZW50aXR5SWRdW3JpZ2h0UGF0aF0gPSBjaGlsZElkXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgLy8gTm93IGFkZCBhbGwgb2YgdGhlIG5ldyBub2RlcyBsYXN0IGluIGNhc2UgdGhlaXIgcGF0aFxuICAgICAgLy8gd291bGQgaGF2ZSBjb25mbGljdGVkIHdpdGggb25lIG9mIHRoZSBwcmV2aW91cyBwYXRocy5cbiAgICAgIGZvckVhY2gocmlnaHRLZXlzLCBmdW5jdGlvbiAocmlnaHROb2RlLCBrZXkpIHtcbiAgICAgICAgdmFyIHJpZ2h0UGF0aCA9IHBhdGggKyAnLicgKyByaWdodE5vZGUuaW5kZXhcbiAgICAgICAgaWYgKGxlZnRLZXlzW2tleV0gPT0gbnVsbCkge1xuICAgICAgICAgIHBvc2l0aW9uc1tyaWdodE5vZGUuaW5kZXhdID0gdG9OYXRpdmUoXG4gICAgICAgICAgICBlbnRpdHlJZCxcbiAgICAgICAgICAgIHJpZ2h0UGF0aCxcbiAgICAgICAgICAgIHJpZ2h0Tm9kZS5lbGVtZW50XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbWF4TGVuZ3RoID0gTWF0aC5tYXgocHJldi5jaGlsZHJlbi5sZW5ndGgsIG5leHQuY2hpbGRyZW4ubGVuZ3RoKVxuICAgICAgLy8gTm93IGRpZmYgYWxsIG9mIHRoZSBub2RlcyB0aGF0IGRvbid0IGhhdmUga2V5c1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXhMZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbGVmdE5vZGUgPSBwcmV2LmNoaWxkcmVuW2ldXG4gICAgICAgIHZhciByaWdodE5vZGUgPSBuZXh0LmNoaWxkcmVuW2ldXG5cbiAgICAgICAgLy8gUmVtb3ZhbHNcbiAgICAgICAgaWYgKHJpZ2h0Tm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmVtb3ZlRWxlbWVudChcbiAgICAgICAgICAgIGVudGl0eUlkLFxuICAgICAgICAgICAgcGF0aCArICcuJyArIGksXG4gICAgICAgICAgICBjaGlsZE5vZGVzW2ldXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBOZXcgTm9kZVxuICAgICAgICBpZiAobGVmdE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHBvc2l0aW9uc1tpXSA9IHRvTmF0aXZlKFxuICAgICAgICAgICAgZW50aXR5SWQsXG4gICAgICAgICAgICBwYXRoICsgJy4nICsgaSxcbiAgICAgICAgICAgIHJpZ2h0Tm9kZVxuICAgICAgICAgIClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlZFxuICAgICAgICBwb3NpdGlvbnNbaV0gPSBkaWZmTm9kZShcbiAgICAgICAgICBwYXRoICsgJy4nICsgaSxcbiAgICAgICAgICBlbnRpdHlJZCxcbiAgICAgICAgICBsZWZ0Tm9kZSxcbiAgICAgICAgICByaWdodE5vZGUsXG4gICAgICAgICAgY2hpbGROb2Rlc1tpXVxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVwb3NpdGlvbiBhbGwgdGhlIGVsZW1lbnRzXG4gICAgZm9yRWFjaChwb3NpdGlvbnMsIGZ1bmN0aW9uIChjaGlsZEVsLCBuZXdQb3NpdGlvbikge1xuICAgICAgdmFyIHRhcmdldCA9IGVsLmNoaWxkTm9kZXNbbmV3UG9zaXRpb25dXG4gICAgICBpZiAoY2hpbGRFbCAmJiBjaGlsZEVsICE9PSB0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIGVsLmluc2VydEJlZm9yZShjaGlsZEVsLCB0YXJnZXQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoY2hpbGRFbClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGlmZiB0aGUgYXR0cmlidXRlcyBhbmQgYWRkL3JlbW92ZSB0aGVtLlxuICAgKi9cblxuICBmdW5jdGlvbiBkaWZmQXR0cmlidXRlcyAocHJldiwgbmV4dCwgZWwsIGVudGl0eUlkLCBwYXRoKSB7XG4gICAgdmFyIG5leHRBdHRycyA9IG5leHQuYXR0cmlidXRlc1xuICAgIHZhciBwcmV2QXR0cnMgPSBwcmV2LmF0dHJpYnV0ZXNcblxuICAgIC8vIGFkZCBuZXcgYXR0cnNcbiAgICBmb3JFYWNoKG5leHRBdHRycywgZnVuY3Rpb24gKHZhbHVlLCBuYW1lKSB7XG4gICAgICBpZiAoZXZlbnRzW25hbWVdIHx8ICEobmFtZSBpbiBwcmV2QXR0cnMpIHx8IHByZXZBdHRyc1tuYW1lXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgc2V0QXR0cmlidXRlKGVudGl0eUlkLCBwYXRoLCBlbCwgbmFtZSwgdmFsdWUpXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIHJlbW92ZSBvbGQgYXR0cnNcbiAgICBmb3JFYWNoKHByZXZBdHRycywgZnVuY3Rpb24gKHZhbHVlLCBuYW1lKSB7XG4gICAgICBpZiAoIShuYW1lIGluIG5leHRBdHRycykpIHtcbiAgICAgICAgcmVtb3ZlQXR0cmlidXRlKGVudGl0eUlkLCBwYXRoLCBlbCwgbmFtZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBhIGNvbXBvbmVudCB3aXRoIHRoZSBwcm9wcyBmcm9tIHRoZSBuZXh0IG5vZGUuIElmXG4gICAqIHRoZSBjb21wb25lbnQgdHlwZSBoYXMgY2hhbmdlZCwgd2UnbGwganVzdCByZW1vdmUgdGhlIG9sZCBvbmVcbiAgICogYW5kIHJlcGxhY2UgaXQgd2l0aCB0aGUgbmV3IGNvbXBvbmVudC5cbiAgICovXG5cbiAgZnVuY3Rpb24gZGlmZkNvbXBvbmVudCAocGF0aCwgZW50aXR5SWQsIHByZXYsIG5leHQsIGVsKSB7XG4gICAgaWYgKG5leHQudHlwZSAhPT0gcHJldi50eXBlKSB7XG4gICAgICByZXR1cm4gcmVwbGFjZUVsZW1lbnQoZW50aXR5SWQsIHBhdGgsIGVsLCBuZXh0KVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdGFyZ2V0SWQgPSBjaGlsZHJlbltlbnRpdHlJZF1bcGF0aF1cblxuICAgICAgLy8gVGhpcyBpcyBhIGhhY2sgZm9yIG5vd1xuICAgICAgaWYgKHRhcmdldElkKSB7XG4gICAgICAgIHVwZGF0ZUVudGl0eVByb3BzKHRhcmdldElkLCBhc3NpZ24oeyBjaGlsZHJlbjogbmV4dC5jaGlsZHJlbiB9LCBuZXh0LmF0dHJpYnV0ZXMpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWxcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGlmZiB0d28gZWxlbWVudCBub2Rlcy5cbiAgICovXG5cbiAgZnVuY3Rpb24gZGlmZkVsZW1lbnQgKHBhdGgsIGVudGl0eUlkLCBwcmV2LCBuZXh0LCBlbCkge1xuICAgIGlmIChuZXh0LnR5cGUgIT09IHByZXYudHlwZSkgcmV0dXJuIHJlcGxhY2VFbGVtZW50KGVudGl0eUlkLCBwYXRoLCBlbCwgbmV4dClcbiAgICBkaWZmQXR0cmlidXRlcyhwcmV2LCBuZXh0LCBlbCwgZW50aXR5SWQsIHBhdGgpXG4gICAgZGlmZkNoaWxkcmVuKHBhdGgsIGVudGl0eUlkLCBwcmV2LCBuZXh0LCBlbClcbiAgICByZXR1cm4gZWxcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuIGVsZW1lbnQgZnJvbSB0aGUgRE9NIGFuZCB1bm1vdW50cyBhbmQgY29tcG9uZW50c1xuICAgKiB0aGF0IGFyZSB3aXRoaW4gdGhhdCBicmFuY2hcbiAgICpcbiAgICogc2lkZSBlZmZlY3RzOlxuICAgKiAgIC0gcmVtb3ZlcyBlbGVtZW50IGZyb20gdGhlIERPTVxuICAgKiAgIC0gcmVtb3ZlcyBpbnRlcm5hbCByZWZlcmVuY2VzXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbnRpdHlJZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKi9cblxuICBmdW5jdGlvbiByZW1vdmVFbGVtZW50IChlbnRpdHlJZCwgcGF0aCwgZWwpIHtcbiAgICB2YXIgY2hpbGRyZW5CeVBhdGggPSBjaGlsZHJlbltlbnRpdHlJZF1cbiAgICB2YXIgY2hpbGRJZCA9IGNoaWxkcmVuQnlQYXRoW3BhdGhdXG4gICAgdmFyIGVudGl0eUhhbmRsZXJzID0gaGFuZGxlcnNbZW50aXR5SWRdIHx8IHt9XG4gICAgdmFyIHJlbW92YWxzID0gW11cblxuICAgIC8vIElmIHRoZSBwYXRoIHBvaW50cyB0byBhIGNvbXBvbmVudCB3ZSBzaG91bGQgdXNlIHRoYXRcbiAgICAvLyBjb21wb25lbnRzIGVsZW1lbnQgaW5zdGVhZCwgYmVjYXVzZSBpdCBtaWdodCBoYXZlIG1vdmVkIGl0LlxuICAgIGlmIChjaGlsZElkKSB7XG4gICAgICB2YXIgY2hpbGQgPSBlbnRpdGllc1tjaGlsZElkXVxuICAgICAgZWwgPSBjaGlsZC5uYXRpdmVFbGVtZW50XG4gICAgICB1bm1vdW50RW50aXR5KGNoaWxkSWQpXG4gICAgICByZW1vdmFscy5wdXNoKHBhdGgpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEp1c3QgcmVtb3ZlIHRoZSB0ZXh0IG5vZGVcbiAgICAgIGlmICghaXNFbGVtZW50KGVsKSkgcmV0dXJuIGVsICYmIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpXG4gICAgICAvLyBUaGVuIHdlIG5lZWQgdG8gZmluZCBhbnkgY29tcG9uZW50cyB3aXRoaW4gdGhpc1xuICAgICAgLy8gYnJhbmNoIGFuZCB1bm1vdW50IHRoZW0uXG4gICAgICBmb3JFYWNoKGNoaWxkcmVuQnlQYXRoLCBmdW5jdGlvbiAoY2hpbGRJZCwgY2hpbGRQYXRoKSB7XG4gICAgICAgIGlmIChjaGlsZFBhdGggPT09IHBhdGggfHwgaXNXaXRoaW5QYXRoKHBhdGgsIGNoaWxkUGF0aCkpIHtcbiAgICAgICAgICB1bm1vdW50RW50aXR5KGNoaWxkSWQpXG4gICAgICAgICAgcmVtb3ZhbHMucHVzaChjaGlsZFBhdGgpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIFJlbW92ZSBhbGwgZXZlbnRzIGF0IHRoaXMgcGF0aCBvciBiZWxvdyBpdFxuICAgICAgZm9yRWFjaChlbnRpdHlIYW5kbGVycywgZnVuY3Rpb24gKGZuLCBoYW5kbGVyUGF0aCkge1xuICAgICAgICBpZiAoaGFuZGxlclBhdGggPT09IHBhdGggfHwgaXNXaXRoaW5QYXRoKHBhdGgsIGhhbmRsZXJQYXRoKSkge1xuICAgICAgICAgIHJlbW92ZUV2ZW50KGVudGl0eUlkLCBoYW5kbGVyUGF0aClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgdGhlIHBhdGhzIGZyb20gdGhlIG9iamVjdCB3aXRob3V0IHRvdWNoaW5nIHRoZVxuICAgIC8vIG9sZCBvYmplY3QuIFRoaXMga2VlcHMgdGhlIG9iamVjdCB1c2luZyBmYXN0IHByb3BlcnRpZXMuXG4gICAgZm9yRWFjaChyZW1vdmFscywgZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgIGRlbGV0ZSBjaGlsZHJlbltlbnRpdHlJZF1bcGF0aF1cbiAgICB9KVxuXG4gICAgLy8gUmVtb3ZlIGl0IGZyb20gdGhlIERPTVxuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpXG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZSBhbiBlbGVtZW50IGluIHRoZSBET00uIFJlbW92aW5nIGFsbCBjb21wb25lbnRzXG4gICAqIHdpdGhpbiB0aGF0IGVsZW1lbnQgYW5kIHJlLXJlbmRlcmluZyB0aGUgbmV3IHZpcnR1YWwgbm9kZS5cbiAgICpcbiAgICogQHBhcmFtIHtFbnRpdHl9IGVudGl0eVxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcbiAgICpcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cbiAgZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnQgKGVudGl0eUlkLCBwYXRoLCBlbCwgdm5vZGUpIHtcbiAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50Tm9kZVxuICAgIHZhciBpbmRleCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwocGFyZW50LmNoaWxkTm9kZXMsIGVsKVxuXG4gICAgLy8gcmVtb3ZlIHRoZSBwcmV2aW91cyBlbGVtZW50IGFuZCBhbGwgbmVzdGVkIGNvbXBvbmVudHMuIFRoaXNcbiAgICAvLyBuZWVkcyB0byBoYXBwZW4gYmVmb3JlIHdlIGNyZWF0ZSB0aGUgbmV3IGVsZW1lbnQgc28gd2UgZG9uJ3RcbiAgICAvLyBnZXQgY2xhc2hlcyBvbiB0aGUgY29tcG9uZW50IHBhdGhzLlxuICAgIHJlbW92ZUVsZW1lbnQoZW50aXR5SWQsIHBhdGgsIGVsKVxuXG4gICAgLy8gdGhlbiBhZGQgdGhlIG5ldyBlbGVtZW50IGluIHRoZXJlXG4gICAgdmFyIG5ld0VsID0gdG9OYXRpdmUoZW50aXR5SWQsIHBhdGgsIHZub2RlKVxuICAgIHZhciB0YXJnZXQgPSBwYXJlbnQuY2hpbGROb2Rlc1tpbmRleF1cblxuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUobmV3RWwsIHRhcmdldClcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5ld0VsKVxuICAgIH1cblxuICAgIC8vIHdhbGsgdXAgdGhlIHRyZWUgYW5kIHVwZGF0ZSBhbGwgYGVudGl0eS5uYXRpdmVFbGVtZW50YCByZWZlcmVuY2VzLlxuICAgIGlmIChlbnRpdHlJZCAhPT0gJ3Jvb3QnICYmIHBhdGggPT09ICcwJykge1xuICAgICAgdXBkYXRlTmF0aXZlRWxlbWVudChlbnRpdHlJZCwgbmV3RWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0VsXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGFsbCBlbnRpdGllcyBpbiBhIGJyYW5jaCB0aGF0IGhhdmUgdGhlIHNhbWUgbmF0aXZlRWxlbWVudC4gVGhpc1xuICAgKiBoYXBwZW5zIHdoZW4gYSBjb21wb25lbnQgaGFzIGFub3RoZXIgY29tcG9uZW50IGFzIGl0J3Mgcm9vdCBub2RlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZW50aXR5SWRcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbmV3RWxcbiAgICpcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cbiAgZnVuY3Rpb24gdXBkYXRlTmF0aXZlRWxlbWVudCAoZW50aXR5SWQsIG5ld0VsKSB7XG4gICAgdmFyIHRhcmdldCA9IGVudGl0aWVzW2VudGl0eUlkXVxuICAgIGlmICh0YXJnZXQub3duZXJJZCA9PT0gJ3Jvb3QnKSByZXR1cm5cbiAgICBpZiAoY2hpbGRyZW5bdGFyZ2V0Lm93bmVySWRdWycwJ10gPT09IGVudGl0eUlkKSB7XG4gICAgICBlbnRpdGllc1t0YXJnZXQub3duZXJJZF0ubmF0aXZlRWxlbWVudCA9IG5ld0VsXG4gICAgICB1cGRhdGVOYXRpdmVFbGVtZW50KHRhcmdldC5vd25lcklkLCBuZXdFbClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBhdHRyaWJ1dGUgb2YgYW4gZWxlbWVudCwgcGVyZm9ybWluZyBhZGRpdGlvbmFsIHRyYW5zZm9ybWF0aW9uc1xuICAgKiBkZXBlbmRuaW5nIG9uIHRoZSBhdHRyaWJ1dGUgbmFtZVxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICovXG5cbiAgZnVuY3Rpb24gc2V0QXR0cmlidXRlIChlbnRpdHlJZCwgcGF0aCwgZWwsIG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSB7XG4gICAgICByZW1vdmVBdHRyaWJ1dGUoZW50aXR5SWQsIHBhdGgsIGVsLCBuYW1lKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChldmVudHNbbmFtZV0pIHtcbiAgICAgIGFkZEV2ZW50KGVudGl0eUlkLCBwYXRoLCBldmVudHNbbmFtZV0sIHZhbHVlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgY2FzZSAnY2hlY2tlZCc6XG4gICAgICBjYXNlICdkaXNhYmxlZCc6XG4gICAgICBjYXNlICdzZWxlY3RlZCc6XG4gICAgICAgIGVsW25hbWVdID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnaW5uZXJIVE1MJzpcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gdmFsdWVcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3ZhbHVlJzpcbiAgICAgICAgc2V0RWxlbWVudFZhbHVlKGVsLCB2YWx1ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2Ugc3ZnLmlzQXR0cmlidXRlKG5hbWUpOlxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGVOUyhzdmcubmFtZXNwYWNlLCBuYW1lLCB2YWx1ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSlcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFuIGF0dHJpYnV0ZSwgcGVyZm9ybWluZyBhZGRpdGlvbmFsIHRyYW5zZm9ybWF0aW9uc1xuICAgKiBkZXBlbmRuaW5nIG9uIHRoZSBhdHRyaWJ1dGUgbmFtZVxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgKi9cblxuICBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUgKGVudGl0eUlkLCBwYXRoLCBlbCwgbmFtZSkge1xuICAgIGlmIChldmVudHNbbmFtZV0pIHtcbiAgICAgIHJlbW92ZUV2ZW50KGVudGl0eUlkLCBwYXRoLCBldmVudHNbbmFtZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlICdjaGVja2VkJzpcbiAgICAgIGNhc2UgJ2Rpc2FibGVkJzpcbiAgICAgIGNhc2UgJ3NlbGVjdGVkJzpcbiAgICAgICAgZWxbbmFtZV0gPSBmYWxzZVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnaW5uZXJIVE1MJzpcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gJydcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSAndmFsdWUnOlxuICAgICAgICBzZXRFbGVtZW50VmFsdWUoZWwsIG51bGwpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUobmFtZSlcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiBvbmUgdHJlZSBwYXRoIGlzIHdpdGhpblxuICAgKiBhbm90aGVyIHRyZWUgcGF0aC4gRXhhbXBsZTpcbiAgICpcbiAgICogMC4xIHZzIDAuMS4xID0gdHJ1ZVxuICAgKiAwLjIgdnMgMC4zLjUgPSBmYWxzZVxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdGFyZ2V0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAqXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuXG4gIGZ1bmN0aW9uIGlzV2l0aGluUGF0aCAodGFyZ2V0LCBwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZih0YXJnZXQgKyAnLicpID09PSAwXG4gIH1cblxuICAvKipcbiAgICogSXMgdGhlIERPTSBub2RlIGFuIGVsZW1lbnQgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKlxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cblxuICBmdW5jdGlvbiBpc0VsZW1lbnQgKGVsKSB7XG4gICAgcmV0dXJuICEhKGVsICYmIGVsLnRhZ05hbWUpXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCB0aGUgY2hpbGQgbm9kZXMgZnJvbSBhbiBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkcmVuIChlbCkge1xuICAgIHdoaWxlIChlbC5maXJzdENoaWxkKSBlbC5yZW1vdmVDaGlsZChlbC5maXJzdENoaWxkKVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYSBob29rIG9uIGEgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBOYW1lIG9mIGhvb2suXG4gICAqIEBwYXJhbSB7RW50aXR5fSBlbnRpdHkgVGhlIGNvbXBvbmVudCBpbnN0YW5jZS5cbiAgICogQHBhcmFtIHtBcnJheX0gYXJncyBUbyBwYXNzIGFsb25nIHRvIGhvb2suXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHRyaWdnZXIgKG5hbWUsIGVudGl0eSwgYXJncykge1xuICAgIGlmICh0eXBlb2YgZW50aXR5LmNvbXBvbmVudFtuYW1lXSAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuXG4gICAgcmV0dXJuIGVudGl0eS5jb21wb25lbnRbbmFtZV0uYXBwbHkobnVsbCwgYXJncylcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYW4gZW50aXR5IHRvIG1hdGNoIHRoZSBsYXRlc3QgcmVuZGVyZWQgdm9kZS4gV2UgYWx3YXlzXG4gICAqIHJlcGxhY2UgdGhlIHByb3BzIG9uIHRoZSBjb21wb25lbnQgd2hlbiBjb21wb3NpbmcgdGhlbS4gVGhpc1xuICAgKiB3aWxsIHRyaWdnZXIgYSByZS1yZW5kZXIgb24gYWxsIGNoaWxkcmVuIGJlbG93IHRoaXMgcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RW50aXR5fSBlbnRpdHlcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAgICogQHBhcmFtIHtPYmplY3R9IHZub2RlXG4gICAqXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUVudGl0eVByb3BzIChlbnRpdHlJZCwgbmV4dFByb3BzKSB7XG4gICAgdmFyIGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXVxuICAgIGVudGl0eS5wZW5kaW5nUHJvcHMgPSBkZWZhdWx0cyh7fSwgbmV4dFByb3BzLCBlbnRpdHkuY29tcG9uZW50LmRlZmF1bHRQcm9wcyB8fCB7fSlcbiAgICBlbnRpdHkuZGlydHkgPSB0cnVlXG4gICAgaW52YWxpZGF0ZSgpXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGNvbXBvbmVudCBpbnN0YW5jZSBzdGF0ZS5cbiAgICovXG5cbiAgZnVuY3Rpb24gdXBkYXRlRW50aXR5U3RhdGUgKGVudGl0eSwgbmV4dFN0YXRlKSB7XG4gICAgZW50aXR5LnBlbmRpbmdTdGF0ZSA9IGFzc2lnbihlbnRpdHkucGVuZGluZ1N0YXRlLCBuZXh0U3RhdGUpXG4gICAgZW50aXR5LmRpcnR5ID0gdHJ1ZVxuICAgIGludmFsaWRhdGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIENvbW1pdCBwcm9wcyBhbmQgc3RhdGUgY2hhbmdlcyB0byBhbiBlbnRpdHkuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGNvbW1pdCAoZW50aXR5KSB7XG4gICAgZW50aXR5LmNvbnRleHQgPSB7XG4gICAgICBzdGF0ZTogZW50aXR5LnBlbmRpbmdTdGF0ZSxcbiAgICAgIHByb3BzOiBlbnRpdHkucGVuZGluZ1Byb3BzLFxuICAgICAgaWQ6IGVudGl0eS5pZFxuICAgIH1cbiAgICBlbnRpdHkucGVuZGluZ1N0YXRlID0gYXNzaWduKHt9LCBlbnRpdHkuY29udGV4dC5zdGF0ZSlcbiAgICBlbnRpdHkucGVuZGluZ1Byb3BzID0gYXNzaWduKHt9LCBlbnRpdHkuY29udGV4dC5wcm9wcylcbiAgICBlbnRpdHkuZGlydHkgPSBmYWxzZVxuICAgIGlmICh0eXBlb2YgZW50aXR5LmNvbXBvbmVudC52YWxpZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZW50aXR5LmNvbXBvbmVudC52YWxpZGF0ZShlbnRpdHkuY29udGV4dClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJ5IHRvIGF2b2lkIGNyZWF0aW5nIG5ldyB2aXJ0dWFsIGRvbSBpZiBwb3NzaWJsZS5cbiAgICpcbiAgICogTGF0ZXIgd2UgbWF5IGV4cG9zZSB0aGlzIHNvIHlvdSBjYW4gb3ZlcnJpZGUsIGJ1dCBub3QgdGhlcmUgeWV0LlxuICAgKi9cblxuICBmdW5jdGlvbiBzaG91bGRVcGRhdGUgKGVudGl0eSkge1xuICAgIGlmICghZW50aXR5LmRpcnR5KSByZXR1cm4gZmFsc2VcbiAgICBpZiAoIWVudGl0eS5jb21wb25lbnQuc2hvdWxkVXBkYXRlKSByZXR1cm4gdHJ1ZVxuICAgIHZhciBuZXh0UHJvcHMgPSBlbnRpdHkucGVuZGluZ1Byb3BzXG4gICAgdmFyIG5leHRTdGF0ZSA9IGVudGl0eS5wZW5kaW5nU3RhdGVcbiAgICB2YXIgYm9vbCA9IGVudGl0eS5jb21wb25lbnQuc2hvdWxkVXBkYXRlKGVudGl0eS5jb250ZXh0LCBuZXh0UHJvcHMsIG5leHRTdGF0ZSlcbiAgICByZXR1cm4gYm9vbFxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGFuIGVudGl0eS5cbiAgICpcbiAgICogVGhpcyBpcyBtb3N0bHkgdG8gcHJlLXByZXByb2Nlc3MgY29tcG9uZW50IHByb3BlcnRpZXMgYW5kIHZhbHVlcyBjaGFpbnMuXG4gICAqXG4gICAqIFRoZSBlbmQgcmVzdWx0IGlzIGZvciBldmVyeSBjb21wb25lbnQgdGhhdCBnZXRzIG1vdW50ZWQsXG4gICAqIHlvdSBjcmVhdGUgYSBzZXQgb2YgSU8gbm9kZXMgaW4gdGhlIG5ldHdvcmsgZnJvbSB0aGUgYHZhbHVlYCBkZWZpbml0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFxuICAgKi9cblxuICBmdW5jdGlvbiByZWdpc3RlciAoZW50aXR5KSB7XG4gICAgcmVnaXN0ZXJFbnRpdHkoZW50aXR5KVxuICAgIHZhciBjb21wb25lbnQgPSBlbnRpdHkuY29tcG9uZW50XG4gICAgaWYgKGNvbXBvbmVudC5yZWdpc3RlcmVkKSByZXR1cm5cblxuICAgIC8vIGluaXRpYWxpemUgc291cmNlcyBvbmNlIGZvciBhIGNvbXBvbmVudCB0eXBlLlxuICAgIHJlZ2lzdGVyU291cmNlcyhlbnRpdHkpXG4gICAgY29tcG9uZW50LnJlZ2lzdGVyZWQgPSB0cnVlXG4gIH1cblxuICAvKipcbiAgICogQWRkIGVudGl0eSB0byBkYXRhLXN0cnVjdHVyZXMgcmVsYXRlZCB0byBjb21wb25lbnRzL2VudGl0aWVzLlxuICAgKlxuICAgKiBAcGFyYW0ge0VudGl0eX0gZW50aXR5XG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyRW50aXR5IChlbnRpdHkpIHtcbiAgICB2YXIgY29tcG9uZW50ID0gZW50aXR5LmNvbXBvbmVudFxuICAgIC8vIGFsbCBlbnRpdGllcyBmb3IgdGhpcyBjb21wb25lbnQgdHlwZS5cbiAgICB2YXIgZW50aXRpZXMgPSBjb21wb25lbnQuZW50aXRpZXMgPSBjb21wb25lbnQuZW50aXRpZXMgfHwge31cbiAgICAvLyBhZGQgZW50aXR5IHRvIGNvbXBvbmVudCBsaXN0XG4gICAgZW50aXRpZXNbZW50aXR5LmlkXSA9IGVudGl0eVxuICAgIC8vIG1hcCB0byBjb21wb25lbnQgc28geW91IGNhbiByZW1vdmUgbGF0ZXIuXG4gICAgY29tcG9uZW50c1tlbnRpdHkuaWRdID0gY29tcG9uZW50XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBzb3VyY2VzIGZvciBhIGNvbXBvbmVudCBieSB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0ge0VudGl0eX0gZW50aXR5XG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyU291cmNlcyAoZW50aXR5KSB7XG4gICAgdmFyIGNvbXBvbmVudCA9IGNvbXBvbmVudHNbZW50aXR5LmlkXVxuICAgIC8vIGdldCAnY2xhc3MtbGV2ZWwnIHNvdXJjZXMuXG4gICAgLy8gaWYgd2UndmUgYWxyZWFkeSBob29rZWQgaXQgdXAsIHRoZW4gd2UncmUgZ29vZC5cbiAgICB2YXIgc291cmNlcyA9IGNvbXBvbmVudC5zb3VyY2VzXG4gICAgaWYgKHNvdXJjZXMpIHJldHVyblxuICAgIHZhciBlbnRpdGllcyA9IGNvbXBvbmVudC5lbnRpdGllc1xuXG4gICAgLy8gaG9vayB1cCBzb3VyY2VzLlxuICAgIHZhciBtYXAgPSBjb21wb25lbnQuc291cmNlVG9Qcm9wZXJ0eU5hbWUgPSB7fVxuICAgIGNvbXBvbmVudC5zb3VyY2VzID0gc291cmNlcyA9IFtdXG4gICAgdmFyIHByb3BUeXBlcyA9IGNvbXBvbmVudC5wcm9wVHlwZXNcbiAgICBmb3IgKHZhciBuYW1lIGluIHByb3BUeXBlcykge1xuICAgICAgdmFyIGRhdGEgPSBwcm9wVHlwZXNbbmFtZV1cbiAgICAgIGlmICghZGF0YSkgY29udGludWVcbiAgICAgIGlmICghZGF0YS5zb3VyY2UpIGNvbnRpbnVlXG4gICAgICBzb3VyY2VzLnB1c2goZGF0YS5zb3VyY2UpXG4gICAgICBtYXBbZGF0YS5zb3VyY2VdID0gbmFtZVxuICAgIH1cblxuICAgIC8vIHNlbmQgdmFsdWUgdXBkYXRlcyB0byBhbGwgY29tcG9uZW50IGluc3RhbmNlcy5cbiAgICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgY29ubmVjdGlvbnNbc291cmNlXSA9IGNvbm5lY3Rpb25zW3NvdXJjZV0gfHwgW11cbiAgICAgIGNvbm5lY3Rpb25zW3NvdXJjZV0ucHVzaCh1cGRhdGUpXG5cbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZSAoZGF0YSkge1xuICAgICAgICB2YXIgcHJvcCA9IG1hcFtzb3VyY2VdXG4gICAgICAgIGZvciAodmFyIGVudGl0eUlkIGluIGVudGl0aWVzKSB7XG4gICAgICAgICAgdmFyIGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXVxuICAgICAgICAgIHZhciBjaGFuZ2VzID0ge31cbiAgICAgICAgICBjaGFuZ2VzW3Byb3BdID0gZGF0YVxuICAgICAgICAgIHVwZGF0ZUVudGl0eVByb3BzKGVudGl0eUlkLCBhc3NpZ24oZW50aXR5LnBlbmRpbmdQcm9wcywgY2hhbmdlcykpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgaW5pdGlhbCBzb3VyY2UgdmFsdWUgb24gdGhlIGVudGl0eVxuICAgKlxuICAgKiBAcGFyYW0ge0VudGl0eX0gZW50aXR5XG4gICAqL1xuXG4gIGZ1bmN0aW9uIHNldFNvdXJjZXMgKGVudGl0eSkge1xuICAgIHZhciBjb21wb25lbnQgPSBlbnRpdHkuY29tcG9uZW50XG4gICAgdmFyIG1hcCA9IGNvbXBvbmVudC5zb3VyY2VUb1Byb3BlcnR5TmFtZVxuICAgIHZhciBzb3VyY2VzID0gY29tcG9uZW50LnNvdXJjZXNcbiAgICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgdmFyIG5hbWUgPSBtYXBbc291cmNlXVxuICAgICAgaWYgKGVudGl0eS5wZW5kaW5nUHJvcHNbbmFtZV0gIT0gbnVsbCkgcmV0dXJuXG4gICAgICBlbnRpdHkucGVuZGluZ1Byb3BzW25hbWVdID0gYXBwLnNvdXJjZXNbc291cmNlXSAvLyBnZXQgbGF0ZXN0IHZhbHVlIHBsdWdnZWQgaW50byBnbG9iYWwgc3RvcmVcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbGwgb2YgdGhlIERPTSBldmVudCBsaXN0ZW5lcnNcbiAgICovXG5cbiAgZnVuY3Rpb24gYWRkTmF0aXZlRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIGZvckVhY2goZXZlbnRzLCBmdW5jdGlvbiAoZXZlbnRUeXBlKSB7XG4gICAgICByb290RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlRXZlbnQsIHRydWUpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYWxsIG9mIHRoZSBET00gZXZlbnQgbGlzdGVuZXJzXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlbW92ZU5hdGl2ZUV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICBmb3JFYWNoKGV2ZW50cywgZnVuY3Rpb24gKGV2ZW50VHlwZSkge1xuICAgICAgcm9vdEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZUV2ZW50LCB0cnVlKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGFuIGV2ZW50IHRoYXQgaGFzIG9jY3VyZWQgd2l0aGluIHRoZSBjb250YWluZXJcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICovXG5cbiAgZnVuY3Rpb24gaGFuZGxlRXZlbnQgKGV2ZW50KSB7XG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldFxuICAgIHZhciBldmVudFR5cGUgPSBldmVudC50eXBlXG5cbiAgICAvLyBXYWxrIHVwIHRoZSBET00gdHJlZSBhbmQgc2VlIGlmIHRoZXJlIGlzIGEgaGFuZGxlclxuICAgIC8vIGZvciB0aGlzIGV2ZW50IHR5cGUgaGlnaGVyIHVwLlxuICAgIHdoaWxlICh0YXJnZXQpIHtcbiAgICAgIHZhciBmbiA9IGtleXBhdGguZ2V0KGhhbmRsZXJzLCBbdGFyZ2V0Ll9fZW50aXR5X18sIHRhcmdldC5fX3BhdGhfXywgZXZlbnRUeXBlXSlcbiAgICAgIGlmIChmbikge1xuICAgICAgICBldmVudC5kZWxlZ2F0ZVRhcmdldCA9IHRhcmdldFxuICAgICAgICBpZiAoZm4oZXZlbnQpID09PSBmYWxzZSkgYnJlYWtcbiAgICAgIH1cbiAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZXZlbnRzIGZvciBhbiBlbGVtZW50LCBhbmQgYWxsIGl0J3MgcmVuZGVyZWQgY2hpbGQgZWxlbWVudHMuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgKi9cblxuICBmdW5jdGlvbiBhZGRFdmVudCAoZW50aXR5SWQsIHBhdGgsIGV2ZW50VHlwZSwgZm4pIHtcbiAgICBrZXlwYXRoLnNldChoYW5kbGVycywgW2VudGl0eUlkLCBwYXRoLCBldmVudFR5cGVdLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXVxuICAgICAgaWYgKGVudGl0eSkge1xuICAgICAgICByZXR1cm4gZm4oZSwgZW50aXR5LmNvbnRleHQsIHNldFN0YXRlKGVudGl0eSkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZm4oZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBldmVudHMgZm9yIGEgZW50aXR5SWRcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVudGl0eUlkXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUV2ZW50IChlbnRpdHlJZCwgcGF0aCwgZXZlbnRUeXBlKSB7XG4gICAgdmFyIGFyZ3MgPSBbZW50aXR5SWRdXG4gICAgaWYgKHBhdGgpIGFyZ3MucHVzaChwYXRoKVxuICAgIGlmIChldmVudFR5cGUpIGFyZ3MucHVzaChldmVudFR5cGUpXG4gICAga2V5cGF0aC5kZWwoaGFuZGxlcnMsIGFyZ3MpXG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGFsbCBldmVudHMgZnJvbSBhbiBlbnRpdHlcbiAgICpcbiAgICogQHBhcmFtIHtFbnRpdHl9IGVudGl0eVxuICAgKi9cblxuICBmdW5jdGlvbiByZW1vdmVBbGxFdmVudHMgKGVudGl0eUlkKSB7XG4gICAga2V5cGF0aC5kZWwoaGFuZGxlcnMsIFtlbnRpdHlJZF0pXG4gIH1cblxuICAvKipcbiAgICogVXNlZCBmb3IgZGVidWdnaW5nIHRvIGluc3BlY3QgdGhlIGN1cnJlbnQgc3RhdGUgd2l0aG91dFxuICAgKiB1cyBuZWVkaW5nIHRvIGV4cGxpY2l0bHkgbWFuYWdlIHN0b3JpbmcvdXBkYXRpbmcgcmVmZXJlbmNlcy5cbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cblxuICBmdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZW50aXRpZXM6IGVudGl0aWVzLFxuICAgICAgaGFuZGxlcnM6IGhhbmRsZXJzLFxuICAgICAgY29ubmVjdGlvbnM6IGNvbm5lY3Rpb25zLFxuICAgICAgY3VycmVudEVsZW1lbnQ6IGN1cnJlbnRFbGVtZW50LFxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgIGFwcDogYXBwLFxuICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIG9iamVjdCB0aGF0IGxldHMgdXMgY29tcGxldGVseSByZW1vdmUgdGhlIGF1dG9tYXRpY1xuICAgKiBET00gcmVuZGVyaW5nIGFuZCBleHBvcnQgZGVidWdnaW5nIHRvb2xzLlxuICAgKi9cblxuICByZXR1cm4ge1xuICAgIHJlbW92ZTogdGVhcmRvd24sXG4gICAgaW5zcGVjdDogaW5zcGVjdFxuICB9XG59XG5cbi8qKlxuICogQSByZW5kZXJlZCBjb21wb25lbnQgaW5zdGFuY2UuXG4gKlxuICogVGhpcyBtYW5hZ2VzIHRoZSBsaWZlY3ljbGUsIHByb3BzIGFuZCBzdGF0ZSBvZiB0aGUgY29tcG9uZW50LlxuICogSXQncyBiYXNpY2FsbHkganVzdCBhIGRhdGEgb2JqZWN0IGZvciBtb3JlIHN0cmFpZ2h0Zm93YXJkIGxvb2t1cC5cbiAqXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50XG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAqL1xuXG5mdW5jdGlvbiBFbnRpdHkgKGNvbXBvbmVudCwgcHJvcHMsIG93bmVySWQpIHtcbiAgdGhpcy5pZCA9IHVpZCgpXG4gIHRoaXMub3duZXJJZCA9IG93bmVySWRcbiAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnRcbiAgdGhpcy5wcm9wVHlwZXMgPSBjb21wb25lbnQucHJvcFR5cGVzIHx8IHt9XG4gIHRoaXMuY29udGV4dCA9IHt9XG4gIHRoaXMuY29udGV4dC5pZCA9IHRoaXMuaWRcbiAgdGhpcy5jb250ZXh0LnByb3BzID0gZGVmYXVsdHMocHJvcHMgfHwge30sIGNvbXBvbmVudC5kZWZhdWx0UHJvcHMgfHwge30pXG4gIHRoaXMuY29udGV4dC5zdGF0ZSA9IHRoaXMuY29tcG9uZW50LmluaXRpYWxTdGF0ZSA/IHRoaXMuY29tcG9uZW50LmluaXRpYWxTdGF0ZSh0aGlzLmNvbnRleHQucHJvcHMpIDoge31cbiAgdGhpcy5wZW5kaW5nUHJvcHMgPSBhc3NpZ24oe30sIHRoaXMuY29udGV4dC5wcm9wcylcbiAgdGhpcy5wZW5kaW5nU3RhdGUgPSBhc3NpZ24oe30sIHRoaXMuY29udGV4dC5zdGF0ZSlcbiAgdGhpcy5kaXJ0eSA9IGZhbHNlXG4gIHRoaXMudmlydHVhbEVsZW1lbnQgPSBudWxsXG4gIHRoaXMubmF0aXZlRWxlbWVudCA9IG51bGxcbiAgdGhpcy5kaXNwbGF5TmFtZSA9IGNvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnXG59XG5cbi8qKlxuICogUmV0cmlldmUgdGhlIG5lYXJlc3QgJ2JvZHknIGFuY2VzdG9yIG9mIHRoZSBnaXZlbiBlbGVtZW50IG9yIGVsc2UgdGhlIHJvb3RcbiAqIGVsZW1lbnQgb2YgdGhlIGRvY3VtZW50IGluIHdoaWNoIHN0YW5kcyB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBpZiB5b3Ugd2FudCB0byBhdHRhY2ggdGhlIGV2ZW50cyBoYW5kbGVyIHRvIHRoZSBjb3JyZWN0XG4gKiBlbGVtZW50IGFuZCBiZSBhYmxlIHRvIGRpc3BhdGNoIGV2ZW50cyBpbiBkb2N1bWVudCBmcmFnbWVudHMgc3VjaCBhc1xuICogU2hhZG93IERPTS5cbiAqXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWwgVGhlIGVsZW1lbnQgb24gd2hpY2ggd2Ugd2lsbCByZW5kZXIgYW4gYXBwLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9ICAgIFRoZSByb290IGVsZW1lbnQgb24gd2hpY2ggd2Ugd2lsbCBhdHRhY2ggdGhlIGV2ZW50c1xuICogICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIuXG4gKi9cblxuZnVuY3Rpb24gZ2V0Um9vdEVsZW1lbnQgKGVsKSB7XG4gIHdoaWxlIChlbC5wYXJlbnRFbGVtZW50KSB7XG4gICAgaWYgKGVsLnRhZ05hbWUgPT09ICdCT0RZJyB8fCAhZWwucGFyZW50RWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsXG4gICAgfVxuICAgIGVsID0gZWwucGFyZW50RWxlbWVudFxuICB9XG4gIHJldHVybiBlbFxufVxuXG4vKipcbiAqIFNldCB0aGUgdmFsdWUgcHJvcGVydHkgb2YgYW4gZWxlbWVudCBhbmQga2VlcCB0aGUgdGV4dCBzZWxlY3Rpb25cbiAqIGZvciBpbnB1dCBmaWVsZHMuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICovXG5cbmZ1bmN0aW9uIHNldEVsZW1lbnRWYWx1ZSAoZWwsIHZhbHVlKSB7XG4gIGlmIChlbCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBjYW5TZWxlY3RUZXh0KGVsKSkge1xuICAgIHZhciBzdGFydCA9IGVsLnNlbGVjdGlvblN0YXJ0XG4gICAgdmFyIGVuZCA9IGVsLnNlbGVjdGlvbkVuZFxuICAgIGVsLnZhbHVlID0gdmFsdWVcbiAgICBlbC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgZW5kKVxuICB9IGVsc2Uge1xuICAgIGVsLnZhbHVlID0gdmFsdWVcbiAgfVxufVxuXG4vKipcbiAqIEZvciBzb21lIHJlYXNvbiBvbmx5IGNlcnRhaW4gdHlwZXMgb2YgaW5wdXRzIGNhbiBzZXQgdGhlIHNlbGVjdGlvbiByYW5nZS5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gY2FuU2VsZWN0VGV4dCAoZWwpIHtcbiAgcmV0dXJuIGVsLnRhZ05hbWUgPT09ICdJTlBVVCcgJiYgWyd0ZXh0JywgJ3NlYXJjaCcsICdwYXNzd29yZCcsICd0ZWwnLCAndXJsJ10uaW5kZXhPZihlbC50eXBlKSA+IC0xXG59XG4iLCJ2YXIgZGVmYXVsdHMgPSByZXF1aXJlKCdvYmplY3QtZGVmYXVsdHMnKVxudmFyIG5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKVxudmFyIHR5cGUgPSByZXF1aXJlKCdjb21wb25lbnQtdHlwZScpXG5cbi8qKlxuICogRXhwb3NlIGBzdHJpbmdpZnlgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFwcCkge1xuICBpZiAoIWFwcC5lbGVtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBlbGVtZW50IG1vdW50ZWQnKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciB0byBzdHJpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtwcm9wc11cbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cblxuICBmdW5jdGlvbiBzdHJpbmdpZnkgKGNvbXBvbmVudCwgb3B0UHJvcHMsIGNoaWxkcmVuKSB7XG4gICAgdmFyIHByb3BUeXBlcyA9IGNvbXBvbmVudC5wcm9wVHlwZXMgfHwge31cbiAgICB2YXIgcHJvcHMgPSBkZWZhdWx0cyhvcHRQcm9wcyB8fCB7fSwgY29tcG9uZW50LmRlZmF1bHRQcm9wcyB8fCB7fSlcbiAgICB2YXIgc3RhdGUgPSBjb21wb25lbnQuaW5pdGlhbFN0YXRlID8gY29tcG9uZW50LmluaXRpYWxTdGF0ZShwcm9wcykgOiB7fVxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW5cblxuICAgIGZvciAodmFyIG5hbWUgaW4gcHJvcFR5cGVzKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHByb3BUeXBlc1tuYW1lXVxuICAgICAgaWYgKG9wdGlvbnMuc291cmNlKSB7XG4gICAgICAgIHByb3BzW25hbWVdID0gYXBwLnNvdXJjZXNbb3B0aW9ucy5zb3VyY2VdXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbXBvbmVudC5iZWZvcmVNb3VudCkgY29tcG9uZW50LmJlZm9yZU1vdW50KHsgcHJvcHM6IHByb3BzLCBzdGF0ZTogc3RhdGUgfSlcbiAgICBpZiAoY29tcG9uZW50LmJlZm9yZVJlbmRlcikgY29tcG9uZW50LmJlZm9yZVJlbmRlcih7IHByb3BzOiBwcm9wcywgc3RhdGU6IHN0YXRlIH0pXG4gICAgdmFyIG5vZGUgPSBjb21wb25lbnQucmVuZGVyKHsgcHJvcHM6IHByb3BzLCBzdGF0ZTogc3RhdGUgfSlcbiAgICByZXR1cm4gc3RyaW5naWZ5Tm9kZShub2RlLCAnMCcpXG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIGEgbm9kZSB0byBhIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtUcmVlfSB0cmVlXG4gICAqXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG5cbiAgZnVuY3Rpb24gc3RyaW5naWZ5Tm9kZSAobm9kZSwgcGF0aCkge1xuICAgIHN3aXRjaCAobm9kZVR5cGUobm9kZSkpIHtcbiAgICAgIGNhc2UgJ2VtcHR5JzogcmV0dXJuICc8bm9zY3JpcHQgLz4nXG4gICAgICBjYXNlICd0ZXh0JzogcmV0dXJuIG5vZGVcbiAgICAgIGNhc2UgJ2VsZW1lbnQnOlxuICAgICAgICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuXG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gbm9kZS5hdHRyaWJ1dGVzXG4gICAgICAgIHZhciB0YWdOYW1lID0gbm9kZS50eXBlXG4gICAgICAgIHZhciBpbm5lckhUTUwgPSBhdHRyaWJ1dGVzLmlubmVySFRNTFxuICAgICAgICB2YXIgc3RyID0gJzwnICsgdGFnTmFtZSArIGF0dHJzKGF0dHJpYnV0ZXMpICsgJz4nXG5cbiAgICAgICAgaWYgKGlubmVySFRNTCkge1xuICAgICAgICAgIHN0ciArPSBpbm5lckhUTUxcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgc3RyICs9IHN0cmluZ2lmeU5vZGUoY2hpbGRyZW5baV0sIHBhdGggKyAnLicgKyBpKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN0ciArPSAnPC8nICsgdGFnTmFtZSArICc+J1xuICAgICAgICByZXR1cm4gc3RyXG4gICAgICBjYXNlICdjb21wb25lbnQnOiByZXR1cm4gc3RyaW5naWZ5KG5vZGUudHlwZSwgbm9kZS5hdHRyaWJ1dGVzLCBub2RlLmNoaWxkcmVuKVxuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB0eXBlJylcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnlOb2RlKGFwcC5lbGVtZW50LCAnMCcpXG59XG5cbi8qKlxuICogSFRNTCBhdHRyaWJ1dGVzIHRvIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gYXR0cnMgKGF0dHJpYnV0ZXMpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgdmFyIHZhbHVlID0gYXR0cmlidXRlc1trZXldXG4gICAgaWYgKGtleSA9PT0gJ2lubmVySFRNTCcpIGNvbnRpbnVlXG4gICAgaWYgKGlzVmFsaWRBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSkpIHN0ciArPSBhdHRyKGtleSwgYXR0cmlidXRlc1trZXldKVxuICB9XG4gIHJldHVybiBzdHJcbn1cblxuLyoqXG4gKiBIVE1MIGF0dHJpYnV0ZSB0byBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gYXR0ciAoa2V5LCB2YWwpIHtcbiAgcmV0dXJuICcgJyArIGtleSArICc9XCInICsgdmFsICsgJ1wiJ1xufVxuXG4vKipcbiAqIElzIGEgdmFsdWUgYWJsZSB0byBiZSBzZXQgYSBhbiBhdHRyaWJ1dGUgdmFsdWU/XG4gKlxuICogQHBhcmFtIHtBbnl9IHZhbHVlXG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkQXR0cmlidXRlVmFsdWUgKHZhbHVlKSB7XG4gIHZhciB2YWx1ZVR5cGUgPSB0eXBlKHZhbHVlKVxuICBzd2l0Y2ggKHZhbHVlVHlwZSkge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJldHVybiB0cnVlXG5cbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHJldHVybiB2YWx1ZVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNFbGVtZW50OiByZXF1aXJlKCdpcy1zdmctZWxlbWVudCcpLmlzRWxlbWVudCxcbiAgaXNBdHRyaWJ1dGU6IHJlcXVpcmUoJ2lzLXN2Zy1hdHRyaWJ1dGUnKSxcbiAgbmFtZXNwYWNlOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG59XG4iLCIvKipcbiAqIHRvU3RyaW5nIHJlZi5cbiAqL1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFJldHVybiB0aGUgdHlwZSBvZiBgdmFsYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwpe1xuICBzd2l0Y2ggKHRvU3RyaW5nLmNhbGwodmFsKSkge1xuICAgIGNhc2UgJ1tvYmplY3QgRGF0ZV0nOiByZXR1cm4gJ2RhdGUnO1xuICAgIGNhc2UgJ1tvYmplY3QgUmVnRXhwXSc6IHJldHVybiAncmVnZXhwJztcbiAgICBjYXNlICdbb2JqZWN0IEFyZ3VtZW50c10nOiByZXR1cm4gJ2FyZ3VtZW50cyc7XG4gICAgY2FzZSAnW29iamVjdCBBcnJheV0nOiByZXR1cm4gJ2FycmF5JztcbiAgICBjYXNlICdbb2JqZWN0IEVycm9yXSc6IHJldHVybiAnZXJyb3InO1xuICB9XG5cbiAgaWYgKHZhbCA9PT0gbnVsbCkgcmV0dXJuICdudWxsJztcbiAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIGlmICh2YWwgIT09IHZhbCkgcmV0dXJuICduYW4nO1xuICBpZiAodmFsICYmIHZhbC5ub2RlVHlwZSA9PT0gMSkgcmV0dXJuICdlbGVtZW50JztcblxuICBpZiAodHlwZW9mIEJ1ZmZlciAhPSAndW5kZWZpbmVkJyAmJiBCdWZmZXIuaXNCdWZmZXIodmFsKSkgcmV0dXJuICdidWZmZXInO1xuXG4gIHZhbCA9IHZhbC52YWx1ZU9mXG4gICAgPyB2YWwudmFsdWVPZigpXG4gICAgOiBPYmplY3QucHJvdG90eXBlLnZhbHVlT2YuYXBwbHkodmFsKVxuXG4gIHJldHVybiB0eXBlb2YgdmFsO1xufTtcbiIsIi8qIVxuICogY2xhc3NpZSB2MS4wLjFcbiAqIGNsYXNzIGhlbHBlciBmdW5jdGlvbnNcbiAqIGZyb20gYm9uem8gaHR0cHM6Ly9naXRodWIuY29tL2RlZC9ib256b1xuICogTUlUIGxpY2Vuc2VcbiAqIFxuICogY2xhc3NpZS5oYXMoIGVsZW0sICdteS1jbGFzcycgKSAtPiB0cnVlL2ZhbHNlXG4gKiBjbGFzc2llLmFkZCggZWxlbSwgJ215LW5ldy1jbGFzcycgKVxuICogY2xhc3NpZS5yZW1vdmUoIGVsZW0sICdteS11bndhbnRlZC1jbGFzcycgKVxuICogY2xhc3NpZS50b2dnbGUoIGVsZW0sICdteS1jbGFzcycgKVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgdW5kZWY6IHRydWUsIHVudXNlZDogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxuLy8gY2xhc3MgaGVscGVyIGZ1bmN0aW9ucyBmcm9tIGJvbnpvIGh0dHBzOi8vZ2l0aHViLmNvbS9kZWQvYm9uem9cblxuZnVuY3Rpb24gY2xhc3NSZWcoIGNsYXNzTmFtZSApIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoXnxcXFxccyspXCIgKyBjbGFzc05hbWUgKyBcIihcXFxccyt8JClcIik7XG59XG5cbi8vIGNsYXNzTGlzdCBzdXBwb3J0IGZvciBjbGFzcyBtYW5hZ2VtZW50XG4vLyBhbHRobyB0byBiZSBmYWlyLCB0aGUgYXBpIHN1Y2tzIGJlY2F1c2UgaXQgd29uJ3QgYWNjZXB0IG11bHRpcGxlIGNsYXNzZXMgYXQgb25jZVxudmFyIGhhc0NsYXNzLCBhZGRDbGFzcywgcmVtb3ZlQ2xhc3M7XG5cbmlmICggJ2NsYXNzTGlzdCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICkge1xuICBoYXNDbGFzcyA9IGZ1bmN0aW9uKCBlbGVtLCBjICkge1xuICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyggYyApO1xuICB9O1xuICBhZGRDbGFzcyA9IGZ1bmN0aW9uKCBlbGVtLCBjICkge1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZCggYyApO1xuICB9O1xuICByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKCBlbGVtLCBjICkge1xuICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSggYyApO1xuICB9O1xufVxuZWxzZSB7XG4gIGhhc0NsYXNzID0gZnVuY3Rpb24oIGVsZW0sIGMgKSB7XG4gICAgcmV0dXJuIGNsYXNzUmVnKCBjICkudGVzdCggZWxlbS5jbGFzc05hbWUgKTtcbiAgfTtcbiAgYWRkQ2xhc3MgPSBmdW5jdGlvbiggZWxlbSwgYyApIHtcbiAgICBpZiAoICFoYXNDbGFzcyggZWxlbSwgYyApICkge1xuICAgICAgZWxlbS5jbGFzc05hbWUgPSBlbGVtLmNsYXNzTmFtZSArICcgJyArIGM7XG4gICAgfVxuICB9O1xuICByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKCBlbGVtLCBjICkge1xuICAgIGVsZW0uY2xhc3NOYW1lID0gZWxlbS5jbGFzc05hbWUucmVwbGFjZSggY2xhc3NSZWcoIGMgKSwgJyAnICk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKCBlbGVtLCBjICkge1xuICB2YXIgZm4gPSBoYXNDbGFzcyggZWxlbSwgYyApID8gcmVtb3ZlQ2xhc3MgOiBhZGRDbGFzcztcbiAgZm4oIGVsZW0sIGMgKTtcbn1cblxudmFyIGNsYXNzaWUgPSB7XG4gIC8vIGZ1bGwgbmFtZXNcbiAgaGFzQ2xhc3M6IGhhc0NsYXNzLFxuICBhZGRDbGFzczogYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzOiByZW1vdmVDbGFzcyxcbiAgdG9nZ2xlQ2xhc3M6IHRvZ2dsZUNsYXNzLFxuICAvLyBzaG9ydCBuYW1lc1xuICBoYXM6IGhhc0NsYXNzLFxuICBhZGQ6IGFkZENsYXNzLFxuICByZW1vdmU6IHJlbW92ZUNsYXNzLFxuICB0b2dnbGU6IHRvZ2dsZUNsYXNzXG59O1xuXG4vLyB0cmFuc3BvcnRcbmlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAvLyBBTURcbiAgZGVmaW5lKCBjbGFzc2llICk7XG59IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG4gIC8vIENvbW1vbkpTXG4gIG1vZHVsZS5leHBvcnRzID0gY2xhc3NpZTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5jbGFzc2llID0gY2xhc3NpZTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiLyohXG4gKiBnZXRTdHlsZVByb3BlcnR5IHYxLjAuNFxuICogb3JpZ2luYWwgYnkga2FuZ2F4XG4gKiBodHRwOi8vcGVyZmVjdGlvbmtpbGxzLmNvbS9mZWF0dXJlLXRlc3RpbmctY3NzLXByb3BlcnRpZXMvXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgdW5kZWY6IHRydWUgKi9cbi8qZ2xvYmFsIGRlZmluZTogZmFsc2UsIGV4cG9ydHM6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdyApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJlZml4ZXMgPSAnV2Via2l0IE1veiBtcyBNcyBPJy5zcGxpdCgnICcpO1xudmFyIGRvY0VsZW1TdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVQcm9wZXJ0eSggcHJvcE5hbWUgKSB7XG4gIGlmICggIXByb3BOYW1lICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHRlc3Qgc3RhbmRhcmQgcHJvcGVydHkgZmlyc3RcbiAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcm9wTmFtZSBdID09PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gcHJvcE5hbWU7XG4gIH1cblxuICAvLyBjYXBpdGFsaXplXG4gIHByb3BOYW1lID0gcHJvcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zbGljZSgxKTtcblxuICAvLyB0ZXN0IHZlbmRvciBzcGVjaWZpYyBwcm9wZXJ0aWVzXG4gIHZhciBwcmVmaXhlZDtcbiAgZm9yICggdmFyIGk9MCwgbGVuID0gcHJlZml4ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgcHJlZml4ZWQgPSBwcmVmaXhlc1tpXSArIHByb3BOYW1lO1xuICAgIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJlZml4ZWQgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgICByZXR1cm4gcHJlZml4ZWQ7XG4gICAgfVxuICB9XG59XG5cbi8vIHRyYW5zcG9ydFxuaWYgKCB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gIC8vIEFNRFxuICBkZWZpbmUoIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBnZXRTdHlsZVByb3BlcnR5O1xuICB9KTtcbn0gZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyApIHtcbiAgLy8gQ29tbW9uSlMgZm9yIENvbXBvbmVudFxuICBtb2R1bGUuZXhwb3J0cyA9IGdldFN0eWxlUHJvcGVydHk7XG59IGVsc2Uge1xuICAvLyBicm93c2VyIGdsb2JhbFxuICB3aW5kb3cuZ2V0U3R5bGVQcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHk7XG59XG5cbn0pKCB3aW5kb3cgKTtcbiIsIi8qKlxuICogbWF0Y2hlc1NlbGVjdG9yIHYxLjAuM1xuICogbWF0Y2hlc1NlbGVjdG9yKCBlbGVtZW50LCAnLnNlbGVjdG9yJyApXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgdW5kZWY6IHRydWUsIHVudXNlZDogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCBFbGVtUHJvdG8gKSB7XG5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBtYXRjaGVzTWV0aG9kID0gKCBmdW5jdGlvbigpIHtcbiAgICAvLyBjaGVjayBmb3IgdGhlIHN0YW5kYXJkIG1ldGhvZCBuYW1lIGZpcnN0XG4gICAgaWYgKCBFbGVtUHJvdG8ubWF0Y2hlcyApIHtcbiAgICAgIHJldHVybiAnbWF0Y2hlcyc7XG4gICAgfVxuICAgIC8vIGNoZWNrIHVuLXByZWZpeGVkXG4gICAgaWYgKCBFbGVtUHJvdG8ubWF0Y2hlc1NlbGVjdG9yICkge1xuICAgICAgcmV0dXJuICdtYXRjaGVzU2VsZWN0b3InO1xuICAgIH1cbiAgICAvLyBjaGVjayB2ZW5kb3IgcHJlZml4ZXNcbiAgICB2YXIgcHJlZml4ZXMgPSBbICd3ZWJraXQnLCAnbW96JywgJ21zJywgJ28nIF07XG5cbiAgICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICAgIHZhciBtZXRob2QgPSBwcmVmaXggKyAnTWF0Y2hlc1NlbGVjdG9yJztcbiAgICAgIGlmICggRWxlbVByb3RvWyBtZXRob2QgXSApIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZDtcbiAgICAgIH1cbiAgICB9XG4gIH0pKCk7XG5cbiAgLy8gLS0tLS0gbWF0Y2ggLS0tLS0gLy9cblxuICBmdW5jdGlvbiBtYXRjaCggZWxlbSwgc2VsZWN0b3IgKSB7XG4gICAgcmV0dXJuIGVsZW1bIG1hdGNoZXNNZXRob2QgXSggc2VsZWN0b3IgKTtcbiAgfVxuXG4gIC8vIC0tLS0tIGFwcGVuZFRvRnJhZ21lbnQgLS0tLS0gLy9cblxuICBmdW5jdGlvbiBjaGVja1BhcmVudCggZWxlbSApIHtcbiAgICAvLyBub3QgbmVlZGVkIGlmIGFscmVhZHkgaGFzIHBhcmVudFxuICAgIGlmICggZWxlbS5wYXJlbnROb2RlICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoIGVsZW0gKTtcbiAgfVxuXG4gIC8vIC0tLS0tIHF1ZXJ5IC0tLS0tIC8vXG5cbiAgLy8gZmFsbCBiYWNrIHRvIHVzaW5nIFFTQVxuICAvLyB0aHggQGpvbmF0aGFudG5lYWwgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vMzA2Mjk1NVxuICBmdW5jdGlvbiBxdWVyeSggZWxlbSwgc2VsZWN0b3IgKSB7XG4gICAgLy8gYXBwZW5kIHRvIGZyYWdtZW50IGlmIG5vIHBhcmVudFxuICAgIGNoZWNrUGFyZW50KCBlbGVtICk7XG5cbiAgICAvLyBtYXRjaCBlbGVtIHdpdGggYWxsIHNlbGVjdGVkIGVsZW1zIG9mIHBhcmVudFxuICAgIHZhciBlbGVtcyA9IGVsZW0ucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApO1xuICAgIGZvciAoIHZhciBpPTAsIGxlbiA9IGVsZW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgLy8gcmV0dXJuIHRydWUgaWYgbWF0Y2hcbiAgICAgIGlmICggZWxlbXNbaV0gPT09IGVsZW0gKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBvdGhlcndpc2UgcmV0dXJuIGZhbHNlXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gLS0tLS0gbWF0Y2hDaGlsZCAtLS0tLSAvL1xuXG4gIGZ1bmN0aW9uIG1hdGNoQ2hpbGQoIGVsZW0sIHNlbGVjdG9yICkge1xuICAgIGNoZWNrUGFyZW50KCBlbGVtICk7XG4gICAgcmV0dXJuIG1hdGNoKCBlbGVtLCBzZWxlY3RvciApO1xuICB9XG5cbiAgLy8gLS0tLS0gbWF0Y2hlc1NlbGVjdG9yIC0tLS0tIC8vXG5cbiAgdmFyIG1hdGNoZXNTZWxlY3RvcjtcblxuICBpZiAoIG1hdGNoZXNNZXRob2QgKSB7XG4gICAgLy8gSUU5IHN1cHBvcnRzIG1hdGNoZXNTZWxlY3RvciwgYnV0IGRvZXNuJ3Qgd29yayBvbiBvcnBoYW5lZCBlbGVtc1xuICAgIC8vIGNoZWNrIGZvciB0aGF0XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZhciBzdXBwb3J0c09ycGhhbnMgPSBtYXRjaCggZGl2LCAnZGl2JyApO1xuICAgIG1hdGNoZXNTZWxlY3RvciA9IHN1cHBvcnRzT3JwaGFucyA/IG1hdGNoIDogbWF0Y2hDaGlsZDtcbiAgfSBlbHNlIHtcbiAgICBtYXRjaGVzU2VsZWN0b3IgPSBxdWVyeTtcbiAgfVxuXG4gIC8vIHRyYW5zcG9ydFxuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG1hdGNoZXNTZWxlY3RvcjtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gbWF0Y2hlc1NlbGVjdG9yO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93Lm1hdGNoZXNTZWxlY3RvciA9IG1hdGNoZXNTZWxlY3RvcjtcbiAgfVxuXG59KSggRWxlbWVudC5wcm90b3R5cGUgKTtcbiIsIi8qIVxuICogZG9jUmVhZHkgdjEuMC4zXG4gKiBDcm9zcyBicm93c2VyIERPTUNvbnRlbnRMb2FkZWQgZXZlbnQgZW1pdHRlclxuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHRydWUqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbi8vIGNvbGxlY3Rpb24gb2YgZnVuY3Rpb25zIHRvIGJlIHRyaWdnZXJlZCBvbiByZWFkeVxudmFyIHF1ZXVlID0gW107XG5cbmZ1bmN0aW9uIGRvY1JlYWR5KCBmbiApIHtcbiAgLy8gdGhyb3cgb3V0IG5vbi1mdW5jdGlvbnNcbiAgaWYgKCB0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCBkb2NSZWFkeS5pc1JlYWR5ICkge1xuICAgIC8vIHJlYWR5IG5vdywgaGl0IGl0XG4gICAgZm4oKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBxdWV1ZSBmdW5jdGlvbiB3aGVuIHJlYWR5XG4gICAgcXVldWUucHVzaCggZm4gKTtcbiAgfVxufVxuXG5kb2NSZWFkeS5pc1JlYWR5ID0gZmFsc2U7XG5cbi8vIHRyaWdnZXJlZCBvbiB2YXJpb3VzIGRvYyByZWFkeSBldmVudHNcbmZ1bmN0aW9uIGluaXQoIGV2ZW50ICkge1xuICAvLyBiYWlsIGlmIElFOCBkb2N1bWVudCBpcyBub3QgcmVhZHkganVzdCB5ZXRcbiAgdmFyIGlzSUU4Tm90UmVhZHkgPSBldmVudC50eXBlID09PSAncmVhZHlzdGF0ZWNoYW5nZScgJiYgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJztcbiAgaWYgKCBkb2NSZWFkeS5pc1JlYWR5IHx8IGlzSUU4Tm90UmVhZHkgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGRvY1JlYWR5LmlzUmVhZHkgPSB0cnVlO1xuXG4gIC8vIHByb2Nlc3MgcXVldWVcbiAgZm9yICggdmFyIGk9MCwgbGVuID0gcXVldWUubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaV07XG4gICAgZm4oKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVEb2NSZWFkeSggZXZlbnRpZSApIHtcbiAgZXZlbnRpZS5iaW5kKCBkb2N1bWVudCwgJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0ICk7XG4gIGV2ZW50aWUuYmluZCggZG9jdW1lbnQsICdyZWFkeXN0YXRlY2hhbmdlJywgaW5pdCApO1xuICBldmVudGllLmJpbmQoIHdpbmRvdywgJ2xvYWQnLCBpbml0ICk7XG5cbiAgcmV0dXJuIGRvY1JlYWR5O1xufVxuXG4vLyB0cmFuc3BvcnRcbmlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAvLyBBTURcbiAgLy8gaWYgUmVxdWlyZUpTLCB0aGVuIGRvYyBpcyBhbHJlYWR5IHJlYWR5XG4gIGRvY1JlYWR5LmlzUmVhZHkgPSB0eXBlb2YgcmVxdWlyZWpzID09PSAnZnVuY3Rpb24nO1xuICBkZWZpbmUoIFsgJ2V2ZW50aWUvZXZlbnRpZScgXSwgZGVmaW5lRG9jUmVhZHkgKTtcbn0gZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVEb2NSZWFkeSggcmVxdWlyZSgnZXZlbnRpZScpICk7XG59IGVsc2Uge1xuICAvLyBicm93c2VyIGdsb2JhbFxuICB3aW5kb3cuZG9jUmVhZHkgPSBkZWZpbmVEb2NSZWFkeSggd2luZG93LmV2ZW50aWUgKTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiLyohXG4gKiBldmVudGllIHYxLjAuNlxuICogZXZlbnQgYmluZGluZyBoZWxwZXJcbiAqICAgZXZlbnRpZS5iaW5kKCBlbGVtLCAnY2xpY2snLCBteUZuIClcbiAqICAgZXZlbnRpZS51bmJpbmQoIGVsZW0sICdjbGljaycsIG15Rm4gKVxuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCB1bmRlZjogdHJ1ZSwgdW51c2VkOiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdyApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxudmFyIGJpbmQgPSBmdW5jdGlvbigpIHt9O1xuXG5mdW5jdGlvbiBnZXRJRUV2ZW50KCBvYmogKSB7XG4gIHZhciBldmVudCA9IHdpbmRvdy5ldmVudDtcbiAgLy8gYWRkIGV2ZW50LnRhcmdldFxuICBldmVudC50YXJnZXQgPSBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudCB8fCBvYmo7XG4gIHJldHVybiBldmVudDtcbn1cblxuaWYgKCBkb2NFbGVtLmFkZEV2ZW50TGlzdGVuZXIgKSB7XG4gIGJpbmQgPSBmdW5jdGlvbiggb2JqLCB0eXBlLCBmbiApIHtcbiAgICBvYmouYWRkRXZlbnRMaXN0ZW5lciggdHlwZSwgZm4sIGZhbHNlICk7XG4gIH07XG59IGVsc2UgaWYgKCBkb2NFbGVtLmF0dGFjaEV2ZW50ICkge1xuICBiaW5kID0gZnVuY3Rpb24oIG9iaiwgdHlwZSwgZm4gKSB7XG4gICAgb2JqWyB0eXBlICsgZm4gXSA9IGZuLmhhbmRsZUV2ZW50ID9cbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZXZlbnQgPSBnZXRJRUV2ZW50KCBvYmogKTtcbiAgICAgICAgZm4uaGFuZGxlRXZlbnQuY2FsbCggZm4sIGV2ZW50ICk7XG4gICAgICB9IDpcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZXZlbnQgPSBnZXRJRUV2ZW50KCBvYmogKTtcbiAgICAgICAgZm4uY2FsbCggb2JqLCBldmVudCApO1xuICAgICAgfTtcbiAgICBvYmouYXR0YWNoRXZlbnQoIFwib25cIiArIHR5cGUsIG9ialsgdHlwZSArIGZuIF0gKTtcbiAgfTtcbn1cblxudmFyIHVuYmluZCA9IGZ1bmN0aW9uKCkge307XG5cbmlmICggZG9jRWxlbS5yZW1vdmVFdmVudExpc3RlbmVyICkge1xuICB1bmJpbmQgPSBmdW5jdGlvbiggb2JqLCB0eXBlLCBmbiApIHtcbiAgICBvYmoucmVtb3ZlRXZlbnRMaXN0ZW5lciggdHlwZSwgZm4sIGZhbHNlICk7XG4gIH07XG59IGVsc2UgaWYgKCBkb2NFbGVtLmRldGFjaEV2ZW50ICkge1xuICB1bmJpbmQgPSBmdW5jdGlvbiggb2JqLCB0eXBlLCBmbiApIHtcbiAgICBvYmouZGV0YWNoRXZlbnQoIFwib25cIiArIHR5cGUsIG9ialsgdHlwZSArIGZuIF0gKTtcbiAgICB0cnkge1xuICAgICAgZGVsZXRlIG9ialsgdHlwZSArIGZuIF07XG4gICAgfSBjYXRjaCAoIGVyciApIHtcbiAgICAgIC8vIGNhbid0IGRlbGV0ZSB3aW5kb3cgb2JqZWN0IHByb3BlcnRpZXNcbiAgICAgIG9ialsgdHlwZSArIGZuIF0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9O1xufVxuXG52YXIgZXZlbnRpZSA9IHtcbiAgYmluZDogYmluZCxcbiAgdW5iaW5kOiB1bmJpbmRcbn07XG5cbi8vIC0tLS0tIG1vZHVsZSBkZWZpbml0aW9uIC0tLS0tIC8vXG5cbmlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAvLyBBTURcbiAgZGVmaW5lKCBldmVudGllICk7XG59IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG4gIC8vIENvbW1vbkpTXG4gIG1vZHVsZS5leHBvcnRzID0gZXZlbnRpZTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5ldmVudGllID0gZXZlbnRpZTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZEludGVybmFsMyA9IHJlcXVpcmUoJy4uL2Z1bmN0aW9uL2JpbmRJbnRlcm5hbDMnKTtcblxuLyoqXG4gKiAjIEZvciBFYWNoXG4gKlxuICogQSBmYXN0IGAuZm9yRWFjaCgpYCBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gICAgc3ViamVjdCAgICAgVGhlIGFycmF5IChvciBhcnJheS1saWtlKSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gICAgICAgICAgVGhlIHZpc2l0b3IgZnVuY3Rpb24uXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgdGhpc0NvbnRleHQgVGhlIGNvbnRleHQgZm9yIHRoZSB2aXNpdG9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZhc3RGb3JFYWNoIChzdWJqZWN0LCBmbiwgdGhpc0NvbnRleHQpIHtcbiAgdmFyIGxlbmd0aCA9IHN1YmplY3QubGVuZ3RoLFxuICAgICAgaXRlcmF0b3IgPSB0aGlzQ29udGV4dCAhPT0gdW5kZWZpbmVkID8gYmluZEludGVybmFsMyhmbiwgdGhpc0NvbnRleHQpIDogZm4sXG4gICAgICBpO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpdGVyYXRvcihzdWJqZWN0W2ldLCBpLCBzdWJqZWN0KTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmRJbnRlcm5hbDQgPSByZXF1aXJlKCcuLi9mdW5jdGlvbi9iaW5kSW50ZXJuYWw0Jyk7XG5cbi8qKlxuICogIyBSZWR1Y2VcbiAqXG4gKiBBIGZhc3QgYC5yZWR1Y2UoKWAgaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHBhcmFtICB7QXJyYXl9ICAgIHN1YmplY3QgICAgICBUaGUgYXJyYXkgKG9yIGFycmF5LWxpa2UpIHRvIHJlZHVjZS5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAgICAgICAgICAgVGhlIHJlZHVjZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0gIHttaXhlZH0gICAgaW5pdGlhbFZhbHVlIFRoZSBpbml0aWFsIHZhbHVlIGZvciB0aGUgcmVkdWNlciwgZGVmYXVsdHMgdG8gc3ViamVjdFswXS5cbiAqIEBwYXJhbSAge09iamVjdH0gICB0aGlzQ29udGV4dCAgVGhlIGNvbnRleHQgZm9yIHRoZSByZWR1Y2VyLlxuICogQHJldHVybiB7bWl4ZWR9ICAgICAgICAgICAgICAgICBUaGUgZmluYWwgcmVzdWx0LlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZhc3RSZWR1Y2UgKHN1YmplY3QsIGZuLCBpbml0aWFsVmFsdWUsIHRoaXNDb250ZXh0KSB7XG4gIHZhciBsZW5ndGggPSBzdWJqZWN0Lmxlbmd0aCxcbiAgICAgIGl0ZXJhdG9yID0gdGhpc0NvbnRleHQgIT09IHVuZGVmaW5lZCA/IGJpbmRJbnRlcm5hbDQoZm4sIHRoaXNDb250ZXh0KSA6IGZuLFxuICAgICAgaSwgcmVzdWx0O1xuXG4gIGlmIChpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIGkgPSAxO1xuICAgIHJlc3VsdCA9IHN1YmplY3RbMF07XG4gIH1cbiAgZWxzZSB7XG4gICAgaSA9IDA7XG4gICAgcmVzdWx0ID0gaW5pdGlhbFZhbHVlO1xuICB9XG5cbiAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdCA9IGl0ZXJhdG9yKHJlc3VsdCwgc3ViamVjdFtpXSwgaSwgc3ViamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGZvckVhY2hBcnJheSA9IHJlcXVpcmUoJy4vYXJyYXkvZm9yRWFjaCcpLFxuICAgIGZvckVhY2hPYmplY3QgPSByZXF1aXJlKCcuL29iamVjdC9mb3JFYWNoJyk7XG5cbi8qKlxuICogIyBGb3JFYWNoXG4gKlxuICogQSBmYXN0IGAuZm9yRWFjaCgpYCBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheXxPYmplY3R9IHN1YmplY3QgICAgIFRoZSBhcnJheSBvciBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtICB7RnVuY3Rpb259ICAgICBmbiAgICAgICAgICBUaGUgdmlzaXRvciBmdW5jdGlvbi5cbiAqIEBwYXJhbSAge09iamVjdH0gICAgICAgdGhpc0NvbnRleHQgVGhlIGNvbnRleHQgZm9yIHRoZSB2aXNpdG9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZhc3RGb3JFYWNoIChzdWJqZWN0LCBmbiwgdGhpc0NvbnRleHQpIHtcbiAgaWYgKHN1YmplY3QgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHJldHVybiBmb3JFYWNoQXJyYXkoc3ViamVjdCwgZm4sIHRoaXNDb250ZXh0KTtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gZm9yRWFjaE9iamVjdChzdWJqZWN0LCBmbiwgdGhpc0NvbnRleHQpO1xuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBJbnRlcm5hbCBoZWxwZXIgdG8gYmluZCBhIGZ1bmN0aW9uIGtub3duIHRvIGhhdmUgMyBhcmd1bWVudHNcbiAqIHRvIGEgZ2l2ZW4gY29udGV4dC5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kSW50ZXJuYWwzIChmdW5jLCB0aGlzQ29udGV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNDb250ZXh0LCBhLCBiLCBjKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogSW50ZXJuYWwgaGVscGVyIHRvIGJpbmQgYSBmdW5jdGlvbiBrbm93biB0byBoYXZlIDQgYXJndW1lbnRzXG4gKiB0byBhIGdpdmVuIGNvbnRleHQuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZEludGVybmFsNCAoZnVuYywgdGhpc0NvbnRleHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQ29udGV4dCwgYSwgYiwgYywgZCk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEFuYWxvZ3VlIG9mIE9iamVjdC5hc3NpZ24oKS5cbiAqIENvcGllcyBwcm9wZXJ0aWVzIGZyb20gb25lIG9yIG1vcmUgc291cmNlIG9iamVjdHMgdG9cbiAqIGEgdGFyZ2V0IG9iamVjdC4gRXhpc3Rpbmcga2V5cyBvbiB0aGUgdGFyZ2V0IG9iamVjdCB3aWxsIGJlIG92ZXJ3cml0dGVuLlxuICpcbiAqID4gTm90ZTogVGhpcyBkaWZmZXJzIGZyb20gc3BlYyBpbiBzb21lIGltcG9ydGFudCB3YXlzOlxuICogPiAxLiBXaWxsIHRocm93IGlmIHBhc3NlZCBub24tb2JqZWN0cywgaW5jbHVkaW5nIGB1bmRlZmluZWRgIG9yIGBudWxsYCB2YWx1ZXMuXG4gKiA+IDIuIERvZXMgbm90IHN1cHBvcnQgdGhlIGN1cmlvdXMgRXhjZXB0aW9uIGhhbmRsaW5nIGJlaGF2aW9yLCBleGNlcHRpb25zIGFyZSB0aHJvd24gaW1tZWRpYXRlbHkuXG4gKiA+IEZvciBtb3JlIGRldGFpbHMsIHNlZTpcbiAqID4gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2Fzc2lnblxuICpcbiAqXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSB0YXJnZXQgICAgICBUaGUgdGFyZ2V0IG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0gIHtPYmplY3R9IHNvdXJjZSwgLi4uIFRoZSBzb3VyY2UocykgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgIFRoZSB1cGRhdGVkIHRhcmdldCBvYmplY3QuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmFzdEFzc2lnbiAodGFyZ2V0KSB7XG4gIHZhciB0b3RhbEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgc291cmNlLCBpLCB0b3RhbEtleXMsIGtleXMsIGtleSwgajtcblxuICBmb3IgKGkgPSAxOyBpIDwgdG90YWxBcmdzOyBpKyspIHtcbiAgICBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAga2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdG90YWxLZXlzID0ga2V5cy5sZW5ndGg7XG4gICAgZm9yIChqID0gMDsgaiA8IHRvdGFsS2V5czsgaisrKSB7XG4gICAgICBrZXkgPSBrZXlzW2pdO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kSW50ZXJuYWwzID0gcmVxdWlyZSgnLi4vZnVuY3Rpb24vYmluZEludGVybmFsMycpO1xuXG4vKipcbiAqICMgRm9yIEVhY2hcbiAqXG4gKiBBIGZhc3Qgb2JqZWN0IGAuZm9yRWFjaCgpYCBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc3ViamVjdCAgICAgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gICAgICAgICAgVGhlIHZpc2l0b3IgZnVuY3Rpb24uXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgdGhpc0NvbnRleHQgVGhlIGNvbnRleHQgZm9yIHRoZSB2aXNpdG9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZhc3RGb3JFYWNoT2JqZWN0IChzdWJqZWN0LCBmbiwgdGhpc0NvbnRleHQpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhzdWJqZWN0KSxcbiAgICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoLFxuICAgICAgaXRlcmF0b3IgPSB0aGlzQ29udGV4dCAhPT0gdW5kZWZpbmVkID8gYmluZEludGVybmFsMyhmbiwgdGhpc0NvbnRleHQpIDogZm4sXG4gICAgICBrZXksIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGtleSA9IGtleXNbaV07XG4gICAgaXRlcmF0b3Ioc3ViamVjdFtrZXldLCBrZXksIHN1YmplY3QpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZEludGVybmFsNCA9IHJlcXVpcmUoJy4uL2Z1bmN0aW9uL2JpbmRJbnRlcm5hbDQnKTtcblxuLyoqXG4gKiAjIFJlZHVjZVxuICpcbiAqIEEgZmFzdCBvYmplY3QgYC5yZWR1Y2UoKWAgaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHN1YmplY3QgICAgICBUaGUgb2JqZWN0IHRvIHJlZHVjZSBvdmVyLlxuICogQHBhcmFtICB7RnVuY3Rpb259IGZuICAgICAgICAgICBUaGUgcmVkdWNlciBmdW5jdGlvbi5cbiAqIEBwYXJhbSAge21peGVkfSAgICBpbml0aWFsVmFsdWUgVGhlIGluaXRpYWwgdmFsdWUgZm9yIHRoZSByZWR1Y2VyLCBkZWZhdWx0cyB0byBzdWJqZWN0WzBdLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHRoaXNDb250ZXh0ICBUaGUgY29udGV4dCBmb3IgdGhlIHJlZHVjZXIuXG4gKiBAcmV0dXJuIHttaXhlZH0gICAgICAgICAgICAgICAgIFRoZSBmaW5hbCByZXN1bHQuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmFzdFJlZHVjZU9iamVjdCAoc3ViamVjdCwgZm4sIGluaXRpYWxWYWx1ZSwgdGhpc0NvbnRleHQpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhzdWJqZWN0KSxcbiAgICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoLFxuICAgICAgaXRlcmF0b3IgPSB0aGlzQ29udGV4dCAhPT0gdW5kZWZpbmVkID8gYmluZEludGVybmFsNChmbiwgdGhpc0NvbnRleHQpIDogZm4sXG4gICAgICBpLCBrZXksIHJlc3VsdDtcblxuICBpZiAoaW5pdGlhbFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICBpID0gMTtcbiAgICByZXN1bHQgPSBzdWJqZWN0W2tleXNbMF1dO1xuICB9XG4gIGVsc2Uge1xuICAgIGkgPSAwO1xuICAgIHJlc3VsdCA9IGluaXRpYWxWYWx1ZTtcbiAgfVxuXG4gIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBrZXlzW2ldO1xuICAgIHJlc3VsdCA9IGl0ZXJhdG9yKHJlc3VsdCwgc3ViamVjdFtrZXldLCBrZXksIHN1YmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWR1Y2VBcnJheSA9IHJlcXVpcmUoJy4vYXJyYXkvcmVkdWNlJyksXG4gICAgcmVkdWNlT2JqZWN0ID0gcmVxdWlyZSgnLi9vYmplY3QvcmVkdWNlJyk7XG5cbi8qKlxuICogIyBSZWR1Y2VcbiAqXG4gKiBBIGZhc3QgYC5yZWR1Y2UoKWAgaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHBhcmFtICB7QXJyYXl8T2JqZWN0fSBzdWJqZWN0ICAgICAgVGhlIGFycmF5IG9yIG9iamVjdCB0byByZWR1Y2Ugb3Zlci5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSAgICAgZm4gICAgICAgICAgIFRoZSByZWR1Y2VyIGZ1bmN0aW9uLlxuICogQHBhcmFtICB7bWl4ZWR9ICAgICAgICBpbml0aWFsVmFsdWUgVGhlIGluaXRpYWwgdmFsdWUgZm9yIHRoZSByZWR1Y2VyLCBkZWZhdWx0cyB0byBzdWJqZWN0WzBdLlxuICogQHBhcmFtICB7T2JqZWN0fSAgICAgICB0aGlzQ29udGV4dCAgVGhlIGNvbnRleHQgZm9yIHRoZSByZWR1Y2VyLlxuICogQHJldHVybiB7QXJyYXl8T2JqZWN0fSAgICAgICAgICAgICAgVGhlIGFycmF5IG9yIG9iamVjdCBjb250YWluaW5nIHRoZSByZXN1bHRzLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZhc3RSZWR1Y2UgKHN1YmplY3QsIGZuLCBpbml0aWFsVmFsdWUsIHRoaXNDb250ZXh0KSB7XG4gIGlmIChzdWJqZWN0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZXR1cm4gcmVkdWNlQXJyYXkoc3ViamVjdCwgZm4sIGluaXRpYWxWYWx1ZSwgdGhpc0NvbnRleHQpO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiByZWR1Y2VPYmplY3Qoc3ViamVjdCwgZm4sIGluaXRpYWxWYWx1ZSwgdGhpc0NvbnRleHQpO1xuICB9XG59OyIsIi8qKlxuICogRml6enkgVUkgdXRpbHMgdjEuMC4xXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHRydWUsIHN0cmljdDogdHJ1ZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8qZ2xvYmFsIGRlZmluZTogZmFsc2UsIG1vZHVsZTogZmFsc2UsIHJlcXVpcmU6IGZhbHNlICovXG4gICd1c2Ugc3RyaWN0JztcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG5cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICdkb2MtcmVhZHkvZG9jLXJlYWR5JyxcbiAgICAgICdtYXRjaGVzLXNlbGVjdG9yL21hdGNoZXMtc2VsZWN0b3InXG4gICAgXSwgZnVuY3Rpb24oIGRvY1JlYWR5LCBtYXRjaGVzU2VsZWN0b3IgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBkb2NSZWFkeSwgbWF0Y2hlc1NlbGVjdG9yICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnZG9jLXJlYWR5JyksXG4gICAgICByZXF1aXJlKCdkZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LmZpenp5VUlVdGlscyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuZG9jUmVhZHksXG4gICAgICB3aW5kb3cubWF0Y2hlc1NlbGVjdG9yXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgZG9jUmVhZHksIG1hdGNoZXNTZWxlY3RvciApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSB7fTtcblxuLy8gLS0tLS0gZXh0ZW5kIC0tLS0tIC8vXG5cbi8vIGV4dGVuZHMgb2JqZWN0c1xudXRpbHMuZXh0ZW5kID0gZnVuY3Rpb24oIGEsIGIgKSB7XG4gIGZvciAoIHZhciBwcm9wIGluIGIgKSB7XG4gICAgYVsgcHJvcCBdID0gYlsgcHJvcCBdO1xuICB9XG4gIHJldHVybiBhO1xufTtcblxuLy8gLS0tLS0gbW9kdWxvIC0tLS0tIC8vXG5cbnV0aWxzLm1vZHVsbyA9IGZ1bmN0aW9uKCBudW0sIGRpdiApIHtcbiAgcmV0dXJuICggKCBudW0gJSBkaXYgKSArIGRpdiApICUgZGl2O1xufTtcblxuLy8gLS0tLS0gaXNBcnJheSAtLS0tLSAvL1xuICBcbnZhciBvYmpUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG51dGlscy5pc0FycmF5ID0gZnVuY3Rpb24oIG9iaiApIHtcbiAgcmV0dXJuIG9ialRvU3RyaW5nLmNhbGwoIG9iaiApID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG4vLyAtLS0tLSBtYWtlQXJyYXkgLS0tLS0gLy9cblxuLy8gdHVybiBlbGVtZW50IG9yIG5vZGVMaXN0IGludG8gYW4gYXJyYXlcbnV0aWxzLm1ha2VBcnJheSA9IGZ1bmN0aW9uKCBvYmogKSB7XG4gIHZhciBhcnkgPSBbXTtcbiAgaWYgKCB1dGlscy5pc0FycmF5KCBvYmogKSApIHtcbiAgICAvLyB1c2Ugb2JqZWN0IGlmIGFscmVhZHkgYW4gYXJyYXlcbiAgICBhcnkgPSBvYmo7XG4gIH0gZWxzZSBpZiAoIG9iaiAmJiB0eXBlb2Ygb2JqLmxlbmd0aCA9PSAnbnVtYmVyJyApIHtcbiAgICAvLyBjb252ZXJ0IG5vZGVMaXN0IHRvIGFycmF5XG4gICAgZm9yICggdmFyIGk9MCwgbGVuID0gb2JqLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgYXJ5LnB1c2goIG9ialtpXSApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBhcnJheSBvZiBzaW5nbGUgaW5kZXhcbiAgICBhcnkucHVzaCggb2JqICk7XG4gIH1cbiAgcmV0dXJuIGFyeTtcbn07XG5cbi8vIC0tLS0tIGluZGV4T2YgLS0tLS0gLy9cblxuLy8gaW5kZXggb2YgaGVscGVyIGNhdXNlIElFOFxudXRpbHMuaW5kZXhPZiA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mID8gZnVuY3Rpb24oIGFyeSwgb2JqICkge1xuICAgIHJldHVybiBhcnkuaW5kZXhPZiggb2JqICk7XG4gIH0gOiBmdW5jdGlvbiggYXJ5LCBvYmogKSB7XG4gICAgZm9yICggdmFyIGk9MCwgbGVuID0gYXJ5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgaWYgKCBhcnlbaV0gPT09IG9iaiApIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbiAgfTtcblxuLy8gLS0tLS0gcmVtb3ZlRnJvbSAtLS0tLSAvL1xuXG51dGlscy5yZW1vdmVGcm9tID0gZnVuY3Rpb24oIGFyeSwgb2JqICkge1xuICB2YXIgaW5kZXggPSB1dGlscy5pbmRleE9mKCBhcnksIG9iaiApO1xuICBpZiAoIGluZGV4ICE9IC0xICkge1xuICAgIGFyeS5zcGxpY2UoIGluZGV4LCAxICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGlzRWxlbWVudCAtLS0tLSAvL1xuXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zODQzODAvMTgyMTgzXG51dGlscy5pc0VsZW1lbnQgPSAoIHR5cGVvZiBIVE1MRWxlbWVudCA9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBIVE1MRWxlbWVudCA9PSAnb2JqZWN0JyApID9cbiAgZnVuY3Rpb24gaXNFbGVtZW50RE9NMiggb2JqICkge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbiAgfSA6XG4gIGZ1bmN0aW9uIGlzRWxlbWVudFF1aXJreSggb2JqICkge1xuICAgIHJldHVybiBvYmogJiYgdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqLm5vZGVUeXBlID09IDEgJiYgdHlwZW9mIG9iai5ub2RlTmFtZSA9PSAnc3RyaW5nJztcbiAgfTtcblxuLy8gLS0tLS0gc2V0VGV4dCAtLS0tLSAvL1xuXG51dGlscy5zZXRUZXh0ID0gKCBmdW5jdGlvbigpIHtcbiAgdmFyIHNldFRleHRQcm9wZXJ0eTtcbiAgZnVuY3Rpb24gc2V0VGV4dCggZWxlbSwgdGV4dCApIHtcbiAgICAvLyBvbmx5IGNoZWNrIHNldFRleHRQcm9wZXJ0eSBvbmNlXG4gICAgc2V0VGV4dFByb3BlcnR5ID0gc2V0VGV4dFByb3BlcnR5IHx8ICggZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnRleHRDb250ZW50ICE9PSB1bmRlZmluZWQgPyAndGV4dENvbnRlbnQnIDogJ2lubmVyVGV4dCcgKTtcbiAgICBlbGVtWyBzZXRUZXh0UHJvcGVydHkgXSA9IHRleHQ7XG4gIH1cbiAgcmV0dXJuIHNldFRleHQ7XG59KSgpO1xuXG4vLyAtLS0tLSBnZXRQYXJlbnQgLS0tLS0gLy9cblxudXRpbHMuZ2V0UGFyZW50ID0gZnVuY3Rpb24oIGVsZW0sIHNlbGVjdG9yICkge1xuICB3aGlsZSAoIGVsZW0gIT0gZG9jdW1lbnQuYm9keSApIHtcbiAgICBlbGVtID0gZWxlbS5wYXJlbnROb2RlO1xuICAgIGlmICggbWF0Y2hlc1NlbGVjdG9yKCBlbGVtLCBzZWxlY3RvciApICkge1xuICAgICAgcmV0dXJuIGVsZW07XG4gICAgfVxuICB9XG59O1xuXG4vLyAtLS0tLSBnZXRRdWVyeUVsZW1lbnQgLS0tLS0gLy9cblxuLy8gdXNlIGVsZW1lbnQgYXMgc2VsZWN0b3Igc3RyaW5nXG51dGlscy5nZXRRdWVyeUVsZW1lbnQgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgaWYgKCB0eXBlb2YgZWxlbSA9PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggZWxlbSApO1xuICB9XG4gIHJldHVybiBlbGVtO1xufTtcblxuLy8gLS0tLS0gaGFuZGxlRXZlbnQgLS0tLS0gLy9cblxuLy8gZW5hYmxlIC5vbnR5cGUgdG8gdHJpZ2dlciBmcm9tIC5hZGRFdmVudExpc3RlbmVyKCBlbGVtLCAndHlwZScgKVxudXRpbHMuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciBtZXRob2QgPSAnb24nICsgZXZlbnQudHlwZTtcbiAgaWYgKCB0aGlzWyBtZXRob2QgXSApIHtcbiAgICB0aGlzWyBtZXRob2QgXSggZXZlbnQgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gZmlsdGVyRmluZEVsZW1lbnRzIC0tLS0tIC8vXG5cbnV0aWxzLmZpbHRlckZpbmRFbGVtZW50cyA9IGZ1bmN0aW9uKCBlbGVtcywgc2VsZWN0b3IgKSB7XG4gIC8vIG1ha2UgYXJyYXkgb2YgZWxlbXNcbiAgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGVsZW1zICk7XG4gIHZhciBmZkVsZW1zID0gW107XG5cbiAgZm9yICggdmFyIGk9MCwgbGVuID0gZWxlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgdmFyIGVsZW0gPSBlbGVtc1tpXTtcbiAgICAvLyBjaGVjayB0aGF0IGVsZW0gaXMgYW4gYWN0dWFsIGVsZW1lbnRcbiAgICBpZiAoICF1dGlscy5pc0VsZW1lbnQoIGVsZW0gKSApIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICAvLyBmaWx0ZXIgJiBmaW5kIGl0ZW1zIGlmIHdlIGhhdmUgYSBzZWxlY3RvclxuICAgIGlmICggc2VsZWN0b3IgKSB7XG4gICAgICAvLyBmaWx0ZXIgc2libGluZ3NcbiAgICAgIGlmICggbWF0Y2hlc1NlbGVjdG9yKCBlbGVtLCBzZWxlY3RvciApICkge1xuICAgICAgICBmZkVsZW1zLnB1c2goIGVsZW0gKTtcbiAgICAgIH1cbiAgICAgIC8vIGZpbmQgY2hpbGRyZW5cbiAgICAgIHZhciBjaGlsZEVsZW1zID0gZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApO1xuICAgICAgLy8gY29uY2F0IGNoaWxkRWxlbXMgdG8gZmlsdGVyRm91bmQgYXJyYXlcbiAgICAgIGZvciAoIHZhciBqPTAsIGpMZW4gPSBjaGlsZEVsZW1zLmxlbmd0aDsgaiA8IGpMZW47IGorKyApIHtcbiAgICAgICAgZmZFbGVtcy5wdXNoKCBjaGlsZEVsZW1zW2pdICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZmRWxlbXMucHVzaCggZWxlbSApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmZkVsZW1zO1xufTtcblxuLy8gLS0tLS0gZGVib3VuY2VNZXRob2QgLS0tLS0gLy9cblxudXRpbHMuZGVib3VuY2VNZXRob2QgPSBmdW5jdGlvbiggX2NsYXNzLCBtZXRob2ROYW1lLCB0aHJlc2hvbGQgKSB7XG4gIC8vIG9yaWdpbmFsIG1ldGhvZFxuICB2YXIgbWV0aG9kID0gX2NsYXNzLnByb3RvdHlwZVsgbWV0aG9kTmFtZSBdO1xuICB2YXIgdGltZW91dE5hbWUgPSBtZXRob2ROYW1lICsgJ1RpbWVvdXQnO1xuXG4gIF9jbGFzcy5wcm90b3R5cGVbIG1ldGhvZE5hbWUgXSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0aW1lb3V0ID0gdGhpc1sgdGltZW91dE5hbWUgXTtcbiAgICBpZiAoIHRpbWVvdXQgKSB7XG4gICAgICBjbGVhclRpbWVvdXQoIHRpbWVvdXQgKTtcbiAgICB9XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXNbIHRpbWVvdXROYW1lIF0gPSBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgIG1ldGhvZC5hcHBseSggX3RoaXMsIGFyZ3MgKTtcbiAgICAgIGRlbGV0ZSBfdGhpc1sgdGltZW91dE5hbWUgXTtcbiAgICB9LCB0aHJlc2hvbGQgfHwgMTAwICk7XG4gIH07XG59O1xuXG4vLyAtLS0tLSBodG1sSW5pdCAtLS0tLSAvL1xuXG4vLyBodHRwOi8vamFtZXNyb2JlcnRzLm5hbWUvYmxvZy8yMDEwLzAyLzIyL3N0cmluZy1mdW5jdGlvbnMtZm9yLWphdmFzY3JpcHQtdHJpbS10by1jYW1lbC1jYXNlLXRvLWRhc2hlZC1hbmQtdG8tdW5kZXJzY29yZS9cbnV0aWxzLnRvRGFzaGVkID0gZnVuY3Rpb24oIHN0ciApIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKCAvKC4pKFtBLVpdKS9nLCBmdW5jdGlvbiggbWF0Y2gsICQxLCAkMiApIHtcbiAgICByZXR1cm4gJDEgKyAnLScgKyAkMjtcbiAgfSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBjb25zb2xlID0gd2luZG93LmNvbnNvbGU7XG4vKipcbiAqIGFsbG93IHVzZXIgdG8gaW5pdGlhbGl6ZSBjbGFzc2VzIHZpYSAuanMtbmFtZXNwYWNlIGNsYXNzXG4gKiBodG1sSW5pdCggV2lkZ2V0LCAnd2lkZ2V0TmFtZScgKVxuICogb3B0aW9ucyBhcmUgcGFyc2VkIGZyb20gZGF0YS1uYW1lc3BhY2Utb3B0aW9uIGF0dHJpYnV0ZVxuICovXG51dGlscy5odG1sSW5pdCA9IGZ1bmN0aW9uKCBXaWRnZXRDbGFzcywgbmFtZXNwYWNlICkge1xuICBkb2NSZWFkeSggZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRhc2hlZE5hbWVzcGFjZSA9IHV0aWxzLnRvRGFzaGVkKCBuYW1lc3BhY2UgKTtcbiAgICB2YXIgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLmpzLScgKyBkYXNoZWROYW1lc3BhY2UgKTtcbiAgICB2YXIgZGF0YUF0dHIgPSAnZGF0YS0nICsgZGFzaGVkTmFtZXNwYWNlICsgJy1vcHRpb25zJztcblxuICAgIGZvciAoIHZhciBpPTAsIGxlbiA9IGVsZW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgdmFyIGVsZW0gPSBlbGVtc1tpXTtcbiAgICAgIHZhciBhdHRyID0gZWxlbS5nZXRBdHRyaWJ1dGUoIGRhdGFBdHRyICk7XG4gICAgICB2YXIgb3B0aW9ucztcbiAgICAgIHRyeSB7XG4gICAgICAgIG9wdGlvbnMgPSBhdHRyICYmIEpTT04ucGFyc2UoIGF0dHIgKTtcbiAgICAgIH0gY2F0Y2ggKCBlcnJvciApIHtcbiAgICAgICAgLy8gbG9nIGVycm9yLCBkbyBub3QgaW5pdGlhbGl6ZVxuICAgICAgICBpZiAoIGNvbnNvbGUgKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvciggJ0Vycm9yIHBhcnNpbmcgJyArIGRhdGFBdHRyICsgJyBvbiAnICtcbiAgICAgICAgICAgIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSArICggZWxlbS5pZCA/ICcjJyArIGVsZW0uaWQgOiAnJyApICsgJzogJyArXG4gICAgICAgICAgICBlcnJvciApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgLy8gaW5pdGlhbGl6ZVxuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IFdpZGdldENsYXNzKCBlbGVtLCBvcHRpb25zICk7XG4gICAgICAvLyBtYWtlIGF2YWlsYWJsZSB2aWEgJCgpLmRhdGEoJ2xheW91dG5hbWUnKVxuICAgICAgdmFyIGpRdWVyeSA9IHdpbmRvdy5qUXVlcnk7XG4gICAgICBpZiAoIGpRdWVyeSApIHtcbiAgICAgICAgalF1ZXJ5LmRhdGEoIGVsZW0sIG5hbWVzcGFjZSwgaW5zdGFuY2UgKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuLy8gLS0tLS0gIC0tLS0tIC8vXG5cbnJldHVybiB1dGlscztcblxufSkpO1xuIiwiLyohXG4gKiBmb3ItaW4gPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2Zvci1pbj5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgSm9uIFNjaGxpbmtlcnQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZvckluKG8sIGZuLCB0aGlzQXJnKSB7XG4gIGZvciAodmFyIGtleSBpbiBvKSB7XG4gICAgaWYgKGZuLmNhbGwodGhpc0FyZywgb1trZXldLCBrZXksIG8pID09PSBmYWxzZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59OyIsIi8qIVxuICogZm9yLW93biA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvZm9yLW93bj5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgSm9uIFNjaGxpbmtlcnQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZm9ySW4gPSByZXF1aXJlKCdmb3ItaW4nKTtcbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZvck93bihvLCBmbiwgdGhpc0FyZykge1xuICBmb3JJbihvLCBmdW5jdGlvbiAodmFsLCBrZXkpIHtcbiAgICBpZiAoaGFzT3duLmNhbGwobywga2V5KSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhpc0FyZywgb1trZXldLCBrZXksIG8pO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiLyohXG4gKiBnZXRTaXplIHYxLjIuMlxuICogbWVhc3VyZSBzaXplIG9mIGVsZW1lbnRzXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgdW5kZWY6IHRydWUsIHVudXNlZDogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlLCBjb25zb2xlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIHVuZGVmaW5lZCApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGdldCBhIG51bWJlciBmcm9tIGEgc3RyaW5nLCBub3QgYSBwZXJjZW50YWdlXG5mdW5jdGlvbiBnZXRTdHlsZVNpemUoIHZhbHVlICkge1xuICB2YXIgbnVtID0gcGFyc2VGbG9hdCggdmFsdWUgKTtcbiAgLy8gbm90IGEgcGVyY2VudCBsaWtlICcxMDAlJywgYW5kIGEgbnVtYmVyXG4gIHZhciBpc1ZhbGlkID0gdmFsdWUuaW5kZXhPZignJScpID09PSAtMSAmJiAhaXNOYU4oIG51bSApO1xuICByZXR1cm4gaXNWYWxpZCAmJiBudW07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG52YXIgbG9nRXJyb3IgPSB0eXBlb2YgY29uc29sZSA9PT0gJ3VuZGVmaW5lZCcgPyBub29wIDpcbiAgZnVuY3Rpb24oIG1lc3NhZ2UgKSB7XG4gICAgY29uc29sZS5lcnJvciggbWVzc2FnZSApO1xuICB9O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtZWFzdXJlbWVudHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudmFyIG1lYXN1cmVtZW50cyA9IFtcbiAgJ3BhZGRpbmdMZWZ0JyxcbiAgJ3BhZGRpbmdSaWdodCcsXG4gICdwYWRkaW5nVG9wJyxcbiAgJ3BhZGRpbmdCb3R0b20nLFxuICAnbWFyZ2luTGVmdCcsXG4gICdtYXJnaW5SaWdodCcsXG4gICdtYXJnaW5Ub3AnLFxuICAnbWFyZ2luQm90dG9tJyxcbiAgJ2JvcmRlckxlZnRXaWR0aCcsXG4gICdib3JkZXJSaWdodFdpZHRoJyxcbiAgJ2JvcmRlclRvcFdpZHRoJyxcbiAgJ2JvcmRlckJvdHRvbVdpZHRoJ1xuXTtcblxuZnVuY3Rpb24gZ2V0WmVyb1NpemUoKSB7XG4gIHZhciBzaXplID0ge1xuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBpbm5lcldpZHRoOiAwLFxuICAgIGlubmVySGVpZ2h0OiAwLFxuICAgIG91dGVyV2lkdGg6IDAsXG4gICAgb3V0ZXJIZWlnaHQ6IDBcbiAgfTtcbiAgZm9yICggdmFyIGk9MCwgbGVuID0gbWVhc3VyZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHZhciBtZWFzdXJlbWVudCA9IG1lYXN1cmVtZW50c1tpXTtcbiAgICBzaXplWyBtZWFzdXJlbWVudCBdID0gMDtcbiAgfVxuICByZXR1cm4gc2l6ZTtcbn1cblxuXG5cbmZ1bmN0aW9uIGRlZmluZUdldFNpemUoIGdldFN0eWxlUHJvcGVydHkgKSB7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNldHVwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciBpc1NldHVwID0gZmFsc2U7XG5cbnZhciBnZXRTdHlsZSwgYm94U2l6aW5nUHJvcCwgaXNCb3hTaXplT3V0ZXI7XG5cbi8qKlxuICogc2V0dXAgdmFycyBhbmQgZnVuY3Rpb25zXG4gKiBkbyBpdCBvbiBpbml0aWFsIGdldFNpemUoKSwgcmF0aGVyIHRoYW4gb24gc2NyaXB0IGxvYWRcbiAqIEZvciBGaXJlZm94IGJ1ZyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAqL1xuZnVuY3Rpb24gc2V0dXAoKSB7XG4gIC8vIHNldHVwIG9uY2VcbiAgaWYgKCBpc1NldHVwICkge1xuICAgIHJldHVybjtcbiAgfVxuICBpc1NldHVwID0gdHJ1ZTtcblxuICB2YXIgZ2V0Q29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlO1xuICBnZXRTdHlsZSA9ICggZnVuY3Rpb24oKSB7XG4gICAgdmFyIGdldFN0eWxlRm4gPSBnZXRDb21wdXRlZFN0eWxlID9cbiAgICAgIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZSggZWxlbSwgbnVsbCApO1xuICAgICAgfSA6XG4gICAgICBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgICAgcmV0dXJuIGVsZW0uY3VycmVudFN0eWxlO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGdldFN0eWxlKCBlbGVtICkge1xuICAgICAgICB2YXIgc3R5bGUgPSBnZXRTdHlsZUZuKCBlbGVtICk7XG4gICAgICAgIGlmICggIXN0eWxlICkge1xuICAgICAgICAgIGxvZ0Vycm9yKCAnU3R5bGUgcmV0dXJuZWQgJyArIHN0eWxlICtcbiAgICAgICAgICAgICcuIEFyZSB5b3UgcnVubmluZyB0aGlzIGNvZGUgaW4gYSBoaWRkZW4gaWZyYW1lIG9uIEZpcmVmb3g/ICcgK1xuICAgICAgICAgICAgJ1NlZSBodHRwOi8vYml0Lmx5L2dldHNpemVidWcxJyApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH07XG4gIH0pKCk7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYm94IHNpemluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIGJveFNpemluZ1Byb3AgPSBnZXRTdHlsZVByb3BlcnR5KCdib3hTaXppbmcnKTtcblxuICAvKipcbiAgICogV2ViS2l0IG1lYXN1cmVzIHRoZSBvdXRlci13aWR0aCBvbiBzdHlsZS53aWR0aCBvbiBib3JkZXItYm94IGVsZW1zXG4gICAqIElFICYgRmlyZWZveCBtZWFzdXJlcyB0aGUgaW5uZXItd2lkdGhcbiAgICovXG4gIGlmICggYm94U2l6aW5nUHJvcCApIHtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnN0eWxlLndpZHRoID0gJzIwMHB4JztcbiAgICBkaXYuc3R5bGUucGFkZGluZyA9ICcxcHggMnB4IDNweCA0cHgnO1xuICAgIGRpdi5zdHlsZS5ib3JkZXJTdHlsZSA9ICdzb2xpZCc7XG4gICAgZGl2LnN0eWxlLmJvcmRlcldpZHRoID0gJzFweCAycHggM3B4IDRweCc7XG4gICAgZGl2LnN0eWxlWyBib3hTaXppbmdQcm9wIF0gPSAnYm9yZGVyLWJveCc7XG5cbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoIGRpdiApO1xuICAgIHZhciBzdHlsZSA9IGdldFN0eWxlKCBkaXYgKTtcblxuICAgIGlzQm94U2l6ZU91dGVyID0gZ2V0U3R5bGVTaXplKCBzdHlsZS53aWR0aCApID09PSAyMDA7XG4gICAgYm9keS5yZW1vdmVDaGlsZCggZGl2ICk7XG4gIH1cblxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZXRTaXplIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIGdldFNpemUoIGVsZW0gKSB7XG4gIHNldHVwKCk7XG5cbiAgLy8gdXNlIHF1ZXJ5U2VsZXRvciBpZiBlbGVtIGlzIHN0cmluZ1xuICBpZiAoIHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJyApIHtcbiAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggZWxlbSApO1xuICB9XG5cbiAgLy8gZG8gbm90IHByb2NlZWQgb24gbm9uLW9iamVjdHNcbiAgaWYgKCAhZWxlbSB8fCB0eXBlb2YgZWxlbSAhPT0gJ29iamVjdCcgfHwgIWVsZW0ubm9kZVR5cGUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHN0eWxlID0gZ2V0U3R5bGUoIGVsZW0gKTtcblxuICAvLyBpZiBoaWRkZW4sIGV2ZXJ5dGhpbmcgaXMgMFxuICBpZiAoIHN0eWxlLmRpc3BsYXkgPT09ICdub25lJyApIHtcbiAgICByZXR1cm4gZ2V0WmVyb1NpemUoKTtcbiAgfVxuXG4gIHZhciBzaXplID0ge307XG4gIHNpemUud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICBzaXplLmhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuXG4gIHZhciBpc0JvcmRlckJveCA9IHNpemUuaXNCb3JkZXJCb3ggPSAhISggYm94U2l6aW5nUHJvcCAmJlxuICAgIHN0eWxlWyBib3hTaXppbmdQcm9wIF0gJiYgc3R5bGVbIGJveFNpemluZ1Byb3AgXSA9PT0gJ2JvcmRlci1ib3gnICk7XG5cbiAgLy8gZ2V0IGFsbCBtZWFzdXJlbWVudHNcbiAgZm9yICggdmFyIGk9MCwgbGVuID0gbWVhc3VyZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHZhciBtZWFzdXJlbWVudCA9IG1lYXN1cmVtZW50c1tpXTtcbiAgICB2YXIgdmFsdWUgPSBzdHlsZVsgbWVhc3VyZW1lbnQgXTtcbiAgICB2YWx1ZSA9IG11bmdlTm9uUGl4ZWwoIGVsZW0sIHZhbHVlICk7XG4gICAgdmFyIG51bSA9IHBhcnNlRmxvYXQoIHZhbHVlICk7XG4gICAgLy8gYW55ICdhdXRvJywgJ21lZGl1bScgdmFsdWUgd2lsbCBiZSAwXG4gICAgc2l6ZVsgbWVhc3VyZW1lbnQgXSA9ICFpc05hTiggbnVtICkgPyBudW0gOiAwO1xuICB9XG5cbiAgdmFyIHBhZGRpbmdXaWR0aCA9IHNpemUucGFkZGluZ0xlZnQgKyBzaXplLnBhZGRpbmdSaWdodDtcbiAgdmFyIHBhZGRpbmdIZWlnaHQgPSBzaXplLnBhZGRpbmdUb3AgKyBzaXplLnBhZGRpbmdCb3R0b207XG4gIHZhciBtYXJnaW5XaWR0aCA9IHNpemUubWFyZ2luTGVmdCArIHNpemUubWFyZ2luUmlnaHQ7XG4gIHZhciBtYXJnaW5IZWlnaHQgPSBzaXplLm1hcmdpblRvcCArIHNpemUubWFyZ2luQm90dG9tO1xuICB2YXIgYm9yZGVyV2lkdGggPSBzaXplLmJvcmRlckxlZnRXaWR0aCArIHNpemUuYm9yZGVyUmlnaHRXaWR0aDtcbiAgdmFyIGJvcmRlckhlaWdodCA9IHNpemUuYm9yZGVyVG9wV2lkdGggKyBzaXplLmJvcmRlckJvdHRvbVdpZHRoO1xuXG4gIHZhciBpc0JvcmRlckJveFNpemVPdXRlciA9IGlzQm9yZGVyQm94ICYmIGlzQm94U2l6ZU91dGVyO1xuXG4gIC8vIG92ZXJ3cml0ZSB3aWR0aCBhbmQgaGVpZ2h0IGlmIHdlIGNhbiBnZXQgaXQgZnJvbSBzdHlsZVxuICB2YXIgc3R5bGVXaWR0aCA9IGdldFN0eWxlU2l6ZSggc3R5bGUud2lkdGggKTtcbiAgaWYgKCBzdHlsZVdpZHRoICE9PSBmYWxzZSApIHtcbiAgICBzaXplLndpZHRoID0gc3R5bGVXaWR0aCArXG4gICAgICAvLyBhZGQgcGFkZGluZyBhbmQgYm9yZGVyIHVubGVzcyBpdCdzIGFscmVhZHkgaW5jbHVkaW5nIGl0XG4gICAgICAoIGlzQm9yZGVyQm94U2l6ZU91dGVyID8gMCA6IHBhZGRpbmdXaWR0aCArIGJvcmRlcldpZHRoICk7XG4gIH1cblxuICB2YXIgc3R5bGVIZWlnaHQgPSBnZXRTdHlsZVNpemUoIHN0eWxlLmhlaWdodCApO1xuICBpZiAoIHN0eWxlSGVpZ2h0ICE9PSBmYWxzZSApIHtcbiAgICBzaXplLmhlaWdodCA9IHN0eWxlSGVpZ2h0ICtcbiAgICAgIC8vIGFkZCBwYWRkaW5nIGFuZCBib3JkZXIgdW5sZXNzIGl0J3MgYWxyZWFkeSBpbmNsdWRpbmcgaXRcbiAgICAgICggaXNCb3JkZXJCb3hTaXplT3V0ZXIgPyAwIDogcGFkZGluZ0hlaWdodCArIGJvcmRlckhlaWdodCApO1xuICB9XG5cbiAgc2l6ZS5pbm5lcldpZHRoID0gc2l6ZS53aWR0aCAtICggcGFkZGluZ1dpZHRoICsgYm9yZGVyV2lkdGggKTtcbiAgc2l6ZS5pbm5lckhlaWdodCA9IHNpemUuaGVpZ2h0IC0gKCBwYWRkaW5nSGVpZ2h0ICsgYm9yZGVySGVpZ2h0ICk7XG5cbiAgc2l6ZS5vdXRlcldpZHRoID0gc2l6ZS53aWR0aCArIG1hcmdpbldpZHRoO1xuICBzaXplLm91dGVySGVpZ2h0ID0gc2l6ZS5oZWlnaHQgKyBtYXJnaW5IZWlnaHQ7XG5cbiAgcmV0dXJuIHNpemU7XG59XG5cbi8vIElFOCByZXR1cm5zIHBlcmNlbnQgdmFsdWVzLCBub3QgcGl4ZWxzXG4vLyB0YWtlbiBmcm9tIGpRdWVyeSdzIGN1ckNTU1xuZnVuY3Rpb24gbXVuZ2VOb25QaXhlbCggZWxlbSwgdmFsdWUgKSB7XG4gIC8vIElFOCBhbmQgaGFzIHBlcmNlbnQgdmFsdWVcbiAgaWYgKCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSB8fCB2YWx1ZS5pbmRleE9mKCclJykgPT09IC0xICkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgc3R5bGUgPSBlbGVtLnN0eWxlO1xuICAvLyBSZW1lbWJlciB0aGUgb3JpZ2luYWwgdmFsdWVzXG4gIHZhciBsZWZ0ID0gc3R5bGUubGVmdDtcbiAgdmFyIHJzID0gZWxlbS5ydW50aW1lU3R5bGU7XG4gIHZhciByc0xlZnQgPSBycyAmJiBycy5sZWZ0O1xuXG4gIC8vIFB1dCBpbiB0aGUgbmV3IHZhbHVlcyB0byBnZXQgYSBjb21wdXRlZCB2YWx1ZSBvdXRcbiAgaWYgKCByc0xlZnQgKSB7XG4gICAgcnMubGVmdCA9IGVsZW0uY3VycmVudFN0eWxlLmxlZnQ7XG4gIH1cbiAgc3R5bGUubGVmdCA9IHZhbHVlO1xuICB2YWx1ZSA9IHN0eWxlLnBpeGVsTGVmdDtcblxuICAvLyBSZXZlcnQgdGhlIGNoYW5nZWQgdmFsdWVzXG4gIHN0eWxlLmxlZnQgPSBsZWZ0O1xuICBpZiAoIHJzTGVmdCApIHtcbiAgICBycy5sZWZ0ID0gcnNMZWZ0O1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5yZXR1cm4gZ2V0U2l6ZTtcblxufVxuXG4vLyB0cmFuc3BvcnRcbmlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAvLyBBTUQgZm9yIFJlcXVpcmVKU1xuICBkZWZpbmUoIFsgJ2dldC1zdHlsZS1wcm9wZXJ0eS9nZXQtc3R5bGUtcHJvcGVydHknIF0sIGRlZmluZUdldFNpemUgKTtcbn0gZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyApIHtcbiAgLy8gQ29tbW9uSlMgZm9yIENvbXBvbmVudFxuICBtb2R1bGUuZXhwb3J0cyA9IGRlZmluZUdldFNpemUoIHJlcXVpcmUoJ2Rlc2FuZHJvLWdldC1zdHlsZS1wcm9wZXJ0eScpICk7XG59IGVsc2Uge1xuICAvLyBicm93c2VyIGdsb2JhbFxuICB3aW5kb3cuZ2V0U2l6ZSA9IGRlZmluZUdldFNpemUoIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ICk7XG59XG5cbn0pKCB3aW5kb3cgKTtcbiIsIi8qKiBnZW5lcmF0ZSB1bmlxdWUgaWQgZm9yIHNlbGVjdG9yICovXHJcbnZhciBjb3VudGVyID0gRGF0ZS5ub3coKSAlIDFlOTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0VWlkKCl7XHJcblx0cmV0dXJuIChNYXRoLnJhbmRvbSgpICogMWU5ID4+PiAwKSArIChjb3VudGVyKyspO1xyXG59OyIsImV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSBtICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKHZhbHVlICogYyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuIiwiLyohXG4gKiBpbWFnZXNMb2FkZWQgdjMuMi4wXG4gKiBKYXZhU2NyaXB0IGlzIGFsbCBsaWtlIFwiWW91IGltYWdlcyBhcmUgZG9uZSB5ZXQgb3Igd2hhdD9cIlxuICogTUlUIExpY2Vuc2VcbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7ICd1c2Ugc3RyaWN0JztcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG5cbiAgLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSwgcmVxdWlyZTogZmFsc2UgKi9cblxuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJ2V2ZW50RW1pdHRlci9FdmVudEVtaXR0ZXInLFxuICAgICAgJ2V2ZW50aWUvZXZlbnRpZSdcbiAgICBdLCBmdW5jdGlvbiggRXZlbnRFbWl0dGVyLCBldmVudGllICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgRXZlbnRFbWl0dGVyLCBldmVudGllICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCd3b2xmeTg3LWV2ZW50ZW1pdHRlcicpLFxuICAgICAgcmVxdWlyZSgnZXZlbnRpZScpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5pbWFnZXNMb2FkZWQgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LkV2ZW50RW1pdHRlcixcbiAgICAgIHdpbmRvdy5ldmVudGllXG4gICAgKTtcbiAgfVxuXG59KSggd2luZG93LFxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgZmFjdG9yeSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEV2ZW50RW1pdHRlciwgZXZlbnRpZSApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJCA9IHdpbmRvdy5qUXVlcnk7XG52YXIgY29uc29sZSA9IHdpbmRvdy5jb25zb2xlO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGV4dGVuZCBvYmplY3RzXG5mdW5jdGlvbiBleHRlbmQoIGEsIGIgKSB7XG4gIGZvciAoIHZhciBwcm9wIGluIGIgKSB7XG4gICAgYVsgcHJvcCBdID0gYlsgcHJvcCBdO1xuICB9XG4gIHJldHVybiBhO1xufVxuXG52YXIgb2JqVG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuZnVuY3Rpb24gaXNBcnJheSggb2JqICkge1xuICByZXR1cm4gb2JqVG9TdHJpbmcuY2FsbCggb2JqICkgPT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLy8gdHVybiBlbGVtZW50IG9yIG5vZGVMaXN0IGludG8gYW4gYXJyYXlcbmZ1bmN0aW9uIG1ha2VBcnJheSggb2JqICkge1xuICB2YXIgYXJ5ID0gW107XG4gIGlmICggaXNBcnJheSggb2JqICkgKSB7XG4gICAgLy8gdXNlIG9iamVjdCBpZiBhbHJlYWR5IGFuIGFycmF5XG4gICAgYXJ5ID0gb2JqO1xuICB9IGVsc2UgaWYgKCB0eXBlb2Ygb2JqLmxlbmd0aCA9PSAnbnVtYmVyJyApIHtcbiAgICAvLyBjb252ZXJ0IG5vZGVMaXN0IHRvIGFycmF5XG4gICAgZm9yICggdmFyIGk9MDsgaSA8IG9iai5sZW5ndGg7IGkrKyApIHtcbiAgICAgIGFyeS5wdXNoKCBvYmpbaV0gKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gYXJyYXkgb2Ygc2luZ2xlIGluZGV4XG4gICAgYXJ5LnB1c2goIG9iaiApO1xuICB9XG4gIHJldHVybiBhcnk7XG59XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaW1hZ2VzTG9hZGVkIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7QXJyYXksIEVsZW1lbnQsIE5vZGVMaXN0LCBTdHJpbmd9IGVsZW1cbiAgICogQHBhcmFtIHtPYmplY3Qgb3IgRnVuY3Rpb259IG9wdGlvbnMgLSBpZiBmdW5jdGlvbiwgdXNlIGFzIGNhbGxiYWNrXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQWx3YXlzIC0gY2FsbGJhY2sgZnVuY3Rpb25cbiAgICovXG4gIGZ1bmN0aW9uIEltYWdlc0xvYWRlZCggZWxlbSwgb3B0aW9ucywgb25BbHdheXMgKSB7XG4gICAgLy8gY29lcmNlIEltYWdlc0xvYWRlZCgpIHdpdGhvdXQgbmV3LCB0byBiZSBuZXcgSW1hZ2VzTG9hZGVkKClcbiAgICBpZiAoICEoIHRoaXMgaW5zdGFuY2VvZiBJbWFnZXNMb2FkZWQgKSApIHtcbiAgICAgIHJldHVybiBuZXcgSW1hZ2VzTG9hZGVkKCBlbGVtLCBvcHRpb25zLCBvbkFsd2F5cyApO1xuICAgIH1cbiAgICAvLyB1c2UgZWxlbSBhcyBzZWxlY3RvciBzdHJpbmdcbiAgICBpZiAoIHR5cGVvZiBlbGVtID09ICdzdHJpbmcnICkge1xuICAgICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIGVsZW0gKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnRzID0gbWFrZUFycmF5KCBlbGVtICk7XG4gICAgdGhpcy5vcHRpb25zID0gZXh0ZW5kKCB7fSwgdGhpcy5vcHRpb25zICk7XG5cbiAgICBpZiAoIHR5cGVvZiBvcHRpb25zID09ICdmdW5jdGlvbicgKSB7XG4gICAgICBvbkFsd2F5cyA9IG9wdGlvbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4dGVuZCggdGhpcy5vcHRpb25zLCBvcHRpb25zICk7XG4gICAgfVxuXG4gICAgaWYgKCBvbkFsd2F5cyApIHtcbiAgICAgIHRoaXMub24oICdhbHdheXMnLCBvbkFsd2F5cyApO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0SW1hZ2VzKCk7XG5cbiAgICBpZiAoICQgKSB7XG4gICAgICAvLyBhZGQgalF1ZXJ5IERlZmVycmVkIG9iamVjdFxuICAgICAgdGhpcy5qcURlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcbiAgICB9XG5cbiAgICAvLyBIQUNLIGNoZWNrIGFzeW5jIHRvIGFsbG93IHRpbWUgdG8gYmluZCBsaXN0ZW5lcnNcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgX3RoaXMuY2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIEltYWdlc0xvYWRlZC5wcm90b3R5cGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5vcHRpb25zID0ge307XG5cbiAgSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5nZXRJbWFnZXMgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmltYWdlcyA9IFtdO1xuXG4gICAgLy8gZmlsdGVyICYgZmluZCBpdGVtcyBpZiB3ZSBoYXZlIGFuIGl0ZW0gc2VsZWN0b3JcbiAgICBmb3IgKCB2YXIgaT0wOyBpIDwgdGhpcy5lbGVtZW50cy5sZW5ndGg7IGkrKyApIHtcbiAgICAgIHZhciBlbGVtID0gdGhpcy5lbGVtZW50c1tpXTtcbiAgICAgIHRoaXMuYWRkRWxlbWVudEltYWdlcyggZWxlbSApO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBlbGVtZW50XG4gICAqL1xuICBJbWFnZXNMb2FkZWQucHJvdG90eXBlLmFkZEVsZW1lbnRJbWFnZXMgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAvLyBmaWx0ZXIgc2libGluZ3NcbiAgICBpZiAoIGVsZW0ubm9kZU5hbWUgPT0gJ0lNRycgKSB7XG4gICAgICB0aGlzLmFkZEltYWdlKCBlbGVtICk7XG4gICAgfVxuICAgIC8vIGdldCBiYWNrZ3JvdW5kIGltYWdlIG9uIGVsZW1lbnRcbiAgICBpZiAoIHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kID09PSB0cnVlICkge1xuICAgICAgdGhpcy5hZGRFbGVtZW50QmFja2dyb3VuZEltYWdlcyggZWxlbSApO1xuICAgIH1cblxuICAgIC8vIGZpbmQgY2hpbGRyZW5cbiAgICAvLyBubyBub24tZWxlbWVudCBub2RlcywgIzE0M1xuICAgIHZhciBub2RlVHlwZSA9IGVsZW0ubm9kZVR5cGU7XG4gICAgaWYgKCAhbm9kZVR5cGUgfHwgIWVsZW1lbnROb2RlVHlwZXNbIG5vZGVUeXBlIF0gKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBjaGlsZEltZ3MgPSBlbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpO1xuICAgIC8vIGNvbmNhdCBjaGlsZEVsZW1zIHRvIGZpbHRlckZvdW5kIGFycmF5XG4gICAgZm9yICggdmFyIGk9MDsgaSA8IGNoaWxkSW1ncy5sZW5ndGg7IGkrKyApIHtcbiAgICAgIHZhciBpbWcgPSBjaGlsZEltZ3NbaV07XG4gICAgICB0aGlzLmFkZEltYWdlKCBpbWcgKTtcbiAgICB9XG5cbiAgICAvLyBnZXQgY2hpbGQgYmFja2dyb3VuZCBpbWFnZXNcbiAgICBpZiAoIHR5cGVvZiB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZCA9PSAnc3RyaW5nJyApIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IGVsZW0ucXVlcnlTZWxlY3RvckFsbCggdGhpcy5vcHRpb25zLmJhY2tncm91bmQgKTtcbiAgICAgIGZvciAoIGk9MDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrICkge1xuICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50QmFja2dyb3VuZEltYWdlcyggY2hpbGQgKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIGVsZW1lbnROb2RlVHlwZXMgPSB7XG4gICAgMTogdHJ1ZSxcbiAgICA5OiB0cnVlLFxuICAgIDExOiB0cnVlXG4gIH07XG5cbiAgSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5hZGRFbGVtZW50QmFja2dyb3VuZEltYWdlcyA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICAgIHZhciBzdHlsZSA9IGdldFN0eWxlKCBlbGVtICk7XG4gICAgLy8gZ2V0IHVybCBpbnNpZGUgdXJsKFwiLi4uXCIpXG4gICAgdmFyIHJlVVJMID0gL3VybFxcKFsnXCJdKihbXidcIlxcKV0rKVsnXCJdKlxcKS9naTtcbiAgICB2YXIgbWF0Y2hlcyA9IHJlVVJMLmV4ZWMoIHN0eWxlLmJhY2tncm91bmRJbWFnZSApO1xuICAgIHdoaWxlICggbWF0Y2hlcyAhPT0gbnVsbCApIHtcbiAgICAgIHZhciB1cmwgPSBtYXRjaGVzICYmIG1hdGNoZXNbMV07XG4gICAgICBpZiAoIHVybCApIHtcbiAgICAgICAgdGhpcy5hZGRCYWNrZ3JvdW5kKCB1cmwsIGVsZW0gKTtcbiAgICAgIH1cbiAgICAgIG1hdGNoZXMgPSByZVVSTC5leGVjKCBzdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gSUU4XG4gIHZhciBnZXRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlIHx8IGZ1bmN0aW9uKCBlbGVtICkge1xuICAgIHJldHVybiBlbGVtLmN1cnJlbnRTdHlsZTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtJbWFnZX0gaW1nXG4gICAqL1xuICBJbWFnZXNMb2FkZWQucHJvdG90eXBlLmFkZEltYWdlID0gZnVuY3Rpb24oIGltZyApIHtcbiAgICB2YXIgbG9hZGluZ0ltYWdlID0gbmV3IExvYWRpbmdJbWFnZSggaW1nICk7XG4gICAgdGhpcy5pbWFnZXMucHVzaCggbG9hZGluZ0ltYWdlICk7XG4gIH07XG5cbiAgSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5hZGRCYWNrZ3JvdW5kID0gZnVuY3Rpb24oIHVybCwgZWxlbSApIHtcbiAgICB2YXIgYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKCB1cmwsIGVsZW0gKTtcbiAgICB0aGlzLmltYWdlcy5wdXNoKCBiYWNrZ3JvdW5kICk7XG4gIH07XG5cbiAgSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy5wcm9ncmVzc2VkQ291bnQgPSAwO1xuICAgIHRoaXMuaGFzQW55QnJva2VuID0gZmFsc2U7XG4gICAgLy8gY29tcGxldGUgaWYgbm8gaW1hZ2VzXG4gICAgaWYgKCAhdGhpcy5pbWFnZXMubGVuZ3RoICkge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUHJvZ3Jlc3MoIGltYWdlLCBlbGVtLCBtZXNzYWdlICkge1xuICAgICAgLy8gSEFDSyAtIENocm9tZSB0cmlnZ2VycyBldmVudCBiZWZvcmUgb2JqZWN0IHByb3BlcnRpZXMgaGF2ZSBjaGFuZ2VkLiAjODNcbiAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICBfdGhpcy5wcm9ncmVzcyggaW1hZ2UsIGVsZW0sIG1lc3NhZ2UgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvciAoIHZhciBpPTA7IGkgPCB0aGlzLmltYWdlcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgIHZhciBsb2FkaW5nSW1hZ2UgPSB0aGlzLmltYWdlc1tpXTtcbiAgICAgIGxvYWRpbmdJbWFnZS5vbmNlKCAncHJvZ3Jlc3MnLCBvblByb2dyZXNzICk7XG4gICAgICBsb2FkaW5nSW1hZ2UuY2hlY2soKTtcbiAgICB9XG4gIH07XG5cbiAgSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5wcm9ncmVzcyA9IGZ1bmN0aW9uKCBpbWFnZSwgZWxlbSwgbWVzc2FnZSApIHtcbiAgICB0aGlzLnByb2dyZXNzZWRDb3VudCsrO1xuICAgIHRoaXMuaGFzQW55QnJva2VuID0gdGhpcy5oYXNBbnlCcm9rZW4gfHwgIWltYWdlLmlzTG9hZGVkO1xuICAgIC8vIHByb2dyZXNzIGV2ZW50XG4gICAgdGhpcy5lbWl0KCAncHJvZ3Jlc3MnLCB0aGlzLCBpbWFnZSwgZWxlbSApO1xuICAgIGlmICggdGhpcy5qcURlZmVycmVkICYmIHRoaXMuanFEZWZlcnJlZC5ub3RpZnkgKSB7XG4gICAgICB0aGlzLmpxRGVmZXJyZWQubm90aWZ5KCB0aGlzLCBpbWFnZSApO1xuICAgIH1cbiAgICAvLyBjaGVjayBpZiBjb21wbGV0ZWRcbiAgICBpZiAoIHRoaXMucHJvZ3Jlc3NlZENvdW50ID09IHRoaXMuaW1hZ2VzLmxlbmd0aCApIHtcbiAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICBpZiAoIHRoaXMub3B0aW9ucy5kZWJ1ZyAmJiBjb25zb2xlICkge1xuICAgICAgY29uc29sZS5sb2coICdwcm9ncmVzczogJyArIG1lc3NhZ2UsIGltYWdlLCBlbGVtICk7XG4gICAgfVxuICB9O1xuXG4gIEltYWdlc0xvYWRlZC5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXZlbnROYW1lID0gdGhpcy5oYXNBbnlCcm9rZW4gPyAnZmFpbCcgOiAnZG9uZSc7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICB0aGlzLmVtaXQoIGV2ZW50TmFtZSwgdGhpcyApO1xuICAgIHRoaXMuZW1pdCggJ2Fsd2F5cycsIHRoaXMgKTtcbiAgICBpZiAoIHRoaXMuanFEZWZlcnJlZCApIHtcbiAgICAgIHZhciBqcU1ldGhvZCA9IHRoaXMuaGFzQW55QnJva2VuID8gJ3JlamVjdCcgOiAncmVzb2x2ZSc7XG4gICAgICB0aGlzLmpxRGVmZXJyZWRbIGpxTWV0aG9kIF0oIHRoaXMgKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgZnVuY3Rpb24gTG9hZGluZ0ltYWdlKCBpbWcgKSB7XG4gICAgdGhpcy5pbWcgPSBpbWc7XG4gIH1cblxuICBMb2FkaW5nSW1hZ2UucHJvdG90eXBlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIExvYWRpbmdJbWFnZS5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBJZiBjb21wbGV0ZSBpcyB0cnVlIGFuZCBicm93c2VyIHN1cHBvcnRzIG5hdHVyYWwgc2l6ZXMsXG4gICAgLy8gdHJ5IHRvIGNoZWNrIGZvciBpbWFnZSBzdGF0dXMgbWFudWFsbHkuXG4gICAgdmFyIGlzQ29tcGxldGUgPSB0aGlzLmdldElzSW1hZ2VDb21wbGV0ZSgpO1xuICAgIGlmICggaXNDb21wbGV0ZSApIHtcbiAgICAgIC8vIHJlcG9ydCBiYXNlZCBvbiBuYXR1cmFsV2lkdGhcbiAgICAgIHRoaXMuY29uZmlybSggdGhpcy5pbWcubmF0dXJhbFdpZHRoICE9PSAwLCAnbmF0dXJhbFdpZHRoJyApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIG5vbmUgb2YgdGhlIGNoZWNrcyBhYm92ZSBtYXRjaGVkLCBzaW11bGF0ZSBsb2FkaW5nIG9uIGRldGFjaGVkIGVsZW1lbnQuXG4gICAgdGhpcy5wcm94eUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgZXZlbnRpZS5iaW5kKCB0aGlzLnByb3h5SW1hZ2UsICdsb2FkJywgdGhpcyApO1xuICAgIGV2ZW50aWUuYmluZCggdGhpcy5wcm94eUltYWdlLCAnZXJyb3InLCB0aGlzICk7XG4gICAgLy8gYmluZCB0byBpbWFnZSBhcyB3ZWxsIGZvciBGaXJlZm94LiAjMTkxXG4gICAgZXZlbnRpZS5iaW5kKCB0aGlzLmltZywgJ2xvYWQnLCB0aGlzICk7XG4gICAgZXZlbnRpZS5iaW5kKCB0aGlzLmltZywgJ2Vycm9yJywgdGhpcyApO1xuICAgIHRoaXMucHJveHlJbWFnZS5zcmMgPSB0aGlzLmltZy5zcmM7XG4gIH07XG5cbiAgTG9hZGluZ0ltYWdlLnByb3RvdHlwZS5nZXRJc0ltYWdlQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbWcuY29tcGxldGUgJiYgdGhpcy5pbWcubmF0dXJhbFdpZHRoICE9PSB1bmRlZmluZWQ7XG4gIH07XG5cbiAgTG9hZGluZ0ltYWdlLnByb3RvdHlwZS5jb25maXJtID0gZnVuY3Rpb24oIGlzTG9hZGVkLCBtZXNzYWdlICkge1xuICAgIHRoaXMuaXNMb2FkZWQgPSBpc0xvYWRlZDtcbiAgICB0aGlzLmVtaXQoICdwcm9ncmVzcycsIHRoaXMsIHRoaXMuaW1nLCBtZXNzYWdlICk7XG4gIH07XG5cbiAgLy8gLS0tLS0gZXZlbnRzIC0tLS0tIC8vXG5cbiAgLy8gdHJpZ2dlciBzcGVjaWZpZWQgaGFuZGxlciBmb3IgZXZlbnQgdHlwZVxuICBMb2FkaW5nSW1hZ2UucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICAgIHZhciBtZXRob2QgPSAnb24nICsgZXZlbnQudHlwZTtcbiAgICBpZiAoIHRoaXNbIG1ldGhvZCBdICkge1xuICAgICAgdGhpc1sgbWV0aG9kIF0oIGV2ZW50ICk7XG4gICAgfVxuICB9O1xuXG4gIExvYWRpbmdJbWFnZS5wcm90b3R5cGUub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jb25maXJtKCB0cnVlLCAnb25sb2FkJyApO1xuICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG4gIH07XG5cbiAgTG9hZGluZ0ltYWdlLnByb3RvdHlwZS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jb25maXJtKCBmYWxzZSwgJ29uZXJyb3InICk7XG4gICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbiAgfTtcblxuICBMb2FkaW5nSW1hZ2UucHJvdG90eXBlLnVuYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICAgIGV2ZW50aWUudW5iaW5kKCB0aGlzLnByb3h5SW1hZ2UsICdsb2FkJywgdGhpcyApO1xuICAgIGV2ZW50aWUudW5iaW5kKCB0aGlzLnByb3h5SW1hZ2UsICdlcnJvcicsIHRoaXMgKTtcbiAgICBldmVudGllLnVuYmluZCggdGhpcy5pbWcsICdsb2FkJywgdGhpcyApO1xuICAgIGV2ZW50aWUudW5iaW5kKCB0aGlzLmltZywgJ2Vycm9yJywgdGhpcyApO1xuICB9O1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEJhY2tncm91bmQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICBmdW5jdGlvbiBCYWNrZ3JvdW5kKCB1cmwsIGVsZW1lbnQgKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xuICB9XG5cbiAgLy8gaW5oZXJpdCBMb2FkaW5nSW1hZ2UgcHJvdG90eXBlXG4gIEJhY2tncm91bmQucHJvdG90eXBlID0gbmV3IExvYWRpbmdJbWFnZSgpO1xuXG4gIEJhY2tncm91bmQucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oKSB7XG4gICAgZXZlbnRpZS5iaW5kKCB0aGlzLmltZywgJ2xvYWQnLCB0aGlzICk7XG4gICAgZXZlbnRpZS5iaW5kKCB0aGlzLmltZywgJ2Vycm9yJywgdGhpcyApO1xuICAgIHRoaXMuaW1nLnNyYyA9IHRoaXMudXJsO1xuICAgIC8vIGNoZWNrIGlmIGltYWdlIGlzIGFscmVhZHkgY29tcGxldGVcbiAgICB2YXIgaXNDb21wbGV0ZSA9IHRoaXMuZ2V0SXNJbWFnZUNvbXBsZXRlKCk7XG4gICAgaWYgKCBpc0NvbXBsZXRlICkge1xuICAgICAgdGhpcy5jb25maXJtKCB0aGlzLmltZy5uYXR1cmFsV2lkdGggIT09IDAsICduYXR1cmFsV2lkdGgnICk7XG4gICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuICAgIH1cbiAgfTtcblxuICBCYWNrZ3JvdW5kLnByb3RvdHlwZS51bmJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgICBldmVudGllLnVuYmluZCggdGhpcy5pbWcsICdsb2FkJywgdGhpcyApO1xuICAgIGV2ZW50aWUudW5iaW5kKCB0aGlzLmltZywgJ2Vycm9yJywgdGhpcyApO1xuICB9O1xuXG4gIEJhY2tncm91bmQucHJvdG90eXBlLmNvbmZpcm0gPSBmdW5jdGlvbiggaXNMb2FkZWQsIG1lc3NhZ2UgKSB7XG4gICAgdGhpcy5pc0xvYWRlZCA9IGlzTG9hZGVkO1xuICAgIHRoaXMuZW1pdCggJ3Byb2dyZXNzJywgdGhpcywgdGhpcy5lbGVtZW50LCBtZXNzYWdlICk7XG4gIH07XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0galF1ZXJ5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgSW1hZ2VzTG9hZGVkLm1ha2VKUXVlcnlQbHVnaW4gPSBmdW5jdGlvbiggalF1ZXJ5ICkge1xuICAgIGpRdWVyeSA9IGpRdWVyeSB8fCB3aW5kb3cualF1ZXJ5O1xuICAgIGlmICggIWpRdWVyeSApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gc2V0IGxvY2FsIHZhcmlhYmxlXG4gICAgJCA9IGpRdWVyeTtcbiAgICAvLyAkKCkuaW1hZ2VzTG9hZGVkKClcbiAgICAkLmZuLmltYWdlc0xvYWRlZCA9IGZ1bmN0aW9uKCBvcHRpb25zLCBjYWxsYmFjayApIHtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBJbWFnZXNMb2FkZWQoIHRoaXMsIG9wdGlvbnMsIGNhbGxiYWNrICk7XG4gICAgICByZXR1cm4gaW5zdGFuY2UuanFEZWZlcnJlZC5wcm9taXNlKCAkKHRoaXMpICk7XG4gICAgfTtcbiAgfTtcbiAgLy8gdHJ5IG1ha2luZyBwbHVnaW5cbiAgSW1hZ2VzTG9hZGVkLm1ha2VKUXVlcnlQbHVnaW4oKTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICByZXR1cm4gSW1hZ2VzTG9hZGVkO1xuXG59KTtcbiIsIi8qZ2xvYmFsIHdpbmRvdyovXG5cbi8qKlxuICogQ2hlY2sgaWYgb2JqZWN0IGlzIGRvbSBub2RlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWxcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNOb2RlKHZhbCl7XG4gIGlmICghdmFsIHx8IHR5cGVvZiB2YWwgIT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XG4gIGlmICh3aW5kb3cgJiYgJ29iamVjdCcgPT0gdHlwZW9mIHdpbmRvdy5Ob2RlKSByZXR1cm4gdmFsIGluc3RhbmNlb2Ygd2luZG93Lk5vZGU7XG4gIHJldHVybiAnbnVtYmVyJyA9PSB0eXBlb2YgdmFsLm5vZGVUeXBlICYmICdzdHJpbmcnID09IHR5cGVvZiB2YWwubm9kZU5hbWU7XG59XG4iLCIvKipcbiAqIFN1cHBvcnRlZCBTVkcgYXR0cmlidXRlc1xuICovXG5cbmV4cG9ydHMuYXR0cmlidXRlcyA9IHtcbiAgJ2N4JzogdHJ1ZSxcbiAgJ2N5JzogdHJ1ZSxcbiAgJ2QnOiB0cnVlLFxuICAnZHgnOiB0cnVlLFxuICAnZHknOiB0cnVlLFxuICAnZmlsbCc6IHRydWUsXG4gICdmaWxsT3BhY2l0eSc6IHRydWUsXG4gICdmb250RmFtaWx5JzogdHJ1ZSxcbiAgJ2ZvbnRTaXplJzogdHJ1ZSxcbiAgJ2Z4JzogdHJ1ZSxcbiAgJ2Z5JzogdHJ1ZSxcbiAgJ2dyYWRpZW50VHJhbnNmb3JtJzogdHJ1ZSxcbiAgJ2dyYWRpZW50VW5pdHMnOiB0cnVlLFxuICAnbWFya2VyRW5kJzogdHJ1ZSxcbiAgJ21hcmtlck1pZCc6IHRydWUsXG4gICdtYXJrZXJTdGFydCc6IHRydWUsXG4gICdvZmZzZXQnOiB0cnVlLFxuICAnb3BhY2l0eSc6IHRydWUsXG4gICdwYXR0ZXJuQ29udGVudFVuaXRzJzogdHJ1ZSxcbiAgJ3BhdHRlcm5Vbml0cyc6IHRydWUsXG4gICdwb2ludHMnOiB0cnVlLFxuICAncHJlc2VydmVBc3BlY3RSYXRpbyc6IHRydWUsXG4gICdyJzogdHJ1ZSxcbiAgJ3J4JzogdHJ1ZSxcbiAgJ3J5JzogdHJ1ZSxcbiAgJ3NwcmVhZE1ldGhvZCc6IHRydWUsXG4gICdzdG9wQ29sb3InOiB0cnVlLFxuICAnc3RvcE9wYWNpdHknOiB0cnVlLFxuICAnc3Ryb2tlJzogdHJ1ZSxcbiAgJ3N0cm9rZURhc2hhcnJheSc6IHRydWUsXG4gICdzdHJva2VMaW5lY2FwJzogdHJ1ZSxcbiAgJ3N0cm9rZU9wYWNpdHknOiB0cnVlLFxuICAnc3Ryb2tlV2lkdGgnOiB0cnVlLFxuICAndGV4dEFuY2hvcic6IHRydWUsXG4gICd0cmFuc2Zvcm0nOiB0cnVlLFxuICAndmVyc2lvbic6IHRydWUsXG4gICd2aWV3Qm94JzogdHJ1ZSxcbiAgJ3gxJzogdHJ1ZSxcbiAgJ3gyJzogdHJ1ZSxcbiAgJ3gnOiB0cnVlLFxuICAneTEnOiB0cnVlLFxuICAneTInOiB0cnVlLFxuICAneSc6IHRydWVcbn1cblxuLyoqXG4gKiBBcmUgZWxlbWVudCdzIGF0dHJpYnV0ZXMgU1ZHP1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdHRyXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXR0cikge1xuICByZXR1cm4gYXR0ciBpbiBleHBvcnRzLmF0dHJpYnV0ZXNcbn1cbiIsIi8qKlxuICogU3VwcG9ydGVkIFNWRyBlbGVtZW50c1xuICpcbiAqIEB0eXBlIHtBcnJheX1cbiAqL1xuXG5leHBvcnRzLmVsZW1lbnRzID0ge1xuICAnYW5pbWF0ZSc6IHRydWUsXG4gICdjaXJjbGUnOiB0cnVlLFxuICAnZGVmcyc6IHRydWUsXG4gICdlbGxpcHNlJzogdHJ1ZSxcbiAgJ2cnOiB0cnVlLFxuICAnbGluZSc6IHRydWUsXG4gICdsaW5lYXJHcmFkaWVudCc6IHRydWUsXG4gICdtYXNrJzogdHJ1ZSxcbiAgJ3BhdGgnOiB0cnVlLFxuICAncGF0dGVybic6IHRydWUsXG4gICdwb2x5Z29uJzogdHJ1ZSxcbiAgJ3BvbHlsaW5lJzogdHJ1ZSxcbiAgJ3JhZGlhbEdyYWRpZW50JzogdHJ1ZSxcbiAgJ3JlY3QnOiB0cnVlLFxuICAnc3RvcCc6IHRydWUsXG4gICdzdmcnOiB0cnVlLFxuICAndGV4dCc6IHRydWUsXG4gICd0c3Bhbic6IHRydWVcbn1cblxuLyoqXG4gKiBJcyBlbGVtZW50J3MgbmFtZXNwYWNlIFNWRz9cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICovXG5cbmV4cG9ydHMuaXNFbGVtZW50ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUgaW4gZXhwb3J0cy5lbGVtZW50c1xufVxuIiwidmFyIHRvU3R5bGUgPSByZXF1aXJlKCd0by1zdHlsZScpLnN0cmluZ1xudmFyIGNsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJylcbnZhciBlbGVtZW50ID0gcmVxdWlyZSgndmlydHVhbC1lbGVtZW50JylcbnZhciB0eXBlID0gcmVxdWlyZSgnY29tcG9uZW50LXR5cGUnKVxudmFyIHNsaWNlID0gcmVxdWlyZSgnc2xpY2VkJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodCwgYXR0cmlidXRlcywgY2hpbGRyZW4pIHtcblxuICAvLyBBY2NvdW50IGZvciBKU1ggcHV0dGluZyB0aGUgY2hpbGRyZW4gYXMgbXVsdGlwbGUgYXJndW1lbnRzLlxuICAvLyBUaGlzIGlzIGVzc2VudGlhbGx5IGp1c3QgdGhlIEVTNiByZXN0IHBhcmFtXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1syXSkgPT09IGZhbHNlKSB7XG4gICAgY2hpbGRyZW4gPSBzbGljZShhcmd1bWVudHMsIDIpXG4gIH1cblxuICB2YXIgbm9kZSA9IGVsZW1lbnQodCwgYXR0cmlidXRlcywgY2hpbGRyZW4pXG5cbiAgaWYgKHR5cGUobm9kZS5hdHRyaWJ1dGVzLmNsYXNzKSA9PT0gJ2FycmF5Jykge1xuICAgIG5vZGUuYXR0cmlidXRlcy5jbGFzcyA9IGNsYXNzbmFtZXMuYXBwbHkobnVsbCwgbm9kZS5hdHRyaWJ1dGVzLmNsYXNzKVxuICB9XG5cbiAgaWYgKHR5cGUobm9kZS5hdHRyaWJ1dGVzLmNsYXNzKSA9PT0gJ29iamVjdCcpIHtcbiAgICBub2RlLmF0dHJpYnV0ZXMuY2xhc3MgPSBjbGFzc25hbWVzKG5vZGUuYXR0cmlidXRlcy5jbGFzcylcbiAgfVxuXG4gIGlmICh0eXBlKG5vZGUuYXR0cmlidXRlcy5zdHlsZSkgPT09ICdvYmplY3QnKSB7XG4gICAgbm9kZS5hdHRyaWJ1dGVzLnN0eWxlID0gdG9TdHlsZShub2RlLmF0dHJpYnV0ZXMuc3R5bGUpXG4gIH1cblxuICByZXR1cm4gbm9kZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIHRhcmdldCA9IHRhcmdldCB8fCB7fVxuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXVxuICAgIGlmICghc291cmNlKSBjb250aW51ZVxuXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gdGFyZ2V0W2tleV0pXG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiLyohXG4gKiBvYmplY3Qub21pdCA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvb2JqZWN0Lm9taXQ+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUgSm9uIFNjaGxpbmtlcnQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJ2lzb2JqZWN0Jyk7XG52YXIgZm9yT3duID0gcmVxdWlyZSgnZm9yLW93bicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG9taXQob2JqLCBwcm9wcykge1xuICBpZiAob2JqID09IG51bGwgfHwgIWlzT2JqZWN0KG9iaikpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBpZiAocHJvcHMgPT0gbnVsbCkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAodHlwZW9mIHByb3BzID09PSAnc3RyaW5nJykge1xuICAgIHByb3BzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICB9XG5cbiAgdmFyIG8gPSB7fTtcblxuICBpZiAoIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG87XG4gIH1cblxuICBmb3JPd24ob2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgIGlmIChwcm9wcy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICBvW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbztcbn07IiwiLyohXG4gKiBpc29iamVjdCA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvaXNvYmplY3Q+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IEpvbiBTY2hsaW5rZXJ0LCBjb250cmlidXRvcnMuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogaXMgdGhlIHZhbHVlIGFuIG9iamVjdCwgYW5kIG5vdCBhbiBhcnJheT9cbiAqXG4gKiBAcGFyYW0gIHsqfSBgdmFsdWVgXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNPYmplY3Qobykge1xuICByZXR1cm4gbyAhPSBudWxsICYmIHR5cGVvZiBvID09PSAnb2JqZWN0J1xuICAgICYmICFBcnJheS5pc0FycmF5KG8pO1xufTsiLCIoZnVuY3Rpb24gKHJvb3QsIGZhY3Rvcnkpe1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyppc3RhbmJ1bCBpZ25vcmUgbmV4dDpjYW50IHRlc3QqL1xuICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIHJvb3Qub2JqZWN0UGF0aCA9IGZhY3RvcnkoKTtcbiAgfVxufSkodGhpcywgZnVuY3Rpb24oKXtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhclxuICAgIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICBfaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4gIGZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpe1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIWlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICBmb3IgKHZhciBpIGluIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoX2hhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB0b1N0cmluZyh0eXBlKXtcbiAgICByZXR1cm4gdG9TdHIuY2FsbCh0eXBlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKXtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCB0b1N0cmluZyh2YWx1ZSkgPT09IFwiW29iamVjdCBOdW1iZXJdXCI7XG4gIH1cblxuICBmdW5jdGlvbiBpc1N0cmluZyhvYmope1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyB8fCB0b1N0cmluZyhvYmopID09PSBcIltvYmplY3QgU3RyaW5nXVwiO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNPYmplY3Qob2JqKXtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdG9TdHJpbmcob2JqKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQXJyYXkob2JqKXtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iai5sZW5ndGggPT09ICdudW1iZXInICYmIHRvU3RyaW5nKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Jvb2xlYW4ob2JqKXtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Jvb2xlYW4nIHx8IHRvU3RyaW5nKG9iaikgPT09ICdbb2JqZWN0IEJvb2xlYW5dJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEtleShrZXkpe1xuICAgIHZhciBpbnRLZXkgPSBwYXJzZUludChrZXkpO1xuICAgIGlmIChpbnRLZXkudG9TdHJpbmcoKSA9PT0ga2V5KSB7XG4gICAgICByZXR1cm4gaW50S2V5O1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0KG9iaiwgcGF0aCwgdmFsdWUsIGRvTm90UmVwbGFjZSl7XG4gICAgaWYgKGlzTnVtYmVyKHBhdGgpKSB7XG4gICAgICBwYXRoID0gW3BhdGhdO1xuICAgIH1cbiAgICBpZiAoaXNFbXB0eShwYXRoKSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgaWYgKGlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICByZXR1cm4gc2V0KG9iaiwgcGF0aC5zcGxpdCgnLicpLm1hcChnZXRLZXkpLCB2YWx1ZSwgZG9Ob3RSZXBsYWNlKTtcbiAgICB9XG4gICAgdmFyIGN1cnJlbnRQYXRoID0gcGF0aFswXTtcblxuICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdmFyIG9sZFZhbCA9IG9ialtjdXJyZW50UGF0aF07XG4gICAgICBpZiAob2xkVmFsID09PSB2b2lkIDAgfHwgIWRvTm90UmVwbGFjZSkge1xuICAgICAgICBvYmpbY3VycmVudFBhdGhdID0gdmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2xkVmFsO1xuICAgIH1cblxuICAgIGlmIChvYmpbY3VycmVudFBhdGhdID09PSB2b2lkIDApIHtcbiAgICAgIC8vY2hlY2sgaWYgd2UgYXNzdW1lIGFuIGFycmF5XG4gICAgICBpZihpc051bWJlcihwYXRoWzFdKSkge1xuICAgICAgICBvYmpbY3VycmVudFBhdGhdID0gW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmpbY3VycmVudFBhdGhdID0ge307XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNldChvYmpbY3VycmVudFBhdGhdLCBwYXRoLnNsaWNlKDEpLCB2YWx1ZSwgZG9Ob3RSZXBsYWNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbChvYmosIHBhdGgpIHtcbiAgICBpZiAoaXNOdW1iZXIocGF0aCkpIHtcbiAgICAgIHBhdGggPSBbcGF0aF07XG4gICAgfVxuXG4gICAgaWYgKGlzRW1wdHkob2JqKSkge1xuICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9XG5cbiAgICBpZiAoaXNFbXB0eShwYXRoKSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgaWYoaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgIHJldHVybiBkZWwob2JqLCBwYXRoLnNwbGl0KCcuJykpO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50UGF0aCA9IGdldEtleShwYXRoWzBdKTtcbiAgICB2YXIgb2xkVmFsID0gb2JqW2N1cnJlbnRQYXRoXTtcblxuICAgIGlmKHBhdGgubGVuZ3RoID09PSAxKSB7XG4gICAgICBpZiAob2xkVmFsICE9PSB2b2lkIDApIHtcbiAgICAgICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICAgIG9iai5zcGxpY2UoY3VycmVudFBhdGgsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBvYmpbY3VycmVudFBhdGhdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChvYmpbY3VycmVudFBhdGhdICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGRlbChvYmpbY3VycmVudFBhdGhdLCBwYXRoLnNsaWNlKDEpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgdmFyIG9iamVjdFBhdGggPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0UGF0aCkucmVkdWNlKGZ1bmN0aW9uKHByb3h5LCBwcm9wKSB7XG4gICAgICBpZiAodHlwZW9mIG9iamVjdFBhdGhbcHJvcF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJveHlbcHJvcF0gPSBvYmplY3RQYXRoW3Byb3BdLmJpbmQob2JqZWN0UGF0aCwgb2JqKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb3h5O1xuICAgIH0sIHt9KTtcbiAgfTtcblxuICBvYmplY3RQYXRoLmhhcyA9IGZ1bmN0aW9uIChvYmosIHBhdGgpIHtcbiAgICBpZiAoaXNFbXB0eShvYmopKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlzTnVtYmVyKHBhdGgpKSB7XG4gICAgICBwYXRoID0gW3BhdGhdO1xuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgIHBhdGggPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRW1wdHkocGF0aCkgfHwgcGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBqID0gcGF0aFtpXTtcbiAgICAgIGlmICgoaXNPYmplY3Qob2JqKSB8fCBpc0FycmF5KG9iaikpICYmIF9oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaikpIHtcbiAgICAgICAgb2JqID0gb2JqW2pdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIG9iamVjdFBhdGguZW5zdXJlRXhpc3RzID0gZnVuY3Rpb24gKG9iaiwgcGF0aCwgdmFsdWUpe1xuICAgIHJldHVybiBzZXQob2JqLCBwYXRoLCB2YWx1ZSwgdHJ1ZSk7XG4gIH07XG5cbiAgb2JqZWN0UGF0aC5zZXQgPSBmdW5jdGlvbiAob2JqLCBwYXRoLCB2YWx1ZSwgZG9Ob3RSZXBsYWNlKXtcbiAgICByZXR1cm4gc2V0KG9iaiwgcGF0aCwgdmFsdWUsIGRvTm90UmVwbGFjZSk7XG4gIH07XG5cbiAgb2JqZWN0UGF0aC5pbnNlcnQgPSBmdW5jdGlvbiAob2JqLCBwYXRoLCB2YWx1ZSwgYXQpe1xuICAgIHZhciBhcnIgPSBvYmplY3RQYXRoLmdldChvYmosIHBhdGgpO1xuICAgIGF0ID0gfn5hdDtcbiAgICBpZiAoIWlzQXJyYXkoYXJyKSkge1xuICAgICAgYXJyID0gW107XG4gICAgICBvYmplY3RQYXRoLnNldChvYmosIHBhdGgsIGFycik7XG4gICAgfVxuICAgIGFyci5zcGxpY2UoYXQsIDAsIHZhbHVlKTtcbiAgfTtcblxuICBvYmplY3RQYXRoLmVtcHR5ID0gZnVuY3Rpb24ob2JqLCBwYXRoKSB7XG4gICAgaWYgKGlzRW1wdHkocGF0aCkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGlmIChpc0VtcHR5KG9iaikpIHtcbiAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlLCBpO1xuICAgIGlmICghKHZhbHVlID0gb2JqZWN0UGF0aC5nZXQob2JqLCBwYXRoKSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG9iamVjdFBhdGguc2V0KG9iaiwgcGF0aCwgJycpO1xuICAgIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG9iamVjdFBhdGguc2V0KG9iaiwgcGF0aCwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gb2JqZWN0UGF0aC5zZXQob2JqLCBwYXRoLCAwKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5sZW5ndGggPSAwO1xuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBmb3IgKGkgaW4gdmFsdWUpIHtcbiAgICAgICAgaWYgKF9oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBpKSkge1xuICAgICAgICAgIGRlbGV0ZSB2YWx1ZVtpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb2JqZWN0UGF0aC5zZXQob2JqLCBwYXRoLCBudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgb2JqZWN0UGF0aC5wdXNoID0gZnVuY3Rpb24gKG9iaiwgcGF0aCAvKiwgdmFsdWVzICovKXtcbiAgICB2YXIgYXJyID0gb2JqZWN0UGF0aC5nZXQob2JqLCBwYXRoKTtcbiAgICBpZiAoIWlzQXJyYXkoYXJyKSkge1xuICAgICAgYXJyID0gW107XG4gICAgICBvYmplY3RQYXRoLnNldChvYmosIHBhdGgsIGFycik7XG4gICAgfVxuXG4gICAgYXJyLnB1c2guYXBwbHkoYXJyLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpKTtcbiAgfTtcblxuICBvYmplY3RQYXRoLmNvYWxlc2NlID0gZnVuY3Rpb24gKG9iaiwgcGF0aHMsIGRlZmF1bHRWYWx1ZSkge1xuICAgIHZhciB2YWx1ZTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXRocy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKCh2YWx1ZSA9IG9iamVjdFBhdGguZ2V0KG9iaiwgcGF0aHNbaV0pKSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICB9O1xuXG4gIG9iamVjdFBhdGguZ2V0ID0gZnVuY3Rpb24gKG9iaiwgcGF0aCwgZGVmYXVsdFZhbHVlKXtcbiAgICBpZiAoaXNOdW1iZXIocGF0aCkpIHtcbiAgICAgIHBhdGggPSBbcGF0aF07XG4gICAgfVxuICAgIGlmIChpc0VtcHR5KHBhdGgpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBpZiAoaXNFbXB0eShvYmopKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBpZiAoaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgIHJldHVybiBvYmplY3RQYXRoLmdldChvYmosIHBhdGguc3BsaXQoJy4nKSwgZGVmYXVsdFZhbHVlKTtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudFBhdGggPSBnZXRLZXkocGF0aFswXSk7XG5cbiAgICBpZiAocGF0aC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlmIChvYmpbY3VycmVudFBhdGhdID09PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmpbY3VycmVudFBhdGhdO1xuICAgIH1cblxuICAgIHJldHVybiBvYmplY3RQYXRoLmdldChvYmpbY3VycmVudFBhdGhdLCBwYXRoLnNsaWNlKDEpLCBkZWZhdWx0VmFsdWUpO1xuICB9O1xuXG4gIG9iamVjdFBhdGguZGVsID0gZnVuY3Rpb24ob2JqLCBwYXRoKSB7XG4gICAgcmV0dXJuIGRlbChvYmosIHBhdGgpO1xuICB9O1xuXG4gIHJldHVybiBvYmplY3RQYXRoO1xufSk7XG4iLCIvKipcbiAqIE91dGxheWVyIEl0ZW1cbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgICAnZXZlbnRFbWl0dGVyL0V2ZW50RW1pdHRlcicsXG4gICAgICAgICdnZXQtc2l6ZS9nZXQtc2l6ZScsXG4gICAgICAgICdnZXQtc3R5bGUtcHJvcGVydHkvZ2V0LXN0eWxlLXByb3BlcnR5JyxcbiAgICAgICAgJ2Zpenp5LXVpLXV0aWxzL3V0aWxzJ1xuICAgICAgXSxcbiAgICAgIGZ1bmN0aW9uKCBFdmVudEVtaXR0ZXIsIGdldFNpemUsIGdldFN0eWxlUHJvcGVydHksIHV0aWxzICkge1xuICAgICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBFdmVudEVtaXR0ZXIsIGdldFNpemUsIGdldFN0eWxlUHJvcGVydHksIHV0aWxzICk7XG4gICAgICB9XG4gICAgKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJ3dvbGZ5ODctZXZlbnRlbWl0dGVyJyksXG4gICAgICByZXF1aXJlKCdnZXQtc2l6ZScpLFxuICAgICAgcmVxdWlyZSgnZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5JyksXG4gICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5PdXRsYXllciA9IHt9O1xuICAgIHdpbmRvdy5PdXRsYXllci5JdGVtID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHdpbmRvdy5FdmVudEVtaXR0ZXIsXG4gICAgICB3aW5kb3cuZ2V0U2l6ZSxcbiAgICAgIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5LFxuICAgICAgd2luZG93LmZpenp5VUlVdGlsc1xuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEV2ZW50RW1pdHRlciwgZ2V0U2l6ZSwgZ2V0U3R5bGVQcm9wZXJ0eSwgdXRpbHMgKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tIGhlbHBlcnMgLS0tLS0gLy9cblxudmFyIGdldENvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZTtcbnZhciBnZXRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUgP1xuICBmdW5jdGlvbiggZWxlbSApIHtcbiAgICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZSggZWxlbSwgbnVsbCApO1xuICB9IDpcbiAgZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgcmV0dXJuIGVsZW0uY3VycmVudFN0eWxlO1xuICB9O1xuXG5cbmZ1bmN0aW9uIGlzRW1wdHlPYmooIG9iaiApIHtcbiAgZm9yICggdmFyIHByb3AgaW4gb2JqICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBwcm9wID0gbnVsbDtcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIENTUzMgc3VwcG9ydCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG52YXIgdHJhbnNpdGlvblByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNpdGlvbicpO1xudmFyIHRyYW5zZm9ybVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJyk7XG52YXIgc3VwcG9ydHNDU1MzID0gdHJhbnNpdGlvblByb3BlcnR5ICYmIHRyYW5zZm9ybVByb3BlcnR5O1xudmFyIGlzM2QgPSAhIWdldFN0eWxlUHJvcGVydHkoJ3BlcnNwZWN0aXZlJyk7XG5cbnZhciB0cmFuc2l0aW9uRW5kRXZlbnQgPSB7XG4gIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgTW96VHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnLFxuICBPVHJhbnNpdGlvbjogJ290cmFuc2l0aW9uZW5kJyxcbiAgdHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnXG59WyB0cmFuc2l0aW9uUHJvcGVydHkgXTtcblxuLy8gcHJvcGVydGllcyB0aGF0IGNvdWxkIGhhdmUgdmVuZG9yIHByZWZpeFxudmFyIHByZWZpeGFibGVQcm9wZXJ0aWVzID0gW1xuICAndHJhbnNmb3JtJyxcbiAgJ3RyYW5zaXRpb24nLFxuICAndHJhbnNpdGlvbkR1cmF0aW9uJyxcbiAgJ3RyYW5zaXRpb25Qcm9wZXJ0eSdcbl07XG5cbi8vIGNhY2hlIGFsbCB2ZW5kb3IgcHJvcGVydGllc1xudmFyIHZlbmRvclByb3BlcnRpZXMgPSAoIGZ1bmN0aW9uKCkge1xuICB2YXIgY2FjaGUgPSB7fTtcbiAgZm9yICggdmFyIGk9MCwgbGVuID0gcHJlZml4YWJsZVByb3BlcnRpZXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgdmFyIHByb3AgPSBwcmVmaXhhYmxlUHJvcGVydGllc1tpXTtcbiAgICB2YXIgc3VwcG9ydGVkUHJvcCA9IGdldFN0eWxlUHJvcGVydHkoIHByb3AgKTtcbiAgICBpZiAoIHN1cHBvcnRlZFByb3AgJiYgc3VwcG9ydGVkUHJvcCAhPT0gcHJvcCApIHtcbiAgICAgIGNhY2hlWyBwcm9wIF0gPSBzdXBwb3J0ZWRQcm9wO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2FjaGU7XG59KSgpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJdGVtIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIEl0ZW0oIGVsZW1lbnQsIGxheW91dCApIHtcbiAgaWYgKCAhZWxlbWVudCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAvLyBwYXJlbnQgbGF5b3V0IGNsYXNzLCBpLmUuIE1hc29ucnksIElzb3RvcGUsIG9yIFBhY2tlcnlcbiAgdGhpcy5sYXlvdXQgPSBsYXlvdXQ7XG4gIHRoaXMucG9zaXRpb24gPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgdGhpcy5fY3JlYXRlKCk7XG59XG5cbi8vIGluaGVyaXQgRXZlbnRFbWl0dGVyXG51dGlscy5leHRlbmQoIEl0ZW0ucHJvdG90eXBlLCBFdmVudEVtaXR0ZXIucHJvdG90eXBlICk7XG5cbkl0ZW0ucHJvdG90eXBlLl9jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gdHJhbnNpdGlvbiBvYmplY3RzXG4gIHRoaXMuX3RyYW5zbiA9IHtcbiAgICBpbmdQcm9wZXJ0aWVzOiB7fSxcbiAgICBjbGVhbjoge30sXG4gICAgb25FbmQ6IHt9XG4gIH07XG5cbiAgdGhpcy5jc3Moe1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gIH0pO1xufTtcblxuLy8gdHJpZ2dlciBzcGVjaWZpZWQgaGFuZGxlciBmb3IgZXZlbnQgdHlwZVxuSXRlbS5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciBtZXRob2QgPSAnb24nICsgZXZlbnQudHlwZTtcbiAgaWYgKCB0aGlzWyBtZXRob2QgXSApIHtcbiAgICB0aGlzWyBtZXRob2QgXSggZXZlbnQgKTtcbiAgfVxufTtcblxuSXRlbS5wcm90b3R5cGUuZ2V0U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNpemUgPSBnZXRTaXplKCB0aGlzLmVsZW1lbnQgKTtcbn07XG5cbi8qKlxuICogYXBwbHkgQ1NTIHN0eWxlcyB0byBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gc3R5bGVcbiAqL1xuSXRlbS5wcm90b3R5cGUuY3NzID0gZnVuY3Rpb24oIHN0eWxlICkge1xuICB2YXIgZWxlbVN0eWxlID0gdGhpcy5lbGVtZW50LnN0eWxlO1xuXG4gIGZvciAoIHZhciBwcm9wIGluIHN0eWxlICkge1xuICAgIC8vIHVzZSB2ZW5kb3IgcHJvcGVydHkgaWYgYXZhaWxhYmxlXG4gICAgdmFyIHN1cHBvcnRlZFByb3AgPSB2ZW5kb3JQcm9wZXJ0aWVzWyBwcm9wIF0gfHwgcHJvcDtcbiAgICBlbGVtU3R5bGVbIHN1cHBvcnRlZFByb3AgXSA9IHN0eWxlWyBwcm9wIF07XG4gIH1cbn07XG5cbiAvLyBtZWFzdXJlIHBvc2l0aW9uLCBhbmQgc2V0cyBpdFxuSXRlbS5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHN0eWxlID0gZ2V0U3R5bGUoIHRoaXMuZWxlbWVudCApO1xuICB2YXIgbGF5b3V0T3B0aW9ucyA9IHRoaXMubGF5b3V0Lm9wdGlvbnM7XG4gIHZhciBpc09yaWdpbkxlZnQgPSBsYXlvdXRPcHRpb25zLmlzT3JpZ2luTGVmdDtcbiAgdmFyIGlzT3JpZ2luVG9wID0gbGF5b3V0T3B0aW9ucy5pc09yaWdpblRvcDtcbiAgdmFyIHhWYWx1ZSA9IHN0eWxlWyBpc09yaWdpbkxlZnQgPyAnbGVmdCcgOiAncmlnaHQnIF07XG4gIHZhciB5VmFsdWUgPSBzdHlsZVsgaXNPcmlnaW5Ub3AgPyAndG9wJyA6ICdib3R0b20nIF07XG4gIC8vIGNvbnZlcnQgcGVyY2VudCB0byBwaXhlbHNcbiAgdmFyIGxheW91dFNpemUgPSB0aGlzLmxheW91dC5zaXplO1xuICB2YXIgeCA9IHhWYWx1ZS5pbmRleE9mKCclJykgIT0gLTEgP1xuICAgICggcGFyc2VGbG9hdCggeFZhbHVlICkgLyAxMDAgKSAqIGxheW91dFNpemUud2lkdGggOiBwYXJzZUludCggeFZhbHVlLCAxMCApO1xuICB2YXIgeSA9IHlWYWx1ZS5pbmRleE9mKCclJykgIT0gLTEgP1xuICAgICggcGFyc2VGbG9hdCggeVZhbHVlICkgLyAxMDAgKSAqIGxheW91dFNpemUuaGVpZ2h0IDogcGFyc2VJbnQoIHlWYWx1ZSwgMTAgKTtcblxuICAvLyBjbGVhbiB1cCAnYXV0bycgb3Igb3RoZXIgbm9uLWludGVnZXIgdmFsdWVzXG4gIHggPSBpc05hTiggeCApID8gMCA6IHg7XG4gIHkgPSBpc05hTiggeSApID8gMCA6IHk7XG4gIC8vIHJlbW92ZSBwYWRkaW5nIGZyb20gbWVhc3VyZW1lbnRcbiAgeCAtPSBpc09yaWdpbkxlZnQgPyBsYXlvdXRTaXplLnBhZGRpbmdMZWZ0IDogbGF5b3V0U2l6ZS5wYWRkaW5nUmlnaHQ7XG4gIHkgLT0gaXNPcmlnaW5Ub3AgPyBsYXlvdXRTaXplLnBhZGRpbmdUb3AgOiBsYXlvdXRTaXplLnBhZGRpbmdCb3R0b207XG5cbiAgdGhpcy5wb3NpdGlvbi54ID0geDtcbiAgdGhpcy5wb3NpdGlvbi55ID0geTtcbn07XG5cbi8vIHNldCBzZXR0bGVkIHBvc2l0aW9uLCBhcHBseSBwYWRkaW5nXG5JdGVtLnByb3RvdHlwZS5sYXlvdXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbGF5b3V0U2l6ZSA9IHRoaXMubGF5b3V0LnNpemU7XG4gIHZhciBsYXlvdXRPcHRpb25zID0gdGhpcy5sYXlvdXQub3B0aW9ucztcbiAgdmFyIHN0eWxlID0ge307XG5cbiAgLy8geFxuICB2YXIgeFBhZGRpbmcgPSBsYXlvdXRPcHRpb25zLmlzT3JpZ2luTGVmdCA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0JztcbiAgdmFyIHhQcm9wZXJ0eSA9IGxheW91dE9wdGlvbnMuaXNPcmlnaW5MZWZ0ID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgdmFyIHhSZXNldFByb3BlcnR5ID0gbGF5b3V0T3B0aW9ucy5pc09yaWdpbkxlZnQgPyAncmlnaHQnIDogJ2xlZnQnO1xuXG4gIHZhciB4ID0gdGhpcy5wb3NpdGlvbi54ICsgbGF5b3V0U2l6ZVsgeFBhZGRpbmcgXTtcbiAgLy8gc2V0IGluIHBlcmNlbnRhZ2Ugb3IgcGl4ZWxzXG4gIHN0eWxlWyB4UHJvcGVydHkgXSA9IHRoaXMuZ2V0WFZhbHVlKCB4ICk7XG4gIC8vIHJlc2V0IG90aGVyIHByb3BlcnR5XG4gIHN0eWxlWyB4UmVzZXRQcm9wZXJ0eSBdID0gJyc7XG5cbiAgLy8geVxuICB2YXIgeVBhZGRpbmcgPSBsYXlvdXRPcHRpb25zLmlzT3JpZ2luVG9wID8gJ3BhZGRpbmdUb3AnIDogJ3BhZGRpbmdCb3R0b20nO1xuICB2YXIgeVByb3BlcnR5ID0gbGF5b3V0T3B0aW9ucy5pc09yaWdpblRvcCA/ICd0b3AnIDogJ2JvdHRvbSc7XG4gIHZhciB5UmVzZXRQcm9wZXJ0eSA9IGxheW91dE9wdGlvbnMuaXNPcmlnaW5Ub3AgPyAnYm90dG9tJyA6ICd0b3AnO1xuXG4gIHZhciB5ID0gdGhpcy5wb3NpdGlvbi55ICsgbGF5b3V0U2l6ZVsgeVBhZGRpbmcgXTtcbiAgLy8gc2V0IGluIHBlcmNlbnRhZ2Ugb3IgcGl4ZWxzXG4gIHN0eWxlWyB5UHJvcGVydHkgXSA9IHRoaXMuZ2V0WVZhbHVlKCB5ICk7XG4gIC8vIHJlc2V0IG90aGVyIHByb3BlcnR5XG4gIHN0eWxlWyB5UmVzZXRQcm9wZXJ0eSBdID0gJyc7XG5cbiAgdGhpcy5jc3MoIHN0eWxlICk7XG4gIHRoaXMuZW1pdEV2ZW50KCAnbGF5b3V0JywgWyB0aGlzIF0gKTtcbn07XG5cbkl0ZW0ucHJvdG90eXBlLmdldFhWYWx1ZSA9IGZ1bmN0aW9uKCB4ICkge1xuICB2YXIgbGF5b3V0T3B0aW9ucyA9IHRoaXMubGF5b3V0Lm9wdGlvbnM7XG4gIHJldHVybiBsYXlvdXRPcHRpb25zLnBlcmNlbnRQb3NpdGlvbiAmJiAhbGF5b3V0T3B0aW9ucy5pc0hvcml6b250YWwgP1xuICAgICggKCB4IC8gdGhpcy5sYXlvdXQuc2l6ZS53aWR0aCApICogMTAwICkgKyAnJScgOiB4ICsgJ3B4Jztcbn07XG5cbkl0ZW0ucHJvdG90eXBlLmdldFlWYWx1ZSA9IGZ1bmN0aW9uKCB5ICkge1xuICB2YXIgbGF5b3V0T3B0aW9ucyA9IHRoaXMubGF5b3V0Lm9wdGlvbnM7XG4gIHJldHVybiBsYXlvdXRPcHRpb25zLnBlcmNlbnRQb3NpdGlvbiAmJiBsYXlvdXRPcHRpb25zLmlzSG9yaXpvbnRhbCA/XG4gICAgKCAoIHkgLyB0aGlzLmxheW91dC5zaXplLmhlaWdodCApICogMTAwICkgKyAnJScgOiB5ICsgJ3B4Jztcbn07XG5cblxuSXRlbS5wcm90b3R5cGUuX3RyYW5zaXRpb25UbyA9IGZ1bmN0aW9uKCB4LCB5ICkge1xuICB0aGlzLmdldFBvc2l0aW9uKCk7XG4gIC8vIGdldCBjdXJyZW50IHggJiB5IGZyb20gdG9wL2xlZnRcbiAgdmFyIGN1clggPSB0aGlzLnBvc2l0aW9uLng7XG4gIHZhciBjdXJZID0gdGhpcy5wb3NpdGlvbi55O1xuXG4gIHZhciBjb21wYXJlWCA9IHBhcnNlSW50KCB4LCAxMCApO1xuICB2YXIgY29tcGFyZVkgPSBwYXJzZUludCggeSwgMTAgKTtcbiAgdmFyIGRpZE5vdE1vdmUgPSBjb21wYXJlWCA9PT0gdGhpcy5wb3NpdGlvbi54ICYmIGNvbXBhcmVZID09PSB0aGlzLnBvc2l0aW9uLnk7XG5cbiAgLy8gc2F2ZSBlbmQgcG9zaXRpb25cbiAgdGhpcy5zZXRQb3NpdGlvbiggeCwgeSApO1xuXG4gIC8vIGlmIGRpZCBub3QgbW92ZSBhbmQgbm90IHRyYW5zaXRpb25pbmcsIGp1c3QgZ28gdG8gbGF5b3V0XG4gIGlmICggZGlkTm90TW92ZSAmJiAhdGhpcy5pc1RyYW5zaXRpb25pbmcgKSB7XG4gICAgdGhpcy5sYXlvdXRQb3NpdGlvbigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0cmFuc1ggPSB4IC0gY3VyWDtcbiAgdmFyIHRyYW5zWSA9IHkgLSBjdXJZO1xuICB2YXIgdHJhbnNpdGlvblN0eWxlID0ge307XG4gIHRyYW5zaXRpb25TdHlsZS50cmFuc2Zvcm0gPSB0aGlzLmdldFRyYW5zbGF0ZSggdHJhbnNYLCB0cmFuc1kgKTtcblxuICB0aGlzLnRyYW5zaXRpb24oe1xuICAgIHRvOiB0cmFuc2l0aW9uU3R5bGUsXG4gICAgb25UcmFuc2l0aW9uRW5kOiB7XG4gICAgICB0cmFuc2Zvcm06IHRoaXMubGF5b3V0UG9zaXRpb25cbiAgICB9LFxuICAgIGlzQ2xlYW5pbmc6IHRydWVcbiAgfSk7XG59O1xuXG5JdGVtLnByb3RvdHlwZS5nZXRUcmFuc2xhdGUgPSBmdW5jdGlvbiggeCwgeSApIHtcbiAgLy8gZmxpcCBjb29yaWRpbmF0ZXMgaWYgb3JpZ2luIG9uIHJpZ2h0IG9yIGJvdHRvbVxuICB2YXIgbGF5b3V0T3B0aW9ucyA9IHRoaXMubGF5b3V0Lm9wdGlvbnM7XG4gIHggPSBsYXlvdXRPcHRpb25zLmlzT3JpZ2luTGVmdCA/IHggOiAteDtcbiAgeSA9IGxheW91dE9wdGlvbnMuaXNPcmlnaW5Ub3AgPyB5IDogLXk7XG5cbiAgaWYgKCBpczNkICkge1xuICAgIHJldHVybiAndHJhbnNsYXRlM2QoJyArIHggKyAncHgsICcgKyB5ICsgJ3B4LCAwKSc7XG4gIH1cblxuICByZXR1cm4gJ3RyYW5zbGF0ZSgnICsgeCArICdweCwgJyArIHkgKyAncHgpJztcbn07XG5cbi8vIG5vbiB0cmFuc2l0aW9uICsgdHJhbnNmb3JtIHN1cHBvcnRcbkl0ZW0ucHJvdG90eXBlLmdvVG8gPSBmdW5jdGlvbiggeCwgeSApIHtcbiAgdGhpcy5zZXRQb3NpdGlvbiggeCwgeSApO1xuICB0aGlzLmxheW91dFBvc2l0aW9uKCk7XG59O1xuXG4vLyB1c2UgdHJhbnNpdGlvbiBhbmQgdHJhbnNmb3JtcyBpZiBzdXBwb3J0ZWRcbkl0ZW0ucHJvdG90eXBlLm1vdmVUbyA9IHN1cHBvcnRzQ1NTMyA/XG4gIEl0ZW0ucHJvdG90eXBlLl90cmFuc2l0aW9uVG8gOiBJdGVtLnByb3RvdHlwZS5nb1RvO1xuXG5JdGVtLnByb3RvdHlwZS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCB4LCB5ICkge1xuICB0aGlzLnBvc2l0aW9uLnggPSBwYXJzZUludCggeCwgMTAgKTtcbiAgdGhpcy5wb3NpdGlvbi55ID0gcGFyc2VJbnQoIHksIDEwICk7XG59O1xuXG4vLyAtLS0tLSB0cmFuc2l0aW9uIC0tLS0tIC8vXG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IHN0eWxlIC0gQ1NTXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvblRyYW5zaXRpb25FbmRcbiAqL1xuXG4vLyBub24gdHJhbnNpdGlvbiwganVzdCB0cmlnZ2VyIGNhbGxiYWNrXG5JdGVtLnByb3RvdHlwZS5fbm9uVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCBhcmdzICkge1xuICB0aGlzLmNzcyggYXJncy50byApO1xuICBpZiAoIGFyZ3MuaXNDbGVhbmluZyApIHtcbiAgICB0aGlzLl9yZW1vdmVTdHlsZXMoIGFyZ3MudG8gKTtcbiAgfVxuICBmb3IgKCB2YXIgcHJvcCBpbiBhcmdzLm9uVHJhbnNpdGlvbkVuZCApIHtcbiAgICBhcmdzLm9uVHJhbnNpdGlvbkVuZFsgcHJvcCBdLmNhbGwoIHRoaXMgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBwcm9wZXIgdHJhbnNpdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGFyZ3MgLSBhcmd1bWVudHNcbiAqICAgQHBhcmFtIHtPYmplY3R9IHRvIC0gc3R5bGUgdG8gdHJhbnNpdGlvbiB0b1xuICogICBAcGFyYW0ge09iamVjdH0gZnJvbSAtIHN0eWxlIHRvIHN0YXJ0IHRyYW5zaXRpb24gZnJvbVxuICogICBAcGFyYW0ge0Jvb2xlYW59IGlzQ2xlYW5pbmcgLSByZW1vdmVzIHRyYW5zaXRpb24gc3R5bGVzIGFmdGVyIHRyYW5zaXRpb25cbiAqICAgQHBhcmFtIHtGdW5jdGlvbn0gb25UcmFuc2l0aW9uRW5kIC0gY2FsbGJhY2tcbiAqL1xuSXRlbS5wcm90b3R5cGUuX3RyYW5zaXRpb24gPSBmdW5jdGlvbiggYXJncyApIHtcbiAgLy8gcmVkaXJlY3QgdG8gbm9uVHJhbnNpdGlvbiBpZiBubyB0cmFuc2l0aW9uIGR1cmF0aW9uXG4gIGlmICggIXBhcnNlRmxvYXQoIHRoaXMubGF5b3V0Lm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uICkgKSB7XG4gICAgdGhpcy5fbm9uVHJhbnNpdGlvbiggYXJncyApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfdHJhbnNpdGlvbiA9IHRoaXMuX3RyYW5zbjtcbiAgLy8ga2VlcCB0cmFjayBvZiBvblRyYW5zaXRpb25FbmQgY2FsbGJhY2sgYnkgY3NzIHByb3BlcnR5XG4gIGZvciAoIHZhciBwcm9wIGluIGFyZ3Mub25UcmFuc2l0aW9uRW5kICkge1xuICAgIF90cmFuc2l0aW9uLm9uRW5kWyBwcm9wIF0gPSBhcmdzLm9uVHJhbnNpdGlvbkVuZFsgcHJvcCBdO1xuICB9XG4gIC8vIGtlZXAgdHJhY2sgb2YgcHJvcGVydGllcyB0aGF0IGFyZSB0cmFuc2l0aW9uaW5nXG4gIGZvciAoIHByb3AgaW4gYXJncy50byApIHtcbiAgICBfdHJhbnNpdGlvbi5pbmdQcm9wZXJ0aWVzWyBwcm9wIF0gPSB0cnVlO1xuICAgIC8vIGtlZXAgdHJhY2sgb2YgcHJvcGVydGllcyB0byBjbGVhbiB1cCB3aGVuIHRyYW5zaXRpb24gaXMgZG9uZVxuICAgIGlmICggYXJncy5pc0NsZWFuaW5nICkge1xuICAgICAgX3RyYW5zaXRpb24uY2xlYW5bIHByb3AgXSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLy8gc2V0IGZyb20gc3R5bGVzXG4gIGlmICggYXJncy5mcm9tICkge1xuICAgIHRoaXMuY3NzKCBhcmdzLmZyb20gKTtcbiAgICAvLyBmb3JjZSByZWRyYXcuIGh0dHA6Ly9ibG9nLmFsZXhtYWNjYXcuY29tL2Nzcy10cmFuc2l0aW9uc1xuICAgIHZhciBoID0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAvLyBoYWNrIGZvciBKU0hpbnQgdG8gaHVzaCBhYm91dCB1bnVzZWQgdmFyXG4gICAgaCA9IG51bGw7XG4gIH1cbiAgLy8gZW5hYmxlIHRyYW5zaXRpb25cbiAgdGhpcy5lbmFibGVUcmFuc2l0aW9uKCBhcmdzLnRvICk7XG4gIC8vIHNldCBzdHlsZXMgdGhhdCBhcmUgdHJhbnNpdGlvbmluZ1xuICB0aGlzLmNzcyggYXJncy50byApO1xuXG4gIHRoaXMuaXNUcmFuc2l0aW9uaW5nID0gdHJ1ZTtcblxufTtcblxuLy8gZGFzaCBiZWZvcmUgYWxsIGNhcCBsZXR0ZXJzLCBpbmNsdWRpbmcgZmlyc3QgZm9yXG4vLyBXZWJraXRUcmFuc2Zvcm0gPT4gLXdlYmtpdC10cmFuc2Zvcm1cbmZ1bmN0aW9uIHRvRGFzaGVkQWxsKCBzdHIgKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSggLyhbQS1aXSkvZywgZnVuY3Rpb24oICQxICkge1xuICAgIHJldHVybiAnLScgKyAkMS50b0xvd2VyQ2FzZSgpO1xuICB9KTtcbn1cblxudmFyIHRyYW5zaXRpb25Qcm9wcyA9ICdvcGFjaXR5LCcgK1xuICB0b0Rhc2hlZEFsbCggdmVuZG9yUHJvcGVydGllcy50cmFuc2Zvcm0gfHwgJ3RyYW5zZm9ybScgKTtcblxuSXRlbS5wcm90b3R5cGUuZW5hYmxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKC8qIHN0eWxlICovKSB7XG4gIC8vIEhBQ0sgY2hhbmdpbmcgdHJhbnNpdGlvblByb3BlcnR5IGR1cmluZyBhIHRyYW5zaXRpb25cbiAgLy8gd2lsbCBjYXVzZSB0cmFuc2l0aW9uIHRvIGp1bXBcbiAgaWYgKCB0aGlzLmlzVHJhbnNpdGlvbmluZyApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBtYWtlIGB0cmFuc2l0aW9uOiBmb28sIGJhciwgYmF6YCBmcm9tIHN0eWxlIG9iamVjdFxuICAvLyBIQUNLIHVuLWNvbW1lbnQgdGhpcyB3aGVuIGVuYWJsZVRyYW5zaXRpb24gY2FuIHdvcmtcbiAgLy8gd2hpbGUgYSB0cmFuc2l0aW9uIGlzIGhhcHBlbmluZ1xuICAvLyB2YXIgdHJhbnNpdGlvblZhbHVlcyA9IFtdO1xuICAvLyBmb3IgKCB2YXIgcHJvcCBpbiBzdHlsZSApIHtcbiAgLy8gICAvLyBkYXNoLWlmeSBjYW1lbENhc2VkIHByb3BlcnRpZXMgbGlrZSBXZWJraXRUcmFuc2l0aW9uXG4gIC8vICAgcHJvcCA9IHZlbmRvclByb3BlcnRpZXNbIHByb3AgXSB8fCBwcm9wO1xuICAvLyAgIHRyYW5zaXRpb25WYWx1ZXMucHVzaCggdG9EYXNoZWRBbGwoIHByb3AgKSApO1xuICAvLyB9XG4gIC8vIGVuYWJsZSB0cmFuc2l0aW9uIHN0eWxlc1xuICB0aGlzLmNzcyh7XG4gICAgdHJhbnNpdGlvblByb3BlcnR5OiB0cmFuc2l0aW9uUHJvcHMsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0aGlzLmxheW91dC5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvblxuICB9KTtcbiAgLy8gbGlzdGVuIGZvciB0cmFuc2l0aW9uIGVuZCBldmVudFxuICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggdHJhbnNpdGlvbkVuZEV2ZW50LCB0aGlzLCBmYWxzZSApO1xufTtcblxuSXRlbS5wcm90b3R5cGUudHJhbnNpdGlvbiA9IEl0ZW0ucHJvdG90eXBlWyB0cmFuc2l0aW9uUHJvcGVydHkgPyAnX3RyYW5zaXRpb24nIDogJ19ub25UcmFuc2l0aW9uJyBdO1xuXG4vLyAtLS0tLSBldmVudHMgLS0tLS0gLy9cblxuSXRlbS5wcm90b3R5cGUub253ZWJraXRUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB0aGlzLm9udHJhbnNpdGlvbmVuZCggZXZlbnQgKTtcbn07XG5cbkl0ZW0ucHJvdG90eXBlLm9ub3RyYW5zaXRpb25lbmQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHRoaXMub250cmFuc2l0aW9uZW5kKCBldmVudCApO1xufTtcblxuLy8gcHJvcGVydGllcyB0aGF0IEkgbXVuZ2UgdG8gbWFrZSBteSBsaWZlIGVhc2llclxudmFyIGRhc2hlZFZlbmRvclByb3BlcnRpZXMgPSB7XG4gICctd2Via2l0LXRyYW5zZm9ybSc6ICd0cmFuc2Zvcm0nLFxuICAnLW1vei10cmFuc2Zvcm0nOiAndHJhbnNmb3JtJyxcbiAgJy1vLXRyYW5zZm9ybSc6ICd0cmFuc2Zvcm0nXG59O1xuXG5JdGVtLnByb3RvdHlwZS5vbnRyYW5zaXRpb25lbmQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIC8vIGRpc3JlZ2FyZCBidWJibGVkIGV2ZW50cyBmcm9tIGNoaWxkcmVuXG4gIGlmICggZXZlbnQudGFyZ2V0ICE9PSB0aGlzLmVsZW1lbnQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBfdHJhbnNpdGlvbiA9IHRoaXMuX3RyYW5zbjtcbiAgLy8gZ2V0IHByb3BlcnR5IG5hbWUgb2YgdHJhbnNpdGlvbmVkIHByb3BlcnR5LCBjb252ZXJ0IHRvIHByZWZpeC1mcmVlXG4gIHZhciBwcm9wZXJ0eU5hbWUgPSBkYXNoZWRWZW5kb3JQcm9wZXJ0aWVzWyBldmVudC5wcm9wZXJ0eU5hbWUgXSB8fCBldmVudC5wcm9wZXJ0eU5hbWU7XG5cbiAgLy8gcmVtb3ZlIHByb3BlcnR5IHRoYXQgaGFzIGNvbXBsZXRlZCB0cmFuc2l0aW9uaW5nXG4gIGRlbGV0ZSBfdHJhbnNpdGlvbi5pbmdQcm9wZXJ0aWVzWyBwcm9wZXJ0eU5hbWUgXTtcbiAgLy8gY2hlY2sgaWYgYW55IHByb3BlcnRpZXMgYXJlIHN0aWxsIHRyYW5zaXRpb25pbmdcbiAgaWYgKCBpc0VtcHR5T2JqKCBfdHJhbnNpdGlvbi5pbmdQcm9wZXJ0aWVzICkgKSB7XG4gICAgLy8gYWxsIHByb3BlcnRpZXMgaGF2ZSBjb21wbGV0ZWQgdHJhbnNpdGlvbmluZ1xuICAgIHRoaXMuZGlzYWJsZVRyYW5zaXRpb24oKTtcbiAgfVxuICAvLyBjbGVhbiBzdHlsZVxuICBpZiAoIHByb3BlcnR5TmFtZSBpbiBfdHJhbnNpdGlvbi5jbGVhbiApIHtcbiAgICAvLyBjbGVhbiB1cCBzdHlsZVxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVsgZXZlbnQucHJvcGVydHlOYW1lIF0gPSAnJztcbiAgICBkZWxldGUgX3RyYW5zaXRpb24uY2xlYW5bIHByb3BlcnR5TmFtZSBdO1xuICB9XG4gIC8vIHRyaWdnZXIgb25UcmFuc2l0aW9uRW5kIGNhbGxiYWNrXG4gIGlmICggcHJvcGVydHlOYW1lIGluIF90cmFuc2l0aW9uLm9uRW5kICkge1xuICAgIHZhciBvblRyYW5zaXRpb25FbmQgPSBfdHJhbnNpdGlvbi5vbkVuZFsgcHJvcGVydHlOYW1lIF07XG4gICAgb25UcmFuc2l0aW9uRW5kLmNhbGwoIHRoaXMgKTtcbiAgICBkZWxldGUgX3RyYW5zaXRpb24ub25FbmRbIHByb3BlcnR5TmFtZSBdO1xuICB9XG5cbiAgdGhpcy5lbWl0RXZlbnQoICd0cmFuc2l0aW9uRW5kJywgWyB0aGlzIF0gKTtcbn07XG5cbkl0ZW0ucHJvdG90eXBlLmRpc2FibGVUcmFuc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmVtb3ZlVHJhbnNpdGlvblN0eWxlcygpO1xuICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggdHJhbnNpdGlvbkVuZEV2ZW50LCB0aGlzLCBmYWxzZSApO1xuICB0aGlzLmlzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xufTtcblxuLyoqXG4gKiByZW1vdmVzIHN0eWxlIHByb3BlcnR5IGZyb20gZWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IHN0eWxlXG4qKi9cbkl0ZW0ucHJvdG90eXBlLl9yZW1vdmVTdHlsZXMgPSBmdW5jdGlvbiggc3R5bGUgKSB7XG4gIC8vIGNsZWFuIHVwIHRyYW5zaXRpb24gc3R5bGVzXG4gIHZhciBjbGVhblN0eWxlID0ge307XG4gIGZvciAoIHZhciBwcm9wIGluIHN0eWxlICkge1xuICAgIGNsZWFuU3R5bGVbIHByb3AgXSA9ICcnO1xuICB9XG4gIHRoaXMuY3NzKCBjbGVhblN0eWxlICk7XG59O1xuXG52YXIgY2xlYW5UcmFuc2l0aW9uU3R5bGUgPSB7XG4gIHRyYW5zaXRpb25Qcm9wZXJ0eTogJycsXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogJydcbn07XG5cbkl0ZW0ucHJvdG90eXBlLnJlbW92ZVRyYW5zaXRpb25TdHlsZXMgPSBmdW5jdGlvbigpIHtcbiAgLy8gcmVtb3ZlIHRyYW5zaXRpb25cbiAgdGhpcy5jc3MoIGNsZWFuVHJhbnNpdGlvblN0eWxlICk7XG59O1xuXG4vLyAtLS0tLSBzaG93L2hpZGUvcmVtb3ZlIC0tLS0tIC8vXG5cbi8vIHJlbW92ZSBlbGVtZW50IGZyb20gRE9NXG5JdGVtLnByb3RvdHlwZS5yZW1vdmVFbGVtID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCB0aGlzLmVsZW1lbnQgKTtcbiAgLy8gcmVtb3ZlIGRpc3BsYXk6IG5vbmVcbiAgdGhpcy5jc3MoeyBkaXNwbGF5OiAnJyB9KTtcbiAgdGhpcy5lbWl0RXZlbnQoICdyZW1vdmUnLCBbIHRoaXMgXSApO1xufTtcblxuSXRlbS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gIC8vIGp1c3QgcmVtb3ZlIGVsZW1lbnQgaWYgbm8gdHJhbnNpdGlvbiBzdXBwb3J0IG9yIG5vIHRyYW5zaXRpb25cbiAgaWYgKCAhdHJhbnNpdGlvblByb3BlcnR5IHx8ICFwYXJzZUZsb2F0KCB0aGlzLmxheW91dC5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbiApICkge1xuICAgIHRoaXMucmVtb3ZlRWxlbSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHN0YXJ0IHRyYW5zaXRpb25cbiAgdmFyIF90aGlzID0gdGhpcztcbiAgdGhpcy5vbmNlKCAndHJhbnNpdGlvbkVuZCcsIGZ1bmN0aW9uKCkge1xuICAgIF90aGlzLnJlbW92ZUVsZW0oKTtcbiAgfSk7XG4gIHRoaXMuaGlkZSgpO1xufTtcblxuSXRlbS5wcm90b3R5cGUucmV2ZWFsID0gZnVuY3Rpb24oKSB7XG4gIGRlbGV0ZSB0aGlzLmlzSGlkZGVuO1xuICAvLyByZW1vdmUgZGlzcGxheTogbm9uZVxuICB0aGlzLmNzcyh7IGRpc3BsYXk6ICcnIH0pO1xuXG4gIHZhciBvcHRpb25zID0gdGhpcy5sYXlvdXQub3B0aW9ucztcblxuICB2YXIgb25UcmFuc2l0aW9uRW5kID0ge307XG4gIHZhciB0cmFuc2l0aW9uRW5kUHJvcGVydHkgPSB0aGlzLmdldEhpZGVSZXZlYWxUcmFuc2l0aW9uRW5kUHJvcGVydHkoJ3Zpc2libGVTdHlsZScpO1xuICBvblRyYW5zaXRpb25FbmRbIHRyYW5zaXRpb25FbmRQcm9wZXJ0eSBdID0gdGhpcy5vblJldmVhbFRyYW5zaXRpb25FbmQ7XG5cbiAgdGhpcy50cmFuc2l0aW9uKHtcbiAgICBmcm9tOiBvcHRpb25zLmhpZGRlblN0eWxlLFxuICAgIHRvOiBvcHRpb25zLnZpc2libGVTdHlsZSxcbiAgICBpc0NsZWFuaW5nOiB0cnVlLFxuICAgIG9uVHJhbnNpdGlvbkVuZDogb25UcmFuc2l0aW9uRW5kXG4gIH0pO1xufTtcblxuSXRlbS5wcm90b3R5cGUub25SZXZlYWxUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNoZWNrIGlmIHN0aWxsIHZpc2libGVcbiAgLy8gZHVyaW5nIHRyYW5zaXRpb24sIGl0ZW0gbWF5IGhhdmUgYmVlbiBoaWRkZW5cbiAgaWYgKCAhdGhpcy5pc0hpZGRlbiApIHtcbiAgICB0aGlzLmVtaXRFdmVudCgncmV2ZWFsJyk7XG4gIH1cbn07XG5cbi8qKlxuICogZ2V0IHN0eWxlIHByb3BlcnR5IHVzZSBmb3IgaGlkZS9yZXZlYWwgdHJhbnNpdGlvbiBlbmRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHlsZVByb3BlcnR5IC0gaGlkZGVuU3R5bGUvdmlzaWJsZVN0eWxlXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5JdGVtLnByb3RvdHlwZS5nZXRIaWRlUmV2ZWFsVHJhbnNpdGlvbkVuZFByb3BlcnR5ID0gZnVuY3Rpb24oIHN0eWxlUHJvcGVydHkgKSB7XG4gIHZhciBvcHRpb25TdHlsZSA9IHRoaXMubGF5b3V0Lm9wdGlvbnNbIHN0eWxlUHJvcGVydHkgXTtcbiAgLy8gdXNlIG9wYWNpdHlcbiAgaWYgKCBvcHRpb25TdHlsZS5vcGFjaXR5ICkge1xuICAgIHJldHVybiAnb3BhY2l0eSc7XG4gIH1cbiAgLy8gZ2V0IGZpcnN0IHByb3BlcnR5XG4gIGZvciAoIHZhciBwcm9wIGluIG9wdGlvblN0eWxlICkge1xuICAgIHJldHVybiBwcm9wO1xuICB9XG59O1xuXG5JdGVtLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oKSB7XG4gIC8vIHNldCBmbGFnXG4gIHRoaXMuaXNIaWRkZW4gPSB0cnVlO1xuICAvLyByZW1vdmUgZGlzcGxheTogbm9uZVxuICB0aGlzLmNzcyh7IGRpc3BsYXk6ICcnIH0pO1xuXG4gIHZhciBvcHRpb25zID0gdGhpcy5sYXlvdXQub3B0aW9ucztcblxuICB2YXIgb25UcmFuc2l0aW9uRW5kID0ge307XG4gIHZhciB0cmFuc2l0aW9uRW5kUHJvcGVydHkgPSB0aGlzLmdldEhpZGVSZXZlYWxUcmFuc2l0aW9uRW5kUHJvcGVydHkoJ2hpZGRlblN0eWxlJyk7XG4gIG9uVHJhbnNpdGlvbkVuZFsgdHJhbnNpdGlvbkVuZFByb3BlcnR5IF0gPSB0aGlzLm9uSGlkZVRyYW5zaXRpb25FbmQ7XG5cbiAgdGhpcy50cmFuc2l0aW9uKHtcbiAgICBmcm9tOiBvcHRpb25zLnZpc2libGVTdHlsZSxcbiAgICB0bzogb3B0aW9ucy5oaWRkZW5TdHlsZSxcbiAgICAvLyBrZWVwIGhpZGRlbiBzdHVmZiBoaWRkZW5cbiAgICBpc0NsZWFuaW5nOiB0cnVlLFxuICAgIG9uVHJhbnNpdGlvbkVuZDogb25UcmFuc2l0aW9uRW5kXG4gIH0pO1xufTtcblxuSXRlbS5wcm90b3R5cGUub25IaWRlVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uKCkge1xuICAvLyBjaGVjayBpZiBzdGlsbCBoaWRkZW5cbiAgLy8gZHVyaW5nIHRyYW5zaXRpb24sIGl0ZW0gbWF5IGhhdmUgYmVlbiB1bi1oaWRkZW5cbiAgaWYgKCB0aGlzLmlzSGlkZGVuICkge1xuICAgIHRoaXMuY3NzKHsgZGlzcGxheTogJ25vbmUnIH0pO1xuICAgIHRoaXMuZW1pdEV2ZW50KCdoaWRlJyk7XG4gIH1cbn07XG5cbkl0ZW0ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5jc3Moe1xuICAgIHBvc2l0aW9uOiAnJyxcbiAgICBsZWZ0OiAnJyxcbiAgICByaWdodDogJycsXG4gICAgdG9wOiAnJyxcbiAgICBib3R0b206ICcnLFxuICAgIHRyYW5zaXRpb246ICcnLFxuICAgIHRyYW5zZm9ybTogJydcbiAgfSk7XG59O1xuXG5yZXR1cm4gSXRlbTtcblxufSkpO1xuIiwiLyohXG4gKiBPdXRsYXllciB2MS40LjJcbiAqIHRoZSBicmFpbnMgYW5kIGd1dHMgb2YgYSBsYXlvdXQgbGlicmFyeVxuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG5cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICAgJ2V2ZW50aWUvZXZlbnRpZScsXG4gICAgICAgICdldmVudEVtaXR0ZXIvRXZlbnRFbWl0dGVyJyxcbiAgICAgICAgJ2dldC1zaXplL2dldC1zaXplJyxcbiAgICAgICAgJ2Zpenp5LXVpLXV0aWxzL3V0aWxzJyxcbiAgICAgICAgJy4vaXRlbSdcbiAgICAgIF0sXG4gICAgICBmdW5jdGlvbiggZXZlbnRpZSwgRXZlbnRFbWl0dGVyLCBnZXRTaXplLCB1dGlscywgSXRlbSApIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgZXZlbnRpZSwgRXZlbnRFbWl0dGVyLCBnZXRTaXplLCB1dGlscywgSXRlbSk7XG4gICAgICB9XG4gICAgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCdldmVudGllJyksXG4gICAgICByZXF1aXJlKCd3b2xmeTg3LWV2ZW50ZW1pdHRlcicpLFxuICAgICAgcmVxdWlyZSgnZ2V0LXNpemUnKSxcbiAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJyksXG4gICAgICByZXF1aXJlKCcuL2l0ZW0nKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuT3V0bGF5ZXIgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LmV2ZW50aWUsXG4gICAgICB3aW5kb3cuRXZlbnRFbWl0dGVyLFxuICAgICAgd2luZG93LmdldFNpemUsXG4gICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICAgd2luZG93Lk91dGxheWVyLkl0ZW1cbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBldmVudGllLCBFdmVudEVtaXR0ZXIsIGdldFNpemUsIHV0aWxzLCBJdGVtICkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLSB2YXJzIC0tLS0tIC8vXG5cbnZhciBjb25zb2xlID0gd2luZG93LmNvbnNvbGU7XG52YXIgalF1ZXJ5ID0gd2luZG93LmpRdWVyeTtcbnZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gT3V0bGF5ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gZ2xvYmFsbHkgdW5pcXVlIGlkZW50aWZpZXJzXG52YXIgR1VJRCA9IDA7XG4vLyBpbnRlcm5hbCBzdG9yZSBvZiBhbGwgT3V0bGF5ZXIgaW50YW5jZXNcbnZhciBpbnN0YW5jZXMgPSB7fTtcblxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudCwgU3RyaW5nfSBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE91dGxheWVyKCBlbGVtZW50LCBvcHRpb25zICkge1xuICB2YXIgcXVlcnlFbGVtZW50ID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCBlbGVtZW50ICk7XG4gIGlmICggIXF1ZXJ5RWxlbWVudCApIHtcbiAgICBpZiAoIGNvbnNvbGUgKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCAnQmFkIGVsZW1lbnQgZm9yICcgKyB0aGlzLmNvbnN0cnVjdG9yLm5hbWVzcGFjZSArXG4gICAgICAgICc6ICcgKyAoIHF1ZXJ5RWxlbWVudCB8fCBlbGVtZW50ICkgKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuZWxlbWVudCA9IHF1ZXJ5RWxlbWVudDtcbiAgLy8gYWRkIGpRdWVyeVxuICBpZiAoIGpRdWVyeSApIHtcbiAgICB0aGlzLiRlbGVtZW50ID0galF1ZXJ5KCB0aGlzLmVsZW1lbnQgKTtcbiAgfVxuXG4gIC8vIG9wdGlvbnNcbiAgdGhpcy5vcHRpb25zID0gdXRpbHMuZXh0ZW5kKCB7fSwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0cyApO1xuICB0aGlzLm9wdGlvbiggb3B0aW9ucyApO1xuXG4gIC8vIGFkZCBpZCBmb3IgT3V0bGF5ZXIuZ2V0RnJvbUVsZW1lbnRcbiAgdmFyIGlkID0gKytHVUlEO1xuICB0aGlzLmVsZW1lbnQub3V0bGF5ZXJHVUlEID0gaWQ7IC8vIGV4cGFuZG9cbiAgaW5zdGFuY2VzWyBpZCBdID0gdGhpczsgLy8gYXNzb2NpYXRlIHZpYSBpZFxuXG4gIC8vIGtpY2sgaXQgb2ZmXG4gIHRoaXMuX2NyZWF0ZSgpO1xuXG4gIGlmICggdGhpcy5vcHRpb25zLmlzSW5pdExheW91dCApIHtcbiAgICB0aGlzLmxheW91dCgpO1xuICB9XG59XG5cbi8vIHNldHRpbmdzIGFyZSBmb3IgaW50ZXJuYWwgdXNlIG9ubHlcbk91dGxheWVyLm5hbWVzcGFjZSA9ICdvdXRsYXllcic7XG5PdXRsYXllci5JdGVtID0gSXRlbTtcblxuLy8gZGVmYXVsdCBvcHRpb25zXG5PdXRsYXllci5kZWZhdWx0cyA9IHtcbiAgY29udGFpbmVyU3R5bGU6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICBpc0luaXRMYXlvdXQ6IHRydWUsXG4gIGlzT3JpZ2luTGVmdDogdHJ1ZSxcbiAgaXNPcmlnaW5Ub3A6IHRydWUsXG4gIGlzUmVzaXplQm91bmQ6IHRydWUsXG4gIGlzUmVzaXppbmdDb250YWluZXI6IHRydWUsXG4gIC8vIGl0ZW0gb3B0aW9uc1xuICB0cmFuc2l0aW9uRHVyYXRpb246ICcwLjRzJyxcbiAgaGlkZGVuU3R5bGU6IHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuMDAxKSdcbiAgfSxcbiAgdmlzaWJsZVN0eWxlOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgfVxufTtcblxuLy8gaW5oZXJpdCBFdmVudEVtaXR0ZXJcbnV0aWxzLmV4dGVuZCggT3V0bGF5ZXIucHJvdG90eXBlLCBFdmVudEVtaXR0ZXIucHJvdG90eXBlICk7XG5cbi8qKlxuICogc2V0IG9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKi9cbk91dGxheWVyLnByb3RvdHlwZS5vcHRpb24gPSBmdW5jdGlvbiggb3B0cyApIHtcbiAgdXRpbHMuZXh0ZW5kKCB0aGlzLm9wdGlvbnMsIG9wdHMgKTtcbn07XG5cbk91dGxheWVyLnByb3RvdHlwZS5fY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gIC8vIGdldCBpdGVtcyBmcm9tIGNoaWxkcmVuXG4gIHRoaXMucmVsb2FkSXRlbXMoKTtcbiAgLy8gZWxlbWVudHMgdGhhdCBhZmZlY3QgbGF5b3V0LCBidXQgYXJlIG5vdCBsYWlkIG91dFxuICB0aGlzLnN0YW1wcyA9IFtdO1xuICB0aGlzLnN0YW1wKCB0aGlzLm9wdGlvbnMuc3RhbXAgKTtcbiAgLy8gc2V0IGNvbnRhaW5lciBzdHlsZVxuICB1dGlscy5leHRlbmQoIHRoaXMuZWxlbWVudC5zdHlsZSwgdGhpcy5vcHRpb25zLmNvbnRhaW5lclN0eWxlICk7XG5cbiAgLy8gYmluZCByZXNpemUgbWV0aG9kXG4gIGlmICggdGhpcy5vcHRpb25zLmlzUmVzaXplQm91bmQgKSB7XG4gICAgdGhpcy5iaW5kUmVzaXplKCk7XG4gIH1cbn07XG5cbi8vIGdvZXMgdGhyb3VnaCBhbGwgY2hpbGRyZW4gYWdhaW4gYW5kIGdldHMgYnJpY2tzIGluIHByb3BlciBvcmRlclxuT3V0bGF5ZXIucHJvdG90eXBlLnJlbG9hZEl0ZW1zID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNvbGxlY3Rpb24gb2YgaXRlbSBlbGVtZW50c1xuICB0aGlzLml0ZW1zID0gdGhpcy5faXRlbWl6ZSggdGhpcy5lbGVtZW50LmNoaWxkcmVuICk7XG59O1xuXG5cbi8qKlxuICogdHVybiBlbGVtZW50cyBpbnRvIE91dGxheWVyLkl0ZW1zIHRvIGJlIHVzZWQgaW4gbGF5b3V0XG4gKiBAcGFyYW0ge0FycmF5IG9yIE5vZGVMaXN0IG9yIEhUTUxFbGVtZW50fSBlbGVtc1xuICogQHJldHVybnMge0FycmF5fSBpdGVtcyAtIGNvbGxlY3Rpb24gb2YgbmV3IE91dGxheWVyIEl0ZW1zXG4gKi9cbk91dGxheWVyLnByb3RvdHlwZS5faXRlbWl6ZSA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcblxuICB2YXIgaXRlbUVsZW1zID0gdGhpcy5fZmlsdGVyRmluZEl0ZW1FbGVtZW50cyggZWxlbXMgKTtcbiAgdmFyIEl0ZW0gPSB0aGlzLmNvbnN0cnVjdG9yLkl0ZW07XG5cbiAgLy8gY3JlYXRlIG5ldyBPdXRsYXllciBJdGVtcyBmb3IgY29sbGVjdGlvblxuICB2YXIgaXRlbXMgPSBbXTtcbiAgZm9yICggdmFyIGk9MCwgbGVuID0gaXRlbUVsZW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHZhciBlbGVtID0gaXRlbUVsZW1zW2ldO1xuICAgIHZhciBpdGVtID0gbmV3IEl0ZW0oIGVsZW0sIHRoaXMgKTtcbiAgICBpdGVtcy5wdXNoKCBpdGVtICk7XG4gIH1cblxuICByZXR1cm4gaXRlbXM7XG59O1xuXG4vKipcbiAqIGdldCBpdGVtIGVsZW1lbnRzIHRvIGJlIHVzZWQgaW4gbGF5b3V0XG4gKiBAcGFyYW0ge0FycmF5IG9yIE5vZGVMaXN0IG9yIEhUTUxFbGVtZW50fSBlbGVtc1xuICogQHJldHVybnMge0FycmF5fSBpdGVtcyAtIGl0ZW0gZWxlbWVudHNcbiAqL1xuT3V0bGF5ZXIucHJvdG90eXBlLl9maWx0ZXJGaW5kSXRlbUVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICByZXR1cm4gdXRpbHMuZmlsdGVyRmluZEVsZW1lbnRzKCBlbGVtcywgdGhpcy5vcHRpb25zLml0ZW1TZWxlY3RvciApO1xufTtcblxuLyoqXG4gKiBnZXR0ZXIgbWV0aG9kIGZvciBnZXR0aW5nIGl0ZW0gZWxlbWVudHNcbiAqIEByZXR1cm5zIHtBcnJheX0gZWxlbXMgLSBjb2xsZWN0aW9uIG9mIGl0ZW0gZWxlbWVudHNcbiAqL1xuT3V0bGF5ZXIucHJvdG90eXBlLmdldEl0ZW1FbGVtZW50cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZWxlbXMgPSBbXTtcbiAgZm9yICggdmFyIGk9MCwgbGVuID0gdGhpcy5pdGVtcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBlbGVtcy5wdXNoKCB0aGlzLml0ZW1zW2ldLmVsZW1lbnQgKTtcbiAgfVxuICByZXR1cm4gZWxlbXM7XG59O1xuXG4vLyAtLS0tLSBpbml0ICYgbGF5b3V0IC0tLS0tIC8vXG5cbi8qKlxuICogbGF5cyBvdXQgYWxsIGl0ZW1zXG4gKi9cbk91dGxheWVyLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fcmVzZXRMYXlvdXQoKTtcbiAgdGhpcy5fbWFuYWdlU3RhbXBzKCk7XG5cbiAgLy8gZG9uJ3QgYW5pbWF0ZSBmaXJzdCBsYXlvdXRcbiAgdmFyIGlzSW5zdGFudCA9IHRoaXMub3B0aW9ucy5pc0xheW91dEluc3RhbnQgIT09IHVuZGVmaW5lZCA/XG4gICAgdGhpcy5vcHRpb25zLmlzTGF5b3V0SW5zdGFudCA6ICF0aGlzLl9pc0xheW91dEluaXRlZDtcbiAgdGhpcy5sYXlvdXRJdGVtcyggdGhpcy5pdGVtcywgaXNJbnN0YW50ICk7XG5cbiAgLy8gZmxhZyBmb3IgaW5pdGFsaXplZFxuICB0aGlzLl9pc0xheW91dEluaXRlZCA9IHRydWU7XG59O1xuXG4vLyBfaW5pdCBpcyBhbGlhcyBmb3IgbGF5b3V0XG5PdXRsYXllci5wcm90b3R5cGUuX2luaXQgPSBPdXRsYXllci5wcm90b3R5cGUubGF5b3V0O1xuXG4vKipcbiAqIGxvZ2ljIGJlZm9yZSBhbnkgbmV3IGxheW91dFxuICovXG5PdXRsYXllci5wcm90b3R5cGUuX3Jlc2V0TGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZ2V0U2l6ZSgpO1xufTtcblxuXG5PdXRsYXllci5wcm90b3R5cGUuZ2V0U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNpemUgPSBnZXRTaXplKCB0aGlzLmVsZW1lbnQgKTtcbn07XG5cbi8qKlxuICogZ2V0IG1lYXN1cmVtZW50IGZyb20gb3B0aW9uLCBmb3IgY29sdW1uV2lkdGgsIHJvd0hlaWdodCwgZ3V0dGVyXG4gKiBpZiBvcHRpb24gaXMgU3RyaW5nIC0+IGdldCBlbGVtZW50IGZyb20gc2VsZWN0b3Igc3RyaW5nLCAmIGdldCBzaXplIG9mIGVsZW1lbnRcbiAqIGlmIG9wdGlvbiBpcyBFbGVtZW50IC0+IGdldCBzaXplIG9mIGVsZW1lbnRcbiAqIGVsc2UgdXNlIG9wdGlvbiBhcyBhIG51bWJlclxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZWFzdXJlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNpemUgLSB3aWR0aCBvciBoZWlnaHRcbiAqIEBwcml2YXRlXG4gKi9cbk91dGxheWVyLnByb3RvdHlwZS5fZ2V0TWVhc3VyZW1lbnQgPSBmdW5jdGlvbiggbWVhc3VyZW1lbnQsIHNpemUgKSB7XG4gIHZhciBvcHRpb24gPSB0aGlzLm9wdGlvbnNbIG1lYXN1cmVtZW50IF07XG4gIHZhciBlbGVtO1xuICBpZiAoICFvcHRpb24gKSB7XG4gICAgLy8gZGVmYXVsdCB0byAwXG4gICAgdGhpc1sgbWVhc3VyZW1lbnQgXSA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG9wdGlvbiBhcyBhbiBlbGVtZW50XG4gICAgaWYgKCB0eXBlb2Ygb3B0aW9uID09PSAnc3RyaW5nJyApIHtcbiAgICAgIGVsZW0gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvciggb3B0aW9uICk7XG4gICAgfSBlbHNlIGlmICggdXRpbHMuaXNFbGVtZW50KCBvcHRpb24gKSApIHtcbiAgICAgIGVsZW0gPSBvcHRpb247XG4gICAgfVxuICAgIC8vIHVzZSBzaXplIG9mIGVsZW1lbnQsIGlmIGVsZW1lbnRcbiAgICB0aGlzWyBtZWFzdXJlbWVudCBdID0gZWxlbSA/IGdldFNpemUoIGVsZW0gKVsgc2l6ZSBdIDogb3B0aW9uO1xuICB9XG59O1xuXG4vKipcbiAqIGxheW91dCBhIGNvbGxlY3Rpb24gb2YgaXRlbSBlbGVtZW50c1xuICogQGFwaSBwdWJsaWNcbiAqL1xuT3V0bGF5ZXIucHJvdG90eXBlLmxheW91dEl0ZW1zID0gZnVuY3Rpb24oIGl0ZW1zLCBpc0luc3RhbnQgKSB7XG4gIGl0ZW1zID0gdGhpcy5fZ2V0SXRlbXNGb3JMYXlvdXQoIGl0ZW1zICk7XG5cbiAgdGhpcy5fbGF5b3V0SXRlbXMoIGl0ZW1zLCBpc0luc3RhbnQgKTtcblxuICB0aGlzLl9wb3N0TGF5b3V0KCk7XG59O1xuXG4vKipcbiAqIGdldCB0aGUgaXRlbXMgdG8gYmUgbGFpZCBvdXRcbiAqIHlvdSBtYXkgd2FudCB0byBza2lwIG92ZXIgc29tZSBpdGVtc1xuICogQHBhcmFtIHtBcnJheX0gaXRlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXNcbiAqL1xuT3V0bGF5ZXIucHJvdG90eXBlLl9nZXRJdGVtc0ZvckxheW91dCA9IGZ1bmN0aW9uKCBpdGVtcyApIHtcbiAgdmFyIGxheW91dEl0ZW1zID0gW107XG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IGl0ZW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHZhciBpdGVtID0gaXRlbXNbaV07XG4gICAgaWYgKCAhaXRlbS5pc0lnbm9yZWQgKSB7XG4gICAgICBsYXlvdXRJdGVtcy5wdXNoKCBpdGVtICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBsYXlvdXRJdGVtcztcbn07XG5cbi8qKlxuICogbGF5b3V0IGl0ZW1zXG4gKiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuICogQHBhcmFtIHtCb29sZWFufSBpc0luc3RhbnRcbiAqL1xuT3V0bGF5ZXIucHJvdG90eXBlLl9sYXlvdXRJdGVtcyA9IGZ1bmN0aW9uKCBpdGVtcywgaXNJbnN0YW50ICkge1xuICB0aGlzLl9lbWl0Q29tcGxldGVPbkl0ZW1zKCAnbGF5b3V0JywgaXRlbXMgKTtcblxuICBpZiAoICFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoICkge1xuICAgIC8vIG5vIGl0ZW1zLCBlbWl0IGV2ZW50IHdpdGggZW1wdHkgYXJyYXlcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcXVldWUgPSBbXTtcblxuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBpdGVtcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuICAgIC8vIGdldCB4L3kgb2JqZWN0IGZyb20gbWV0aG9kXG4gICAgdmFyIHBvc2l0aW9uID0gdGhpcy5fZ2V0SXRlbUxheW91dFBvc2l0aW9uKCBpdGVtICk7XG4gICAgLy8gZW5xdWV1ZVxuICAgIHBvc2l0aW9uLml0ZW0gPSBpdGVtO1xuICAgIHBvc2l0aW9uLmlzSW5zdGFudCA9IGlzSW5zdGFudCB8fCBpdGVtLmlzTGF5b3V0SW5zdGFudDtcbiAgICBxdWV1ZS5wdXNoKCBwb3NpdGlvbiApO1xuICB9XG5cbiAgdGhpcy5fcHJvY2Vzc0xheW91dFF1ZXVlKCBxdWV1ZSApO1xufTtcblxuLyoqXG4gKiBnZXQgaXRlbSBsYXlvdXQgcG9zaXRpb25cbiAqIEBwYXJhbSB7T3V0bGF5ZXIuSXRlbX0gaXRlbVxuICogQHJldHVybnMge09iamVjdH0geCBhbmQgeSBwb3NpdGlvblxuICovXG5PdXRsYXllci5wcm90b3R5cGUuX2dldEl0ZW1MYXlvdXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCAvKiBpdGVtICovICkge1xuICByZXR1cm4ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xufTtcblxuLyoqXG4gKiBpdGVyYXRlIG92ZXIgYXJyYXkgYW5kIHBvc2l0aW9uIGVhY2ggaXRlbVxuICogUmVhc29uIGJlaW5nIC0gc2VwYXJhdGluZyB0aGlzIGxvZ2ljIHByZXZlbnRzICdsYXlvdXQgaW52YWxpZGF0aW9uJ1xuICogdGh4IEBwYXVsX2lyaXNoXG4gKiBAcGFyYW0ge0FycmF5fSBxdWV1ZVxuICovXG5PdXRsYXllci5wcm90b3R5cGUuX3Byb2Nlc3NMYXlvdXRRdWV1ZSA9IGZ1bmN0aW9uKCBxdWV1ZSApIHtcbiAgZm9yICggdmFyIGk9MCwgbGVuID0gcXVldWUubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgdmFyIG9iaiA9IHF1ZXVlW2ldO1xuICAgIHRoaXMuX3Bvc2l0aW9uSXRlbSggb2JqLml0ZW0sIG9iai54LCBvYmoueSwgb2JqLmlzSW5zdGFudCApO1xuICB9XG59O1xuXG4vKipcbiAqIFNldHMgcG9zaXRpb24gb2YgaXRlbSBpbiBET01cbiAqIEBwYXJhbSB7T3V0bGF5ZXIuSXRlbX0gaXRlbVxuICogQHBhcmFtIHtOdW1iZXJ9IHggLSBob3Jpem9udGFsIHBvc2l0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0geSAtIHZlcnRpY2FsIHBvc2l0aW9uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzSW5zdGFudCAtIGRpc2FibGVzIHRyYW5zaXRpb25zXG4gKi9cbk91dGxheWVyLnByb3RvdHlwZS5fcG9zaXRpb25JdGVtID0gZnVuY3Rpb24oIGl0ZW0sIHgsIHksIGlzSW5zdGFudCApIHtcbiAgaWYgKCBpc0luc3RhbnQgKSB7XG4gICAgLy8gaWYgbm90IHRyYW5zaXRpb24sIGp1c3Qgc2V0IENTU1xuICAgIGl0ZW0uZ29UbyggeCwgeSApO1xuICB9IGVsc2Uge1xuICAgIGl0ZW0ubW92ZVRvKCB4LCB5ICk7XG4gIH1cbn07XG5cbi8qKlxuICogQW55IGxvZ2ljIHlvdSB3YW50IHRvIGRvIGFmdGVyIGVhY2ggbGF5b3V0LFxuICogaS5lLiBzaXplIHRoZSBjb250YWluZXJcbiAqL1xuT3V0bGF5ZXIucHJvdG90eXBlLl9wb3N0TGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmVzaXplQ29udGFpbmVyKCk7XG59O1xuXG5PdXRsYXllci5wcm90b3R5cGUucmVzaXplQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMub3B0aW9ucy5pc1Jlc2l6aW5nQ29udGFpbmVyICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgc2l6ZSA9IHRoaXMuX2dldENvbnRhaW5lclNpemUoKTtcbiAgaWYgKCBzaXplICkge1xuICAgIHRoaXMuX3NldENvbnRhaW5lck1lYXN1cmUoIHNpemUud2lkdGgsIHRydWUgKTtcbiAgICB0aGlzLl9zZXRDb250YWluZXJNZWFzdXJlKCBzaXplLmhlaWdodCwgZmFsc2UgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXRzIHdpZHRoIG9yIGhlaWdodCBvZiBjb250YWluZXIgaWYgcmV0dXJuZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IHNpemVcbiAqICAgQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXG4gKiAgIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcbiAqL1xuT3V0bGF5ZXIucHJvdG90eXBlLl9nZXRDb250YWluZXJTaXplID0gbm9vcDtcblxuLyoqXG4gKiBAcGFyYW0ge051bWJlcn0gbWVhc3VyZSAtIHNpemUgb2Ygd2lkdGggb3IgaGVpZ2h0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzV2lkdGhcbiAqL1xuT3V0bGF5ZXIucHJvdG90eXBlLl9zZXRDb250YWluZXJNZWFzdXJlID0gZnVuY3Rpb24oIG1lYXN1cmUsIGlzV2lkdGggKSB7XG4gIGlmICggbWVhc3VyZSA9PT0gdW5kZWZpbmVkICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBlbGVtU2l6ZSA9IHRoaXMuc2l6ZTtcbiAgLy8gYWRkIHBhZGRpbmcgYW5kIGJvcmRlciB3aWR0aCBpZiBib3JkZXIgYm94XG4gIGlmICggZWxlbVNpemUuaXNCb3JkZXJCb3ggKSB7XG4gICAgbWVhc3VyZSArPSBpc1dpZHRoID8gZWxlbVNpemUucGFkZGluZ0xlZnQgKyBlbGVtU2l6ZS5wYWRkaW5nUmlnaHQgK1xuICAgICAgZWxlbVNpemUuYm9yZGVyTGVmdFdpZHRoICsgZWxlbVNpemUuYm9yZGVyUmlnaHRXaWR0aCA6XG4gICAgICBlbGVtU2l6ZS5wYWRkaW5nQm90dG9tICsgZWxlbVNpemUucGFkZGluZ1RvcCArXG4gICAgICBlbGVtU2l6ZS5ib3JkZXJUb3BXaWR0aCArIGVsZW1TaXplLmJvcmRlckJvdHRvbVdpZHRoO1xuICB9XG5cbiAgbWVhc3VyZSA9IE1hdGgubWF4KCBtZWFzdXJlLCAwICk7XG4gIHRoaXMuZWxlbWVudC5zdHlsZVsgaXNXaWR0aCA/ICd3aWR0aCcgOiAnaGVpZ2h0JyBdID0gbWVhc3VyZSArICdweCc7XG59O1xuXG4vKipcbiAqIGVtaXQgZXZlbnRDb21wbGV0ZSBvbiBhIGNvbGxlY3Rpb24gb2YgaXRlbXMgZXZlbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG4gKiBAcGFyYW0ge0FycmF5fSBpdGVtcyAtIE91dGxheWVyLkl0ZW1zXG4gKi9cbk91dGxheWVyLnByb3RvdHlwZS5fZW1pdENvbXBsZXRlT25JdGVtcyA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGl0ZW1zICkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuICBmdW5jdGlvbiBvbkNvbXBsZXRlKCkge1xuICAgIF90aGlzLmRpc3BhdGNoRXZlbnQoIGV2ZW50TmFtZSArICdDb21wbGV0ZScsIG51bGwsIFsgaXRlbXMgXSApO1xuICB9XG5cbiAgdmFyIGNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICBpZiAoICFpdGVtcyB8fCAhY291bnQgKSB7XG4gICAgb25Db21wbGV0ZSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBkb25lQ291bnQgPSAwO1xuICBmdW5jdGlvbiB0aWNrKCkge1xuICAgIGRvbmVDb3VudCsrO1xuICAgIGlmICggZG9uZUNvdW50ID09PSBjb3VudCApIHtcbiAgICAgIG9uQ29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICAvLyBiaW5kIGNhbGxiYWNrXG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IGl0ZW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHZhciBpdGVtID0gaXRlbXNbaV07XG4gICAgaXRlbS5vbmNlKCBldmVudE5hbWUsIHRpY2sgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBlbWl0cyBldmVudHMgdmlhIGV2ZW50RW1pdHRlciBhbmQgalF1ZXJ5IGV2ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgLSBuYW1lIG9mIGV2ZW50XG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIG9yaWdpbmFsIGV2ZW50XG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIC0gZXh0cmEgYXJndW1lbnRzXG4gKi9cbk91dGxheWVyLnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24oIHR5cGUsIGV2ZW50LCBhcmdzICkge1xuICAvLyBhZGQgb3JpZ2luYWwgZXZlbnQgdG8gYXJndW1lbnRzXG4gIHZhciBlbWl0QXJncyA9IGV2ZW50ID8gWyBldmVudCBdLmNvbmNhdCggYXJncyApIDogYXJncztcbiAgdGhpcy5lbWl0RXZlbnQoIHR5cGUsIGVtaXRBcmdzICk7XG5cbiAgaWYgKCBqUXVlcnkgKSB7XG4gICAgLy8gc2V0IHRoaXMuJGVsZW1lbnRcbiAgICB0aGlzLiRlbGVtZW50ID0gdGhpcy4kZWxlbWVudCB8fCBqUXVlcnkoIHRoaXMuZWxlbWVudCApO1xuICAgIGlmICggZXZlbnQgKSB7XG4gICAgICAvLyBjcmVhdGUgalF1ZXJ5IGV2ZW50XG4gICAgICB2YXIgJGV2ZW50ID0galF1ZXJ5LkV2ZW50KCBldmVudCApO1xuICAgICAgJGV2ZW50LnR5cGUgPSB0eXBlO1xuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCAkZXZlbnQsIGFyZ3MgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8ganVzdCB0cmlnZ2VyIHdpdGggdHlwZSBpZiBubyBldmVudCBhdmFpbGFibGVcbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlciggdHlwZSwgYXJncyApO1xuICAgIH1cbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaWdub3JlICYgc3RhbXBzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblxuLyoqXG4gKiBrZWVwIGl0ZW0gaW4gY29sbGVjdGlvbiwgYnV0IGRvIG5vdCBsYXkgaXQgb3V0XG4gKiBpZ25vcmVkIGl0ZW1zIGRvIG5vdCBnZXQgc2tpcHBlZCBpbiBsYXlvdXRcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbVxuICovXG5PdXRsYXllci5wcm90b3R5cGUuaWdub3JlID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIHZhciBpdGVtID0gdGhpcy5nZXRJdGVtKCBlbGVtICk7XG4gIGlmICggaXRlbSApIHtcbiAgICBpdGVtLmlzSWdub3JlZCA9IHRydWU7XG4gIH1cbn07XG5cbi8qKlxuICogcmV0dXJuIGl0ZW0gdG8gbGF5b3V0IGNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbVxuICovXG5PdXRsYXllci5wcm90b3R5cGUudW5pZ25vcmUgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgdmFyIGl0ZW0gPSB0aGlzLmdldEl0ZW0oIGVsZW0gKTtcbiAgaWYgKCBpdGVtICkge1xuICAgIGRlbGV0ZSBpdGVtLmlzSWdub3JlZDtcbiAgfVxufTtcblxuLyoqXG4gKiBhZGRzIGVsZW1lbnRzIHRvIHN0YW1wc1xuICogQHBhcmFtIHtOb2RlTGlzdCwgQXJyYXksIEVsZW1lbnQsIG9yIFN0cmluZ30gZWxlbXNcbiAqL1xuT3V0bGF5ZXIucHJvdG90eXBlLnN0YW1wID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICBlbGVtcyA9IHRoaXMuX2ZpbmQoIGVsZW1zICk7XG4gIGlmICggIWVsZW1zICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuc3RhbXBzID0gdGhpcy5zdGFtcHMuY29uY2F0KCBlbGVtcyApO1xuICAvLyBpZ25vcmVcbiAgZm9yICggdmFyIGk9MCwgbGVuID0gZWxlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgdmFyIGVsZW0gPSBlbGVtc1tpXTtcbiAgICB0aGlzLmlnbm9yZSggZWxlbSApO1xuICB9XG59O1xuXG4vKipcbiAqIHJlbW92ZXMgZWxlbWVudHMgdG8gc3RhbXBzXG4gKiBAcGFyYW0ge05vZGVMaXN0LCBBcnJheSwgb3IgRWxlbWVudH0gZWxlbXNcbiAqL1xuT3V0bGF5ZXIucHJvdG90eXBlLnVuc3RhbXAgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIGVsZW1zID0gdGhpcy5fZmluZCggZWxlbXMgKTtcbiAgaWYgKCAhZWxlbXMgKXtcbiAgICByZXR1cm47XG4gIH1cblxuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBlbGVtcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICB2YXIgZWxlbSA9IGVsZW1zW2ldO1xuICAgIC8vIGZpbHRlciBvdXQgcmVtb3ZlZCBzdGFtcCBlbGVtZW50c1xuICAgIHV0aWxzLnJlbW92ZUZyb20oIHRoaXMuc3RhbXBzLCBlbGVtICk7XG4gICAgdGhpcy51bmlnbm9yZSggZWxlbSApO1xuICB9XG5cbn07XG5cbi8qKlxuICogZmluZHMgY2hpbGQgZWxlbWVudHNcbiAqIEBwYXJhbSB7Tm9kZUxpc3QsIEFycmF5LCBFbGVtZW50LCBvciBTdHJpbmd9IGVsZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IGVsZW1zXG4gKi9cbk91dGxheWVyLnByb3RvdHlwZS5fZmluZCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgaWYgKCAhZWxlbXMgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGlmIHN0cmluZywgdXNlIGFyZ3VtZW50IGFzIHNlbGVjdG9yIHN0cmluZ1xuICBpZiAoIHR5cGVvZiBlbGVtcyA9PT0gJ3N0cmluZycgKSB7XG4gICAgZWxlbXMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCggZWxlbXMgKTtcbiAgfVxuICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcbiAgcmV0dXJuIGVsZW1zO1xufTtcblxuT3V0bGF5ZXIucHJvdG90eXBlLl9tYW5hZ2VTdGFtcHMgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5zdGFtcHMgfHwgIXRoaXMuc3RhbXBzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLl9nZXRCb3VuZGluZ1JlY3QoKTtcblxuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSB0aGlzLnN0YW1wcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICB2YXIgc3RhbXAgPSB0aGlzLnN0YW1wc1tpXTtcbiAgICB0aGlzLl9tYW5hZ2VTdGFtcCggc3RhbXAgKTtcbiAgfVxufTtcblxuLy8gdXBkYXRlIGJvdW5kaW5nTGVmdCAvIFRvcFxuT3V0bGF5ZXIucHJvdG90eXBlLl9nZXRCb3VuZGluZ1JlY3QgPSBmdW5jdGlvbigpIHtcbiAgLy8gZ2V0IGJvdW5kaW5nIHJlY3QgZm9yIGNvbnRhaW5lciBlbGVtZW50XG4gIHZhciBib3VuZGluZ1JlY3QgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBzaXplID0gdGhpcy5zaXplO1xuICB0aGlzLl9ib3VuZGluZ1JlY3QgPSB7XG4gICAgbGVmdDogYm91bmRpbmdSZWN0LmxlZnQgKyBzaXplLnBhZGRpbmdMZWZ0ICsgc2l6ZS5ib3JkZXJMZWZ0V2lkdGgsXG4gICAgdG9wOiBib3VuZGluZ1JlY3QudG9wICsgc2l6ZS5wYWRkaW5nVG9wICsgc2l6ZS5ib3JkZXJUb3BXaWR0aCxcbiAgICByaWdodDogYm91bmRpbmdSZWN0LnJpZ2h0IC0gKCBzaXplLnBhZGRpbmdSaWdodCArIHNpemUuYm9yZGVyUmlnaHRXaWR0aCApLFxuICAgIGJvdHRvbTogYm91bmRpbmdSZWN0LmJvdHRvbSAtICggc2l6ZS5wYWRkaW5nQm90dG9tICsgc2l6ZS5ib3JkZXJCb3R0b21XaWR0aCApXG4gIH07XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gc3RhbXBcbioqL1xuT3V0bGF5ZXIucHJvdG90eXBlLl9tYW5hZ2VTdGFtcCA9IG5vb3A7XG5cbi8qKlxuICogZ2V0IHgveSBwb3NpdGlvbiBvZiBlbGVtZW50IHJlbGF0aXZlIHRvIGNvbnRhaW5lciBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEByZXR1cm5zIHtPYmplY3R9IG9mZnNldCAtIGhhcyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b21cbiAqL1xuT3V0bGF5ZXIucHJvdG90eXBlLl9nZXRFbGVtZW50T2Zmc2V0ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIHZhciBib3VuZGluZ1JlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgdGhpc1JlY3QgPSB0aGlzLl9ib3VuZGluZ1JlY3Q7XG4gIHZhciBzaXplID0gZ2V0U2l6ZSggZWxlbSApO1xuICB2YXIgb2Zmc2V0ID0ge1xuICAgIGxlZnQ6IGJvdW5kaW5nUmVjdC5sZWZ0IC0gdGhpc1JlY3QubGVmdCAtIHNpemUubWFyZ2luTGVmdCxcbiAgICB0b3A6IGJvdW5kaW5nUmVjdC50b3AgLSB0aGlzUmVjdC50b3AgLSBzaXplLm1hcmdpblRvcCxcbiAgICByaWdodDogdGhpc1JlY3QucmlnaHQgLSBib3VuZGluZ1JlY3QucmlnaHQgLSBzaXplLm1hcmdpblJpZ2h0LFxuICAgIGJvdHRvbTogdGhpc1JlY3QuYm90dG9tIC0gYm91bmRpbmdSZWN0LmJvdHRvbSAtIHNpemUubWFyZ2luQm90dG9tXG4gIH07XG4gIHJldHVybiBvZmZzZXQ7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSByZXNpemUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gZW5hYmxlIGV2ZW50IGhhbmRsZXJzIGZvciBsaXN0ZW5lcnNcbi8vIGkuZS4gcmVzaXplIC0+IG9ucmVzaXplXG5PdXRsYXllci5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciBtZXRob2QgPSAnb24nICsgZXZlbnQudHlwZTtcbiAgaWYgKCB0aGlzWyBtZXRob2QgXSApIHtcbiAgICB0aGlzWyBtZXRob2QgXSggZXZlbnQgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBCaW5kIGxheW91dCB0byB3aW5kb3cgcmVzaXppbmdcbiAqL1xuT3V0bGF5ZXIucHJvdG90eXBlLmJpbmRSZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgLy8gYmluZCBqdXN0IG9uZSBsaXN0ZW5lclxuICBpZiAoIHRoaXMuaXNSZXNpemVCb3VuZCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZXZlbnRpZS5iaW5kKCB3aW5kb3csICdyZXNpemUnLCB0aGlzICk7XG4gIHRoaXMuaXNSZXNpemVCb3VuZCA9IHRydWU7XG59O1xuXG4vKipcbiAqIFVuYmluZCBsYXlvdXQgdG8gd2luZG93IHJlc2l6aW5nXG4gKi9cbk91dGxheWVyLnByb3RvdHlwZS51bmJpbmRSZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLmlzUmVzaXplQm91bmQgKSB7XG4gICAgZXZlbnRpZS51bmJpbmQoIHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMgKTtcbiAgfVxuICB0aGlzLmlzUmVzaXplQm91bmQgPSBmYWxzZTtcbn07XG5cbi8vIG9yaWdpbmFsIGRlYm91bmNlIGJ5IEpvaG4gSGFublxuLy8gaHR0cDovL3Vuc2NyaXB0YWJsZS5jb20vaW5kZXgucGhwLzIwMDkvMDMvMjAvZGVib3VuY2luZy1qYXZhc2NyaXB0LW1ldGhvZHMvXG5cbi8vIHRoaXMgZmlyZXMgZXZlcnkgcmVzaXplXG5PdXRsYXllci5wcm90b3R5cGUub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLnJlc2l6ZVRpbWVvdXQgKSB7XG4gICAgY2xlYXJUaW1lb3V0KCB0aGlzLnJlc2l6ZVRpbWVvdXQgKTtcbiAgfVxuXG4gIHZhciBfdGhpcyA9IHRoaXM7XG4gIGZ1bmN0aW9uIGRlbGF5ZWQoKSB7XG4gICAgX3RoaXMucmVzaXplKCk7XG4gICAgZGVsZXRlIF90aGlzLnJlc2l6ZVRpbWVvdXQ7XG4gIH1cblxuICB0aGlzLnJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCBkZWxheWVkLCAxMDAgKTtcbn07XG5cbi8vIGRlYm91bmNlZCwgbGF5b3V0IG9uIHJlc2l6ZVxuT3V0bGF5ZXIucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBkb24ndCB0cmlnZ2VyIGlmIHNpemUgZGlkIG5vdCBjaGFuZ2VcbiAgLy8gb3IgaWYgcmVzaXplIHdhcyB1bmJvdW5kLiBTZWUgIzlcbiAgaWYgKCAhdGhpcy5pc1Jlc2l6ZUJvdW5kIHx8ICF0aGlzLm5lZWRzUmVzaXplTGF5b3V0KCkgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5sYXlvdXQoKTtcbn07XG5cbi8qKlxuICogY2hlY2sgaWYgbGF5b3V0IGlzIG5lZWRlZCBwb3N0IGxheW91dFxuICogQHJldHVybnMgQm9vbGVhblxuICovXG5PdXRsYXllci5wcm90b3R5cGUubmVlZHNSZXNpemVMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNpemUgPSBnZXRTaXplKCB0aGlzLmVsZW1lbnQgKTtcbiAgLy8gY2hlY2sgdGhhdCB0aGlzLnNpemUgYW5kIHNpemUgYXJlIHRoZXJlXG4gIC8vIElFOCB0cmlnZ2VycyByZXNpemUgb24gYm9keSBzaXplIGNoYW5nZSwgc28gdGhleSBtaWdodCBub3QgYmVcbiAgdmFyIGhhc1NpemVzID0gdGhpcy5zaXplICYmIHNpemU7XG4gIHJldHVybiBoYXNTaXplcyAmJiBzaXplLmlubmVyV2lkdGggIT09IHRoaXMuc2l6ZS5pbm5lcldpZHRoO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWV0aG9kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vKipcbiAqIGFkZCBpdGVtcyB0byBPdXRsYXllciBpbnN0YW5jZVxuICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBFbGVtZW50fSBlbGVtc1xuICogQHJldHVybnMge0FycmF5fSBpdGVtcyAtIE91dGxheWVyLkl0ZW1zXG4qKi9cbk91dGxheWVyLnByb3RvdHlwZS5hZGRJdGVtcyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbWl6ZSggZWxlbXMgKTtcbiAgLy8gYWRkIGl0ZW1zIHRvIGNvbGxlY3Rpb25cbiAgaWYgKCBpdGVtcy5sZW5ndGggKSB7XG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuY29uY2F0KCBpdGVtcyApO1xuICB9XG4gIHJldHVybiBpdGVtcztcbn07XG5cbi8qKlxuICogTGF5b3V0IG5ld2x5LWFwcGVuZGVkIGl0ZW0gZWxlbWVudHNcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgRWxlbWVudH0gZWxlbXNcbiAqL1xuT3V0bGF5ZXIucHJvdG90eXBlLmFwcGVuZGVkID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgaXRlbXMgPSB0aGlzLmFkZEl0ZW1zKCBlbGVtcyApO1xuICBpZiAoICFpdGVtcy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGxheW91dCBhbmQgcmV2ZWFsIGp1c3QgdGhlIG5ldyBpdGVtc1xuICB0aGlzLmxheW91dEl0ZW1zKCBpdGVtcywgdHJ1ZSApO1xuICB0aGlzLnJldmVhbCggaXRlbXMgKTtcbn07XG5cbi8qKlxuICogTGF5b3V0IHByZXBlbmRlZCBlbGVtZW50c1xuICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBFbGVtZW50fSBlbGVtc1xuICovXG5PdXRsYXllci5wcm90b3R5cGUucHJlcGVuZGVkID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgaXRlbXMgPSB0aGlzLl9pdGVtaXplKCBlbGVtcyApO1xuICBpZiAoICFpdGVtcy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGFkZCBpdGVtcyB0byBiZWdpbm5pbmcgb2YgY29sbGVjdGlvblxuICB2YXIgcHJldmlvdXNJdGVtcyA9IHRoaXMuaXRlbXMuc2xpY2UoMCk7XG4gIHRoaXMuaXRlbXMgPSBpdGVtcy5jb25jYXQoIHByZXZpb3VzSXRlbXMgKTtcbiAgLy8gc3RhcnQgbmV3IGxheW91dFxuICB0aGlzLl9yZXNldExheW91dCgpO1xuICB0aGlzLl9tYW5hZ2VTdGFtcHMoKTtcbiAgLy8gbGF5b3V0IG5ldyBzdHVmZiB3aXRob3V0IHRyYW5zaXRpb25cbiAgdGhpcy5sYXlvdXRJdGVtcyggaXRlbXMsIHRydWUgKTtcbiAgdGhpcy5yZXZlYWwoIGl0ZW1zICk7XG4gIC8vIGxheW91dCBwcmV2aW91cyBpdGVtc1xuICB0aGlzLmxheW91dEl0ZW1zKCBwcmV2aW91c0l0ZW1zICk7XG59O1xuXG4vKipcbiAqIHJldmVhbCBhIGNvbGxlY3Rpb24gb2YgaXRlbXNcbiAqIEBwYXJhbSB7QXJyYXkgb2YgT3V0bGF5ZXIuSXRlbXN9IGl0ZW1zXG4gKi9cbk91dGxheWVyLnByb3RvdHlwZS5yZXZlYWwgPSBmdW5jdGlvbiggaXRlbXMgKSB7XG4gIHRoaXMuX2VtaXRDb21wbGV0ZU9uSXRlbXMoICdyZXZlYWwnLCBpdGVtcyApO1xuXG4gIHZhciBsZW4gPSBpdGVtcyAmJiBpdGVtcy5sZW5ndGg7XG4gIGZvciAoIHZhciBpPTA7IGxlbiAmJiBpIDwgbGVuOyBpKysgKSB7XG4gICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICBpdGVtLnJldmVhbCgpO1xuICB9XG59O1xuXG4vKipcbiAqIGhpZGUgYSBjb2xsZWN0aW9uIG9mIGl0ZW1zXG4gKiBAcGFyYW0ge0FycmF5IG9mIE91dGxheWVyLkl0ZW1zfSBpdGVtc1xuICovXG5PdXRsYXllci5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uKCBpdGVtcyApIHtcbiAgdGhpcy5fZW1pdENvbXBsZXRlT25JdGVtcyggJ2hpZGUnLCBpdGVtcyApO1xuXG4gIHZhciBsZW4gPSBpdGVtcyAmJiBpdGVtcy5sZW5ndGg7XG4gIGZvciAoIHZhciBpPTA7IGxlbiAmJiBpIDwgbGVuOyBpKysgKSB7XG4gICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICBpdGVtLmhpZGUoKTtcbiAgfVxufTtcblxuLyoqXG4gKiByZXZlYWwgaXRlbSBlbGVtZW50c1xuICogQHBhcmFtIHtBcnJheX0sIHtFbGVtZW50fSwge05vZGVMaXN0fSBpdGVtc1xuICovXG5PdXRsYXllci5wcm90b3R5cGUucmV2ZWFsSXRlbUVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCBlbGVtcyApO1xuICB0aGlzLnJldmVhbCggaXRlbXMgKTtcbn07XG5cbi8qKlxuICogaGlkZSBpdGVtIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0FycmF5fSwge0VsZW1lbnR9LCB7Tm9kZUxpc3R9IGl0ZW1zXG4gKi9cbk91dGxheWVyLnByb3RvdHlwZS5oaWRlSXRlbUVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCBlbGVtcyApO1xuICB0aGlzLmhpZGUoIGl0ZW1zICk7XG59O1xuXG4vKipcbiAqIGdldCBPdXRsYXllci5JdGVtLCBnaXZlbiBhbiBFbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7T3V0bGF5ZXIuSXRlbX0gaXRlbVxuICovXG5PdXRsYXllci5wcm90b3R5cGUuZ2V0SXRlbSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICAvLyBsb29wIHRocm91Z2ggaXRlbXMgdG8gZ2V0IHRoZSBvbmUgdGhhdCBtYXRjaGVzXG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHRoaXMuaXRlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xuICAgIGlmICggaXRlbS5lbGVtZW50ID09PSBlbGVtICkge1xuICAgICAgLy8gcmV0dXJuIGl0ZW1cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBnZXQgY29sbGVjdGlvbiBvZiBPdXRsYXllci5JdGVtcywgZ2l2ZW4gRWxlbWVudHNcbiAqIEBwYXJhbSB7QXJyYXl9IGVsZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zIC0gT3V0bGF5ZXIuSXRlbXNcbiAqL1xuT3V0bGF5ZXIucHJvdG90eXBlLmdldEl0ZW1zID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcbiAgdmFyIGl0ZW1zID0gW107XG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IGVsZW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHZhciBlbGVtID0gZWxlbXNbaV07XG4gICAgdmFyIGl0ZW0gPSB0aGlzLmdldEl0ZW0oIGVsZW0gKTtcbiAgICBpZiAoIGl0ZW0gKSB7XG4gICAgICBpdGVtcy5wdXNoKCBpdGVtICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGl0ZW1zO1xufTtcblxuLyoqXG4gKiByZW1vdmUgZWxlbWVudChzKSBmcm9tIGluc3RhbmNlIGFuZCBET01cbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgRWxlbWVudH0gZWxlbXNcbiAqL1xuT3V0bGF5ZXIucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIHJlbW92ZUl0ZW1zID0gdGhpcy5nZXRJdGVtcyggZWxlbXMgKTtcblxuICB0aGlzLl9lbWl0Q29tcGxldGVPbkl0ZW1zKCAncmVtb3ZlJywgcmVtb3ZlSXRlbXMgKTtcblxuICAvLyBiYWlsIGlmIG5vIGl0ZW1zIHRvIHJlbW92ZVxuICBpZiAoICFyZW1vdmVJdGVtcyB8fCAhcmVtb3ZlSXRlbXMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHJlbW92ZUl0ZW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHZhciBpdGVtID0gcmVtb3ZlSXRlbXNbaV07XG4gICAgaXRlbS5yZW1vdmUoKTtcbiAgICAvLyByZW1vdmUgaXRlbSBmcm9tIGNvbGxlY3Rpb25cbiAgICB1dGlscy5yZW1vdmVGcm9tKCB0aGlzLml0ZW1zLCBpdGVtICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGRlc3Ryb3kgLS0tLS0gLy9cblxuLy8gcmVtb3ZlIGFuZCBkaXNhYmxlIE91dGxheWVyIGluc3RhbmNlXG5PdXRsYXllci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAvLyBjbGVhbiB1cCBkeW5hbWljIHN0eWxlc1xuICB2YXIgc3R5bGUgPSB0aGlzLmVsZW1lbnQuc3R5bGU7XG4gIHN0eWxlLmhlaWdodCA9ICcnO1xuICBzdHlsZS5wb3NpdGlvbiA9ICcnO1xuICBzdHlsZS53aWR0aCA9ICcnO1xuICAvLyBkZXN0cm95IGl0ZW1zXG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHRoaXMuaXRlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xuICAgIGl0ZW0uZGVzdHJveSgpO1xuICB9XG5cbiAgdGhpcy51bmJpbmRSZXNpemUoKTtcblxuICB2YXIgaWQgPSB0aGlzLmVsZW1lbnQub3V0bGF5ZXJHVUlEO1xuICBkZWxldGUgaW5zdGFuY2VzWyBpZCBdOyAvLyByZW1vdmUgcmVmZXJlbmNlIHRvIGluc3RhbmNlIGJ5IGlkXG4gIGRlbGV0ZSB0aGlzLmVsZW1lbnQub3V0bGF5ZXJHVUlEO1xuICAvLyByZW1vdmUgZGF0YSBmb3IgalF1ZXJ5XG4gIGlmICggalF1ZXJ5ICkge1xuICAgIGpRdWVyeS5yZW1vdmVEYXRhKCB0aGlzLmVsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IubmFtZXNwYWNlICk7XG4gIH1cblxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZGF0YSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vKipcbiAqIGdldCBPdXRsYXllciBpbnN0YW5jZSBmcm9tIGVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbVxuICogQHJldHVybnMge091dGxheWVyfVxuICovXG5PdXRsYXllci5kYXRhID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIGVsZW0gPSB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIGVsZW0gKTtcbiAgdmFyIGlkID0gZWxlbSAmJiBlbGVtLm91dGxheWVyR1VJRDtcbiAgcmV0dXJuIGlkICYmIGluc3RhbmNlc1sgaWQgXTtcbn07XG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY3JlYXRlIE91dGxheWVyIGNsYXNzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogY3JlYXRlIGEgbGF5b3V0IGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKi9cbk91dGxheWVyLmNyZWF0ZSA9IGZ1bmN0aW9uKCBuYW1lc3BhY2UsIG9wdGlvbnMgKSB7XG4gIC8vIHN1Yi1jbGFzcyBPdXRsYXllclxuICBmdW5jdGlvbiBMYXlvdXQoKSB7XG4gICAgT3V0bGF5ZXIuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICB9XG4gIC8vIGluaGVyaXQgT3V0bGF5ZXIgcHJvdG90eXBlLCB1c2UgT2JqZWN0LmNyZWF0ZSBpZiB0aGVyZVxuICBpZiAoIE9iamVjdC5jcmVhdGUgKSB7XG4gICAgTGF5b3V0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIE91dGxheWVyLnByb3RvdHlwZSApO1xuICB9IGVsc2Uge1xuICAgIHV0aWxzLmV4dGVuZCggTGF5b3V0LnByb3RvdHlwZSwgT3V0bGF5ZXIucHJvdG90eXBlICk7XG4gIH1cbiAgLy8gc2V0IGNvbnRydWN0b3IsIHVzZWQgZm9yIG5hbWVzcGFjZSBhbmQgSXRlbVxuICBMYXlvdXQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTGF5b3V0O1xuXG4gIExheW91dC5kZWZhdWx0cyA9IHV0aWxzLmV4dGVuZCgge30sIE91dGxheWVyLmRlZmF1bHRzICk7XG4gIC8vIGFwcGx5IG5ldyBvcHRpb25zXG4gIHV0aWxzLmV4dGVuZCggTGF5b3V0LmRlZmF1bHRzLCBvcHRpb25zICk7XG4gIC8vIGtlZXAgcHJvdG90eXBlLnNldHRpbmdzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSAoUGFja2VyeSB2MS4yLjApXG4gIExheW91dC5wcm90b3R5cGUuc2V0dGluZ3MgPSB7fTtcblxuICBMYXlvdXQubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuXG4gIExheW91dC5kYXRhID0gT3V0bGF5ZXIuZGF0YTtcblxuICAvLyBzdWItY2xhc3MgSXRlbVxuICBMYXlvdXQuSXRlbSA9IGZ1bmN0aW9uIExheW91dEl0ZW0oKSB7XG4gICAgSXRlbS5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gIH07XG5cbiAgTGF5b3V0Lkl0ZW0ucHJvdG90eXBlID0gbmV3IEl0ZW0oKTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkZWNsYXJhdGl2ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIHV0aWxzLmh0bWxJbml0KCBMYXlvdXQsIG5hbWVzcGFjZSApO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGpRdWVyeSBicmlkZ2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvLyBtYWtlIGludG8galF1ZXJ5IHBsdWdpblxuICBpZiAoIGpRdWVyeSAmJiBqUXVlcnkuYnJpZGdldCApIHtcbiAgICBqUXVlcnkuYnJpZGdldCggbmFtZXNwYWNlLCBMYXlvdXQgKTtcbiAgfVxuXG4gIHJldHVybiBMYXlvdXQ7XG59O1xuXG4vLyAtLS0tLSBmaW4gLS0tLS0gLy9cblxuLy8gYmFjayBpbiBnbG9iYWxcbk91dGxheWVyLkl0ZW0gPSBJdGVtO1xuXG5yZXR1cm4gT3V0bGF5ZXI7XG5cbn0pKTtcblxuIiwiLyoqXG4gKiBQYWNrZXJ5IEl0ZW0gRWxlbWVudFxuKiovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cblxuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgICAnZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eScsXG4gICAgICAgICdvdXRsYXllci9vdXRsYXllcicsXG4gICAgICAgICcuL3JlY3QnXG4gICAgICBdLFxuICAgICAgZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJ2Rlc2FuZHJvLWdldC1zdHlsZS1wcm9wZXJ0eScpLFxuICAgICAgcmVxdWlyZSgnb3V0bGF5ZXInKSxcbiAgICAgIHJlcXVpcmUoJy4vcmVjdCcpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5QYWNrZXJ5Lkl0ZW0gPSBmYWN0b3J5KFxuICAgICAgd2luZG93LmdldFN0eWxlUHJvcGVydHksXG4gICAgICB3aW5kb3cuT3V0bGF5ZXIsXG4gICAgICB3aW5kb3cuUGFja2VyeS5SZWN0XG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIGdldFN0eWxlUHJvcGVydHksIE91dGxheWVyLCBSZWN0ICkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJdGVtIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpO1xuXG4vLyBzdWItY2xhc3MgSXRlbVxudmFyIEl0ZW0gPSBmdW5jdGlvbiBQYWNrZXJ5SXRlbSgpIHtcbiAgT3V0bGF5ZXIuSXRlbS5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG59O1xuXG5JdGVtLnByb3RvdHlwZSA9IG5ldyBPdXRsYXllci5JdGVtKCk7XG5cbnZhciBwcm90b0NyZWF0ZSA9IEl0ZW0ucHJvdG90eXBlLl9jcmVhdGU7XG5JdGVtLnByb3RvdHlwZS5fY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNhbGwgZGVmYXVsdCBfY3JlYXRlIGxvZ2ljXG4gIHByb3RvQ3JlYXRlLmNhbGwoIHRoaXMgKTtcbiAgdGhpcy5yZWN0ID0gbmV3IFJlY3QoKTtcbiAgLy8gcmVjdCB1c2VkIGZvciBwbGFjaW5nLCBpbiBkcmFnIG9yIFBhY2tlcnkuZml0KClcbiAgdGhpcy5wbGFjZVJlY3QgPSBuZXcgUmVjdCgpO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZHJhZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5JdGVtLnByb3RvdHlwZS5kcmFnU3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5nZXRQb3NpdGlvbigpO1xuICB0aGlzLnJlbW92ZVRyYW5zaXRpb25TdHlsZXMoKTtcbiAgLy8gcmVtb3ZlIHRyYW5zZm9ybSBwcm9wZXJ0eSBmcm9tIHRyYW5zaXRpb25cbiAgaWYgKCB0aGlzLmlzVHJhbnNpdGlvbmluZyAmJiB0cmFuc2Zvcm1Qcm9wZXJ0eSApIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbIHRyYW5zZm9ybVByb3BlcnR5IF0gPSAnbm9uZSc7XG4gIH1cbiAgdGhpcy5nZXRTaXplKCk7XG4gIC8vIGNyZWF0ZSBwbGFjZSByZWN0LCB1c2VkIGZvciBwb3NpdGlvbiB3aGVuIGRyYWdnZWQgdGhlbiBkcm9wcGVkXG4gIC8vIG9yIHdoZW4gcG9zaXRpb25pbmdcbiAgdGhpcy5pc1BsYWNpbmcgPSB0cnVlO1xuICB0aGlzLm5lZWRzUG9zaXRpb25pbmcgPSBmYWxzZTtcbiAgdGhpcy5wb3NpdGlvblBsYWNlUmVjdCggdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKTtcbiAgdGhpcy5pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgdGhpcy5kaWREcmFnID0gZmFsc2U7XG59O1xuXG4vKipcbiAqIGhhbmRsZSBpdGVtIHdoZW4gaXQgaXMgZHJhZ2dlZFxuICogQHBhcmFtIHtOdW1iZXJ9IHggLSBob3Jpem9udGFsIHBvc2l0aW9uIG9mIGRyYWdnZWQgaXRlbVxuICogQHBhcmFtIHtOdW1iZXJ9IHkgLSB2ZXJ0aWNhbCBwb3NpdGlvbiBvZiBkcmFnZ2VkIGl0ZW1cbiAqL1xuSXRlbS5wcm90b3R5cGUuZHJhZ01vdmUgPSBmdW5jdGlvbiggeCwgeSApIHtcbiAgdGhpcy5kaWREcmFnID0gdHJ1ZTtcbiAgdmFyIHBhY2tlcnlTaXplID0gdGhpcy5sYXlvdXQuc2l6ZTtcbiAgeCAtPSBwYWNrZXJ5U2l6ZS5wYWRkaW5nTGVmdDtcbiAgeSAtPSBwYWNrZXJ5U2l6ZS5wYWRkaW5nVG9wO1xuICB0aGlzLnBvc2l0aW9uUGxhY2VSZWN0KCB4LCB5ICk7XG59O1xuXG5JdGVtLnByb3RvdHlwZS5kcmFnU3RvcCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmdldFBvc2l0aW9uKCk7XG4gIHZhciBpc0RpZmZYID0gdGhpcy5wb3NpdGlvbi54ICE9IHRoaXMucGxhY2VSZWN0Lng7XG4gIHZhciBpc0RpZmZZID0gdGhpcy5wb3NpdGlvbi55ICE9IHRoaXMucGxhY2VSZWN0Lnk7XG4gIC8vIHNldCBwb3N0LWRyYWcgcG9zaXRpb25pbmcgZmxhZ1xuICB0aGlzLm5lZWRzUG9zaXRpb25pbmcgPSBpc0RpZmZYIHx8IGlzRGlmZlk7XG4gIC8vIHJlc2V0IGZsYWdcbiAgdGhpcy5kaWREcmFnID0gZmFsc2U7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwbGFjaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogcG9zaXRpb24gYSByZWN0IHRoYXQgd2lsbCBvY2N1cHkgc3BhY2UgaW4gdGhlIHBhY2tlclxuICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzTWF4WUNvbnRhaW5lZFxuICovXG5JdGVtLnByb3RvdHlwZS5wb3NpdGlvblBsYWNlUmVjdCA9IGZ1bmN0aW9uKCB4LCB5LCBpc01heFlPcGVuICkge1xuICB0aGlzLnBsYWNlUmVjdC54ID0gdGhpcy5nZXRQbGFjZVJlY3RDb29yZCggeCwgdHJ1ZSApO1xuICB0aGlzLnBsYWNlUmVjdC55ID0gdGhpcy5nZXRQbGFjZVJlY3RDb29yZCggeSwgZmFsc2UsIGlzTWF4WU9wZW4gKTtcbn07XG5cbi8qKlxuICogZ2V0IHgveSBjb29yZGluYXRlIGZvciBwbGFjZSByZWN0XG4gKiBAcGFyYW0ge051bWJlcn0gY29vcmQgLSB4IG9yIHlcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNYXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzTWF4T3BlbiAtIGRvZXMgbm90IGxpbWl0IHZhbHVlIHRvIG91dGVyIGJvdW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBjb29yZCAtIHByb2Nlc3NlZCB4IG9yIHlcbiAqL1xuSXRlbS5wcm90b3R5cGUuZ2V0UGxhY2VSZWN0Q29vcmQgPSBmdW5jdGlvbiggY29vcmQsIGlzWCwgaXNNYXhPcGVuICkge1xuICB2YXIgbWVhc3VyZSA9IGlzWCA/ICdXaWR0aCcgOiAnSGVpZ2h0JztcbiAgdmFyIHNpemUgPSB0aGlzLnNpemVbICdvdXRlcicgKyBtZWFzdXJlIF07XG4gIHZhciBzZWdtZW50ID0gdGhpcy5sYXlvdXRbIGlzWCA/ICdjb2x1bW5XaWR0aCcgOiAncm93SGVpZ2h0JyBdO1xuICB2YXIgcGFyZW50U2l6ZSA9IHRoaXMubGF5b3V0LnNpemVbICdpbm5lcicgKyBtZWFzdXJlIF07XG5cbiAgLy8gYWRkaXRpb25hbCBwYXJlbnRTaXplIGNhbGN1bGF0aW9ucyBmb3IgWVxuICBpZiAoICFpc1ggKSB7XG4gICAgcGFyZW50U2l6ZSA9IE1hdGgubWF4KCBwYXJlbnRTaXplLCB0aGlzLmxheW91dC5tYXhZICk7XG4gICAgLy8gcHJldmVudCBndXR0ZXIgZnJvbSBidW1waW5nIHVwIGhlaWdodCB3aGVuIG5vbi12ZXJ0aWNhbCBncmlkXG4gICAgaWYgKCAhdGhpcy5sYXlvdXQucm93SGVpZ2h0ICkge1xuICAgICAgcGFyZW50U2l6ZSAtPSB0aGlzLmxheW91dC5ndXR0ZXI7XG4gICAgfVxuICB9XG5cbiAgdmFyIG1heDtcblxuICBpZiAoIHNlZ21lbnQgKSB7XG4gICAgc2VnbWVudCArPSB0aGlzLmxheW91dC5ndXR0ZXI7XG4gICAgLy8gYWxsb3cgZm9yIGxhc3QgY29sdW1uIHRvIHJlYWNoIHRoZSBlZGdlXG4gICAgcGFyZW50U2l6ZSArPSBpc1ggPyB0aGlzLmxheW91dC5ndXR0ZXIgOiAwO1xuICAgIC8vIHNuYXAgdG8gY2xvc2VzdCBzZWdtZW50XG4gICAgY29vcmQgPSBNYXRoLnJvdW5kKCBjb29yZCAvIHNlZ21lbnQgKTtcbiAgICAvLyBjb250YWluIHRvIG91dGVyIGJvdW5kXG4gICAgLy8gY29udGFpbiBub24tZ3Jvd2luZyBib3VuZCwgYWxsb3cgZ3Jvd2luZyBib3VuZCB0byBncm93XG4gICAgdmFyIG1hdGhNZXRob2Q7XG4gICAgaWYgKCB0aGlzLmxheW91dC5vcHRpb25zLmlzSG9yaXpvbnRhbCApIHtcbiAgICAgIG1hdGhNZXRob2QgPSAhaXNYID8gJ2Zsb29yJyA6ICdjZWlsJztcbiAgICB9IGVsc2Uge1xuICAgICAgbWF0aE1ldGhvZCA9IGlzWCA/ICdmbG9vcicgOiAnY2VpbCc7XG4gICAgfVxuICAgIHZhciBtYXhTZWdtZW50cyA9IE1hdGhbIG1hdGhNZXRob2QgXSggcGFyZW50U2l6ZSAvIHNlZ21lbnQgKTtcbiAgICBtYXhTZWdtZW50cyAtPSBNYXRoLmNlaWwoIHNpemUgLyBzZWdtZW50ICk7XG4gICAgbWF4ID0gbWF4U2VnbWVudHM7XG4gIH0gZWxzZSB7XG4gICAgbWF4ID0gcGFyZW50U2l6ZSAtIHNpemU7XG4gIH1cblxuICBjb29yZCA9IGlzTWF4T3BlbiA/IGNvb3JkIDogTWF0aC5taW4oIGNvb3JkLCBtYXggKTtcbiAgY29vcmQgKj0gc2VnbWVudCB8fCAxO1xuXG4gIHJldHVybiBNYXRoLm1heCggMCwgY29vcmQgKTtcbn07XG5cbkl0ZW0ucHJvdG90eXBlLmNvcHlQbGFjZVJlY3RQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJlY3QueCA9IHRoaXMucGxhY2VSZWN0Lng7XG4gIHRoaXMucmVjdC55ID0gdGhpcy5wbGFjZVJlY3QueTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG4vLyByZW1vdmUgZWxlbWVudCBmcm9tIERPTVxuSXRlbS5wcm90b3R5cGUucmVtb3ZlRWxlbSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggdGhpcy5lbGVtZW50ICk7XG4gIC8vIGFkZCBzcGFjZSBiYWNrIHRvIHBhY2tlclxuICB0aGlzLmxheW91dC5wYWNrZXIuYWRkU3BhY2UoIHRoaXMucmVjdCApO1xuICB0aGlzLmVtaXRFdmVudCggJ3JlbW92ZScsIFsgdGhpcyBdICk7XG59O1xuXG4vLyAtLS0tLSAgLS0tLS0gLy9cblxucmV0dXJuIEl0ZW07XG5cbn0pKTtcbiIsIi8qKlxuICogUGFja2VyXG4gKiBiaW4tcGFja2luZyBhbGdvcml0aG1cbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbICcuL3JlY3QnIF0sIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICByZXF1aXJlKCcuL3JlY3QnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB2YXIgUGFja2VyeSA9IHdpbmRvdy5QYWNrZXJ5ID0gd2luZG93LlBhY2tlcnkgfHwge307XG4gICAgUGFja2VyeS5QYWNrZXIgPSBmYWN0b3J5KCBQYWNrZXJ5LlJlY3QgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIFJlY3QgKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBhY2tlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vKipcbiAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxuICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodFxuICogQHBhcmFtIHtTdHJpbmd9IHNvcnREaXJlY3Rpb25cbiAqICAgdG9wTGVmdCBmb3IgdmVydGljYWwsIGxlZnRUb3AgZm9yIGhvcml6b250YWxcbiAqL1xuZnVuY3Rpb24gUGFja2VyKCB3aWR0aCwgaGVpZ2h0LCBzb3J0RGlyZWN0aW9uICkge1xuICB0aGlzLndpZHRoID0gd2lkdGggfHwgMDtcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgMDtcbiAgdGhpcy5zb3J0RGlyZWN0aW9uID0gc29ydERpcmVjdGlvbiB8fCAnZG93bndhcmRMZWZ0VG9SaWdodCc7XG5cbiAgdGhpcy5yZXNldCgpO1xufVxuXG5QYWNrZXIucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc3BhY2VzID0gW107XG4gIHRoaXMubmV3U3BhY2VzID0gW107XG5cbiAgdmFyIGluaXRpYWxTcGFjZSA9IG5ldyBSZWN0KHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgaGVpZ2h0OiB0aGlzLmhlaWdodFxuICB9KTtcblxuICB0aGlzLnNwYWNlcy5wdXNoKCBpbml0aWFsU3BhY2UgKTtcbiAgLy8gc2V0IHNvcnRlclxuICB0aGlzLnNvcnRlciA9IHNvcnRlcnNbIHRoaXMuc29ydERpcmVjdGlvbiBdIHx8IHNvcnRlcnMuZG93bndhcmRMZWZ0VG9SaWdodDtcbn07XG5cbi8vIGNoYW5nZSB4IGFuZCB5IG9mIHJlY3QgdG8gZml0IHdpdGggaW4gUGFja2VyJ3MgYXZhaWxhYmxlIHNwYWNlc1xuUGFja2VyLnByb3RvdHlwZS5wYWNrID0gZnVuY3Rpb24oIHJlY3QgKSB7XG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHRoaXMuc3BhY2VzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHZhciBzcGFjZSA9IHRoaXMuc3BhY2VzW2ldO1xuICAgIGlmICggc3BhY2UuY2FuRml0KCByZWN0ICkgKSB7XG4gICAgICB0aGlzLnBsYWNlSW5TcGFjZSggcmVjdCwgc3BhY2UgKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufTtcblxuUGFja2VyLnByb3RvdHlwZS5wbGFjZUluU3BhY2UgPSBmdW5jdGlvbiggcmVjdCwgc3BhY2UgKSB7XG4gIC8vIHBsYWNlIHJlY3QgaW4gc3BhY2VcbiAgcmVjdC54ID0gc3BhY2UueDtcbiAgcmVjdC55ID0gc3BhY2UueTtcblxuICB0aGlzLnBsYWNlZCggcmVjdCApO1xufTtcblxuLy8gdXBkYXRlIHNwYWNlcyB3aXRoIHBsYWNlZCByZWN0XG5QYWNrZXIucHJvdG90eXBlLnBsYWNlZCA9IGZ1bmN0aW9uKCByZWN0ICkge1xuICAvLyB1cGRhdGUgc3BhY2VzXG4gIHZhciByZXZpc2VkU3BhY2VzID0gW107XG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHRoaXMuc3BhY2VzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHZhciBzcGFjZSA9IHRoaXMuc3BhY2VzW2ldO1xuICAgIHZhciBuZXdTcGFjZXMgPSBzcGFjZS5nZXRNYXhpbWFsRnJlZVJlY3RzKCByZWN0ICk7XG4gICAgLy8gYWRkIGVpdGhlciB0aGUgb3JpZ2luYWwgc3BhY2Ugb3IgdGhlIG5ldyBzcGFjZXMgdG8gdGhlIHJldmlzZWQgc3BhY2VzXG4gICAgaWYgKCBuZXdTcGFjZXMgKSB7XG4gICAgICByZXZpc2VkU3BhY2VzLnB1c2guYXBwbHkoIHJldmlzZWRTcGFjZXMsIG5ld1NwYWNlcyApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXZpc2VkU3BhY2VzLnB1c2goIHNwYWNlICk7XG4gICAgfVxuICB9XG5cbiAgdGhpcy5zcGFjZXMgPSByZXZpc2VkU3BhY2VzO1xuXG4gIHRoaXMubWVyZ2VTb3J0U3BhY2VzKCk7XG59O1xuXG5QYWNrZXIucHJvdG90eXBlLm1lcmdlU29ydFNwYWNlcyA9IGZ1bmN0aW9uKCkge1xuICAvLyByZW1vdmUgcmVkdW5kYW50IHNwYWNlc1xuICBQYWNrZXIubWVyZ2VSZWN0cyggdGhpcy5zcGFjZXMgKTtcbiAgdGhpcy5zcGFjZXMuc29ydCggdGhpcy5zb3J0ZXIgKTtcbn07XG5cbi8vIGFkZCBhIHNwYWNlIGJhY2tcblBhY2tlci5wcm90b3R5cGUuYWRkU3BhY2UgPSBmdW5jdGlvbiggcmVjdCApIHtcbiAgdGhpcy5zcGFjZXMucHVzaCggcmVjdCApO1xuICB0aGlzLm1lcmdlU29ydFNwYWNlcygpO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdXRpbGl0eSBmdW5jdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBSZW1vdmUgcmVkdW5kYW50IHJlY3RhbmdsZSBmcm9tIGFycmF5IG9mIHJlY3RhbmdsZXNcbiAqIEBwYXJhbSB7QXJyYXl9IHJlY3RzOiBhbiBhcnJheSBvZiBSZWN0c1xuICogQHJldHVybnMge0FycmF5fSByZWN0czogYW4gYXJyYXkgb2YgUmVjdHNcbioqL1xuUGFja2VyLm1lcmdlUmVjdHMgPSBmdW5jdGlvbiggcmVjdHMgKSB7XG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHJlY3RzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHZhciByZWN0ID0gcmVjdHNbaV07XG4gICAgLy8gc2tpcCBvdmVyIHRoaXMgcmVjdCBpZiBpdCB3YXMgYWxyZWFkeSByZW1vdmVkXG4gICAgaWYgKCAhcmVjdCApIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICAvLyBjbG9uZSByZWN0cyB3ZSdyZSB0ZXN0aW5nLCByZW1vdmUgdGhpcyByZWN0XG4gICAgdmFyIGNvbXBhcmVSZWN0cyA9IHJlY3RzLnNsaWNlKDApO1xuICAgIC8vIGRvIG5vdCBjb21wYXJlIHdpdGggc2VsZlxuICAgIGNvbXBhcmVSZWN0cy5zcGxpY2UoIGksIDEgKTtcbiAgICAvLyBjb21wYXJlIHRoaXMgcmVjdCB3aXRoIG90aGVyc1xuICAgIHZhciByZW1vdmVkQ291bnQgPSAwO1xuICAgIGZvciAoIHZhciBqPTAsIGpMZW4gPSBjb21wYXJlUmVjdHMubGVuZ3RoOyBqIDwgakxlbjsgaisrICkge1xuICAgICAgdmFyIGNvbXBhcmVSZWN0ID0gY29tcGFyZVJlY3RzW2pdO1xuICAgICAgLy8gaWYgdGhpcyByZWN0IGNvbnRhaW5zIGFub3RoZXIsXG4gICAgICAvLyByZW1vdmUgdGhhdCByZWN0IGZyb20gdGVzdCBjb2xsZWN0aW9uXG4gICAgICB2YXIgaW5kZXhBZGp1c3QgPSBpID4gaiA/IDAgOiAxO1xuICAgICAgaWYgKCByZWN0LmNvbnRhaW5zKCBjb21wYXJlUmVjdCApICkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyggJ2N1cnJlbnQgdGVzdCByZWN0czonICsgdGVzdFJlY3RzLmxlbmd0aCwgdGVzdFJlY3RzICk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCBpLCBqLCBpbmRleEFkanVzdCwgcmVjdCwgY29tcGFyZVJlY3QgKTtcbiAgICAgICAgcmVjdHMuc3BsaWNlKCBqICsgaW5kZXhBZGp1c3QgLSByZW1vdmVkQ291bnQsIDEgKTtcbiAgICAgICAgcmVtb3ZlZENvdW50Kys7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlY3RzO1xufTtcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzb3J0ZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGZ1bmN0aW9ucyBmb3Igc29ydGluZyByZWN0cyBpbiBvcmRlclxudmFyIHNvcnRlcnMgPSB7XG4gIC8vIHRvcCBkb3duLCB0aGVuIGxlZnQgdG8gcmlnaHRcbiAgZG93bndhcmRMZWZ0VG9SaWdodDogZnVuY3Rpb24oIGEsIGIgKSB7XG4gICAgcmV0dXJuIGEueSAtIGIueSB8fCBhLnggLSBiLng7XG4gIH0sXG4gIC8vIGxlZnQgdG8gcmlnaHQsIHRoZW4gdG9wIGRvd25cbiAgcmlnaHR3YXJkVG9wVG9Cb3R0b206IGZ1bmN0aW9uKCBhLCBiICkge1xuICAgIHJldHVybiBhLnggLSBiLnggfHwgYS55IC0gYi55O1xuICB9XG59O1xuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5yZXR1cm4gUGFja2VyO1xuXG59KSk7IiwiLyohXG4gKiBQYWNrZXJ5IHYxLjQuM1xuICogYmluLXBhY2tpbmcgbGF5b3V0IGxpYnJhcnlcbiAqXG4gKiBMaWNlbnNlZCBHUEx2MyBmb3Igb3BlbiBzb3VyY2UgdXNlXG4gKiBvciBGbGlja2l0eSBDb21tZXJjaWFsIExpY2Vuc2UgZm9yIGNvbW1lcmNpYWwgdXNlXG4gKlxuICogaHR0cDovL3BhY2tlcnkubWV0YWZpenp5LmNvXG4gKiBDb3B5cmlnaHQgMjAxNSBNZXRhZml6enlcbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAgICdjbGFzc2llL2NsYXNzaWUnLFxuICAgICAgICAnZ2V0LXNpemUvZ2V0LXNpemUnLFxuICAgICAgICAnb3V0bGF5ZXIvb3V0bGF5ZXInLFxuICAgICAgICAnLi9yZWN0JyxcbiAgICAgICAgJy4vcGFja2VyJyxcbiAgICAgICAgJy4vaXRlbSdcbiAgICAgIF0sXG4gICAgICBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgcmVxdWlyZSgnZGVzYW5kcm8tY2xhc3NpZScpLFxuICAgICAgcmVxdWlyZSgnZ2V0LXNpemUnKSxcbiAgICAgIHJlcXVpcmUoJ291dGxheWVyJyksXG4gICAgICByZXF1aXJlKCcuL3JlY3QnKSxcbiAgICAgIHJlcXVpcmUoJy4vcGFja2VyJyksXG4gICAgICByZXF1aXJlKCcuL2l0ZW0nKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuUGFja2VyeSA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3cuY2xhc3NpZSxcbiAgICAgIHdpbmRvdy5nZXRTaXplLFxuICAgICAgd2luZG93Lk91dGxheWVyLFxuICAgICAgd2luZG93LlBhY2tlcnkuUmVjdCxcbiAgICAgIHdpbmRvdy5QYWNrZXJ5LlBhY2tlcixcbiAgICAgIHdpbmRvdy5QYWNrZXJ5Lkl0ZW1cbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggY2xhc3NpZSwgZ2V0U2l6ZSwgT3V0bGF5ZXIsIFJlY3QsIFBhY2tlciwgSXRlbSApIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0gUmVjdCAtLS0tLSAvL1xuXG4vLyBhbGxvdyBmb3IgcGl4ZWwgcm91bmRpbmcgZXJyb3JzIElFOC1JRTExICYgRmlyZWZveDsgIzIyN1xuUmVjdC5wcm90b3R5cGUuY2FuRml0ID0gZnVuY3Rpb24oIHJlY3QgKSB7XG4gIHJldHVybiB0aGlzLndpZHRoID49IHJlY3Qud2lkdGggLSAxICYmIHRoaXMuaGVpZ2h0ID49IHJlY3QuaGVpZ2h0IC0gMTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBhY2tlcnkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gY3JlYXRlIGFuIE91dGxheWVyIGxheW91dCBjbGFzc1xudmFyIFBhY2tlcnkgPSBPdXRsYXllci5jcmVhdGUoJ3BhY2tlcnknKTtcblBhY2tlcnkuSXRlbSA9IEl0ZW07XG5cblBhY2tlcnkucHJvdG90eXBlLl9jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gY2FsbCBzdXBlclxuICBPdXRsYXllci5wcm90b3R5cGUuX2NyZWF0ZS5jYWxsKCB0aGlzICk7XG5cbiAgLy8gaW5pdGlhbCBwcm9wZXJ0aWVzXG4gIHRoaXMucGFja2VyID0gbmV3IFBhY2tlcigpO1xuXG4gIC8vIExlZnQgb3ZlciBmcm9tIHYxLjBcbiAgdGhpcy5zdGFtcCggdGhpcy5vcHRpb25zLnN0YW1wZWQgKTtcblxuICAvLyBjcmVhdGUgZHJhZyBoYW5kbGVyc1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuICB0aGlzLmhhbmRsZURyYWdnYWJpbGx5ID0ge1xuICAgIGRyYWdTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICBfdGhpcy5pdGVtRHJhZ1N0YXJ0KCB0aGlzLmVsZW1lbnQgKTtcbiAgICB9LFxuICAgIGRyYWdNb3ZlOiBmdW5jdGlvbigpIHtcbiAgICAgIF90aGlzLml0ZW1EcmFnTW92ZSggdGhpcy5lbGVtZW50LCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSApO1xuICAgIH0sXG4gICAgZHJhZ0VuZDogZnVuY3Rpb24oKSB7XG4gICAgICBfdGhpcy5pdGVtRHJhZ0VuZCggdGhpcy5lbGVtZW50ICk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuaGFuZGxlVUlEcmFnZ2FibGUgPSB7XG4gICAgc3RhcnQ6IGZ1bmN0aW9uIGhhbmRsZVVJRHJhZ2dhYmxlU3RhcnQoIGV2ZW50LCB1aSApIHtcbiAgICAgIC8vIEhUTUw1IG1heSB0cmlnZ2VyIGRyYWdzdGFydCwgZGlzbWlzcyBIVE1MNSBkcmFnZ2luZ1xuICAgICAgaWYgKCAhdWkgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIF90aGlzLml0ZW1EcmFnU3RhcnQoIGV2ZW50LmN1cnJlbnRUYXJnZXQgKTtcbiAgICB9LFxuICAgIGRyYWc6IGZ1bmN0aW9uIGhhbmRsZVVJRHJhZ2dhYmxlRHJhZyggZXZlbnQsIHVpICkge1xuICAgICAgaWYgKCAhdWkgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIF90aGlzLml0ZW1EcmFnTW92ZSggZXZlbnQuY3VycmVudFRhcmdldCwgdWkucG9zaXRpb24ubGVmdCwgdWkucG9zaXRpb24udG9wICk7XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbiBoYW5kbGVVSURyYWdnYWJsZVN0b3AoIGV2ZW50LCB1aSApIHtcbiAgICAgIGlmICggIXVpICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBfdGhpcy5pdGVtRHJhZ0VuZCggZXZlbnQuY3VycmVudFRhcmdldCApO1xuICAgIH1cbiAgfTtcblxufTtcblxuXG4vLyAtLS0tLSBpbml0ICYgbGF5b3V0IC0tLS0tIC8vXG5cbi8qKlxuICogbG9naWMgYmVmb3JlIGFueSBuZXcgbGF5b3V0XG4gKi9cblBhY2tlcnkucHJvdG90eXBlLl9yZXNldExheW91dCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmdldFNpemUoKTtcblxuICB0aGlzLl9nZXRNZWFzdXJlbWVudHMoKTtcblxuICAvLyByZXNldCBwYWNrZXJcbiAgdmFyIHBhY2tlciA9IHRoaXMucGFja2VyO1xuICAvLyBwYWNrZXIgc2V0dGluZ3MsIGlmIGhvcml6b250YWwgb3IgdmVydGljYWxcbiAgaWYgKCB0aGlzLm9wdGlvbnMuaXNIb3Jpem9udGFsICkge1xuICAgIHBhY2tlci53aWR0aCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICBwYWNrZXIuaGVpZ2h0ID0gdGhpcy5zaXplLmlubmVySGVpZ2h0ICsgdGhpcy5ndXR0ZXI7XG4gICAgcGFja2VyLnNvcnREaXJlY3Rpb24gPSAncmlnaHR3YXJkVG9wVG9Cb3R0b20nO1xuICB9IGVsc2Uge1xuICAgIHBhY2tlci53aWR0aCA9IHRoaXMuc2l6ZS5pbm5lcldpZHRoICsgdGhpcy5ndXR0ZXI7XG4gICAgcGFja2VyLmhlaWdodCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICBwYWNrZXIuc29ydERpcmVjdGlvbiA9ICdkb3dud2FyZExlZnRUb1JpZ2h0JztcbiAgfVxuXG4gIHBhY2tlci5yZXNldCgpO1xuXG4gIC8vIGxheW91dFxuICB0aGlzLm1heFkgPSAwO1xuICB0aGlzLm1heFggPSAwO1xufTtcblxuLyoqXG4gKiB1cGRhdGUgY29sdW1uV2lkdGgsIHJvd0hlaWdodCwgJiBndXR0ZXJcbiAqIEBwcml2YXRlXG4gKi9cblBhY2tlcnkucHJvdG90eXBlLl9nZXRNZWFzdXJlbWVudHMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fZ2V0TWVhc3VyZW1lbnQoICdjb2x1bW5XaWR0aCcsICd3aWR0aCcgKTtcbiAgdGhpcy5fZ2V0TWVhc3VyZW1lbnQoICdyb3dIZWlnaHQnLCAnaGVpZ2h0JyApO1xuICB0aGlzLl9nZXRNZWFzdXJlbWVudCggJ2d1dHRlcicsICd3aWR0aCcgKTtcbn07XG5cblBhY2tlcnkucHJvdG90eXBlLl9nZXRJdGVtTGF5b3V0UG9zaXRpb24gPSBmdW5jdGlvbiggaXRlbSApIHtcbiAgdGhpcy5fcGFja0l0ZW0oIGl0ZW0gKTtcbiAgcmV0dXJuIGl0ZW0ucmVjdDtcbn07XG5cblxuLyoqXG4gKiBsYXlvdXQgaXRlbSBpbiBwYWNrZXJcbiAqIEBwYXJhbSB7UGFja2VyeS5JdGVtfSBpdGVtXG4gKi9cblBhY2tlcnkucHJvdG90eXBlLl9wYWNrSXRlbSA9IGZ1bmN0aW9uKCBpdGVtICkge1xuICB0aGlzLl9zZXRSZWN0U2l6ZSggaXRlbS5lbGVtZW50LCBpdGVtLnJlY3QgKTtcbiAgLy8gcGFjayB0aGUgcmVjdCBpbiB0aGUgcGFja2VyXG4gIHRoaXMucGFja2VyLnBhY2soIGl0ZW0ucmVjdCApO1xuICB0aGlzLl9zZXRNYXhYWSggaXRlbS5yZWN0ICk7XG59O1xuXG4vKipcbiAqIHNldCBtYXggWCBhbmQgWSB2YWx1ZSwgZm9yIHNpemUgb2YgY29udGFpbmVyXG4gKiBAcGFyYW0ge1BhY2tlcnkuUmVjdH0gcmVjdFxuICogQHByaXZhdGVcbiAqL1xuUGFja2VyeS5wcm90b3R5cGUuX3NldE1heFhZID0gZnVuY3Rpb24oIHJlY3QgKSB7XG4gIHRoaXMubWF4WCA9IE1hdGgubWF4KCByZWN0LnggKyByZWN0LndpZHRoLCB0aGlzLm1heFggKTtcbiAgdGhpcy5tYXhZID0gTWF0aC5tYXgoIHJlY3QueSArIHJlY3QuaGVpZ2h0LCB0aGlzLm1heFkgKTtcbn07XG5cbi8qKlxuICogc2V0IHRoZSB3aWR0aCBhbmQgaGVpZ2h0IG9mIGEgcmVjdCwgYXBwbHlpbmcgY29sdW1uV2lkdGggYW5kIHJvd0hlaWdodFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKiBAcGFyYW0ge1BhY2tlcnkuUmVjdH0gcmVjdFxuICovXG5QYWNrZXJ5LnByb3RvdHlwZS5fc2V0UmVjdFNpemUgPSBmdW5jdGlvbiggZWxlbSwgcmVjdCApIHtcbiAgdmFyIHNpemUgPSBnZXRTaXplKCBlbGVtICk7XG4gIHZhciB3ID0gc2l6ZS5vdXRlcldpZHRoO1xuICB2YXIgaCA9IHNpemUub3V0ZXJIZWlnaHQ7XG4gIC8vIHNpemUgZm9yIGNvbHVtbldpZHRoIGFuZCByb3dIZWlnaHQsIGlmIGF2YWlsYWJsZVxuICAvLyBvbmx5IGNoZWNrIGlmIHNpemUgaXMgbm9uLXplcm8sICMxNzdcbiAgaWYgKCB3IHx8IGggKSB7XG4gICAgdyA9IHRoaXMuX2FwcGx5R3JpZEd1dHRlciggdywgdGhpcy5jb2x1bW5XaWR0aCApO1xuICAgIGggPSB0aGlzLl9hcHBseUdyaWRHdXR0ZXIoIGgsIHRoaXMucm93SGVpZ2h0ICk7XG4gIH1cbiAgLy8gcmVjdCBtdXN0IGZpdCBpbiBwYWNrZXJcbiAgcmVjdC53aWR0aCA9IE1hdGgubWluKCB3LCB0aGlzLnBhY2tlci53aWR0aCApO1xuICByZWN0LmhlaWdodCA9IE1hdGgubWluKCBoLCB0aGlzLnBhY2tlci5oZWlnaHQgKTtcbn07XG5cbi8qKlxuICogZml0cyBpdGVtIHRvIGNvbHVtbldpZHRoL3Jvd0hlaWdodCBhbmQgYWRkcyBndXR0ZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtZWFzdXJlbWVudCAtIGl0ZW0gd2lkdGggb3IgaGVpZ2h0XG4gKiBAcGFyYW0ge051bWJlcn0gZ3JpZFNpemUgLSBjb2x1bW5XaWR0aCBvciByb3dIZWlnaHRcbiAqIEByZXR1cm5zIG1lYXN1cmVtZW50XG4gKi9cblBhY2tlcnkucHJvdG90eXBlLl9hcHBseUdyaWRHdXR0ZXIgPSBmdW5jdGlvbiggbWVhc3VyZW1lbnQsIGdyaWRTaXplICkge1xuICAvLyBqdXN0IGFkZCBndXR0ZXIgaWYgbm8gZ3JpZFNpemVcbiAgaWYgKCAhZ3JpZFNpemUgKSB7XG4gICAgcmV0dXJuIG1lYXN1cmVtZW50ICsgdGhpcy5ndXR0ZXI7XG4gIH1cbiAgZ3JpZFNpemUgKz0gdGhpcy5ndXR0ZXI7XG4gIC8vIGZpdCBpdGVtIHRvIGNvbHVtbldpZHRoL3Jvd0hlaWdodFxuICB2YXIgcmVtYWluZGVyID0gbWVhc3VyZW1lbnQgJSBncmlkU2l6ZTtcbiAgdmFyIG1hdGhNZXRob2QgPSByZW1haW5kZXIgJiYgcmVtYWluZGVyIDwgMSA/ICdyb3VuZCcgOiAnY2VpbCc7XG4gIG1lYXN1cmVtZW50ID0gTWF0aFsgbWF0aE1ldGhvZCBdKCBtZWFzdXJlbWVudCAvIGdyaWRTaXplICkgKiBncmlkU2l6ZTtcbiAgcmV0dXJuIG1lYXN1cmVtZW50O1xufTtcblxuUGFja2VyeS5wcm90b3R5cGUuX2dldENvbnRhaW5lclNpemUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLm9wdGlvbnMuaXNIb3Jpem9udGFsICkge1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogdGhpcy5tYXhYIC0gdGhpcy5ndXR0ZXJcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBoZWlnaHQ6IHRoaXMubWF4WSAtIHRoaXMuZ3V0dGVyXG4gICAgfTtcbiAgfVxufTtcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzdGFtcCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vKipcbiAqIG1ha2VzIHNwYWNlIGZvciBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqL1xuUGFja2VyeS5wcm90b3R5cGUuX21hbmFnZVN0YW1wID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cbiAgdmFyIGl0ZW0gPSB0aGlzLmdldEl0ZW0oIGVsZW0gKTtcbiAgdmFyIHJlY3Q7XG4gIGlmICggaXRlbSAmJiBpdGVtLmlzUGxhY2luZyApIHtcbiAgICByZWN0ID0gaXRlbS5wbGFjZVJlY3Q7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG9mZnNldCA9IHRoaXMuX2dldEVsZW1lbnRPZmZzZXQoIGVsZW0gKTtcbiAgICByZWN0ID0gbmV3IFJlY3Qoe1xuICAgICAgeDogdGhpcy5vcHRpb25zLmlzT3JpZ2luTGVmdCA/IG9mZnNldC5sZWZ0IDogb2Zmc2V0LnJpZ2h0LFxuICAgICAgeTogdGhpcy5vcHRpb25zLmlzT3JpZ2luVG9wID8gb2Zmc2V0LnRvcCA6IG9mZnNldC5ib3R0b21cbiAgICB9KTtcbiAgfVxuXG4gIHRoaXMuX3NldFJlY3RTaXplKCBlbGVtLCByZWN0ICk7XG4gIC8vIHNhdmUgaXRzIHNwYWNlIGluIHRoZSBwYWNrZXJcbiAgdGhpcy5wYWNrZXIucGxhY2VkKCByZWN0ICk7XG4gIHRoaXMuX3NldE1heFhZKCByZWN0ICk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtZXRob2RzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIHZlcnRpY2FsU29ydGVyKCBhLCBiICkge1xuICByZXR1cm4gYS5wb3NpdGlvbi55IC0gYi5wb3NpdGlvbi55IHx8IGEucG9zaXRpb24ueCAtIGIucG9zaXRpb24ueDtcbn1cblxuZnVuY3Rpb24gaG9yaXpvbnRhbFNvcnRlciggYSwgYiApIHtcbiAgcmV0dXJuIGEucG9zaXRpb24ueCAtIGIucG9zaXRpb24ueCB8fCBhLnBvc2l0aW9uLnkgLSBiLnBvc2l0aW9uLnk7XG59XG5cblBhY2tlcnkucHJvdG90eXBlLnNvcnRJdGVtc0J5UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNvcnRlciA9IHRoaXMub3B0aW9ucy5pc0hvcml6b250YWwgPyBob3Jpem9udGFsU29ydGVyIDogdmVydGljYWxTb3J0ZXI7XG4gIHRoaXMuaXRlbXMuc29ydCggc29ydGVyICk7XG59O1xuXG4vKipcbiAqIEZpdCBpdGVtIGVsZW1lbnQgaW4gaXRzIGN1cnJlbnQgcG9zaXRpb25cbiAqIFBhY2tlcnkgd2lsbCBwb3NpdGlvbiBlbGVtZW50cyBhcm91bmQgaXRcbiAqIHVzZWZ1bCBmb3IgZXhwYW5kaW5nIGVsZW1lbnRzXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKiBAcGFyYW0ge051bWJlcn0geCAtIGhvcml6b250YWwgZGVzdGluYXRpb24gcG9zaXRpb24sIG9wdGlvbmFsXG4gKiBAcGFyYW0ge051bWJlcn0geSAtIHZlcnRpY2FsIGRlc3RpbmF0aW9uIHBvc2l0aW9uLCBvcHRpb25hbFxuICovXG5QYWNrZXJ5LnByb3RvdHlwZS5maXQgPSBmdW5jdGlvbiggZWxlbSwgeCwgeSApIHtcbiAgdmFyIGl0ZW0gPSB0aGlzLmdldEl0ZW0oIGVsZW0gKTtcbiAgaWYgKCAhaXRlbSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBwcmVwYXJlIGludGVybmFsIHByb3BlcnRpZXNcbiAgdGhpcy5fZ2V0TWVhc3VyZW1lbnRzKCk7XG5cbiAgLy8gc3RhbXAgaXRlbSB0byBnZXQgaXQgb3V0IG9mIGxheW91dFxuICB0aGlzLnN0YW1wKCBpdGVtLmVsZW1lbnQgKTtcbiAgLy8gcmVxdWlyZWQgZm9yIHBvc2l0aW9uUGxhY2VSZWN0XG4gIGl0ZW0uZ2V0U2l6ZSgpO1xuICAvLyBzZXQgcGxhY2luZyBmbGFnXG4gIGl0ZW0uaXNQbGFjaW5nID0gdHJ1ZTtcbiAgLy8gZmFsbCBiYWNrIHRvIGN1cnJlbnQgcG9zaXRpb24gZm9yIGZpdHRpbmdcbiAgeCA9IHggPT09IHVuZGVmaW5lZCA/IGl0ZW0ucmVjdC54OiB4O1xuICB5ID0geSA9PT0gdW5kZWZpbmVkID8gaXRlbS5yZWN0Lnk6IHk7XG5cbiAgLy8gcG9zaXRpb24gaXQgYmVzdCBhdCBpdHMgZGVzdGluYXRpb25cbiAgaXRlbS5wb3NpdGlvblBsYWNlUmVjdCggeCwgeSwgdHJ1ZSApO1xuXG4gIHRoaXMuX2JpbmRGaXRFdmVudHMoIGl0ZW0gKTtcbiAgaXRlbS5tb3ZlVG8oIGl0ZW0ucGxhY2VSZWN0LngsIGl0ZW0ucGxhY2VSZWN0LnkgKTtcbiAgLy8gbGF5b3V0IGV2ZXJ5dGhpbmcgZWxzZVxuICB0aGlzLmxheW91dCgpO1xuXG4gIC8vIHJldHVybiBiYWNrIHRvIHJlZ3VsYXJseSBzY2hlZHVsZWQgcHJvZ3JhbW1pbmdcbiAgdGhpcy51bnN0YW1wKCBpdGVtLmVsZW1lbnQgKTtcbiAgdGhpcy5zb3J0SXRlbXNCeVBvc2l0aW9uKCk7XG4gIC8vIHVuIHNldCBwbGFjaW5nIGZsYWcsIGJhY2sgdG8gbm9ybWFsXG4gIGl0ZW0uaXNQbGFjaW5nID0gZmFsc2U7XG4gIC8vIGNvcHkgcGxhY2UgcmVjdCBwb3NpdGlvblxuICBpdGVtLmNvcHlQbGFjZVJlY3RQb3NpdGlvbigpO1xufTtcblxuLyoqXG4gKiBlbWl0IGV2ZW50IHdoZW4gaXRlbSBpcyBmaXQgYW5kIG90aGVyIGl0ZW1zIGFyZSBsYWlkIG91dFxuICogQHBhcmFtIHtQYWNrZXJ5Lkl0ZW19IGl0ZW1cbiAqIEBwcml2YXRlXG4gKi9cblBhY2tlcnkucHJvdG90eXBlLl9iaW5kRml0RXZlbnRzID0gZnVuY3Rpb24oIGl0ZW0gKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG4gIHZhciB0aWNrcyA9IDA7XG4gIGZ1bmN0aW9uIHRpY2soKSB7XG4gICAgdGlja3MrKztcbiAgICBpZiAoIHRpY2tzICE9IDIgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIF90aGlzLmRpc3BhdGNoRXZlbnQoICdmaXRDb21wbGV0ZScsIG51bGwsIFsgaXRlbSBdICk7XG4gIH1cbiAgLy8gd2hlbiBpdGVtIGlzIGxhaWQgb3V0XG4gIGl0ZW0ub24oICdsYXlvdXQnLCBmdW5jdGlvbigpIHtcbiAgICB0aWNrKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xuICAvLyB3aGVuIGFsbCBpdGVtcyBhcmUgbGFpZCBvdXRcbiAgdGhpcy5vbiggJ2xheW91dENvbXBsZXRlJywgZnVuY3Rpb24oKSB7XG4gICAgdGljaygpO1xuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHJlc2l6ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBkZWJvdW5jZWQsIGxheW91dCBvbiByZXNpemVcblBhY2tlcnkucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBkb24ndCB0cmlnZ2VyIGlmIHNpemUgZGlkIG5vdCBjaGFuZ2VcbiAgdmFyIHNpemUgPSBnZXRTaXplKCB0aGlzLmVsZW1lbnQgKTtcbiAgLy8gY2hlY2sgdGhhdCB0aGlzLnNpemUgYW5kIHNpemUgYXJlIHRoZXJlXG4gIC8vIElFOCB0cmlnZ2VycyByZXNpemUgb24gYm9keSBzaXplIGNoYW5nZSwgc28gdGhleSBtaWdodCBub3QgYmVcbiAgdmFyIGhhc1NpemVzID0gdGhpcy5zaXplICYmIHNpemU7XG4gIHZhciBpbm5lclNpemUgPSB0aGlzLm9wdGlvbnMuaXNIb3Jpem9udGFsID8gJ2lubmVySGVpZ2h0JyA6ICdpbm5lcldpZHRoJztcbiAgaWYgKCBoYXNTaXplcyAmJiBzaXplWyBpbm5lclNpemUgXSA9PSB0aGlzLnNpemVbIGlubmVyU2l6ZSBdICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMubGF5b3V0KCk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkcmFnIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogaGFuZGxlIGFuIGl0ZW0gZHJhZyBzdGFydCBldmVudFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKi9cblBhY2tlcnkucHJvdG90eXBlLml0ZW1EcmFnU3RhcnQgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgdGhpcy5zdGFtcCggZWxlbSApO1xuICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbSggZWxlbSApO1xuICBpZiAoIGl0ZW0gKSB7XG4gICAgaXRlbS5kcmFnU3RhcnQoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBoYW5kbGUgYW4gaXRlbSBkcmFnIG1vdmUgZXZlbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbVxuICogQHBhcmFtIHtOdW1iZXJ9IHggLSBob3Jpem9udGFsIGNoYW5nZSBpbiBwb3NpdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IHkgLSB2ZXJ0aWNhbCBjaGFuZ2UgaW4gcG9zaXRpb25cbiAqL1xuUGFja2VyeS5wcm90b3R5cGUuaXRlbURyYWdNb3ZlID0gZnVuY3Rpb24oIGVsZW0sIHgsIHkgKSB7XG4gIHZhciBpdGVtID0gdGhpcy5nZXRJdGVtKCBlbGVtICk7XG4gIGlmICggaXRlbSApIHtcbiAgICBpdGVtLmRyYWdNb3ZlKCB4LCB5ICk7XG4gIH1cblxuICAvLyBkZWJvdW5jZVxuICB2YXIgX3RoaXMgPSB0aGlzO1xuICAvLyBkZWJvdW5jZSB0cmlnZ2VyaW5nIGxheW91dFxuICBmdW5jdGlvbiBkZWxheWVkKCkge1xuICAgIF90aGlzLmxheW91dCgpO1xuICAgIGRlbGV0ZSBfdGhpcy5kcmFnVGltZW91dDtcbiAgfVxuXG4gIHRoaXMuY2xlYXJEcmFnVGltZW91dCgpO1xuXG4gIHRoaXMuZHJhZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KCBkZWxheWVkLCA0MCApO1xufTtcblxuUGFja2VyeS5wcm90b3R5cGUuY2xlYXJEcmFnVGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuZHJhZ1RpbWVvdXQgKSB7XG4gICAgY2xlYXJUaW1lb3V0KCB0aGlzLmRyYWdUaW1lb3V0ICk7XG4gIH1cbn07XG5cbi8qKlxuICogaGFuZGxlIGFuIGl0ZW0gZHJhZyBlbmQgZXZlbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbVxuICovXG5QYWNrZXJ5LnByb3RvdHlwZS5pdGVtRHJhZ0VuZCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbSggZWxlbSApO1xuICB2YXIgaXRlbURpZERyYWc7XG4gIGlmICggaXRlbSApIHtcbiAgICBpdGVtRGlkRHJhZyA9IGl0ZW0uZGlkRHJhZztcbiAgICBpdGVtLmRyYWdTdG9wKCk7XG4gIH1cbiAgLy8gaWYgZWxlbSBkaWRuJ3QgbW92ZSwgb3IgaWYgaXQgZG9lc24ndCBuZWVkIHBvc2l0aW9uaW5nXG4gIC8vIHVuaWdub3JlIGFuZCB1bnN0YW1wIGFuZCBjYWxsIGl0IGEgZGF5XG4gIGlmICggIWl0ZW0gfHwgKCAhaXRlbURpZERyYWcgJiYgIWl0ZW0ubmVlZHNQb3NpdGlvbmluZyApICkge1xuICAgIHRoaXMudW5zdGFtcCggZWxlbSApO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBwcm9jY2VkIHdpdGggZHJhZ2dlZCBpdGVtXG5cbiAgY2xhc3NpZS5hZGQoIGl0ZW0uZWxlbWVudCwgJ2lzLXBvc2l0aW9uaW5nLXBvc3QtZHJhZycgKTtcblxuICAvLyBzYXZlIHRoaXMgdmFyLCBhcyBpdCBjb3VsZCBnZXQgcmVzZXQgaW4gZHJhZ1N0YXJ0XG4gIHZhciBvbkxheW91dENvbXBsZXRlID0gdGhpcy5fZ2V0RHJhZ0VuZExheW91dENvbXBsZXRlKCBlbGVtLCBpdGVtICk7XG5cbiAgaWYgKCBpdGVtLm5lZWRzUG9zaXRpb25pbmcgKSB7XG4gICAgaXRlbS5vbiggJ2xheW91dCcsIG9uTGF5b3V0Q29tcGxldGUgKTtcbiAgICBpdGVtLm1vdmVUbyggaXRlbS5wbGFjZVJlY3QueCwgaXRlbS5wbGFjZVJlY3QueSApO1xuICB9IGVsc2UgaWYgKCBpdGVtICkge1xuICAgIC8vIGl0ZW0gZGlkbid0IG5lZWQgcGxhY2VtZW50XG4gICAgaXRlbS5jb3B5UGxhY2VSZWN0UG9zaXRpb24oKTtcbiAgfVxuXG4gIHRoaXMuY2xlYXJEcmFnVGltZW91dCgpO1xuICB0aGlzLm9uKCAnbGF5b3V0Q29tcGxldGUnLCBvbkxheW91dENvbXBsZXRlICk7XG4gIHRoaXMubGF5b3V0KCk7XG5cbn07XG5cbi8qKlxuICogZ2V0IGRyYWcgZW5kIGNhbGxiYWNrXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEBwYXJhbSB7UGFja2VyeS5JdGVtfSBpdGVtXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IG9uTGF5b3V0Q29tcGxldGVcbiAqL1xuUGFja2VyeS5wcm90b3R5cGUuX2dldERyYWdFbmRMYXlvdXRDb21wbGV0ZSA9IGZ1bmN0aW9uKCBlbGVtLCBpdGVtICkge1xuICB2YXIgaXRlbU5lZWRzUG9zaXRpb25pbmcgPSBpdGVtICYmIGl0ZW0ubmVlZHNQb3NpdGlvbmluZztcbiAgdmFyIGNvbXBsZXRlQ291bnQgPSAwO1xuICB2YXIgYXN5bmNDb3VudCA9IGl0ZW1OZWVkc1Bvc2l0aW9uaW5nID8gMiA6IDE7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIG9uTGF5b3V0Q29tcGxldGUoKSB7XG4gICAgY29tcGxldGVDb3VudCsrO1xuICAgIC8vIGRvbid0IHByb2NlZWQgaWYgbm90IGNvbXBsZXRlXG4gICAgaWYgKCBjb21wbGV0ZUNvdW50ICE9IGFzeW5jQ291bnQgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gcmVzZXQgaXRlbVxuICAgIGlmICggaXRlbSApIHtcbiAgICAgIGNsYXNzaWUucmVtb3ZlKCBpdGVtLmVsZW1lbnQsICdpcy1wb3NpdGlvbmluZy1wb3N0LWRyYWcnICk7XG4gICAgICBpdGVtLmlzUGxhY2luZyA9IGZhbHNlO1xuICAgICAgaXRlbS5jb3B5UGxhY2VSZWN0UG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICBfdGhpcy51bnN0YW1wKCBlbGVtICk7XG4gICAgLy8gb25seSBzb3J0IHdoZW4gaXRlbSBtb3ZlZFxuICAgIF90aGlzLnNvcnRJdGVtc0J5UG9zaXRpb24oKTtcblxuICAgIC8vIGVtaXQgaXRlbSBkcmFnIGV2ZW50IG5vdyB0aGF0IGV2ZXJ5dGhpbmcgaXMgZG9uZVxuICAgIGlmICggaXRlbU5lZWRzUG9zaXRpb25pbmcgKSB7XG4gICAgICBfdGhpcy5kaXNwYXRjaEV2ZW50KCAnZHJhZ0l0ZW1Qb3NpdGlvbmVkJywgbnVsbCwgWyBpdGVtIF0gKTtcbiAgICB9XG4gICAgLy8gbGlzdGVuIG9uY2VcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn07XG5cbi8qKlxuICogYmluZHMgRHJhZ2dhYmlsbHkgZXZlbnRzXG4gKiBAcGFyYW0ge0RyYWdnYWJpbGx5fSBkcmFnZ2llXG4gKi9cblBhY2tlcnkucHJvdG90eXBlLmJpbmREcmFnZ2FiaWxseUV2ZW50cyA9IGZ1bmN0aW9uKCBkcmFnZ2llICkge1xuICBkcmFnZ2llLm9uKCAnZHJhZ1N0YXJ0JywgdGhpcy5oYW5kbGVEcmFnZ2FiaWxseS5kcmFnU3RhcnQgKTtcbiAgZHJhZ2dpZS5vbiggJ2RyYWdNb3ZlJywgdGhpcy5oYW5kbGVEcmFnZ2FiaWxseS5kcmFnTW92ZSApO1xuICBkcmFnZ2llLm9uKCAnZHJhZ0VuZCcsIHRoaXMuaGFuZGxlRHJhZ2dhYmlsbHkuZHJhZ0VuZCApO1xufTtcblxuLyoqXG4gKiBiaW5kcyBqUXVlcnkgVUkgRHJhZ2dhYmxlIGV2ZW50c1xuICogQHBhcmFtIHtqUXVlcnl9ICRlbGVtc1xuICovXG5QYWNrZXJ5LnByb3RvdHlwZS5iaW5kVUlEcmFnZ2FibGVFdmVudHMgPSBmdW5jdGlvbiggJGVsZW1zICkge1xuICAkZWxlbXNcbiAgICAub24oICdkcmFnc3RhcnQnLCB0aGlzLmhhbmRsZVVJRHJhZ2dhYmxlLnN0YXJ0IClcbiAgICAub24oICdkcmFnJywgdGhpcy5oYW5kbGVVSURyYWdnYWJsZS5kcmFnIClcbiAgICAub24oICdkcmFnc3RvcCcsIHRoaXMuaGFuZGxlVUlEcmFnZ2FibGUuc3RvcCApO1xufTtcblxuUGFja2VyeS5SZWN0ID0gUmVjdDtcblBhY2tlcnkuUGFja2VyID0gUGFja2VyO1xuXG5yZXR1cm4gUGFja2VyeTtcblxufSkpO1xuIiwiLyoqXG4gKiBSZWN0XG4gKiBsb3ctbGV2ZWwgdXRpbGl0eSBjbGFzcyBmb3IgYmFzaWMgZ2VvbWV0cnlcbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuUGFja2VyeSA9IHdpbmRvdy5QYWNrZXJ5IHx8IHt9O1xuICAgIHdpbmRvdy5QYWNrZXJ5LlJlY3QgPSBmYWN0b3J5KCk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQYWNrZXJ5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGdsb2JhbCBuYW1lc3BhY2VcbnZhciBQYWNrZXJ5ID0gd2luZG93LlBhY2tlcnkgPSBmdW5jdGlvbigpIHt9O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBSZWN0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIFJlY3QoIHByb3BzICkge1xuICAvLyBleHRlbmQgcHJvcGVydGllcyBmcm9tIGRlZmF1bHRzXG4gIGZvciAoIHZhciBwcm9wIGluIFJlY3QuZGVmYXVsdHMgKSB7XG4gICAgdGhpc1sgcHJvcCBdID0gUmVjdC5kZWZhdWx0c1sgcHJvcCBdO1xuICB9XG5cbiAgZm9yICggcHJvcCBpbiBwcm9wcyApIHtcbiAgICB0aGlzWyBwcm9wIF0gPSBwcm9wc1sgcHJvcCBdO1xuICB9XG5cbn1cblxuLy8gbWFrZSBhdmFpbGFibGVcblBhY2tlcnkuUmVjdCA9IFJlY3Q7XG5cblJlY3QuZGVmYXVsdHMgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHdpZHRoOiAwLFxuICBoZWlnaHQ6IDBcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGlzIHJlY3RhbmdsZSB3aG9sbHkgZW5jbG9zZXMgYW5vdGhlciByZWN0YW5nbGUgb3IgcG9pbnQuXG4gKiBAcGFyYW0ge1JlY3R9IHJlY3RcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuKiovXG5SZWN0LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uKCByZWN0ICkge1xuICAvLyBwb2ludHMgZG9uJ3QgaGF2ZSB3aWR0aCBvciBoZWlnaHRcbiAgdmFyIG90aGVyV2lkdGggPSByZWN0LndpZHRoIHx8IDA7XG4gIHZhciBvdGhlckhlaWdodCA9IHJlY3QuaGVpZ2h0IHx8IDA7XG4gIHJldHVybiB0aGlzLnggPD0gcmVjdC54ICYmXG4gICAgdGhpcy55IDw9IHJlY3QueSAmJlxuICAgIHRoaXMueCArIHRoaXMud2lkdGggPj0gcmVjdC54ICsgb3RoZXJXaWR0aCAmJlxuICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0ID49IHJlY3QueSArIG90aGVySGVpZ2h0O1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSByZWN0YW5nbGUgaW50ZXJzZWN0cyB3aXRoIGFub3RoZXIuXG4gKiBAcGFyYW0ge1JlY3R9IHJlY3RcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuKiovXG5SZWN0LnByb3RvdHlwZS5vdmVybGFwcyA9IGZ1bmN0aW9uKCByZWN0ICkge1xuICB2YXIgdGhpc1JpZ2h0ID0gdGhpcy54ICsgdGhpcy53aWR0aDtcbiAgdmFyIHRoaXNCb3R0b20gPSB0aGlzLnkgKyB0aGlzLmhlaWdodDtcbiAgdmFyIHJlY3RSaWdodCA9IHJlY3QueCArIHJlY3Qud2lkdGg7XG4gIHZhciByZWN0Qm90dG9tID0gcmVjdC55ICsgcmVjdC5oZWlnaHQ7XG5cbiAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzA2MzMyXG4gIHJldHVybiB0aGlzLnggPCByZWN0UmlnaHQgJiZcbiAgICB0aGlzUmlnaHQgPiByZWN0LnggJiZcbiAgICB0aGlzLnkgPCByZWN0Qm90dG9tICYmXG4gICAgdGhpc0JvdHRvbSA+IHJlY3QueTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtSZWN0fSByZWN0IC0gdGhlIG92ZXJsYXBwaW5nIHJlY3RcbiAqIEByZXR1cm5zIHtBcnJheX0gZnJlZVJlY3RzIC0gcmVjdHMgcmVwcmVzZW50aW5nIHRoZSBhcmVhIGFyb3VuZCB0aGUgcmVjdFxuKiovXG5SZWN0LnByb3RvdHlwZS5nZXRNYXhpbWFsRnJlZVJlY3RzID0gZnVuY3Rpb24oIHJlY3QgKSB7XG5cbiAgLy8gaWYgbm8gaW50ZXJzZWN0aW9uLCByZXR1cm4gZmFsc2VcbiAgaWYgKCAhdGhpcy5vdmVybGFwcyggcmVjdCApICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBmcmVlUmVjdHMgPSBbXTtcbiAgdmFyIGZyZWVSZWN0O1xuXG4gIHZhciB0aGlzUmlnaHQgPSB0aGlzLnggKyB0aGlzLndpZHRoO1xuICB2YXIgdGhpc0JvdHRvbSA9IHRoaXMueSArIHRoaXMuaGVpZ2h0O1xuICB2YXIgcmVjdFJpZ2h0ID0gcmVjdC54ICsgcmVjdC53aWR0aDtcbiAgdmFyIHJlY3RCb3R0b20gPSByZWN0LnkgKyByZWN0LmhlaWdodDtcblxuICAvLyB0b3BcbiAgaWYgKCB0aGlzLnkgPCByZWN0LnkgKSB7XG4gICAgZnJlZVJlY3QgPSBuZXcgUmVjdCh7XG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnksXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogcmVjdC55IC0gdGhpcy55XG4gICAgfSk7XG4gICAgZnJlZVJlY3RzLnB1c2goIGZyZWVSZWN0ICk7XG4gIH1cblxuICAvLyByaWdodFxuICBpZiAoIHRoaXNSaWdodCA+IHJlY3RSaWdodCApIHtcbiAgICBmcmVlUmVjdCA9IG5ldyBSZWN0KHtcbiAgICAgIHg6IHJlY3RSaWdodCxcbiAgICAgIHk6IHRoaXMueSxcbiAgICAgIHdpZHRoOiB0aGlzUmlnaHQgLSByZWN0UmlnaHQsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0XG4gICAgfSk7XG4gICAgZnJlZVJlY3RzLnB1c2goIGZyZWVSZWN0ICk7XG4gIH1cblxuICAvLyBib3R0b21cbiAgaWYgKCB0aGlzQm90dG9tID4gcmVjdEJvdHRvbSApIHtcbiAgICBmcmVlUmVjdCA9IG5ldyBSZWN0KHtcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHJlY3RCb3R0b20sXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpc0JvdHRvbSAtIHJlY3RCb3R0b21cbiAgICB9KTtcbiAgICBmcmVlUmVjdHMucHVzaCggZnJlZVJlY3QgKTtcbiAgfVxuXG4gIC8vIGxlZnRcbiAgaWYgKCB0aGlzLnggPCByZWN0LnggKSB7XG4gICAgZnJlZVJlY3QgPSBuZXcgUmVjdCh7XG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnksXG4gICAgICB3aWR0aDogcmVjdC54IC0gdGhpcy54LFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodFxuICAgIH0pO1xuICAgIGZyZWVSZWN0cy5wdXNoKCBmcmVlUmVjdCApO1xuICB9XG5cbiAgcmV0dXJuIGZyZWVSZWN0cztcbn07XG5cblJlY3QucHJvdG90eXBlLmNhbkZpdCA9IGZ1bmN0aW9uKCByZWN0ICkge1xuICByZXR1cm4gdGhpcy53aWR0aCA+PSByZWN0LndpZHRoICYmIHRoaXMuaGVpZ2h0ID49IHJlY3QuaGVpZ2h0O1xufTtcblxucmV0dXJuIFJlY3Q7XG5cbn0pKTtcbiIsIlxuLyoqXG4gKiBBbiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpIGFsdGVybmF0aXZlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFyZ3Mgc29tZXRoaW5nIHdpdGggYSBsZW5ndGhcbiAqIEBwYXJhbSB7TnVtYmVyfSBzbGljZVxuICogQHBhcmFtIHtOdW1iZXJ9IHNsaWNlRW5kXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3MsIHNsaWNlLCBzbGljZUVuZCkge1xuICB2YXIgcmV0ID0gW107XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcblxuICBpZiAoMCA9PT0gbGVuKSByZXR1cm4gcmV0O1xuXG4gIHZhciBzdGFydCA9IHNsaWNlIDwgMFxuICAgID8gTWF0aC5tYXgoMCwgc2xpY2UgKyBsZW4pXG4gICAgOiBzbGljZSB8fCAwO1xuXG4gIGlmIChzbGljZUVuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuID0gc2xpY2VFbmQgPCAwXG4gICAgICA/IHNsaWNlRW5kICsgbGVuXG4gICAgICA6IHNsaWNlRW5kXG4gIH1cblxuICB3aGlsZSAobGVuLS0gPiBzdGFydCkge1xuICAgIHJldFtsZW4gLSBzdGFydF0gPSBhcmdzW2xlbl07XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICBwcmVmaXhQcm9wZXJ0aWVzOiByZXF1aXJlKCcuL3NyYy9wcmVmaXhQcm9wZXJ0aWVzJykgLFxuICAgY3NzVW5pdGxlc3M6IHJlcXVpcmUoJy4vc3JjL2Nzc1VuaXRsZXNzJykgLFxuICAgb2JqZWN0OiByZXF1aXJlKCcuL3NyYy90b1N0eWxlT2JqZWN0JyksXG4gICBzdHJpbmc6IHJlcXVpcmUoJy4vc3JjL3RvU3R5bGVTdHJpbmcnKVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9wcmVmaXhlcicpKCkiLCIndXNlIGV4cG9ydHMnXG5cbi8vbWFrZSBzdXJlIHByb3BlcnRpZXMgYXJlIGluIGh5cGhlbmF0ZWQgZm9ybVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAnYW5pbWF0aW9uJyAgICA6IDEsXG4gICAgJ2NvbHVtbi1jb3VudCcgOiAxLFxuICAgICdjb2x1bW5zJyAgICAgIDogMSxcbiAgICAnZm9udC13ZWlnaHQnICA6IDEsXG4gICAgJ29wYWNpdHknICAgICAgOiAxLFxuICAgICdvcmRlciAgJyAgICAgIDogMSxcbiAgICAnei1pbmRleCcgICAgICA6IDEsXG4gICAgJ3pvb20nICAgICAgICAgOiAxLFxuICAgICdmbGV4JyAgICAgICAgIDogMSxcbiAgICAnYm94LWZsZXgnICAgICA6IDEsXG4gICAgJ3RyYW5zZm9ybScgICAgOiAxLFxuICAgICdwZXJzcGVjdGl2ZScgIDogMSxcbiAgICAnYm94LXBhY2snICAgICA6IDEsXG4gICAgJ2JveC1hbGlnbicgICAgOiAxLFxuICAgICdjb2xzcGFuJyAgICAgIDogMSxcbiAgICAncm93c3BhbicgICAgICA6IDFcbn0iLCIndXNlIHN0cmljdCdcblxudmFyIG9iamVjdEhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5TmFtZSl7XG4gICAgcmV0dXJuIG9iamVjdEhhc093bi5jYWxsKG9iamVjdCwgcHJvcGVydHlOYW1lKVxufSIsIid1c2Ugc3RyaWN0J1xuXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odikge1xuICAgIHJldHVybiBvYmplY3RUb1N0cmluZy5hcHBseSh2KSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJ1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBvYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2KXtcbiAgICByZXR1cm4gISF2ICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodikgPT09ICdbb2JqZWN0IE9iamVjdF0nXG59XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvVXBwZXJGaXJzdCA9IHJlcXVpcmUoJy4vc3RyaW5nVXRpbHMvdG9VcHBlckZpcnN0JylcblxudmFyIHJlICAgICAgICAgPSAvXihNb3p8V2Via2l0fEtodG1sfE98bXN8SWNhYikoPz1bQS1aXSkvXG5cbnZhciBkb2NTdHlsZSAgID0gdHlwZW9mIGRvY3VtZW50ID09ICd1bmRlZmluZWQnP1xuICAgICAgICAgICAgICAgICAgICB7fTpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlXG5cbnZhciBwcmVmaXhJbmZvID0gKGZ1bmN0aW9uKCl7XG5cbiAgICB2YXIgcHJlZml4ID0gKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gZG9jU3R5bGUpIHtcbiAgICAgICAgICAgICAgICBpZiggcmUudGVzdChwcm9wKSApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGVzdCBpcyBmYXN0ZXIgdGhhbiBtYXRjaCwgc28gaXQncyBiZXR0ZXIgdG8gcGVyZm9ybVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGF0IG9uIHRoZSBsb3QgYW5kIG1hdGNoIG9ubHkgd2hlbiBuZWNlc3NhcnlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICBwcm9wLm1hdGNoKHJlKVswXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTm90aGluZyBmb3VuZCBzbyBmYXI/IFdlYmtpdCBkb2VzIG5vdCBlbnVtZXJhdGUgb3ZlciB0aGUgQ1NTIHByb3BlcnRpZXMgb2YgdGhlIHN0eWxlIG9iamVjdC5cbiAgICAgICAgICAgIC8vIEhvd2V2ZXIgKHByb3AgaW4gc3R5bGUpIHJldHVybnMgdGhlIGNvcnJlY3QgdmFsdWUsIHNvIHdlJ2xsIGhhdmUgdG8gdGVzdCBmb3JcbiAgICAgICAgICAgIC8vIHRoZSBwcmVjZW5jZSBvZiBhIHNwZWNpZmljIHByb3BlcnR5XG4gICAgICAgICAgICBpZiAoJ1dlYmtpdE9wYWNpdHknIGluIGRvY1N0eWxlKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1dlYmtpdCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCdLaHRtbE9wYWNpdHknIGluIGRvY1N0eWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdLaHRtbCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgIH0pKCksXG5cbiAgICBsb3dlciA9IHByZWZpeC50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzdHlsZSAgICAgICA6IHByZWZpeCxcbiAgICAgICAgY3NzICAgICAgIDogJy0nICsgbG93ZXIgKyAnLScsXG4gICAgICAgIGRvbSAgICAgICA6ICh7XG4gICAgICAgICAgICBXZWJraXQ6ICdXZWJLaXQnLFxuICAgICAgICAgICAgbXMgICAgOiAnTVMnLFxuICAgICAgICAgICAgbyAgICAgOiAnV2ViS2l0J1xuICAgICAgICB9KVtwcmVmaXhdIHx8IHRvVXBwZXJGaXJzdChwcmVmaXgpXG4gICAgfVxuXG59KSgpXG5cbm1vZHVsZS5leHBvcnRzID0gcHJlZml4SW5mbyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgICdib3JkZXItcmFkaXVzJyAgICAgICAgICAgICAgOiAxLFxuICAgICdib3JkZXItdG9wLWxlZnQtcmFkaXVzJyAgICAgOiAxLFxuICAgICdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cycgICAgOiAxLFxuICAgICdib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJyAgOiAxLFxuICAgICdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycgOiAxLFxuICAgICdib3gtc2hhZG93JyAgICAgICAgICAgICAgICAgOiAxLFxuICAgICdvcmRlcicgICAgICAgICAgICAgICAgICAgICAgOiAxLFxuICAgICdmbGV4JyAgICAgICAgICAgICAgICAgICAgICAgOiBmdW5jdGlvbihuYW1lLCBwcmVmaXgpe1xuICAgICAgICByZXR1cm4gW3ByZWZpeCArICdib3gtZmxleCddXG4gICAgfSxcbiAgICAnYm94LWZsZXgnICAgICAgICAgICAgICAgICAgIDogMSxcbiAgICAnYm94LWFsaWduJyAgICAgICAgICAgICAgICAgIDogMSxcbiAgICAnYW5pbWF0aW9uJyAgICAgICAgICAgICAgICAgIDogMSxcbiAgICAnYW5pbWF0aW9uLWR1cmF0aW9uJyAgICAgICAgIDogMSxcbiAgICAnYW5pbWF0aW9uLW5hbWUnICAgICAgICAgICAgIDogMSxcbiAgICAndHJhbnNpdGlvbicgICAgICAgICAgICAgICAgIDogMSxcbiAgICAndHJhbnNpdGlvbi1kdXJhdGlvbicgICAgICAgIDogMSxcbiAgICAndHJhbnNmb3JtJyAgICAgICAgICAgICAgICAgIDogMSxcbiAgICAndHJhbnNmb3JtLXN0eWxlJyAgICAgICAgICAgIDogMSxcbiAgICAndHJhbnNmb3JtLW9yaWdpbicgICAgICAgICAgIDogMSxcbiAgICAnYmFja2ZhY2UtdmlzaWJpbGl0eScgICAgICAgIDogMSxcbiAgICAncGVyc3BlY3RpdmUnICAgICAgICAgICAgICAgIDogMSxcbiAgICAnYm94LXBhY2snICAgICAgICAgICAgICAgICAgIDogMVxufSIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY2FtZWxpemUgICAgID0gcmVxdWlyZSgnLi9zdHJpbmdVdGlscy9jYW1lbGl6ZScpXG52YXIgaHlwaGVuYXRlICAgID0gcmVxdWlyZSgnLi9zdHJpbmdVdGlscy9oeXBoZW5hdGUnKVxudmFyIHRvTG93ZXJGaXJzdCA9IHJlcXVpcmUoJy4vc3RyaW5nVXRpbHMvdG9Mb3dlckZpcnN0JylcbnZhciB0b1VwcGVyRmlyc3QgPSByZXF1aXJlKCcuL3N0cmluZ1V0aWxzL3RvVXBwZXJGaXJzdCcpXG5cbnZhciBwcmVmaXhJbmZvID0gcmVxdWlyZSgnLi9wcmVmaXhJbmZvJylcbnZhciBwcmVmaXhQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi9wcmVmaXhQcm9wZXJ0aWVzJylcblxudmFyIGRvY1N0eWxlID0gdHlwZW9mIGRvY3VtZW50ID09ICd1bmRlZmluZWQnP1xuICAgICAgICAgICAgICAgIHt9OlxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFzU3R5bGVQcmVmaXgpe1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKG5hbWUsIGNvbmZpZyl7XG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fVxuXG4gICAgICAgIHZhciBzdHlsZU5hbWUgPSB0b0xvd2VyRmlyc3QoY2FtZWxpemUobmFtZSkpLFxuICAgICAgICAgICAgY3NzTmFtZSAgID0gaHlwaGVuYXRlKG5hbWUpLFxuXG4gICAgICAgICAgICB0aGVOYW1lICAgPSBhc1N0eWxlUHJlZml4P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlTmFtZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NOYW1lLFxuXG4gICAgICAgICAgICB0aGVQcmVmaXggPSBwcmVmaXhJbmZvLnN0eWxlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzU3R5bGVQcmVmaXg/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeEluZm8uc3R5bGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeEluZm8uY3NzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXG5cbiAgICAgICAgaWYgKCBzdHlsZU5hbWUgaW4gZG9jU3R5bGUgKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uZmlnLmFzU3RyaW5nP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlTmFtZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyB0aGVOYW1lIF1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vbm90IGEgdmFsaWQgc3R5bGUgbmFtZSwgc28gd2UnbGwgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoIGEgcHJlZml4XG5cbiAgICAgICAgdmFyIHVwcGVyQ2FzZWQgICAgID0gdGhlTmFtZSxcbiAgICAgICAgICAgIHByZWZpeFByb3BlcnR5ID0gcHJlZml4UHJvcGVydGllc1tjc3NOYW1lXSxcbiAgICAgICAgICAgIHJlc3VsdCAgICAgICAgID0gW11cblxuICAgICAgICBpZiAoYXNTdHlsZVByZWZpeCl7XG4gICAgICAgICAgICB1cHBlckNhc2VkID0gdG9VcHBlckZpcnN0KHRoZU5hbWUpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHByZWZpeFByb3BlcnR5ID09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdmFyIHByZWZpeGVkQ3NzID0gcHJlZml4UHJvcGVydHkodGhlTmFtZSwgdGhlUHJlZml4KSB8fCBbXVxuICAgICAgICAgICAgaWYgKHByZWZpeGVkQ3NzICYmICFBcnJheS5pc0FycmF5KHByZWZpeGVkQ3NzKSl7XG4gICAgICAgICAgICAgICAgcHJlZml4ZWRDc3MgPSBbcHJlZml4ZWRDc3NdXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcmVmaXhlZENzcy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIHByZWZpeGVkQ3NzID0gcHJlZml4ZWRDc3MubWFwKGZ1bmN0aW9uKHByb3BlcnR5KXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzU3R5bGVQcmVmaXg/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvTG93ZXJGaXJzdChjYW1lbGl6ZShwcm9wZXJ0eSkpOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoeXBoZW5hdGUocHJvcGVydHkpXG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KHByZWZpeGVkQ3NzKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoZVByZWZpeCl7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGVQcmVmaXggKyB1cHBlckNhc2VkKVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnB1c2godGhlTmFtZSlcblxuICAgICAgICBpZiAoY29uZmlnLmFzU3RyaW5nIHx8IHJlc3VsdC5sZW5ndGggPT0gMSl7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0WzBdXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufSIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdG9DYW1lbEZuID0gZnVuY3Rpb24oc3RyLCBsZXR0ZXIpe1xuICAgICAgIHJldHVybiBsZXR0ZXIgPyBsZXR0ZXIudG9VcHBlckNhc2UoKTogJydcbiAgIH1cblxudmFyIGh5cGhlblJlID0gcmVxdWlyZSgnLi9oeXBoZW5SZScpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc3RyKXtcbiAgIHJldHVybiBzdHI/XG4gICAgICAgICAgc3RyLnJlcGxhY2UoaHlwaGVuUmUsIHRvQ2FtZWxGbik6XG4gICAgICAgICAgJydcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IC9bLVxcc10rKC4pPy9nIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBzZXBhcmF0ZSA9IHJlcXVpcmUoJy4vc2VwYXJhdGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgcmV0dXJuIHNlcGFyYXRlKG5hbWUpLnRvTG93ZXJDYXNlKClcbn0iLCIndXNlIHN0cmljdCdcblxudmFyIGRvdWJsZUNvbG9uUmUgICAgICA9IC86Oi9nXG52YXIgdXBwZXJUb0xvd2VyUmUgICAgID0gLyhbQS1aXSspKFtBLVpdW2Etel0pL2dcbnZhciBsb3dlclRvVXBwZXJSZSAgICAgPSAvKFthLXpcXGRdKShbQS1aXSkvZ1xudmFyIHVuZGVyc2NvcmVUb0Rhc2hSZSA9IC9fL2dcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lLCBzZXBhcmF0b3Ipe1xuXG4gICByZXR1cm4gbmFtZT9cbiAgICAgICAgICAgbmFtZS5yZXBsYWNlKGRvdWJsZUNvbG9uUmUsICcvJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSh1cHBlclRvTG93ZXJSZSwgJyQxXyQyJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZShsb3dlclRvVXBwZXJSZSwgJyQxXyQyJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSh1bmRlcnNjb3JlVG9EYXNoUmUsIHNlcGFyYXRvciB8fCAnLScpXG4gICAgICAgICAgICA6XG4gICAgICAgICAgICAnJ1xufSIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoP1xuICAgICAgICAgICAgICAgIHZhbHVlLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgdmFsdWUuc3Vic3RyaW5nKDEpOlxuICAgICAgICAgICAgICAgIHZhbHVlXG59IiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsdWUpe1xuICAgIHJldHVybiB2YWx1ZS5sZW5ndGg/XG4gICAgICAgICAgICAgICAgdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zdWJzdHJpbmcoMSk6XG4gICAgICAgICAgICAgICAgdmFsdWVcbn0iLCIndXNlIHN0cmljdCdcblxudmFyIHByZWZpeEluZm8gID0gcmVxdWlyZSgnLi9wcmVmaXhJbmZvJylcbnZhciBjc3NQcmVmaXhGbiA9IHJlcXVpcmUoJy4vY3NzUHJlZml4JylcblxudmFyIEhZUEhFTkFURSAgID0gcmVxdWlyZSgnLi9zdHJpbmdVdGlscy9oeXBoZW5hdGUnKVxudmFyIENBTUVMSVpFICAgPSByZXF1aXJlKCcuL3N0cmluZ1V0aWxzL2NhbWVsaXplJylcbnZhciBIQVNfT1dOICAgICA9IHJlcXVpcmUoJy4vaGFzT3duJylcbnZhciBJU19PQkpFQ1QgICA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKVxudmFyIElTX0ZVTkNUSU9OID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJylcblxudmFyIGFwcGx5UHJlZml4ID0gZnVuY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIG5vcm1hbGl6ZUZuKXtcbiAgICBjc3NQcmVmaXhGbihwcm9wZXJ0eSkuZm9yRWFjaChmdW5jdGlvbihwKXtcbiAgICAgICAgdGFyZ2V0W25vcm1hbGl6ZUZuPyBub3JtYWxpemVGbihwKTogcF0gPSB2YWx1ZVxuICAgIH0pXG59XG5cbnZhciB0b09iamVjdCA9IGZ1bmN0aW9uKHN0cil7XG4gICAgc3RyID0gKHN0ciB8fCAnJykuc3BsaXQoJzsnKVxuXG4gICAgdmFyIHJlc3VsdCA9IHt9XG5cbiAgICBzdHIuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgdmFyIHNwbGl0ID0gaXRlbS5zcGxpdCgnOicpXG5cbiAgICAgICAgaWYgKHNwbGl0Lmxlbmd0aCA9PSAyKXtcbiAgICAgICAgICAgIHJlc3VsdFtzcGxpdFswXS50cmltKCldID0gc3BsaXRbMV0udHJpbSgpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlc3VsdFxufVxuXG52YXIgQ09ORklHID0ge1xuICAgIGNzc1VuaXRsZXNzOiByZXF1aXJlKCcuL2Nzc1VuaXRsZXNzJylcbn1cblxuLyoqXG4gKiBAaWdub3JlXG4gKiBAbWV0aG9kIHRvU3R5bGVPYmplY3RcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHN0eWxlcyBUaGUgb2JqZWN0IHRvIGNvbnZlcnQgdG8gYSBzdHlsZSBvYmplY3QuXG4gKiBAcGFyYW0gIHtPYmplY3R9IFtjb25maWddXG4gKiBAcGFyYW0gIHtCb29sZWFufSBbY29uZmlnLmFkZFVuaXRzPXRydWVdIFRydWUgaWYgeW91IHdhbnQgdG8gYWRkIHVuaXRzIHdoZW4gbnVtZXJpY2FsIHZhbHVlcyBhcmUgZW5jb3VudGVyZWQuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICBjb25maWcuY3NzVW5pdGxlc3MgQW4gb2JqZWN0IHdob3NlIGtleXMgcmVwcmVzZW50IGNzcyBudW1lcmljYWwgcHJvcGVydHkgbmFtZXMgdGhhdCB3aWxsIG5vdCBiZSBhcHBlbmRlZCB3aXRoIHVuaXRzLlxuICogQHBhcmFtICB7T2JqZWN0fSAgY29uZmlnLnByZWZpeFByb3BlcnRpZXMgQW4gb2JqZWN0IHdob3NlIGtleXMgcmVwcmVzZW50IGNzcyBwcm9wZXJ0eSBuYW1lcyB0aGF0IHNob3VsZCBiZSBwcmVmaXhlZFxuICogQHBhcmFtICB7U3RyaW5nfSAgY29uZmlnLmNzc1VuaXQ9J3B4JyBUaGUgY3NzIHVuaXQgdG8gYXBwZW5kIHRvIG51bWVyaWNhbCB2YWx1ZXMuIERlZmF1bHRzIHRvICdweCdcbiAqIEBwYXJhbSAge1N0cmluZ30gIGNvbmZpZy5ub3JtYWxpemVOYW1lIEEgZnVuY3Rpb24gdGhhdCBub3JtYWxpemVzIGEgbmFtZSB0byBhIHZhbGlkIGNzcyBwcm9wZXJ0eSBuYW1lXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICBjb25maWcuc2NvcGVcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBvYmplY3QsIG5vcm1hbGl6ZWQgd2l0aCBjc3Mgc3R5bGUgbmFtZXNcbiAqL1xudmFyIFRPX1NUWUxFX09CSkVDVCA9IGZ1bmN0aW9uKHN0eWxlcywgY29uZmlnLCBwcmVwZW5kLCByZXN1bHQpe1xuXG4gICAgaWYgKHR5cGVvZiBzdHlsZXMgPT0gJ3N0cmluZycpe1xuICAgICAgICBzdHlsZXMgPSB0b09iamVjdChzdHlsZXMpXG4gICAgfVxuXG4gICAgY29uZmlnID0gY29uZmlnIHx8IENPTkZJR1xuXG4gICAgY29uZmlnLmNzc1VuaXRsZXNzID0gY29uZmlnLmNzc1VuaXRsZXNzIHx8IENPTkZJRy5jc3NVbml0bGVzc1xuXG4gICAgcmVzdWx0ID0gcmVzdWx0IHx8IHt9XG5cbiAgICB2YXIgc2NvcGUgICAgPSBjb25maWcuc2NvcGUgfHwge30sXG5cbiAgICAgICAgLy9jb25maWdzXG4gICAgICAgIGFkZFVuaXRzID0gY29uZmlnLmFkZFVuaXRzICE9IG51bGw/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLmFkZFVuaXRzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlICYmIHNjb3BlLmFkZFVuaXRzICE9IG51bGw/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmFkZFVuaXRzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlLFxuXG4gICAgICAgIGNzc1VuaXRsZXNzICAgICAgPSAoY29uZmlnLmNzc1VuaXRsZXNzICE9IG51bGw/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5jc3NVbml0bGVzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5jc3NVbml0bGVzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwpIHx8IHt9LFxuICAgICAgICBjc3NVbml0ICAgICAgICAgID0gKGNvbmZpZy5jc3NVbml0IHx8IHNjb3BlPyBzY29wZS5jc3NVbml0OiBudWxsKSB8fCAncHgnLFxuICAgICAgICBwcmVmaXhQcm9wZXJ0aWVzID0gKGNvbmZpZy5wcmVmaXhQcm9wZXJ0aWVzIHx8IChzY29wZT8gc2NvcGUucHJlZml4UHJvcGVydGllczogbnVsbCkpIHx8IHt9LFxuXG4gICAgICAgIGNhbWVsaXplICAgID0gY29uZmlnLmNhbWVsaXplLFxuICAgICAgICBub3JtYWxpemVGbiA9IGNhbWVsaXplPyBDQU1FTElaRTogSFlQSEVOQVRFXG5cbiAgICAvLyBPYmplY3Qua2V5cyhjc3NVbml0bGVzcykuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xuICAgIC8vICAgICBjc3NVbml0bGVzc1tub3JtYWxpemVGbihrZXkpXSA9IDFcbiAgICAvLyB9KVxuXG4gICAgdmFyIHByb2Nlc3NlZCxcbiAgICAgICAgc3R5bGVOYW1lLFxuXG4gICAgICAgIHByb3BOYW1lLFxuICAgICAgICBwcm9wVmFsdWUsXG4gICAgICAgIHByb3BDc3NVbml0LFxuICAgICAgICBwcm9wVHlwZSxcbiAgICAgICAgcHJvcElzTnVtYmVyLFxuXG4gICAgICAgIGZuUHJvcFZhbHVlLFxuICAgICAgICBwcmVmaXhcblxuICAgIGZvciAocHJvcE5hbWUgaW4gc3R5bGVzKSBpZiAoSEFTX09XTihzdHlsZXMsIHByb3BOYW1lKSkge1xuXG4gICAgICAgIHByb3BWYWx1ZSA9IHN0eWxlc1sgcHJvcE5hbWUgXVxuXG4gICAgICAgIC8vdGhlIGh5cGhlbmF0ZWQgc3R5bGUgbmFtZSAoY3NzIHByb3BlcnR5IG5hbWUpXG4gICAgICAgIHN0eWxlTmFtZSA9IEhZUEhFTkFURShwcmVwZW5kPyBwcmVwZW5kICsgcHJvcE5hbWU6IHByb3BOYW1lKVxuXG4gICAgICAgIHByb2Nlc3NlZCA9IGZhbHNlXG4gICAgICAgIHByZWZpeCAgICA9IGZhbHNlXG5cbiAgICAgICAgaWYgKElTX0ZVTkNUSU9OKHByb3BWYWx1ZSkpIHtcblxuICAgICAgICAgICAgLy9hIGZ1bmN0aW9uIGNhbiBlaXRoZXIgcmV0dXJuIGEgY3NzIHZhbHVlXG4gICAgICAgICAgICAvL29yIGFuIG9iamVjdCB3aXRoIHsgdmFsdWUsIHByZWZpeCwgbmFtZSB9XG4gICAgICAgICAgICBmblByb3BWYWx1ZSA9IHByb3BWYWx1ZS5jYWxsKHNjb3BlIHx8IHN0eWxlcywgcHJvcFZhbHVlLCBwcm9wTmFtZSwgc3R5bGVOYW1lLCBzdHlsZXMpXG5cbiAgICAgICAgICAgIGlmIChJU19PQkpFQ1QoZm5Qcm9wVmFsdWUpICYmIGZuUHJvcFZhbHVlLnZhbHVlICE9IG51bGwpe1xuXG4gICAgICAgICAgICAgICAgcHJvcFZhbHVlID0gZm5Qcm9wVmFsdWUudmFsdWVcbiAgICAgICAgICAgICAgICBwcmVmaXggICAgPSBmblByb3BWYWx1ZS5wcmVmaXhcbiAgICAgICAgICAgICAgICBzdHlsZU5hbWUgPSBmblByb3BWYWx1ZS5uYW1lP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIWVBIRU5BVEUoZm5Qcm9wVmFsdWUubmFtZSk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlTmFtZVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb3BWYWx1ZSA9IGZuUHJvcFZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wVHlwZSAgICAgPSB0eXBlb2YgcHJvcFZhbHVlXG4gICAgICAgIHByb3BJc051bWJlciA9IHByb3BUeXBlID09ICdudW1iZXInIHx8IChwcm9wVHlwZSA9PSAnc3RyaW5nJyAmJiBwcm9wVmFsdWUgIT0gJycgJiYgcHJvcFZhbHVlICogMSA9PSBwcm9wVmFsdWUpXG5cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PSBudWxsIHx8IHN0eWxlTmFtZSA9PSBudWxsIHx8IHN0eWxlTmFtZSA9PT0gJycpe1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wSXNOdW1iZXIgfHwgcHJvcFR5cGUgPT0gJ3N0cmluZycpe1xuICAgICAgICAgICBwcm9jZXNzZWQgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXByb2Nlc3NlZCAmJiBwcm9wVmFsdWUudmFsdWUgIT0gbnVsbCAmJiBwcm9wVmFsdWUucHJlZml4KXtcbiAgICAgICAgICAgcHJvY2Vzc2VkID0gdHJ1ZVxuICAgICAgICAgICBwcmVmaXggICAgPSBwcm9wVmFsdWUucHJlZml4XG4gICAgICAgICAgIHByb3BWYWx1ZSA9IHByb3BWYWx1ZS52YWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaHlwaGVuU3R5bGVOYW1lID0gY2FtZWxpemU/IEhZUEhFTkFURShzdHlsZU5hbWUpOiBzdHlsZU5hbWVcblxuICAgICAgICBpZiAocHJvY2Vzc2VkKXtcblxuICAgICAgICAgICAgcHJlZml4ID0gcHJlZml4IHx8ICEhcHJlZml4UHJvcGVydGllc1tzdHlsZU5hbWVdXG5cbiAgICAgICAgICAgIGlmIChwcm9wSXNOdW1iZXIpe1xuICAgICAgICAgICAgICAgIHByb3BWYWx1ZSA9IGFkZFVuaXRzICYmICEoc3R5bGVOYW1lIGluIGNzc1VuaXRsZXNzKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BWYWx1ZSArIGNzc1VuaXQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BWYWx1ZSArICcnLy9jaGFuZ2UgaXQgdG8gYSBzdHJpbmcsIHNvIHRoYXQganF1ZXJ5IGRvZXMgbm90IGFwcGVuZCBweCBvciBvdGhlciB1bml0c1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3NwZWNpYWwgYm9yZGVyIHRyZWF0bWVudFxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICBzdHlsZU5hbWUgPT0gJ2JvcmRlcicgfHxcbiAgICAgICAgICAgICAgICAgICAgKCFzdHlsZU5hbWUuaW5kZXhPZignYm9yZGVyJylcbiAgICAgICAgICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhfnN0eWxlTmFtZS5pbmRleE9mKCdyYWRpdXMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICF+c3R5bGVOYW1lLmluZGV4T2YoJ3dpZHRoJykpXG4gICAgICAgICAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgICAgICAgICAgcHJvcElzTnVtYmVyXG4gICAgICAgICAgICAgICAgKXtcblxuICAgICAgICAgICAgICAgIHN0eWxlTmFtZSA9IHN0eWxlTmFtZSArICctd2lkdGgnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vc3BlY2lhbCBib3JkZXIgcmFkaXVzIHRyZWF0bWVudFxuICAgICAgICAgICAgaWYgKCFzdHlsZU5hbWUuaW5kZXhPZignYm9yZGVyLXJhZGl1cy0nKSl7XG4gICAgICAgICAgICAgICAgc3R5bGVOYW1lLnJlcGxhY2UoL2JvcmRlcigtcmFkaXVzKSgtKC4qKSkvLCBmdW5jdGlvbihzdHIsIHJhZGl1cywgdGhlUmVzdCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnLXRvcCcgICAgOiBbJy10b3AtbGVmdCcsICAgICAgJy10b3AtcmlnaHQnIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnLWxlZnQnICAgOiBbJy10b3AtbGVmdCcsICAgICctYm90dG9tLWxlZnQnIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnLXJpZ2h0JyAgOiBbJy10b3AtcmlnaHQnLCAgICctYm90dG9tLXJpZ2h0J10sXG4gICAgICAgICAgICAgICAgICAgICAgICAnLWJvdHRvbScgOiBbJy1ib3R0b20tbGVmdCcsICctYm90dG9tLXJpZ2h0J11cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGVSZXN0IGluIHBvc2l0aW9ucyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZU5hbWUgPSBbXVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbdGhlUmVzdF0uZm9yRWFjaChmdW5jdGlvbihwb3Mpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlTmFtZS5wdXNoKCdib3JkZXInICsgcG9zICsgcmFkaXVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlTmFtZSA9ICdib3JkZXInKyB0aGVSZXN0ICsgcmFkaXVzXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZU5hbWUpKXtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVOYW1lLmZvckVhY2goZnVuY3Rpb24oc3R5bGVOYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmVmaXgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5UHJlZml4KHJlc3VsdCwgc3R5bGVOYW1lLCBwcm9wVmFsdWUsIG5vcm1hbGl6ZUZuKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbbm9ybWFsaXplRm4oc3R5bGVOYW1lKV0gPSBwcm9wVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByZWZpeCl7XG4gICAgICAgICAgICAgICAgYXBwbHlQcmVmaXgocmVzdWx0LCBzdHlsZU5hbWUsIHByb3BWYWx1ZSwgbm9ybWFsaXplRm4pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtub3JtYWxpemVGbihzdHlsZU5hbWUpXSA9IHByb3BWYWx1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3RoZSBwcm9wVmFsdWUgbXVzdCBiZSBhbiBvYmplY3QsIHNvIGdvIGRvd24gdGhlIGhpZXJhcmNoeVxuICAgICAgICAgICAgVE9fU1RZTEVfT0JKRUNUKHByb3BWYWx1ZSwgY29uZmlnLCBzdHlsZU5hbWUgKyAnLScsIHJlc3VsdClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUT19TVFlMRV9PQkpFQ1QiLCIndXNlIHN0cmljdCdcblxudmFyIHRvU3R5bGVPYmplY3QgPSByZXF1aXJlKCcuL3RvU3R5bGVPYmplY3QnKVxudmFyIGhhc093biAgICAgICAgPSByZXF1aXJlKCcuL2hhc093bicpXG5cbi8qKlxuICogQGlnbm9yZVxuICogQG1ldGhvZCB0b1N0eWxlU3RyaW5nXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBzdHlsZXMgVGhlIG9iamVjdCB0byBjb252ZXJ0IHRvIGEgc3R5bGUgc3RyaW5nLlxuICogQHBhcmFtICB7T2JqZWN0fSBjb25maWdcbiAqIEBwYXJhbSAge0Jvb2xlYW59IGNvbmZpZy5hZGRVbml0cz10cnVlIFRydWUgaWYgeW91IHdhbnQgdG8gYWRkIHVuaXRzIHdoZW4gbnVtZXJpY2FsIHZhbHVlcyBhcmUgZW5jb3VudGVyZWQuIERlZmF1bHRzIHRvIHRydWVcbiAqIEBwYXJhbSAge09iamVjdH0gIGNvbmZpZy5jc3NVbml0bGVzcyBBbiBvYmplY3Qgd2hvc2Uga2V5cyByZXByZXNlbnQgY3NzIG51bWVyaWNhbCBwcm9wZXJ0eSBuYW1lcyB0aGF0IHdpbGwgbm90IGJlIGFwcGVuZGVkIHdpdGggdW5pdHMuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICBjb25maWcucHJlZml4UHJvcGVydGllcyBBbiBvYmplY3Qgd2hvc2Uga2V5cyByZXByZXNlbnQgY3NzIHByb3BlcnR5IG5hbWVzIHRoYXQgc2hvdWxkIGJlIHByZWZpeGVkXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICBjb25maWcuY3NzVW5pdD0ncHgnIFRoZSBjc3MgdW5pdCB0byBhcHBlbmQgdG8gbnVtZXJpY2FsIHZhbHVlcy4gRGVmYXVsdHMgdG8gJ3B4J1xuICogQHBhcmFtICB7U3RyaW5nfSAgY29uZmlnLnNjb3BlXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgb2JqZWN0LCBub3JtYWxpemVkIHdpdGggY3NzIHN0eWxlIG5hbWVzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc3R5bGVzLCBjb25maWcpe1xuICAgIHN0eWxlcyA9IHRvU3R5bGVPYmplY3Qoc3R5bGVzLCBjb25maWcpXG5cbiAgICB2YXIgcmVzdWx0ID0gW11cbiAgICB2YXIgcHJvcFxuXG4gICAgZm9yKHByb3AgaW4gc3R5bGVzKSBpZiAoaGFzT3duKHN0eWxlcywgcHJvcCkpe1xuICAgICAgICByZXN1bHQucHVzaChwcm9wICsgJzogJyArIHN0eWxlc1twcm9wXSlcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0LmpvaW4oJzsgJylcbn0iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHNsaWNlID0gcmVxdWlyZSgnc2xpY2VkJylcbnZhciBmbGF0dGVuID0gcmVxdWlyZSgnYXJyYXktZmxhdHRlbicpXG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBsZXRzIHVzIGNyZWF0ZSB2aXJ0dWFsIG5vZGVzIHVzaW5nIGEgc2ltcGxlXG4gKiBzeW50YXguIEl0IGlzIGNvbXBhdGlibGUgd2l0aCBKU1ggdHJhbnNmb3JtcyBzbyB5b3UgY2FuIHVzZVxuICogSlNYIHRvIHdyaXRlIG5vZGVzIHRoYXQgd2lsbCBjb21waWxlIHRvIHRoaXMgZnVuY3Rpb24uXG4gKlxuICogbGV0IG5vZGUgPSBlbGVtZW50KCdkaXYnLCB7IGlkOiAnZm9vJyB9LCBbXG4gKiAgIGVsZW1lbnQoJ2EnLCB7IGhyZWY6ICdodHRwOi8vZ29vZ2xlLmNvbScgfSwgJ0dvb2dsZScpXG4gKiBdKVxuICpcbiAqIFlvdSBjYW4gbGVhdmUgb3V0IHRoZSBhdHRyaWJ1dGVzIG9yIHRoZSBjaGlsZHJlbiBpZiBlaXRoZXJcbiAqIG9mIHRoZW0gYXJlbid0IG5lZWRlZCBhbmQgaXQgd2lsbCBmaWd1cmUgb3V0IHdoYXQgeW91J3JlXG4gKiB0cnlpbmcgdG8gZG8uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50XG5cbi8qKlxuICogQ3JlYXRlIHZpcnR1YWwgdHJlZXMgb2YgY29tcG9uZW50cy5cbiAqXG4gKiBUaGlzIGNyZWF0ZXMgdGhlIG5pY2VyIEFQSSBmb3IgdGhlIHVzZXIuXG4gKiBJdCB0cmFuc2xhdGVzIHRoYXQgZnJpZW5kbHkgQVBJIGludG8gYW4gYWN0dWFsIHRyZWUgb2Ygbm9kZXMuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICogQHBhcmFtIHtBcnJheX0gY2hpbGRyZW5cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZWxlbWVudCAodHlwZSwgYXR0cmlidXRlcywgY2hpbGRyZW4pIHtcbiAgLy8gRGVmYXVsdCB0byBkaXYgd2l0aCBubyBhcmdzXG4gIGlmICghdHlwZSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VsZW1lbnQoKSBuZWVkcyBhIHR5cGUuJylcbiAgfVxuXG4gIC8vIFNraXBwZWQgYWRkaW5nIGF0dHJpYnV0ZXMgYW5kIHdlJ3JlIHBhc3NpbmdcbiAgLy8gaW4gY2hpbGRyZW4gaW5zdGVhZC5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgKHR5cGVvZiBhdHRyaWJ1dGVzID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KGF0dHJpYnV0ZXMpKSkge1xuICAgIGNoaWxkcmVuID0gWyBhdHRyaWJ1dGVzIF1cbiAgICBhdHRyaWJ1dGVzID0ge31cbiAgfVxuXG4gIC8vIEFjY291bnQgZm9yIEpTWCBwdXR0aW5nIHRoZSBjaGlsZHJlbiBhcyBtdWx0aXBsZSBhcmd1bWVudHMuXG4gIC8vIFRoaXMgaXMgZXNzZW50aWFsbHkganVzdCB0aGUgRVM2IHJlc3QgcGFyYW1cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgY2hpbGRyZW4gPSBzbGljZShhcmd1bWVudHMsIDIpXG4gIH1cblxuICBjaGlsZHJlbiA9IGNoaWxkcmVuIHx8IFtdXG4gIGF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzIHx8IHt9XG5cbiAgLy8gRmxhdHRlbiBuZXN0ZWQgY2hpbGQgYXJyYXlzLiBUaGlzIGlzIGhvdyBKU1ggY29tcGlsZXMgc29tZSBub2Rlcy5cbiAgY2hpbGRyZW4gPSBmbGF0dGVuKGNoaWxkcmVuLCAyKVxuXG4gIC8vIEZpbHRlciBvdXQgYW55IGB1bmRlZmluZWRgIGVsZW1lbnRzXG4gIGNoaWxkcmVuID0gY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChpKSB7IHJldHVybiB0eXBlb2YgaSAhPT0gJ3VuZGVmaW5lZCcgfSlcblxuICAvLyBpZiB5b3UgcGFzcyBpbiBhIGZ1bmN0aW9uLCBpdCdzIGEgYENvbXBvbmVudGAgY29uc3RydWN0b3IuXG4gIC8vIG90aGVyd2lzZSBpdCdzIGFuIGVsZW1lbnQuXG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlc1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9zbGljZWQnKTtcbiIsIi8qIVxuICogRXZlbnRFbWl0dGVyIHY0LjIuMTEgLSBnaXQuaW8vZWVcbiAqIFVubGljZW5zZSAtIGh0dHA6Ly91bmxpY2Vuc2Uub3JnL1xuICogT2xpdmVyIENhbGR3ZWxsIC0gaHR0cDovL29saS5tZS51ay9cbiAqIEBwcmVzZXJ2ZVxuICovXG5cbjsoZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIC8qKlxuICAgICAqIENsYXNzIGZvciBtYW5hZ2luZyBldmVudHMuXG4gICAgICogQ2FuIGJlIGV4dGVuZGVkIHRvIHByb3ZpZGUgZXZlbnQgZnVuY3Rpb25hbGl0eSBpbiBvdGhlciBjbGFzc2VzLlxuICAgICAqXG4gICAgICogQGNsYXNzIEV2ZW50RW1pdHRlciBNYW5hZ2VzIGV2ZW50IHJlZ2lzdGVyaW5nIGFuZCBlbWl0dGluZy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7fVxuXG4gICAgLy8gU2hvcnRjdXRzIHRvIGltcHJvdmUgc3BlZWQgYW5kIHNpemVcbiAgICB2YXIgcHJvdG8gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlO1xuICAgIHZhciBleHBvcnRzID0gdGhpcztcbiAgICB2YXIgb3JpZ2luYWxHbG9iYWxWYWx1ZSA9IGV4cG9ydHMuRXZlbnRFbWl0dGVyO1xuXG4gICAgLyoqXG4gICAgICogRmluZHMgdGhlIGluZGV4IG9mIHRoZSBsaXN0ZW5lciBmb3IgdGhlIGV2ZW50IGluIGl0cyBzdG9yYWdlIGFycmF5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbltdfSBsaXN0ZW5lcnMgQXJyYXkgb2YgbGlzdGVuZXJzIHRvIHNlYXJjaCB0aHJvdWdoLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIE1ldGhvZCB0byBsb29rIGZvci5cbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEluZGV4IG9mIHRoZSBzcGVjaWZpZWQgbGlzdGVuZXIsIC0xIGlmIG5vdCBmb3VuZFxuICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGluZGV4T2ZMaXN0ZW5lcihsaXN0ZW5lcnMsIGxpc3RlbmVyKSB7XG4gICAgICAgIHZhciBpID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVyc1tpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBhIG1ldGhvZCB3aGlsZSBrZWVwaW5nIHRoZSBjb250ZXh0IGNvcnJlY3QsIHRvIGFsbG93IGZvciBvdmVyd3JpdGluZyBvZiB0YXJnZXQgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHRhcmdldCBtZXRob2QuXG4gICAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBhbGlhc2VkIG1ldGhvZFxuICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFsaWFzKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGFsaWFzQ2xvc3VyZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW25hbWVdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGlzdGVuZXIgYXJyYXkgZm9yIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gICAgICogV2lsbCBpbml0aWFsaXNlIHRoZSBldmVudCBvYmplY3QgYW5kIGxpc3RlbmVyIGFycmF5cyBpZiByZXF1aXJlZC5cbiAgICAgKiBXaWxsIHJldHVybiBhbiBvYmplY3QgaWYgeW91IHVzZSBhIHJlZ2V4IHNlYXJjaC4gVGhlIG9iamVjdCBjb250YWlucyBrZXlzIGZvciBlYWNoIG1hdGNoZWQgZXZlbnQuIFNvIC9iYVtyel0vIG1pZ2h0IHJldHVybiBhbiBvYmplY3QgY29udGFpbmluZyBiYXIgYW5kIGJhei4gQnV0IG9ubHkgaWYgeW91IGhhdmUgZWl0aGVyIGRlZmluZWQgdGhlbSB3aXRoIGRlZmluZUV2ZW50IG9yIGFkZGVkIHNvbWUgbGlzdGVuZXJzIHRvIHRoZW0uXG4gICAgICogRWFjaCBwcm9wZXJ0eSBpbiB0aGUgb2JqZWN0IHJlc3BvbnNlIGlzIGFuIGFycmF5IG9mIGxpc3RlbmVyIGZ1bmN0aW9ucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfFJlZ0V4cH0gZXZ0IE5hbWUgb2YgdGhlIGV2ZW50IHRvIHJldHVybiB0aGUgbGlzdGVuZXJzIGZyb20uXG4gICAgICogQHJldHVybiB7RnVuY3Rpb25bXXxPYmplY3R9IEFsbCBsaXN0ZW5lciBmdW5jdGlvbnMgZm9yIHRoZSBldmVudC5cbiAgICAgKi9cbiAgICBwcm90by5nZXRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRMaXN0ZW5lcnMoZXZ0KSB7XG4gICAgICAgIHZhciBldmVudHMgPSB0aGlzLl9nZXRFdmVudHMoKTtcbiAgICAgICAgdmFyIHJlc3BvbnNlO1xuICAgICAgICB2YXIga2V5O1xuXG4gICAgICAgIC8vIFJldHVybiBhIGNvbmNhdGVuYXRlZCBhcnJheSBvZiBhbGwgbWF0Y2hpbmcgZXZlbnRzIGlmXG4gICAgICAgIC8vIHRoZSBzZWxlY3RvciBpcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAgICAgICAgaWYgKGV2dCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSB7fTtcbiAgICAgICAgICAgIGZvciAoa2V5IGluIGV2ZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChldmVudHMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBldnQudGVzdChrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlW2tleV0gPSBldmVudHNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IGV2ZW50c1tldnRdIHx8IChldmVudHNbZXZ0XSA9IFtdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGFrZXMgYSBsaXN0IG9mIGxpc3RlbmVyIG9iamVjdHMgYW5kIGZsYXR0ZW5zIGl0IGludG8gYSBsaXN0IG9mIGxpc3RlbmVyIGZ1bmN0aW9ucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IGxpc3RlbmVycyBSYXcgbGlzdGVuZXIgb2JqZWN0cy5cbiAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbltdfSBKdXN0IHRoZSBsaXN0ZW5lciBmdW5jdGlvbnMuXG4gICAgICovXG4gICAgcHJvdG8uZmxhdHRlbkxpc3RlbmVycyA9IGZ1bmN0aW9uIGZsYXR0ZW5MaXN0ZW5lcnMobGlzdGVuZXJzKSB7XG4gICAgICAgIHZhciBmbGF0TGlzdGVuZXJzID0gW107XG4gICAgICAgIHZhciBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGZsYXRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcnNbaV0ubGlzdGVuZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZsYXRMaXN0ZW5lcnM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZldGNoZXMgdGhlIHJlcXVlc3RlZCBsaXN0ZW5lcnMgdmlhIGdldExpc3RlbmVycyBidXQgd2lsbCBhbHdheXMgcmV0dXJuIHRoZSByZXN1bHRzIGluc2lkZSBhbiBvYmplY3QuIFRoaXMgaXMgbWFpbmx5IGZvciBpbnRlcm5hbCB1c2UgYnV0IG90aGVycyBtYXkgZmluZCBpdCB1c2VmdWwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xSZWdFeHB9IGV2dCBOYW1lIG9mIHRoZSBldmVudCB0byByZXR1cm4gdGhlIGxpc3RlbmVycyBmcm9tLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gQWxsIGxpc3RlbmVyIGZ1bmN0aW9ucyBmb3IgYW4gZXZlbnQgaW4gYW4gb2JqZWN0LlxuICAgICAqL1xuICAgIHByb3RvLmdldExpc3RlbmVyc0FzT2JqZWN0ID0gZnVuY3Rpb24gZ2V0TGlzdGVuZXJzQXNPYmplY3QoZXZ0KSB7XG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLmdldExpc3RlbmVycyhldnQpO1xuICAgICAgICB2YXIgcmVzcG9uc2U7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVycyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IHt9O1xuICAgICAgICAgICAgcmVzcG9uc2VbZXZ0XSA9IGxpc3RlbmVycztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXNwb25zZSB8fCBsaXN0ZW5lcnM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBsaXN0ZW5lciBmdW5jdGlvbiB0byB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICAgICAqIFRoZSBsaXN0ZW5lciB3aWxsIG5vdCBiZSBhZGRlZCBpZiBpdCBpcyBhIGR1cGxpY2F0ZS5cbiAgICAgKiBJZiB0aGUgbGlzdGVuZXIgcmV0dXJucyB0cnVlIHRoZW4gaXQgd2lsbCBiZSByZW1vdmVkIGFmdGVyIGl0IGlzIGNhbGxlZC5cbiAgICAgKiBJZiB5b3UgcGFzcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBhcyB0aGUgZXZlbnQgbmFtZSB0aGVuIHRoZSBsaXN0ZW5lciB3aWxsIGJlIGFkZGVkIHRvIGFsbCBldmVudHMgdGhhdCBtYXRjaCBpdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfFJlZ0V4cH0gZXZ0IE5hbWUgb2YgdGhlIGV2ZW50IHRvIGF0dGFjaCB0aGUgbGlzdGVuZXIgdG8uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgTWV0aG9kIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBldmVudCBpcyBlbWl0dGVkLiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyB0cnVlIHRoZW4gaXQgd2lsbCBiZSByZW1vdmVkIGFmdGVyIGNhbGxpbmcuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBDdXJyZW50IGluc3RhbmNlIG9mIEV2ZW50RW1pdHRlciBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgcHJvdG8uYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcihldnQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLmdldExpc3RlbmVyc0FzT2JqZWN0KGV2dCk7XG4gICAgICAgIHZhciBsaXN0ZW5lcklzV3JhcHBlZCA9IHR5cGVvZiBsaXN0ZW5lciA9PT0gJ29iamVjdCc7XG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBpZiAobGlzdGVuZXJzLmhhc093blByb3BlcnR5KGtleSkgJiYgaW5kZXhPZkxpc3RlbmVyKGxpc3RlbmVyc1trZXldLCBsaXN0ZW5lcikgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzW2tleV0ucHVzaChsaXN0ZW5lcklzV3JhcHBlZCA/IGxpc3RlbmVyIDoge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcjogbGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgICAgIG9uY2U6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWxpYXMgb2YgYWRkTGlzdGVuZXJcbiAgICAgKi9cbiAgICBwcm90by5vbiA9IGFsaWFzKCdhZGRMaXN0ZW5lcicpO1xuXG4gICAgLyoqXG4gICAgICogU2VtaS1hbGlhcyBvZiBhZGRMaXN0ZW5lci4gSXQgd2lsbCBhZGQgYSBsaXN0ZW5lciB0aGF0IHdpbGwgYmVcbiAgICAgKiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQgYWZ0ZXIgaXRzIGZpcnN0IGV4ZWN1dGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfFJlZ0V4cH0gZXZ0IE5hbWUgb2YgdGhlIGV2ZW50IHRvIGF0dGFjaCB0aGUgbGlzdGVuZXIgdG8uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgTWV0aG9kIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBldmVudCBpcyBlbWl0dGVkLiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyB0cnVlIHRoZW4gaXQgd2lsbCBiZSByZW1vdmVkIGFmdGVyIGNhbGxpbmcuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBDdXJyZW50IGluc3RhbmNlIG9mIEV2ZW50RW1pdHRlciBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgcHJvdG8uYWRkT25jZUxpc3RlbmVyID0gZnVuY3Rpb24gYWRkT25jZUxpc3RlbmVyKGV2dCwgbGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkTGlzdGVuZXIoZXZ0LCB7XG4gICAgICAgICAgICBsaXN0ZW5lcjogbGlzdGVuZXIsXG4gICAgICAgICAgICBvbmNlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBvZiBhZGRPbmNlTGlzdGVuZXIuXG4gICAgICovXG4gICAgcHJvdG8ub25jZSA9IGFsaWFzKCdhZGRPbmNlTGlzdGVuZXInKTtcblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgYW4gZXZlbnQgbmFtZS4gVGhpcyBpcyByZXF1aXJlZCBpZiB5b3Ugd2FudCB0byB1c2UgYSByZWdleCB0byBhZGQgYSBsaXN0ZW5lciB0byBtdWx0aXBsZSBldmVudHMgYXQgb25jZS4gSWYgeW91IGRvbid0IGRvIHRoaXMgdGhlbiBob3cgZG8geW91IGV4cGVjdCBpdCB0byBrbm93IHdoYXQgZXZlbnQgdG8gYWRkIHRvPyBTaG91bGQgaXQganVzdCBhZGQgdG8gZXZlcnkgcG9zc2libGUgbWF0Y2ggZm9yIGEgcmVnZXg/IE5vLiBUaGF0IGlzIHNjYXJ5IGFuZCBiYWQuXG4gICAgICogWW91IG5lZWQgdG8gdGVsbCBpdCB3aGF0IGV2ZW50IG5hbWVzIHNob3VsZCBiZSBtYXRjaGVkIGJ5IGEgcmVnZXguXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZ0IE5hbWUgb2YgdGhlIGV2ZW50IHRvIGNyZWF0ZS5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEN1cnJlbnQgaW5zdGFuY2Ugb2YgRXZlbnRFbWl0dGVyIGZvciBjaGFpbmluZy5cbiAgICAgKi9cbiAgICBwcm90by5kZWZpbmVFdmVudCA9IGZ1bmN0aW9uIGRlZmluZUV2ZW50KGV2dCkge1xuICAgICAgICB0aGlzLmdldExpc3RlbmVycyhldnQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXNlcyBkZWZpbmVFdmVudCB0byBkZWZpbmUgbXVsdGlwbGUgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gZXZ0cyBBbiBhcnJheSBvZiBldmVudCBuYW1lcyB0byBkZWZpbmUuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBDdXJyZW50IGluc3RhbmNlIG9mIEV2ZW50RW1pdHRlciBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgcHJvdG8uZGVmaW5lRXZlbnRzID0gZnVuY3Rpb24gZGVmaW5lRXZlbnRzKGV2dHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmluZUV2ZW50KGV2dHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgbGlzdGVuZXIgZnVuY3Rpb24gZnJvbSB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICAgICAqIFdoZW4gcGFzc2VkIGEgcmVndWxhciBleHByZXNzaW9uIGFzIHRoZSBldmVudCBuYW1lLCBpdCB3aWxsIHJlbW92ZSB0aGUgbGlzdGVuZXIgZnJvbSBhbGwgZXZlbnRzIHRoYXQgbWF0Y2ggaXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xSZWdFeHB9IGV2dCBOYW1lIG9mIHRoZSBldmVudCB0byByZW1vdmUgdGhlIGxpc3RlbmVyIGZyb20uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgTWV0aG9kIHRvIHJlbW92ZSBmcm9tIHRoZSBldmVudC5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEN1cnJlbnQgaW5zdGFuY2Ugb2YgRXZlbnRFbWl0dGVyIGZvciBjaGFpbmluZy5cbiAgICAgKi9cbiAgICBwcm90by5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGV2dCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuZ2V0TGlzdGVuZXJzQXNPYmplY3QoZXZ0KTtcbiAgICAgICAgdmFyIGluZGV4O1xuICAgICAgICB2YXIga2V5O1xuXG4gICAgICAgIGZvciAoa2V5IGluIGxpc3RlbmVycykge1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpbmRleE9mTGlzdGVuZXIobGlzdGVuZXJzW2tleV0sIGxpc3RlbmVyKTtcblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzW2tleV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWxpYXMgb2YgcmVtb3ZlTGlzdGVuZXJcbiAgICAgKi9cbiAgICBwcm90by5vZmYgPSBhbGlhcygncmVtb3ZlTGlzdGVuZXInKTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgbGlzdGVuZXJzIGluIGJ1bGsgdXNpbmcgdGhlIG1hbmlwdWxhdGVMaXN0ZW5lcnMgbWV0aG9kLlxuICAgICAqIElmIHlvdSBwYXNzIGFuIG9iamVjdCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHlvdSBjYW4gYWRkIHRvIG11bHRpcGxlIGV2ZW50cyBhdCBvbmNlLiBUaGUgb2JqZWN0IHNob3VsZCBjb250YWluIGtleSB2YWx1ZSBwYWlycyBvZiBldmVudHMgYW5kIGxpc3RlbmVycyBvciBsaXN0ZW5lciBhcnJheXMuIFlvdSBjYW4gYWxzbyBwYXNzIGl0IGFuIGV2ZW50IG5hbWUgYW5kIGFuIGFycmF5IG9mIGxpc3RlbmVycyB0byBiZSBhZGRlZC5cbiAgICAgKiBZb3UgY2FuIGFsc28gcGFzcyBpdCBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBhZGQgdGhlIGFycmF5IG9mIGxpc3RlbmVycyB0byBhbGwgZXZlbnRzIHRoYXQgbWF0Y2ggaXQuXG4gICAgICogWWVhaCwgdGhpcyBmdW5jdGlvbiBkb2VzIHF1aXRlIGEgYml0LiBUaGF0J3MgcHJvYmFibHkgYSBiYWQgdGhpbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R8UmVnRXhwfSBldnQgQW4gZXZlbnQgbmFtZSBpZiB5b3Ugd2lsbCBwYXNzIGFuIGFycmF5IG9mIGxpc3RlbmVycyBuZXh0LiBBbiBvYmplY3QgaWYgeW91IHdpc2ggdG8gYWRkIHRvIG11bHRpcGxlIGV2ZW50cyBhdCBvbmNlLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb25bXX0gW2xpc3RlbmVyc10gQW4gb3B0aW9uYWwgYXJyYXkgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRvIGFkZC5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEN1cnJlbnQgaW5zdGFuY2Ugb2YgRXZlbnRFbWl0dGVyIGZvciBjaGFpbmluZy5cbiAgICAgKi9cbiAgICBwcm90by5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoZXZ0LCBsaXN0ZW5lcnMpIHtcbiAgICAgICAgLy8gUGFzcyB0aHJvdWdoIHRvIG1hbmlwdWxhdGVMaXN0ZW5lcnNcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuaXB1bGF0ZUxpc3RlbmVycyhmYWxzZSwgZXZ0LCBsaXN0ZW5lcnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGxpc3RlbmVycyBpbiBidWxrIHVzaW5nIHRoZSBtYW5pcHVsYXRlTGlzdGVuZXJzIG1ldGhvZC5cbiAgICAgKiBJZiB5b3UgcGFzcyBhbiBvYmplY3QgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB5b3UgY2FuIHJlbW92ZSBmcm9tIG11bHRpcGxlIGV2ZW50cyBhdCBvbmNlLiBUaGUgb2JqZWN0IHNob3VsZCBjb250YWluIGtleSB2YWx1ZSBwYWlycyBvZiBldmVudHMgYW5kIGxpc3RlbmVycyBvciBsaXN0ZW5lciBhcnJheXMuXG4gICAgICogWW91IGNhbiBhbHNvIHBhc3MgaXQgYW4gZXZlbnQgbmFtZSBhbmQgYW4gYXJyYXkgb2YgbGlzdGVuZXJzIHRvIGJlIHJlbW92ZWQuXG4gICAgICogWW91IGNhbiBhbHNvIHBhc3MgaXQgYSByZWd1bGFyIGV4cHJlc3Npb24gdG8gcmVtb3ZlIHRoZSBsaXN0ZW5lcnMgZnJvbSBhbGwgZXZlbnRzIHRoYXQgbWF0Y2ggaXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R8UmVnRXhwfSBldnQgQW4gZXZlbnQgbmFtZSBpZiB5b3Ugd2lsbCBwYXNzIGFuIGFycmF5IG9mIGxpc3RlbmVycyBuZXh0LiBBbiBvYmplY3QgaWYgeW91IHdpc2ggdG8gcmVtb3ZlIGZyb20gbXVsdGlwbGUgZXZlbnRzIGF0IG9uY2UuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbltdfSBbbGlzdGVuZXJzXSBBbiBvcHRpb25hbCBhcnJheSBvZiBsaXN0ZW5lciBmdW5jdGlvbnMgdG8gcmVtb3ZlLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gQ3VycmVudCBpbnN0YW5jZSBvZiBFdmVudEVtaXR0ZXIgZm9yIGNoYWluaW5nLlxuICAgICAqL1xuICAgIHByb3RvLnJlbW92ZUxpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycyhldnQsIGxpc3RlbmVycykge1xuICAgICAgICAvLyBQYXNzIHRocm91Z2ggdG8gbWFuaXB1bGF0ZUxpc3RlbmVyc1xuICAgICAgICByZXR1cm4gdGhpcy5tYW5pcHVsYXRlTGlzdGVuZXJzKHRydWUsIGV2dCwgbGlzdGVuZXJzKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRWRpdHMgbGlzdGVuZXJzIGluIGJ1bGsuIFRoZSBhZGRMaXN0ZW5lcnMgYW5kIHJlbW92ZUxpc3RlbmVycyBtZXRob2RzIGJvdGggdXNlIHRoaXMgdG8gZG8gdGhlaXIgam9iLiBZb3Ugc2hvdWxkIHJlYWxseSB1c2UgdGhvc2UgaW5zdGVhZCwgdGhpcyBpcyBhIGxpdHRsZSBsb3dlciBsZXZlbC5cbiAgICAgKiBUaGUgZmlyc3QgYXJndW1lbnQgd2lsbCBkZXRlcm1pbmUgaWYgdGhlIGxpc3RlbmVycyBhcmUgcmVtb3ZlZCAodHJ1ZSkgb3IgYWRkZWQgKGZhbHNlKS5cbiAgICAgKiBJZiB5b3UgcGFzcyBhbiBvYmplY3QgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB5b3UgY2FuIGFkZC9yZW1vdmUgZnJvbSBtdWx0aXBsZSBldmVudHMgYXQgb25jZS4gVGhlIG9iamVjdCBzaG91bGQgY29udGFpbiBrZXkgdmFsdWUgcGFpcnMgb2YgZXZlbnRzIGFuZCBsaXN0ZW5lcnMgb3IgbGlzdGVuZXIgYXJyYXlzLlxuICAgICAqIFlvdSBjYW4gYWxzbyBwYXNzIGl0IGFuIGV2ZW50IG5hbWUgYW5kIGFuIGFycmF5IG9mIGxpc3RlbmVycyB0byBiZSBhZGRlZC9yZW1vdmVkLlxuICAgICAqIFlvdSBjYW4gYWxzbyBwYXNzIGl0IGEgcmVndWxhciBleHByZXNzaW9uIHRvIG1hbmlwdWxhdGUgdGhlIGxpc3RlbmVycyBvZiBhbGwgZXZlbnRzIHRoYXQgbWF0Y2ggaXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJlbW92ZSBUcnVlIGlmIHlvdSB3YW50IHRvIHJlbW92ZSBsaXN0ZW5lcnMsIGZhbHNlIGlmIHlvdSB3YW50IHRvIGFkZC5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R8UmVnRXhwfSBldnQgQW4gZXZlbnQgbmFtZSBpZiB5b3Ugd2lsbCBwYXNzIGFuIGFycmF5IG9mIGxpc3RlbmVycyBuZXh0LiBBbiBvYmplY3QgaWYgeW91IHdpc2ggdG8gYWRkL3JlbW92ZSBmcm9tIG11bHRpcGxlIGV2ZW50cyBhdCBvbmNlLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb25bXX0gW2xpc3RlbmVyc10gQW4gb3B0aW9uYWwgYXJyYXkgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRvIGFkZC9yZW1vdmUuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBDdXJyZW50IGluc3RhbmNlIG9mIEV2ZW50RW1pdHRlciBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgcHJvdG8ubWFuaXB1bGF0ZUxpc3RlbmVycyA9IGZ1bmN0aW9uIG1hbmlwdWxhdGVMaXN0ZW5lcnMocmVtb3ZlLCBldnQsIGxpc3RlbmVycykge1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICB2YXIgc2luZ2xlID0gcmVtb3ZlID8gdGhpcy5yZW1vdmVMaXN0ZW5lciA6IHRoaXMuYWRkTGlzdGVuZXI7XG4gICAgICAgIHZhciBtdWx0aXBsZSA9IHJlbW92ZSA/IHRoaXMucmVtb3ZlTGlzdGVuZXJzIDogdGhpcy5hZGRMaXN0ZW5lcnM7XG5cbiAgICAgICAgLy8gSWYgZXZ0IGlzIGFuIG9iamVjdCB0aGVuIHBhc3MgZWFjaCBvZiBpdHMgcHJvcGVydGllcyB0byB0aGlzIG1ldGhvZFxuICAgICAgICBpZiAodHlwZW9mIGV2dCA9PT0gJ29iamVjdCcgJiYgIShldnQgaW5zdGFuY2VvZiBSZWdFeHApKSB7XG4gICAgICAgICAgICBmb3IgKGkgaW4gZXZ0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2dC5oYXNPd25Qcm9wZXJ0eShpKSAmJiAodmFsdWUgPSBldnRbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3MgdGhlIHNpbmdsZSBsaXN0ZW5lciBzdHJhaWdodCB0aHJvdWdoIHRvIHRoZSBzaW5ndWxhciBtZXRob2RcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlLmNhbGwodGhpcywgaSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHBhc3MgYmFjayB0byB0aGUgbXVsdGlwbGUgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlLmNhbGwodGhpcywgaSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gU28gZXZ0IG11c3QgYmUgYSBzdHJpbmdcbiAgICAgICAgICAgIC8vIEFuZCBsaXN0ZW5lcnMgbXVzdCBiZSBhbiBhcnJheSBvZiBsaXN0ZW5lcnNcbiAgICAgICAgICAgIC8vIExvb3Agb3ZlciBpdCBhbmQgcGFzcyBlYWNoIG9uZSB0byB0aGUgbXVsdGlwbGUgbWV0aG9kXG4gICAgICAgICAgICBpID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgICAgICBzaW5nbGUuY2FsbCh0aGlzLCBldnQsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgbGlzdGVuZXJzIGZyb20gYSBzcGVjaWZpZWQgZXZlbnQuXG4gICAgICogSWYgeW91IGRvIG5vdCBzcGVjaWZ5IGFuIGV2ZW50IHRoZW4gYWxsIGxpc3RlbmVycyB3aWxsIGJlIHJlbW92ZWQuXG4gICAgICogVGhhdCBtZWFucyBldmVyeSBldmVudCB3aWxsIGJlIGVtcHRpZWQuXG4gICAgICogWW91IGNhbiBhbHNvIHBhc3MgYSByZWdleCB0byByZW1vdmUgYWxsIGV2ZW50cyB0aGF0IG1hdGNoIGl0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8UmVnRXhwfSBbZXZ0XSBPcHRpb25hbCBuYW1lIG9mIHRoZSBldmVudCB0byByZW1vdmUgYWxsIGxpc3RlbmVycyBmb3IuIFdpbGwgcmVtb3ZlIGZyb20gZXZlcnkgZXZlbnQgaWYgbm90IHBhc3NlZC5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEN1cnJlbnQgaW5zdGFuY2Ugb2YgRXZlbnRFbWl0dGVyIGZvciBjaGFpbmluZy5cbiAgICAgKi9cbiAgICBwcm90by5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50KGV2dCkge1xuICAgICAgICB2YXIgdHlwZSA9IHR5cGVvZiBldnQ7XG4gICAgICAgIHZhciBldmVudHMgPSB0aGlzLl9nZXRFdmVudHMoKTtcbiAgICAgICAgdmFyIGtleTtcblxuICAgICAgICAvLyBSZW1vdmUgZGlmZmVyZW50IHRoaW5ncyBkZXBlbmRpbmcgb24gdGhlIHN0YXRlIG9mIGV2dFxuICAgICAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBhbGwgbGlzdGVuZXJzIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50XG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW2V2dF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZ0IGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgYWxsIGV2ZW50cyBtYXRjaGluZyB0aGUgcmVnZXguXG4gICAgICAgICAgICBmb3IgKGtleSBpbiBldmVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KGtleSkgJiYgZXZ0LnRlc3Qoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZXZlbnRzW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGFsbCBsaXN0ZW5lcnMgaW4gYWxsIGV2ZW50c1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBvZiByZW1vdmVFdmVudC5cbiAgICAgKlxuICAgICAqIEFkZGVkIHRvIG1pcnJvciB0aGUgbm9kZSBBUEkuXG4gICAgICovXG4gICAgcHJvdG8ucmVtb3ZlQWxsTGlzdGVuZXJzID0gYWxpYXMoJ3JlbW92ZUV2ZW50Jyk7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhbiBldmVudCBvZiB5b3VyIGNob2ljZS5cbiAgICAgKiBXaGVuIGVtaXR0ZWQsIGV2ZXJ5IGxpc3RlbmVyIGF0dGFjaGVkIHRvIHRoYXQgZXZlbnQgd2lsbCBiZSBleGVjdXRlZC5cbiAgICAgKiBJZiB5b3UgcGFzcyB0aGUgb3B0aW9uYWwgYXJndW1lbnQgYXJyYXkgdGhlbiB0aG9zZSBhcmd1bWVudHMgd2lsbCBiZSBwYXNzZWQgdG8gZXZlcnkgbGlzdGVuZXIgdXBvbiBleGVjdXRpb24uXG4gICAgICogQmVjYXVzZSBpdCB1c2VzIGBhcHBseWAsIHlvdXIgYXJyYXkgb2YgYXJndW1lbnRzIHdpbGwgYmUgcGFzc2VkIGFzIGlmIHlvdSB3cm90ZSB0aGVtIG91dCBzZXBhcmF0ZWx5LlxuICAgICAqIFNvIHRoZXkgd2lsbCBub3QgYXJyaXZlIHdpdGhpbiB0aGUgYXJyYXkgb24gdGhlIG90aGVyIHNpZGUsIHRoZXkgd2lsbCBiZSBzZXBhcmF0ZS5cbiAgICAgKiBZb3UgY2FuIGFsc28gcGFzcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBlbWl0IHRvIGFsbCBldmVudHMgdGhhdCBtYXRjaCBpdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfFJlZ0V4cH0gZXZ0IE5hbWUgb2YgdGhlIGV2ZW50IHRvIGVtaXQgYW5kIGV4ZWN1dGUgbGlzdGVuZXJzIGZvci5cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBbYXJnc10gT3B0aW9uYWwgYXJyYXkgb2YgYXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byBlYWNoIGxpc3RlbmVyLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gQ3VycmVudCBpbnN0YW5jZSBvZiBFdmVudEVtaXR0ZXIgZm9yIGNoYWluaW5nLlxuICAgICAqL1xuICAgIHByb3RvLmVtaXRFdmVudCA9IGZ1bmN0aW9uIGVtaXRFdmVudChldnQsIGFyZ3MpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyc01hcCA9IHRoaXMuZ2V0TGlzdGVuZXJzQXNPYmplY3QoZXZ0KTtcbiAgICAgICAgdmFyIGxpc3RlbmVycztcbiAgICAgICAgdmFyIGxpc3RlbmVyO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgdmFyIHJlc3BvbnNlO1xuXG4gICAgICAgIGZvciAoa2V5IGluIGxpc3RlbmVyc01hcCkge1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVyc01hcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzTWFwW2tleV0uc2xpY2UoMCk7XG4gICAgICAgICAgICAgICAgaSA9IGxpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciByZXR1cm5zIHRydWUgdGhlbiBpdCBzaGFsbCBiZSByZW1vdmVkIGZyb20gdGhlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSBmdW5jdGlvbiBpcyBleGVjdXRlZCBlaXRoZXIgd2l0aCBhIGJhc2ljIGNhbGwgb3IgYW4gYXBwbHkgaWYgdGhlcmUgaXMgYW4gYXJncyBhcnJheVxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIub25jZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihldnQsIGxpc3RlbmVyLmxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gbGlzdGVuZXIubGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyB8fCBbXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlID09PSB0aGlzLl9nZXRPbmNlUmV0dXJuVmFsdWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihldnQsIGxpc3RlbmVyLmxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBvZiBlbWl0RXZlbnRcbiAgICAgKi9cbiAgICBwcm90by50cmlnZ2VyID0gYWxpYXMoJ2VtaXRFdmVudCcpO1xuXG4gICAgLyoqXG4gICAgICogU3VidGx5IGRpZmZlcmVudCBmcm9tIGVtaXRFdmVudCBpbiB0aGF0IGl0IHdpbGwgcGFzcyBpdHMgYXJndW1lbnRzIG9uIHRvIHRoZSBsaXN0ZW5lcnMsIGFzIG9wcG9zZWQgdG8gdGFraW5nIGEgc2luZ2xlIGFycmF5IG9mIGFyZ3VtZW50cyB0byBwYXNzIG9uLlxuICAgICAqIEFzIHdpdGggZW1pdEV2ZW50LCB5b3UgY2FuIHBhc3MgYSByZWdleCBpbiBwbGFjZSBvZiB0aGUgZXZlbnQgbmFtZSB0byBlbWl0IHRvIGFsbCBldmVudHMgdGhhdCBtYXRjaCBpdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfFJlZ0V4cH0gZXZ0IE5hbWUgb2YgdGhlIGV2ZW50IHRvIGVtaXQgYW5kIGV4ZWN1dGUgbGlzdGVuZXJzIGZvci5cbiAgICAgKiBAcGFyYW0gey4uLip9IE9wdGlvbmFsIGFkZGl0aW9uYWwgYXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byBlYWNoIGxpc3RlbmVyLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gQ3VycmVudCBpbnN0YW5jZSBvZiBFdmVudEVtaXR0ZXIgZm9yIGNoYWluaW5nLlxuICAgICAqL1xuICAgIHByb3RvLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2dCkge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIHJldHVybiB0aGlzLmVtaXRFdmVudChldnQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IHZhbHVlIHRvIGNoZWNrIGFnYWluc3Qgd2hlbiBleGVjdXRpbmcgbGlzdGVuZXJzLiBJZiBhXG4gICAgICogbGlzdGVuZXJzIHJldHVybiB2YWx1ZSBtYXRjaGVzIHRoZSBvbmUgc2V0IGhlcmUgdGhlbiBpdCB3aWxsIGJlIHJlbW92ZWRcbiAgICAgKiBhZnRlciBleGVjdXRpb24uIFRoaXMgdmFsdWUgZGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIG5ldyB2YWx1ZSB0byBjaGVjayBmb3Igd2hlbiBleGVjdXRpbmcgbGlzdGVuZXJzLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gQ3VycmVudCBpbnN0YW5jZSBvZiBFdmVudEVtaXR0ZXIgZm9yIGNoYWluaW5nLlxuICAgICAqL1xuICAgIHByb3RvLnNldE9uY2VSZXR1cm5WYWx1ZSA9IGZ1bmN0aW9uIHNldE9uY2VSZXR1cm5WYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9vbmNlUmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZldGNoZXMgdGhlIGN1cnJlbnQgdmFsdWUgdG8gY2hlY2sgYWdhaW5zdCB3aGVuIGV4ZWN1dGluZyBsaXN0ZW5lcnMuIElmXG4gICAgICogdGhlIGxpc3RlbmVycyByZXR1cm4gdmFsdWUgbWF0Y2hlcyB0aGlzIG9uZSB0aGVuIGl0IHNob3VsZCBiZSByZW1vdmVkXG4gICAgICogYXV0b21hdGljYWxseS4gSXQgd2lsbCByZXR1cm4gdHJ1ZSBieSBkZWZhdWx0LlxuICAgICAqXG4gICAgICogQHJldHVybiB7KnxCb29sZWFufSBUaGUgY3VycmVudCB2YWx1ZSB0byBjaGVjayBmb3Igb3IgdGhlIGRlZmF1bHQsIHRydWUuXG4gICAgICogQGFwaSBwcml2YXRlXG4gICAgICovXG4gICAgcHJvdG8uX2dldE9uY2VSZXR1cm5WYWx1ZSA9IGZ1bmN0aW9uIF9nZXRPbmNlUmV0dXJuVmFsdWUoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KCdfb25jZVJldHVyblZhbHVlJykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vbmNlUmV0dXJuVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaGVzIHRoZSBldmVudHMgb2JqZWN0IGFuZCBjcmVhdGVzIG9uZSBpZiByZXF1aXJlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGV2ZW50cyBzdG9yYWdlIG9iamVjdC5cbiAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgKi9cbiAgICBwcm90by5fZ2V0RXZlbnRzID0gZnVuY3Rpb24gX2dldEV2ZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50cyB8fCAodGhpcy5fZXZlbnRzID0ge30pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXZlcnRzIHRoZSBnbG9iYWwge0BsaW5rIEV2ZW50RW1pdHRlcn0gdG8gaXRzIHByZXZpb3VzIHZhbHVlIGFuZCByZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoaXMgdmVyc2lvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBOb24gY29uZmxpY3RpbmcgRXZlbnRFbWl0dGVyIGNsYXNzLlxuICAgICAqL1xuICAgIEV2ZW50RW1pdHRlci5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gbm9Db25mbGljdCgpIHtcbiAgICAgICAgZXhwb3J0cy5FdmVudEVtaXR0ZXIgPSBvcmlnaW5hbEdsb2JhbFZhbHVlO1xuICAgICAgICByZXR1cm4gRXZlbnRFbWl0dGVyO1xuICAgIH07XG5cbiAgICAvLyBFeHBvc2UgdGhlIGNsYXNzIGVpdGhlciB2aWEgQU1ELCBDb21tb25KUyBvciB0aGUgZ2xvYmFsIG9iamVjdFxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBFdmVudEVtaXR0ZXI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyl7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZXhwb3J0cy5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gICAgfVxufS5jYWxsKHRoaXMpKTtcbiJdfQ==
