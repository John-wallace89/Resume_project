function sendMail(contactForm) {
    emailjs.send("service_38n4p0g", "Resume_project_template", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function (error) {
            console.log("UNSUCCESFUL", error);
        }
    )
    return false;
}
