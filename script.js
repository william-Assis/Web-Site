/*document.querySelector('.hamburgue'); === busca no documento css o primeiro elemento com o nome '.hamburgue' */
let hamburgue = document.querySelector('.hamburgue'); //=== var hamburgue = .hamburgue

/*addEventListener = Adicione um lista de evento que dispara quando um usuário clica em um botão*/
hamburgue.addEventListener('click', function(){
    document.querySelector('.container').classList.toggle('show-menu');
});

