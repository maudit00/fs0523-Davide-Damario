function showTime (): void {
    let timeSpan = document.querySelector<HTMLElement>('.mobile-time');
    if (!timeSpan) return
    let now:Date = new Date
    let hours:number = now.getHours()
    let minutes:number = now.getMinutes()
    timeSpan.innerHTML = `${hours}:${minutes}`
}

showTime()
setInterval(showTime, 60000)