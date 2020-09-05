import { BehaviorSubject } from "rxjs";

var subject = new BehaviorSubject('First')

subject.subscribe(
    data => addItem("Observer 1: "+data),
    err => addItem(err),
    () => addItem("Observer 1 Completed")
)

subject.next('The first thing has been sent')
subject.next('Observer 2 ....')
var observer2 = subject.subscribe(
    data => addItem('Observer 2: '+data)
)

subject.next('The second thing has veen sent')
subject.next('A third thing has been sent')

observer2.unsubscribe();

subject.next('Final message')

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}