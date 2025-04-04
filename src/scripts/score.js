function calcScore(){
    let score = new URLSearchParams(window.location.search).get('score')
    score = (!score)?0:score;
    score = (0 > score || score >10)?0:score
    document.getElementById('score').innerText = `${score}/10`
    let prg = document.getElementById('prg');
    let progress = 0
    let target = (score > 0)?(score * 100 / 10):1
    let animation = setInterval(() => {
        if (progress >= target) {
            clearInterval(animation)
        } else {
            progress += 1
            prg.setAttribute('stroke-dasharray', `${progress}, 100`)
        }
    }, 10);
    let comment = document.getElementById('comment')
    let commentDesc = document.getElementById('commentDesc')
    if (score <= 2) {
        comment.innerText = 'Pas de chance cette fois !'
        commentDesc.innerText = 'Continue à t\'entraîner et tu t\'amélioreras.'
    } else if (score <= 5) {
        comment.innerText = 'Pas mal !'
        commentDesc.innerText = 'Tu progresses, continue comme ça !'
    } else if (score <= 8) {
        comment.innerText = 'Super boulot !'
        commentDesc.innerText = 'Tu es vraiment bon, presque parfait !'
    } else {
        comment.innerText = 'Partie parfaite !'
        commentDesc.innerText = 'Félicitations ! Tu as tout déchiré, serais-tu une IA ?'
    }
}