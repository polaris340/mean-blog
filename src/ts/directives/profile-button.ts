var profileButtonTemplate = `
    <div>
        <div class="image" style="background-image: url('https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10264287_10203579459670010_339350077709153286_n.jpg?oh=8175f2e3ecff41a3239dc147a2763474&oe=56A71752&__gda__=1452010349_8958113b44eb697e456ed4421d0be3a3');"></div>
    </div>
`;

app.directive('profileButton', function() {
    return {
        restrict: 'E',
        template: profileButtonTemplate,
        controller: function($scope, $element, $attrs) {

        }
    };
});