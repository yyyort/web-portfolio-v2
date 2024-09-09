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
    <div className="
    xl:flex xl:flex-row xl:justify-center xl:gap-5 xl:max-h-screen
    mobile_s:flex mobile_s:flex-col mobile_s:justify-center mobile_s:gap-5 mobile_s:max-w-screen mobile_s:overflow-hidden
    ">

      {/* profile name, summary section */}
      <section className="z-10
      xl:sticky xl:top-0 xl:w-[50vw] xl:h-screen xl:px-20 xl:pt-10'
      lg:w-[70rem] lg:pt-10 lg:px-20
      md:px-14 md:pt-5
      mobile_s:flex mobile_s:flex-col mobile_s:justify-center mobile_s:p-5
      ">
        <h1
          className="font-bold
          lg:text-6xl lg:pb-8
          md:text-5xl
          mobile_s:text-3xl mobile_s:pb-5
          "
        >Ian Troy Pahilga</h1>

        {/* headlines */}
        <div className="flex">
          {
            heads.map((head, index) => (
              <div key={index}
                className="flex font-semibold
              md:text-xl
              mobile_s:text-sm
              "
              >
                <h2>{head}</h2>
                {/* line to seperate */}
                {
                  index < heads.length - 1 && (
                    <div className="w-[0.1rem] h-full bg-black 
                    lg:mx-5
                    md:mx-3
                    mobile_s:mx-2
                    "></div>
                  )
                }
              </div>
            ))
          }
        </div>

        {/* summary */}
        <p className="max-w-fit
        md:text-lg
        mobile_s:text-base mobile_s:pt-5 mobile_s:pb-5
        ">
          {summary}
        </p>

        {/*links section*/}
        <SectionLinks 
        className="
        xl:block
        mobile_s:hidden
        "
        />

        {/* tech stacks */}
        <TechStack />

        {/* social links */}
        <SocialLinks />
      </section>

      {/* other contents */}
      <section id="scroll-section" className="
      z-10 overflow-auto min-h-full
      xl:w-[50vw] xl:overflow-auto xl:px-20 xl:py-14
      ">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </section>
    </div>
  );
}
