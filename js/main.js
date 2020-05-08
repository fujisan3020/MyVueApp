(function() {
  'use strict';

  // two way data binding (to UI)
  // data と UI を結び付けるという意味で、双方向というのは data を更新すれば UI が更新されて、 UI を更新すれば data が更新されるという意味

  var vm = new Vue({
    // el: Element
    el: '#app',
    data: {
      newItem: '',
      todos: [
        'task 1',
        'task 2',
        'task 3',
      ]
    },
    methods: {
      // addItem: function(e) {
      //   e.preventDefault();
      //   this.todos.push(this.newItem);
      // }
      addItem: function() {
        //newItemの内容がtodosの末尾に追加される
        this.todos.push(this.newItem);
        this.newItem = '';
      }
    }
  });
})();
