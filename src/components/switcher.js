import { h } from 'preact';
import { useState } from 'preact/hooks';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { Switch } from 'antd';

const Switcher = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { switcher, status, themes } = useThemeSwitcher();

    const toggleTheme = (isChecked) => {
        setIsDarkMode(isChecked);
        switcher({ theme: isChecked ? themes.dark : themes.light });
    };

    // Avoid theme change flicker
    if (status === "loading") {
        return null;
    }

    return (
        <div className="main fade-in">
            <Switch checked={isDarkMode} onChange={toggleTheme} />
        </div>
    );
}

export default Switcher;
