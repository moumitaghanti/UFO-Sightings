// from data.js
var tableData = data;
console.log(tableData);
var tbody = d3.select("tbody");

function renderTable(sourceData) {
	sourceData.forEach(data => {
		var row = tbody.append("tr");
		Object.values(data).forEach(value =>{
        var cell = row.append("td");
        cell.text(value);
	});
	});	
}



function handleFilter() {
 d3.event.preventDefault();    

// Select the button
//var button = d3.select("#filter-btn");

//button.on("click", function() {

  // Select the input element and get the raw HTML node
  var searchDate = d3.select("#datetime").property("value");
  var searchCity = d3.select("#city").property("value").toLowerCase();
  var searchState = d3.select("#state").property("value").toLowerCase();
  var searhCountry = d3.select("#country").property("value").toLowerCase();
  var searchShape = d3.select("#shape").property("value").toLowerCase();
  
  var filteredData = data;
  if (searchDate != ""){
    filteredData = filteredData.filter(filterRecord => filterRecord.datetime === searchDate);
    //console.log(searchDate)
 
}

if (searchCity != ""){
    filteredData = filteredData.filter(filterRecord => filterRecord.city === searchCity);
}

  if (searchState != ""){
    filteredData = filteredData.filter(filterRecord => filterRecord.state === searchState);
}

  if (searhCountry != ""){
    filteredData = filteredData.filter(filterRecord => filterRecord.country === searhCountry);
}

  if (searchShape != ""){
    filteredData = filteredData.filter(filterRecord => filterRecord.shape === searchShape);
}
  
  console.log(filteredData);
  tbody.html('');
  renderTable(filteredData);



//});  
}


function handleReset()
{
//var reset = d3.select("#reset-btn");
//reset.on("click", function(){
tbody.html('');
renderTable(tableData);  
//});
}

renderTable(tableData);
d3.select("#filter-btn").on("click", handleFilter );
d3.select("#reset-btn").on("click", handleReset );