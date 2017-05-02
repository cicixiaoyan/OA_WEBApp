/**
 * 控制器
 */
angular.module('IonicClub.controllers', [])
    // 主题列表
    .controller('TopicsCtrl',
        function($scope, $stateParams, $state, $ionicLoading, $ionicModal,
            localStorageService, IonicService, TabService, $http) {

            // 主题列表参数
            $scope.postData = {
                page: 1,
                tab: 'all',
                limit: 20
            };

            // 新增主题参数
            $scope.topicsData = {
                accesstoken: '',
                title: '',
                tab: '',
                content: ''
            }

            // 获取参数
            if ($stateParams.tab != '') {
                $scope.postData.tab = $stateParams.tab;
            }

            var User = JSON.parse(localStorageService.get('User'));
            if (User) {
                $scope.topicsData.accesstoken = User.accesstoken;
            }

            $scope.topics = [];
            $scope.more = true;
            $scope.loadMore = function() {
                try {
                    IonicService.getTopics($scope.postData).then(function(data) {
                        angular.forEach(data.data, function(item) {
                            $scope.topics.push(item);
                        });
                        $scope.$broadcast('scroll.infiniteScrollComplete');
                        $scope.postData.page++;
                    });
                } catch (ex) {
                    $scope.more = false;
                }
            };

            // 下拉刷新
            $scope.doRefresh = function() {
                $scope.postData.page = 1;
                $scope.postData.tab = 'all';
                $scope.topics = [];
                IonicService.getTopics($scope.postData).then(function(data) {
                    angular.forEach(data.data, function(item) {
                        $scope.topics.push(item);
                    });
                    $scope.postData.page++;
                });
                $scope.$broadcast('scroll.refreshComplete');
            };

            $ionicModal.fromTemplateUrl('templates/Area/topicsAdd.html', {
                scope: $scope
            }).then(function(modal) {
                $scope.oModal = modal;
                $scope.tabs = TabService.getTabs();
            });

            $scope.openModal = function() {
                $scope.oModal.show();
            };

            $scope.closeModal = function() {
                $scope.oModal.hide();
            };

            // 创建主题
            $scope.createTopics = function() {
                $scope.oModal.hide();
                if (User) {
                    IonicService.postTopic($scope.topicsData).then(function(data) {
                        if (data.success) {
                            $ionicLoading.show({
                                template: '发表成功',
                                duration: 500
                            });
                            $state.go('tab.topicDetail', {
                                topicId: data.topic_id
                            });
                        }
                    });
                } else {
                    $ionicLoading.show({
                        template: '请先登录再发表',
                        duration: 1000
                    });
                }
            };
        })



//登录
.controller('LoginCtrl', function($scope, $ionicPopup, $ionicHistory, $state,
    $cordovaBarcodeScanner, localStorageService, AppVersionService,
    IonicService, $ionicSideMenuDelegate, $http) {
    $scope.title = "登录";
    //禁止打开侧边栏
    $ionicSideMenuDelegate.canDragContent(false);

    $scope.user = {};
    $scope.login = function() {
        var data = { UserName: $scope.user.username, UserPass: $scope.user.password };

        $http({
                method: 'POST',
                url: config.serverIp + "ashx/Login.ashx/LoginInfo",
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
            })
            .success(function(result) {
                console.log(result);
                storageHelper.addStorage("userInfo", result[0], true);
                window.location.href = "#/tab/tab-index";
            });
    };

})

// 个人中心
.controller('AccountCtrl', function($scope, $ionicHistory, $state, $ionicModal,
    $ionicActionSheet, $ionicLoading, localStorageService, AppVersionService,
    IonicService, ionicDatePicker, $filter) {

    var userInfo = storageHelper.getStorage("userInfo");
    $scope.user = userInfo ? userInfo : "";
    $scope.user.ui_rzrq = $filter('date')(new Date($scope.user.ui_rzrq), 'yyyy-MM-dd');
    $scope.user.ui_sex = "女" ? "♀" : "♂"; //默认为男
    $scope.user.ui_bgdh = $scope.user.ui_bgdh ? $scope.user.ui_bgdh : "无";
    $scope.user.ui_ssbm = $scope.user.ui_ssbm ? $scope.user.ui_ssbm : "无";
    $scope.user.ui_zw = $scope.user.ui_zw ? $scope.user.ui_zw : "无";
    $scope.user.ui_mail = $scope.user.ui_mail ? $scope.user.ui_mail : "未设置";
    $scope.user.ui_yddh = $scope.user.ui_yddh ? $scope.user.ui_yddh : "未设置";


    // 个人资料修改
    $ionicModal.fromTemplateUrl('templates/Area/account-edit.html', {
        id: '1',
        scope: $scope
    }).then(function(modal) {
        $scope.oModal1 = modal;
    });

    // 密码修改
    $ionicModal.fromTemplateUrl('templates/Area/account-passwordedit.html', {
        id: '2',
        scope: $scope
    }).then(function(modal) {
        $scope.oModal2 = modal;
    });

    $scope.openModal = function(index) {
        switch (index) {
            case 1:
                $scope.showEditBtn = false;
                $scope.oModal1.show();
                break;
            case 2:
                $scope.data = {};
                $scope.oModal2.show().then(function() {

                });
                break;
        }
    };

    $scope.closeModal = function(index) {
        switch (index) {
            case 1:
                $scope.showEditBtn = false;
                $scope.oModal1.hide();
                break;
            case 2:
                $scope.data = {};
                $scope.oModal2.hide();
                break;
        }
    };

    $scope.checkSex = function() {
        $ionicActionSheet.show({
            buttons: [{
                    text: '男'
                },
                {
                    text: '女'
                },
            ],
            //					destructiveText: 'Delete',
            titleText: '<em class="">选择性别</em>',
            cancelText: '取消',
            buttonClicked: function(index) {
                user.sex = (index == 0) ? "男" : "女";
            }
        });
    };

    $scope.checkBirthday = function() {
        var dateConfig = {
            showTodayButton: false, //true  false  
            inputDate: new Date($scope.user.birthday ? $scope.user.birthday : ""),
            from: new Date(new Date().getTime() - 50 * 360 * 24 * 60 * 60 * 1000),
            to: new Date(),
            dateFormat: "yyyy-MM-dd",
            callback: function(val) {
                alert(val);
            }
        };
        ionicDatePicker.openDatePicker(dateConfig);
    };

    $scope.savePassword = function(dataForm) {
        if (dataForm.$valid) { //成功为 true 否则为 false  
            if ($scope.data.confirmPassword == $scope.data.newPassword) {
                delete $scope.data.confirmPassword;
                LoginService.changepassword($scope.data)
                    .$promise.then(function(resp) {
                        if (resp.success) { //修改成功  
                            popupUtil.showAlert('提示', '密码修改成功');

                            $state.go('login'); //跳转登录页面  

                        } else {
                            popupUtil.showAlert('提示', '密码修改失败');
                        }
                    }, function(err) {

                    });
            } else {
                popupUtil.showAlert('提示', '两次密码输入不正确');
            }
        }
    }
})

//首页
.controller('IndexCtrl', function($scope, localStorageService, IonicService, TabService) {
    $scope.badges = { message: 0 };

    $scope.Menu = TabService;

    var User = JSON.parse(localStorageService.get('User'));

    if (User) {
        IonicService.getMessageCount(User.accesstoken).then(function(data) {
            $scope.badges.message = data.data;
        })
    }
})

//首页
.controller('tabIndexCtrl', function($scope, localStorageService, IonicService, TabService) {
    console.log("***首页***")

})


//消息
.controller('MailCtrl', function($scope, $ionicPopup, $ionicHistory, $state,
    $cordovaBarcodeScanner, localStorageService,
    AppVersionService, $ionicPopover, $ionicModal, popup) {
    $scope.title = "收件箱";
    $scope.inbox = true;


    //测试数据
    $scope.inboxList = [{
            jsyjid: "1",
            jsbt: "信息主题1", //接受主题
            fsrName: "系统管理员", //发送人姓名
            fsrID: "121", //发送人id
            fssj: "2012-12-12 12:12:12", //接收时间
            jssj: "2012-12-12 12:12:12", //发送时间
            jsrIDs: "123,456,789", //接收人ids
            jsnr: "新公章[公章]发布，默认密码为123456，请您尽快修改密码！", //接受内容
            yjfj: "", //--邮件附件
            jszt: "已读" //zhuagt
        },
        {
            jsyjid: "2",
            jsbt: "信息主题2", //接受标题
            fsrName: "系统管理员", //发送人姓名
            fsrID: "121", //发送人id
            fssj: "2012-12-12 12:12:12", //接收时间
            jssj: "2012-12-12 12:12:12", //发送时间
            jsrIDs: "123,456,789", //接收人ids
            jsnr: "新公章[公章]发布，默认密码为123456，请您尽快修改密码！", //接受内容
            yjfj: "236.png", //--邮件附件
            jszt: "未读" //状态
        }
    ];
    $scope.outboxList = [{
            jsyjid: "1",
            jsbt: "信息主题3", //接受主题
            fsrName: "系统管理员", //发送人姓名
            fsrID: "121", //发送人id
            fssj: "2012-12-12 12:12:12", //接收时间
            jssj: "2012-12-12 12:12:12", //发送时间
            jsrIDs: "123,456,789", //接收人ids
            jsnr: "你该交作业了3", //接受内容
            yjfj: "", //--邮件附件
            jszt: "已读" //zhuagt
        },
        {
            jsyjid: "2",
            jsbt: "信息主题4", //接受标题
            fsrName: "系统管理员", //发送人姓名
            fsrID: "121", //发送人id
            fssj: "2012-12-12 12:12:12", //接收时间
            jssj: "2012-12-12 12:12:12", //发送时间
            jsrIDs: "123,456,789", //接收人ids
            jsnr: "你该交作业了4", //接受内容
            yjfj: "236.png", //--邮件附件
            jszt: "未读" //状态
        }
    ];

    $scope.mailDetail = [];

    $scope.checkSomeone = function($index) {
        $scope.people[$index].check = !$scope.people[$index].check;

    };

    $scope.checkBtn = { read: false, unread: true, all: false };

    //选择已读、未读
    $scope.check = function(name) {
        $scope.checkBtn = {
            read: false,
            unread: false,
            all: false
        };
        $scope.checkBtn[name] = true;
    };

    $scope.isDraft = false;
    //选择草稿箱、发件箱
    $scope.checkDraft = function(bol) {
        if (bol) {
            $scope.isDraft = true;
        } else {
            $scope.isDraft = false;
        }
    };


    var availHeight = window.screen.availHeight;

    //收件箱
    $scope.showInbox = function() {
        $scope.inbox = true;
    };
    //发件箱
    $scope.showOutbox = function() {
        $scope.inbox = false;
    };

    //             var msgContent = document.getElementById("msgContent");
    //             msgContentTop = msgContent.getBoundingClientRect().top;
    //             msgContent.style.height = availHeight - (msgContentTop - availHeight) - 57 + "px";


    $scope.doRead = function(mailId) {
        $state.go("tab.readMail", { mailId: mailId, inbox: 1 });
    };

    $scope.doWrite = function() {
        window.location.href = "#/tab/mail/writeMail";
    };

    $scope.data = { page: 1, size: 8 }; //默认请求第一页，每页显示8条数据

    //下拉刷新
    $scope.doRefresh = function() {
        $scope.moredata = false;
        //$scope.mailList = [];//链接服务器时取消注释
        $scope.data.page = 1;
        //$scope.ajax($scope.data);//此为请求数据
        $scope.$broadcast('scroll.refreshComplete', 2000);
    };

    //上拉加载更多
    $scope.loadMore = function() {
        if (!$scope.moredata) {
            $scope.$broadcast('scroll.infiniteScrollComplete');
            return;
        } else {
            $scope.data.page++;
            //$scope.ajax($scope.data);//此为请求数据
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }
    };
})

//读邮件+回复
.controller('ReadMailCtrl', function($scope, $ionicPopup, $ionicHistory, $state, localStorageService,
    AppVersionService, $ionicPopover, popup, $stateParams, $cordovaFileTransfer) {

    var mailId = $stateParams.mailId,
        inbox = $stateParams.inbox;

    //测试数据
    $scope.mailList = [{
            jsyjid: "1",
            jsbt: "信息主题1", //接受主题
            fsrName: "系统管理员", //发送人姓名
            fsrID: "121", //发送人id
            fssj: "2012-12-12 12:12:12", //接收时间
            jssj: "2012-12-12 12:12:12", //发送时间
            jsrIDs: "123,456,789", //接收人ids
            jsnr: "你该交作业了1", //接受内容
            yjfj: "", //--邮件附件
            jszt: "已读" //zhuagt
        },
        {
            jsyjid: "2",
            jsbt: "信息主题2", //接受标题
            fsrName: "系统管理员", //发送人姓名
            fsrID: "121", //发送人id
            fssj: "2012-12-12 12:12:12", //接收时间
            jssj: "2012-12-12 12:12:12", //发送时间
            jsrIDs: "123,456,789", //接收人ids
            jsnr: "你该交作业了2", //接受内容
            yjfj: "236.png", //--邮件附件
            jszt: "未读" //状态
        }
    ];

    angular.forEach($scope.mailList, function(data, index) {
        if (data.jsyjid === mailId) {
            $scope.mailDetail = data;
        }
    });
    $scope.downloadProgress = "";

    $scope.downloadFile = function(pathurl) {
        var url = "http://upload.jianshu.io/users/upload_avatars/1764965/438bdac9635f?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144";
        var filename = url.split("/").pop();
        alert(filename);
        var targetPath = cordova.file.externalRootDirectory + filename;
        var trustHosts = true
        var options = {};
        // alert(cordova.file.externalRootDirectory);
        $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
            .then(function(result) {
                // Success!
                alert("success");
                alert(JSON.stringify(result));
            }, function(error) {
                // Error
                alert("error");
                alert(JSON.stringify(error));
            }, function(progress) {
                $timeout(function() {
                    $scope.downloadProgress = (progress.loaded / progress.total) * 100;
                })
            });

    };

})

//写邮件
.controller('WriteMailCtrl', function($scope, $ionicPopover, popup) {
    //$timeout, $cordovaFileTransfer,$cordovaImagePicker

    $scope.people = [];

    /* 选择收件人--start */
    $ionicPopover.fromTemplateUrl('templates/Area/mail-checkpeople.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.popover = popover;
    });

    $scope.openPopover = function($event) {
        $scope.getPeopleList();
        $scope.popover.show($event);
    };
    $scope.closePopover = function() {
        $scope.popover.hide();
    };

    // 在隐藏浮动框后执行
    $scope.$on('popover.hidden', function() {
        // 执行代码
    });
    // 移除浮动框后执行
    $scope.$on('popover.removed', function() {
        // 执行代码
    });

    $scope.$on('$destroy', function() {
        $scope.popover.remove();
    });

    $scope.mail = {
        jsrIDs: "", //--接收人群编码
        jsrNames: "", // --接收人群名称
        fsbt: "", // --邮件标题
        fsnr: "", // --邮件内容
        zyjb: "1", // --重要级别
        yncg: 1, //--是否草稿
        // scbz:"",// --删除标志
        // msbz:"",// --密送标志
        yjfj: "123.PNG", // --邮件附件
        fslx: "", // --发送类型
        fsrID: "123", // --发送人ID
        fsrName: "本人", // --发送人姓名
        fssj: "2012-12-12" //--发送时间
    };

    //发送mailSende
    $scope.mailSende = function() {
        popup.alert("信息已发送");
    };

    //保存到草稿
    $scope.adddraft = function() {
        popup.alert("信息已保存到草稿箱");
    };


    //打开文件夹添加附件
    $scope.filePicture = function() {
        var options = {
            maximumImagesCount: 10,
            width: 800,
            height: 800,
            quality: 80
        };
        $cordovaImagePicker.getPictures(options)
            .then(function(results) {
                $scope.filePath = results[0];
                $scope.logtext = $scope.logtext + $scope.filePath + "选择图片\n";
                $scope.uploadFile();
            }, function(error) {
                // error getting photos
            });
    };
    $scope.uploadFile = function() {

        // $cordovaFileTransfer.upload(server, $scope.filePath, {})
        //     .then(function(result) {
        //         // Success!
        //         $scope.logtext = $scope.logtext + "上传成功\n";
        //     }, function(err) {
        //         // Error
        //     }, function(progress) {
        //         // constant progress updates
        //         $scope.uploadProgress = parseInt((progress.loaded / progress.total) * 100);
        //     });


    };

    $scope.checkSomeone = function($index) {
        $scope.people[$index].check = !$scope.people[$index].check;
    };
    //获取通讯人员
    $scope.getPeopleList = function() {

        $scope.people = [
            { id: "1", username: "admin", bianhao: "dewr", bumen: "本部", zhiwei: "职员" },
            { id: "2", username: "admin", bianhao: "dewr", bumen: "本部", zhiwei: "职员" },
            { id: "3", username: "admin", bianhao: "dewr", bumen: "本部", zhiwei: "职员" }
        ];

        for (var i in $scope.people) {
            var obj = $scope.people[i];
            obj.checked = false;
        }
    };

    /* 选择收件人--end */
})

//消息详情
.controller('MessageDetailCtrl', function($scope, $ionicHistory, $state, localStorageService, IonicService) {
    $scope.message = {
        sender: "系统管理员",
        carbonCopy: "lili",
        senderTime: "2012-12-12 12:12:12"
    };
})

//公告
.controller('NoticeCtrl', function($scope, $ionicModal, ajaxHelper, $http, $cordovaFileTransfer) { //

    //详情模版
    $ionicModal.fromTemplateUrl('templates/Area/notice-detail.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.detailModal = modal;
    });
    $scope.modalOpen = function(ggid) {
        $http({
                method: 'POST',
                url: "http://192.168.0.70:80/ashx/Notice.ashx/noticeById",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: function(obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: { action: "noticeById", id: ggid }
            })
            .success(function(data, status, header, config) {
                $scope.detailNotice = data[0];
                console.log($scope.detailNotice);
                var top = document.getElementById("header").offsetHeight;
                document.getElementById("noticeContent").style.top = top + 10 + "px";


            })
            .error(function(err) { console.log(err) });


        $scope.detailModal.show();
    };

    $scope.modalClose = function(name, msgId) {
        $scope.detailModal.hide();
    };

    $scope.$on('$destroy', function() {
        $scope.detailModal.remove();
    });
    // Execute action on hide modal
    $scope.$on('detailModal.hidden', function() {
        // Execute action
    });
    // Execute action on remove modal
    $scope.$on('detailModal.removed', function() {
        // Execute action
    });




    $scope.noticeList = [];

    //search
    $scope.search = function(key) { //传关键字，搜索，返回通讯录列表	
        $http({
            method: 'POST',
            url: "http://192.168.0.70:80/ashx/Notice.ashx/noticeBykeyWords",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformRequest: function(obj) {
                var str = [];
                for (var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: { action: "noticeBykeyWords", page: 1, title: "" + escape(key) + "" }
        }).success(
            function(data, status, header, config) {
                // deferred.resolve(data);
                console.log(data);

            });
    };

    $scope.data = { page: 1, size: 0 }; //默认请求第一页，每页显示8条数据

    $scope.getNoticeList = function(size) {
        $http({
                method: 'POST',
                url: "http://192.168.0.70:80/ashx/Notice.ashx/noticeall",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: function(obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: { action: "noticeall", page: 1, size: size }
            })
            .success(function(data, status, header, config) {
                if (!data || data == []) $scope.moredata = false;
                else $scope.noticeList = $scope.noticeList.concat(data);

                console.log($scope.noticeList, data)
            })
            .error(function(err) { console.log(err) });

    };


    //下拉刷新
    $scope.doRefresh = function() {
        $scope.moredata = true;
        $scope.noticeList = []; //链接服务器时取消注释
        $scope.data.size = 1;
        $scope.getNoticeList(1);
        $scope.$broadcast('scroll.refreshComplete', 2000);
    };

    $scope.moredata = true;

    //上拉加载更多
    $scope.loadMore = function() {
        if (!$scope.moredata) {
            $scope.$broadcast('scroll.infiniteScrollComplete');
            return;
        } else {
            $scope.data.size++;
            //$scope.ajax($scope.data);//此为请求数据
            $scope.getNoticeList($scope.data.size);
            $scope.$broadcast('scroll.infiniteScrollComplete', 2000);
        }
    };


    //测试数据
    // $scope.noticeList = [{
    //     ggid: "1", // --自动增长id
    //     ggzt: "公告储蓄额大佛阿萨德你绿能", // --公告主题
    //     ggnr: "多大点事多所所胜多负少的GV是", // --公告内容
    //     kssj: "2017-04-12 12:22", // --开始时间
    //     jssj: '2017-04-17 12:22', // --结束时间
    //     fjmc: "awfda1.png", // --附件名称
    //     fjlj: "sdfsf/sdfs/sad", //--附件路径
    //     zt: 1, //--状态
    //     lrr: "系统管理员", // --录入人
    //     lrsj: "2017-04-12 12:22", // --录入时间
    //     htm: "casd.htm", // --静态htm文件名称
    //     gglb: "活动安排", // --公告类别
    //     ggfj: "sadas.png" // --公告附件
    // }];


    //获取公告内容
    $scope.getNotice = function() {
        var icons = [{
            image: "ion-image",
            folder: "ion-ios-folder",
            vidio: "ion-ios-videocam",
        }]
    };
    // 附件下载
    $scope.downloadFile = function(pathurl) {
        var url = pathurl;
        var filename = url.split("/").pop();
        alert(filename);
        var targetPath = cordova.file.externalRootDirectory + filename;
        var trustHosts = true
        var options = {};
        // alert(cordova.file.externalRootDirectory);
        $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
            .then(function(result) {
                // Success!
                alert(JSON.stringify(result));
            }, function(error) {
                // Error
                alert(JSON.stringify(error));
            }, function(progress) {
                $timeout(function() {
                    $scope.downloadProgress = (progress.loaded / progress.total) * 100;
                })
            });
    }

})

//通讯录
.controller('ContactsCtrl', function($scope, $ionicModal, $http) {

    //详情模版
    $ionicModal.fromTemplateUrl('templates/Area/contacts-detail.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.detailModal = modal;
    });
    $scope.modalOpen = function(ui_id) {
        alert(ui_id)
        $http({
                method: 'POST',
                url: "http://192.168.0.70:80/ashx/MailList.ashx/YH_ById",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: function(obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: { action: "YH_ById", id: ui_id }
            })
            .success(function(data, status, header, config) {
                $scope.checkman = data[0];
            })
            .error(function(err) { console.log(err) });
        $scope.detailModal.show();
    };

    $scope.modalClose = function(name, msgId) {
        $scope.detailModal.hide();
    };

    $scope.$on('$destroy', function() {
        $scope.detailModal.remove();
    });
    // Execute action on hide modal
    $scope.$on('detailModal.hidden', function() {
        // Execute action
    });
    // Execute action on remove modal
    $scope.$on('detailModal.removed', function() {
        // Execute action
    });


    $scope.data = { page: 1, size: 8 }; //默认请求第一页，每页显示8条数据

    //下拉刷新
    $scope.doRefresh = function() {
        $scope.moredata = false;
        //$scope.peopleList = [];//链接服务器时取消注释
        $scope.data.page = 1;
        //$scope.ajax($scope.data);//此为请求数据
        $scope.$broadcast('scroll.refreshComplete', 2000);
    };

    //上拉加载更多
    $scope.loadMore = function() {
        if (!$scope.moredata) {
            $scope.$broadcast('scroll.infiniteScrollComplete');
            return;
        } else {
            $scope.data.page++;
            //$scope.ajax($scope.data);//此为请求数据
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }
    };

    $scope.call = function(num) {
        window.open("tel:" + num);
    };

    $scope.getPeopleList = function() {
        $http({
                method: 'POST',
                url: "http://192.168.0.70:80/ashx/MailList.ashx/Yh_List",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: function(obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: { action: "Yh_List", page: 1, size: 1 }
            })
            .success(function(data, status, header, config) {
                $scope.peopleList = data;
            })
            .error(function(err) { console.log(err) });
    };

    //search
    $scope.search = function(key) { //传关键字，搜索，返回通讯录列表	
        $http({
                method: 'POST',
                url: "http://192.168.0.70:80/ashx/MailList.ashx/noticeBykeyWords",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: function(obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: { action: "noticeBykeyWords", page: 1, size: 1, title: "" + escape(key) + "" }
            })
            .success(
                function(data, status, header, config) {
                    // deferred.resolve(data);
                    console.log(data);

                })
            .error(function(error) {
                alert("error:" + error)
            });
    };


    $scope.getPeopleList();
})

//待办事项
.controller('BacklogCtrl', function($scope, $ionicModal) {

    //详情模版
    $ionicModal.fromTemplateUrl('templates/Area/backlog-detail.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.detailModal = modal;
    });
    $scope.modalOpen = function() {
        $scope.detailModal.show();
    };

    $scope.modalClose = function(name, msgId) {
        $scope.detailModal.hide();
    };

    $scope.$on('$destroy', function() {
        $scope.detailModal.remove();
    });
    // Execute action on hide modal
    $scope.$on('detailModal.hidden', function() {
        // Execute action
    });
    // Execute action on remove modal
    $scope.$on('detailModal.removed', function() {
        // Execute action
    });

    $scope.done = false; //默认显示未处理
    //未处理
    $scope.showNotDone = function() {
        $scope.done = false;
    };
    //已处理
    $scope.showDone = function() {
        $scope.done = true;
    };

    //c测试数据
    $scope.list = [{
        wTitle: "测试123",
        fnName: "ss", //当前步骤
        ReviewMode: "正在审批", //审批模式
        ui_desc: "系统管理员" //发起人
    }];


    $scope.data = { page: 1, size: 8 }; //默认请求第一页，每页显示8条数据

    //下拉刷新
    $scope.doRefresh = function() {
        $scope.moredata = false;

        //$scope.peopleList = [];//链接服务器时取消注释
        $scope.data.page = 1;
        //$scope.ajax($scope.data);//此为请求数据
        $scope.$broadcast('scroll.refreshComplete', 2000);
    };

    //上拉加载更多
    $scope.loadMore = function() {
        if (!$scope.moredata) {
            $scope.$broadcast('scroll.infiniteScrollComplete');
            return;
        } else {
            $scope.data.page++;
            //$scope.ajax($scope.data);//此为请求数据
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }
    };

})

//新建工作
.controller('NewworkCtrl', function($scope, $state) {
    //测试数据
    $scope.list = [{
            wfName: "测试工作流1",
            wfNo: "2", //工作编号
            FK_fid: "1234" //表单id

        },
        {
            wfName: "测试工作流2",
            wfNo: "2", //工作编号
            FK_fid: "1234" //表单id

        },
        {
            wfName: "测试工作流3",
            wfNo: "2", //工作编号
            FK_fid: "1234" //表单id

        }
    ];

    $scope.addWork = function($index) {
        var item = $scope.list[$index];
        $state.go("tab.newworkdetail", { FlowNumber: item.wfNo, FormId: item.FK_fid });
    };

})

//新建工作详情
.controller('NewworkdetailCtrl', function($scope, $stateParams) {

    var FlowNumber = $stateParams.FlowNumber,
        FormId = $stateParams.FormId;

    console.log("FlowNumber: " + FlowNumber + ", FormId: " + FormId);
    $scope.firstStep = true;

    $scope.title = "新建工作";
    //下一页
    $scope.showNext = function() {
        $scope.title = "选择审批人员";
        $scope.firstStep = false;
    };

    //上一页
    $scope.showFirst = function() {
        $scope.title = "新建工作";
        $scope.firstStep = true;
    };

    $scope.phoneNotification = false;
    $scope.siteNotification = false;

    $scope.msgNotification = function(obj) {
        if (obj == 'site') {
            $scope.siteNotification = !$scope.siteNotification;
        } else {
            $scope.phoneNotification = !$scope.phoneNotification;
        }

    }

    ;

})