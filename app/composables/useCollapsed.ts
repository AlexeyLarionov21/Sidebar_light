export const useCollapsed = () => {
  const isCollapsed = useState("sidebar-collapse", () => false);

  const setCollapsed = () => {
    isCollapsed.value = !isCollapsed.value;
  };

  return {
    isCollapsed,
    setCollapsed,
  };
};
