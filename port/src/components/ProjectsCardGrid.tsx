import ProjectsCard from "./ProjectsCard";

export default function ProjectsCardGrid() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
			<ProjectsCard
				banner="/brainwave.png"
				icon="/brainwave-icon.svg"
				title="BrainWave"
				link="https://brainwave.ai"
				linkLabel="brainwave.ai"
                linkHoverColor="hover:text-blue-400"
				description="Built a high-performance e-commerce platform for Brazil's premier esports organization, handling millions of concurrent users during product drops..."
				tags={[
					{ label: "Vite" },
					{ label: "React.js" },
					{ label: "Tailwind" },
					{ label: "+1", color: "text-purple-400" },
				]}
			/>
		</div>
	);
}