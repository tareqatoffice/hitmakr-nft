import { options } from "../../lib/options";
import Option from "./Option";
import "./options.css";

const Options = () => {
    return (
        <section className="nft-options">
            {options.map((option, index) => <Option key={index} option={option} />)}
        </section>
    );
};

export default Options;