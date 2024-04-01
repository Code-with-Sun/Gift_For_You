function startSystemUpdate() {
    const systemUpdateScreen = document.getElementById('systemUpdateScreen');
    const countdown = document.getElementById('countdown');
    const updateMessage = document.createElement('p');
    updateMessage.textContent = "April Fool !!! 😉😉😉 Ullu banaya bada maja aaya 😂😂😂";
    
    
    systemUpdateScreen.classList.remove('hidden');
    
    let timeLeft = 10;
    const countdownInterval = setInterval(() => {
        timeLeft--;
        countdown.textContent = `Time remaining: ${timeLeft} seconds`;

        if (timeLeft === 0) {
            clearInterval(countdownInterval);
            countdown.textContent = '';
            systemUpdateScreen.appendChild(updateMessage);
        }
    }, 1000);
}
