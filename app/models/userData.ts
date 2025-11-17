import avatarImage from "@/assets/images/avatar.png";

export const userData = () => {
  const avatar = avatarImage;
  const username = "Sara Connor";
  const email = "sara@example.com";

  return {
    avatar,
    username,
    email,
  };
};
