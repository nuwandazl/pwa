document.addEventListener('DOMContentLoaded', function(){
    const height_elem = document.getElementById('height_input')
    const weight_elem = document.getElementById('weight_input')
    const btn_elem = document.getElementById('btn')
    const lab_res = document.getElementById('label_result')

    btn_elem.addEventListener('click', function(){
        let h = +height_elem.value
        let w = +weight_elem.value
        let imt = h/(w*w)
        lab_res.textContent= "ИМТ = " + imt.toFixed(3)
    })
})

window.addEventListener('load',function(){
    if('serviceWorker' in navigator){
        this.navigator.serviceWorker.register('sw.js')
        .then(reg => {
            console.log('SW reg', reg)
        })
        .catch(error => {
            console.log('SW failed', error)
        })
    }
})