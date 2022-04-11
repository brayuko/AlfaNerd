/*menu hamburguin*/
var el = document.querySelector('.menu-mobile-icon');
        el.addEventListener('click', ()=>{/*menu hamburguin */
             /* alert('clicado'); comando abaixo serve para mostrar o menu*/
             var menuitens = document.querySelector('.menu-itens');
             if(menuitens.classList.contains('show')){
             menuitens.classList.add('hide');
             menuitens.classList.remove('show');
             }else{
                menuitens.classList.add('show');
                menuitens.classList.remove('hide');
             }
        });

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