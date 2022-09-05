const REQUIRED_FIELD_TEXT = "Required to fill in";
const MIN_LETTERS = 8;
const MIN_LETTERS_TEXT = "There must be at least 8 letters in the field";

export const emailValidation = {
  required: REQUIRED_FIELD_TEXT,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return "Email cannot contain Russian letters";
    }

    if (value.length < MIN_LETTERS) {
      return MIN_LETTERS_TEXT;
    }

    if (!value.match(/\S+@/)) {
      return 'There is no "@" at the email';
    }

    if (!value.match(/\S+@\S+\./)) {
      return 'There is no "." at the email';
    }

    if (!value.match(/^\S+@\S+\.\S+$/i)) {
      return "Email should have correct format";
    }

    return true;
  },
};

export const passwordValidation = {
  required: REQUIRED_FIELD_TEXT,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return "Password cannot contain Russian letters";
    }

    if (value.length < MIN_LETTERS) {
      return MIN_LETTERS_TEXT;
    }

    return true;
  },
};
