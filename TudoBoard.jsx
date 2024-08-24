import { useState } from "react";

export default function LudoBoard(){
    let [moves, setMoves] = useState({blue: 0, red: 0, yellow: 0, green: 0,});
    let [count, setCount] = useState(0);


    let updateBlue = () =>{
       
        setMoves((preMoves)=>{
            return{...preMoves, blue: preMoves.blue + 1}
            {}
        });
    };

    let updateYellow = () =>{
        
        setMoves((preMoves) =>{
            return{...preMoves, yellow: preMoves.yellow + 1}

        });
    };

    return(
        <div>
            <h3>Game to Bagins!</h3>
            <div className="board">
                <p>Blue Moves = {moves.blue}</p>
                <button style={{background: "blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button style={{background: "yellow", color: "red"}} onClick={updateYellow}>+1</button>
                <p>Green Moves = {moves.green}</p>
                <button style={{background: "green"}}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button style={{background: "red"}}>+1</button>

            </div>
        </div>

    )
}
