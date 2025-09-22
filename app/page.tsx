export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Maru AI Academy
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Master AI productivity tools and transform your business workflows. 
            Learn from basic AI concepts to advanced team automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Start Learning
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              View Curriculum
            </button>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Beginner Stream</h2>
            <p className="text-gray-600 mb-4">
              Perfect for getting started with AI. Learn the fundamentals of AI productivity, 
              safety, and basic automation.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• AI Made Simple (Foundations & Safety)</li>
              <li>• Prompts that work at work</li>
              <li>• Picking tools & no-code quick wins</li>
              <li>• Your first live workflow (Capstone)</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intermediate Stream</h2>
            <p className="text-gray-600 mb-4">
              For power users ready to scale AI across teams. Advanced workflows, 
              governance, and team automation.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• From ad-hoc prompts to repeatable workflows</li>
              <li>• Semantic search & private knowledge</li>
              <li>• No-code automations that stick</li>
              <li>• Measurement, governance & handover</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
