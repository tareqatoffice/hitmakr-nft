import { infoCount } from "../../lib/info-count";
import HeaderCount from "./HeaderCount";

const HeaderCounts = () => {
    return (
        <div className="header-counts">
            {infoCount.map((info, index) => <HeaderCount info={info} key={index} />)}
        </div>
    );
};

export default HeaderCounts;