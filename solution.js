let list = [];

document.getElementById("submitButton").addEventListener("click", processInput);
document.getElementById("inputBox").addEventListener("keypress", function(event){
  if (event.key === "Enter")
    processInput();
});
document.getElementById("inputBox").focus();

function processInput() {
  console.log('added event listener');
  let cmd = document.getElementById("inputBox").value;
  let result = processCommand(cmd);
  if (result)
    printToTerminal(result);
  printToTerminal("List: " + list.join(" "));
  document.getElementById("inputBox").value = "";
}

function printToTerminal(text) {
  document.getElementById("terminal").value += text + "\n";
}

function processCommand(cmd) {
  let cmdArgs = cmd.split(" ");
  cmd = cmdArgs.shift();
  switch (cmd) {
    case "append":
      return append(cmdArgs);
      break;
  }
}

function append(args) {
  list = list.concat(args);
}


function rollLeft(){
  list.push(list.shift());
}

function rollRight(){
  list.unshift(list.pop());
}

function deleteFromList(index) {
  if(list[index]) {
    list.splice(list.indexOf(index), 1);
  }
  return `Error: invalid index ${index}`;
}



// TODO: implement more commands here ...
function reverse(args){
  list = list.reverse();
}

function sort(args){
  list = list.sort();
}

function prepend(args) {
  list = args.concat(list);
}

function insert(args) {
  let index = args.shift();
  list = list.slice(0, index).concat(args).concat(list.slice(index));
}

function count(args) {
    return list.filter((x) => x === args[0]).length;
}