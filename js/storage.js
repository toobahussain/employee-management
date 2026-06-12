const STORAGE_KEY = "employees";
const ID_KEY = "employee_id_counter";

export function getEmployees() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveEmployees(employees) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
}

export function getNextId() {

    let currentId =
        JSON.parse(localStorage.getItem(ID_KEY));

    if (currentId === null) {
        currentId = 0;
    }

    currentId = currentId + 1;

    localStorage.setItem(ID_KEY, JSON.stringify(currentId));

    return currentId;
}
