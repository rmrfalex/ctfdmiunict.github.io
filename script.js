function displayText(str) {
    n = n + 1;
    p.innerHTML = "> " + str.slice(0, n);
    if (n === str.length) {
      clearInterval(typeTimer);
      //const node = document.createElement("div");
      p.innerHTML = "> " + str;
      n = 0;
      setInterval(function() {
  
        if (n === 0) {
          p.innerHTML = "> " + str + "▮"
          //mainHead.appendChild(node);
          //cursor.classList.add("hidden")
          n = 1;
        } else {
          p.innerHTML = "> " + str
          //mainHead.removeChild(node);
          //cursor.classList.remove("hidden")
          n = 0;
        };
      }, 500);
    };
  }

let p = document.getElementById('typeText');
p.innerHTML = '';
let n = 0;
let str = 'One team is red, the other is blue. To capture the flag, we need you!';

let typeTimer = setInterval(function(){displayText(str);}, 60);