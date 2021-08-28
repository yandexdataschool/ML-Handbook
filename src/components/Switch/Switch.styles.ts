import styled from 'styled-components';

export const WBmode = styled.label`
  display: none;

  @media screen and (min-width: 768px) {
    --thumb-size: 16px;
    --thumb: rgba(255, 255, 255, 1);

    --track-size: calc(var(--thumb-size) * 3);
    --track-padding: 2px;
    --track-inactive: rgba(229, 229, 229, 1);
    --track-active: rgba(59, 72, 86, 1);

    --thumb-color: var(--thumb);
    --track-color-inactive: var(--track-inactive);
    --track-color-active: var(--track-active);

    --isLTR: 1;

    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: space-between;

    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    &:dir(rtl) {
      --isLTR: -1;
    }

    & > input {
      --thumb-position: 0%;
      --thumb-transition-duration: 0.25s;

      padding: var(--track-padding);
      background: var(--track-color-inactive);
      inline-size: var(--track-size);
      block-size: var(--thumb-size);
      border-radius: var(--track-size);

      appearance: none;
      pointer-events: none;
      touch-action: pan-y;
      border: none;
      outline-offset: 5px;
      box-sizing: content-box;

      flex-shrink: 0;
      display: grid;
      align-items: center;
      grid: [track] 1fr / [track] 1fr;

      transition: background-color 0.25s ease;

      &::before {
        --highlight-size: 0;
        content: '';
        cursor: pointer;
        pointer-events: auto;
        grid-area: track;
        inline-size: var(--thumb-size);
        block-size: var(--thumb-size);
        background: var(--thumb-color);
        border-radius: 50%;
        transform: translateX(var(--thumb-position));
      }

      &:checked {
        background: var(--track-color-active);
        --thumb-position: calc((var(--track-size) - 100%) * var(--isLTR));
      }

      &:indeterminate {
        --thumb-position: calc(calc(calc(var(--track-size) / 2) - calc(var(--thumb-size) / 2)) * var(--isLTR));
      }

      &:disabled {
        cursor: not-allowed;
        --thumb-color: transparent;

        &::before {
          cursor: not-allowed;
          box-shadow: inset 0 0 0 2px hsl(0 0% 100% / 50%);
        }
      }
    }
  }
`;

export const Theme = styled.p`
  font-family: inherit;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  color: rgba(59, 72, 86, 1);
`;

export const Tumbler = styled.input``;
