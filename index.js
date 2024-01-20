const { exec } = require('child_process');

// Function to execute shell commands
const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  });
};

// Install Mozilla Firefox
const installFirefox = async () => {
  try {
    console.log('Installing Mozilla Firefox...');
    await runCommand('sudo apt-get update');
    await runCommand('sudo apt-get install firefox -y');
    console.log('Mozilla Firefox installed successfully.');
  } catch (error) {
    console.error('Error installing Mozilla Firefox:', error);
    process.exit(1);
  }
};

// Run Mozilla Firefox
const runFirefox = async () => {
  try {
    console.log('Running Mozilla Firefox...');
    await runCommand('firefox');
  } catch (error) {
    console.error('Error running Mozilla Firefox:', error);
    process.exit(1);
  }
};

// Main function
const main = async () => {
  await installFirefox();
  await runFirefox();
};

// Execute the main function
main();
