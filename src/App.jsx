import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import './App.css'
import Footer from './Components/Footer/Footer'
import Players from './Components/Players/Players'
import { useState } from 'react'
import { ToastContainer,toast  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';




function App() {

  const [coins,setCoins]= useState(0);
  const handleCoin = () =>{
    setCoins(coins + 100000000 )
    toast.success(`You've claimed 1000 coins! Your total is now ${coins + 100000000} coins.`);
  }


  const [selectPlayer,setSelectPlayer]=useState([]);

const handleDecreasecoin = (price) =>{
  if(price < coins){
    setCoins(coins - price)  
  }
  else{
    return  toast.error(`You've  not enought coin`);;
  }
};

const handleIncreasecoin = (id)=>{
  const player = selectPlayer.find((p)=> p.id ==id);
  setCoins(coins + player.price)
};

  const handleDelete = (id) =>{
    handleIncreasecoin(id)
    toast.success(`Successfully removed from the list`)
    const newremainingPlayer = selectPlayer.filter((p)=>p.id != id);
    setSelectPlayer(newremainingPlayer);
    
  };

  const handlePlayerSet = (player) => {
    const isExist = selectPlayer.find((p) => p.id === player.id);
    
    if (isExist) {
      toast.error("You've already chosen this player");
    } else if (player.price > coins) {
      toast.error("You don't have enough coins to select this player");
    }else if(selectPlayer.length >= 6 ){
      toast.error("You can only select up to 6 players.");
      return;
    }
     else {
      handleDecreasecoin(player.price);
      setSelectPlayer((prevPlayers) => [...prevPlayers, player]);
      toast.success(`You've chosen ${player.name}`);
    }
  };

  const [isActive,setIsActive] = useState({
    cart:true,
    status:'cart'
  });
  
const handleIsActiveState = (status) =>{
  if(status == "cart"){
    setIsActive({
      cart:true,
      status:'cart'
    })}
    else{
      setIsActive({
        cart:false,
        status:'about'
      })
    } 
};





  return (
    <>
      <Header coins={coins}></Header>
      <Hero handleCoin={handleCoin}></Hero>
      <Players handleIsActiveState={handleIsActiveState} isActive={isActive} handlePlayerSet={handlePlayerSet} selectPlayer={selectPlayer} handleDelete={handleDelete}></Players>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
