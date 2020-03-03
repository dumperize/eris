import TodoStore from "./todoStore";

const initialState = [
    {id: 1, title: "Action 1", complete: false},
    {id: 2, title: "Action 2", complete: true},
]
class RootStore {
    constructor () {
        this.todoStore = new TodoStore(this, initialState);
    }
}

export default new RootStore;