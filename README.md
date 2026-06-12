# Employee Management System

A simple and responsive **Employee Management System** built using HTML, CSS, and JavaScript (ES6 Modules). This project demonstrates full CRUD operations, modular code structure, form validation, and localStorage-based data persistence.

---

## 🚀 Features

- Add new employees
- Edit employee details
- Delete employees
- Search employees by name or department
- Dashboard statistics (Total Employees & Departments)
- Auto-increment unique ID system
- Form validation (required fields, valid email, unique email)
- Data stored in localStorage (persists after refresh)
- Fully responsive design (mobile-friendly)

---

##  Technologies Used

- HTML (Semantic structure)
- CSS(Flexbox + Media Queries)
- JavaScript 
- localStorage (Browser storage)

---

##  Project Structure

employee-management-system/
│
├── index.html
├── css/
│ └── style.css
│
└── js/
├── app.js
├── employee.js
├── storage.js
├── validation.js
└── ui.js

---

##  How It Works

**Add Employee:**  
Fill form → validation runs → employee is added → saved in localStorage → UI updates.

**Edit Employee:**  
Click edit → data loads in form → update → save changes.

**Delete Employee:**  
Click delete → employee removed from list and storage.

**Search Employee:**  
Search works by matching name or department in real time.

**Dashboard:**  
Automatically updates total employees and departments.

---

##  Validation Rules

- Name is required
- Department is required
- Email must be valid format
- Email must be unique
- Duplicate entries are not allowed

---

##  Responsive Design

- Works on desktop, tablet, and mobile
- Layout adjusts below 768px screen width
- Uses Flexbox and CSS Media Queries

---

##  Data Storage

All employee data is stored in browser **localStorage**, so data remains even after page refresh.

---

##  Key Learning Outcomes

- CRUD operations (Create, Read, Update, Delete)
- Modular JavaScript architecture
- State management using arrays
- DOM manipulation
- Form validation techniques
- Responsive UI design
- localStorage handling

---

##  Author

Tooba

---
