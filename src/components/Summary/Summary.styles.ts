import styled from 'styled-components';

const Details = styled.details`
  font-family: YS Text;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;

  .katex-display > .katex {
    text-align: left;
    margin-left: 44px;
  }

  .katex-display > .katex > .katex-html > .tag {
    border: 2px solid black;
    font-size: 18px;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    text-align: center;
  }

  & ol {
    list-style: auto;
    list-style-position: inside;
  }

  & li::marker {
    font-family: serif;
    font-weight: 700;
  }
`;

const Summary = styled.summary`
  list-style: none;
  cursor: pointer;

  &::-webkit-details-marker {
    display: none;
  }

  &::before {
    content: '►';
    font-size: 13px;
    margin-right: 22px;
  }

  [open] &::before {
    content: '▼';
  }
`;

const Content = styled.div`
  border-left: 1px solid #3b4856;
  margin-left: 5px;
  padding-left: 30px;
`;

export { Details, Summary, Content };
