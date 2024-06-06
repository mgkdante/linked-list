import LinkedList from "./list.js";

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.prepend(30);
linkedList.append(4);
linkedList.prepend(12);
linkedList.append(5);
linkedList.pop();

console.log(linkedList.at(20)); // Should print null
console.log(linkedList.toString()); // Should print the list representation
console.log(linkedList.size()); // Should print the size of the list