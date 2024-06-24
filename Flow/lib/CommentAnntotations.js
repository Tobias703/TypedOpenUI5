//      
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

const Order10Status              = "open";
const Order20Status              = "in progress";

const wuffi      = {
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