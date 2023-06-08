import "react";
import { CodeExample } from "code-example";
import { installStoneberryTypes } from "./StoneberryMonacoTypes.ts";

export interface StoneberryCodeExampleProps {
  code: string;
}

export function StoneberryExample(
  props: StoneberryCodeExampleProps
): JSX.Element {
  const packages = ["thimbleberry", "stoneberry/scan", "stoneberry-examples"];
  const { code } = props;
  return (
    <CodeExample
      {...{ packages, code }}
      setupTypes={installStoneberryTypes}
    ></CodeExample>
  );
}
