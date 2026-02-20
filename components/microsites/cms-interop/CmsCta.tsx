export default function CmsCta() {
  return (
    <section id="cta-section" className="py-16 md:py-24 bg-white">
      <div className="container-site max-w-xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#4D4D4D] mb-3">
          We&rsquo;d love to show you how it&nbsp;works.
        </h2>
        <p className="text-base md:text-lg text-[#7D7D7D] mb-8">
          Twenty minutes. Your stack, your sources.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <a
            href="mailto:warren@themtn.ai?subject=Data%20Foundry%20walkthrough"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#AC1F2D] text-white font-medium rounded-md hover:bg-[#8B1924] transition-colors"
          >
            Schedule a walkthrough
          </a>
          <a
            href="#download"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-[#AC1F2D] font-medium rounded-md border-2 border-[#AC1F2D] hover:bg-[rgba(172,31,45,0.04)] transition-colors"
          >
            Download the white papers
          </a>
        </div>

        <div className="text-sm text-[#7D7D7D] space-y-0.5">
          <p className="font-medium text-[#4D4D4D]">Warren Pettine, MD&ensp;&middot;&ensp;CEO</p>
          <p>warren@themtn.ai</p>
          <p>themtn.ai</p>
        </div>
      </div>
    </section>
  );
}
