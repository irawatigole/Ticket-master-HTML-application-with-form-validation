
let ticketsHandle = document.getElementById('tickets');
const url = 'http://dct-api-data.herokuapp.com/tickets/?api_key=bc2b7c3236801740';

// let xhr = new XMLHttpRequest();                                   (if you don't want to use any external package like 
// xhr.open('GET', url);                                              Axios because same plug in will work for  node,html,
                                                                     // react,express, we can use using xhr object, but this  
// xhr.send();                                                        will onlywork for front end,i.e on browser level,it                                                                           will not work for backend or server side) 
// xhr.onreadystatechange = function(){                                    
//     if(xhr.readyState == 4 && xhr.status == 200) {
//         console.log(JSON.parse(xhr.responseText));
//     }
// }
// or xhr.send();                                                     

    axios.get(url).then((response) => {
        let tickets = response.data;
        
        // let output = '';
        tickets.forEach((ticket) => {
            
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

            // not recommended
            // output =+ `<tr>
            // <td>${ticket.ticket_code}</td>
            // <td>${ticket.name}</td>
            // <td>${ticket.department}</td>
            // <td>${ticket.priority}</td>
            // <td>${ticket.message}</td>
            // <td>${ticket.status}</td>
            // </tr>`
            // ticketsHandle.innerHTML = output;
     })
   }).catch((err) => {
    console.log(err);
   })


