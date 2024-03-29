
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}

// when your write help in terminal you get the instructions

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */

function onDataReceived(text) {
  text = text.trim();

  if (text === 'quit' || text === 'exit') {
    quit();
  }
  else if (text === 'help') {
    help();
  }
  else if (text.startsWith('hello')) {
    hello(text);
  }
  else if (text === 'list') {
    list();
  }
  else if (text.startsWith('add')) {
    add(text);
  }
  else if (text.startsWith('remove')) {
    remove(text);
  }
  else if (text === 'edit'){
    edit(text);
  }
  else {
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"')
}
/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text) {
  console.log(`hello ${text.substring(6)}!`)
}

function help() {
  console.log("help:it will give you instructions\n" + "hello:hello!" + "quit or exit:quit the qpplication");
}

var tasks = [];
function list() {
  console.log("tasks is :");
  tasks.forEach(function (tasks, index) {
    console.log(`${index + 1}:${tasks}`);

  });

}
function add(text) {

  console.log(`adding ${tasks.push(text.substring(4))}`);
}


function remove(text) {
  const index = parseInt(text.substring(7)) - 1;
  console.log(`removing ${tasks.splice(index, 1)}`);
  if (!index) {
    console.log('The index exists in the array');
  } else {
    console.log('The index does not exist in the array');
  }
  // if (index = undefined){
  //   console.log("you enter a number that does not exist");
  // }
}
function edit(text) {
  const parts = text.split(" ");
  if (parts.length < 3) {
    console.log("Please enter a task number and a new task description.");
  } else {
    const index = parseInt(parts[1]) - 1;
    if (isNaN(index) || index < 0 || index >= tasks.length) {
      console.log("Please enter a valid task number.");
    } else {
      tasks[index] = parts.slice(2).join(" ");
      console.log(`Task ${index + 1} edited!`);
    }
  }
  console.log('----------------------------');
}
// function editByIndex(text)
// {

//   return index;
// }

// function edit(text){
//   const index = parseInt(text.substring(5,6));
//   console.log(index);
//   // if (!text){
    
//   // }
//   // else {
//   //   console.log('you dont enter anything "ERROR"');
//   // }

// }

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Hasan El-Mestrah")


