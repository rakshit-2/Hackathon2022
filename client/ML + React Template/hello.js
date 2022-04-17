const { spawn } = require('child_process');

// Calling childprocess without arguments :
// const childPython = spawn('python', ['main.py']);

// Calling childprocess with arguments : 
// Way 1: Use To directly use ${data} variable to print
const childPython = spawn('python', ['main.py', 'Fatigue,Weight Gain,Cold Hands And Feets,Lethargy,Dizziness,Puffy Face And Eyes,Enlarged Thyroid,Depression,Irritability,Abnormal Menstruation']);

// Way 2: To use external output.txt file 
// const childPython = spawn('python', ['main_with_output_file.py', 'Distention Of Abdomen,History Of Alcohol Consumption,Fluid Overload']);

childPython.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

childPython.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

// Uncomment this : to check : if python file is not working fine....
// childPython.on('close', (code) => {
//     console.log(`child process excited with code ${code}`);
// });