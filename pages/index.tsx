export default function Home() {
  return (
    <div className="h-full bg-blue-800">
      {/* Container */}
      <div className="max-w-full h-full px-4">
        {/* Row */}
        <div className="flex flex-wrap h-full justify-center">
          {/* Col */}
          <div className="flex flex-row items-center xl:w-4/12 lg:w-6/12 sm:w-8/12 w-full">
            <div className="w-full">
              <h1 className="mb-12 text-white text-center">Roman Calculator</h1>

              <div className="bg-white rounded-lg p-4">FORM</div>
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
      {/* End Container */}
    </div>
  );
}
