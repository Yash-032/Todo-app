const mongoose = require("mongoose");

// mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos
// .env
mongoose.connect("mongodb+srv://admin:N4jMhSGKqCSYfLfr@cluster0.ixaxin2.mongodb.net/todoes")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todoes', todoSchema);

module.exports = {
    todo
}