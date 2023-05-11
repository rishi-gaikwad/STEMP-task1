
const initialstate = {
    list: []
}

const TodoReducers = (state = initialstate, action) => {

    switch (action.type) {

        case "ADD_TODO":
            const { data } = action.payload;
            console.log(data);


            return {
                ...state,
                list:
                    [
                        ...state.list,
                        {
                            id: new Date().getTime().toString(),
                            data: data
                        }

                    ]
            }


        case "DELETE_TODO":

            const newList = state.list.filter((elem) => elem.id !== action.id)
            return {
                ...state,
                list: newList
            }

        default: return state;
    }
}
export default TodoReducers;
