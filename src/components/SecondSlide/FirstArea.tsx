import { SvgIcon, SvgIconProps } from "@mui/material";
import { useContext } from "react";
import { SlideContext } from "./Context";

type FirstAreaProps = SvgIconProps;
export default function FirstArea(props: FirstAreaProps): JSX.Element {
  const [content, setContent] = useContext(SlideContext);
  return (
    <SvgIcon
      width="339.764"
      height="153.04"
      viewBox="0 0 339.764 153.04"
      {...props}
    >
      <path
        className={"pointable"}
        d="M1608.826,1314.541l-242.755-49.053-97.009,124.835v-25.967l97.009-127.073,242.755,50.334Z"
        transform="translate(-1269.061 -1237.283)"
        opacity={content === "first" ? 0.55 : 0}
        onMouseEnter={() => setContent("first")}
        onMouseLeave={() => setContent("")}
      />
    </SvgIcon>
  );
}
