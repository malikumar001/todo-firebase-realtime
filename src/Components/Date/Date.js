const date = new Date()

const monthDate =  date.getDate();
    
    var months = ["January", "February", "March",
                   "April", "May", "June", "July",
                   "August", "September", "October",
                    "November", "December"];
    const monthName = months[date.getMonth()];
    const year = date.getFullYear()

   

export default{
    monthDate,
    monthName,
    year
}




