import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
.markdown {
  color: #3a1437;
  h1 {
    color: #02d8ff;
    font-size: 8.421052632rem;
    letter-spacing: -13px;
    line-height: 8.421052632rem;
    font-family: 'Space Mono', monospace;

  }
  h2,h3,h4 {
    color: #52244f;
  }
  h2 {
    margin-bottom: 1.052631579rem;
    font-size: 1.789473684rem;
    line-height: 2.105263158rem;
    font-weight: 600;
  }
  h3 {
    font-size: 1.157894737rem;
    line-height: 1.315789474rem;
    font-weight: 600;
    margin-bottom: 0;
  }
  h4 {
    margin-bottom: 0;
  }
  ul {
    margin-left: 0;
  }
  li {
    margin-bottom: 0;
    margin-left: 1rem;
  }
  a {
    text-decoration: none;
    color: #dd1d64;
    &:hover {
      text-decoration: underline;
    }
  }
  a, code, strong {
    white-space: pre-wrap;
    word-break: break-word;
    word-wrap: break-word;
  }
}

.markdownIt-TOC {
  margin-left: 0;
  list-style: none;
  a {
    color: #dd1d64;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  ul {
    margin-top: 0;
    margin-left: 0;
    list-style: none;
    font-size: 1rem;
    line-height: 1rem;
  }
  li {
    line-height: 1.5em;
    margin-bottom: calc(1.5rem / 2);
  }
}
`;
