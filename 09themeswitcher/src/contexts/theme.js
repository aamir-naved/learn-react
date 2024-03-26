import {createContext, useContext} from 'react'
/*
This code snippet defines a theme context for managing the application's theme mode and provides hooks for consuming the theme context within components. Let's break down its structure and functionality:
*/
export const ThemeContext = createContext({
    themeMode: "light,",
    darkTheme: () => {},
    lightTheme: () => {}
})

/*
Creates a new context named ThemeContext using the createContext function from React.
Initializes the context with default values:
themeMode: Represents the current theme mode, defaulted to "light".
darkTheme and lightTheme: Empty functions representing the actions to switch between dark and light themes.
*/

export const ThemeProvider = ThemeContext.Provider; 

/*
Exports ThemeProvider which is the Provider component of the ThemeContext.
This component is used to wrap the application and provide the theme context to all its descendants.
*/

export default function useTheme(){
    return useContext(ThemeContext);
}

/*
Defines a custom hook named useTheme that uses the useContext hook to consume the ThemeContext.
This hook is intended to be used in functional components to access the current theme mode and theme-switching functions.
*/

/*
Reasoning:
Theme Context:

Reasoning: Creating a theme context allows components to share and access theme-related data and functions without prop drilling.
Effect on Application: This promotes a centralized approach to managing the application's theme, making it easier to maintain and update.
Default Values:

Reasoning: Providing default values (themeMode, darkTheme, lightTheme) ensures that components consuming the theme context have initial values, even if they are not explicitly provided by a ThemeProvider.
Effect on Application: Components can rely on these default values to ensure consistent behavior, even if a ThemeProvider is not explicitly used.
useTheme Hook:

Reasoning: Exporting a custom hook (useTheme) encapsulates the logic for consuming the theme context, making it easier to reuse across components.
Effect on Application: Components can use the useTheme hook to access theme-related data and functions in a concise and efficient manner, enhancing code readability and maintainability.
*/