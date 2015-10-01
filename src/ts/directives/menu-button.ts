var searchButtonTemplate = `
<button class="menu-button">
    <i class="icon ion-navicon"></i>
</button>
`;


app.directive('menuButton', function() {
    return {
        replace: true,
        restrict: 'E',
        template: searchButtonTemplate
    };
});