import banner from '../../assets/banner-main.png'
import './Hero.css'
import PropTypes from 'prop-types';

const Hero = ({handleCoin}) => {

 

    return (
        <div className="max-w-6xl mx-auto bg-imge flex justify-center py-16 mt-6 mb-24">
            <div>
                <div className='flex justify-center'>
                    <img src={banner} alt="" />
                </div>
                <div>
                    <h2 className='font-bold text-4xl text-white body my-5'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                    <p className='text-2xl font-medium text-[#ada3a3] text-center'>Beyond Boundaries Beyond Limits</p>
                    <div className='flex justify-center mt-6' >
                        <div className='border-2 border-[#E7FE29] p-2 rounded-2xl'>
                            <button className='h-12 w-44 bg-[#E7FE29] rounded-xl text-base font-bold body text-black' onClick={handleCoin}>Claim Free Credit</button>
                        </div>
                    </div>
                   
                </div>
            </div>

        </div>
    );
};
 Hero.propTypes ={
    handleCoin:PropTypes.func.isRequired
 }
export default Hero;