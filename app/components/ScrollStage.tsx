export default function ScrollStage() {
  return (
    <section
      id="statement"
      aria-label="Brand Philosophy"
      className="relative z-10 w-full bg-off-white pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-36 text-center"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <h2 className="font-display mx-auto max-w-5xl text-center text-[clamp(2.75rem,7.2vw,6.75rem)] leading-[0.98] font-normal tracking-[-0.03em] text-[#141c18]">
          <span className="block">
            We engineer the{" "}
            <span className="text-krison italic">precision</span>
          </span>
          <span className="block">
            that keeps{" "}
            <span className="text-krison italic">every road</span>
          </span>
          <span className="block">moving forward.</span>
        </h2>
      </div>
    </section>
  );
}
