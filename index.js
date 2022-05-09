function swapMode() {
    if (document.getElementById('checkMode').className = 'dark') {
        document.getElementById('checkMode').className = 'light'
    } else if (document.getElementById('checkMode').className = 'light'){
        document.getElementById('checkMode').className = 'dark'
    }

    console.log(document.getElementById('checkMode').className)
}