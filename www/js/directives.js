angular.module('starter.directives', [])


.directive('checkLast', function() {
   return function (scope, element, attrs) {
      if (scope.$last === true) {
         element.ready(function() {  // or maybe $timeout
            cq.mobile.context.getEntity("Videos", 'collection', true, function(result) {
                result.getChildren(function(entLst) {
                    console.log(JSON.stringify(entLst));
                    $scope.videolist = entLst.entities;
                    for (var i = 0; i < entLst.entities.length; i++) {
                        (function(entity) {
                            entity.getThumbnailImage(1920, 1080, function(data) {
                                entity.metadata.articleImage = data;
                                if(localStorage.getItem("userDetails"))
                                document.getElementById(entity.metadata.entityName).src = data;
                            });
                        })($scope.videolist[i]);

                    }

                }, function() {
                    console.log("failed for: ");

                });
            }, function() {
                console.log("error on 1st getEntity()");

            });
         });
      }
   }
})

/*PrimaryButton Directive*/
.directive('primaryButton', function () {
    return {
        scope: true,
        restrict: 'A',
        templateUrl: "templates/components/primary-button.html",
        link: function (scope, element, attrs) {
            scope.btnText = attrs.type;
            scope.arialabel = attrs.arialabel;
        },
    };
})
/*PrimaryButtonRectangle Directive*/
.directive('primaryButtonRect', function () {
    return {
        scope: true,
        restrict: 'A',
        templateUrl: "templates/components/primary-button-rect.html",
        template: '',
        link: function (scope, element, attrs) {
            scope.btnTextRect = attrs.type;
            scope.arialabel = attrs.arialabel;
        },
    };
})
/*SecondaryButton Directive*/
.directive('secondaryButton', function () {
    return {
        scope: true,
        restrict: 'A',
        templateUrl: "templates/components/secondary-button.html",
        link: function (scope, element, attrs) {
            scope.btnTextSec = attrs.type;
            scope.arialabel = attrs.arialabel;
        },
    };
})
/*SubmitButtonRectangle Directive*/
.directive('submitButtonRect', function () {
    return {
        scope: true,
        restrict: 'A',
        templateUrl: "templates/components/submit-button-rect.html",
        link: function (scope, element, attrs) {
            scope.btnTextSubmit = attrs.type;
            scope.arialabel = attrs.arialabel;
        },
    };
});