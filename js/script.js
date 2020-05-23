// Aplicando mascara à um campo 
$("#telefone").mask("(00) 00000-0000")

$("#cpf").mask("000.000.000-00")

$("#nasc").mask("00/00/0000")

$("#cep").mask("00000-000")

// Aplicando validação de campo
$("#formulario").validate({
    rules: {
        nome: {
            required: true,
            minlength: 3
        },
        email: {
            required: true,
        },
        telefone:   {
            required: true,
        },
        cpf:    {
            required: true,
        },
        nasc:   {
            required: true,
        },
        endereco:   {
            required: true,
        },
        cep:    {
            required: true,
        },
        cidade: {
            required: true,
        },
        estado: {
            required: true,
        },
        check:  {
            required: true
        }
    },
    messages: {
        nome:   {
            required: "Campo obrigatório.",
            minlength: "Mínimo de 3 caracteres."
        },
        email:  {
            required: "Campo obrigatório.",
            email: "Por favor, informe e-mail válido."
        },
        telefone:   {
            required: "Campo obrigatório.",
        },
        cpf:    {
            required: "Campo obrigatório.",
        },
        nasc:   {
            required: "Campo obrigatório.",
        },
        endereco:   {
            required: "Campo obrigatório.",
        },
        cep:    {
            required: "Campo obrigatório.",
        },
        cidade: {
            required: "Campo obrigatório.",
        },
        estado: {
            required: "Campo obrigatório.",
        },
        check:  {
            required: "Campo obrigatório."
        }
    }
});

