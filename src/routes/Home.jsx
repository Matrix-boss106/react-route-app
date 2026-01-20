// Home.jsx
import TwoColSection from "../components/TwoColSection"
import Image from "../assets/Image.jpg";
import CardConteiner from "../components/CardConteiner";

function Home() {
    return (
        <>
            <main>
                <TwoColSection
                    image={Image}
                    title="Explore Big Mountant"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste cum hic cumque totam. Iure officiis possimus eos, numquam aspernatur, harum doloribus dignissimos quos omnis, dolore sunt libero ea? Sunt."
                    colOrder=""
                />
                <CardConteiner />
                <TwoColSection
                    image={Image}
                    title="Explore Big Mountant"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste cum hic cumque totam. Iure officiis possimus eos, numquam aspernatur, harum doloribus dignissimos quos omnis, dolore sunt libero ea? Sunt."
                    colOrder="row-reverse"
                />
            </main>

        </>
    )
}

export default Home