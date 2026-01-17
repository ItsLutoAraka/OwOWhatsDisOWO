import { useEffect, useRef, useState } from "react";
import "./LoginPage.css";
import Header from "./Header";
import Wordle from "./Wordle";

type RandomWordResponse = string[];

// Type for optional parameters
interface WordOptions {
  length?: number;
  lang?: "es" | "it" | "de" | "fr" | "zh" | "pt-br";
}

// Custom hook for fetching a random word
export const useRandomWord = () => {
  const [word, setWord] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomWord = async (options?: WordOptions): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      // Build query parameters
      const params = new URLSearchParams();
      if (options?.length) {
        params.append("length", options.length.toString());
      }
      if (options?.lang) {
        params.append("lang", options.lang);
      }

      const queryString = params.toString();
      const url = `https://random-word-api.herokuapp.com/word${queryString ? `?${queryString}` : ""
        }`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: RandomWordResponse = await response.json();

      if (data && data.length > 0) {
        setWord(data[0]);
      } else {
        throw new Error("No word received from API");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setWord("");
    } finally {
      setLoading(false);
    }
  };

  return { word, loading, error, fetchRandomWord };
};

//COD

type UserLoginInfo = {
  username: string;
  password: string;
  email: string;
};

function LoginPage() {
  const [userLoginInfo, setUserLoginInfo] = useState<UserLoginInfo>({
    username: "",
    password: "",
    email: "",
  });
  const [showHint, setShowHint] = useState(false);
  const [showWordle, setShowWordle] = useState(false);

  const FIELD_CONFIG: Record<
    string,
    { key: keyof UserLoginInfo; label: string; type: string }
  > = {
    USERNAME: {
      key: "username",
      label: "Username",
      type: "password",
    },
    EMAIL: {
      key: "email",
      label: "Email",
      type: "password",
    },
    PASSWORD: {
      key: "password",
      label: "Password",
      type: "text",
    },
  };

  // @ts-ignore
  const { word, loading, error, fetchRandomWord } = useRandomWord();
  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current) {
      const getWord = async () => {
        await fetchRandomWord();
      };
      getWord();
      hasFetched.current = true;
    }
  }, []);

  useEffect(() => {
    if (word) {
      console.log(word);
    }
  }, [word]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userLoginInfo);
    const validated = handleValidation();
    if (validated) {
      sessionStorage.setItem("loginDeets", JSON.stringify(userLoginInfo));
    }
    setShowHint(!validated);
    console.log(validated);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleValidation = () => {
    let validated = false;
    if (!userLoginInfo.password.includes(word)) {
      alert(
        "hi, your password bad, use the right word please, hint: I dont know what the word is, it's randomly generated :D"
      );
    } else {
      validated = true;
    }
    return validated;
  };

  const handleHintClick = () => {
    setShowWordle(true);
  };

  return (
    <div className="login-page">
      <Header></Header>
      <div>LOGIN DEZs</div>
      <form onSubmit={handleSubmit}>
        {Object.values(FIELD_CONFIG).map((field) => (
          <div>
            <label htmlFor={field.key}>{field.label}</label>
            <input
              id={field.key}
              type={field.type}
              value={userLoginInfo[field.key]}
              name={field.key}
              onChange={handleInputChange}
              className="input"
            ></input>
          </div>
        ))}
        <input type="submit" value="no" className="submiot"></input>
      </form>
      {showHint ? (
        <button className="hint" onClick={handleHintClick}>
          HINT
        </button>
      ) : (
        <></>
      )}
      {showWordle ? <Wordle></Wordle> : <></>}
    </div>
  );
}

export default LoginPage;
