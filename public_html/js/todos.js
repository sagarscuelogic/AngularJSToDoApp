/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var app = angular.module('todo', []),
            todos = [{
                    text: 'This is first todo',
                    isDone: false
                }, {
                    text: 'This is secong todo',
                    isDone: false
                }];

    app.controller('ToDoController', function () {
        this.todos = todos;
        this.todo = {};

        this.add = function () {
            this.todos.push(this.todo);
            this.todo = {};
        };
    });

    app.filter('capitalize', function () {
        return function (input, scope) {
            if(input) return input.substring(0, 1).toUpperCase() + input.substring(1);
        }
    });
})();