/*
    method
    url
    data
    success
    faild
 */
function $ajax_1({ method = "get", url, data, success, faild }) {
    // 创建ajax对象
    var xhr = null;
    try {
        xhr = new XMLHttpRequest();
    }
    catch (error) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // 判断请求方式
    if (method == "get" && data) {
        url += "?" + data;
    }
    // 调用open
    xhr.open(method, url, true);

    // 调用send
    if (method == "get") {
        xhr.send();
    } else {
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencode");
        xhr.send(data);
    }


    // 等待数据响应
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                if (success) {
                    success(xhr.responseText)
                }
            }
            else {
                if (faild) {
                    faild("Error:" + xhr.status)
                }
            }
        }
    }
}


// 函数调用
$ajax_1({
    method: "get",
    url: 'www.baidu.com',
    data: "?name=judy&age=12",
    success:function(res){
        console.log(res);
    },
    faild:function(msg){
        console.log(msg);
    }
})

/*
-------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------- 
 */
/* 
    将请求的数据转换成查询字符串
 */


function querString(obj) {
    var str = "";
    for (var attr in obj) {
        str += attr + "=" + obj[attr] + "&"
    }
    return str.substring(0, str.length - 1);
}


function $ajax_2({ method = "get", url, data, success, faild }) {
    // 创建ajax对象
    var xhr = null;
    try {
        xhr = new XMLHttpRequest();
    }
    catch (error) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (data) {
        data = querString(data);
    }
    // 判断请求方式
    if (method == "get" && data) {
        url += "?" + data;
    }
    // 调用open
    xhr.open(method, url, true);

    // 调用send
    if (method == "get") {
        xhr.send();
    } else {
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencode");
        xhr.send(data);
    }


    // 等待数据响应
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                if (success) {
                    success(xhr.responseText)
                }
            }
            else {
                if (faild) {
                    faild("Error:" + xhr.status)
                }
            }
        }
    }
}


// 函数调用
$ajax_2({
    method: 'get',
    url: 'www.baidu.com',
    data: {
        name: 'judy',
        age: '12'
    },
    success: function (res) {
        console.log(res);
    },
    faild: function (msg) {
        console.log(msg)
    }
})

/*
-------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------
 */
