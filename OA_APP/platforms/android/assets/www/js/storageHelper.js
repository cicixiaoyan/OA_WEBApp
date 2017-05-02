//javascript对storage进行增删改查的操作
var storageHelper = function () {
}

storageHelper.addStorage = function (key, value, isSession) {
    switch (typeof value) {
        case "object":
            value = JSON.stringify(value);
            break;
    }

    storageHelper.delStorage(key);
    if (isSession) {
        sessionStorage.setItem(key, value);
    }
    else {
        localStorage.setItem(key, value);
    }
}

storageHelper.getStorage = function (key) {
    var result = "";
    var localValue = localStorage.getItem(key);
    switch (localValue) {
        case null:
            result = sessionStorage.getItem(key);
            break;
        default:
            result = localValue;
            break;
    }

    try {
        return eval("(" + result + ")");
    }
    catch (e) {
        return result;
    }
}

storageHelper.delStorage = function (key) {
    switch (localStorage.getItem(key)) {
        case null:
            return sessionStorage.removeItem(key);
            break;
        default:
            return localStorage.removeItem(key);
            break;
    }
}