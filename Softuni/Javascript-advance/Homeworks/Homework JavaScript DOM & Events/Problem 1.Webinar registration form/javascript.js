function OnChangeCheckbox (checkbox) {
    if (checkbox.checked) {
        document.getElementById("hide").style.display="block";
    }
    else {
        document.getElementById("hide").style.display="none";
    }
}