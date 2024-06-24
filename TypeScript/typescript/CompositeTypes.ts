type OrderStatus = "open" | "closed" | "pending";
type StringArray = Array<string>;
type OrderStatusArray = Array<OrderStatus>;

const Order10Status: OrderStatus = "open";
const Order20Status: OrderStatus = "in progress";





const myStringArray: StringArray = [];
myStringArray.push("Element 1");
myStringArray.push(2);



const myOrderStatusArray: OrderStatusArray = [];
myOrderStatusArray.push("open");
myOrderStatusArray.push("closed");
myOrderStatusArray.push("pending");
myOrderStatusArray.push("in progress");



console.log(Order10Status);
console.log(Order20Status);

export{}; // Datei wird als Modul behandelt, um globalen Scope zu verhindern