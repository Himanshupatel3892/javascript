// ----------------------
// OOP Class Definition
// ----------------------
class University {
    constructor(name) {
        this.name = name;
        this.departments = [];
    }

    addDepartment(dept) {
        if (!this.departments.includes(dept)) {
            this.departments.push(dept);
        }
    }

    removeDepartment(dept) {
        this.departments = this.departments.filter(d => d !== dept);
    }

    getAllDepartments() {
        return this.departments;
    }
}

// -------------------------------------------------
// UI Handling + Connecting OOP with Frontend
// -------------------------------------------------

let uni;
const deptList = document.getElementById("deptList");

document.getElementById("addBtn").addEventListener("click", () => {
    let name = document.getElementById("uniName").value;
    let dept = document.getElementById("deptInput").value;

    if (!uni) {
        uni = new University(name || "Unknown University");
    }

    if (dept === "") return;

    uni.addDepartment(dept);
    document.getElementById("deptInput").value = "";
    displayDepartments();
});

document.getElementById("removeBtn").addEventListener("click", () => {
    let dept = document.getElementById("deptInput").value;
    if (!dept) return;

    uni.removeDepartment(dept);
    document.getElementById("deptInput").value = "";
    displayDepartments();
});

// Display departments
function displayDepartments() {
    deptList.innerHTML = "";
    uni.getAllDepartments().forEach(d => {
        let li = document.createElement("li");
        li.textContent = d;
        deptList.appendChild(li);
    });
}
