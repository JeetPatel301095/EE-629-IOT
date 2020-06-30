Project Folder for Course of EE-629-IOT

Project Name - Remote Access of Devices Connected to Raspberry Pi

This Project allows the user to access a LED connected to pi through a website and store the amount of time it is kept on into Google Sheets

The Project Uses Node.js to host the server on PI and calls on Python scripts through PythonShell package.

Basic Requirements to run the Project:
1) LED connected to PI through pin 18
2) PI and other computer connected on the same network.
3) IP address of PI is to be known to access the website.
4) Need Node.js, npm packages and Python Interpreter installed.

Before Starting the server:
1) Go to the Routes folder, change addresses of the Python Scripts to their addresses on your device.
2) In the Routes folder, Open Rpi-spreadsheet.py and change the "Auth-key.json" value and "SpreadSheet" name to your Credentials and the name of your spreadsheet respectively.
3) Go to the project folder and run the following command: "npm install"   - this command will install all the packages of npm required to run the server.

To Start The Server follow the following steps:
1) Enter the Project Folder through the Terminal
2) Run Command "npm start"
3) This will start the Server on your PI.

To run this from another computer, the pi and the computer must be connected to the same network, and you need the ip of pi in order to access the server.

Once they are on the same server, go to your browser, and in the URL type: "192.168.x.x:3000". "192.168.x.x" is ip of PI in the network.
