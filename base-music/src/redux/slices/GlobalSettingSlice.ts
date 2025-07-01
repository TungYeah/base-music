import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
    language: string;
}

const initialState: SettingsState = {
    language: "en",
};

const globalSettingSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
        },
    },
});

export const { setLanguage } = globalSettingSlice.actions;
export default globalSettingSlice.reducer; 