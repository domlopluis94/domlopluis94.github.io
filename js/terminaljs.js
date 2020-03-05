$('#terminal').terminal(function(command) {
    if(command =="nombre"){
        this.echo('- Luis Dominguez Lopez ');
    }else if(command =="contacto"){
        this.echo('- domlopluis@gmail.com ');
    }else if(command =="estudios"){
        this.echo('- Grado en Ingenieria Informatica en la UPM ');
        this.echo('- Master en Software y Sistemas en la UPM ');
    }else if(command =="ultimo projecto personal"){
        this.echo('- Finalizada: Trabajo sobre la PML disposnible en kaggle');
        this.echo('- En Proceso: ');
    }else if(command =="trabajo actual"){
        this.echo('- UPM Departamento de IA : Embedded Software Engineer');
    }else if(command =="descargar CV" || command =="CV" || command =="cv"){
        window.location.href = '../archivos/LuisDominguezLopez-CV.pdf';
    }else if(command =="git"){
        this.echo('- Volando a Git');
        var url = "https://github.com/domlopluis94?tab=repositories"
        window.open(url, '_self')
    }else if(command =="linkedin"){
        this.echo('- Volando a linkedin');
        var url = "https://www.linkedin.com/in/luisdominguezlopezinformatico/"
        window.open(url, '_self')
    }else if(command =="instagram"){
        this.echo('- Volando a instagram');
        var url = "https://www.instagram.com/luisdomlop94/"
        window.open(url, '_self')
    }else if(command =="stackoverflow"){
        this.echo('- Volando a stackoverflow');
        var url = "https://es.stackoverflow.com/users/80483/luis-dominguez"
        window.open(url, '_self')
    }else if(command =="kaggle"){
        this.echo('- Volando a kaggle');
        var url = "https://www.kaggle.com/luisilloelpillo/datasets"
        window.open(url, '_self')
    }
}, {
    autocompleteMenu: true,
    completion: ['nombre', 'contacto', 'estudios','ultimo projecto personal','trabajo actual','descargar CV','git','linkedin','instagram','stackoverflow','kaggle','cv','CV'],
});