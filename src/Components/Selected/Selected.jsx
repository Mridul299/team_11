import PropTypes from "prop-types";

const Selected = ({selectPlayer,handleDelete,handleIsActiveState}) => {
   
    
    return (
        <div className="max-w-6xl w-full rounded-2xl ">
            {
                selectPlayer.map(player => (
                    <div key={player.id} className="max-w-6xl mx-auto w-full my-3 ">
                        <div className="border rounded-2xl flex justify-between items-center bg-slate-50">
                            <div className="flex gap-2 p-3 w-full">
                                <div>
                                    <img className="w-16 h-16 rounded-2xl" src={player.img} alt="" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold body">{player.name}</h2>
                                    <p className="body text-[#7b7a7a]">{player.batting_hand}</p>
                                </div>
                            </div>
                            <div className="">
                                <button className="text-red-700 body font-bold p-3" onClick={()=>handleDelete(player.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className="border-2 p-2 w-[200px] rounded-2xl">
                <button onClick={()=>handleIsActiveState('cart')} className=" rounded-xl p-4 bg-[#E7FE29] body text-lg font-bold">Add More Player</button>
            </div>
        </div>
    );
};

Selected.propTypes ={
    selectPlayer:PropTypes.array.isRequired,
    handleDelete:PropTypes.array.isRequired,
    handleIsActiveState:PropTypes.func.isRequired

}
export default Selected;