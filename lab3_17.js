class Clock {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    

    displayTime() {
        const formattedHours = String(this.hours).padStart(2, '0');
        const formattedMinutes = String(this.minutes).padStart(2, '0');
        const formattedSeconds = String(this.seconds).padStart(2, '0');
        console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
    }
}

const clock1 = new Clock(14, 5, 30); 
clock1.displayTime();

const clock2 = new Clock(9, 15, 7); 
clock2.displayTime();