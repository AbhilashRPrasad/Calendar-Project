$(document).ready(function () {
    $('#calendar').evoCalendar({
        theme: "Midnight Blue", 
        calendarEvents: [
            {
                id: 'event1', // Event's ID (required)
                name: "Muharram", // Event name (required)
                date: "August/09/2022", // Event date (required)
                // description: "Independence Day is celebrated annually on 15 August as a national holiday in India commemorating the nation's independence from the United Kingdom on 15 August 1947",
                type: "holiday", // Event type (required)
                everyYear: false // Same event every year (optional)
            },

            {
                id: 'event2', // Event's ID (required)
                name: "Independence Day", // Event name (required)
                date: "August/15/2022", // Event date (required)
                description: "Independence Day is celebrated annually on 15 August as a national holiday in India commemorating the nation's independence from the United Kingdom on 15 August 1947",
                type: "holiday", // Event type (required)
                everyYear: true // Same event every year (optional)
            },
            {
                id: 'event3', // Event's ID (required)
                name: "Republic Day", // Event name (required)
                date: "January/26/2022", // Event date (required)
                description: "Republic Day is a public holiday in India, when the country marks and celebrates the date on which the Constitution of India came into effect on 26 January 1950",
                type: "holiday", // Event type (required)
                everyYear: true // Same event every year (optional)
            },

            {
                id: 'event4', // Event's ID (required)
                name: "Ganesh Chaturthi", // Event name (required)
                date: "August/31/2022", // Event date (required)
                // description: "Republic Day is a public holiday in India, when the country marks and celebrates the date on which the Constitution of India came into effect on 26 January 1950",
                type: "holiday", // Event type (required)
                everyYear: false // Same event every year (optional)
            },
            {
                id: 'event5', // Event's ID (required)
                name: "Gandhi Jayanthi", // Event name (required)
                date: "October/02/2022", // Event date (required)
                // description: "Independence Day is celebrated annually on 15 August as a national holiday in India commemorating the nation's independence from the United Kingdom on 15 August 1947",
                type: "holiday", // Event type (required)
                everyYear: true // Same event every year (optional)
            },

            {
                name: "Vacation Leave",
                badge: "08/18 - 08/20", // Event badge (optional)
                date: ["August/18/2022", "August/20/2022"], // Date range
                description: "Vacation leave for 3 days.", // Event description (optional)
                type: "event",
                color: "#63d867" // Event custom color (optional)
            }
        ]




    })
})
