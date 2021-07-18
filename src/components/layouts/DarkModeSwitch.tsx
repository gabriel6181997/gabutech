import { useTheme } from "next-themes";
import { useCallback } from "react";
import { MoonSvg } from "src/components/icons/svg/MoonSvg";
import { SunSvg } from "src/components/icons/svg/SunSvg";

export const DarkModeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = useCallback(() => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }, [theme, setTheme]);

  return (
    <button onClick={handleChangeTheme}>
      {theme === "light" && <SunSvg className="w-10 h-10" />}
      {theme === "dark" && <MoonSvg className="w-10 h-10" />}
    </button>
  );
};
