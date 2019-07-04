import React from 'react';
import styled from '@emotion/styled'
import Square from './Square'

const StyledRow = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 300px;
`

const Row = ({ row = [], y }) => {
  return (
    <StyledRow>
      {
        row.map((square, i) => (
          <Square square={square} key={i} x={i} y={y} />)
        )
      }
    </StyledRow>
  )
}

export default Row