(function() {
  'use strict';

  // two way data binding (to UI)
  // data と UI を結び付けるという意味で、双方向というのは data を更新すれば UI が更新されて、 UI を更新すれば data が更新されるという意味

  var vm = new Vue({
    // el: Element
    el: '#app',
    data: {
      newItem: '',
      todos: []
    },
    //watch: 指定したデータの変更を監視する
    watch: {
      // todos: function() {
      //   localStorage.setItem('todos', JSON.stringify(this.todos));
      //   alert('Date saved!');
      // }
      todos: {
        handler: function() {
          localStorage.setItem('todos', JSON.stringify(this.todos));
          // alert('Date saved!');
        },
        deep: true
      }
    },
    mounted: function() {
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
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
