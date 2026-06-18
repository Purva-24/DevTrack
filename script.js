let streak = localStorage.getItem("streak")
?
parseInt (localStorage.getItem("streak")) :0;

const streakNumber = document.getElementById("streaknumber");
const button = document.getElementById("completeBtn");

streakNumber.innerText = "🔥" + streak ;

button.addEventListener ("click" , () => {streak++;
    localStorage.setItem("streak" , streak);
    streakNumber.innerText = "🔥" + streak ;
});