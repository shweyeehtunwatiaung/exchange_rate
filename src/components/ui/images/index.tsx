import NextImage from "next/image";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsChat, BsYoutube } from "react-icons/bs";
import { FiHeart, FiUsers } from "react-icons/fi";
import {
  MdError,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdVisibility,
} from "react-icons/md";
import {
  PiCaretDoubleLeft,
  PiCheck,
  PiShoppingCartSimple,
} from "react-icons/pi";
import { RiMessengerFill } from "react-icons/ri";
import { RxDoubleArrowLeft } from "react-icons/rx";

export const Icons = {
  loading: ({ ...props }) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block animate-spin"
        {...props}
      >
        <path
          opacity="0.2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill="currentColor"
        />
        <path
          d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
          fill="currentColor"
        />
      </svg>
    );
  },
  cart: PiShoppingCartSimple,
  downArrow: MdKeyboardArrowDown,
  upArrow: MdKeyboardArrowUp,
  checked: PiCheck,
};

interface Image {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
}

export const Image: React.FC<Image> = ({
  src,
  width,
  className,
  height,
  alt,
  ...props
}: Image) => {
  return (
    <NextImage
      className={className}
      src={src}
      width={width || 0}
      height={height || 0}
      alt={alt}
      {...props}
    />
  );
};
