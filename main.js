

document.documentElement.classList.add('js-enabled');

const list=document.querySelector('.grid');

j=200;


 for (let i=1;i<=j;i++){

        const newList=document.createElement('li');
        newList.classList.add('grid__item');
        const p = document.createTextNode(`${i}`);
        newList.appendChild(p);
        list.appendChild(newList);
        if (i%9 ===0 && i%3 ===0){
            newList.classList.add('multiple-3-9');
            newList.insertAdjacentHTML("beforeend", `<div class="ribbon-wrapper">
    <div class="ribbon">${i}</div>
  </div>`)
        }else if (i%3===0){
            newList.classList.add('multiple-3');
            newList.insertAdjacentHTML('beforeend',`<div class="ribbon-wrapper">
    <div class="ribbon">${i}</div>
  </div>`)
        }
    }







