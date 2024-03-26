
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

/*
This code snippet represents the main component of the application (App) responsible for managing the theme mode and rendering other components. Let's break down its structure and functionality:
*/
function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  /*
Initializes state variable themeMode using the useState hook to manage the current theme mode.
Defines functions lightTheme and darkTheme to update the theme mode to "light" and "dark" respectively.
  */

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  /*
Uses the useEffect hook to apply changes in the theme mode.
Removes existing "light" and "dark" classes from the html element and adds the current theme mode class (themeMode).
This ensures that the CSS styles corresponding to the selected theme mode are applied globally.

Also made changes in tailwind.config.js file
  darkMode: "class",

  */

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
  /*
  Wraps the application content with ThemeProvider to provide theme context to its descendants.
Renders UI components including ThemeBtn for toggling theme and Card component.
  */
}

export default App

/*
Reasoning and Effect on Application:
Theme State Management:

Reasoning: Managing the theme mode state (themeMode) and providing functions (lightTheme and darkTheme) to update it allows for dynamic theme switching.
Effect on Application: Users can toggle between light and dark themes, providing them with a personalized visual experience.
Effect for Changing Theme:

Reasoning: Using useEffect to apply changes in the theme mode ensures that theme-related styles are updated whenever the theme mode changes.
Effect on Application: Ensures that the appropriate theme-specific styles are applied globally, maintaining consistency throughout the application.
Rendering Components:

Reasoning: Rendering ThemeBtn and Card components within the ThemeProvider ensures that they have access to the current theme mode and theme-switching functions.
Effect on Application: Allows ThemeBtn to toggle the theme mode and Card to adjust its appearance based on the selected theme, enhancing the user experience with theme-aware components.
*/