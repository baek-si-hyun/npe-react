import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import styled from "styled-components";
import AvoidMistakesModal from "../components/Profiles/Modal/AvoidMistakesModal";
import { useNavigate } from "react-router-dom";

const SitesCreateaBox = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 3rem;
  @media (min-width: 1024px) {
    & {
      padding-top: 2rem;
    }
  }
  @media (min-width: 1024px) {
    & {
      width: 33rem;
    }
  }
  @media (min-width: 1024px) {
    & {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
const SitesInputBoxTop = styled.div`
  margin-bottom: 1.5rem;
`;
const SitesInputBox = styled.div`
  margin-bottom: 1rem;
`;
const SitesCreateaPartTitleBox = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
const SitesCreateaLabel = styled.label`
  margin-bottom: 0;
  font-size: 0.875rem;
  font-weight: 700;
  color: #334155;
`;
const Pilsu = styled.span`
  margin-left: 0.25rem;
  font-weight: 400;
  color: #64748b;
`;
const SitesCreateaInputCount = styled.p`
  font-size: 0.875rem;
  color: #64748b;
`;
const SitesCreateaRelativeBox = styled.div`
  position: relative;
`;
const SitesCreateaInput = styled.input`
  -moz-appearance: none;
  appearance: none;
  --tw-shadow: 0 0 #0000;
  display: block;
  width: 100%;
  border-radius: 0.25rem;
  border-width: 1px;
  border-style: solid;
  border-color: #e2e8f0;
  background-color: #fff;
  padding: 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #0f172a;
  &:focus {
    border-color: #64748b;
    outline: 1px solid #64748b;
  }
  &::placeholder {
    font-weight: 500;
    color: #9da7b1;
  }
`;

function SitesCreate() {
  const navigate = useNavigate(null);
  const [avoidMistakesModal, setAvoidMistakesModal] = useState(false);
  const [isExit, setIsExit] = useState(false);
  const [institution, setInstitution] = useState("");
  const [course, setCourse] = useState("");
  const [courseLength, setCourseLength] = useState(0);

  const handleCourseChange = (e) => {
    const valueLength = e.target.value.length;
    setCourseLength(valueLength);
    if (valueLength <= 50) {
      setCourse(e.target.value);
    }
  };

  useEffect(() => {
    if (isExit) {
      navigate("/profiles");
    }
  }, [isExit]);

  return (
    <>
      <div>
        <div>
          <div
            style={{
              position: "fixed",
              zIndex: 9999,
              top: "16px",
              left: "16px",
              right: "16px",
              bottom: "16px",
              pointerEvents: "none",
            }}
            className="global-toaster"
          ></div>
          <div>
            <Header setAvoidMistakesModal={setAvoidMistakesModal} />
            <div style={{ height: "3.5rem" }}></div>
            <SitesCreateaBox>
              <SitesInputBoxTop>
                <SitesCreateaPartTitleBox>
                  <SitesCreateaLabel>
                    링크 연결
                    <Pilsu>(필수)</Pilsu>
                  </SitesCreateaLabel>
                </SitesCreateaPartTitleBox>
                <SitesCreateaRelativeBox>
                  <SitesCreateaInput
                    type="text"
                    placeholder="URL을 입력해 주세요."
                  />
                </SitesCreateaRelativeBox>
              </SitesInputBoxTop>
              <SitesInputBox>
                <SitesCreateaPartTitleBox>
                  <SitesCreateaLabel>
                    이름<Pilsu>(필수)</Pilsu>
                  </SitesCreateaLabel>
                  <SitesCreateaInputCount>
                    {courseLength}/50
                  </SitesCreateaInputCount>
                </SitesCreateaPartTitleBox>
                <SitesCreateaInput
                  type="text"
                  placeholder="표시할 이름을 입력해 주세요. (예: 포트폴리오)"
                  maxLength="50"
                  onChange={handleCourseChange}
                />
              </SitesInputBox>
            </SitesCreateaBox>
          </div>
        </div>
      </div>
      {avoidMistakesModal && (
        <AvoidMistakesModal
          setAvoidMistakesModal={setAvoidMistakesModal}
          setIsExit={setIsExit}
        />
      )}
    </>
  );
}
export default SitesCreate;
