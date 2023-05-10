const catbtn = document.querySelector('#cat')
const dogbtn = document.querySelector('#dog')


const catHandler = () => alert('The cat name is: Rascal')
const dogHandler = () => alert('The dog name is: Doug')

catbtn.addEventListener('click', catHandler)
dogbtn.addEventListener('click', dogHandler)