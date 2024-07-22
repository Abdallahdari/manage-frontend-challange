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
const section1 = document.getElementById('section-1');

const reveal = function(entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting) {
        console.log('Section 1 is visible:', entry);
        // You can perform more actions here, like adding a class for animations
        
        // If you only want to observe the entry once
        observer.unobserve(entry.target);
    }
};

const observer = new IntersectionObserver(reveal, {
    root: null,
    threshold: 0.1,
    rootMargin: '20px',
});

observer.observe(section1);
