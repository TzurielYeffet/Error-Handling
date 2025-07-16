const {handleCommand} = require("./commands/commandHandler");

const args = process.argv.slice(2);  
const command = args[0]
const [ ,name,email,phone] = args
const contact ={name,email,phone}
const data ={command,contact}
handleCommand(data);
