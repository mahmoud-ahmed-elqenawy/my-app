import './menu-item.styles.scss';

const menuItem = ({title, imageUrl, size}) => (
    <div className={`${size} menu-item`}>
    <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Shopping now</span>
        </div>
    </div>
)

export default menuItem;