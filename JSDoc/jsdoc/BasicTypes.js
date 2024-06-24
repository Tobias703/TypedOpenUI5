// @ts-check
/**
 * Konkateniert zwei Strings
 * @param {string} foo 
 * @param {string} bar 
 * @returns {string}
 */
function foobar(foo, bar) {
    return foo + bar;
}

/**
 * Addiert zwei Zahlen
 * @param {number} foo
 * @param {number} bar
 * @returns {number}
 */
function barfoo(foo, bar) {
    return foo + bar;
}

foobar("foo", 5);
foobar("foo", (5).toString());

/** @type {string} foo */
var foo = 42;
var foo = "bar";

/** @type {string} bar */
var bar = "foo";
/** @type {string} bar */
var bar = "bar";
/** @type {number} bar */
var bar = 42;

/** 
 * @type {string} foo 
 */
var foo = "foo";

/** @type {string} foo */
var foo = "foo";

/** @type {string} foo */ var foo = "foo";