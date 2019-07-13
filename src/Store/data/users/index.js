import { createSlice, createSelector } from 'redux-starter-kit'
import { wipeData, updateData } from 'store/data/commonActions'
import populate from './populate'

// INITIAL STATE
const initialState = {}

// SLICE
const { reducer } = createSlice({
  slice: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [wipeData]: () => initialState,
    [updateData]: (state, { payload }) => {
      if (payload.tag) {
        payload.tag.forEach(item => (state[item.id] = item))
      }
    },
  },
})

// REDUCER
export default reducer

// ACTIONS
// ...

// SELECTORS
export const getUsers = createSelector(
  ['data.user'],
  users => users
)

export const getPopulatedUsers = createSelector(
  ['data.instrument', 'data.country', 'data.user'],
  (instruments, countries, users) => {
    const result = {}
    for (const id in users) {
      result[id] = populate(instruments, countries, users[id])
    }
    return result
  }
)

export const getPopulatedUser = (state, id) => getPopulatedUsers(state)[id]

export const getRootUser = state => {
  const users = getPopulatedUsers(state)
  for (const id in users) {
    if (!users[id].parent) return users[id]
  }
}
