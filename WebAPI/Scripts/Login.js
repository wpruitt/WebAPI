$("#loginBtn").click(function () {
    var loginData = {
        grant_type: 'password',
        username: $("#loginEmail").val(),
        password: $("#loginPassword").val()
    };
    console.log("Clicked");
    console.log("loginData", loginData);
    $.ajax({
        type: 'POST',
        url: '/Token',
        data: loginData
    }).done(function (data) {
        console.log("sessionStorage", sessionStorage);
        console.log("data", data);
        console.log("self", self);
        //self.user(data.userName);
        //Cache the access token in session storage.
        sessionStorage.setItem('tokenKey', data.access_token);
        console.log("sessionStorage", sessionStorage);
        console.log('tokenKey', sessionStorage.tokenKey);
    }).fail(function (error) {
        console.log('error', error);
    })
});