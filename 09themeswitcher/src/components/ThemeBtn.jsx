import React from 'react'
import useTheme from '../contexts/theme';

export default function ThemeBtn() {

    const { themeMode, lightTheme, darkTheme } = useTheme();

    /*
Destructures values (themeMode, lightTheme, darkTheme) from the useTheme hook.
useTheme hook is assumed to be a custom hook that provides access to theme-related context, such as the current theme mode and functions to switch between light and dark themes.
    */
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) {
            darkTheme()
        } else {
            lightTheme()
        }
    }
    /*
Defines an onChangeBtn function that takes an event (e) as an argument.
Retrieves the checked status of the input element (presumably a checkbox) triggering the event.
If the darkModeStatus is true (indicating the user wants to switch to dark mode), it calls the darkTheme function provided by the theme context.
If the darkModeStatus is false (indicating the user wants to switch to light mode), it calls the lightTheme function provided by the theme context.
    */
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode === "dark"}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}

/*

Reasoning:
Theme Context Usage:

Reasoning: By using the useTheme hook, the component can access theme-related context, such as the current theme mode (themeMode) and functions to switch between themes (lightTheme and darkTheme).
Effect on Application: This promotes separation of concerns and encapsulation, allowing the ThemeBtn component to focus solely on the UI aspect of theme toggling, while the logic for theme management is handled by the theme context.
Toggle Functionality:

Reasoning: The onChangeBtn function responds to user interactions with the theme toggle button (e.g., checkbox).
Effect on Application: Users can easily switch between light and dark themes by interacting with the toggle button, providing them with control over the application's appearance based on their preferences.
Function Invocation:

Reasoning: Depending on the status of the toggle button (darkModeStatus), the appropriate theme function (darkTheme or lightTheme) is invoked.
Effect on Application: Invoking the correct theme function ensures that the application's theme changes dynamically in response to user actions, providing a seamless and responsive user experience.
*/