import styled from "styled-components";

const StyledHero = styled.div`
  margin: 1rem;

  section {
    display: flex;
    flex-direction: column;
    text-align: center;

    @media (min-width: 992px) {
      margin: 0 1rem;
      flex-direction: row;
      justify-content: center;
      align-items: left;
    }
  }

  .hero__left {
    margin-bottom: 1rem;

    @media (min-width: 992px) {
      flex-basis: 50%;
      margin-right: 1rem;
      text-align: left;
    }
  }

  h2 {
    color: #4361ee;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  h3 {
    color: #b5179e;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  p {
    color: #64748b;
    margin-bottom: 1rem;
  }

  .hero__image {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
    margin: auto;

    @media (min-width: 768px) {
      max-width: 100%;
    }

    @media (min-width: 992px) {
      max-width: 100%;
      max-height: 35rem;
      margin-left: 1rem;
    }
  }
`;

export default StyledHero;
