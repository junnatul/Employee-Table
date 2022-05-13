var employeeData = [
    {
        
        "name" : "Jannat",
        "employeeID" : 01,
        "designation" : "Software engineer",
        "city" : "Kolkata",
        "contact" : "6829456783"
        
    },
    {
        "name" : "Junnatul",
        "employeeID" : 02,
        "designation" : "Software engineer trainee",
        "city" : "Delhi",
        "contact" : "6829450783"
    },
    {
        "name" : "Nayem",
        "employeeID" : 03,
        "designation" : "Software test engineer",
        "city" : "Bangalore",
        "contact" : "6820496783"
    },
    {
        "name" : "Tamanna",
        "employeeID" : 04,
        "designation" : "Software Test engineer trainee",
        "city" : "pune",
        "contact" : "6829406783"
    },
    {
       
        "name" : "Mobo",
        "employeeID" : 06,
        "designation" : "Associate Project Manager ",
        "city" : "Jaipur",
        "contact" : "6820456703"
    }
    ];

    let tbody = document.getElementById('table_body');

employeeData.map((item) => {

    let newRow = `<tr>
                    <td>${item.name}</td>
                    <td>${item.employeeID}</td>
                    <td>${item.designation}</td>
                    <td>${item.city}</td>
                    <td>${item.contact}</td>
                </tr>`;
    document.getElementById('table_body').innerHTML += newRow;
})



    
    // var tbody = document.getElementById('table_body');
    
    // var fields = ['name','employeeID','designation','city','contact'];
    
    // for(var i = 0; i < users.length; i++) {
    // console.log("hi", users[i])
    //     var tRow = document.createElement('tr');
    //   tbody.appendChild(tRow);
      
      
    //   fields.forEach(function (field) {
    //     var tCol = document.createElement('td');
    //     tCol.innerHTML = users[i][field];
    //     tRow.appendChild(tCol);
    //   })
    // }