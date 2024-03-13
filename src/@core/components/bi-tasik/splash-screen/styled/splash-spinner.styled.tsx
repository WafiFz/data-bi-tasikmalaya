import styled from '@emotion/styled'

export const SplashSpinner = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #085599;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
  position: relative;
  margin: auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
