// http - GET/ POST/ PUT / DELETE

const employees = [
    {department: 'Hr', name: 'Anurag'},
    {department: 'Technical', name: 'Bhargav'},
    {department: 'Hr', name: 'Chenraj'},
    {department: 'Technical', name: 'Deepak'},
    {department: 'Technical', name: 'Ein'},
    {department: 'Sales', name: 'Farooq'},
    {department: 'Sales', name: 'Joseph'},
    {department: 'Technical', name: 'Johnny'},

]
const postUrl = 'http://dct-api-data.herokuapp.com/tickets/?api_key=bc2b7c3236801740';

const tableHandle = document.getElementById('tickets');
const formHandle = document.getElementById('addTicket');
const nameHandle = document.getElementById('name');
const departmentHandle = document.getElementById('department');
const priorityHandle = document.getElementById('priority');
const messageHandle = document.getElementById('message');
const nameErrorHandle = document.getElementById('nameError');
const departmentErrorHandle = document.getElementById('departmentError');
const priorityErrorHandle = document.getElementById('priorityError');
const messageErrorHandle = document.getElementById('messageError');
const employeeHandle = document.getElementById('employee');

let formValidateObj = {
    name: false,
    department: false,
    priority: false,
    message: false
}

function validateName(){
    if (nameHandle.value == ''){
        nameErrorHandle.innerHTML = 'can not be blank'
    } else {
        nameErrorHandle.innerHTML = '';
        formValidateObj.name = true;
    }
}

function validateDepartment(){
    if (departmentHandle.value == ''){
        departmentErrorHandle.innerHTML = 'can not be blank'
    } else {
        departmentErrorHandle.innerHTML = '';
        formValidateObj.department = true;
    }
}

function validatePriority(){
    if (priorityHandle.value == ''){
        priorityErrorHandle.innerHTML = 'can not be blank'
    } else {
        priorityErrorHandle.innerHTML = '';
        formValidateObj.priority = true;
    }
}

function validateMessage(){
    if (messageHandle.value == ''){
        messageErrorHandle.innerHTML = 'can not be blank'
    } else if (messageHandle.value.length <6) {
        messageErrorHandle.innerHTML = 'should not be empty,min characters required is 6';
   } else {
    messageErrorHandle.innerHTML = '';
    formValidateObj.message = true;
  }
}
    
formHandle.addEventListener('submit',function(e){   // e is an object
    e.preventDefault();  // for getting page without being reloaded(preventDefault is an proprty)
    validateName();
    validateDepartment();
    validatePriority();
    validateMessage();   
    console.log(Object.values(formValidateObj))
    if(Object.values(formValidateObj).includes(false)){
        console.log('errors in form')
    } else {
        console.log('all validations passed');
        let formData = {
            name: nameHandle.value,
            department: departmentHandle.value,
            priority: priorityHandle.value,
            message: messageHandle.value
        };
        axios.post(postUrl, formData).then((response) =>{
            let ticket = response.data;
            console.log(ticket);
            // tableHandle.innerHTML += 
            // `<tr>
            // <td>${ticket.ticket_code}</td>
            // <td>${ticket.name}</td>
            // <td>${ticket.department}</td>
            // <td>${ticket.priority}</td>
            // <td>${ticket.message}</td>
            // <td>${ticket.status}</td>
            // </tr>`;   
            let tr = document.createElement('tr');
    
                let tdCode = document.createElement('td');
                let textCode = document.createTextNode(ticket.ticket_code);
                tdCode.appendChild(textCode);
                tr.appendChild(tdCode);
                
                let tdName = document.createElement('td');
                let textName = document.createTextNode(ticket.name);
                tdName.appendChild(textName);
                tr.appendChild(tdName);
    
                let tdDepartment = document.createElement('td');
                let textDepartment = document.createTextNode(ticket.department);
                tdDepartment.appendChild(textDepartment);
                tr.appendChild(tdDepartment);
    
                let tdPriority = document.createElement('td');
                let textPriority = document.createTextNode(ticket.priority);
                tdPriority.appendChild(textPriority);
                tr.appendChild(tdPriority);
    
                let tdMessage = document.createElement('td');
                let textMessage = document.createTextNode(ticket.message);
                tdMessage.appendChild(textMessage);
                tr.appendChild(tdMessage);
    
                let tdStatus = document.createElement('td');
                let textStatus = document.createTextNode(ticket.status);
                tdStatus.appendChild(textStatus);
                tr.appendChild(tdStatus);
                console.log(tr)
                ticketsHandle.appendChild(tr);  
                formHandle.reset();
        }).catch((err) => {
            console.log(err)
        })
        // console.log(formData);
    }
}, false)

//dynamic select
departmentHandle.addEventListener('change', function(){
    let departmentSelected = departmentHandle.value;
    let filteredEmployees = employees.filter(function(employee){
        return employee.department == departmentSelected;
    });
    employeeHandle.innerHTML = '';
    filteredEmployees.forEach(function(employee){
        let option = document.createElement('option');
        option.setAttribute('value', employee.name);
        option.innerHTML = employee.name;
        employeeHandle.appendChild(option);
    });
}, false)