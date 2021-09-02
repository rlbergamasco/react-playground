import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDark: false,
    selectedItems: ["1", "2"],
    disableCheckboxes: true,
    numCards: 2,
    numCols: 5,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleIsDark: (state) => {
            state.isDark = !state.isDark;
        },
        toggleItem: (state, action) => {
            const actionItemId = action.payload;
            // If selectedItems has the ID we're looking for then remove it from the array
            if (state.selectedItems.includes(actionItemId)) {
                state.selectedItems = state.selectedItems.filter(itemId => itemId !== actionItemId)
                // Otherwise add the ID to the array
            } else {
                state.selectedItems = [...state.selectedItems, actionItemId]
            }
        },
        toggleDisableCheckboxes: (state) => {
            state.disableCheckboxes = !state.disableCheckboxes;
        }
    },
});

export const { toggleIsDark, toggleItem, toggleDisableCheckboxes } = appSlice.actions;

export const selectIsDark = (state) => state.app.isDark;
export const selectSelectedItems = (state) => state.app.selectedItems;
export const selectDisableCheckboxes = (state) => state.app.disableCheckboxes;
export const selectNumCards = (state) => state.app.numCards;
export const selectNumCols = (state) => state.app.numCols;

export default appSlice.reducer;
