/**
 * 服务
 */
angular.module('IonicClub.services', [])
    // Ionic
    .service('IonicService', ['$http', '$q', 'ConfigService', function($http, $q, ConfigService) {
        return {
            // 获取主题
            getTopics: function(data) {
                var deferred = $q.defer();
                var url = ConfigService.getHost() + "/api/v1/topics";
                $http({
                    method: 'GET',
                    url: url,
                    params: data
                }).success(
                    function(data, status, header, config) {
                        deferred.resolve(data);
                    });
                return deferred.promise;
            },
            // 通过ID获取主题详情
            getTopicById: function(id) {
                var deferred = $q.defer();
                var url = ConfigService.getHost() + "/api/v1/topic/" + id;
                $http.get(url).success(
                    function(data) {
                        deferred.resolve(data);
                    }
                );
                return deferred.promise;
            },
            // 新增主题
            postTopic: function(data) {
                var deferred = $q.defer();
                var url = ConfigService.getHost() + "/api/v1/topics";
                $http({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function(obj) {
                        var str = [];
                        for (var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                    data: data
                }).success(
                    function(data, status, header, config) {
                        deferred.resolve(data);
                    });
                return deferred.promise;
            },
            // 收藏主题
            postTopicCollect: function(data) {
                var deferred = $q.defer();
                var url = ConfigService.getHost() + "/api/v1/topic/collect";
                $http({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function(obj) {
                        var str = [];
                        for (var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                    data: data
                }).success(
                    function(data, status, header, config) {
                        deferred.resolve(data);
                    });
                return deferred.promise;
            },
            // 取消收藏主题
            postTopicDeCollect: function(data) {
                var deferred = $q.defer();
                var url = ConfigService.getHost() + "/api/v1/topic/de_collect";
                $http({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function(obj) {
                        var str = [];
                        for (var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                    data: data
                }).success(
                    function(data, status, header, config) {
                        deferred.resolve(data);
                    });
                return deferred.promise;
            },
            // 新建评论
            postReplie: function(id, data) {
                var deferred = $q.defer();
                var url = ConfigService.getHost() + "/api/v1/topic/" + id + "/replies";
                $http({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function(obj) {
                        var str = [];
                        for (var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                    data: data
                }).success(
                    function(data, status, header, config) {
                        deferred.resolve(data);
                    });
                return deferred.promise;
            },
            // 为评论点赞
            postReplieUps: function(reply_id, accesstoken) {
                var deferred = $q.defer();
                var url = ConfigService.getHost() + "/api/v1/reply/" + reply_id + "/ups?accesstoken=" + accesstoken;
                $http({
                    method: 'POST',
                    url: url
                }).success(
                    function(data, status, header, config) {
                        deferred.resolve(data);
                    });
                return deferred.promise;
            },
            // 获取用户详情
            getUserByName: function(loginname) {
                var deferred = $q.defer();
                var url = ConfigService.getHost() + "/api/v1/user/" + loginname;
                $http.get(url).success(
                    function(data) {
                        deferred.resolve(data);
                    }
                );
                return deferred.promise;
            },
            // 验证 accessToken 的正确性
            postUserLogin: function(accesstoken) {
                var deferred = $q.defer();
                var url = ConfigService.getHost() + "/api/v1/accesstoken?accesstoken=" + accesstoken;
                $http({
                    method: 'POST',
                    url: url
                }).success(
                    function(data, status, header, config) {
                        deferred.resolve(data);
                    });
                return deferred.promise;
            },
            // 获取未读消息数
            getMessageCount: function(accessToken) {
                var deferred = $q.defer();
                var url = ConfigService.getHost() + "/api/v1/message/count?accesstoken=" + accessToken;
                $http.get(url).success(
                    function(data) {
                        deferred.resolve(data);
                    }
                );
                return deferred.promise;
            },
            // 获取消息
            getMessages: function(accessToken) {
                var deferred = $q.defer();
                var url = ConfigService.getHost() + "/api/v1/messages?accesstoken=" + accessToken;
                $http.get(url).success(
                    function(data) {
                        deferred.resolve(data);
                    }
                );
                return deferred.promise;
            },
            // 标记全部已读
            postMessageMark_all: function(accessToken) {
                var deferred = $q.defer();
                var url = ConfigService.getHost() + "/api/v1/message/mark_all?accesstoken=" + accessToken;
                $http({
                    method: 'POST',
                    url: url
                }).success(
                    function(data, status, header, config) {
                        deferred.resolve(data);
                    });
                return deferred.promise;
            }
        }
    }])
    .service('ConfigService', [function() {
        var hostURL = "http://ionichina.com";

        var service = {
            getHost: function() {
                return hostURL;
            }
        }
        return service;
    }])
    .service('TabService', function() {
        var menu = [{
                title: '首页',
                ionic: 'ion-android-home', //ion-ios-home
                path: '#/tab/tab-index'
            },
            {
                title: '我的消息',
                ionic: 'ion-android-people',
                path: '#/tab/mail'
            },
            {
                title: '公告管理',
                ionic: 'ion-ios-book',
                path: "#/tab/notice"
            },
            {
                title: '通讯录',
                ionic: 'ion-ios-compose',
                path: "#/tab/notice"
            },
            {
                title: '待办工作',
                ionic: 'ion-ribbon-a',
                path: "#/tab/notice"
            },
            {
                title: '设置',
                ionic: 'ion-chatbox-working',
                path: "#/tab/t_leave"
            },
            {
                title: '登录',
                ionic: 'ion-chatbox-working',
                path: "#/login"
            }

        ];
        return menu;
    })

.factory('ajaxHelper', function($http, $ionicSideMenuDelegate, $location, $ionicHistory, $cordovaNetwork, popup, loading) {
    var errNum = 0;
    var Ajax = function(url, data, succeedCallback, failCallback, load) {
            var offLine = false;
            try {
                offLine = $cordovaNetwork.isOffline();
            } catch (err) {};

            if (offLine) {
                if (typeof load == 'undefined') loading.hide();
                return false;
            }

            var _url = url;

            // })
            $http({
                    method: 'POST',
                    url: _url,
                    headers: { 'Content-Type': 'Content-Type: json; charset=utf-8' },
                    transformRequest: function(obj) {
                        var str = [];
                        for (var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                    data: data
                })
                .success(
                    function(data, status, header, config) {
                        if (!!Callback.data.Msg) {
                            if (typeof load == 'undefined' || load == "") loading.hide();
                            if (Callback.data.Msg.indexOf("服务器") > -1) {
                                if (errNum > 0) {
                                    loading.hide()
                                    errNum = 0;
                                    popup.alert('服务器出错,请联系管理员', '', '', '', '', function() {
                                        $ionicHistory.goBack()
                                    });
                                } else {
                                    /**/
                                    var prevRecord = {
                                        "url": url,
                                        "callback": succeedCallback
                                    };
                                    errNum++;

                                    if (storageHelper.getStorage("userInfo")) {
                                        var loginData = {
                                            UserName: storageHelper.getStorage("userInfo").userName,
                                            password: storageHelper.getStorage("userInfo").password
                                        };
                                        _Login("ashx/Login.ashx/LoginInfo", loginData, function(data) {

                                            storageHelper.addStorage('User', data);
                                            Ajax(prevRecord.url, prevRecord.callback, "", true);
                                        });
                                    }

                                    /**/
                                }
                            } else {
                                if (typeof failCallback == 'function') failCallback();
                                else popup.alert('提示', Callback.data.Msg);
                            }
                        } else {
                            if (Callback.data.Data === "") { succeedCallback(); } else { succeedCallback(Callback.data.Data); }
                        }

                    })
                .error(function(data, header, config, status) {
                    //处理响应失败
                    //Err.status == 404
                    //alert(JSON.stringify(Err))

                    //debugger
                    if (errNum > 0) {
                        loading.hide()
                        errNum = 0;
                        popup.tip('请求失败,请检查链接是否正常');
                        $ionicHistory.goBack()
                    } else {
                        /**/
                        var prevRecord = {
                            "url": url,
                            "callback": succeedCallback
                        };
                        errNum++;

                        if (storageHelper.getStorage("userInfo")) {
                            var loginData = {
                                UserName: storageHelper.getStorage("userInfo").userName,
                                password: storageHelper.getStorage("userInfo").password
                            };
                            _Login("ashx/Login.ashx/LoginInfo", loginData, function(data) {
                                storageHelper.addStorage('userInfo', data);
                                Ajax(prevRecord.url, prevRecord.callback, "", true);
                            });
                        }
                        /**/
                    }

                    if (typeof load == 'undefined' || load == "") loading.hide();
                    return false;

                });
        },
        _Base = function(_url, _obj, _susseedCallback, failCallback) {
            var url = config.serverIp + _url;
            for (key in _obj) {
                if (key != "Guid") {
                    var val = _obj[key] == null ? "" : _obj[key];
                    url += '&' + key + '=' + val;
                }
            }
            Ajax(url, _susseedCallback, failCallback);
        },

        _Login = function(_url, _obj, _susseedCallback) {
            var url = config.serverIp + _url;
            for (key in _obj) {
                var val = _obj[key] == null ? "" : _obj[key];
                url += '&' + key + '=' + val;
            }
            Ajax(url, _susseedCallback);
        },
        _List = function(_url, _obj, _susseedCallback) {
            _Base(_url, _obj, _susseedCallback);
        },
        _ConfirmAjax = function(_str, _url, _obj, _susseedCallback) {
            popup.confirm("提示", _str, function() {
                _Base(_url, _obj, _susseedCallback)
            });
        }
    return {
        Base: _Base,
        Login: _Login,
        List: _List,
        ConfirmAjax: _ConfirmAjax
    }
})


.factory("dateService", function($http, $state, ionicDatePicker) {
    return {
        showDialog: function(__scope__, myconfig) {
            var that = this;

            if (myconfig == null || myconfig == undefined || myconfig == "") {
                myconfig = {};
            }

            var defaultConfig = {
                callback: function(val) { //Mandatory  
                    var mydate = new Date(val);
                    that.timeStamp = mydate.getFullYear() + "-" + (mydate.getMonth() + 1) + "-" + mydate.getDate();
                    //需要在控制器中定义设定的函数，用于显示时间显示的位置  
                    __scope__.setDate();
                },
                disabledDates: [
                    new Date('Wednesday')
                ],
                from: new Date(),
                to: new Date(new Date().getTime() + 24 * 7 * 60 * 60 * 1000),
                inputDate: new Date(),
                mondayFirst: true,
                disableWeekdays: [],
                closeOnSelect: false,
                templateType: 'popup'
            };
            defaultConfig = $.extend(defaultConfig, myconfig);
            ionicDatePicker.openDatePicker(defaultConfig);
        },
        //存储控件时间  
        timeStamp: 0,
        //获取控件时间  
        getTimeStamp: function() {
            return this.timeStamp;
        },
        //存储服务器时间  
        serverTimeStamp: 0,
        //获取服务器时间  
        getServerTimeStamp: function() {
            var that = this;
            var url = "/index.php/Wap/Homemake/thisTime.html";
            var p = $http.post(url);
            p.success(function(response, header, config, status) {
                if (response.status == 1) {
                    that.serverTimeStamp = response.data;
                }
            });
        }
    };
})

.factory('popup', function($ionicPopup, $timeout) {
    var alertPopup = function(title, template, templateUrl, okText, okType, callback) {
        $ionicPopup.alert({
            title: !!title ? title : '', // String. 弹窗的标题。
            subTitle: '', // String (可选)。弹窗的子标题。
            template: !!template ? template : '', // String (可选)。放在弹窗body内的html模板。
            templateUrl: !!templateUrl ? templateUrl : '', // String (可选)。 放在弹窗body内的html模板的URL。
            okText: !!okText ? okText : '确定', // String (默认: 'OK')。OK按钮的文字。
            okType: !!okType ? okType : '', // String (默认: 'button-positive')。OK按钮的类型。
        }).then(callback)
    };
    var confirmPopup = function(title, template, callback, cancelback, cancelText, okText, templateUrl, cancelType, okType, scope) {
        var popconfirm = $ionicPopup.confirm({
            title: !!title ? title : '', // String. 弹窗标题。
            subTitle: '', // String (可选)。弹窗的副标题。
            template: !!template ? template : '', // String (可选)。放在弹窗body内的html模板。
            templateUrl: !!templateUrl ? templateUrl : '', // String (可选)。放在弹窗body内的一个html模板的URL。
            cancelText: !!cancelText ? cancelText : '取消', // String (默认: 'Cancel')。一个取消按钮的文字。
            cancelType: !!cancelType ? cancelType : '确定', // String (默认: 'button-default')。取消按钮的类型。
            okText: !!okText ? okText : '', // String (默认: 'OK')。OK按钮的文字。
            okType: !!okType ? okType : '', // String (默认: 'button-positive')。OK按钮的类型。
            scope: scope
        });
        popconfirm.then(function(res) {
            if (res) {
                callback()
            } else {
                if (!!cancelback) {
                    cancelback();
                }
            }
        });
        return popconfirm;
    };

    var tipPopup = function(str) {
        var timer = null;
        var html = '<span>' + str + '</span>';
        var creatDiv = document.createElement("div");
        creatDiv.setAttribute("id", "tipDrop");
        creatDiv.innerHTML = html;
        document.querySelector("body").appendChild(creatDiv);
        timer = $timeout(function() {
            document.querySelector("body").removeChild(document.querySelector("#tipDrop"));
            timer = null;
        }, 1000)
    }
    return {
        alert: alertPopup,
        confirm: confirmPopup,
        tip: tipPopup
    }
})

.factory('loading', function($ionicLoading) {
    return {
        show: function() {
            $ionicLoading.show({
                content: 'loading',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
            });
        },
        hide: function() {
            $ionicLoading.hide();
        }
    }
})

.factory('getDateStr', function() {
    return {
        AddDay: function(AddDayCount) {
            var dd = new Date();
            dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
            var y = dd.getFullYear();
            var m = dd.getMonth() + 1; //获取当前月份的日期
            var d = dd.getDate();
            if (m < 10) m = "0" + m;
            if (d < 10) d = "0" + d;
            return y + "-" + m + "-" + d;
        },
        beforeDay: function(beforeDayCount) {
            var dd = new Date();
            dd.setDate(dd.getDate() - beforeDayCount); //获取AddDayCount天后的日期
            var y = dd.getFullYear();
            var m = dd.getMonth() + 1; //获取当前月份的日期
            var d = dd.getDate();
            if (m < 10) m = "0" + m;
            if (d < 10) d = "0" + d;
            return y + "-" + m + "-" + d;
        },
        getWeek: function(day) {
            if (typeof(day) == "string") day = day.replace('T', ' ').replace(/-/g, '/');
            var dd = new Date(day);
            var weekday = new Array(7);
            weekday[0] = "星期日";
            weekday[1] = "星期一";
            weekday[2] = "星期二";
            weekday[3] = "星期三";
            weekday[4] = "星期四";
            weekday[5] = "星期五";
            weekday[6] = "星期六";
            return weekday[dd.getDay()];
        },
        Current: function() {
            var dd = new Date();
            var y = dd.getFullYear();
            var m = dd.getMonth() + 1;
            var d = dd.getDate();
            var h = dd.getHours();
            var mi = dd.getMinutes();
            var s = dd.getSeconds();
            return (y + '-' + m + '-' + d + 'T' + h + ':' + mi + ':' + s);
        },
        CurDate: function() { //返回格式  2016-09-01
            var dd = new Date();
            var y = dd.getFullYear();
            var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);
            var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
            return (y + '-' + m + '-' + d);
        },
        CurTime: function() { //返回格式  2016-09-01T01:05:09
            var dd = new Date();
            var y = dd.getFullYear();
            var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);
            var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
            var h = dd.getHours() < 10 ? "0" + dd.getHours() : dd.getHours();
            var mi = dd.getMinutes() < 10 ? "0" + dd.getMinutes() : dd.getMinutes();
            var s = dd.getSeconds() < 10 ? "0" + dd.getSeconds() : dd.getSeconds();
            return (y + '-' + m + '-' + d + 'T' + h + ':' + mi + ':' + s);
        },
        CurHours: function() { //返回格式  2016-09-01T01:05:09
            var dd = new Date();
            var h = dd.getHours();
            return h;
        },
        GetDate: function(val) {
            if (typeof(day) == "string") day = day.replace('T', ' ').replace(/-/g, '/');
            var dd = new Date(val);
            var y = dd.getFullYear();
            var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);; //获取当前月份的日期
            var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
            return y + "-" + m + "-" + d;
        },
        GetTime: function(val) {
            if (typeof(val) == "string") val = val.replace('T', ' ').replace(/-/g, '/');
            var dd = new Date(val);
            var y = dd.getFullYear();
            var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);; //获取当前月份的日期
            var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
            var h = dd.getHours() < 10 ? "0" + dd.getHours() : dd.getHours();
            var mi = dd.getMinutes() < 10 ? "0" + dd.getMinutes() : dd.getMinutes();
            var s = dd.getSeconds() < 10 ? "0" + dd.getSeconds() : dd.getSeconds();
            return y + "-" + m + "-" + d + 'T' + h + ':' + mi + ':' + s;
        },
        getDateAdd: function(val, AddDayCount) {
            if (typeof(val) == "string") val = val.replace('T', ' ').replace(/-/g, '/');
            var dd = new Date(val);
            dd.setDate(dd.getDate() + AddDayCount); //获取相对于val,AddDayCount天后的日期
            var y = dd.getFullYear();
            var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);
            var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
            var h = dd.getHours() < 10 ? "0" + dd.getHours() : dd.getHours();
            var mi = dd.getMinutes() < 10 ? "0" + dd.getMinutes() : dd.getMinutes();
            var s = dd.getSeconds() < 10 ? "0" + dd.getSeconds() : dd.getSeconds();
            return (y + '-' + m + '-' + d + 'T' + h + ':' + mi + ':' + s);
        }
    }

})

.factory('compareTime', function() { //返回时间差 天/小时
    return {
        differDays: function(time1, time2) {
            return (Date.parse(time1.replace("T", " ").replace(/-/g, '/')) - Date.parse(time2.replace("T", " ").replace(/-/g, '/'))) / (1000 * 60 * 60 * 24);
        },
        differHours: function(time1, time2) {
            return (Date.parse(time1.replace("T", " ").replace(/-/g, '/')) - Date.parse(time2.replace("T", " ").replace(/-/g, '/'))) / (1000 * 60 * 60);
        },
        diffeMinutes: function(time1, time2) {
            return (Date.parse(time1.replace("T", " ").replace(/-/g, '/')) - Date.parse(time2.replace("T", " ").replace(/-/g, '/'))) / (1000 * 60);
        },
    }

})

.factory('compareTimeStr', function(getDateStr, compareTime) {
    return function(obj) {
        var now = getDateStr.CurTime();
        if (compareTime.diffeMinutes(now, obj) < 60) {
            return Math.ceil(compareTime.diffeMinutes(now, obj)) + '分钟前';
        }
        if ((compareTime.differHours(now, obj) < 24) && (compareTime.differHours(now, obj) >= 1)) {
            return Math.floor(compareTime.differHours(now, obj)) + '小时前';
        }
        if ((new Date(obj).getDate()) == (new Date().getDate() - 1)) {
            return '昨天';
        }
        if ((compareTime.differDays(now, obj) > 1) && (compareTime.differDays(now, obj) <= 7)) {
            return Math.floor(compareTime.differDays(now, obj)) + '天前';
        }
        if (compareTime.differDays(now, obj) > 7) {
            return new Date(obj.replace("T", " ").replace(/-/g, '/')).getFullYear() + "年" +
                (new Date(obj.replace("T", " ").replace(/-/g, '/')).getMonth() + 1) + "月" +
                new Date(obj.replace("T", " ").replace(/-/g, '/')).getDate() + "日";
        }
    }
})