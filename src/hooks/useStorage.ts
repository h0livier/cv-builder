import React from "react";
import {hasJsonStructure} from "../helpers/json.helper.ts";

export const useStorage = (type: "local" | "session", keyName: string, defaultValue: any) => {

    const storage = type === "local" ? window.localStorage : window.sessionStorage

    const [storedValue, setStoredValue] = React.useState(() => {
        try {
            const value = storage.getItem(keyName);
            const isJson = hasJsonStructure(value);
            if (value && !isJson) return value;
            if (value) {
                return JSON.parse(value);
            } else {
                return defaultValue;
            }
        } catch (err) {
            return defaultValue;
        }
    });

    const setValue = (newValue : any) => {
        try {
            const needStringify = typeof newValue === 'object';
            storage.setItem(keyName, needStringify ? JSON.stringify(newValue) : newValue);
        } catch (err) { /* empty */ }
        setStoredValue(newValue);
    };

    return [storedValue, setValue];
};