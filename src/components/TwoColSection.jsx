import Button from "./Button"


function TwoColSection({ image, title, text, colOrder }) {

const isTablet = window.innerWidth <= 820; // iPad breakpoint

const section = {
    secStyle: {
        display: "flex",
        alignItems: "center",
        flexDirection: colOrder || "row",   // row by default
        padding: "min(5rem, 5vw)",
        flexWrap: isTablet ? "wrap" : "nowrap", // responsive behavior
        gap: "2rem",
        overflow: "hidden",
        
    },

    imgWrapper: {
        flex: "1 1 50%",       // ensures both take equal width
        height: "50vh",
        overflow: "hidden",
        borderRadius: "32px",
        minWidth: "300px",     // prevents shrinking too much
    },

    imgStyle: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
    },

    contentWrapper: {
        flex: "1 1 50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minWidth: "300px",     // prevents collapsing
    },

    h1Style: {
        fontSize: "40px",
        fontWeight: "700",
        lineHeight: "1.2",
    },

    pStyle: {
        marginBlock: "1rem",
        fontSize: "1rem",
        lineHeight: "1.6",
    },
};





    return (
        <>
            <section style={section.secStyle}>
                <div style={section.imgWrapper}>
                    <img src={image} alt={title} style={section.imgStyle} />
                </div>

                <div style={section.contentWrapper}>
                    <h1 style={section.h1Style}>{title}</h1>
                    <p style={section.pStyle}>{text}</p>
                </div>
            </section>

        </>
    )
}

export default TwoColSection