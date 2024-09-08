import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import SectionLinks from "@/components/section-links";
import SocialLinks from "@/components/social-links";
import TechStack from "@/components/tech-stack";
const heads = ['FullStack Developer', 'Cross-platform Developer', 'Computer Science Graduate']

const summary = 'A jack of all trades developer who loves to learn new technologies and build stuffs'
export default function Home() {
  return (
    <div className="flex justify-center gap-5 max-h-screen">

      {/* profile name, summary section */}
      <section className="sticky top-0 w-[70rem] h-screen px-20 pt-10">
        <h1
          className="font-bold pb-8
          lg:text-6xl
          md:text-5xl
          "
        >Ian Troy Pahilga</h1>
        <div className="flex">
          {
            heads.map((head, index) => (
              <div key={index}
                className="flex mr-5 font-semibold
              lg:text-xl
              "
              >
                <h2>{head}</h2>
                {/* line to seperate */}
                {
                  index < heads.length - 1 && (
                    <div className="w-1 h-full bg-black"></div>
                  )
                }
              </div>
            ))
          }
        </div>
        <p className="lg:text-[1.2rem] pt-5 pb-16">
          {summary}
        </p>

        {/*links section*/}
        <SectionLinks />

        {/* tech stacks */}
        <TechStack />

        {/* social links */}
        <SocialLinks />
      </section>

      {/* other contents */}
      <section id="scroll-section" className="z-10 w-[70rem] p-10 overflow-auto">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </section>
    </div>
  );
}
