import React from 'react'
import Button from './Button'

function Card({ image, title, meta, text }) {
    const card = {
    cardStyle: {
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        boxShadow: "0 8px 30px rgba(15, 5, 5, 0.08), 0 8px 30px rgba(15, 5, 5, 0.04)",
        borderRadius: "8px",
        border: "1px solid #e5e7eb", // Tailwind's gray-200
        backgroundColor: "gray",
        color:"white"
    },

    imgdiv: {
        position: "relative",
        height: "200px",
        overflow: "hidden",
        flexShrink: 0,
    },

    imgstyle: {
        width: "100%",      // ❗ fixed
        height: "100%",     // ❗ fixed
        objectFit: "cover",
        display: "block",
        filter: "contrast(1.15) saturate(1.02)",
        transformOrigin: "center",
        borderBottom: "1px solid #e5e7eb",
    },

    descStyle: {
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        flexGrow: 1,
    },

    h1Style: {
        fontWeight: "800",
        fontSize: "1.75rem", // ≈ xx-large
        lineHeight: "1.2",
    },

    metaStyle: {
        color: "#d4d9e6ff", // gray-500
        fontSize: "0.9rem",
    },

    btnBox: {
        padding: "1rem",
        width: "100%",
        textAlign: "center",
        marginTop: "auto",
    },
};


    return (
        <div style={card.cardStyle} className="card" role="article" aria-label="Natural Beauty">
            <div style={card.imgdiv} className="media">
                <img style={card.imgstyle} src={image} alt="Waterfall In Forest" />
            </div>
            <div className="desc" style={card.descStyle}>
                <div className="descHeading">

                    <spam className="heading" style={card.h1Style}>{title}</spam><br />
                        <span className="Meta" style={card.metaStyle}>{meta}</span>
                </div>
                <p>{text}</p>
            </div>
            <div className="card-footer" style={card.btnBox}>
                <Button text="Visit site" width="100%"/>
            </div>
        </div>
    )
}

export default Card