// @flow
/*:: type OrderStatus = "open" | "closed" | "pending";*/
/*::
interface Dog {
    name: string;
    size: number;
    age?: number;
}*/
function foobar(foo /*: string*/, bar /*: string*/)/*: string*/ {
    return foo + bar;
}

const Order10Status: OrderStatus = "open";
const Order20Status: OrderStatus = "in progress";

const wuffi: Dog = {
    name: "Wuffi",
    size: "2"
};

foobar("foo", 5);
foobar("foo", (5).toString());

var foo/*: number*/ = 42;
var foo = "bar";

var bar /*: string*/ = "foo";
var bar /*: string*/= "bar";
var bar /*: string*/= 42;