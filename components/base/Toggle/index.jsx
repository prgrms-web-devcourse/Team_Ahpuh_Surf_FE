import styled from '@emotion/styled'
import { useToggle } from 'hooks'
import { forwardRef } from 'react'

const ToggleContainer = styled.label`
  display: inline-block;
  cursor: pointer;
  user-select: none; // 텍스트 드래그 none
`

const ToggleInput = styled.input`
  display: none;

  &:checked + div {
    background-color: lightgreen;
  }

  &:checked + div::after {
    left: calc(100% - 26px);
  }

  &:disabled + div {
    opacity: 0.7;
    cursor: not-allowed;

    &::after {
      opacity: 0.7;
    }
  }
`

const ToggleSwitch = styled.div`
  display: inline-block;
  width: 64px;
  height: 30px;
  padding: 2px;
  border: none;
  border-radius: 15px;
  background-color: #ccc;
  box-sizing: border-box;
  transition: background-color 200ms ease-out;

  &::after {
    content: '';
    position: relative;
    left: 0;
    display: block;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: white;
    transition: left 200ms ease-out;
  }
`

const Toggle = forwardRef(
  ({ isToggle = false, disabled, onChange, ...props }, ref) => {
    const [checked, onToggle] = useToggle(isToggle)
    const handleChange = (e) => {
      onToggle()
      // eslint-disable-next-line no-unused-expressions
      onChange && onChange(e)
    }

    return (
      <ToggleContainer {...props}>
        <ToggleInput
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          ref={ref}
        />
        <ToggleSwitch />
      </ToggleContainer>
    )
  },
)
Toggle.displayName = 'Toggle'
export default Toggle
