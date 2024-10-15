// script.js

document.addEventListener('DOMContentLoaded', function() {
    function updateAge() {
      const birthday = new Date('2024-07-01T00:00:00Z'); // Your birthday in ISO format
      const now = new Date();
      const ageInMilliseconds = now - birthday;
      const ageInSeconds = ageInMilliseconds / 1000;
      const ageInMinutes = ageInSeconds / (60)
      const ageInHours = ageInSeconds / (60*60)
      const ageInDays = ageInSeconds / (60*60*24)
      const ageInYears = ageInSeconds / (60*60*24*365.25)

      const ageInHour = (ageInSeconds / (60*60)) - (Math.floor(ageInDays) * 24)
      const ageInMin = (ageInSeconds / (60)) - (Math.floor(ageInHours) * 60)
      const ageInSec = (ageInSeconds) - (Math.floor(ageInMinutes) * 60)
  
      document.getElementById('Days').innerText = ageInDays.toFixed(0);
      document.getElementById('Hours').innerText = ageInHour.toFixed(0);
      document.getElementById('Minutes').innerText = ageInMin.toFixed(0);
      document.getElementById('Seconds').innerText = ageInSec.toFixed(0);
    
      // Display age in Years
      // document.getElementById('Seconds').innerText = ageInSeconds.toFixed(2); // Display age in seconds with three decimals for milliseconds
      
    }
  
    setInterval(updateAge, 1); // Update the age every millisecond
    updateAge(); // Run function immediately to avoid delay
  });