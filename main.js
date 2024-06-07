import LinkedList from "./list.js";

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.pop()
linkedList.append(5);
linkedList.prepend(12)

console.log(linkedList.contains(4));
console.log(linkedList.contains(5));
console.log(linkedList.tail());
console.log(linkedList.toString()); 
console.log(linkedList.size());
console.log(linkedList.find(5));
console.log(linkedList.find(4));
console.log(linkedList.find(3));
console.log(linkedList.find(2));
