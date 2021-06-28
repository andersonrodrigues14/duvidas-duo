var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200){
        const duvidas = JSON.parse(this.responseText)
        console.log(duvidas);

        duvidas.forEach(function (catalogoDuvidas){
            document.querySelector('.accordion').innerHTML +=  
            `<div class="accordion-item">
            <div class="label">${catalogoDuvidas.titulo}</div>
            <div class="content"><p>${catalogoDuvidas.descricao}</p></div>
            </div>`
          
        });

        const accordion = document.getElementsByClassName('accordion-item');
        for (i = 0; i,accordion.length; i++) {
            accordion[i].addEventListener('click', function(){
                this.classList.toggle('active')
            })
        }

    }
}

xmlhttp.open("GET", "duvidas.json",true);
xmlhttp.send();
