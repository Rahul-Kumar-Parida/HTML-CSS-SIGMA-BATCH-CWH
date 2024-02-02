$(document).ready(function () {

    $.ajax({
    
    url: "students.json", dataType: "json",
    success: function (data) { displayStudents(data);
    },
    
    error: function  (error)  { console.error("Error fetching data:", error);
    },
    
    });
    
    });
    
    function displayStudents(data) {
    
    var tableBody = $("#tableBody");
    
    $.each(data, function (index, student) { var row = $("<tr>");
    row.append(`<td>${student.id}</td>`);
    
    row.append(`<td>${student.name}</td>`); row.append(`<td>${student.age}</td>`); row.append(`<td>${student.grade}</td>`); tableBody.append(row);
    });
    
    }