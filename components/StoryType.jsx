const StoryType = ({ name, Icon, handler, selected }) => (
    <div
        style={{
            padding: "5px 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
            backgroundColor: selected === name.toLowerCase() ? "rgba(100, 100, 100, .5)" : "transparent",
            border: "1px solid",
            borderColor: selected === name.toLowerCase() ? "rgba(100, 100, 100, .5)" : "transparent",
            color: selected === name.toLowerCase() ? "white" : "var(--text)",
            borderRadius: 20,
            cursor: "pointer",
        }}
        onClick={ () => handler(name.toLowerCase()) }
    >
        { Icon && <Icon /> }
        <span>{ name }</span>
    </div>
);

export default StoryType;
