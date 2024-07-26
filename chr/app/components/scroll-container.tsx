export default function ScrollContainer(/*{children} : {children : React.ReactNode}*/) {
    return(
        <div className="scroll-container">
            <div className="scroll-items">
                <ul className="item-list">
                    <li className="item"></li>
                    <li className="item"></li>
                    <li className="item"></li>
                    <li className="item"></li>
                    <li className="item"></li>
                    <li className="item"></li>
                    <li className="item"></li>
                </ul>
            </div>
        </div>
    );
}