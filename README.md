# ESP-COMMS-Master-Server
NodeJS based Master server that issues commands to ESP32 devices running ESP-COMMS.

## Current functionality
### Turning on-board LED On/Off through Web server
  To turn the LED on head to the link `http://localhost:3000?Command=SET_HIGH&Value=2`
  
  **Command** is the command that will be issued to the ESP-32, in this case "SET_HIGH".
  
  **Value** is the PIN number that will be set to high, which in this case is pin 2 (The onboard LED).
  
  To turn the LED OFF it is essentially the same, but instead of "SET_HIGH" use the "SET_LOW" command like so.
  
  `http://localhost:3000?Command=SET_LOW&Value=2`

  
