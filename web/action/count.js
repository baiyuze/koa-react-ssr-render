export const set = (value) => ({
  type: 'SET_COUNTER'
});

export const computedAdd = () => (dispatch, state) => {
  dispatch(set());
}