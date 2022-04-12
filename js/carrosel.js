 /*menu carrousel */
 const imgs = document.getElementById("img");
 const img = document.querySelectorAll("#img img");

  let idx = 0;

  function carrousel(){
      idx++;
      if(idx > img.length - 1) {
      idx = 0;
      }

      imgs.style.transform = `translateX(${-idx * 600}px)`;
  }
  setInterval(carrousel, 3000);