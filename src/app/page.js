"use client";

import { useState, useEffect } from "react";
import {
  motion,
  useAnimation,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  ExternalLink,
  Download,
} from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.8]);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
    document.body.className = isDarkMode ? "dark" : "light";
  }, [controls, isDarkMode]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-200 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-zinc-600 dark:bg-zinc-400 z-50"
          style={{ scaleX: scrollYProgress }}
        />

        <header className="fixed w-full z-40 bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-md">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <motion.h1
              className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-zinc-600 via-zinc-700 to-zinc-800 dark:from-zinc-300 dark:via-zinc-200 dark:to-zinc-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Qitmeer Raza
            </motion.h1>
            <div className="hidden md:flex space-x-8 items-center">
              {["About", "Skills", "Projects", "Education", "Contact"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors text-lg font-medium relative group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-600 dark:bg-zinc-400 transition-all group-hover:w-full"></span>
                  </motion.a>
                )
              )}
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4" />
                <Switch
                  checked={isDarkMode}
                  onCheckedChange={() => setIsDarkMode(!isDarkMode)}
                />
                <Moon className="h-4 w-4" />
              </div>
            </div>
            <div className="md:hidden flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4" />
                <Switch
                  checked={isDarkMode}
                  onCheckedChange={() => setIsDarkMode(!isDarkMode)}
                />
                <Moon className="h-4 w-4" />
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </nav>
        </header>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-zinc-50/95 dark:bg-zinc-900/95 z-30 flex flex-col items-center justify-center space-y-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {["About", "Skills", "Projects", "Education", "Contact"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-4xl text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item}
                  </motion.a>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <main className="pt-20">
          <motion.section
            className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
            style={{ opacity, scale }}
          >
            <motion.div
              className="text-center z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.h2
                className="text-7xl md:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-600 via-zinc-700 to-zinc-800 dark:from-zinc-300 dark:via-zinc-200 dark:to-zinc-100"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
              >
                Qitmeer Raza
              </motion.h2>
              <motion.p
                className="text-2xl md:text-4xl text-zinc-700 dark:text-zinc-300 mb-12 font-light"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.6, -0.05, 0.01, 0.99],
                }}
              >
                Frontend Web Developer | React, Next.js & JavaScript{" "}
              </motion.p>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.6, -0.05, 0.01, 0.99],
                }}
              >
                <Button
                  asChild
                  variant="outline"
                  className="text-lg px-8 py-6 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 dark:bg-zinc-200 dark:hover:bg-zinc-300 dark:text-zinc-800 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-zinc-300/20 dark:hover:shadow-zinc-700/20"
                >
                  <a href="#contact">Get in Touch</a>
                </Button>
                <Button
                  variant="outline"
                  className="text-lg px-8 mx-4 py-6 border-zinc-800 text-zinc-800 hover:bg-zinc-800 hover:text-zinc-100 bg-transparent  dark:text-zinc-100 dark:hover:text-zinc-800 dark:hover:hover:bg-zinc-100 rounded-full transition-all duration-300"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="h-12 w-12 text-zinc-600 dark:text-zinc-400" />
            </motion.div>
          </motion.section>

          <motion.section
            id="about"
            className="py-20 bg-zinc-100 dark:bg-zinc-800"
            {...fadeInUp}
          >
            <div className="container mx-auto px-6">
              <h3 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-zinc-600 via-zinc-700 to-zinc-800 dark:from-zinc-300 dark:via-zinc-200 dark:to-zinc-100">
                About Me
              </h3>
              <div className="max-w-3xl mx-auto space-y-6 text-zinc-700 dark:text-zinc-300">
                <motion.p
                  className="text-xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  I am a passionate front-end developer with a keen interest in
                  creating visually appealing and user-friendly websites. I
                  specialize in React.js, Next.js, and JavaScript, along with
                  expertise in styling frameworks like Tailwind CSS.
                </motion.p>
                <motion.p
                  className="text-xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  I thrive on transforming creative ideas into functional web
                  applications and am always eager to learn new technologies to
                  enhance my skills. Currently, I am advancing my knowledge
                  through a Full Stack Development course at Saylani Mass IT
                  Training, where I&apos;m exploring back-end development and
                  expanding my proficiency in the MERN stack.
                </motion.p>
                <motion.p
                  className="text-xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  My approach to development is centered around simplicity,
                  efficiency, and collaboration. I believe in the power of
                  teamwork to create impactful solutions and continuously strive
                  to improve my coding practices to contribute to exciting
                  projects in the tech world.
                </motion.p>
              </div>
            </div>
          </motion.section>

          <motion.section id="skills" className="py-20" {...fadeInUp}>
            <div className="container mx-auto px-6">
              <h3 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-zinc-600 via-zinc-700 to-zinc-800 dark:from-zinc-300 dark:via-zinc-200 dark:to-zinc-100">
                Skills
              </h3>
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                variants={stagger}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  "HTML",
                  "CSS",
                  "JavaScript (ES6+)",
                  "TypeScript",
                  "Bootstrap",
                  "Tailwind CSS",
                  "Shadcn",
                  "React.js",
                  "Next.js",
                  "Vite.js",
                  "Firebase",
                  "Git & GitHub",
                ].map((skill) => (
                  <motion.div
                    key={skill}
                    className="bg-zinc-800  dark:bg-zinc-200 rounded-lg p-6 text-center shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-zinc-300/20 dark:hover:shadow-zinc-600/20"
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                  >
                    <span className="text-xl font-semibold dark:text-zinc-800 text-zinc-100">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            id="projects"
            className="py-20 bg-zinc-100 dark:bg-zinc-800"
            {...fadeInUp}
          >
            <div className="container mx-auto px-6">
              <h3 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-zinc-600 via-zinc-700 to-zinc-800 dark:from-zinc-300 dark:via-zinc-200 dark:to-zinc-100">
                Projects
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-zinc-50 dark:bg-zinc-700 border-zinc-200 dark:border-zinc-600 overflow-hidden group hover:shadow-xl hover:shadow-zinc-300/20 dark:hover:shadow-zinc-600/20 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <Image
                        src="https://i.ibb.co/Vx7XrVB/main-screen.png"
                        alt="Multiple Task Manager"
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-zinc-900 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="space-x-4">
                          <Button
                            asChild
                            variant="outline"
                            className="dark:text-zinc-100 border-zinc-100 hover:bg-zinc-100 dark:border-none dark:hover:text-zinc-900 text-zinc-900"
                          >
                            <a
                              href="https://github.com/iamqitmeer/finance-management"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="dark:text-zinc-100 border-zinc-100 hover:bg-zinc-100 dark:border-none dark:hover:text-zinc-900 text-zinc-900"
                          >
                            <a
                              href="https://finance-management-qitmeer.vercel.app"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl text-zinc-800 dark:text-zinc-100">
                        Financial Management Application{" "}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                        Manage expenses, track income, calculate taxes, and plan
                        budgets effectively.
                      </p>
                      <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                        <span className="font-semibold">Tools used:</span>{" "}
                        React, CSS, Redux & Firebase{" "}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-zinc-50 dark:bg-zinc-700 border-zinc-200 dark:border-zinc-600 overflow-hidden group hover:shadow-xl hover:shadow-zinc-300/20 dark:hover:shadow-zinc-600/20 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <Image
                        src="https://i.ibb.co/fQG0BMP/ecommerce.png"
                        alt="Multiple Task Manager"
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-zinc-900 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="space-x-4">
                          <Button
                            asChild
                            variant="outline"
                            className="dark:text-zinc-100 border-zinc-100 hover:bg-zinc-100 dark:border-none dark:hover:text-zinc-900 text-zinc-900"
                          >
                            <a
                              href="https://github.com/iamqitmeer/SMIT-0002-WMA-Batch-11-2024-Training/tree/main/SMIT%20Projects/final_frontend_ecommerce"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="dark:text-zinc-100 border-zinc-100 hover:bg-zinc-100 dark:border-none dark:hover:text-zinc-900 text-zinc-900"
                          >
                            <a
                              href="https://ecommerce-react-two-alpha.vercel.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl text-zinc-800 dark:text-zinc-100">
                        E-commerce Website{" "}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                        A full-featured online store with admin controls for
                        product management.
                      </p>
                      <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                        <span className="font-semibold">Tools used:</span>{" "}
                        React.js, Firebase, Tailwind CSS, NextUI{" "}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-zinc-50 dark:bg-zinc-700 border-zinc-200 dark:border-zinc-600 overflow-hidden group hover:shadow-xl hover:shadow-zinc-300/20 dark:hover:shadow-zinc-600/20 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <Image
                        src="https://i.ibb.co/tZyq91Y/multi-task-manager.png"
                        alt="Multiple Task Manager"
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-zinc-900 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="space-x-4">
                          <Button
                            asChild
                            variant="outline"
                            className="dark:text-zinc-100 border-zinc-100 hover:bg-zinc-100 dark:border-none dark:hover:text-zinc-900 text-zinc-900"
                          >
                            <a
                              href="https://github.com/iamqitmeer/multiple-task-manager"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="dark:text-zinc-100 border-zinc-100 hover:bg-zinc-100 dark:border-none dark:hover:text-zinc-900 text-zinc-900"
                          >
                            <a
                              href="https://multi-task-manager.vercel.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl text-zinc-800 dark:text-zinc-100">
                        Multiple Task Manager
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                        A Functional Multiple Task Manager that organizes tasks
                        by days, allowing users to add and manage separate
                        to-dos for each day of the week.
                      </p>
                      <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                        <span className="font-semibold">Tools used:</span>{" "}
                        React.js, Tailwind CSS
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-zinc-50 dark:bg-zinc-700 border-zinc-200 dark:border-zinc-600 overflow-hidden group hover:shadow-xl hover:shadow-zinc-300/20 dark:hover:shadow-zinc-600/20 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <Image
                        src="https://i.ibb.co/cyxbkhb/weather.png"
                        alt="Multiple Task Manager"
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-zinc-900 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="space-x-4">
                          <Button
                            asChild
                            variant="outline"
                            className="dark:text-zinc-100 border-zinc-100 hover:bg-zinc-100 dark:border-none dark:hover:text-zinc-900 text-zinc-900"
                          >
                            <a
                              href="https://github.com/iamqitmeer/multiple-task-manager"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="dark:text-zinc-100 border-zinc-100 hover:bg-zinc-100 dark:border-none dark:hover:text-zinc-900 text-zinc-900"
                          >
                            <a
                              href="https://multi-task-manager.vercel.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl text-zinc-800 dark:text-zinc-100">
                        Todo List App
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                        A Functional Multiple Task Manager that organizes tasks
                        by days, allowing users to add and manage separate
                        to-dos for each day of the week.
                      </p>
                      <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                        <span className="font-semibold">Tools used:</span>{" "}
                        React.js, Tailwind CSS
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </motion.section>

          <motion.section id="education" className="py-20" {...fadeInUp}>
            <div className="container mx-auto px-6">
              <h3 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-zinc-600 via-zinc-700 to-zinc-800 dark:from-zinc-300 dark:via-zinc-200 dark:to-zinc-100">
                Education & Certifications
              </h3>
              <div className="space-y-12">
                <motion.div
                  className="bg-zinc-50 dark:bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-zinc-300/20 dark:hover:shadow-zinc-600/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">
                    GBCHS College Korangi No 3
                  </h4>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    Intermediate in Pre-Engineering (2023 - ongoing)
                  </p>
                </motion.div>
                <motion.div
                  className="bg-zinc-50 dark:bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-zinc-300/20 dark:hover:shadow-zinc-600/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">
                    Government Boys Secondary School, KTS-11
                  </h4>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    Completed Matriculation in Science (2021 – 2023)
                  </p>
                </motion.div>
                <motion.div
                  className="bg-zinc-50 dark:bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-zinc-300/20 dark:hover:shadow-zinc-600/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">
                    Saylani Mass IT Training (SMIT)
                  </h4>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    Certification in Full Stack Development (2023 - ongoing)
                  </p>
                  <ul className="list-disc list-inside mt-2 text-zinc-600 dark:text-zinc-300">
                    <li>
                      Focus on front-end technologies: HTML, CSS, JavaScript,
                      React.js, and Next.js
                    </li>
                    <li>
                      Learning back-end development and MERN stack technologies
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  className="bg-zinc-50 dark:bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-zinc-300/20 dark:hover:shadow-zinc-600/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">
                    SIMSAT COMPUTER ACADEMY
                  </h4>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    Certification in PCIT (2022 - 2023)
                  </p>
                  <ul className="list-disc list-inside mt-2 text-zinc-600 dark:text-zinc-300">
                    <li>
                      Covered basics of Designing, Development, Accounting, and
                      Complete MS Office suite
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="contact"
            className="py-20 bg-zinc-100 dark:bg-zinc-800"
            {...fadeInUp}
          >
            <div className="container mx-auto px-6">
              <h3 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-zinc-600 via-zinc-700 to-zinc-800 dark:from-zinc-300 dark:via-zinc-200 dark:to-zinc-100">
                Get in Touch
              </h3>
              <Card className="max-w-2xl mx-auto bg-zinc-50 dark:bg-zinc-700 border-zinc-200 dark:border-zinc-600 shadow-xl hover:shadow-2xl hover:shadow-zinc-300/20 dark:hover:shadow-zinc-600/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-3xl text-zinc-800 dark:text-zinc-100">
                    Contact Me
                  </CardTitle>
                  <CardDescription className="text-zinc-600 dark:text-zinc-300">
                    Fill out the form below to send me a message.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-zinc-700 dark:text-zinc-200"
                        >
                          Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-600 text-zinc-800 dark:text-zinc-100 focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-zinc-700 dark:text-zinc-200"
                        >
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className="bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-600 text-zinc-800 dark:text-zinc-100 focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-zinc-700 dark:text-zinc-200"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        className="bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-600 text-zinc-800 dark:text-zinc-100 focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400"
                      />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-100 dark:bg-zinc-200 dark:hover:bg-zinc-300 dark:text-zinc-800 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-300/20 dark:hover:shadow-zinc-700/20">
                    Send Message
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </motion.section>
        </main>

        <footer className="bg-zinc-50 dark:bg-zinc-900 py-8">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-600 dark:text-zinc-400">
              &copy; 2024 Qitmeer Raza. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
