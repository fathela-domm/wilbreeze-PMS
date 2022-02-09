export const initialState = {
    user: null,
    company: "Wilbreeze Investments Ltd",
    address: "Nairobi, Kenya",
    email: "wilbreezelimited@yahoo.com",
    phone: "+254 777 788 410",
    whatsappnumber: "254777788410",
    author: "domm mbugua"
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }

        default:
            return state;
    }
}