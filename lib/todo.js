new Vue ({
  el: "#app",
  data: {
    todo: "",
    list: ["hoge", "fuga"] // 確認用
  },
  methods: {
    sendTodo: function () {
      // dataプロパティのlistに追加
      this.list.push(this.todo)
      // 追加したtodoは消しておく
      this.todo = ""
    }
  }
})