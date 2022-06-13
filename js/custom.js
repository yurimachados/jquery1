// instancia jquery e evita conflitos
// jQuery(function($) {

$(document).ready(function(){

    $("owl-carrousel").owlCarrousel();

    let titulos = $('h4') // tag

    let itens = $('.featured-item') // class

    let destaques = $('#featured') // id

    console.log(titulos.first());

})