const counter = document.getElementById('#counter')
const btns = document.querySelectorAll('.btn')


btns.forEach((btns)=>
   btns.addEventListener('click', (e) => {
     const styles = e.currentTarget.classList

     if(styles.contains('increase')){
        counter++
     } else if(styles.contains('increase')){
        counter--
     } else {
         counter = 0
     }

     if(counter> 0){
      counter.style.color='green'
     }


   })    

)