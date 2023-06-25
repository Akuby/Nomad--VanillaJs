const clock = document.getElementById('clock');
clockWork();
setInterval(clockWork, 1000);
function clockWork() {
    const time = new Date();

    const hour = time.getHours().toString().padStart(2, "0");
    const minute = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");

    const formattedTime = `${hour} : ${minute} : ${seconds}`

    clock.innerText = formattedTime;
}