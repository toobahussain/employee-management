import Employee from "./employee.js";

import {
    getEmployees,
    saveEmployees,
    getNextId
}
from "./storage.js";

import {
    validateEmployee
}
from "./validation.js";

import {
    renderEmployees,
    updateStats
}
from "./ui.js";

let employees=getEmployees();

let editId=null;

renderEmployees(employees);
updateStats(employees);

const form=
document.getElementById(
    "employeeForm"
);

const searchInput=
document.getElementById(
    "searchInput"
);

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const department =
        document.getElementById("department").value;

    const employee = new Employee(
        editId || getNextId(),
        name,
        email,
        department
    );

    const error =
        validateEmployee(employee, employees);

    if(error){
        alert(error);
        return;
    }

    if(editId){

        employees = employees.map(emp =>
            emp.id === editId
                ? employee
                : emp
        );

        editId = null;

    } else {

        employees.push(employee);
    }

    saveEmployees(employees);

    renderEmployees(employees);
    updateStats(employees);

    form.reset();

});

document.addEventListener(
    "click",
    function(e){

        const id=
        Number(
            e.target.dataset.id
        );

        if(
            e.target.classList.contains(
                "delete-btn"
            )
        ){

            employees=
            employees.filter(
                emp=>emp.id!==id
            );

            saveEmployees(
                employees
            );

            renderEmployees(
                employees
            );

            updateStats(
                employees
            );

        }

        if(
            e.target.classList.contains(
                "edit-btn"
            )
        ){

            const employee=
            employees.find(
                emp=>emp.id===id
            );

            document.getElementById(
                "name"
            ).value=
            employee.name;

            document.getElementById(
                "email"
            ).value=
            employee.email;

            document.getElementById(
                "department"
            ).value=
            employee.department;

            editId=id;

        }

    }
);

searchInput.addEventListener(
    "input",
    function(){

        const keyword=
        searchInput.value
        .toLowerCase();

        const filtered=
        employees.filter(emp =>

            emp.name
            .toLowerCase()
            .includes(keyword)

            ||

            emp.department
            .toLowerCase()
            .includes(keyword)

        );

        renderEmployees(
            filtered
        );

    }
);