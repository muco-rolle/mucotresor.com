import cx from "clsx";
import Image from "next/image";

export const ProfileImage = ({
  size = "large",
  isInteractive,
}: {
  size: "small" | "large";
  isInteractive?: boolean;
}) => {
  return (
    <div
      className={cx(
        "rounded-full bg-gradient-to-tl from-purple-700/60 to-rose-400/60 shadow-lg",
        {
          "p-[2px]": size === "small",
          "p-[3px]": size === "large",
          "group transform transition ease-out hover:scale-105 hover:from-purple-700 hover:to-rose-400 hover:shadow-rose-500/25 active:translate-y-px":
            isInteractive,
          "ring-[5px] ring-purple-500/10": !isInteractive,
        }
      )}
    >
      <div
        className={cx("rounded-full p-px", {
          "h-[36px] w-[36px]": size === "small",
          "h-[64px] w-[64px]": size === "large",
          "transition duration-300 group-hover:scale-105": isInteractive,
        })}
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1517863798698348545/_xaEvAbG_400x400.jpg"
          alt="A photo of Delba"
          quality={95}
          priority={true}
          className="rounded-full"
          width={size === "small" ? 36 : 64}
          height={size === "small" ? 36 : 64}
        />
      </div>
    </div>
  );
};
