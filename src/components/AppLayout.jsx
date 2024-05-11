import PropTypes from 'prop-types';
import Navbar from "./core/Navbar";
const AppLayout = ({ children }) => {
	return <div className="container grid gap-[40px] mx-auto py-[24px]">
		<Navbar />
		{children}
	</div>;
};
AppLayout.propTypes = {
	children: PropTypes.children
};
export default AppLayout;
