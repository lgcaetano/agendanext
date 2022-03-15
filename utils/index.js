const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurday",
    "Friday", 
    "Saturday",
]

function withinWeek(date){
    const distanceInMiliseconds = Math.abs(date - new Date())
    const MILISECONDS_IN_A_WEEK = 604800000
    return distanceInMiliseconds < MILISECONDS_IN_A_WEEK    
}


function withinYear(date){
    const distanceInMiliseconds = Math.abs(date - new Date())
    const MILISECONDS_IN_A_YEAR = 31536000000
    return distanceInMiliseconds < MILISECONDS_IN_A_YEAR    
}

function formatedMinutes(date){
    const minutes = date.getMinutes()
    return minutes < 10 ? "0" + minutes : minutes
}

function formatDate(date){
    const hasPassed = date < new Date()
    
    if(withinWeek(date)){
        const prefix = hasPassed ? "Last" : "Next"
        return `${prefix} ${daysOfTheWeek[date.getDay()]} ${date.getDate()}/${date.getMonth() + 1} ${date.getHours()}:${formatedMinutes(date)}`
    }

    if(withinYear(date)){
        return `${date.getDate()}/${date.getMonth() + 1} ${date.getHours()}:${formatedMinutes(date)}`
    }

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${formatedMinutes(date)}`
}

export { formatDate, formatedMinutes, withinWeek, withinYear }