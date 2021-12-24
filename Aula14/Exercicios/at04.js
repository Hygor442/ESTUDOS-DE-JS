function gerar(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let c = 1
        let n = Number(num.value)
        tab.innerHTML =''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n}X${c}=${c*n}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        } 
    }
}