$(document).foundation();
var base_url = "http://localhost/PMS";
function login() {
    var username = $("#username").val();
    var password = $("#password").val();
    $.ajax({
        type: "POST",
        url: base_url + "/user/login",
        data: {"username": username, "password": password},
        success: function (data) {
            if (data['status']) {
                data = data['data'];
                $.cookie("token", data['token']);
                $.cookie("userId", data['userId']);
                window.location = 'index.html'
            } else {
                alert(data['message']);
            }
        },
        dataType: "json"
    });
}
