
function unporn(message){
    if (/[a-z]\:\/\/porn|xvi|(x{2,3})\.?$/i.test(message) || /[a-z]\:\/\/[a-zA-Z]\.?\/q= porn|xvi|(x{2,3})$/i.test(message) || /p{1,}o{1,}r{1,}n{1,}|xvi|(x{2,5})\.?$/i.test(message)){
        return true
    }
    return false
}