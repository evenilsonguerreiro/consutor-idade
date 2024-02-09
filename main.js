function verificar(){
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.querySelector('#txtano')
    let res = document.querySelector('#res')
    let img = document.querySelector('#image');

    if(fano.value.length === 0 || fano.value.length > ano){
        alert('verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value);
        let genero = ''

        if(fsex[0].checked){
            genero = 'homem'

            if(idade >= 0 && idade < 10){
                img.src = './images/child-102577_640.jpg'
                       
            } else if(idade > 10 && idade <=18){
                img.src = "./images/asian-man-1468032_640.jpg"

            } else if(idade > 18 && idade <=21){
                img.src = "./images/imagem-blog.png"
       
            } else if(idade > 21 && idade <= 49){
                img.src = './images/beard-1845166_640.jpg'

            } else{
                img.src = './images/man-351281_640.jpg'

            } 

} else if(fsex[1].checked){
     genero = 'mulher'

     if(idade >= 0 && idade < 10){
        img.src = './images/girl-511883_640.jpg'
                
    } else if(idade > 10 && idade <=18){
        img.src = "./images/20240209_091810.jpg"

    } else if(idade > 18 && idade <=21){
        img.src = "./images/images/20240209_091810.jpg"

    } else if(idade > 21 && idade <= 49){
        img.src = './images/woman-1439909_640.jpg'


    } else{
        img.src = './images/woman-1795054_640.jpg'

    } 
   
}
res.innerHTML = `Detectamos ${genero} com ${idade} Anos de idade`
fano.value = ''
    
    }
}
    
