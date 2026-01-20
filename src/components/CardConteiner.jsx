import React from 'react'
import TwoColSection from './TwoColSection'
import img from "../assets/cardImage.jpg"
import Card from './Card'
function CardConteiner() {

  return (
    <>
      <h1 style={{textAlign:"center", padding:"1rem"}}>Feature Cards</h1>
      <div style={{ color:"black", display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(min(50%, 250px), 1fr))`, gap: "1rem", padding: "5rem", height: "auto", overflow: "hidden" }}>

        <Card
          image={img}
          title="Card Heading"
          meta="this is Meta"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores natus ut reprehenderit illo sapiente molestias mollitia voluptates, obcaecati sequi esse accusantium, minus quod qui vel corporis eius quasi. Labore, id?"
        />
        <Card
          image={img}
          title="Card Heading 2"
          meta="this is another Meta"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores natus ut reprehenderit illo sapiente molestias mollitia voluptates, obcaecati sequi esse accusantium, minus quod qui vel corporis eius quasi. Labore, id?"
        />
        <Card
          image={img}
          title="Card Heading"
          meta="this is Meta"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores natus ut reprehenderit illo sapiente molestias mollitia voluptates, obcaecati sequi esse accusantium, minus quod qui vel corporis eius quasi. Labore, id?"
        />
        <Card
          image={img}
          title="Card Heading"
          meta="this is Meta"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores natus ut reprehenderit illo sapiente molestias mollitia voluptates, obcaecati sequi esse accusantium, minus quod qui vel corporis eius quasi. Labore, id?"
        />
      </div>
    </>
  )
}

export default CardConteiner