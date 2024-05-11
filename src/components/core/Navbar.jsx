import logo from '../../assets/logo.webp';
import Button from "../common/Button";
const Navbar = () => {
    return (
        <nav className='flex items-center justify-between'>
            <img className='w-[60px]' src={logo} />
            <Button >Sign up</Button>
        </nav>
    );
};

export default Navbar;