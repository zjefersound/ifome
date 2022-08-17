import "tailwindcss-react-native/types.d";

import type { TouchableOpacityProps } from "react-native";
declare module "react-native" {
  interface TouchableOpacityProps {
    className?: string;
    rw?: string;
  }
}
