import React from "react";
import * as S from "./styles";
import { IProps } from "./types";

export const TileGrid: React.FC<IProps> = ({
  elements,
  columns = 3,
}: IProps) => {
  return (
    <S.Wrapper>
      {elements.map((element: React.ReactNode) => (
        <S.Tile columns={columns}>{element}</S.Tile>
      ))}
    </S.Wrapper>
  );
};
