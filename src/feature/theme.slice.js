import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colors: {
        header: "linear-gradient(180deg, #000000 0%, #2d5561 100%)",
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
            state.colors.header = "linear-gradient(180deg, #000000 0%, #2d5561 100%)";
            state.colors.body = "#1f1f24";
            state.darkmode = true;
        },
        setDefaultTheme(state) {
            state.colors.header = "linear-gradient(180deg, #28b6be 0%, #ebd5b1 100%)";
            state.colors.body = "#f4e8dc";
            state.darkmode = false;
        },
    },
});

export const { setDarkTheme, setDefaultTheme } = themeSlice.actions;

export default themeSlice.reducer;