const saturdayFun = function(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`

}

const mondayWork = function(work="go to the office"){
    return `This Monday, I will ${work}.`

}

const wrapAdjective = function(flair="*"){
    return function(adjective="special"){
        return `You are ${flair}${adjective}${flair}!`
    }
}