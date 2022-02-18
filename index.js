var MamkaArray = ["- Твоя мамка на столько жирная, что если у нее на спине нарисовать букву H то можно посадить вертолет","- Я слышал твоя мама села на айфон и он стал айпадом","- Твоя мамаша настолько жирная, что ест курицу гриль как наггетсы!","- Твоя мама такая жирная что её чуть было не перепутали в эльдорадо с холодильником и не купили","- Я не открываю гифы про твою мамашу, потому что они слишком много весят!!"];

let ul = document.createElement('ul');
ul.setAttribute("id", "MamkaList");
document.body.append(ul);
var i = 1;
MamkaArray.forEach(function(item, i, arr) {
    let li = document.createElement('li');
    let textNode = document.createTextNode((i+1).toString()+") "+item);
    document.getElementById("MamkaList").append(li);
    li.append(textNode);
    i++;
});



function multi(){
    let inp1 = document.getElementById('inp_1').value,
    inp2 = document.getElementById('inp_2').value,
    inp3 = document.getElementById('inp_3');
    console.log(inp1*inp2);
    inp3.value = inp1*inp2;
}