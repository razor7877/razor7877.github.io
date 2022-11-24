$(document).ready(() => {
    render_projects('all');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
		{
            image: 'assets/images/3dengine.png',
            link: 'https://github.com/razor7877/3D-OpenGL-Engine',
            title: 'Moteur de rendu 3D',
            demo: false,
            technologies: ['C++', 'OpenGL'],
            description: "Un moteur de rendu 3D basique que je développe actuellement en C++/OpenGL. Shaders en GLSL.",
            categories: ['cpp', 'personal']
        },
        {
            image: 'assets/images/webcrawler.png',
            link: 'https://github.com/razor7877/PythonWebCrawler',
            title: 'Web Crawler',
            demo: false,
            technologies: ['Python'],
            description: "Un web crawler qui permet entre autre d'explorer des pages web de façon récursive et de stocker et réutiliser ces données.",
            categories: ['python', 'personal']
        },
		{
            image: 'assets/images/theforest.png',
            link: 'https://github.com/razor7877/ImprovedDebugConsole',
            title: 'Mod theForest',
            demo: false,
            technologies: ['C#', 'Unity'],
            description: "Modifications du code du jeu de survie theForest qui permet d'étendre les capacités de la console de debug pour faciliter le développement. Fonctionne sous Unity.",
            categories: ['csharp', 'personal']
        },
		{
            image: 'assets/images/photoedit.jpg',
            link: 'https://drive.google.com/file/d/1-_hfWwSCamc9wDXe88_xtfdxJbCOLl3s/view?usp=sharing',
            title: 'Photo Edit',
            demo: false,
            technologies: ['Java', 'Android Studio'],
            description: "Une application Android développée pendant le stage de 1ère année, qui permet de prendre des photos, les modifier, écrire, et dessiner dessus, puis de les enregistrer",
            categories: ['java', 'bts']
        },
		{
            image: 'assets/images/phpsymfony.png',
            link: '',
            title: 'Développement sur une interface web',
            demo: false,
            technologies: ['PHP', 'Symfony'],
            description: "Extension de l'interface web d'une entreprise de maintenance des réseaux électriques: gestion utilisateur et matériel. Développé dans le cadre du stage de 1ère année",
            categories: ['php', 'bts']
        },
        {
            image: 'assets/images/bitmaplibrary.png',
            link: 'https://github.com/razor7877/BitmapLibrary',
            title: 'Bitmap reader-writer',
            demo: false,
            technologies: ['C++', '.bmp'],
            description: "Une librairie basique qui permet de lire le contenu de fichiers images bitmap pour le manipuler ainsi que de créer ses propres fichiers",
            categories: ['cpp', 'personal']
        },
		{
            image: 'assets/images/pythongame.png',
            link: '',
            title: 'Prototype Panda3D',
            demo: false,
            technologies: ['Python', 'Panda3D'],
            description: "Un prototype de jeu fait avec le moteur Panda3D il y a longtemps. Menus, paramètres, gestion des mouvements et collisions en 3D ...",
            categories: ['python', 'personal']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a onclick="showDialog('${project.title}')">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2 onclick="showDialog('${project.title}')"><a href="javascript:void(0);">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>
                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
                
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}


function showDialog(projectName)
{
    selector = "#" + projectName.split(' ').join('_');
    $( selector ).dialog({
        title: projectName,
        width: 900,
        height: 900
    });
}