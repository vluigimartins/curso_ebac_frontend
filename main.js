$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#tarefa').val();
        const novoItem = $('<li></li>');
        
        $(`<h2>${novaTarefa}</h2>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
    });

    $('ul').on('click', 'li', function() {
        $(this).css('text-decoration', 'line-through');
    });
});