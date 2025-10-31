import React from "react";
import Image from "next/image";
import { ArrowRight, FolderGit } from "lucide-react";

const Project1Image = "/Images/Project1.jpeg";
const Project2Image = "/Images/Project2.png";
const ReactImage = "/Images/React.png";
const PythonImage = "/Images/Python.png";
const NodeJSImage = "/Images/Node.png";
const MongoDBImage = "/Images/MongoDB.png";
const ExpresJSImage = "/Images/Expressjs.png";

type ProjectDetails = {
  ProjectName: string;
  ProjectDate: string;
  ProjectDescription: string;
  ProjectImageUrl: string;
  ProjectCaseStudyUrl: string;
  ProjectGitUrl: string;
  ProjectLiveUrl: string;
  ProjectTechStack1: string;
  ProjectTechStackName1: string;
  ProjectTechStack2: string;
  ProjectTechStackName2: string;
  ProjectTechStack3: string;
  ProjectTechStackName3: string;
  ProjectTechStack4: string;
  ProjectTechStackName4: string;
};

const projects: ProjectDetails[] = [
  // Project 1 Details
  {
    ProjectName: "NextGen Medicine Recommendation system",
    ProjectDate: "June 2025",
    ProjectDescription:
      "A comprehensive full-stack web application designed to recommend personalized alternative medicines to users by analyzing their symptoms, health conditions, and personal preferences. The system utilizes machine learning algorithms to interpret user input and generate accurate, data-driven suggestions for suitable remedies.",
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
    ProjectDate: "Dec 2024",
    ProjectDescription:
      "Notify is more than just a note-taking app — it's your personal productivity companion. Designed with a perfect blend of simplicity and power, Notify helps you capture ideas, organize thoughts, and manage tasks effortlessly. Whether you're jotting down quick notes or structuring detailed plans, Notify provides a smooth, intuitive experience tailore",
    ProjectImageUrl: Project2Image,
    ProjectCaseStudyUrl: "THIS SHOULD GIVEN LATER",
    ProjectGitUrl: "gitlink",
    ProjectLiveUrl: "",
    ProjectTechStack1: ReactImage,
    ProjectTechStackName1: "React",
    ProjectTechStack2: ExpresJSImage,
    ProjectTechStackName2: "ExpressJS",
    ProjectTechStack3: NodeJSImage,
    ProjectTechStackName3: "NodeJS",
    ProjectTechStack4: MongoDBImage,
    ProjectTechStackName4: "MongoDB",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-20 mt-10 md:mt-10 px-0 md:px-0">
      {/* Project image */}
      {projects.map((project) => (
        <div
          key={project.ProjectName}
          className={`flex flex-col items-center gap-6`}
        >
          <div className={`w-full flex`}>
            <Image
              className="rounded-2xl"
              src={project.ProjectImageUrl}
              alt={project.ProjectName}
              width={1000}
              height={350}
            />
          </div>

          {/* details  */}
          <div className="flex flex-col gap-5 w-full">
            <div className="flex-col md:flex justify-between items-center">
              <h2 className="text-md md:text-2xl geist-font-bold">
                {project.ProjectName}
              </h2>
              <p className="text-sm md:text-md text-gray-500 mb-2">
                {project.ProjectDate}
              </p>
            </div>

            <p className="mb-4 md:pr-5 text-sm geist-font-bold text-gray-600">
              {project.ProjectDescription}
            </p>

            {/* buttons */}
            <div className="flex justify-between items-center">
              <button className="bg-gray-200 hover:bg-white flex justify-center items-center rounded-2xl px-6 py-3 md:px-10 md:py-3 geist-font-bold text-sm cursor-pointer">
                See More
                <ArrowRight className="w-6 h-4" />
              </button>
              <div className="flex gap-6">
                <button className="hover:bg-white flex justify-center items-center rounded-2xl px-6 py-3 md:px-10 md:py-3 geist-font-bold text-sm cursor-pointer">
                  Repository
                  <FolderGit className="w-6 h-4" />
                </button>
                <button className="flex items-center gap-2 geist-font-bold text-sm md:text-md text-green-500">
                  Live
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
