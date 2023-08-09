import "styled-components";
import { RempiConfig } from "./config/rempi.config";

type ITheme = RempiConfig;

declare module "styled-components" {
  export interface DefaultTheme extends RempiConfig {
    [key: string]: any;
  }
}
