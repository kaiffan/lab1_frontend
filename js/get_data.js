let idElementsInput = ['inputFirstName', 'inputLastName', 'inputLogin', 'inputEmail', 'inputPassword', 'inputConfirmationPassword'];

document.getElementById('button_send_data').onclick = () => {
    idElementsInput.forEach(element => {
        let valueInput = document.getElementById(element).value;
        console.log(valueInput);
    });
    let selectedElement = document.getElementById('selectButtonsAge');
    console.log(selectedElement.options[selectedElement.selectedIndex].text);
    console.log(document.querySelector('input[name="rate"]:checked').value);

    if (document.getElementById('checkboxSiteRules').checked) {
        console.log('true');
    } else {
        window.location.reload();
    }
    window.location.href = "../html/login_form.html";
}


