import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colors: {
        body: "#f4e8dc",
        text: "#1f1f24"
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
            state.colors.text = "#c0955e";
            state.darkmode = true;
        },
        setDefaultTheme(state) {
            state.colors.body = "#f4e8dc";
            state.colors.text = "#178976";
            state.darkmode = false;
        },
    },
});

export const { setDarkTheme, setDefaultTheme } = themeSlice.actions;

export default themeSlice.reducer;