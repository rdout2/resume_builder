import React from "react";
import ContactInfo from "./ContactInfo";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
  skillsdata,
  sectionOrder,
  onDragEnd,
  resumeData,
  setResumeData
}) => {

  const sections = [
    { id: "summary", title: "Summary", content: summarydata },
    { id: "education", title: "Education", content: educationdata },
    { id: "projects", title: "Projects", content: projectsdata },
    { id: "experience", title: "Work Experience", content: workExperiencedata },
    { id: "skills", title: "Technical Skills", content: skillsdata }
  ];

  // Sort sections based on sectionOrder
  const orderedSections = sectionOrder.map(id => 
    sections.find(section => section.id === id)
  );

  const handleInnerDragEnd = (result) => {
    const { destination, source, type } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    if (type === "WORK_EXPERIENCE") {
      const newWorkExperience = [...workExperiencedata];
      const [removed] = newWorkExperience.splice(source.index, 1);
      newWorkExperience.splice(destination.index, 0, removed);
      setResumeData({ ...resumeData, workExperience: newWorkExperience });
    }

    if (type === "PROJECTS") {
      const newProjects = [...projectsdata];
      const [removed] = newProjects.splice(source.index, 1);
      newProjects.splice(destination.index, 0, removed);
      setResumeData({ ...resumeData, projects: newProjects });
    }

    // If it's a section drag
    if (type === "SECTION") {
      onDragEnd(result);
    }
  };

  return (
    <div className="w-full h-full bg-white p-4">
      {/* Header Section - Not Draggable */}
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

      {/* Draggable Sections */}
      <DragDropContext onDragEnd={handleInnerDragEnd}>
        <Droppable droppableId="sections" type="SECTION">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {orderedSections.map((section, index) => (
                <Draggable key={section.id} draggableId={section.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`mb-2 ${snapshot.isDragging ? "bg-gray-50" : ""}`}
                    >
                      {/* Summary Section */}
                      {section.id === "summary" && (
                        <div>
                          <h2 className="section-title border-b-2 border-gray-300 mb-1">Summary</h2>
                          <p className="content">{summarydata}</p>
                        </div>
                      )}

                      {/* Education Section */}
                      {section.id === "education" && (
                        <div>
                          <h2 className="section-title border-b-2 border-gray-300 mb-1">Education</h2>
                          {educationdata.map((edu, idx) => (
                            <div key={idx} className="mb-1">
                              <p className="content font-semibold">{edu.school}</p>
                              <p className="content">{edu.degree}</p>
                              <p className="sub-content font-medium text-gray-600">
                                {new Date(edu.startYear).getFullYear()} - {new Date(edu.endYear).getFullYear()}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Projects Section */}
                      {section.id === "projects" && (
                        <div>
                          <h2 className="section-title border-b-2 border-gray-300 mb-1">Projects</h2>
                          <Droppable droppableId="projects" type="PROJECTS">
                            {(provided) => (
                              <div {...provided.droppableProps} ref={provided.innerRef}>
                                {projectsdata.map((project, idx) => (
                                  <Draggable key={project.name + idx} draggableId={`project-${idx}`} index={idx}>
                                    {(provided, snapshot) => (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className={`mb-2 ${snapshot.isDragging ? "bg-gray-50" : ""}`}
                                      >
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
                                    )}
                                  </Draggable>
                                ))}
                                {provided.placeholder}
                              </div>
                            )}
                          </Droppable>
                        </div>
                      )}

                      {/* Work Experience Section */}
                      {section.id === "experience" && (
                        <div>
                          <h2 className="section-title border-b-2 border-gray-300 mb-1">Work Experience</h2>
                          <Droppable droppableId="work-experience" type="WORK_EXPERIENCE">
                            {(provided) => (
                              <div {...provided.droppableProps} ref={provided.innerRef}>
                                {workExperiencedata.map((work, idx) => (
                                  <Draggable key={work.company + idx} draggableId={`work-${idx}`} index={idx}>
                                    {(provided, snapshot) => (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className={`mb-2 ${snapshot.isDragging ? "bg-gray-50" : ""}`}
                                      >
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
                                    )}
                                  </Draggable>
                                ))}
                                {provided.placeholder}
                              </div>
                            )}
                          </Droppable>
                        </div>
                      )}

                      {/* Skills Section */}
                      {section.id === "skills" && (
                        <div>
                          <h2 className="section-title border-b-2 border-gray-300 mb-1">Technical Skills</h2>
                          <p className="content">
                            {skillsdata.find(skill => skill.title === "Technical Skills")?.skills.join(", ")}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TemplateTwo; 