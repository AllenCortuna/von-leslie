const DressCode = () => {
  return (
    <div className="relative flex flex-col items-center px-4 py-10 space-y-12 font-sans">
      {/* Background Blob */}
      <div className="absolute inset-0 bg-[#F5F0E7] -z-10" />
      
      {/* Title Blob */}
      <div className="relative bg-[#9CA285] px-12 py-8 text-center max-w-md" 
        style={{
          borderRadius: '60% 40% 50% 45% / 45% 50% 55% 45%',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
        <h2 className="text-lg tracking-wide text-[#422C1D] uppercase font-medium">
          Question
        </h2>
        <p className="text-2xl font-bold text-[#422C1D] mt-3">
          What should I wear?
        </p>
      </div>

      {/* Response Blob */}
      <div className="relative bg-[#9CA285] px-12 py-10 max-w-2xl text-[#422C1D]"
        style={{
          borderRadius: '45% 55% 50% 50% / 50% 45% 55% 45%',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
        <h3 className="text-lg uppercase font-medium mb-6">Response</h3>
        <div className="space-y-5">
          <p className="text-lg">
            Go for <span className="font-semibold">Semi-Formal</span> or{" "}
            <span className="font-semibold">Dressy-Casual</span>.
          </p>
          <p>
            <span className="font-semibold">Gentlemen</span>
            <br />
            Short-sleeve / long-sleeve polo and slacks
          </p>
          <p>
            <span className="font-semibold">Ladies</span>
            <br />
            Cocktail or maxi dresses / blouse and slacks
          </p>
          <p className="font-semibold text-[#422C1D] mt-6">
            Please refrain from wearing jeans, shirts, or any clothes in white,
            red, or black.
          </p>
          <p className="italic">Slacks can go dark tho.</p>
        </div>
      </div>
    </div>
  );
};

export default DressCode;