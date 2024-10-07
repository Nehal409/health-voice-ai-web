const AutomatedContract = () => {
    return (
      <header id="header" className="py-28 md:pt-36 xl:pt-44 xl:pb-32">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="mb-16 xl:mr-12">
            <h1 className="h1-large mb-5 font-semibold">
              Automated Contract Review
            </h1>
            <h1 className="text-4xl mb-5">
              Reduce your non-billable time by up to 25% with Automated Contract
              Review
            </h1>
            <p className="p-large mb-8">
              Our custom AI-driven solution processes legal documents in seconds,
              extracting key insights from multiple formats seamlessly.
            </p>
            <p className="p-large mb-8">
              By integrating directly into your workflow, you can focus more on
              high-value tasks and deliver more to your clients.
            </p>
  
            <a className="btn-solid-lg mt-4" href="#reservation">
              Book a demo
            </a>
          </div>
  
          <div className="xl:text-right">
            <div id="reservation" className="video-responsive">
              <iframe
                src="https://www.youtube.com/embed/kttcDLI_-XQ"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Embedded YouTube Video"
              ></iframe>
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default AutomatedContract;
  