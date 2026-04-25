export default function Page(): React.ReactElement {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-indigo-900 mb-4">
          Hello World
        </h1>
        <p className="text-lg sm:text-xl text-indigo-700">
          Welcome to your Next.js application
        </p>
      </div>
    </main>
  );
}
