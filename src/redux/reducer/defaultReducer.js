import types from "../actionTypes";

export const initialState = {
  accountOwnerInfo: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  },
  token: "",
  loading: false,
  users: [
    { name: "daniel", number: "456", otherInfo: "" },
    { name: "mike", number: "123", otherInfo: "" },
  ],
  transactions: [
    {
      from: { name: "mike", number: "123", otherInfo: "" },
      to: { name: "daniel", number: "456", otherInfo: " " },
      amount: "2000",
      currency: "CAD",
      date: ""
    },
    {
      from: { name: "mike", number: "123", otherInfo: "" },
      to: { name: "daniel", number: "456", otherInfo: " " },
      amount: "2000",
      currency: "CAD",
      date: ""
    },
  ],
};

const defaultReducer = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case types.LOGIN_START:
      return newState;

    case types.LOGIN_SUCCESS:
      const { email, token, id } = action.payload;
      newState.accountOwnerInfo.id = id;
      newState.token = token;
      newState.accountOwnerInfo.email = email;
      return newState;

    case types.LOGIN_FAILED:
      return newState;

    case types.CREATE_USER_START:
      return newState;

    case types.CREATE_USER_SUCCESS:
      const { newUser } = action.payload;
      newState.users.push(newUser);
      return newState;

    case types.CREATE_USER_FAILED:
      return newState;

    case types.LOGOUT:
      return {};

    default:
      return newState;
  }
};

const exportObj = { initialState, reducer: defaultReducer };

export default exportObj;
