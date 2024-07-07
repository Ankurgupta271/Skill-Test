// Function to display the current time
function displayTime() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;

    // Check if alarm time matches the current time
    alarms.forEach((alarm, index) => {
        if (alarm.time === `${hours}:${minutes}`) {
            playAlarm();
            removeAlarm(index);
        }
    });
}

// Function to play the alarm sound
function playAlarm() {
    const alarmSound = document.getElementById('alarmSound');
    alarmSound.play();
    alert('Alarm ringing!');
}

// Function to set the alarm time
function setAlarm() {
    const alarmInput = document.getElementById('alarmTime');
    const alarmTime = alarmInput.value;
    if (alarmTime) {
        alarms.push({ time: alarmTime });
        displayAlarms();
        alert(`Alarm set for ${alarmTime}`);
    }
}

// Function to display the list of alarms
function displayAlarms() {
    const alarmsList = document.getElementById('alarmsList');
    alarmsList.innerHTML = '';
    alarms.forEach((alarm, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = alarm.time;
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm float-right';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => removeAlarm(index);
        listItem.appendChild(deleteButton);
        alarmsList.appendChild(listItem);
    });
}

// Function to remove an alarm from the list
function removeAlarm(index) {
    alarms.splice(index, 1);
    displayAlarms();
}

// Initialize variables
let alarms = [];

// Add event listeners for buttons
document.getElementById('setAlarm').addEventListener('click', setAlarm);

// Update the clock every second
setInterval(displayTime, 1000);

// Display the initial time
displayTime();
