console.log("JS loaded");

let loaded = false;

document.getElementById("susvidbtn").onclick = function () {
    if (loaded) return;

    document.getElementById("videoContainer").innerHTML = `
    <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
      frameborder="0" 
      allow="autoplay"
      allowfullscreen>
    </iframe>
  `;

    loaded = true;
};