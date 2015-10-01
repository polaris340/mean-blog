var searchBoxTemplate = `
    <div>
        <div class="input-box">
            <i class="icon ion-search"></i><input type="search" placeholder="{{ placeholder }}" />
        </div>
    </div>
`;


app.directive('searchBox', function () {
    return {
        restrict: 'E',
        template: searchBoxTemplate,
        controller: function($scope, $attrs) {
            $scope.placeholder = $attrs.placeholder;
        }
    };
});