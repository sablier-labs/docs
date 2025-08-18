import styled from "@emotion/styled";
import ArrowIcon from "@heroicons/react/24/outline/ArrowTopRightOnSquareIcon";
import A from "@theme-original/MDXComponents/A";
import { useMemo } from "react";

const Arrow = styled.span`
  display: inline-block;
  vertical-align: middle;
  color: var(--ifm-link-color);
  svg {
    margin-left: 2px;
    margin-bottom: -1px;
    height: 16px;
    width: 16px;
    stroke-width: 2px;
  }
`;

export default function AWrapper(props) {
  const isIndependent = useMemo(() => {
    const value = props.children;

    if (typeof value === "number") {
      return true;
    }

    if (typeof value === "string") {
      if (!value.startsWith("0x") && Number.isInteger(parseInt(value, 10))) {
        return true;
      }
      if (value === "↩") {
        return true;
      }
    }

    return false;
  }, [props]);

  return (
    <A {...props} style={{ display: "inline-flex" }}>
      {props.children || null}
      {!isIndependent && (
        <Arrow>
          <ArrowIcon />
        </Arrow>
      )}
    </A>
  );
}
