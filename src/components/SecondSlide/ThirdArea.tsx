import { SvgIcon, SvgIconProps } from "@mui/material";
import { useSlideContext } from "./Context";

type ThirdArea = SvgIconProps;
export default function ThirdArea(props: ThirdArea): JSX.Element {
  const { areaProps } = useSlideContext("third");
  return (
    <SvgIcon
      width="361.463"
      height="423.151"
      viewBox="0 0 361.463 423.151"
      {...props}
    >
      <path
        id="Path_8"
        data-name="Path 8"
        d="M1204.5,4121.129l.123,4.791,4.725.553.245,11.117-2.823,2.088.061,3.869,2.7.123.061,13.082-2.761,1.781v3.93l3.007.246-.307,13.2-2.639,1.966-.123,3.624,2.823.061-.307,13.389-2.209,1.9v3.623h2.761l-.245,13.635-2.884,1.781.368,3.5,2.393-.246.123,13.942-2.639,1.413v3.623h2.639l.245,14.126-2.7,1.474-.061,3.747h2.761v13.818l-2.823,1.352.307,3.624h2.516l-.43,14.433-2.27,1.229.245,3.5,2.454-.062-.245,14.188-2.639.86v3.562l2.884.062-.307,14.74-2.577.859.245,3.747,2.639-.369-.245,14.74-2.455.86.061,3.562,2.639-.184-.245,14.74-2.332.983-.061,2.825,2.393.308-.061,14.986-2.393.553.1,2.974,2.35.281-.061,15.109-2.393.737-.061,3.132,2.761.061-.245,14.986-2.332.614.061,3.685,2.271-.062.245,14.8-3.2,1.511-.036,1.7,3.238.845L1306.7,4435.3l256.1,4.831.245-8.23-3.436-.123-.123-13.266,3.314-.246-.3-8.272-2.641-.2-.368-13.021,3.436-1.1.368-7.726h-3.314l-.123-13.279,2.946-.491.368-7.493-3.314-.737-.245-13.144,3.068-.614.736-8.107h-3.8l.123-13.143,2.967-.725.347-7.751-3.559-.368.353-12.592.015-.552,2.7-.492-.123-7.861-2.7-.492.368-12.283,2.7-1.6.491-7.616-3.8-.368.123-12.9,2.823-.492.614-8.229-2.823-.614-.614-12.775,3.314-.491.368-7.984-3.757-.755.566-13,2.945-.245-.123-8.23-2.7-.123.123-12.9,2.455-.737.368-7.984h-3.314l.123-13.021,2.823-1.965.736-6.756-3.436-.368-.368-12.529,3.191-1.228.614-8.353h-3.927l.123-12.529,3.191-1.106.123-7.493-3.191-.982-.123-11.792,2.946-1.966.368-7.616-3.436-.614-.123-11.792,3.191-1.474.736-7.862h-4.173l.491-.737.245-8.967,5.983-3.823v-4.554l-261.081-39.639Z"
        transform="translate(-1204.504 -4023.611)"
        {...areaProps}
      />
    </SvgIcon>
  );
}
