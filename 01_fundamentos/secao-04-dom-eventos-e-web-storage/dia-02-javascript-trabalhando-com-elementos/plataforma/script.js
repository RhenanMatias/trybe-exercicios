const changeColorParent = document.getElementById('where-are-you').parentNode
changeColorParent.style.color = 'Red'

const firstChild = document.getElementById('first-child-of-child')
firstChild.innerText = 'Primeiro Filho do Filho!!'

const accessFirstChild = document.getElementById('parent')
accessFirstChild.nextSibling.innerText