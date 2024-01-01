function validate() {
    var fname = document.forms["reg_form"]["fname"].value;
    var lname = document.forms["reg_form"]["lname"].value;
    var address = document.forms["reg_form"]["address"].value;
    var gender = document.forms["reg_form"]["gender"].value;
    var email = document.forms["reg_form"]["email"].value;
    var mobile = document.forms["reg_form"]["mobile"].value;
    var course = document.forms["reg_form"]["course"].value;

    
    if (fname === "" || lname === "" || address === "" || gender === "" || email === "" || mobile === "" || course === "select course") {
        alert("All fields must be filled out");
        return false;
    }


    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email address");
        return false;
    }

    
    alert("Form submitted successfully!");
    return true;
}
