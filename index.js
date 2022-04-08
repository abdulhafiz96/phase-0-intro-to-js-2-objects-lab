// Write your solution in this file!
const employee = {
name: "Hafiz",
streetAddress: "Hatay",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newemployee = { ...employee };
    newemployee[key] = value;

    return newemployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
  
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee1 = { ...employee };
    
delete newEmployee1[key];
    return newEmployee1;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}