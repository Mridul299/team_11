import footerlogo from '../../assets/logo-footer.png'
import './Footer.css'
const Footer = () => {
    return (
            <footer className="  w-full bg-[#06091A]">
                <div className=' relative  mx-auto max-w-6xl '>

                    <div className='border rounded-3xl p-5 bg-[#ffffff31] relative -top-44'>
                        <div className='border bg-imge-2 flex justify-center text-center'>
                            <div className='py-20'>
                                <h1 className='font-bold text-3xl'>Subscribe to our Newsletter</h1>
                                <p className='text-xl font-medium text-[#827b7bdb] my-4'>Get the latest updates and news right in your inbox!</p>
                                <div className='flex gap-2'>
                                <input type="email" placeholder='Enter your email' className='rounded-2xl  py-3 px-6 border' />
                                <button className='font-bold body rounded-2xl bg-imge-3 py-3 px-6'>Subscribe</button>
                                </div>
                            </div>
                            </div>
                    </div>

                    <div>
                        <div className="flex justify-center mb-16"><img   src={footerlogo} alt="" />
                        </div>
                        <div className='flex justify-around'>
                            <div className='w-72'>
                                    <h2 className='text-lg font-semibold body text-white'>About Us</h2>
                                    <p className='body text-[#827b7bdb]'>We are a passionate team dedicated to providing the best services to our customers.</p>
                                </div>
                                <div className="w-52 flex flex-col gap-2">
                                    <h2 className='text-white font-bold'>Quick Links</h2>
                                    <a className='text-[#827b7bdb] body' href="#">Home</a>
                                    <a className='text-[#827b7bdb] body' href="#">Services</a>
                                    <a className='text-[#827b7bdb] body' href="#">About</a>
                                    <a className='text-[#827b7bdb] body' href="#">Contact</a>
                                </div>
                                <div className='w-72'>
                                    <h2 className='text-white text-lg body font-bold mb-2'>Subscribe</h2>
                                    <p className='text-[#827b7bdb] mb-2'>Subscribe to our newsletter for the latest updates.</p>
                                    <div className='flex'>
                                    <input type="email" placeholder='Enter your email' className='rounded-l-2xl outline-none py-3 pl-6' />
                                    <button className='font-bold body rounded-r-2xl bg-imge-3 py-3 px-6'>Subscribe</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='border-t text-center mt-3'>
                            <p className='body text-[#827b7bdb] p-3'>@2024 Your Company All Rights Reserved.</p>
                        </div>
                    </div>                   

                </footer>
       
    );
};

export default Footer;