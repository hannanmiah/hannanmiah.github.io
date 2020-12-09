let n1 = document.getElementById('n1')
let sidebar = document.querySelector('aside')
let sidebarClose = document.getElementById('sidebarClose')
let sidebarOpen = document.getElementById('sidebarOpen')

//make first content of post visible
n1.style.display = 'block'
//toggling between sidebar and menu
sidebarClose.addEventListener('click', function () {
    sidebar.style.display = 'none'
})

sidebarOpen.addEventListener('click', function () {
    sidebar.style.display = 'block'
})