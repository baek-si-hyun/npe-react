import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setTitle } from "../../../redux/createQna";

const CreateQnaContentTitlebox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

const CreateQnaContentTitleTextarea = styled.textarea`
  -moz-appearance: none;
  appearance: none;
  background-color: #fff;
  border-color: #94a3b8;
  border-radius: 0;
  color: #0f172a;
  line-height: 1.5;
  font-weight: 700;
  font-size: 1.5rem;
  padding: 0;
  border-width: 0;
  resize: none;
  width: 100%;
  outline: none;
  overflow: hidden; 
`;

const CreateQnaContentTitleCountBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CreateQnaContentTitleCount = styled.p`
  color: #64748b;
  font-size: 0.875rem;
  margin-left: auto;
`;

function ContentTitle() {
  const createQna = useSelector((state) => state.createQna);
  const dispatch = useDispatch();
  const [titleLength, setTitleLength] = useState(0);
  const textareaRef = useRef(null);

  const handleTitleChange = (e) => {
    const value = e.target.value;
    const valueLength = value.length;
    setTitleLength(valueLength);
    if (valueLength <= 100) {
      dispatch(setTitle(value));
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [createQna.title]);

  return (
    <CreateQnaContentTitlebox>
      <CreateQnaContentTitleTextarea
        name="title"
        maxLength={100}
        placeholder="제목을 10자 이상 입력해 주세요."
        value={createQna.title}
        onChange={handleTitleChange}
        ref={textareaRef}
      />
      <CreateQnaContentTitleCountBox>
        <CreateQnaContentTitleCount>
          {titleLength} / 100
        </CreateQnaContentTitleCount>
      </CreateQnaContentTitleCountBox>
    </CreateQnaContentTitlebox>
  );
}

export default ContentTitle;
