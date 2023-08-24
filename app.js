//alert("I'm Ready")
let Employeesdata
const table = document.querySelector('table')
fetch('https://www.elbound.in/api/getemployeedata').then(res => res.json()).then
(data => {
    Employeesdata = data.Employees
    console.log(Employeesdata)
}).then(() => {
    Employeesdata.forEach(item => {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        td1.textContent = item.Emp_Id
        tr.appendChild(td1)
        let td2 = document.createElement('td')
        td2.textContent = item.FirstName
        tr.appendChild(td2)
        let td3 = document.createElement('td')
        td3.textContent = item.LastName
        tr.appendChild(td3)
        let td4 = document.createElement('td')
        td4.textContent = item.Department
        tr.appendChild(td4)
        let td5 = document.createElement('td')
        td5.textContent = item.Location
        tr.appendChild(td5)
    })
})