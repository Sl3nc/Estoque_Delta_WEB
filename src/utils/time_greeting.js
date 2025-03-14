export const time_greeting = () => {
    var currentHour = new Date().getHours();
    console.log(currentHour)
    if (currentHour < 12) {
        return 'Bom dia'
    } else if (currentHour >= 12 & currentHour < 18) {
        return 'Boa tarde'
    }
    else {
        return 'Boa noite'
    }
}