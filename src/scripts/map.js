let question = new URLSearchParams(window.location.search).get('question')
let section = new URLSearchParams(window.location.search).get('section')
question = (!question)?1:question
section = (!section)?'html':section
let sections = ['html', 'css', 'js']
function createMap(){
    for (let i = 1; i <= 10; i++) {
        let div = document.createElement('div')
        var mainColor = (section == 'html')?'blue':(section == 'js')?'yellow':'orange'
        var color = (i <= question)?`bg-${mainColor}-400`:'bg-slate-300'
        let status = (i == question)?'current':(i < question)?'done':'disabled'
        let trs = [0, 40, 55, 40, 0, -40, -55, -40, 0, 40]
        let translate = trs[i - 1]
        let classes = `z-${(i <= question)?1:0} w-14 h-14 ${color} translate-x-[${translate}px] rounded-full my-3 flex justify-center items-center cursor-pointer ${status}`.split(' ')
        for (let cls of classes) {
            div.classList.add(cls)
            if (i != question){
                div.innerHTML = '<i class="fa-solid fa-star text-white"></i>'
            } else {
                div.innerHTML = '<i class="fa-solid fa-star text-white"></i><div class="w-max p-1 text-sm text-green-500 absolute bg-white top-[-20px] border-[1.4px] border-slate-300 rounded bouncing">Start<div class="w-2 h-2 bg-white absolute bottom-[-5px] left-[50%] transform -translate-x-1/2 rotate-45 border-b-[1.4px] border-r-[1.4px] border-slate-300 rounded-br-sm"></div></div>'
            }
        }
        
        document.getElementById('qts').append(div)
    }
    $('.done, .current').css({
        'box-shadow':`0 0.3em 0 ${(section == 'html')?'#1d74ff':(section == 'js')?'#eab308':'#f97316'}`
    })
    let next = `<div class="w-14 h-14 translate-x-[60px] rounded-full my-3 flex justify-center items-center cursor-pointer ${(question > 10)?`bg-${mainColor}-400`:'bg-slate-300'} shadow-[0_0.3em_0] ${(question > 10)?`shadow-[${(section == 'html')?'#1d74ff':(section == 'js')?'#eab308':'#f97316'}] next`:'shadow-[#94a3b8]'}" id="next"><i class="fa-solid ${(section == 'js')?'fa-award':'fa-forward'} text-white text-xl"></i></div>`
    $('.next').css({
        'box-shadow':`0 0.3em 0 ${(section == 'html')?'#1d74ff':(section == 'js')?'#eab308':'#f97316'}`
    })
    $('.none, .disabled').css({
        'box-shadow':`0 0.3em 0 #94a3b8`
    })
    $('#qts').append(next)
    document.getElementById('title-box').classList.add(`shadow-${mainColor}-700`, `bg-${mainColor}-500`)
    document.getElementById('icon-box').classList.add(`border-${mainColor}-700`)
    document.getElementById('f-icon').classList.add(`fa-${icons}`)
    $('#s-title').text('Section '+(sections.indexOf(section) + 1))
    $('#s-text').text(`Testez vos connaissances en ${section.toUpperCase()}`)
    var icons = (section == 'html')?'html5':(section == 'js')?'square-js':'css3-alt'
    document.getElementById('f-icon').classList.add(`fa-${icons}`)
}
$(document).ready(function() {
    $('.current, .done').on('click', function(){
        $(this).css({
            'box-shadow':'none',
            'transform':'translateY(5px)'
        });
        setTimeout(function(){
            $('.current, .done').css({
                'box-shadow':`0 0.3em 0 ${(section == 'html')?'#1d74ff':(section == 'js')?'#eab308':'#f97316'}`,
                'transform':'translateY(0px)'
            })
        }, 200)
    });
    $('.current').on('click', function(){
        let div = `<div class="w-max z-10 p-2 text-sm bg-green-500 text-white absolute bottom-[-100px] rounded-lg popup shadow-lg">
                    <h1 class="font-bold">Testez vos connaissances en ${section.toUpperCase()}</h1>
                    <p class="text-xs mt-1">Question ${$(this).index() + 1}/10</p>
                    <input type="button" value="commencer" class="w-full bg-white text-green-500 rounded p-1 mt-2 cursor-pointer" onclick='next()'>
                    <div class="w-2 h-2 bg-green-500 absolute top-[-4px] left-[50%] transform -translate-x-1/2 rotate-45"></div>
                    </div>`
        $(document).find('.popup').remove()
        $('.active, .disabled, .current, .next, .done').css({'z-index':'0'})
        $(this).css({'z-index':'10'})
        $(this).find('.bouncing').hide()
        $(this).append(div)
    });
    $('.done').on('click', function(){
        let div = `<div class="w-max z-10 p-2 text-sm bg-green-500 text-white absolute bottom-[-100px] rounded-lg popup shadow-lg">
                    <h1 class="font-bold">Testez vos connaissances en ${section.toUpperCase()}</h1>
                    <p class="text-xs mt-1">Question ${$(this).index() + 1}/10</p>
                    <input type="button" value="repeter" class="w-full bg-white text-green-500 rounded p-1 mt-2 cursor-pointer" onclick='repeter()'>
                    <div class="w-2 h-2 bg-green-500 absolute top-[-4px] left-[50%] transform -translate-x-1/2 rotate-45"></div>
                    </div>`
        $(document).find('.popup').remove()
        $('.active, .disabled, .current, .next, .done').css({'z-index':'0'})
        $(this).css({'z-index':'10'})
        $(this).append(div)
    });
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.popup, .current, .done').length) {
            $(document).find('.popup').remove()
            $('.active, .disabled, .current, .next, .done').css({'z-index':'0'})
            $(this).find('.bouncing').show()
        }
    });
    
    $('.next').on('click', function(){
        if (section != 'js'){
            window.location.href = `?section=${encodeURIComponent(sections[sections.indexOf(section) + 1])}`;
        }
    });
})