const tbopener = document.querySelector('.tb-thread-a-opener');
const tbthreadA = document.querySelector('.tb-thread-a');
const tbarrow = document.querySelector('.tb-thread-a-arrow');

tbopener.addEventListener('click',() => {
    tbthreadA.classList.toggle('h-12');
    tbarrow.classList.toggle('rotate-180')
})

const fsaintroopener = document.querySelector('.fsa-intro-opener');
const fsaintro = document.querySelector('.fsa-intro');
const fsaintroarrow = document.querySelector('.fsa-intro-arrow');

fsaintroopener.addEventListener('click',() => {
    fsaintro.classList.toggle('h-12');
    fsaintroarrow.classList.toggle('rotate-180')
})

const fsathreadAopener = document.querySelector('.fsa-thread-a-opener');
const fsathreadA = document.querySelector('.fsa-thread-a');
const fsaarrow = document.querySelector('.fsa-thread-a-arrow');

fsathreadAopener.addEventListener('click',() => {
    fsathreadA.classList.toggle('h-12');
    fsaarrow.classList.toggle('rotate-180')
})

// console.log(document.querySelector('.jb').clientHeight)

const jbarrow = document.querySelector('.jb-arrow');
const jb = document.querySelector('.journey-board');
const jbheading = document.querySelector('.jb-heading');
const jbcontent = document.querySelector('.jb-content');
const jbnumbering = document.querySelector('.jb-numbering');

jbarrow.addEventListener('click',() => {
    jb.classList.toggle('w-[360px]');
    jb.classList.toggle('w-[120px]');
    jbarrow.classList.toggle('rotate-180');
    jbheading.classList.toggle('hidden');
    jbcontent.classList.toggle('hidden');
    jbnumbering.classList.toggle('hidden');
})

const assetTitle = document.querySelectorAll('.asset-title');
const assetInfoIcon = document.querySelectorAll('.asset-info-icon');
const assetDesc = document.querySelectorAll('.asset-description');

for(let i=0; i<assetInfoIcon.length; ++i){
    assetInfoIcon[i].addEventListener('click', () => {
        assetDesc[i].classList.toggle('hidden');
    })
}

const title = document.querySelector('.title');
const taskTitle = document.querySelector('.task-title');
const taskDesc = document.querySelector('.task-description');
const jbTaskTitle = document.querySelector('.jb-task-title');
const jbAssetTitle = document.querySelectorAll('.jb-asset-title');

const loadData = async() => {
    const data = await fetch('data.json');
    const res = await data.json();
    console.log(res.tasks);
    title.innerText = res.title;
    taskTitle.innerText = res.tasks[0].task_title;
    taskDesc.innerText = res.tasks[0].task_description;
    jbTaskTitle.innerHTML = `•&nbsp;&nbsp;${res.tasks[0].task_title}`;

    for(let i=0; i<assetTitle.length; ++i){
        assetTitle[i].innerText = res.tasks[0].assets[i].asset_title;
        assetDesc[i].innerHTML = `<span class="font-semibold">Description:</span> ${res.tasks[0].assets[i].asset_description}`
        jbAssetTitle[i].innerHTML = `<span>•</span><p>${res.tasks[0].assets[i].asset_title}</p>`
    }


}
loadData();
