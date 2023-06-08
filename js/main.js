$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    }) 
    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    }) 
    $('#cep').mask('00000-000', {
        placeholder: '_____-___'
    }) 
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true, 
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true,
            },
            endereco: {
                required: true,
            },
            cep: {
                required: true,
            }
        }, 
        messages: {
            nome: '*Insira o seu nome',
            email: '*Insira o seu e-mail',
            telefone: '*Insira o seu telefone',
            cpf: '*Insira o seu cpf',
            endereco: '*Insira o seu endereço',
            cep: '*Insira o seu cep'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })  
})