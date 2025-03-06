import './PlayerCard.css'
import PropTypes from 'prop-types';

const Player = ({player,handlePlayerSet}) => {
    const {img,country,name,skill,rating,batting_hand,price,country_flag,user_icon} = player;
    return (
        
            <div>
                
                <div className="p-6 border rounded-xl">
                    <div>
                        <div className="image-container">
                            <img className="image-container" src={img} alt="" />
                        </div>
                        <div className="flex gap-4 items-center mb-4">
                            <img className='imgIcon' src={user_icon} alt="" />
                            <h2 className='font-semibold body text-xl'>{name}</h2>
                        </div>
                        <div className="border-b flex justify-between items-center">
                            <div className='flex items-center'> <img className='flag mr-3' src={country_flag} alt="" />
                            <p className='body text-[#706b6b]'>{country}</p></div>
                           
                            <div className='px-4 py-2 body bg-[#e2dede] rounded-lg mb-4'><p>{skill}</p></div>
                        </div>
                        <div>
                            <h2 className='font-bold body mt-2'>Rating: {rating}</h2>
                            <div className="flex justify-between items-center my-2">
                                <p className='font-semibold body'>{batting_hand}</p>
                                <p className='body'>{batting_hand}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className='font-semibold body'>Price:{price}</p>
                                <button onClick={()=>handlePlayerSet(player)} className='hover:bg-[#e7fe29] py-2 px-4 border rounded-lg body text-sm'>Choose Player</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        
    );
};

Player.propTypes ={
    player:PropTypes.object.isRequired,
    handlePlayerSet:PropTypes.func.isRequired

}

export default Player;