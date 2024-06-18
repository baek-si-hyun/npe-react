import { configureStore } from "@reduxjs/toolkit";
import loginStatus from "./loginStatus";
import createQna from "./createQna";
import profileUpdate from "./profileUpdate";
import createSkills from "./createSkills";
import memberQuestions from "./memberQuestions";
import qnaDetail from "./qnaDetail";
import qnaId from "./qnaId";
import memberPosts from "./memberPosts";
import memberAnswers from "./memberAnswers";

const store = configureStore({
  reducer: {
    loginStatus: loginStatus.reducer,
    createQna: createQna.reducer,
    profileUpdate: profileUpdate.reducer,
    createSkills: createSkills.reducer,
    memberQuestions: memberQuestions.reducer,
    memberAnswers: memberAnswers.reducer,
    memberPosts: memberPosts.reducer,
    qnaDetail: qnaDetail.reducer,
    qnaId: qnaId.reducer,
  },
});
export default store;