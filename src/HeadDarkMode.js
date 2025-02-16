const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (userPrefersDark)
{
    document.getElementById("shortcuticon").href="./icons/dragonfly-white.svg";
}