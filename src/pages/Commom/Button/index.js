import React from 'react';
import styled, { css } from 'styled-components'
import './styles.css'

const PrimaryButton = css`
  background-color: #FF7C67;
  color: #FFF;
`

const SecondaryButton = css`
  background-color: #24292E;
  color: #FFF;
`

const OutlineButton = css`
  background-color: #FFF;
  color: #FF7C67;
  border: 1px solid #FF7C67;

  &:hover {
    background-color: #FF7C67;
    color: #FFF;
  }
`

const SmallButton = css`
  width: 135px;
`

const LargeButton = css`
  width: 280px;
`


const ButtonStyled = styled.button`
  border: none;
  border-radius: 2px;
  padding: 6px 12px;
  height: 40px;
  transition: ease-in-out 200ms;
  font-weight: 600;
  margin-right: 4px;

  &:hover {
    opacity: 0.8;
  }

  ${props => props.primary && PrimaryButton}
  ${props => props.secondary && SecondaryButton}
  ${props => props.small && SmallButton}
  ${props => props.large && LargeButton}
  ${props => props.outline && OutlineButton}
`

export default function Button(props) {
  return (
    <ButtonStyled
      primary={props.primary}
      secondary={props.secondary}
      small={props.small}
      large={props.large}
      outline={props.outline}
    >
      {props.context}
    </ButtonStyled>
  );
}
