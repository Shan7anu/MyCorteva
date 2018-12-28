angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope, $location) {
        $scope.videoBlock = true;
        $scope.releatedVideoBlock = false;
        $scope.articleBlock = false;
        $scope.showUser = false;
        $scope.videolist = [];
        $scope.carousel = [];
        $scope.freevideolist = [];

        if (localStorage.getItem("userDetails"))
            $scope.IsRegistered = true;
        else
            $scope.IsRegistered = false;

        /*     $scope.goToRegistration = function() {
                    $scope.IsRegistered ? window.location.href="" : window.location.href="navto://Registration"
                } */
        $scope.goToRegistration = function () {
            console.log("Register Clicked");
            $location.path('/registration');
        }

        document.addEventListener("deviceready", doClick, false);

        function doClick() {
            cq.mobile.context.getEntity("carousel", 'collection', true, function (result) {
                result.getChildren(function (entLst) {
                    console.log(JSON.stringify(entLst));
                    $scope.carousel = entLst.entities;
                    $scope.$apply(function () {
                        for (var i = 0; i < entLst.entities.length; i++) {
                            (function (entity) {
                                entity.getThumbnailImage(1920, 546, function (data) {
                                    entity.metadata.articleImage = data;
                                });
                            })($scope.carousel[i]);

                        }
                    });

                }, function () {
                    console.log("failed for: ");

                });
            }, function () {
                console.log("error on 1st getEntity()");

            });

            cq.mobile.context.getEntity("freevideos", 'collection', true, function (result) {
                result.getChildren(function (entLst) {
                    console.log(JSON.stringify(entLst));
                    $scope.freevideolist = entLst.entities;
                    $scope.$apply(function () {
                        for (var i = 0; i < entLst.entities.length; i++) {
                            (function (entity) {
                                entity.getThumbnailImage(1920, 1080, function (data) {
                                    entity.metadata.articleImage = data;
                                    //document.getElementById(entity.metadata.entityName).src = data;
                                });
                            })($scope.freevideolist[i]);

                        };
                    });

                }, function () {
                    console.log("failed for: ");

                });
            }, function () {
                console.log("error on 1st getEntity()");

            });

            cq.mobile.context.getEntity("Videos", 'collection', true, function (result) {
                result.getChildren(function (entLst) {
                    console.log(JSON.stringify(entLst));
                    $scope.videolist = entLst.entities;
                    $scope.$apply(function () {
                        for (var i = 0; i < entLst.entities.length; i++) {
                            (function (entity) {
                                entity.getThumbnailImage(1920, 1080, function (data) {
                                    entity.metadata.articleImage = data;
                                });
                            })($scope.videolist[i]);

                        }
                    });

                }, function () {
                    console.log("failed for: ");

                });
            }, function () {
                console.log("error on 1st getEntity()");

            });



            cq.mobile.context.getEntity("RelatedVideos", 'collection', true, function (result) {
                result.getChildren(function (entLst) {
                    console.log(JSON.stringify(entLst));
                    $scope.relatedList = entLst.entities;
                    // for(var i = 0; i<$scope.arraylist.length; i++){


                }, function () {
                    console.log("failed for: ");

                });
            }, function () {
                console.log("error on 1st getEntity()");

            });


            cq.mobile.context.getEntity("Articles", 'collection', true, function (result) {
                result.getChildren(function (entLst) {
                    console.log(JSON.stringify(entLst));
                    $scope.articleList = entLst.entities;
                }, function () {
                    console.log("failed for: ");

                });
            }, function () {
                console.log("error on 1st getEntity()");

            });

        }

        $scope.videoblock = function () {

            $scope.videoBlock = true;
            $scope.releatedVideoBlock = false;
            $scope.articleBlock = false;

        };

        $scope.relatedVideo = function () {
            $scope.videoBlock = false;
            $scope.releatedVideoBlock = true;
            $scope.articleBlock = false;
        };

        $scope.article = function () {
            $scope.videoBlock = false;
            $scope.releatedVideoBlock = false;
            $scope.articleBlock = true;
        };

        $scope.goFullscreen = function (id) {
            var element = document.getElementById(id);
            if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullScreen) {
                element.webkitRequestFullScreen();
            }
        };







        function openCity(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
        }



    })
    /* Community Tab Ctrl */
    .controller('CommunityCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
        console.log("Inside CommunityCtrl");
        $scope.pagetitle = "Write Post";
        $scope.ge = growerEnquiry;
        $scope.selectCrop = selectCrop;
        $scope.button = button;
        $scope.attachFile = function () {
            alert('Imagine being taken to Gallery!');
        };
        $scope.goToRetailEnquiry = function () {
            /* $location.path('/growerEnquiry'); */
            alert('Imagine being taken to RetailEnquiry!');
        };
    }])
    /* Library Tab Ctrl */
    .controller('LibraryCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    })
    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })


    /* Header Controller */
    .controller('headerCtrl', ['$rootScope', '$location', '$scope', '$location', function ($rootScope, $location, $scope, $location) {
        console.log("Inside headerCtrl");
        $scope.close = function () {
            console.log('close pressed');
        }
        $scope.backButton = function () {
            console.log('backButton pressed');
            history.back();
        }
    }])
    /* Registration Controller */
    .controller('RegistrationCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
        console.log("Inside registrationCtrl");
        $scope.registration = registration;
        $scope.professionType = professionType;

        $scope.uploadDP = function () {
            console.log("uploadDP");
            /* Upload Picture Logic and remove below navigation */
            $location.path('/profile');
            //alert("Navigate to Profile Screen");
        }
        $scope.sendOTP = function () {
            console.log("sendOTP");
            /* $location.path('/otp'); */
            alert("Navigate to OTP Screen");
        }
        $scope.signup = function () {
            console.log("signup");
            /* $location.path('/otp'); */
            alert("Navigate to OTP Screen");
        }

    }])
    /* Profile Controller*/
    .controller('profileCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
        console.log("Inside profileCtrl");
        $scope.pagetitle = "Profile";
        $scope.profile = profile;
        $scope.userData = userData;
        $scope.navigateTo = function (to, event) {
            alert('Imagine being taken to \'' + to + '\' Screen!');
        };
    }]);