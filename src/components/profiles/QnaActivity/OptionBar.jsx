import styled from "styled-components";

const OptionBarBox = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const OptionBtn = styled.button`
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: ${(props) => (props.option ? "#475569" : "#fff")};
  border-color: ${(props) => (props.option ? "#475569" : "#e2e8f0")};
  color: ${(props) => (props.option ? "#fff" : "#475569")};
  border-style: solid;
  border-width: 1px;
  border-radius: 9999px;
`;

const OptionBtnText = styled.span`
  font-weight: 700;
  font-size: 0.875rem;
`;

function OptionBar({ setOption, option }) {
  const handleAnswer = () => {
    setOption(1);
  };

  const handleQuestion = () => {
    setOption(2);
  };
  return (
    <OptionBarBox>
      <OptionBtn type="button" onClick={handleAnswer} option={option === 1}>
        <OptionBtnText>
          답변 <span>7</span>
        </OptionBtnText>
      </OptionBtn>
      <OptionBtn type="button" onClick={handleQuestion} option={option === 2}>
        <OptionBtnText>
          질문 <span>2</span>
        </OptionBtnText>
      </OptionBtn>
    </OptionBarBox>
  );
}
export default OptionBar;