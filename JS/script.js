function updateClock() {
    const now = new Date();

    const time = document.getElementById('time');
    time.textContent = now.toLocaleTimeString();
}


    setInterval(updateClock,1000);
    updateClock();












    
