/**
 * 路由
 */
angular.module('IonicClub.router', [])
    .config(['$provide', '$stateProvider', '$urlRouterProvider', function($provide, $stateProvider, $urlRouterProvider) {
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        })

        //以下以tab为母版
        .state('tab', {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html"
        })

        //首页
        .state('tab.index', {
                url: '/index',
                views: {
                    'tab-index': {
                        templateUrl: 'templates/tab-index/tab-index.html',
                        controller: 'tabIndexCtrl'
                    }
                }
            })
            //信息列表
            .state('tab.mail', {
                url: '/mail',
                views: {
                    'tab-mail': {
                        templateUrl: 'templates/tab-mail/tab-mail.html',
                        controller: 'MailCtrl'
                    }
                }
            })
            //读信息
            .state('tab.readMail', {
                url: '/mail/readMail',
                params: { "mailId": null, "inbox": 1 }, //邮件id,是否为收件
                views: {
                    'tab-mail': {
                        templateUrl: 'templates/tab-mail/tab-mail-read.html',
                        controller: 'ReadMailCtrl'
                    }
                }
            })
            //写信息
            .state('tab.writeMail', {
                url: '/mail/writeMail',
                views: {
                    'tab-mail': {
                        templateUrl: 'templates/tab-mail/tab-mail-write.html',
                        controller: 'WriteMailCtrl'
                    }
                }
            })



        //公告管理
        .state('tab.notice', {
            url: '/notice',
            views: {
                'tab-notice': {
                    templateUrl: 'templates/tab-notice/tab-notice.html',
                    controller: 'NoticeCtrl'
                }
            }
        })

        //通讯录
        .state('tab.contacts', {
            url: '/tab-index/contacts',
            views: {
                'tab-index': {
                    templateUrl: 'templates/tab-index/contacts.html',
                    controller: 'ContactsCtrl'
                }
            }
        })

        //待办事项
        .state('tab.backlog', {
            url: '/tab-index/backlog',
            views: {
                'tab-index': {
                    templateUrl: 'templates/tab-index/backlog.html',
                    controller: 'BacklogCtrl'
                }
            }
        })

        //新建工作
        .state('tab.newwork', {
                url: '/tab-index/newwork',
                views: {
                    'tab-index': {
                        templateUrl: 'templates/tab-index/newwork.html',
                        controller: 'NewworkCtrl'
                    }
                }
            })
            //新建工作详情
            .state('tab.newworkdetail', {
                url: '/tab-index/newwork/newworkdetail',
                params: { "FlowNumber": null, "FormId": null },
                views: {
                    'tab-index': {

                        templateUrl: 'templates/tab-index/newwork-detail.html',
                        controller: 'NewworkdetailCtrl'
                    }
                }
            })

        //个人中心
        .state('tab.account', {
            url: '/account',
            views: {
                'tab-account': {
                    templateUrl: 'templates/tab-account/tab-account.html',
                    controller: 'AccountCtrl'
                }
            }
            //              ,resolve: {
            //                  validater: ['$location', 'localStorageService', function ($location, localStorageService) {
            //                      var loginInfo = localStorageService.get('User');
            //                      if (!loginInfo) {
            //                          $location.path('/login');
            //                      }
            //                  }]
            //              }
        })

        $urlRouterProvider.otherwise('tab/index');
    }])