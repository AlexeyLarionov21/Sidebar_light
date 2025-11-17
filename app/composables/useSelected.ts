export const useSelected = () => {
  const activeID = useState<number | string>("menu-active-id", () => 1);

  const setActive = (id: number | string) => {
    activeID.value = id;
  };

  const isActive = (id: number | string) => activeID.value === id;

  return {
    activeID,
    setActive,
    isActive,
  };
};
