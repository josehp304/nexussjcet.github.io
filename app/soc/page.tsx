import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

import { Brain, BrainCircuit, CalendarDays, Code2, Palette, PanelTop, Rocket, Terminal} from 'lucide-react';

type Project = {
    name: string;
    description: string;
    icon: LucideIcon;
    color: string;
    link:string;
  };
  
  const projects: Project[] = [
    {
      name: 'The Nexus Website',
      description: 'The official webiste Nexus sjcet ',
      icon: PanelTop,
      color: 'text-blue-500',
      link:"https://github.com/nexussjcet/nexussjcet.github.io"
    },
    {
      name: 'Nexus Spaces',
      description: 'AI driven social media for SJCET',
      icon: BrainCircuit,
      color: 'text-purple-500',
      link:"https://github.com/nexussjcet/nexus-spaces"
    },
    {
      name: 'SJCET Events',
      description: 'An event manager for SJCET',
      icon: CalendarDays,
      color: 'text-green-500',
      link:"https://github.com/alvin-dennis/Sjcet-Events"
    },

  ];

export default function Page() {
    return <div className="w-full min-h-screen flex flex-col text-white scroll-smooth">
        <div className="relative flex flex-col gap-10 justify-center items-center w-full h-screen">
            <Image src={"/soc/ai.webp"} width={1920} height={1080} alt="Big ass robot" className="w-full h-full object-cover absolute -z-10 opacity-50 bg-green-950" />
            <Image src="/soc/grid.webp" width={1920} height={1080} alt="grid" className="absolute -z-10 md:w-1/2 opacity-65" />
            <h1 className="text-3xl md:text-4xl text-center font-medium">Season of Commits</h1>
            <div className="flex flex-row gap-8 items-center text-center">
                <h1 className="max-w-28 md:text-xl">Contribute to exciting projects</h1>
                <Image src="/soc/soc.webp" alt="soc" width={200} height={200} className="w-20 md:w-32 aspect-square" />
                <h1 className="max-w-28 md:text-xl">Or start your own!</h1>
            </div>
            <div className="flex flex-row gap-4">
                <Link href="/soc/register">
                    <Button className="rounded-full bg-green-900 hover:bg-green-700">Get started</Button>
                </Link>
                <Link href="#projects">
                    <Button className="rounded-full bg-green-900 hover:bg-green-700">Visit our projects</Button>
                </Link>
            </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 p-10 w-full bg-white text-black">
            <div id="projects"></div>
            <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Projects You Can Contribute To
        </h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.name}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col justify-between "
              >
                <div className="p-6 ">
                  <div className="flex items-center space-x-4">
                    <div className={`${project.color} p-3 rounded-lg bg-gray-50`}>
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 ">
                    <Link href ={project.link}>
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium ">
                    Github link →
                  </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <Link href="mailto:nexus@sjcetpalai.ac.in" className="underline block text-center mt-8">
                    Want to be a maintainer? Let us know! (email: nexus@sjcetpalai.ac.in)
                </Link>
      </div>
            <div className="flex flex-col w-full">
                <h1 className="text-xl font-bold">Frequently Asked Questions</h1>
                <Accordion type="single" collapsible>
                    <AccordionItem value="1">
                        <AccordionTrigger>What's this event about?</AccordionTrigger>
                        <AccordionContent>
                            Season of Commits is a month-long celebration of open-source contributions. Whether you're an experienced developer, a beginner looking to make your first pull request, or someone with a project to share, this event provides resources, mentorship, and a collaborative environment to help you succeed.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="2">
                        <AccordionTrigger>Who can join?</AccordionTrigger>
                        <AccordionContent>
                            Anyone with an interest in coding, open source, or collaboration can join! Whether you're a student, professional, or hobbyist, there's a space for you. Beginners are especially encouraged to participate and explore the world of open source.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="3">
                        <AccordionTrigger>Are there any prizes?</AccordionTrigger>
                        <AccordionContent>
                            Yes! Participants with the highest number of quality commits will be eligible for a cash prize of 2000 INR.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="4">
                        <AccordionTrigger>What do I gain from this event?</AccordionTrigger>
                        <AccordionContent>
                            By joining Season of Commits, you'll gain hands-on experience in open source development, build connections with like-minded contributors, and enhance your coding and collaboration skills. You'll also have the opportunity to grow your portfolio, increasing your chances of being hired.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="5">
                        <AccordionTrigger>Do I need to know how to code?</AccordionTrigger>
                        <AccordionContent>
                            No! While code contributions are the best way to contribute, there is also a need of designers, technical writers(people who write documentation) and beta testers(People who test the project and report issues.)
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="5">
                        <AccordionTrigger>What should I work on?</AccordionTrigger>
                        <AccordionContent>
                            Look for unsolved issues in the issues tab, or create a new issue with the "question" label if you have something specific in mind.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </div>
}