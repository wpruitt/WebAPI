$("#registerBtn").click(function () {
    var registerData = {
        Email: $("#registerEmail").val(),
        Password: $("#registerPassword").val(),
        ConfirmPassword: $("#confirmPassword").val(),
        //FirstName: $("#registerFirstName").val(),
        //LastName: $("#registerLastName").val(),
        //Address1: $("#registerAddress1").val(),
        //Address2: $("#registerAddress2").val(),
        //City: $("#registerCity").val(),
        //State: $("#registerState").val(),
        //ZipCode: $("#registerZipCode").val(),
        //DOB: $("#registerDOB").val(),
        //PhoneNumber: $("#registerPhoneNumber").val()
    };
    var regLogData = {
        grant_type: 'password',
        username: $("#registerEmail").val(),
        password: $("#registerPassword").val()
    };
    console.log("registerData", registerData);
    console.log("data-stringify", JSON.stringify(registerData));
    $.ajax({
        type: 'POST',
        url: '/api/Account/Register',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(registerData)
    }).done(function (data) {
        console.log("Registered!");
        $.ajax({
            type: 'POST',
            url: '/Token',
            data: regLogData
        }).done(function (data) {
            sessionStorage.setItem('tokenKey', data.access_token);
            console.log('and logged in')
        }).fail(function (error) {
            console.log('error', error);
        });
    }).fail(function (error) {
        console.log('error', error);
    })
});