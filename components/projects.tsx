import { motion } from 'framer-motion';
import Link from 'next/link';
import { BriefcaseIcon, CodeIcon, TrophyIcon } from '@/components/ui/svgs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { projects } from '@/utils/projects';

const ProjectsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="projects"
      className="bg-background text-foreground min-h-screen py-12 md:py-24 flex flex-col items-center justify-center"
    >
      <div className="container px-4 md:px-6 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-begin" data-aos="fade-up">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      {project.status === "In Progress" && <BriefcaseIcon className="w-5 h-5 mr-2 inline" />}
                      {project.status === "Open" && <CodeIcon className="w-5 h-5 mr-2 inline" />}
                      {project.status === "Completed" && <TrophyIcon className="w-5 h-5 mr-2 inline" />}
                      <span>{project.status}</span>
                    </div>
                    <Link href={project.link} target="_blank">
                      <Button variant="secondary" size="sm">
                        {project.status === "Completed" ? "View" : "Contribute"}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;