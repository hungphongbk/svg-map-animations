import { AspectRatio } from "@hungphongbk/vth-sdk";
import { sxFullSize } from "@hungphongbk/vth-sdk/utils/predefinedSx";
import { Box, styled, SvgIcon } from "@mui/material";
import background from "./Background.png";
import Content from "./Content";

const StyledAspectRatio = styled(AspectRatio)`
  @keyframes StrokeLine {
    0% {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: -200;
    }
  }
`;

type FirstSlideProps = {};
export default function FirstSlide(props: FirstSlideProps): JSX.Element {
  return (
    <StyledAspectRatio
      ratio={"1920/928"}
      sx={{
        "& img": {
          ...sxFullSize,
          top: 0,
          left: 0,
          objectFit: "cover",
          position: "absolute",
          zIndex: -1,
        },
      }}
    >
      <Box>
        <img src={background} />
        <SvgIcon
          viewBox={"0 0 1920 928"}
          sx={{ width: "100%", height: "100%" }}
        >
          <Content />
        </SvgIcon>
      </Box>
    </StyledAspectRatio>
  );
}
