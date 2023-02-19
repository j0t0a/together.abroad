const switcher = document.getElementById('languageSwitcher')

function onSwitcherClick(){
    switcher.classList.toggle('active')
}

function onChangeLanguage(){
    location.reload()
}