import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colors: {
        body: "#f4e8dc",
        // footer: "#003333",
    },
    // mobile: "768px",
    darkmode: false,
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setDarkTheme(state) {
            state.colors.body = "#1f1f24";
            state.darkmode = true;
        },
        setDefaultTheme(state) {
            state.colors.body = "#f4e8dc";
            state.darkmode = false;
        },
    },
});

export const { setDarkTheme, setDefaultTheme } = themeSlice.actions;

export default themeSlice.reducer;