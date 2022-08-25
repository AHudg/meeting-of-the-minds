module.exports = {
    fixDate: date => {
        const formattedDate = `${new Date(date).toLocaleDateString('en-us', { month:"long", day:"numeric", year:"numeric" })}`;
        console.log(formattedDate);
        return formattedDate;
    }
}