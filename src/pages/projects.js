import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import ProjectItem from "@/components/ProjectItem";
import projectsData from "../../public/Data/projects.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HireMe from "@/components/HireMe";

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "w-full",
        appendDots: (dots) => (
            <div>
            {dots.map((dot, index) => (
                <div key={index} className="mx-2">
                    {dot}
                </div>
            ))}
        </div>
    ),
    customPaging: () => (
        <div className=" items-center w-4 h-4 bg-gray-400 rounded-full hover:bg-dark focus:outline-none"></div>
    ),
        nextArrow: (
            <div>
                <div className="next-slick-arrow absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="black"
                        height="70"
                        viewBox="0 -960 960 960"
                        width="70"
                    >
                        <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
                    </svg>
                </div>
            </div>
        ),

        prevArrow: (
            <div>
                <div className="prev-slick-arrow absolute left-0 top-1/2 transform -translate-y-1/2 z-10 rotate-180">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="black"
                        height="70"
                        viewBox="0 -960 960 960"
                        width="70"
                    >
                        <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
                    </svg>
                </div>
            </div>
        ),
    };

    return (
        <>
            <Head>
                <title>Cindy Chassin | Projects page</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Mes projets"
                        className="!text-6xl !text-center mb-16"
                    />

                    <Slider {...settings}>
                        {projectsData.map((project, index) => (
                            <div key={index} className="w-full">
                                <div className="w-full flex items-center justify-between p-12 mb-8">
                                    <ProjectItem
                                        title={project.title}
                                        summary={project.summary}
                                        img={project.img}
                                        github={project.github}
                                        type={project.type}
                                        link={project.link}
                                        width={project.width}
                                        height={project.height}
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Layout>
                <HireMe />
            </main>
        </>
    );
};

export default Projects;
