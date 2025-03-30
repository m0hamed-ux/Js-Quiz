const questionsList = [
    [
        {
            ques: "Qu'est-ce que JavaScript?",
            choises: ["Un langage de programmation", "Un navigateur", "Un système d'exploitation"],
            correctAnswer: "Un langage de programmation"
        },
        {
            ques: "Quel est le créateur de JavaScript?",
            choises: ["Brendan Eich", "Tim Berners-Lee", "Dennis Ritchie"],
            correctAnswer: "Brendan Eich"
        },
        {
            ques: "Quelle méthode est utilisée pour afficher un message dans la console?",
            choises: ["console.log()", "alert()", "document.write()"],
            correctAnswer: "console.log()"
        },
        {
            ques: "Quel framework JavaScript est utilisé pour construire des interfaces utilisateur?",
            choises: ["React", "Laravel", "Django"],
            correctAnswer: "React"
        },
        {
            ques: "Quelle est l'extension de fichier pour les fichiers JavaScript?",
            choises: [".js", ".java", ".jsx"],
            correctAnswer: ".js"
        },
        {
            ques: "Quel symbole est utilisé pour les commentaires en JavaScript?",
            choises: ["//", "/* */", "#"],
            correctAnswer: "//"
        },
        {
            ques: "Quel type de données est utilisé pour représenter des collections de propriétés?",
            choises: ["object", "array", "string"],
            correctAnswer: "object"
        },
        {
            ques: "Quelle méthode est utilisée pour ajouter un élément à la fin d'un tableau?",
            choises: ["push()", "pop()", "shift()"],
            correctAnswer: "push()"
        },
        {
            ques: "Que signifie NaN en JavaScript?",
            choises: ["Not a Number", "Null and None", "Number and Null"],
            correctAnswer: "Not a Number"
        },
        {
            ques: "JavaScript est-il un langage côté client, côté serveur ou les deux?",
            choises: ["Côté client", "Côté serveur", "Les deux"],
            correctAnswer: "Les deux"
        }
    ],
    [
        {
            ques: "Que signifie HTML?",
            choises: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
            correctAnswer: "HyperText Markup Language"
        },
        {
            ques: "Quelle balise est utilisée pour créer une liste non ordonnée?",
            choises: ["<ul>", "<ol>", "<li>"],
            correctAnswer: "<ul>"
        },
        {
            ques: "Quelle balise est utilisée pour insérer une ligne horizontale?",
            choises: ["<hr>", "<br>", "<line>"],
            correctAnswer: "<hr>"
        },
        {
            ques: "Quel attribut est utilisé pour identifier un élément de manière unique?",
            choises: ["id", "class", "name"],
            correctAnswer: "id"
        },
        {
            ques: "Quelle balise est utilisée pour définir le titre d'un document HTML?",
            choises: ["<title>", "<head>", "<header>"],
            correctAnswer: "<title>"
        },
        {
            ques: "Quelle balise est utilisée pour créer un lien hypertexte?",
            choises: ["<a>", "<link>", "<href>"],
            correctAnswer: "<a>"
        },
        {
            ques: "Quelle balise est utilisée pour définir le plus grand titre?",
            choises: ["<h1>", "<h6>", "<header>"],
            correctAnswer: "<h1>"
        },
        {
            ques: "Quel attribut est utilisé pour spécifier l'URL d'une image?",
            choises: ["src", "href", "alt"],
            correctAnswer: "src"
        },
        {
            ques: "Quelle balise est utilisée pour définir une ligne dans un tableau?",
            choises: ["<tr>", "<td>", "<table>"],
            correctAnswer: "<tr>"
        },
        {
            ques: "Quel attribut est utilisé pour appliquer un style CSS en ligne?",
            choises: ["style", "class", "id"],
            correctAnswer: "style"
        }
    ],
    [
        {
            ques: "Que signifie CSS?",
            choises: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets"],
            correctAnswer: "Cascading Style Sheets"
        },
        {
            ques: "Quelle propriété CSS est utilisée pour changer la couleur de fond?",
            choises: ["background-color", "color", "background"],
            correctAnswer: "background-color"
        },
        {
            ques: "Quelle propriété CSS est utilisée pour changer la taille de la police?",
            choises: ["font-size", "text-size", "font-style"],
            correctAnswer: "font-size"
        },
        {
            ques: "Quelle règle CSS est utilisée pour rendre le texte en gras?",
            choises: ["font-weight: bold;", "text-decoration: bold;", "font-style: bold;"],
            correctAnswer: "font-weight: bold;"
        },
        {
            ques: "Quelle propriété CSS est utilisée pour changer la police d'un texte?",
            choises: ["font-family", "font-style", "font-weight"],
            correctAnswer: "font-family"
        },
        {
            ques: "Quelle propriété CSS est utilisée pour ajouter une bordure?",
            choises: ["border", "outline", "box-shadow"],
            correctAnswer: "border"
        },
        {
            ques: "Quelle propriété CSS est utilisée pour centrer le texte?",
            choises: ["text-align", "vertical-align", "align"],
            correctAnswer: "text-align"
        },
        {
            ques: "Quelle valeur de position CSS est utilisée pour un positionnement statique?",
            choises: ["static", "relative", "absolute"],
            correctAnswer: "static"
        },
        {
            ques: "Quelle propriété CSS est utilisée pour ajouter un espace intérieur autour du contenu d'un élément?",
            choises: ["padding", "margin", "border"],
            correctAnswer: "padding"
        },
        {
            ques: "Quelle propriété CSS est utilisée pour cacher un élément?",
            choises: ["visibility", "display", "opacity"],
            correctAnswer: "visibility"
        }
    ]
]



let section = new URLSearchParams(window.location.search).get('section')
let userAnswers = (localStorage.getItem('userAnswers'))?JSON.parse(localStorage.getItem('userAnswers')):[[], [], []]
function loadData(){
    jsProgress = (localStorage.getItem('jsProgress')) ? parseInt(localStorage.getItem('jsProgress')) : 1;
    htmlProgress = (localStorage.getItem('htmlProgress')) ? parseInt(localStorage.getItem('htmlProgress')) : 1;
    cssProgress = (localStorage.getItem('cssProgress')) ? parseInt(localStorage.getItem('cssProgress')) : 1;
    document.getElementById('title').innerText = section
    if (section.toLocaleLowerCase() == "javascript"){
        questions = questionsList[0]
        Qnum = jsProgress
        sectionData = 'jsProgress'
        sectionIndex = 0
    } else if (section.toLocaleLowerCase() == "html") {
        questions = questionsList[1]
        Qnum = htmlProgress
        sectionData = 'htmlProgress'
        sectionIndex = 1
    } else if (section.toLocaleLowerCase() == "css") {
        questions = questionsList[2]
        Qnum = cssProgress
        sectionData = 'cssProgress'
        sectionIndex = 2
    } else {
        
    }
    refresh()
}
function refresh(){
    document.getElementById('Question').style.borderColor = 'rgb(226 232 240 / var(--tw-border-opacity, 1)'
    let num = document.getElementById('Qnumber')
    let pLine = document.getElementById('progressLine')
    let questionText = document.getElementById('questionText')

    let q1 = document.getElementById('choice1')
    let q2 = document.getElementById('choice2')
    let q3 = document.getElementById('choice3')

    let q1Label = document.getElementById('choice1Label')
    let q2Label = document.getElementById('choice2Label')
    let q3Label = document.getElementById('choice3Label')
    if (Qnum <= 10){
        num.innerText = `${Qnum}/10`
        pLine.style.width = `${Qnum * 100 / 10}%`
        questionText.innerText = questions[Qnum - 1].ques
        q1.value = questions[Qnum - 1].choises[0]
        q2.value = questions[Qnum - 1].choises[1]
        q3.value = questions[Qnum - 1].choises[2]

        q1Label.innerText = questions[Qnum - 1].choises[0]
        q2Label.innerText = questions[Qnum - 1].choises[1]
        q3Label.innerText = questions[Qnum - 1].choises[2]
        for (elt of [q1, q2, q3]){
            elt.checked = false
        }
    }
}
function nextQuestion(){
    let chk = null
    for(elt of document.getElementsByName('answer')){
        if (elt.checked){
            chk = elt
            break
        }
    }
    if (chk){
        if (Qnum < 10){
            Qnum++
            localStorage.setItem(sectionData, Qnum)
            userAnswers[sectionIndex].push(chk.value)
            localStorage.setItem('userAnswers', JSON.stringify(userAnswers))
            refresh()
        } else if (Qnum = 10){
            localStorage.setItem(sectionData, Qnum)
            userAnswers[sectionIndex].push(chk.value)
            localStorage.setItem('userAnswers', JSON.stringify(userAnswers))
            refresh()
            result()
        }
    } else {
        document.getElementById('Question').style.borderColor = 'red'
    }
}
function skip(){
    if (Qnum < 10){
        Qnum++
        localStorage.setItem(sectionData, Qnum)
        userAnswers[sectionIndex].push("")
        localStorage.setItem('userAnswers', JSON.stringify(userAnswers))
        refresh()
    } else if (Qnum = 10){
        localStorage.setItem(sectionData, Qnum)
        userAnswers[sectionIndex].push("")
        localStorage.setItem('userAnswers', JSON.stringify(userAnswers))
        refresh()
        result()
    }
}
function result(){
    let totals = [0, 0, 0]
    let total = totals[sectionIndex]
    for (i=0; i<10; i++){
        if (userAnswers[sectionIndex][i] == questionsList[sectionIndex][i].correctAnswer){
            total += 1
        }
    }
    totals[sectionIndex] = total
    alert(`total ${total}/10`)
    window.location.href = "../index.html"
}