import React, { memo } from "react";
import "../styles/content.scss";

interface Props {
	children?: React.ReactNode;
}
const Content: React.FC<Props> = memo((props) => {
	return <div className='content'>{props.children}</div>;
});
export default Content;
