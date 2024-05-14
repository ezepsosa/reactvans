import styled from "styled-components";

export const Container = styled.div`
  height: calc(100% - 8.8rem);
  flex: 1 1 auto;
  overflow-y: auto;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Loading = styled.span`
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
  display: inline-block;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  position: relative;
  animation: spin 5s linear infinite;
  text-align: center;
  line-height: 12rem;
  color: white;
  font-size: 5rem;
`;
