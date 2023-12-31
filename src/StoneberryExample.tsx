import "react";
import { CodeExample } from "live-typescript";
import { installStoneberryTypes } from "./StoneberryMonacoTypes.ts";
import "live-typescript/style.css";

export interface StoneberryCodeExampleProps {
  code: string;
  className?: string;
}

export function StoneberryExample(
  props: StoneberryCodeExampleProps
): JSX.Element {
  const packages = ["thimbleberry", "stoneberry/scan", "stoneberry-examples"];
  const { code, className } = props;
  return (
    <CodeExample
      {...{ packages, code, className }}
      setupTypes={installStoneberryTypes}
    ></CodeExample>
  );
}
