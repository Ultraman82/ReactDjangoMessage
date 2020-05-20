const initialStat = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoaing: false,
  user: null,
};

export default function (state = initialStat, action) {
  switch (action) {
    default:
      return state;
  }
}
