import React from 'react'
import Image from 'next/image'
import Project1Image from "../Images/Project1.jpeg"
import Project2Image from "../Images/Project2.png"
import type { StaticImageData } from 'next/image'
import ReactImage from '../Images/React.png'
import PythonImage from '../Images/Python.png'
import NodeJSImage from "../Images/Node.png"
import MongoDBImage from "../Images/MongoDB.png"
import { ArrowRight, GitBranchPlus, Link } from 'lucide-react'

type ProjectDetails = {
    ProjectName: string;
    ProjectDate: string;
    ProjectDescription: string;
    ProjectImageUrl: StaticImageData;
    ProjectCaseStudyUrl: string;
    ProjectGitUrl: string;
    ProjectLiveUrl: string;
    ProjectTechStack1: StaticImageData;
    ProjectTechStackName1: string;
    ProjectTechStack2: StaticImageData;
    ProjectTechStackName2: string;
    ProjectTechStack3: StaticImageData;
    ProjectTechStackName3: string;
    ProjectTechStack4: StaticImageData;
    ProjectTechStackName4: string;
}

const projects: ProjectDetails[] = [
    // Project 1 Details
    {
        ProjectName: "NextGen Medicine Recommendation system",
        ProjectDate: "June 2025",
        ProjectDescription: "A comprehensive full-stack web application designed to recommend personalized alternative medicines to users by analyzing their symptoms, health conditions, and personal preferences. The system utilizes machine learning algorithms to interpret user input and generate accurate, data-driven suggestions for suitable remedies.",
        ProjectImageUrl: Project1Image,
        ProjectCaseStudyUrl: "THIS SHOULD GIVEN LATER",
        ProjectGitUrl: "gitlink",
        ProjectLiveUrl: "",
        ProjectTechStack1: ReactImage,
        ProjectTechStackName1: "React",
        ProjectTechStack2: PythonImage,
        ProjectTechStackName2: "Python",
        ProjectTechStack3: NodeJSImage,
        ProjectTechStackName3: "NodeJS",
        ProjectTechStack4: MongoDBImage,
        ProjectTechStackName4: "MongoDB",

    },

    // Project 2 details
    {
        ProjectName: "Notify - Note taking web app",
        ProjectDate: "June 2025",
        ProjectDescription: "A comprehensive full-stack web application designed to recommend personalized alternative medicines to users by analyzing their symptoms, health conditions, and personal preferences. The system utilizes machine learning algorithms to interpret user input and generate accurate, data-driven suggestions for suitable remedies.",
        ProjectImageUrl: Project2Image,
        ProjectCaseStudyUrl: "THIS SHOULD GIVEN LATER",
        ProjectGitUrl: "gitlink",
        ProjectLiveUrl: "",
        ProjectTechStack1: ReactImage,
        ProjectTechStackName1: "React",
        ProjectTechStack2: PythonImage,
        ProjectTechStackName2: "Python",
        ProjectTechStack3: NodeJSImage,
        ProjectTechStackName3: "NodeJS",
        ProjectTechStack4: MongoDBImage,
        ProjectTechStackName4: "MongoDB",
    }
]

const Projects = () => {
    return (
        <div className='flex flex-col gap-80 mt-30 px-30'>
            {/* Project image */}
            {projects.map((project, index) => (
                <div
                    key={project.ProjectName}
                    className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-6`}
                >
                    <div className={`w-full md:w-1/2 flex  ${index % 2 !== 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <Image className='rounded-2xl' src={project.ProjectImageUrl} alt={project.ProjectName} width={500} height={350} />
                    </div>

                    {/* details  */}
                    <div className="flex flex-col gap-3 w-full md:w-1/2">
                        <div>
                            <h2 className="text-2xl geist-font-bold font-bold">{project.ProjectName}</h2>
                            <p className="text-gray-500 mb-2">{project.ProjectDate}</p>
                        </div>

                        <p className="mb-4 pr-10">{project.ProjectDescription}</p>
                        <div className='flex items-center gap-2 mb-4'>
                            <h3>Tools:</h3>
                            <div className='bg-white p-2 rounded-xl'>
                                <Image src={project.ProjectTechStack1} alt={project.ProjectTechStackName1} width={30} height={30} />
                            </div>
                            <div className='bg-white p-2 rounded-xl'>
                                <Image src={project.ProjectTechStack2} alt={project.ProjectTechStackName2} width={30} height={30} />
                            </div>
                            <div className='bg-white p-2 rounded-xl'>
                                <Image src={project.ProjectTechStack3} alt={project.ProjectTechStackName3} width={30} height={30} />
                            </div>
                            <div className='bg-white p-2 rounded-xl'>
                                <Image src={project.ProjectTechStack4} alt={project.ProjectTechStackName4} width={30} height={30} />
                            </div>
                        </div>

                        {/* buttons */}
                        <div className='flex justify-between'>
                            <button
                                className='flex gap-2 bg-white px-4 py-3 geist-font rounded-2xl'
                            >View Project<ArrowRight className='border-1 border-gray-400 rounded-md stroke-1' /></button>
                            <div className='flex gap-6'>
                                <button className='flex gap-2'><GitBranchPlus className='stroke-1'/>Repository</button>
                                <button className='flex gap-2'><Link className='stroke-1'/>Live</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects