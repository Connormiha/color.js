import Color, {util} from "./src/color.js";
import "./src/spaces/lab-lch.js";
import "./src/spaces/srgb.js";
import "./src/spaces/hsl.js";
import "./src/spaces/p3.js";
import "./src/spaces/a98rgb.js";
import "./src/spaces/prophoto.js";
import "./src/spaces/rec2020.js";

window.Color = window.Color || Color;
Color.util = util;

export default Color;
export {util};
