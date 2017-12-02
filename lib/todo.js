new Vue ({
  el: "#app",
  data: {
    todo: "",
    list: []
  },
  methods: {
    sendTodo: function () {
      // dataプロパティのlistに追加
      this.list.push({
        text: this.todo,
        status: 'todo'
      })
      // 追加したtodoは消しておく
      this.todo = ""
    },
    doneTodo: function (item) {
      // statusの値を変える
      if (item.status == 'done') {
        item.status = 'todo'
      } else {
        item.status = 'done'
      }
    }
  }
})