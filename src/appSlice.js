import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDark: false,
    selectedItems: [],
    selectedDots: [],
    disableCheckboxes: true,
    numCards: 2,
    numCols: 4,
    dotStatus: [true, true, true, true, true],
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
        toggleDot: (state, action) => {
            const actionDotIdx = action.payload;
            // If selectedItems has the ID we're looking for then remove it from the array
            if (state.selectedDots.includes(actionDotIdx)) {
                state.selectedDots = state.selectedDots.filter(dotIdx => dotIdx !== actionDotIdx)
                // Otherwise add the ID to the array
            } else {
                state.selectedDots = [...state.selectedDots, actionDotIdx]
            }
        },
        toggleDisableCheckboxes: (state) => {
            state.disableCheckboxes = !state.disableCheckboxes;
        },
        changeNumCards: (state, action) => {
            state.numCards = action.payload;
        },
        changeNumCols: (state, action) => {
            state.numCols = action.payload;
        },
        changeDotStatus: (state, action) => {
            state.dotStatus[action.payload] = false;
        },
        resetState: (state) => {
            state.isDark = false;
            state.selectedItems = [];
            state.disableCheckboxes = true;
            state.numCards = 2;
            state.numCols = 4;
            state.dotStatus = [true, true, true, true, true, true, true];
        },
    },
});

export const { toggleIsDark, toggleItem, toggleDot, toggleDisableCheckboxes, changeNumCards, changeNumCols, changeDotStatus, resetState } = appSlice.actions;

export const selectIsDark = (state) => state.app.isDark;
export const selectSelectedItems = (state) => state.app.selectedItems;
export const selectSelectedDots = (state) => state.app.selectedDots;
export const selectDisableCheckboxes = (state) => state.app.disableCheckboxes;
export const selectNumCards = (state) => state.app.numCards;
export const selectNumCols = (state) => state.app.numCols;
export const selectDotStatus = (state) => state.app.dotStatus;

export default appSlice.reducer;
