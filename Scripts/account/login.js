$(document).ready(function () {
    $("#btnLogin").click(function () {
        if ($("#AccountName").val() == '') {
            layer.msg("用户名不能为空！");
            return;
        }
        if ($("#Password").val() == '') {
            layer.msg("密码不能为空！");
            return;
        }
        $.ajax({
            url: "/Account/Login",
            data: { AccountName: $("#AccountName").val(), Password: $("#Password").val() },
            type: "post",
            dataType: "json",
            success: function (data) {
                if (data.IsSuccess) {
                    layer.msg('登陆成功',
                        {
                            time: 2000,
                            end: function () {
                                window.location.href = "/home/index";
                            }
                        });
                } else {
                    layer.msg(data.Message);
                }
            },
            error: function () {
                layer.msg('系统异常，请稍后尝试');
            }
        });
    })
});