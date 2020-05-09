(function() {
  'use strict';

  // two way data binding (to UI)
  // data と UI を結び付けるという意味で、双方向というのは data を更新すれば UI が更新されて、 UI を更新すれば data が更新されるという意味

  var vm = new Vue({
    // el: Element
    el: '#app',
    data: {
      newItem: '',
      todos: [{
        title: 'task 1',
        isDone: false
      }, {
        title: 'task 2',
        isDone: false
      }, {
        title: 'task 3',
        isDone: true
      }]
    },
    methods: {
      // addItem: function(e) {
      //   e.preventDefault();
      //   this.todos.push(this.newItem);
      // }
      addItem: function() {
        var item = {
          title: this.newItem,
          isDone: false
        };
        //item(newItem)の内容がtodosの末尾に追加される
        this.todos.push(item);
        this.newItem = '';
      },
      deleteItem: function(index) {
        if (confirm('are you sure?')) {
          //index番目から1つ削除する
          this.todos.splice(index, 1);
        }
      },
      purge: function(index) {
        if (!confirm('delete finished?')) {
          return;
        }
          // this.todos = this.todos.filter(function(todo) {
          //   return !todo.isDone;
          // });
          this.todos = this.remaining;
      }
    },
    computed: {
      remaining: function () {
        // var items = this.todos.filter(function(todo) {
        //   return !todo.isDone;
        // });
        // return items.length;
        return this.todos.filter(function(todo) {
          return !todo.isDone;
        });
      }
    }
  });
})();
