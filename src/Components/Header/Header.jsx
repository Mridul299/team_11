import logo from '../../assets/logo.png'
import coin from '../../assets/coin.png'
import PropTypes from 'prop-types';


const Header = ({coins}) => {

    return (
        <nav className='flex justify-between items-center max-w-6xl mx-auto mt-12'>
             <div className='w-16'>
                <img className='object-cover' src={logo} alt="" />
            </div>
            <div className='flex w-[560px] justify-around items-center'>
                <div className='flex lg:gap-12 md:gap-8 gap-3 body text-[#5c5b5b]'>
                    <a href="#">Home</a>
                    <a href="#">Fixture</a>
                    <a href="#">Teams</a>
                    <a href="#">Schedules</a>
                </div>
                <div className='border-2 rounded-xl py-4 px-5 flex items-center gap-2'>
                    <div>
                        <h2><span className='mr-1 body text-base font-semibold '>{coins}</span><span className='text-base font-semibold body'>Coin</span></h2>
                    </div>
                    <div className='w-5 h-5'>
                        <img src={coin} alt="" />
                    </div>
                </div>
            </div>
        </nav>
       
    );
};
Header.propTypes = {
    coins:PropTypes.object.isRequired
}
export default Header;