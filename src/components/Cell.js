import React from "react";

import { StyledCell } from "./styles/styledCell";
import { TETROMINOS } from "../tetrominos";

export default function Cell({ type }) {
  return <StyledCell type={type} color={TETROMINOS[type].color} />;
}
