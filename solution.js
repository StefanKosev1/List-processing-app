let list = [];

document.getElementById("submitButton").addEventListener("click", processInput);
document
  .getElementById("inputBox")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") processInput();
  });
document.getElementById("inputBox").focus();

function processInput() {
  console.log("added event listener");
  let cmd = document.getElementById("inputBox").value;
  let result = processCommand(cmd);
  if (result) printToTerminal(result);
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
    case "reverse":
      return reverse(cmdArgs);
      break;
    case "sort":
      return sort(cmdArgs);
      break;

    case "roll":
      if (cmdArgs[0] == "left") {
        rollLeft();
      } else if (cmdArgs[0] == "right") {
        rollRight();
      } else {
        return "Error: invalid command";
      }
      break;

    case "delete":
      return deleteFromList(cmdArgs[0]);
      break;

    case "end":
      const inputBox = document.getElementById("inputBox");
      document
        .getElementById("submitButton")
        .removeEventListener("click", processInput);
      inputBox.replaceWith(inputBox.cloneNode(true));
      return "Finished";

    case "prepend":
      return prepend(cmdArgs);
      break;

    case "insert":
      return insert(cmdArgs);
      break;

    case "count":
      return count(cmdArgs);
      break;

    default:
      return "Error: invalid command";
      break;
  }
}


// TODO: implement more commands here ...

