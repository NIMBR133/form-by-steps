export const configFields = {
  required: "Поле является обязательным",

  email: {
    required: "Поле e-mail не заполнено",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Некорректный e-mail",
    },
  },

  password: {
    required: "Поле пароль не заполнено",
    minLength: {
      value: 6,
      message: "Пароль должен содержать минимум 6 символа",
    },
  },
  newPassword: {
    required: "Поле пароль не заполнено",
    pattern: {
      value:
        /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
      message:
        "Пароль должен содержать латинские буквы, цифры и спецсимволы, от 6 до 20 символов",
    },
  },
  phone: {
    pattern: {
      value: /[\w|\W]{18}$/,
      message: "Некорректный телефон",
    },
  },
  onlyLetters: {
    pattern: {
      value: /^([а-яё]+|[a-z]+)$/i,
      message: "Поле может содержать только буквы",
    },
  },
};
