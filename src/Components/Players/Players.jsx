import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import './Player.css'
import PropTypes from "prop-types";
import Selected from "../Selected/Selected";

const Players = ({handleIsActiveState,isActive,handlePlayerSet,selectPlayer,handleDelete}) => {
    const[players,setPlayers]=useState([]);
    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
        
    },[])
    return (
        <div>
            <div className="flex justify-between max-w-6xl mx-auto mb-10">
                    <h1 className="text-3xl font-bold body">{isActive.cart ? "Available Players" : `Selected Player (${selectPlayer.length}/6)`}</h1>
                <div className="border rounded-xl">
                    <button className={`py-4 px-7 ${isActive.cart?"Active":""}`} onClick={()=>handleIsActiveState('cart')}>Available</button>
                    <button className={`py-4 px-7 ${isActive.cart?"":"Active"}`}  onClick={()=>handleIsActiveState('about')}>Selected <span>({selectPlayer.length})</span></button>
                </div>
            </div>
            <div className="layout">
                {
                    isActive.cart? players.map(player => <Player key={player.id} player={player} handlePlayerSet={handlePlayerSet}></Player>) :<Selected selectPlayer={selectPlayer} handleDelete={handleDelete} handleIsActiveState={handleIsActiveState}></Selected>
                    
                }
            </div>
            <div className="mb-56">

            </div>
           
        </div>
    );
};
Players.propTypes ={
    handleIsActiveState:PropTypes.func.isRequired,
    isActive:PropTypes.object.isRequired,
    selectPlayer:PropTypes.array.isRequired,
    handlePlayerSet:PropTypes.func.isRequired,
    handleDelete:PropTypes.array.isRequired

}
export default Players;