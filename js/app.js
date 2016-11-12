$(document).foundation();
var base_url = "http://localhost/PMS";
function login() {
    var username = $("#username").val();
    var password = $("#password").val();
    $.ajax({
        type: "POST",
        url: base_url + "/user/login",
        data: {"username":username, "password":password},
        success: function (data) {
            console.log(data);
        },
        dataType: "json"
    });
}
