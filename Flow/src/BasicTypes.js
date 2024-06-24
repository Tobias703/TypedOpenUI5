// @flow
function foobar(foo: string, bar: string): string {
    return foo + bar;
}


foobar("foo", 5);
foobar("foo", (5).toString());

var foo: number = 42;
var foo = "bar";

var bar: string = "foo";
var bar: string = "bar";
var bar: number = 42;