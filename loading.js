let bar = document.getElementById('bar');
let percent = document.getElementById('percent');
let status = document.getElementById('status');
let progress = 0;


let interval = setInterval(() => {
   progress++;
    bar.style.width = progress + '%';
    percent.textContent = progress + '%';

    if (progress === 100) {
        clearInterval(interval);
        status.textContent = " Success!";
        status.style.color = "#22c55e";
        percent.style.color = "#22c55e";
        bar.style.background = "linear-gradient(90deg, #16a34a, #22c55e)";
    }

}, 50); 
