// from data.js

// YOUR CODE HERE!
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
//Reference table body
var tbody = d3.select("tbody");

// Console.log the alien sighting data from data.js
console.log(data);

// 03-Evr_D3_Table
// Loop through data and console.log 
data.forEach(function(alienSighting) {
    console.log(alienSighting);
    //Append 
    var row = tbody.append("tr");
    //console.log
    Object.entries(alienSighting).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row 
        var cell = tbody.append("td");
        cell.text(value);
    });
}); 

// html id changed to id="submit" section

// Select the submit button
var submit = d3.select("#submit");
// Use D3 `.on` to attach a click handler
submit.on("click", function() {
    // Prevent page from refreshing
    d3.event.preventDefault();
    d3.select(".summary").html("");
    
    // Select the input element/get raw HTML node
    // Get the value property of the input element #datetime
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    // Use the form input to filter the data
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    // loop thru
    filteredData.forEach((datetime) => {
        var row = tbody.append("tr");
        Object.entries(datetime).forEach(([key,value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});
