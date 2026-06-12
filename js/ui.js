export function renderEmployees(employees){

    const tbody=
    document.getElementById(
        "employeeTableBody"
    );

    tbody.innerHTML="";

    employees.forEach(employee=>{

        tbody.innerHTML += `
        <tr>

            <td>${employee.name}</td>

            <td>${employee.email}</td>

            <td>${employee.department}</td>

            <td>

                <button
                class="edit-btn"
                data-id="${employee.id}">
                Edit
                </button>

                <button
                class="delete-btn"
                data-id="${employee.id}">
                Delete
                </button>

            </td>

        </tr>
        `;

    });

}

export function updateStats(employees){

    document.getElementById(
        "totalEmployees"
    ).textContent = employees.length;

    const departments=
    new Set(
        employees.map(
            emp=>emp.department
        )
    );

    document.getElementById(
        "totalDepartments"
    ).textContent=
    departments.size;

}
