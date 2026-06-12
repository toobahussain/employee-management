export function validateEmployee(employee,employees){

    if(!employee.name.trim()){
        return "Name is required";
    }

    if(!employee.department.trim()){
        return "Department is required";
    }

    const emailPattern=
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(employee.email)){
        return "Invalid email";
    }

    const duplicate=employees.find(
        emp =>
        emp.email ===
        employee.email &&
        emp.id !== employee.id
    );

    if(duplicate){
        return "Email already exists";
    }

    return null;
}
