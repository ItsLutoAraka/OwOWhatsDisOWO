import { useEffect, useState } from "react";
import "./Wordle.css";

function Wordle() {
  // @ts-ignore
  const word = "boobs";
  const [curCol, setCurCol] = useState(0);
  const [curRow, setCurRow] = useState(0);
  const [grid, setGrid] = useState<String[][]>(
    Array.from({ length: 5 }, () => Array(5).fill(""))
  );

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const letter = e.key.toLowerCase();

      //   if (curRow === 4 && curCol === 4) {
      //     return;
      //   }

      if (letter >= "a" && letter <= "z" && letter.length === 1) {
        if (curCol < 5 && curRow < 5) {
          const newGrid = [...grid];
          newGrid[curRow][curCol] = letter.toUpperCase();
          setGrid(newGrid);
          if (curCol < 4) {
            setCurCol(curCol + 1);
          } else {
            setCurCol(0);
            setCurRow(curRow + 1);
          }
        }
      } else if (letter === "backspace") {
        const newGrid = [...grid];
        let newRow = curRow;
        let newCol = curCol;

        if (curCol > 0) {
          newCol = newCol - 1;
        } else if (curRow > 0) {
          newRow = newRow - 1;
          newCol = 4;
        }
        newGrid[newRow][newCol] = "";
        setGrid(newGrid);
        setCurCol(newCol);
        setCurRow(newRow);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [curCol, curRow, grid]);

  return (
    <div className="wordle">
      {Array.from({ length: 5 }, (_, rowIndex) => (
        <div className="row" key={rowIndex}>
          {Array.from({ length: 5 }, (_, colIndex) => (
            <span className="col" key={`${rowIndex},${colIndex}`}>
              {grid[rowIndex][colIndex]}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
export default Wordle;
