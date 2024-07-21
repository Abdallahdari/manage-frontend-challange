const btnclose=document.getElementById('close')
const btnopen=document.getElementById('humbegar')
const dropdown=document.getElementById('dropdown')
btnopen.addEventListener('click',function(e){
    e.preventDefault()
    btnclose.classList.toggle('hidden')
    btnopen.classList.add('hide')
dropdown.classList.remove('hidden')

})
btnclose.addEventListener('click',function(e){
    e.preventDefault()
    btnclose.classList.toggle('hidden')
    btnopen.classList.toggle('hide')
    dropdown.classList.add('hidden')


})
