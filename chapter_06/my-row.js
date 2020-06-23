`use strict`

Vue.component('my-row', {
    template: '<tr><td>{{id}}</td><td>{{name}}</td><td>{{price}}（円）</td></tr>',
    props: ['id', 'name', 'price']
});
