import Button from "../common/Button";
import HeaderCount from "./HeaderCount";

const HeaderInfo = () => {
    return (
        <div className="header-info">
            <h1 className="header-info-title"></h1>
            <h1 className="header-info-desc"></h1>
            <Button>
                Explore
            </Button>
            <HeaderCount />
        </div>
    );
};

export default HeaderInfo;