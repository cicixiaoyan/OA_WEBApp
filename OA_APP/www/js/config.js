var config = {}

config.serverIp = "http://192.168.0.70:80/";

//config.photoUrl = config.serverIp.replace(/\/$/g, "");

config.getkey = function(obj, value) { //obj为配置文件config.js的对象  value为值  返回对应的键
    for (var o in obj) {
        if (value == obj[o]) {
            return o;
        }
    }
}

config.getvalue = function(obj, key) { //obj为配置文件config.js的对象  key为键  返回对应的值
    for (var o in obj) {
        if (key == o) {
            return obj[o];
        }
    }
}