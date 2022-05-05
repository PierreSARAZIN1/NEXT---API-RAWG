const btnAlert = document.getElementById('btn-alert');
const divAlert = document.getElementById('div-alert');


const displayAlert = () => {
    divAlert.innerHTML = ""
    divAlert.innerHTML += `
    <div class="container">
        <div class="bd-example">
            <div class="alert alert-danger" role="alert">
                Configuration en cours ...⚙️
            </div>
        </div>
    </div> `

};
const deleteAlert = () => {
    divAlert.innerHTML = ""
}

btnAlert.addEventListener('mouseover', displayAlert);
btnAlert.addEventListener('mouseout', deleteAlert);

export { btnAlert, divAlert, displayAlert, deleteAlert };