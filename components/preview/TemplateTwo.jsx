import React from "react";
import ContactInfo from "./ContactInfo";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const TemplateTwo = ({ 
  namedata, 
  positiondata, 
  contactdata, 
  emaildata, 
  addressdata, 
  telicon, 
  emailicon, 
  addressicon,
  summarydata,
  educationdata,
  projectsdata,
  workExperiencedata,
  skillsdata
}) => {
  return (
    <div className="w-full h-full bg-white p-4">
      {/* Header Section */}
      <div className="text-center mb-2">
        <h1 className="name">{namedata}</h1>
        <p className="profession">{positiondata}</p>
        <ContactInfo
          mainclass="flex flex-row gap-1 contact justify-center"
          linkclass="inline-flex items-center gap-1"
          teldata={contactdata}
          emaildata={emaildata}
          addressdata={addressdata}
          telicon={telicon}
          emailicon={emailicon}
          addressicon={addressicon}
        />
      </div>

      {/* Summary Section */}
      <div className="mb-2">
        <h2 className="section-title border-b-2 border-gray-300 mb-1">Summary</h2>
        <p className="content">{summarydata}</p>
      </div>

      {/* Education Section */}
      <div className="mb-2">
        <h2 className="section-title border-b-2 border-gray-300 mb-1">Education</h2>
        {educationdata.map((edu, index) => (
          <div key={index} className="mb-1">
            <p className="content font-semibold">{edu.school}</p>
            <p className="content">{edu.degree}</p>
            <p className="sub-content font-medium text-gray-600">
              {new Date(edu.startYear).getFullYear()} - {new Date(edu.endYear).getFullYear()}
            </p>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div className="mb-2">
        <h2 className="section-title border-b-2 border-gray-300 mb-1">Projects</h2>
        {projectsdata.map((project, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <p className="content i-bold">{project.name}</p>
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                    title={project.link}
                  >
                    <FaExternalLinkAlt size={12} />
                  </Link>
                )}
              </div>
              <p className="sub-content font-medium text-gray-600">
                {new Date(project.startYear).getFullYear()} - {new Date(project.endYear).getFullYear()}
              </p>
            </div>
            <p className="content">{project.description}</p>
            {project.keyAchievements && (
              <ul className="list-disc pl-4 content">
                {project.keyAchievements.split('\n').map((achievement, i) => (
                  <li key={i} className="content">{achievement}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Work Experience Section */}
      <div className="mb-2">
        <h2 className="section-title border-b-2 border-gray-300 mb-1">Work Experience</h2>
        {workExperiencedata.map((work, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between items-center">
              <p className="content">
                <span className="font-bold">{work.company}</span>
                <span className="mx-1">-</span>
                <span>{work.position}</span>
              </p>
              <p className="sub-content font-medium text-gray-600">
                {new Date(work.startYear).getFullYear()} - {new Date(work.endYear).getFullYear()}
              </p>
            </div>
            <p className="content">{work.description}</p>
            <p className="content">{work.keyAchievements}</p>
          </div>
        ))}
      </div>

      {/* Technical Skills Section */}
      <div className="mb-2">
        <h2 className="section-title border-b-2 border-gray-300 mb-1">Technical Skills</h2>
        <p className="content">
          {skillsdata.find(skill => skill.title === "Technical Skills")?.skills.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default TemplateTwo; 