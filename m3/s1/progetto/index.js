"use strict";
function showTime() {
    let timeSpan = document.querySelector('.mobile-time');
    if (!timeSpan)
        return;
    let now = new Date;
    let hours = now.getHours();
    let minutes = now.getMinutes();
    timeSpan.innerHTML = `${hours}:${minutes}`;
}
showTime();
setInterval(showTime, 60000);
//# sourceMappingURL=index.js.map