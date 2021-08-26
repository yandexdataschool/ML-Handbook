import styled from 'styled-components';

export const WBmode = styled.label`
  display: none;
  --brand: var(--brand-light);
  --text1: var(--text1-light);
  --surface1: var(--surface1-light);
  --brand-hue: 200;
  --brand-saturation: 100%;
  --brand-lightness: 50%;
  --brand-light: hsl(var(--brand-hue) var(--brand-saturation) var(--brand-lightness));
  --text1-light: hsl(var(--brand-hue) var(--brand-saturation) 10%);
  --surface1-light: hsl(var(--brand-hue) 25% 100%);
  --brand-dark: hsl(var(--brand-hue) calc(var(--brand-saturation) / 2) calc(var(--brand-lightness) / 1.5));
  --text1-dark: hsl(var(--brand-hue) 15% 85%);
  --surface1-dark: hsl(var(--brand-hue) 10% 10%);
  @media screen and (min-width: 768px) {
    --thumb-size: 16px;
    --thumb: hsl(0 0% 100%);

    --track-size: calc(var(--thumb-size) * 3);
    --track-padding: 2px;
    --track-inactive: hsl(80 0% 80%);
    --track-active: rgba(59, 72, 86, 1);

    --thumb-color: var(--thumb);
    --thumb-color-highlight: var(--thumb-highlight);
    --track-color-inactive: var(--track-inactive);
    --track-color-active: var(--track-active);

    --isLTR: 1;

    display: flex;
    align-items: center;
    gap: 2ch;
    justify-content: space-between;

    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    @media (prefers-color-scheme: dark) {
      & {
        --thumb: hsl(0 0% 5%);
        --thumb-highlight: hsl(0 0% 100% / 25%);
        --track-inactive: hsl(80 0% 35%);
        --track-active: hsl(80 60% 60%);
      }
    }

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
        box-shadow: 0 0 0 var(--highlight-size) var(--thumb-color-highlight);
        border-radius: 50%;
        transform: translateX(var(--thumb-position));

        @media (--motionOK) {
          & {
            transition: transform var(--thumb-transition-duration) ease, box-shadow 0.25s ease;
          }
        }
      }

      &:not(:disabled):hover::before {
        --highlight-size: 0.5rem;
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

          @media (prefers-color-scheme: dark) {
            & {
              box-shadow: inset 0 0 0 2px hsl(0 0% 0% / 50%);
            }
          }
        }
      }
    }
  }
`;

export const Tumbler = styled.input``;
