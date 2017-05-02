/**
 * 指令
 */
angular.module('IonicClub.directives', [])
    //延迟滚动
    .directive('lazyScroll', ['$rootScope', '$timeout',
        function ($rootScope, $timeout) {
            return {
                restrict: 'A',
                link: function ($scope, $element) {
                    var scrollTimeoutId = 0;
                    $scope.invoke = function () {
                        $rootScope.$broadcast('lazyScrollEvent');
                    };
                    $element.bind('scroll', function () {
                        $timeout.cancel(scrollTimeoutId);
                        // wait and then invoke listeners (simulates stop event)
                        scrollTimeoutId = $timeout($scope.invoke, 0);
                    });
                }
            };
        }])
    //图片延迟加载
    .directive('lazySrc', ['$document', '$timeout',
        function ($document, $timeout) {
            return {
                restrict: 'A',
                link: function ($scope, $element, $attributes) {
                    var deregistration = $scope.$on('lazyScrollEvent', function () {
                            //console.log('scroll');
                            if (isInView()) {
                                $element[0].src = $attributes.lazySrc; // set src attribute on element (it will load image)
                                deregistration();
                            }
                        }
                    );

                    function isInView() {
                        var clientHeight = $document[0].documentElement.clientHeight;
                        var clientWidth = $document[0].documentElement.clientWidth;
                        var imageRect = $element[0].getBoundingClientRect();
                        return (imageRect.top >= 0 && imageRect.bottom <= clientHeight) && (imageRect.left >= 0 && imageRect.right <= clientWidth);
                    }

                    // bind listener
                    // listenerRemover = scrollAndResizeListener.bindListener(isInView);

                    // unbind event listeners if element was destroyed
                    // it happens when you change view, etc
                    $element.on('$destroy', function () {
                        deregistration();
                    });

                    // explicitly call scroll listener (because, some images are in viewport already and we haven't scrolled yet)
                    $timeout(function () {
                        if (isInView()) {
                            $element[0].src = $attributes.lazySrc; // set src attribute on element (it will load image)
                            deregistration();
                        }
                    }, 500);
                }
            };
        }])
    //隐藏底部tab
    .directive('hideTabs', function($rootScope) {
	    return {
	        restrict: 'A',
	        link: function(scope, element, attributes) {
	            scope.$on('$ionicView.beforeEnter', function() {
	                scope.$watch(attributes.hideTabs, function(value){
	                    $rootScope.hideTabs = value;
	                });
	            });
	
	            scope.$on('$ionicView.beforeLeave', function() {
	                $rootScope.hideTabs = false;
	            });
	        }
	    };
});