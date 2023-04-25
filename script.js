const matchDates = [
    new Date('April 29, 2023 04:00:00 EST'),
    new Date('May 6, 2023 05:30:00 EST'),
    new Date('May 7, 2023 04:00:00 EST'),
    new Date('May 12, 2023 04:00:00 EST'),
    new Date('May 13, 2023 04:00:00 EST')
  ];
  
  let currentIndex = 0;
  
  setInterval(function() {
    const now = new Date().getTime();
    let timeRemaining = matchDates[currentIndex] - now;
    
    if (timeRemaining < 0) {
      currentIndex++;
      if (currentIndex >= matchDates.length) {
        document.getElementById('countdown').innerHTML = "unknown";
        return;
      }
      timeRemaining = matchDates[currentIndex] - now;
    }
    
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
  