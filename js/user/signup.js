import {
  email,
  password,
  emailInput,
  pwInput,
  showError,
  changeEyeBtn,
  removeError,
} from "./user.js";
import config from "../../config/api.js";
import callApi from "../../config/index.js";

const APP_API = config.APP_API;

const pwConfirmInput = document.querySelector("#pwConfirmInput");
const pwConfirmErrorMsg = document.querySelector("#pwConfirmErrorMsg");
const pwConfirmEyeBtn = document.querySelector(
  "#pwConfirmInputContainer .eyeOffImg"
);
const signupBtn = document.querySelector("#signupBtn");

const passwordConfirm = {
  input: pwConfirmInput,
  errorMsg: pwConfirmErrorMsg,
};

const regexPw = /^(?=.*[a-zA-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

const inputArr = [emailInput, pwInput, pwConfirmInput];

const checkEmail = async () => {
  const data = {
    email: emailInput.value,
  };

  try {
    const response = await fetch(
      `${APP_API}/api/check-email`,
      callApi("POST", data)
    );
    if (response.status === 409) {
      showError(email, "이미 사용 중인 이메일입니다.");
      return;
    }
  } catch (e) {
    console.error(e);
  }
};

const handleSignUp = async () => {
  const data = {
    email: emailInput.value,
    password: pwInput.value,
  };

  try {
    const response = await fetch(
      `${APP_API}/api/sign-up`,
      callApi("POST", data)
    );
    const result = await response.json();

    if (response.status === 200) {
      localStorage.setItem("accessToken", result.data.accessToken);
      location.href = "folder.html";
    }

    if (response.status === 400) {
      alert("회원가입에 실패했습니다.");
    }
  } catch (e) {
    console.error(e);
  }
};

const isError = () => {
  return inputArr.every((e) => {
    return e.classList.contains("error") === false;
  });
};

const isEmpty = () => {
  return inputArr.every((e) => {
    return e.value;
  });
};

emailInput.addEventListener("focusout", checkEmail);

pwInput.addEventListener("focusout", function () {
  if (!regexPw.test(pwInput.value)) {
    showError(password, "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.");
  } else {
    removeError(password);
  }
});

pwConfirmEyeBtn.addEventListener("click", function () {
  changeEyeBtn(pwConfirmInput, pwConfirmEyeBtn);
});

pwConfirmInput.addEventListener("focusout", function () {
  if (passwordConfirm.input.value !== pwInput.value) {
    showError(passwordConfirm, "비밀번호가 일치하지 않아요.");
  } else {
    removeError(passwordConfirm);
  }
});

signupBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (isEmpty() && isError()) {
    handleSignUp();
  } else {
    alert("erro");
  }
});
